let time = new Date();
let day = time.getDay();
console.log(day)
//Daily Special
//Eat Sound
//Add date w/ eaten

const specialOne = document.querySelector('.specialDay');
specialOne.textContent = "balls"
console.log(specialOne)

switch(day){
    case 0:
        specialOne.textContent = "Super Size Sunday!"
        break;
    case 1:
        specialOne.textContent = "Extra Mayo Monday!"
        break;
    case 2:
        specialOne.textContent = "Double Patty Tuesday!"
        break;
    case 3:
        specialOne.textContent = "Which Sandwich Wednesday!"
        break;
    case 4:
        specialOne.textContent = "Tons of Tomatoes Thursday!"
        break;
    case 5:
        specialOne.textContent = "Fried Veggies Friday"
        break;
    case 6:
        specialOne.textContent = "Super Saturday Special"
        break;
    default: 
        specialOne.textContent = "Buy 1 Get One Free!"
}