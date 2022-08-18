function receivesAFunction(callback){
     callback();
}

function returnsANamedFunction(){
     return function lookToday (){
          console.log ('Today is a bright day');
     }
}

function returnsAnAnonymousFunction(){
     return function (){
          console.log("Days of the week");
     }

    
}