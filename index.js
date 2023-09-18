// Code your solutions in this file
for (let age = 30; age < 40; age ++) {
    console.log(`I'm ${age} years old. Happy birthday to me!`);
    
}

const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
    for (let i = 0; i < gifts.length; i++) {
        console.log(`Wrapped ${gifts[i]} and added a bow!`);
        
    }

    return gifts;
}

wrapGifts(gifts);

const names = ["Andrew", "Danny", "Julie"];
const eventName = "birthday";

function writeCards(names, eventName) {
    const thankYouMessages = [];

    for (let i = 0; i < names.length; i++) {
        const message = `Thank you, ${names[i]}, for the wonderful ${eventName} gift!`;
        thankYouMessages.push(message);
    }

    return thankYouMessages;
}

function countDown(number = 10) {
   
    if (number <= 0 || !Number.isInteger(number)) {
      console.log("Please provide a positive integer.");
      return;
    }
  
    for (let i = number; i >= 0; i--) {
      console.log(i);
    }
  }
