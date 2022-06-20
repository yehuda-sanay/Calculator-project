const array1=[];
const array2=[];
function but(numberValue){
h1_id.innerHTML+=numberValue;
     array1.push(numberValue);
console.log(array1);}

function shave(){
array1.forEach(element => {
     if(element*1==element){
          array2.push(element);
          array1.shift(element);

     }

});
console.log(array1);
console.log(array2);
}

function cleanScreen(){
     h1_id.innerHTML="";
}



// switch(numberValue){
//      case "+":
// }