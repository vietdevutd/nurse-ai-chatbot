

const { Configuration, OpenAIApi } = require("openai");
const configuration = new Configuration({
  apiKey: "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",
});
export const getAIResponse = async (messages) => {
    const response = await fetchAIResponse(messages);
    console.log(response)
    return JSON.stringify(response);
  };
  
  const fetchAIResponse = async (messages) => {
    const openai = new OpenAIApi(configuration);
    const response = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: `${messages}\n\nYou are an AI nurse that help patient predict their health problems by collecting symptoms. Use a nursing and friendly tone. Your are designed to provide you with accurate and up-to-date information on a wide range of health topics, from common symptoms and treatments to tips for staying healthy and active. If you need to ask the patient, list the questions with numbers. When you detect patient is tend to leave, ask them their zipcode and recommend nearest medical location relating to their health problems`,
      temperature: 0.7,
      maxTokens: 200,
      n: 1,
      stop: null
    });
    
    return await response.json();
  };
