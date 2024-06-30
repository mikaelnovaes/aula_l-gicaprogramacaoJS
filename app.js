//1.	Pergunte ao usuário qual é o dia da semana. Se a resposta for "Sábado" ou "Domingo", 
//mostre "Bom fim de semana!". Caso contrário, mostre "Boa semana!".

let diaSemana = prompt("Qual é o dia da semana?")
if (diaSemana == 'Sábado') {
    alert('Bom fim de semana!'); 
    }
else if (diaSemana == 'Domingo') {
        alert('Bom fim de semana!'); 
}
else {
    alert('Boa semana!'); 
}


//2.	Verifique se um número digitado pelo usuário é positivo ou negativo. 
//Mostre um alerta informando.

let numeroUsuario = prompt("Insira um número?")
if(numeroUsuario > 0) {
    alert('Número positivo!')
}
else if(numeroUsuario == 0){
    alert('Número neutro! Não é número positivo e nem negativo.')

}
else{
    alert('Número negativo!')
}


//3.	Crie um sistema de pontuação para um jogo. Se a pontuação for maior ou igual a 100, 
//mostre "Parabéns, você venceu!". Caso contrário, mostre "Tente novamente para ganhar.".

pontuaçãoJogo = 105;
if(pontuaçãoJogo >=100) {
    alert("Parabéns, você venceu!")
    console.log("Parabéns, você venceu!")
}

else {
    alert("Tente novamente para ganhar.")
    console.log("Tente novamente para ganhar.")
}


//4.	Crie uma mensagem que informa o usuário sobre o saldo da conta, usando uma 
//template string para incluir o valor do saldo.

let saldoConta = prompt("Informa o valor do seu saldo:")
alert (`Seu saldo é de R$: ${saldoConta}`);


//5.	Peça ao usuário para inserir seu nome usando prompt. Em seguida, 
//mostre um alerta de boas-vindas usando esse nome.
let nomePessoa = prompt("Qual seu nome?")
alert (`Seja bem-vindo ${nomePessoa}!`)