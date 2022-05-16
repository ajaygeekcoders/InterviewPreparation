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

// creating right side triangle
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

// creating downward right side triangle
for (let i = 1; i < n; i++) {
    let str = "";
    // printing spaces
    for (let j = 0; j < i; j++) {
        str = str + " ";
    }
    // printing star
    for (let k = 0; k < n - i; k++) {
        str = str + "*";
    }
    console.log(str);
}