// (function() {

//     let screen = document.querySelector('.scren');
//     let butons = document.querySelectorAll('.btn');
//     let clear = document.querySelector('.btn-clear');
   

// butons.forEach(function(button){
//     button.addEventListener('click', function(e) {
//         let value = e.target.dataset.num;
//         screen.value += value;
//     })
// }); 

// })();


var screen = document.getElementById("screen");
var stock /*queue*/ = [];
var input = 0;



///les fonctions //

function affichage(a) {
    screen.value = screen.value + a ;
    input+=a;
    console.log(`le nombre affichier : ${input}`)
}


function effacer() {
    screen.value="";
    input=0;
    stock=[];
    console.log(`l operation effectué : ${input}`);
}



function opert(arg) {
    if (input !==0) {
        screen.value += arg ;
        input=parseFloat(input);
        stock.push(input);
        stock.push(arg);
        input = 0;
        console.log(`l input et stocker dans le tableau ${stock}`)
    }
}

function calcul(stock) {
    if(input != 0){
        input= parseFloat(input);
        stock.push(input);
        diviserZero=true;
    }
    for( var i=2 ; i< stock.length ;i++) {
        console.log(`index :: ${stock[i]}`);
        switch(stock[i-1]) {
            case "+":
            stock[0]+=stock[i];
            break;
            case "-":
            stock[0]-=stock[i];
            break;
            case "*":
            stock[0]*=stock[i];
            break;
            case "/":
                if(stock[0] ===0){
                    diviserZero = false;
                }
                else{
            stock[0]/=stock[i];
        }
            break;
        }}
        screen.value = stock[0];

}

