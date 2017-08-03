// export var test1 = {
//     title:'Hello world1'
// };
// export var test2 = {
//     title:'Hello world2'
// };
// export var test3 = class Test3{
//     constructor(){
//
//     }
//     static title(){
//         return 'Hello world2';
//     }
// }
// export default {
//     test1,
//     test2,
//     test3
// };

import {test2,test3} from 'atest';
let title = (a)=>test2.title+a;
console.log(test2,title(' na nah'),test3.title());

//TODO
//dev-server
//demo, demo config
//remove dev
//stylus
//html plugin