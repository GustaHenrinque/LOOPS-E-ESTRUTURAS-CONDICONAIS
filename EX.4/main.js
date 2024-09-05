let correctPassword = "1234";
let userPassword = ""; 

while (userPassword !== correctPassword) {
     userPassword = prompt("Digite sua senha de 4 dígitos:");

     if (userPassword === correctPassword) {
         alert("Senha correta! Acesso concedido.");
     } else {
        alert("Senha incorreta. Tente novamente.");
    }         
}      