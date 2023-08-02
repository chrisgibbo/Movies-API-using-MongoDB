const { Configuration, OpenAIApi } = require("openai");

const movieRecommendation = async (req, res) => {
  const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
  });
  const openai = new OpenAIApi(configuration);

  const Completion = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: prompt,
  });
  console.log(Completion.data.choices[0].text);

  res.status(200).json({
    status: "Hello from OpenAI",
  });
};

module.exports = movieRecommendation;
