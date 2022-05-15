/*
Q. Print below given pattern

    *
   **
  ***
 ****
*****

*/

let n = 5;

// creating downward right triangle
for (let i = 1; i <= n; i++) {
    let str = "";
    // printing spaces
    for (let j = 0; j < n - i; j++) {
        str = str + " ";
    }
    // printing star
    for (let k = 0; k < i; k++) {
        str = str + "*";
    }
    console.log(str);
}
