str = "petarade";

function capitalize(str){
    return str[0].toUpperCase() + str.slice(1);
}

function lastLetter(str){
    return str.slice(-1).toUpperCase();
}

console.log(lastLetter(str));