// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function d2b(dec){
    let result = "";
    while(dec!=0){
        if(dec%2==0){
            result="0"+result;
        }else{
            result="1"+result;
        }
        dec=parseInt(dec/2);
    }
    return result;
}

function reverse(s){
    return s.split("").reverse().join("");
}

function test(){
    if("1111" == d2b(15)){
        return true;
    }else{
        return false;
    }
}

function solution(N) {
    // write your code in JavaScript (Node.js 8.9.4)
    let arr = d2b(N).split("");
    for(let i in arr){
        if()    
    }
    
}
