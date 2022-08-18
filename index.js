function receivesAFunction(callback){
     callback();
}
receivesAFunction(()=> {return sum})

function returnsANamedFunction(){
     return function lookToday (){
          console.log ('Today is a bright day');
     }
}

function returnsAnAnonymousFunction(){
     return () => console.log("Days of the week");
     }

    

