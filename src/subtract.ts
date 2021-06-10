
interface Difference {
    a: number
    b: number
}

export const MyDifference: Difference = {
    a: 1,
    b: 2
};

export const subtract = ({a, b}: Difference) => {
    return a - b
}
