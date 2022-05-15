/*
Q. Print below given pattern

*****
****
***
**
*

*/

let n = 5;

// creating downward left triangle
for (let i = 0; i < n; i++) {
    let str = "";
    // printing spaces
    for (let j = 0; j < n - i; j++) {
        str = str + "*";
    }
    console.log(str);
}
