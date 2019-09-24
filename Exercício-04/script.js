  let pinguim = {
      "nome": "Pingo Lyn",
      "idade": 13,
      "origem": "China"
  }

  pinguim.andar = function () {
    console.log("Andou!")
}

pinguim.podeVoar = false

pinguim.voar = function(){
    if(this.podevoar){
        console.log("Voa menino")
    } else {
        console.log("poxa, não rola")
    }
}