  export const getAIResponse = async (messages) => {
    const response = await fetchAIResponse(messages);
    console.log("RESPONSE: " + JSON.stringify(response))
    return response.choices[0].text;
  };
  
  const fetchAIResponse = async (messages) => {
    const response = await fetch('https://api.openai.com/v1/completions', {
      method: 'POST',
      headers: {
        // This is your API key
        authorization: 'Bearer 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',
        accept: 'application/json',
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        model: "text-davinci-002",
        prompt: `${messages}\n\nYou are an AI nurse that help patient predict their health problems by collecting symptoms. Use a nursing and friendly tone. Your are designed to provide you with accurate and up-to-date information on a wide range of health topics, from common symptoms and treatments to tips for staying healthy and active. If you need to ask the patient, list the questions with numbers. When you detect patient is tend to leave, ask them their zipcode and recommend nearest medical location relating to their health problems`,
        temperature: 0.7,
        max_tokens: 200,
        n: 1,
        stop: null
      }),
    });
    return await response.json();
  };