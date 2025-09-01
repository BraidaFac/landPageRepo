# Configuración de Google Sheets API

## Pasos para configurar la conexión con Google Sheets

### 1. Crear un proyecto en Google Cloud Console

1. Ve a [Google Cloud Console](https://console.cloud.google.com/)
2. Crea un nuevo proyecto o selecciona uno existente
3. Habilita la Google Sheets API:
   - Ve a "APIs y servicios" > "Biblioteca"
   - Busca "Google Sheets API"
   - Haz clic en "Habilitar"

### 2. Crear una cuenta de servicio

1. Ve a "APIs y servicios" > "Credenciales"
2. Haz clic en "Crear credenciales" > "Cuenta de servicio"
3. Completa la información:
   - Nombre: `rsvp-sheets-api`
   - Descripción: `Cuenta de servicio para RSVP API`
4. Haz clic en "Crear y continuar"
5. En "Otorgar acceso a esta cuenta de servicio":
   - Rol: `Editor`
6. Haz clic en "Listo"

### 3. Generar la clave JSON

1. En la lista de cuentas de servicio, haz clic en la que acabas de crear
2. Ve a la pestaña "Claves"
3. Haz clic en "Agregar clave" > "Crear nueva clave"
4. Selecciona "JSON"
5. Haz clic en "Crear"
6. Se descargará un archivo JSON con las credenciales

### 4. Crear la hoja de cálculo

1. Ve a [Google Sheets](https://sheets.google.com/)
2. Crea una nueva hoja de cálculo
3. En la primera fila, agrega los encabezados:
   - A1: `Nombre`
   - B1: `Forma de Pago`
   - C1: `Fecha`
4. Comparte la hoja con la cuenta de servicio (email que aparece en el JSON)
5. Copia el ID de la hoja de la URL:
   - URL: `https://docs.google.com/spreadsheets/d/SPREADSHEET_ID/edit`
   - Copia el `SPREADSHEET_ID`

### 5. Configurar las variables de entorno

Crea un archivo `.env.local` en la raíz del proyecto con:

```env
# Google Sheets API Configuration
GOOGLE_PROJECT_ID=tu-project-id
GOOGLE_PRIVATE_KEY_ID=tu-private-key-id
GOOGLE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\nTu private key aquí\n-----END PRIVATE KEY-----\n"
GOOGLE_CLIENT_EMAIL=tu-service-account@tu-project.iam.gserviceaccount.com
GOOGLE_CLIENT_ID=tu-client-id
GOOGLE_SPREADSHEET_ID=tu-spreadsheet-id
```

### 6. Estructura de datos

La API escribirá los datos en las siguientes columnas:

- **Columna A**: Nombre del invitado
- **Columna B**: Forma de pago (Transferencia/Efectivo)
- **Columna C**: Fecha y hora de registro

### 7. Prueba la conexión

1. Ejecuta el servidor de desarrollo: `npm run dev`
2. Envía una solicitud POST a `/api/rsvp` con:

```json
{
  "nombre": "Juan Pérez",
  "formaPago": "Transferencia"
}
```

### Notas importantes

- **Seguridad**: Nunca subas el archivo `.env.local` al repositorio
- **Permisos**: La cuenta de servicio debe tener permisos de escritura en la hoja
- **Límites**: Google Sheets API tiene límites de uso, pero son generosos para uso personal
- **Backup**: Considera hacer copias de seguridad regulares de la hoja de cálculo
