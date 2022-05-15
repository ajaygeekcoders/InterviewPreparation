/*
Q. Print below given pattern

    *
   ***
  *****
 *******
*********
*/

let n = 5;

// creating pyramid
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
