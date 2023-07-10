const chatLog = document.getElementById("chat-log");
const userInput = document.getElementById("user-input");
const sendBtn = document.getElementById("send-btn");

sendBtn.addEventListener("click", () => {
  sendMessage();
});

userInput.addEventListener("keyup", (event) => {
  if (event.keyCode === 13) { // check if the "enter" key was pressed
    sendMessage();
  }
});

function sendMessage() {
  const userMessage = userInput.value;
  const correctedMessage = correctSpellingAndPunctuation(userMessage); // correct spelling and punctuation
  appendMessage("You: " + correctedMessage);
  getBotResponse(correctedMessage);
  userInput.value = "";
}

function correctSpellingAndPunctuation(message) {
  // remove extra spaces
  message = message.trim().replace(/\s{2,}/g, ' ');

  // remove punctuation
  message = message.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "");

  // correct spelling
  const words = message.split(" ");
  const dictionary = {
    "color": "colour",
    "favorite": "favourite",
    "favorite": "favourite",
    "program": "programme",
    "center": "centre",
    // add more words to the dictionary as needed
  };
  const correctedWords = words.map(word => {
    const lowercaseWord = word.toLowerCase();
    if (lowercaseWord in dictionary) {
      return dictionary[lowercaseWord];
    } else {
      return word;
    }
  });
  const correctedMessage = correctedWords.join(" ");

  return correctedMessage;
}

function appendMessage(message) {
  const messageElement = document.createElement("div");
  messageElement.innerText = message;
  chatLog.appendChild(messageElement);
}

function getBotResponse(message) {
  let botMessage;


  switch(message.toLowerCase().trim()) {
    case "hi":
    case "hello":
    case "hey":
      botMessage = "Hello there! How can I assist you today?";
      break;
    case "how are you":
    case "how are you doing":
    case "how's it going":
      botMessage = "I'm doing great, thank you for asking!";
      break;
    case "what is your name":
    case "who are you":
      botMessage = "My name is Chatbot. Nice to meet you!";
      break;
    case "how do I unsubscribe from your emails":
    case "stop sending me emails":
    case "unsubscribe":
      botMessage = "To unsubscribe from our emails, simply click the unsubscribe link at the bottom of any email you receive from us. Alternatively, you can contact our customer service team for assistance.";
      break;
    case "what is your favorite color":
    case "favourite colour":
      botMessage = "I'm a chatbot, I don't have a favorite color!";
      break;
    case "what can you do":
    case "what are your abilities":
    case "what services do you provide":
      botMessage = "I can answer questions related to our products, services, and policies. You can also ask me for help with your account or to connect you with a customer service representative.";
      break;
    case "how can I contact customer service":
    case "how do I get in touch with support":
    case "contact us":
      botMessage = "You can contact our customer service team by phone, email, or live chat. Visit our website for more information.";
      break;
    case "what are your business hours":
    case "when are you open":
    case "hours of operation":
      botMessage = "Our business hours are Monday to Friday, from 9am to 5pm.";
      break;
    case "where are you located":
    case "what is your address":
    case "where is your store":
      botMessage = "Our headquarters is located in New York City, but we have offices and stores all over the world.";
      break;
    case "what is your return policy":
    case "can I return an item":
    case "how do I return an item":
      botMessage = "Our return policy allows you to return any item within 30 days of purchase for a full refund or exchange. The item must be in its original condition and packaging.";
      break;
    case "what payment methods do you accept":
    case "can I pay with PayPal":
    case "do you accept Apple Pay":
      botMessage = "We accept all major credit cards, PayPal, and Apple Pay.";
      break;
    case "do you offer discounts":
    case "are there any promotions":
    case "can I get a coupon":
      botMessage = "We occasionally offer discounts and promotions to our customers. Make sure to sign up for our newsletter to stay up to date!";
      break;
    case "can I cancel my order":
    case "how do I cancel an order":
    case "is it possible to cancel my order":
      botMessage = "You can cancel your order within 24 hours of placing it. After that, the order may have already been processed and shipped.";
      break;
    case "what is the status of my order":
    case "where is my package":
    case "has my order shipped":
      botMessage = "You can check the status of your order by logging into your account and viewing your order history.";
      break;
    default:
  botMessage = "I'm sorry, I don't understand. Can you please rephrase your question?";
  }

  appendMessage("Leiha: " + botMessage);
}
