const text = [
"Paste your email here...",
"Congratulations! You won ₹10,00,000.",
"Your OTP is 453281.",
"Click here to claim your prize.",
"Meeting is scheduled at 10 AM."
];

let i = 0;
let j = 0;

const textarea = document.querySelector("textarea");

function type(){

    if(j < text[i].length){

        textarea.setAttribute(
        "placeholder",
        text[i].substring(0,j+1));

        j++;

        setTimeout(type,70);

    }

    else{

        setTimeout(erase,1500);

    }

}

function erase(){

    if(j>0){

        textarea.setAttribute(
        "placeholder",
        text[i].substring(0,j-1));

        j--;

        setTimeout(erase,30);

    }

    else{

        i++;

        if(i>=text.length){

            i=0;

        }

        type();

    }

}
const toggle = document.getElementById("theme-toggle");

toggle.onclick = () => {

document.body.classList.toggle("dark");

toggle.innerHTML =
document.body.classList.contains("dark")
? "☀️"
: "🌙";

}
type();