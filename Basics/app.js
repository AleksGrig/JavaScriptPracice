const str = "Alex"

function reverse(str) {
    return (str) ? reverse(str.slice(1)) + str[0] : ""
}

console.log(reverse(str))

const arr = ['red', 'green', 'blue']
console.log(...arr)