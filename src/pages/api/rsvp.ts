import { google } from "googleapis";
import type { NextApiRequest, NextApiResponse } from "next";

interface RSVPData {
  nombre: string;
  formaPago: "Transferencia" | "Efectivo";
  fecha: string;
}

interface GoogleSheetsResponse {
  success: boolean;
  message: string;
  data?: {
    updatedRange?: string;
    updatedRows?: number;
    note?: string;
    rsvpData?: string[];
  };
}

// Configuración de Google Sheets API
const CREDENTIALS = process.env.GOOGLE_KEY_JSON;

const auth = new google.auth.GoogleAuth({
  credentials: CREDENTIALS ? JSON.parse(CREDENTIALS) : undefined,
  scopes: ["https://www.googleapis.com/auth/spreadsheets"],
});

const sheets = google.sheets({ version: "v4", auth });

// Función para verificar permisos y conexión
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<GoogleSheetsResponse>
) {
  if (req.method !== "POST") {
    return res.status(405).json({
      success: false,
      message: "Método no permitido",
    });
  }

  try {
    const { nombre, formaPago } = req.body as RSVPData;

    if (!nombre || nombre.trim() === "") {
      return res.status(400).json({
        success: false,
        message: "El nombre es requerido",
      });
    }

    if (!formaPago || formaPago.trim() === "") {
      return res.status(400).json({
        success: false,
        message: "La forma de pago es requerida",
      });
    }

    // Datos a enviar a Google Sheets
    const rsvpData = [
      new Date().toLocaleString("es-AR", {
        timeZone: "America/Argentina/Buenos_Aires",
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
      }),
      nombre,
      formaPago,
    ];

    // ID de la hoja de cálculo (debes reemplazar con tu ID real)
    const SPREADSHEET_ID = process.env.GOOGLE_SPREADSHEET_ID;
    const RANGE = "A:C"; // Rango donde escribir los datos

    if (!SPREADSHEET_ID) {
      throw new Error("GOOGLE_SPREADSHEET_ID no está configurado");
    }

    // Verificar conexión y permisos antes de escribir
    console.log("🔍 Verificando conexión con Google Sheets...");

    // Escribir datos en Google Sheets
    const response = await sheets.spreadsheets.values.append({
      spreadsheetId: SPREADSHEET_ID,
      range: RANGE,
      valueInputOption: "RAW",
      insertDataOption: "INSERT_ROWS",
      requestBody: {
        values: [rsvpData],
      },
    });

    return res.status(200).json({
      success: true,
      message: "¡Confirmación registrada exitosamente!",
      data: {
        updatedRange: response.data.updates?.updatedRange || undefined,
        updatedRows: response.data.updates?.updatedRows || undefined,
      },
    });
  } catch (error) {
    console.error("Error en API RSVP:", error);

    return res.status(500).json({
      success: false,
      message: "Error interno del servidor. Por favor intenta nuevamente.",
    });
  }
}
