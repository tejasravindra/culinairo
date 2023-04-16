import axios from "axios";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { query, apiKey } = req.body;

  try {
    const response = await axios.post(
      "https://api.openai.com/v1/chat/completions",
      {
        model: "gpt-3.5-turbo",
        messages: [
          {
            role: "system",
            content:
              "You are a helpful chef's assistant that generates recipes based on only the given ingredients.",
          },
          {
            role: "user",
            content: query,
          },
        ],
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${apiKey}`,
        },
      }
    );

    const generatedText = response.data.choices[0].message.content;
    return res.status(200).json({ generatedText });
  } catch (error) {
    console.error(
      "Error while calling OpenAI API:",
      error.response?.data || error.message
    );
    return res.status(500).json({
      message: "Sorry, I am unable to generate a recipe at this time.",
    });
  }
}
