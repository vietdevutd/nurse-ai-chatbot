import {saveToLocalStorage} from "./localStorage"

class MessageParser {
  constructor(actionProvider, state) {
    this.actionProvider = actionProvider;
    this.state = state;
  }

  parse(message) {
    // Save message to localStorage
    const messageToSend = saveToLocalStorage("Me: " + message);
    return this.actionProvider.handleUserMessage(messageToSend);
  }
}

export default MessageParser;
