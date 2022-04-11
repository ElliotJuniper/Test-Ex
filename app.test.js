const { TestWatcher } = require('@jest/core')
const funcs = require('./app')

// Activity 1
describe("testing my minus function", () => { //Group tests together
    test("should equal -8 when pass 3 and 4 and 7", () => {
        expect(funcs.minus(3, 4, 7)).toBe(-8)
    })
    test("should not equal 11 when passed 3 and 4 and 7", () => {
        expect(funcs.minus(3, 4, 7)).not.toBe(11)
    })
})

test("should equal -8 when pass 3 and 4 and 7", () => {
    expect(funcs.minus(3, 4, 7)).toBe(-8)
})

test("should not equal 91 when passed 3 and 4 and 7", () => {
    expect(funcs.minus(3, 4, 7)).not.toBe(91)
})

// Activity 2
test('should return items with 6 or more characters', () => {
    let values = ['Blackmail', 'Renegade', 'Bugatti', 'Yellow', 'Smoke', 'Ant']
    expect(funcs.myArray(values)).toEqual(['Blackmail', 'Renegade', 'Bugatti', 'Yellow'])
})

// Activity 3
test('Class should contain 4 students', () => {
    expect(funcs.students).toHaveLength(4)
})

// Activity 4
test('Pull century from year', () => {
    expect(funcs.num(1705)).toBe(17)
})