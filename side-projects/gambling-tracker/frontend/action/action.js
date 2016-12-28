export const addName = (names) => ({
	type: "ADD_NAME",
	names:names
})

export const number = (number) => ({
	type:"NUM",
	number:number
})

//name should be in the argument (if i want to make an object with their name in it i will have to pass a value of the input)