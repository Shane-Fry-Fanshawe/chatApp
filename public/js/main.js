(() => {
  const socket = io(); // This is making the connection for things to happen in the browser window

  let messageList = document.querySelector('ul'),
      chatForm =  document.querySelector('form'),
      nameInput =  document.querySelector('.nickname'),
      chatMessage =  document.querySelector('.message'),
      nickNameSection = document.querySelector('#nickNameSection'),
      nickNameSectionWelcome = document.querySelector('#nickNameSectionWelcome'),
      welcomeMessageName = document.querySelector('#welcomeMessage'),


      nickName = null;


      function setNickname(){
        //debugger;
        nickName = this.value;

        //console.log(nameInput.value);
        nickNameSection.style.display = "none";
        nickNameSectionWelcome.style.display = "block";

//No need to hide Welcome message if wanted to, unless I added a change name option.
        welcomeMessageName.innerHTML = "Welcome " + nickName + ", start chatting!";


//I only want to set a color to Nickname users, as all non users wouldnt want to be known
        console.log(socket.id);




      }

      function handleSendMessage(e){ //E is the event object that gets generated, which is the submit button in this case
        e.preventDefault(); //Prevents the default behavior - a submit triggers a page reload, which we ont want
        //debugger;

        nickName = (nickName && nickName.length > 0) ? nickName : 'user';

        //grab the text from the input feild at the bottom of the page
        msg = `${nickName} says ${chatMessage.value}`;

        //emit a chat event so that we can pass it through to the server (and everyone else)
        socket.emit('chat message', msg);
        chatMessage.value = '';
        return false;

      }

      function appendMessage(msg){
      //  debugger;
      let newMsg = `<li>${msg.message}</li>`
      messageList.innerHTML += newMsg;

      }


      function appendDMessage(msg){
        //debugger;
        let newMsg = `<li>${msg}</li>`
        messageList.innerHTML += newMsg;


      }










      nameInput.addEventListener('change', setNickname, false);
      chatForm.addEventListener('submit', handleSendMessage, false);
      socket.addEventListener('chat message', appendMessage, false);
      socket.addEventListener('disconnect message', appendDMessage, false);



})();
