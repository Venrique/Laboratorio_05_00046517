function binario(num){
    let bin = [];
    let aux = num;
    let contador = 0;
    while (aux>=1) {
        bin[contador] = aux%2;
        aux= Math.trunc(aux/2);
        contador++;
    }
    if (num==0) {
        bin[0]=0;
    }

    bin.reverse();
    console.log(bin);
}