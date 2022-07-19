function factorial(num){
    if(num == 0){
        return 1
    }
    else{
        return num * factorial(num-1)
    }
}
console.log(factorial(5))

function calculateFactorial(num){
    return num == 0 ? num = 1 : num = num*calculateFactorial(num-1)
}
// console.log(calculateFactorial(5))

let family = {
    name: "generation 1",
    child:{
        name:"generation 2",
        child:{
            name:"generation 3",
            child: {
                name:"generation 4",
                child: {
                    name: "generation 5",
                },
            },
        },
    },
};
const printOrderdTreeObj = (obj) => {
    if(obj){
        console.log(obj.name);
        printOrderdTreeObj(obj.child);
    }
};
console.log(printOrderdTreeObj(family))