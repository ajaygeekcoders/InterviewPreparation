/*
Q. Print below given pattern

*********
 *******
  *****
   ***
    *
    
*/

let n = 5;
let k = (n * 2) - 1;
for (let i = n; i > 0; i--) {
    let str = "";
    for (let j = n-i; j > 0; j--) {
        str = str + " ";
    }
    for (let j = k; j > 0; j--) {
        str = str + "*";
    }
    k = k - 2;
    console.log(str);
}
