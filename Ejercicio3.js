function fibonacci(num){
    let fibo = [0,1];

    if(num == 0){
        console.log("nothing.");
    }else if(num==1){
        console.log(fibo[0]);
    }else if(num == 2){
        console.log(0,1);
    }else{
        for (let i = 2; i <= num+1; i++) {
            fibo[fibo.length] = fibo[i-2]+fibo[i-1];
            
        }
        console.log(fibo)
    }
}