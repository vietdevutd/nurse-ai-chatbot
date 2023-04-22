import { getAIResponse } from "./response";
import {saveToLocalStorage} from "./localStorage"

class ActionProvider {
  constructor(createChatBotMessage, setStateFunc, createClientMessage) {
    this.createChatBotMessage = createChatBotMessage;
    this.setState = setStateFunc;
    this.createClientMessage = createClientMessage;
  }
  
  handleUserMessage(message) {
    // Call the getChatResponse function and handle the promise
    getAIResponse(message).then((response) => {
      // Save response to localStorage
      saveToLocalStorage(response)
      // Use the response to create a new bot message
      const botMessage = this.createChatBotMessage(response);

      // Update the chat state with the new message
      this.addMessageToState(botMessage);
    });
  }

  addMessageToState = (message) => {
    this.setState((state) => ({
      ...state,
      messages: [...state.messages, message]
    }));
  };
}

export default ActionProvider;
