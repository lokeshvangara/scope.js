/ Global Scope : Variables or functions declared in the global namespace have global scope, which means all the variables and functions having global scope can be accessed from anywhere inside the code
var globalVariable = "Hello world";

function sendMessage(){
  return globalVariable; // can access globalVariable since it's written in global space
}
function sendMessage2(){
  return sendMessage(); // Can access sendMessage function since it's written in global space
}
sendMessage2();  // Returns “Hello world”


// Function Scope: Any variables or functions declared inside a function have local/function scope, which means that all the variables and functions declared inside a function, can be accessed from within the function and not outside of it.
function awesomeFunction(){
    var a = 2;
  
    var multiplyBy2 = function(){
      console.log(a*2); // Can access variable "a" since a and multiplyBy2 both are written inside the same function
    }
  }
  console.log(a); // Throws reference error since a is written in local scope and cannot be accessed outside
  
  multiplyBy2(); // Throws reference error since multiplyBy2 is written in local scope

  

// Block Scope: Block scope is related to the variables declared using let and const. Variables declared with var do not have block scope.Block scope tells us that any variable declared inside a block { }, can be accessed only inside that block and cannot be accessed outside of it.
  {
    let x = 45;
  }
   console.log(x); // Gives reference error since x cannot be accessed outside of the block
  
  for(let i=0; i<2; i++){
    // do something
  }
  
  console.log(i); // Gives reference error since i cannot be accessed outside of the for loop block

  
  //Scope Chain:JavaScript engine also uses Scope to find variables.

  var y = 24;

  function favFunction(){
    var x = 667;
    var anotherFavFunction = function(){
      console.log(x); // Does not find x inside anotherFavFunction, so looks for variable inside favFunction, outputs 667
    }
  
    var yetAnotherFavFunction = function(){
      console.log(y); // Does not find y inside yetAnotherFavFunction, so looks for variable inside favFunction and does not find it, so looks for variable in global scope, finds it and outputs 24
    }
  
    anotherFavFunction();
    yetAnotherFavFunction();
  }
  favFunction();
