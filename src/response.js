
import openai from 'openai';



export const getAIResponse = async (messages) => {
    const response = await fetchAIResponse(messages);
    return response.data.choices[0].text;
  };
  
  const fetchAIResponse = async (messages) => {
    // const response = await fetch('https://api.respell.ai/v1/run', {
    //   method: 'POST',
    //   headers: {
    //     // This is your API key
    //     authorization: 'Bearer 433b0518-0519-42e9-af5d-224987f1a62a',
    //     accept: 'application/json',
    //     'content-type': 'application/json',
    //   },
    //   body: JSON.stringify({
    //     spellId: 'aIg_DkelOI2izBtAELyQF',
    //     // This field can be omitted to run the latest published version
    //     spellVersionId: '3o8dVhMLvggZVKFt8JOUk',
    //     // Fill in dynamic values for each of your 2 input blocks
    //     inputs: {
    //       user: messages,
    //       prompt: 'You are an AI nurse that help patient predict their health problems by collecting symptoms. Use a nursing and friendly tone. Your are designed to provide you with accurate and up-to-date information on a wide range of health topics, from common symptoms and treatments to tips for staying healthy and active. If you need to ask the patient, list the questions with numbers. When you detect patient is tend to leave, ask them their zipcode and recommend nearest medical location relating to their health problems',
    //     },
    //   }),
    // });
    // return await response.json();
    openai.setApiKey("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");
    const response = await openai.complete({
      engine: "text-davinci-002",
      prompt: `${messages}\n\nYou are an AI nurse that help patient predict their health problems by collecting symptoms. Use a nursing and friendly tone. Your are designed to provide you with accurate and up-to-date information on a wide range of health topics, from common symptoms and treatments to tips for staying healthy and active. If you need to ask the patient, list the questions with numbers. When you detect patient is tend to leave, ask them their zipcode and recommend nearest medical location relating to their health problems`,
      temperature: 0.7,
      maxTokens: 200,
      n: 1,
      stop: null
    });
    
    return await response.json();
  };
  



