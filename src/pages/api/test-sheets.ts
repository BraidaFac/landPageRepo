import { google } from "googleapis";
import type { NextApiRequest, NextApiResponse } from "next";
import path from "path";

// Configuración de Google Sheets API
// Configuración de Google Sheets API
const CREDENTIALS_PATH = path.join(
  process.cwd(),
  "t-collective-470322-h5-3f96bb04852a.json"
);
const auth = new google.auth.GoogleAuth({
  keyFile: CREDENTIALS_PATH,
  scopes: ["https://www.googleapis.com/auth/spreadsheets"],
});

const sheets = google.sheets({ version: "v4", auth });

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "GET") {
    return res.status(405).json({ message: "Método no permitido" });
  }

  try {
    const SPREADSHEET_ID = process.env.GOOGLE_SPREADSHEET_ID;

    if (!SPREADSHEET_ID) {
      return res.status(400).json({
        error: "GOOGLE_SPREADSHEET_ID no está configurado",
        envVars: {
          projectId: process.env.GOOGLE_PROJECT_ID
            ? "✅ Configurado"
            : "❌ Faltante",
          clientEmail: process.env.GOOGLE_CLIENT_EMAIL
            ? "✅ Configurado"
            : "❌ Faltante",
          spreadsheetId: "❌ Faltante",
        },
      });
    }

    console.log("🔍 Probando conexión con Google Sheets...");
    console.log("📊 Spreadsheet ID:", SPREADSHEET_ID);
    console.log("👤 Client Email:", process.env.GOOGLE_CLIENT_EMAIL);

    // Intentar leer la hoja
    const response = await sheets.spreadsheets.get({
      spreadsheetId: SPREADSHEET_ID,
    });

    console.log("✅ Conexión exitosa!");

    return res.status(200).json({
      success: true,
      message: "Conexión exitosa con Google Sheets",
      data: {
        title: response.data.properties?.title,
        spreadsheetId: SPREADSHEET_ID,
        clientEmail: process.env.GOOGLE_CLIENT_EMAIL,
        sheets: response.data.sheets?.map((sheet) => ({
          title: sheet.properties?.title,
          sheetId: sheet.properties?.sheetId,
        })),
      },
    });
  } catch (error) {
    console.error("❌ Error de conexión:", error);

    return res.status(500).json({
      success: false,
      error: "Error de conexión con Google Sheets",
      details: error instanceof Error ? error.message : "Error desconocido",
      envVars: {
        projectId: process.env.GOOGLE_PROJECT_ID
          ? "✅ Configurado"
          : "❌ Faltante",
        clientEmail: process.env.GOOGLE_CLIENT_EMAIL
          ? "✅ Configurado"
          : "❌ Faltante",
        spreadsheetId: process.env.GOOGLE_SPREADSHEET_ID
          ? "✅ Configurado"
          : "❌ Faltante",
      },
    });
  }
}
