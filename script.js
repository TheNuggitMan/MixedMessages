const foods = ['banana', 'grape', 'pineapple', 'sandwich', 'rolo', 'mud pie'];
const where = ['monday', 'tuesday', 'wednesday', 'thursday', 'another planet', 'the roof of your neighbours car'];
const taste = ['horrendous', 'pretty good!', 'like a thumb nail', "like you've eaten it inside out...", 'like a grape..'];

const mix = () => {
    let foodChoice = foods[Math.floor(Math.random()*6)];
    let whereChoice = where[Math.floor(Math.random()*6)];
    let tasteChoice = taste[Math.floor(Math.random()*5)];

    console.log(`You will eat a ${foodChoice} on ${whereChoice}, and it will taste ${tasteChoice}...`);
}

mix();
