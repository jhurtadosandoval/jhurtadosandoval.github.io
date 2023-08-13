var stateVar = ""



// const button = document.querySelector("hello")
// const choicer = button.getAttribute("data-choice")
  


function sendMessage(choice) {


  output(choice);
  product = choice

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
      "What is the full response you get from the API?",
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
      showResponseChoices();


    }
    else if (stateVar === "are you getting an error code?"){
      var question = "Are you getting an error code in your response fromt the API?";
      var answer = "No, I am getting a 200 status, so the call is successful.";
      addChat(question,answer)

    }

    else if (stateVar === "what is the full response you get from the api?"){
      var question = "Could you share with us the full response you are getting from your call?";
      var answer = "Sure. ";
      addChat(question,answer)

    }

    else if (stateVar==="back"){
      choiceButtons.innerHTML = "";
      showDefaultChoices();
    }

    else if (stateVar === "do you own the project?"){
      var question = "Are you the owner of the account and project you are trying to create a new asset in?";
      var answer = "Yes, I am the account owner and also own the project. I created my developer Token using my owner account.";
      addChat(question,answer)

    }

    else if (stateVar === "what are the scopes of your token?"){
      var question = "What are the permissions you enabled for your token when you created it?";
      var answer = "I selected all scopes for my token. Also, I don't think it's a permission issue since a new queued asset is created and I get a 200 status response that my call to create the asset was successful.";
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