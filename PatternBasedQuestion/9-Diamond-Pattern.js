/*
Q. Print below given pattern

    *
   ***
  *****
 *******
*********
 *******
  *****
   ***
    *
    
*/

let n = 5;

// creating upside pyramid
for (let i = 1; i <= n; i++) {
    let str = "";
    // printing spaces
    for (let j = 1; j <= n - i; j++) {
        str = str + " ";
    }
    // printing star
    for (let k = 0; k < 2 * i - 1; k++) {
        str = str + "*";
    }
    console.log(str);
}

// creating downside pyramid
for (let i = 1; i <= n - 1; i++) {
    let str = "";
    // printing spaces
    for (let j = 0; j < i; j++) {
        str = str + " ";
    }
    // printing star
    for (let k = (n - i) * 2 - 1; k > 0; k--) {
        str = str + "*";
    }
    console.log(str);
}
