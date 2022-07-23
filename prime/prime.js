//prime number

let l=prompt('enter the lower number');
let h=prompt('enter the higher value');
console.log(`the prime number between ${l}and${h}`);

for(i=l;i<=h;i++){
    let x=0;
    for(j=2;j<i;j++){
        if(i%j==0){
            x=1;
            break;
        }
    }
    if(i>1&&x==0){
        console.log(i);
    }
}
