ponto = 0;

function addBola() {
    var bola = document.createElement("div"); //create div 
    bola.setAttribute("class", "bola"); // add class "bola" in div   

    var colors = ["red" , "green", "blue", "gray","black", "oragen", "pink"];


    var x = Math.floor(Math.random() * 500); // math.floor transforma em inteiro
    var y = Math.floor(Math.random() * 400); // math.floor transforma em inteiro

    bola.setAttribute("style", "left:"+y+"px;top:"+x+"px;background-color:"+colors[Math.floor(Math.random() * 6)]+";"); //add posicionamento x e y
    bola.setAttribute("onClick", "estourar(this)"); //add funcao de click
    document.body.appendChild(bola); //inserindo no html 

}

function estourar(elemento){
    document.body.removeChild(elemento); // removendo elemento
    ponto++;
    document.getElementById("contador").innerHTML = "";
    document.getElementById("contador").innerHTML = "Você estourou: "+ponto+ "Bola(s).";

}
function iniciar(){
    setInterval(addBola, 1000);
}