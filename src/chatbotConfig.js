import { createChatBotMessage } from "react-chatbot-kit";
import CoBotAvatar from "./CoBotAvatar";

const config = {
  lang: "no",
  botName: "NurseAI",
  customStyles: {
    botMessageBox: {
      backgroundColor: "#04668a"
    },
    chatButton: {
      backgroundColor: "#0f5faf"
    }
  },
  initialMessages: [
    createChatBotMessage(
      `Hi there! I'm NurseAI, and I'm here to provide you with trusted health information and advice. Did you know that regular exercise can lower your risk of heart disease, stroke, and type 2 diabetes? Or that eating a balanced diet rich in fruits, vegetables, and whole grains can help you maintain a healthy weight and reduce your risk of chronic diseases? Whether you have questions about your diet, exercise routine, or general health and wellness, I'm here to help. So don't hesitate to ask me anything!`
    )
  ],
  state: {},
  customComponents: { botAvatar: (props) => <CoBotAvatar {...props} /> },
  widgets: []
};

export default config;
