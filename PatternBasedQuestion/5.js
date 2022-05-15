/*
Q. Print below given pattern

    *
   ***
  *****
 *******
*********
*/

let n = 5;
let k = 1;
for (let i = 1; i <= 5; i++) {
    let str = "";
    for (let j = 5-i; j > 0; j--) {
        str = str + " ";
    }
    for (let j = k; j > 0; j--) {
        str = str + "*";
    }
    k = k + 2;
    console.log(str);
}
