let age=parseInt(prompt("Enter your age"))
let gender=parseInt(prompt("Enter your gender"))
switch (true) {
    case (age<18):
        console.log("your age must be 18");
        break;
        case (age===18>25 && gender==="male"):
        console.log("Use gate one");
        break;
        case (age===25>60 && gender==="male"):
        console.log("Use gate three");
        break;
        case (age===18>25 && gender==="female"):
        console.log("Use gate two");
        break;
        case (age===25>60 && gender==="female"):
        console.log("Use your gate four");
        break;

    default:
        console.log("enter correct age");
        break;
}