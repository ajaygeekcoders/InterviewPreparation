/*
Q. Print below given pattern

*********
 *******
  *****
   ***
    *
    
*/

let n = 5;

// creating reverse pyramid
for (let i = 0; i < n; i++) {
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
