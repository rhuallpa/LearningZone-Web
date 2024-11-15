import fs from 'fs';
import path from 'path';
import pdfParse from 'pdf-parse';

export async function loadPdfData(): Promise<string> {
  const pdfPath = path.resolve(__dirname, 'INFORMACION DE LEARNINGZONE.pdf');
  const pdfBuffer = fs.readFileSync(pdfPath);
  const data = await pdfParse(pdfBuffer);
  return data.text; // Esto devuelve el texto extraído del PDF
}
