(() => {

//For the uglify I kept getting this error, not sure why: (I tried to get it to work It just wouldnt uglify due to this error, for marks purposes)
// Warning: Uglification failed.
//Unexpected token: punc ()).
//Line 1 in public/js/main.js

//Warning: Cannot read property 'min' of undefined



//-------------------- Issues and thought Process

//For the User name being different colors, I asked classmates what they did and they just left your odd child switch colors and I know this isnt what you wanted, I was trying to set a color per user
//How I would do this is (But I get errors per usuall, just showing commented out for marks):
//Set the socket.id to a color from an array (that way a user ID owns that color);

//var colors = ['#AE331F', '#D68434', '#116A9F', '#360B95', '#5F209E'];

//Then Have the user be assigned one of these and not let another use it until disconnectted:

//socket.color = data.color = colors[Math.floor(Math.random() * colors.length)]; this picks a random color from the array

//My Main things I tried was setting the users ID to the socket ID and giving that socket ID a background color

//<li id="user_id_message">${msg}</li>` , so if the ID was changed from user_id_message to its ID (ex. ewgrwergae), that socket.id.color = one of the colors from the Math
//this way everytime a user joins it assigns a color and you can change the css background color to = color

//^^ Didnt work just thought Process for marks since in thoery it should have I may have been working in the wrong function I tried in the Handle and Append both didnt work

//---------------- Transitions

//Basic transitions with CSS worked but I wanted the messages to fade in or out, and Im not sure if I couldnt target an ID because we did this `<li id="user_id_message">${msg.message}</li>`, and that hard codes it into the html
// And once it does the styling added couldnt effect it?

//-------------- Features
//Not sure if we already added the broadcast message when someone joins through emit, but I also found this: (not sure if you wanted us to change or not)

// sending to all clients except sender
    //socket.broadcast.emit('broadcast', 'hello friends!');



    //------------ Rooms (This would be my extra feautre Im just very low on time

    //I was short on time for this hopefully going to come back and add correctly before you mark and get it to work :)
    //But I was going to add a switch room feature with a drop down box and you pick room 1 or 2, and it would switch

    //So on addEventListener would trigger the function that would run this and "join" another room and send messages privately to that one

    //io.on('connection', function(socket){
    //socket.join('some room');
  //  });


  //Then send the message to it

  //io.to('some room').emit('some event');


//Sorry for the commented out messages I just wanted a working designed one, and have it still working with all this in there I broke so I took it out for easier reading! - Shane





  const socket = io(); // This is making the connection for things to happen in the browser window

  let messageList = document.querySelector('ul'),
      chatForm =  document.querySelector('form'),
      nameInput =  document.querySelector('.nickname'),
      chatMessage =  document.querySelector('.message'),
      nickNameSection = document.querySelector('#nickNameSection'),
      nickNameSectionWelcome = document.querySelector('#nickNameSectionWelcome'),
      welcomeMessageName = document.querySelector('#welcomeMessage'),


      useridMessage = document.querySelector('#user_id_message'),



      nickName = null;




      function handleSendMessage(e){ //E is the event object that gets generated, which is the submit button in this case
        e.preventDefault(); //Prevents the default behavior - a submit triggers a page reload, which we ont want
        //debugger;


        nickName = (nickName && nickName.length > 0) ? nickName : 'user';

        //grab the text from the input feild at the bottom of the page
        msg = `${nickName} says ${chatMessage.value}`;

        //emit a chat event so that we can pass it through to the server (and everyone else)
        socket.emit('chat message', msg);

        console.log('this is where I send a message from');

        chatMessage.value = '';
        return false;


        //document.getElementById('user_id_message').style.display = "none";
        //TweenMax.to(useridMessage, 2, {opacity:"0"});

      }

      function appendMessage(msg){
      //  debugger;

      let newMsg = `<li id="user_id_message">${msg.message}</li>`;
      messageList.innerHTML += newMsg;
      console.log("hey");

      }


      function appendDMessage(msg){
        //debugger;

        let newMsg = `<li id="user_id_message">${msg}</li>`;
        messageList.innerHTML += newMsg;


      }

      function setNickname(){
        //debugger;
        nickName = this.value;

        //console.log(nameInput.value);
        nickNameSection.style.display = "none";
        nickNameSectionWelcome.style.display = "block";

//No need to hide Welcome message if wanted to, unless I added a change name option.
        welcomeMessageName.innerHTML = "Welcome " + nickName + ", start chatting!";


//I only want to set a color to Nickname users, as all non users wouldnt want to be known
//Thought Process:
//Get the unique ID to the user and set a color to that
//Possibly make it so no other users can have that value of color

        console.log(socket.id);

        //  var colors = ['#ff0000', '#00ff00', '#0000ff'];
        //var random_color = colors[Math.floor(Math.random() * colors.length)];

      }




      nameInput.addEventListener('change', setNickname, false);
      chatForm.addEventListener('submit', handleSendMessage, false);
      socket.addEventListener('chat message', appendMessage, false);
      socket.addEventListener('disconnect message', appendDMessage, false);



})();
