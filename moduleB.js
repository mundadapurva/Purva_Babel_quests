export function find_total(my_numbers){
    let count = 0;
for(let i=0; i<my_numbers.length; i++){
  if(my_numbers[i]%2==0){
    count = count + 1;
  }
  else if(my_numbers[i]%2!=0 && my_numbers[i]!=5){
    count = count + 3
  }
  else if(my_numbers[i]==5){
    count = count + 5;
  }
}
return count;
}