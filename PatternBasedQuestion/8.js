/*
Q. Print below given pattern

    *
   **
  ***
 ****
*****
 ****
  ***
   **
    *
    
*/

let n = 9;
let mid = Math.round(n/2);
let k = 1;
let multiplier = 2;
for (let i = 1; i <= n; i++) {
    let str = "";
    if(i <= mid) {
        for (let j = mid - i; j > 0; j--) {
            str = str + " ";
        }
        for (let j = i; j > 0; j--) {
            str = str + "*";
        }
    } else {
        for (let j = i - mid; j > 0; j--) {
            str = str + " ";
        }
        for (let j = i-(k * multiplier); j > 0; j--) {
            str = str + "*";
        }
        k++;
    }
    console.log(str);
}
