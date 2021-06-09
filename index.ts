console.log('Hello World!')

interface Sum {
    a: number
    b: number
}

const add = ({a, b}: Sum) => {
    return a + b
}

const MySum: Sum = {
    a: 1,
    b: 2
};

console.log(add(MySum))