/*
Q. Print below given pattern

*
**
***
****
*****

*/

let n = 5;
for (let i = 1; i <= n; i++) {
    let str = "";
    for (let j = i; j > 0; j--) {
        str = str + "*";
    }
    console.log(str);
}
