


//read,write,execute
//00000100 only read
//00000010 read and write
//00000111 read, write and execute
const readPermission=4;
const writePermission=2;
const executePermission=1;
let myPermission=0;
myPermission=myPermission | writePermission;
// console.log(myPermission);

let message=(myPermission & readPermission) ? 'yes' : 'no';
console.log(message); 