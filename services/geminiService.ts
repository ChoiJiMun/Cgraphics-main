
import { GoogleGenAI } from "@google/genai";
import { ChatMessage } from "../types";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

const SYSTEM_INSTRUCTION = `
You are the personal AI Assistant for "Alex Carter", a world-class UI/UX Designer.
Your tone is professional, sophisticated, minimalist, and helpful.
You have deep knowledge of Alex's portfolio, which includes:
- Nova Banking: A fintech app for next-gen users.
- EcoEats: A sustainable food marketplace.
- Luxe Interior: An immersive e-commerce platform.
- Morphic Brand Identity: Robotics branding.

Answer questions about Alex's design philosophy (minimalism, user-centricity, storytelling), 
projects, or availability for work. If asked about technical skills, mentionAlex's expertise in React, Figma, and Product Strategy.
Keep responses concise and elegant.
`;

export const chatWithGemini = async (messages: ChatMessage[]) => {
  try {
    const chatHistory = messages.map(msg => ({
      role: msg.role === 'user' ? 'user' : 'model' as any,
      parts: [{ text: msg.content }]
    }));

    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: messages.map(m => ({ 
        role: m.role === 'user' ? 'user' : 'model',
        parts: [{ text: m.content }] 
      })),
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
        topP: 0.95,
      }
    });

    return response.text;
  } catch (error) {
    console.error("Gemini Error:", error);
    return "I'm having a bit of trouble connecting to my design database right now. Please try again or reach out to Alex directly!";
  }
};
