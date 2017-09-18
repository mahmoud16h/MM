function myobj(name, age, color, testResult){
    this.name = name;
    this.age = age;
    this.color = color;
    this.testResult = testResult;
    this.info = () => {
        console.log(this.name);
        console.log(this.age);
    };
    this.printFavColor = () => {
        console.log(this.color)
    };
    this.printTestResult = () => {
        console.log(this.testResult)
    };
    this.average = () =>{
        var result = 0;
        for (var i = 0; i < this.testResult.length ; i++){
            result = result + this.testResult[i];
        }
        result = result/this.testResult.length;
        console.log(result);
        return result;
    }
    this.getMyObject = () => {
        return {
            name: this.name,
            age: this.age,
            color: this.color,
            averageTestResult: this.average()

        }

    }
}

let muk = new myobj("muk", 25, "blue", [1,24,5,7,8]);

let result = muk.getMyObject();
console.log(result);
