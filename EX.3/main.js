function getRandomNumber() {
    return Math.floor(Math.random() * 100) + 1;
}

for (let i = 0; i < 10; i++) {
    randomNumbers.push(getRandomNumber());
}

console.log("Array original:", randomNumbers);


let evenNumbers = [];
for (let i = 0; i < randomNumbers.length; i++) {
    randomNumbers[i] % 2 === 0 ? evenNumbers.push(randomNumbers[i]) : null;
}

console.log("Números pares:", evenNumbers);