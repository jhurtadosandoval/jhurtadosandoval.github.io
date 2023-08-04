const userMessage = [
  "Can you share a screenshot?"
  ];
  const botReply = [
  "hi"
  ];
  
  const alternative = [
    "not working"
  ];
  
  const synth = window.speechSynthesis;
  
  // function voiceControl(string) {
  //   let u = new SpeechSynthesisUtterance(string);
  //   u.text = string;
  //   u.lang = "en-aus";
  //   u.volume = 1;
  //   u.rate = 1;
  //   u.pitch = 1;
  //   synth.speak(u);
  // }
  
  function sendMessage(choice) {
    // const inputField = document.getElementById("input");
    // let input = inputField.value.trim();
    // input != "" && output(input);
    // inputField.value = "";

    output(choice);


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
    let product;
  
    let text = input.toLowerCase().replace(/[^\w\s\d]/gi, "");
  
    text = text
      .replace(/[\W_]/g, " ")
      .replace(/ a /g, " ")
      .replace(/i feel /g, "")
      .replace(/whats/g, "what is")
      .replace(/please /g, "")
      .replace(/ please/g, "")
      .trim();
  
    // let comparedText = compare(userMessage, botReply, text);
  
    // product = compare(userMessage,botReply,text);
    // if (text.includes("Can you share a screenshot?")){
    //   product ="hee"
    //   console.log(text)
    // }

    // else if (userMessage.includes("Are you getting an error code?")){
    //   product = alternative[Math.floor(Math.random() * alternative.length)]
    //   product="Hi"
    // }
  
    product = "?"
    console.log(text)
    if (text.includes("are you getting an error code")){
      product = "No, the call is successfull. "

    }
    else if (text.includes("can you share screenshot")){
      product="Sure thing.";
    }
    else if (text.includes("tell me more about your token"))
    {
      product = "What do you want to know?"

    }


    addChat(input, product);
  }
  
  function compare(triggerArray, replyArray, string) {
    let item;
    for (let x = 0; x < triggerArray.length; x++) {
        if (triggerArray[x].includes(string)) {
          items = replyArray[x];
          item = items[Math.floor(Math.random() * items.length)];
        }
    }
    return item;
  }
  
  function containMessageCheck(string) {
    let expectedReply = [
      [
        "Tell me more about your token.",
        "Bye, See you!",
        "Dude, Bye. Take care of your health in this situation."
      ],
      ["Tell me more about your token.", "Have a sound sleep", "Sweet dreams"],
      ["Have a pleasant evening!", "Good evening too", "Evening!"],
      ["Good morning, Have a great day!", "Morning, dude!"],
      ["Good Afternoon", "Noon, dude!", "Afternoon, dude!"]
    ];
    let expectedMessage = [
      ["Tell me more about your token.", "tc", "take care"],
      ["night", "good night"],
      ["evening", "good evening"],
      ["morning", "good morning"],
      ["noon"]
    ];
    let item;
    for (let x = 0; x < expectedMessage.length; x++) {
      if (expectedMessage[x].includes(string)) {
        items = expectedReply[x];
        item = items[Math.floor(Math.random() * items.length)];
      }
    }
    return item;
  }
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
    // voiceControl(product);
  }