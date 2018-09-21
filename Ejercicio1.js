function palindroma(palabra){
    let aux = palabra.split("");
    let resultado = aux.reverse().join("");
    
    if( resultado == palabra){
        console.log("Es palíndroma - - - "+resultado);
    }else{
        console.log("No es palíndroma - - - "+resultado);
    }
}