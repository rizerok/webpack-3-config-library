//import '../styles/style.styl';
export var test1 = {
    title:'Test'
};
export var test2 = {
    title:'Test2'
};
export var test3 = class Test3{
    constructor(){

    }
    static title(){
        return 'Test3';
    }
};
export default {
    test1,
    test2,
    test3
};

//TODO
//production(uglify)
//babel-polifil
//codepen +template on codepen
//windows compatibility
//refactor paths
//hmr
