var stateVar = ""



// const button = document.querySelector("hello")
// const choicer = button.getAttribute("data-choice")
  


function sendMessage(choice) {


  output(choice);
  product = choice

}

function outputImage(url, altText){
  const messageSection = document.getElementById("message-section");
  const imgElement = document.createElement("img");
  imgElement.src=url;
  imgElement.alt = altText;
  imgElement.classList.add("chat-image");

  const messageContainer = document.createElement("div");
  messageContainer.classList.add("message");
  messageContainer.appendChild(imgElement);

  messageSection.appendChild(messageContainer);

  messageSection.scrollTop = messageSection.scrollHeight;
}

  function showDefaultChoices(){
    const choiceButtons = document.getElementById("choiceButtons");
    const defaultChoices = [
      "Check user permissions",
      "Check the API Response",
      "Correct Usage of Endpoint"
    ];

    defaultChoices.forEach((choice) => {
      const button = document.createElement("button");
      button.textContent = choice;
      button.onclick = () => sendMessage(choice);
      choiceButtons.appendChild(button);
    });
  }

  function showResponseChoices(){
    const choiceButtons = document.getElementById("choiceButtons");
    const defaultChoices = [
      "Are you getting an error code?",
      "Could you share the response?",
      "Back"
    ];

    

    defaultChoices.forEach((choice) => {
      const button = document.createElement("button");
      button.textContent = choice;
      button.onclick = () => sendMessage(choice);
      choiceButtons.appendChild(button);
    });
    
  }

  function showPermissionChoices(){
    const choiceButtons = document.getElementById("choiceButtons");
    const defaultChoices = [
      "Do you own the Project?",
      "What are the scopes of your Token?",
      "Back"
    ];

    

    defaultChoices.forEach((choice) => {
      const button = document.createElement("button");
      button.textContent = choice;
      button.onclick = () => sendMessage(choice);
      choiceButtons.appendChild(button);
    });
    
  }

  function showEndpointChoices(){
    const choiceButtons = document.getElementById("choiceButtons");
    const defaultChoices = [
      "Can you share your request?",
      "What is the source of your asset?",
      "Back"
    ];

    

    defaultChoices.forEach((choice) => {
      const button = document.createElement("button");
      button.textContent = choice;
      button.onclick = () => sendMessage(choice);
      choiceButtons.appendChild(button);
    });
    
  }


  document.addEventListener("DOMContentLoaded", () => {
    const inputField = document.getElementById("input");
    inputField.addEventListener("keydown", function (e) {
      if (e.code === "Enter") {
        let input = inputField.value.trim();
        input != "" && output(input);
        inputField.value = "";
      }
    });
  });
  
  function output(input) {

  
    let text = input.toLowerCase();
  
    stateVar = text;
    console.log(stateVar);

    if (stateVar ==="check user permissions"){
     choiceButtons.innerHTML = "";
     showPermissionChoices();

    }
    else if (text ===("check the api response")){
      choiceButtons.innerHTML = "";
      showResponseChoices();


    }
    
    else if (stateVar === "correct usage of endpoint"){
      choiceButtons.innerHTML = "";
      showEndpointChoices();


    }
    else if (stateVar === "are you getting an error code?"){
      var question = "Are you getting an error code in your response fromt the API?";
      var answer = "No, I am getting a 200 status, so the call is successful.";
      addChat(question,answer)

    }

    else if (stateVar === "could you share the response?"){
      var question = "Could you share the body of the response?";
      var answer = "Sure. The response is pretty long. Here is part of it";
      addChat(question,answer)

    }

    else if (stateVar==="back"){
      choiceButtons.innerHTML = "";
      showDefaultChoices();
    }

    else if (stateVar === "do you own the project?"){
      var question = "Are you the owner of the account and project you are trying to create a new asset in?";
      var answer = "Yes, I am the account owner and also own the project. I created my developer Token using my owner account.";
      //addChat(question,answer)
      outputImage("https://as2.ftcdn.net/jpg/00/97/58/97/220_F_97589769_t45CqXyzjz0KXwoBZT9PRaWGHRk5hQqQ.jpg","any")

    }

    else if (stateVar === "what are the scopes of your token?"){
      var question = "What are the permissions you enabled for your token when you created it?";
      var answer = "I selected all scopes for my token. Also, I don't think it's a permission issue since a new queued asset is created and I get a 200 status response that my call to create the asset was successful.";
      addChat(question,answer)

    }
    else if (stateVar === "can you share your request?"){
      var question = "What are the permissions you enabled for your token when you created it?";
      var answer = "I selected all scopes for my token. Also, I don't think it's a permission issue since a new queued asset is created and I get a 200 status response that my call to create the asset was successful.";
      addChat(question,answer)

    }
    else if (stateVar === "what is the source of your asset?"){
      var question = "What is the source of your asset? Is your asset publicly accessible online via URL?";
      var answer = "No, I do not want my asset to be public to everyone. I am trying to upload an mp4 from my computer.";
      addChat(question,answer)

    }

    

    


  //line used to add selected choice to chatbox
    //addChat(input, product);
  }
  
  // function compare(triggerArray, replyArray, string) {
  //   let item;
  //   for (let x = 0; x < triggerArray.length; x++) {
  //       if (triggerArray[x].includes(string)) {
  //         items = replyArray[x];
  //         item = items[Math.floor(Math.random() * items.length)];
  //       }
  //   }
  //   return item;
  // }

  function addChat(input, product) {
    const mainDiv = document.getElementById("message-section");
    let userDiv = document.createElement("div");
    userDiv.id = "user";
    userDiv.classList.add("message");
    userDiv.innerHTML = `<span id="user-response">${input}</span>`;
    mainDiv.appendChild(userDiv);
  
    let botDiv = document.createElement("div");
    botDiv.id = "bot";
    botDiv.classList.add("message");
    botDiv.innerHTML = `<span id="bot-response">${product}</span>`;
    mainDiv.appendChild(botDiv);
    var scroll = document.getElementById("message-section");
    scroll.scrollTop = scroll.scrollHeight;

  }