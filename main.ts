// assignment 21
// They think of something you could store in a Typescript Object. write a program that creates objects containing these items.

let objectContainingItems: {[key: string]: any} = {
    "Laptop": {
        name: "Laptop",
        price: "8000",
        description: "High performance laptop with fast processor"
    },
    "Mouse": {
        name: "Mouse",
        price: "1000",
        description: "High performance Mouse"
    },
    "Keyboard": {
        name: "Keyboard",
        price: "700",
        description: "High performance Keyboard"
    }
  
}

console.log(objectContainingItems);
