import { OpenAIStream, StreamingTextResponse } from 'ai';
import { Configuration, OpenAIApi } from 'openai-edge';

// Cargar el contenido del JSON de forma manual (asegúrate de que este JSON esté correctamente ubicado)
const pdfContentText = require('../../../data/pdfContent.json').text;

// Configurar el cliente de OpenAI
const config = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(config);

// Establecer el entorno de ejecución en "edge"
export const runtime = 'edge';

export async function POST(req: Request) {
  const { messages } = await req.json();
  const userQuery = messages[messages.length - 1].content.toLowerCase();

  // Verifica si la consulta del usuario es sobre la plataforma
  if (
    userQuery.includes('curso') ||
    userQuery.includes('categoría') ||
    userQuery.includes('inscripción') ||
    userQuery.includes('tutor') ||
    userQuery.includes('programación') ||
    userQuery.includes('ciberseguridad') ||
    userQuery.includes('devops') ||
    userQuery.includes('inteligencia artificial')
  ) {
    const prompt = `
      Información de la plataforma:
      ${pdfContentText}
      
      Pregunta del usuario: ${userQuery}
      Responde de forma clara y concisa usando la información proporcionada.
    `;

    const response = await openai.createChatCompletion({
      model: 'gpt-3.5-turbo',
      messages: [{ role: 'user', content: prompt }],
      stream: true,
    });

    const stream = OpenAIStream(response);
    return new StreamingTextResponse(stream);
  }

  // Si la consulta no es específica sobre la plataforma, procede normalmente
  const response = await openai.createChatCompletion({
    model: 'gpt-3.5-turbo',
    messages,
    stream: true,
  });

  const stream = OpenAIStream(response);
  return new StreamingTextResponse(stream);
}
