function combine(...args){
    console.log(...args);
}

combine("javaScript", "rest", "parameter")

function sum(...numb){
    console.log(...numb);
    let total = 0;
    for(let i of numb){
        total += i
    }
    console.log(total);
}

sum(55, 20, 65, 75);