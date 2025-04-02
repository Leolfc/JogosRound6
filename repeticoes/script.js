let rodada = 1;
while(rodada  <=3){
    console.log("Rodada " + rodada);
    const escolhaJogador = prompt(`Nivel ${rodada}, escolha vidro (1, 2 ou 3):` )
    const pisoQuebrado = Math.floor(Math.random() *3) + 1
    if(escolhaJogador == pisoQuebrado){
        alert('Piso quebrou!!') 
    }else{
        alert(`Você passou! O piso quebrado estava na ponte ${pisoQuebrado}`);
    }
    }
    rodada +=1

