const OS = new Map();
OS.set('iOS',"Apple");
OS.set('Windows',"Microsoft");
OS.set('Linux',"*more than one*");

for (const key of OS) {
    console.log(key);
}

for (const [i,j] of OS) {
    console.log(i);
}

for (const [i,j] of OS) {
    console.log(`${i}=>>${j}`);
}