// Global variables
let div = null;

// Main Loader
window.onload = () =>{
    main();
}

// Main Function
function main(){

    const mainDiv = document.getElementById('parent');
    const change = document.getElementById('change');
    const headingColor = document.getElementById('cng-color');
    const output = document.getElementById('output');
    const copyBtn = document.getElementById('btn-copy');

    // add event lister to change button
    change.addEventListener('click' , function() {
        const bgColor = generateHexcolor();
        const h1Color = generateHexcolor();

        headingColor.style.color = h1Color;
        mainDiv.style.backgroundColor = bgColor;
        output.value = bgColor;
    });

    // copy to clipboard
    copyBtn.addEventListener('click' , function() {
        navigator.clipboard.writeText(output.value);
        if(div !== null){
            div.remove();
            div = null;
        }
        generateToastmessage(`${output.value} Copied!`);
    });
}


// Generate random hex color
function generateHexcolor(){

    const red = Math.floor(Math.random() * 255);
    const green = Math.floor(Math.random() * 255);
    const blue = Math.floor(Math.random() * 255);

    return `#${red.toString(16)}${green.toString(16)}${blue.toString(16)}`;
}

// Toast Message
function generateToastmessage(msg){
    div = document.createElement('div');
    div.className= "toast-message animationIn";
    div.innerText = msg;

    div.addEventListener('click' , function() {
        div.classList.remove('animationIn');
        div.classList.add('animationOut');

        div.addEventListener('animationend' , function() {
            div.remove();
            div = null;
        });
    });

    document.body.appendChild(div);
}

