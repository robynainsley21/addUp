const myArr = [5, 76, 23, 9, 11, 32]

const addition = (curr, nextValue) => {
    return curr + nextValue
}

const sumOfArray = () => {
    return myArr.reduce( addition )
}
console.log(sumOfArray())
