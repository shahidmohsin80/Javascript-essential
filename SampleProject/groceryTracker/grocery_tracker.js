let grocery1;
let grocer2;
let grocery3;
 function calculateGrocery(){
    grocery1=parseFloat(document.getElementById('grocery-1').value);
    grocery2=parseFloat(document.getElementById('grocery-2').value);
    grocery3=parseFloat(document.getElementById('grocery-3').value);
    let totalGrocery=grocery1+grocery2+grocery3;
    document.getElementById('result').innerText  = `The area of the rectangle is:$  ${totalGrocery}`;
 }