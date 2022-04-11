// Activity 1
let minus = (num1, num2, num3) => {
    return num1 - num2 - num3
}

// Activity 2
let myArray = (values) => {
    let string6 = []
    for(let i = 0; i < values.length; i++)
    {
        if(values[i].length > 5){
            string6.push(values[i])
        }
    }
        return string6
}
// Activity 3
let students = ['joe', 'sim', 'johnny', 'mark'];


// // Activity 4
let num = () => {
    let century = Math.ceil(num/100);
    return century
}

module.exports = {
    minus,
    students,
    myArray,
    num,
}

