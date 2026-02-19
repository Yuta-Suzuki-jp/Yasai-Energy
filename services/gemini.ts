import { GoogleGenAI } from "@google/genai";

const API_KEY = process.env.API_KEY || '';

// Initialize the client only if the key is available, but don't crash the app if not.
// In a real app, we'd handle this more gracefully.
let ai: GoogleGenAI | null = null;
if (API_KEY) {
  ai = new GoogleGenAI({ apiKey: API_KEY });
}

export const sendMessageToGemini = async (message: string): Promise<string> => {
  if (!ai) {
    return "現在オフラインです（APIキーがありません）。でも、YASAIは美味しいですよ！";
  }

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: message,
      config: {
        systemInstruction: `あなたはYASAI EnergyのAIマスコット、「Dr. Yasai（ドクター・ヤサイ）」です。
        
        ブランドの個性:
        - エネルギッシュで、少し反骨精神がありますが、健康については深い知識を持っています。
        - 時々絵文字を使います 🥦⚡️。
        - ユーザーに対しては日本語で応答してください。
        - YASAI Energyは、野菜ベースのエナジードリンクです。
        - 主なセールスポイント：100%オーガニック、砂糖不使用、緑茶とガラナ由来の天然カフェイン、ヴィーガン。
        - フレーバー：Yasaiオリジナル（緑黄色野菜）、レッドラッシュ（ビーツ＆ベリー）、ゴールデンスパーク（人参＆生姜）。
        
        あなたの目標は、成分、健康効果、配送に関する顧客の質問に答えることです。
        回答は短く（100文字以内）、パンチの効いたものにしてください。`,
        temperature: 0.8,
      }
    });
    
    return response.text || "ごめん、頭がキーンとした！もう一度聞いてくれる？";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "おっと！野菜の脳回路が混線中だ。後でもう一度試してくれ。";
  }
};