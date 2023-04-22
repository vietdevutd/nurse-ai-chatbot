import {saveToLocalStorage} from "./localStorage"

class MessageParser {
  constructor(actionProvider, state) {
    this.actionProvider = actionProvider;
    this.state = state;
  }

  parse(message) {
    console.log(message);
    // Save message to localStorage
    const messageToSend = saveToLocalStorage(message);
    return this.actionProvider.handleUserMessage(messageToSend);
  }
}

export default MessageParser;
