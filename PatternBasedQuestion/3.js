/*
Q. Print below given pattern

    *
   **
  ***
 ****
*****

*/

for (let i = 1; i <= 5; i++) {
    let str = "";
    for (let j = 5-i; j > 0; j--) {
        str = str + " ";
    }
    for (let j = i; j > 0; j--) {
        str = str + "*";
    }
    console.log(str);
}
