/* Let Var & Const -> scope and mutability issue */

var name = 'c';
if(true){
    var name = "c++";
    console.log(name);
}

console.log(name);