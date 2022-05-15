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

let n = 5;

// creating left triangle
for (let i = 1; i <= n; i++) {
    let str = "";
    // printing star
    for (let j = 0; j < i; j++) {
        str = str + "*";
    }
    console.log(str)
}

// creating downward left triangle
for (let i = 1; i < n; i++) {
    let str = "";
    // printing spaces
    for (let j = 0; j < n - i; j++) {
        str = str + "*";
    }
    console.log(str);
}