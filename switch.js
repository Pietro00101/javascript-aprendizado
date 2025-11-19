/* let escolhaUsurario = parseInt(prompt("Selecionar a opção desejada:\n1 - Frutas\n2 - Doces\n3 - Bebidas"))

switch(escolhaUsurario){
    case 1:
        console.log("Temos: banana, maça e morango");
    break;
    case 2:
        console.log("Temos: Brigadeiro e Chocolate");
    break;
    case 3:
        console.log("Temos: Coca, Itubaina e Pureza");
    break;
    default:
        alert("Digte um numero entre 1 e 3")
} */

let mesadaUsuario = parseInt(prompt("Qual o valor da sua mesada?"));

let escolhaUsurario = parseInt(prompt("Selecione a opção desejada:\n1 - comprar\n2 - apenas olhar"))

switch(escolhaUsurario){
    case 1:
        valorDaCompra = parseInt(prompt("Informe o valor da compra"));
        if(valorDaCompra <= mesadaUsuario){
            console.log("Compra efetuada com sucesso!")
        }else{
            console.log("Saldo insuficiente")
        }  
        break;
    case 2:
        console.log("fique a vontade");
        break;
        default:
            alert("Opção invalida")

}
