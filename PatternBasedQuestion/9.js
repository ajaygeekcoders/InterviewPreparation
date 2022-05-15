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

let n = 9;
let mid = Math.round(n/2);
let k = 1;
let l = 1;
let m = (mid * 2) - 3;
let multiplier = 2;
for (let i = 1; i <= n; i++) {
    let str = "";
    if(i <= mid) {
        for (let j = mid - i; j > 0; j--) {
            str = str + " ";
        }
        for (let j = l; j > 0; j--) {
            str = str + "*";
        }
        l = l + 2;
    } else {
        for (let j = i - mid; j > 0; j--) {
            str = str + " ";
        }
        for (let j = m; j > 0; j--) {
            str = str + "*";
        }
        m = m - 2;
    }
    console.log(str);
}
