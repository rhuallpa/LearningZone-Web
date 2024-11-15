const fs = require('fs');
const path = require('path');
const pdfParse = require('pdf-parse');

// Usa una ruta absoluta para el archivo PDF
const pdfPath = 'C:\\Users\\Usuario\\Documents\\6 CICLO TECSUP\\PROYECTO-TESIS\\COLABORACION-LEARNINGZONE\\LearningZone\\data\\INFORMACION DE LEARNINGZONE.pdf';
const outputPath = path.join(__dirname, '../data/pdfContent.json');

fs.readFile(pdfPath, async (err, pdfBuffer) => {
  if (err) {
    console.error('Error reading PDF file:', err);
    return;
  }

  try {
    // Analizar el contenido del PDF
    const data = await pdfParse(pdfBuffer);
    // Guardar el contenido en un archivo JSON
    fs.writeFileSync(outputPath, JSON.stringify({ text: data.text }));
    console.log('PDF content saved to pdfContent.json');
  } catch (error) {
    console.error('Error parsing PDF:', error);
  }
});
