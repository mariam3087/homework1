let quiz = prompt("Welcome to the Quiz Game! Choose a topic:\n1. strings\n2. variable\n3. math");
let question = "";
let answer = "";
switch (quiz) {
    case "1":
        question = "რა არის typeof(5)?";
        let userChoice1 = prompt(question);
        if (userChoice1.toLowerCase() === "number") {
            alert("სწორია!");
        } else {
            alert("სამწუხაროდ, ვერ გამოიცანით");
        }
        break;
        
    case "2":
        question = "შეიძლება თუ არა let-ის რედეკლალირება";
        let userChoice2 = prompt(question);
        if (userChoice2.toLowerCase() === "yes") {
            alert("სწორია!");
        } else {
            alert("სამწუხაროდ, ვერ გამოიცანით");
        }
        break;
        
    case "3":
        question = "რას აბრუნებს console.log(Math.floor(2.1))";
        let userChoice3 = prompt(question);
        if (userChoice3.toLowerCase() === "ori") {
            alert("სწორია!");
        } else {
            alert("სამწუხაროდ, ვერ გამოიცანით");
        }
        break;
        
    default:
        alert("გთხოვთ აირჩიოთ სწორი ნომერი (1, 2 ან 3)");
        location.reload()
}