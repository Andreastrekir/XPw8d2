//Exercise 1 : HTML Form
//1.Create a form like the one above. The form should contain three inputs:
//a small text input asking for a name,
//a larger textarea input to write a message,
//a submit input (“Send”)

//2.When you click the Send button, the form will be submitted with a GET method. (you can use the same HTML file for the action url)
//3.Where will the sent data appear?

//ANSWER
//3.The sent data appear in URL bar

//--------------------------------------------------------------------------->
//Exercise 2 : HTML Form #2
//Instructions
//1.Use the same form structure as Exercise 1.
//2.When you click the Send button, the form will be submitted with a POST method.(you can use the same HTML file for the action url)
//3.Where will the sent data appear? Hint : Look at the Network Tab

//ANSWER

//3. THE DATA APPEAR IN THE NETWORK TAB.

//---------------------------------------------------------------------------->

//Exercise 3 : JSON Mario

let marioGame = {
  detail : "An amazing game!",
  characters : {
      mario : {
        description:"Small and jumpy. Likes princesses.",
        height: 10,
        weight: 3,
        speed: 12,
      },
      bowser : {
        description: "Big and green, Hates princesses.",
        height: 16,
        weight: 6,
        speed: 4,
      },
      princessPeach : {
        description: "Beautiful princess.",
        height: 12,
        weight: 2,
        speed: 2,
      }
  },
}

//Convert this JS object into a JSON object. What happens to the nested objects ?

//Answer: Nested objects are supported and converted automatically.

let jsonMarioGame = JSON.stringify(marioGame);
console.log(typeof jsonMarioGame);

//Convert and pretty print this JS object into a JSON object.

let jsonMarioGame = JSON.stringify(marioGame, null, 2);

console.log(jsonMarioGame);


























