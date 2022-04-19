class Animal {
    constructor(name, height){
        this.name = name;
        this.height = height;
    }
    //Special Methods
    hello(){
        console.log(`Hi im ${this.name}`)
    }
}

export default Animal;