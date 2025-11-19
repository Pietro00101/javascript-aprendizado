
let nomeUsuario = document.getElementById("nomeUsuario"); // armazena a informação capturada no HMTL dentro da variavel nomeUsuario

let botao = document.getElementById("botao");
let conteudoDoTexto = document.getElementById("conteudoDoTexto");

let notasAlunos = document.getElementById("notasAlunos");

botao.addEventListener("click", () => {
    // console.log(nomeUsuario.value);
    conteudoDoTexto.innerHTML = nomeUsuario.value
    

    let nota1 = parseInt(document.getElementById("nota1").value);
    let nota2 = parseInt(document.getElementById("nota2").value);
    let nota3 = parseInt(document.getElementById("nota3").value);
    let nota4 = parseInt(document.getElementById("nota4").value);



    let media = (nota1 + nota2 + nota3 + nota4) / 4;

    console.log(media)
    notasAlunos.innerHTML = media


    
})