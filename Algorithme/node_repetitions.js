let nombres = [4, 7, 2, 7, 9, 4, 5];
let arr= [];
for(let i=0; i< nombres.length; i++){
    for(let j=0; j< nombres.length; j++){
        if(i!== j &&nombres[i]===nombres[j]){
            if(!arr.includes(nombres[i])) {
                arr.push(nombres[i]);
            }
        }
    }
}
console.log(arr);
