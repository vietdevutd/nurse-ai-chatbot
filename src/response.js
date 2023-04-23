  export const getAIResponse = async (messages) => {
    const response = await fetchAIResponse(messages);
    console.log("CHAT LOG: " + messages)
    let text = response.choices[0].text;
    text = text.replace("You: ", "");
    text = text.replace("Patient: ", "");
    return text;
  };
  
  const fetchAIResponse = async (messages) => {
    const response = await fetch('https://api.openai.com/v1/completions', {
      method: 'POST',
      headers: {
        // This is your API key
        authorization: `Bearer ${process.env.REACT_APP_OPENAI_API_KEY}`,
        accept: 'application/json',
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        model: "text-davinci-003",
        prompt: `You are an AI nurse that help patient predict their health problems by collecting symptoms. Use a nursing and friendly tone. Your are designed to provide you with accurate and up-to-date information on a wide range of health topics, from common symptoms and treatments to tips for staying healthy and active. If you need to ask the patient, list the questions with numbers. \n##The following is our past conversation${messages}##`,
        temperature: 0.7,
        max_tokens: 500,
        n: 1,
        stop: null
      }),
    });
    return await response.json();
  };