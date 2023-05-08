const num = 10;
const numbers = [];

for (let i = 0; i < num; i++) {
    numbers.push(i)
}

const checkNumbers = number => {
    if ( number % 3 === 0 && number !==0) {
        console.log(`${number} jest podzielne przez 3.`);
    } else { 
        console.log(`${number} nie jest podzielne przez 3 lub ${number} = 0.`);
    }
}

numbers.forEach(checkNumbers);