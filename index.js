// 1
const age = 25
switch (true) {
    case (age < 18):
        console.log("child")
        break;
    case (age < 18 < 40):
        console.log("adult")
        break;
    default:
        console.log("old")
        break;
}

// 2
const day = 4;
switch (day) {
    case 1:
        console.log("monday")
        break;
    case 2:
        console.log("tuesday")
        break;
    case 3:
        console.log("wednesday")
        break;
    case 4:
        console.log("thursday")
        break;
    case 5:
        console.log("friday")
        break;
    case 6:
        console.log("saturday")
        break;

    default:
        console.log("sunday")
        break;
}
// 3

for (let i = 1; i <= 10; i++) {
    console.log(19 * i)
}
// 4
for (let i = 1; i <= 10; i++) {
    console.log(i)
}
// 5
let a = 10
if (a == 10) {
    console.log("negative")
} else {
    console.log("positive")
}
// 6
let a = -10
if (a == 10) {
    console.log("negative")
} else if (a == 0) {
    console.log("zero")
} else {
    console.log("positive")
}