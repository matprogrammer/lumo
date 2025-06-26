import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const { message, conversationHistory = [] } = req.body;

    if (!message) {
      return res.status(400).json({ error: "Se requiere un mensaje" });
    }

    // URL del backend proxy
    const backendUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001';
    
    try {
      console.log(`🔄 Enviando solicitud a backend: ${backendUrl}/api/chat`);
      
      const response = await fetch(`${backendUrl}/api/chat`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message, conversationHistory }),
      });
      
      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(`Backend error: ${response.status} - ${errorData.error || 'Error desconocido'}`);
      }
      
      const data = await response.json();
      return res.status(200).json(data);
      
    } catch (error) {
      console.error('❌ Error conectando con backend:', error);
      
      return res.status(500).json({ 
        error: "Lo siento, tuve un problema para conectar con el servidor. ¿Está ejecutándose el backend?",
        details: error instanceof Error ? error.message : "Error desconocido",
        backendUrl: backendUrl
      });
    }

  } catch (error) {
    console.error("Error al procesar la solicitud:", error);
    res.status(500).json({
      error: "Error interno del servidor",
      message: error instanceof Error ? error.message : "Error desconocido",
    });
  }
}
