
 var dupla = window.prompt("Digite a quantidade de duplas para o Baile")

 for (let contador = 0; contador <= dupla; contador = contador + 1) {
  
    if (contador % 2 == 0 && contador != 0){
 
        console.log(contador + "  Sentados ao lado esquerdo")
     
     } else if  (contador % 2 != 0) {
  
       console.log(contador + "   sentados ao lado direito!")
    
     } else { 
       
      console.log(contador + '\t numero "ZERO" 0')
     }
 
 }