

function calc(x){
    var inputBox = document.getElementById('displayNumber');
    inputBox.value += x;

    if(x === "CE"){

        inputBox.value = '';
    }
};

function answer(){

    var inputBox = document.getElementById('displayNumber');
   x = inputBox.value;
   x =  eval(x);

   inputBox.value = x;


};