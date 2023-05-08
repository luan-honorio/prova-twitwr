var modal = document.getElementById('myModal'); // Obtem o modal

var btn = document.getElementById('b1'); // Obtem o botao que abre o modal

var span = document.getElementsByClassName('close')[0]; // Obtém o elemento <span> que fecha o modal

// quando o usuario clicar no botao, abre o modal
btn.onclick = function(){
    modal.style.display = "block";

}

// quando o usuario clicar no <span> (x), frecha o modal
span.onclick = function(){
    modal.style.display = "none";

}

// quando o usuario clicar fora do modal, fecha o modal
window.onclick = function(event){
    if(event.target == modal){
        modal.style.display = "none";
    }
}