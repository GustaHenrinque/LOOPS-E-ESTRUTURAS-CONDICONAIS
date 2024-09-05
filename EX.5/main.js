function inverterString(str) {
    let stringInvertida = ""; 
    
    
    for (let i = str.length - 1; i >= 0; i--) {
        stringInvertida += str[i]; 
    }

    return stringInvertida;
}

let original = "Desenvolvimento de Sistemas";
let invertida = inverterString(original);

console.log("String original:", original);
console.log("String invertida:", invertida);