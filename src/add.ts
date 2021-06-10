
interface Sum {
    a: number
    b: number
}

export const MySum: Sum = {
    a: 1,
    b: 2
};

export const add = ({a, b}: Sum) => {
    return a + b
}
