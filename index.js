console.log("1")

class demo {
    constructor(name) {
        this.name = name
    }
    avg() {
        return (this.name * 2)
    }
}
let one = new demo(5);

console.log(one.avg());
