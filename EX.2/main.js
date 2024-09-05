let number = 101; 

while (true) {
    if (number % 5 === 0 && number % 7 === 0) {
        console.log(number);
        break;
    }
    number++;
}
