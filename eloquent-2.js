
// ============= Looping a triangle =============

var hashTag = '#';
for(let i = 7; i >0; i--){
    console.log(hashTag);
    hashTag += '#';
}


// ============= FizzBuzz =============

for(let num = 1; num < 101; num++){
    if(num % 15 === 0) {
        console.log("FizzBuzz");
    } else if(num % 5 === 0) {
        console.log("Fizz");
    } else if(num % 3 === 0) {
        console.log("Buzz"); 
    } else {
        console.log(num);
    }
}

// ============= Chess board =============
var str = chessStr('#', 4)
for(let i = 8; i > 0; i--){
    if(i%2 === 0){
        console.log(" " + str);
    } else {
        console.log(str);
    }
}

// generate num symbles in one line
function chessStr(symble, num){
    var str = '';
    for(var i = 0; i < num; i++) {
        str += symble + ' ';
    }
    return str + "\n";
} 
