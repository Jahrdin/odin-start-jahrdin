const fizzBuzz = (n) => {
  
  if (n % 3 === 0 && n % 5 === 0){
    return "FizzBuzz";
  } else if (n % 3 === 0){
    return "Fizz";
  } else if (n % 5 === 0){
    return "Buzz"
  } else return n;
  
}

for(let i = 1; i < 20; i++){
  let n = i;
  fizzBuzz(n)
}