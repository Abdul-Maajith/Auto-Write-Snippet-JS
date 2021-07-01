const  text = "Hello! This is Abdul Maajith..";

let index = 0;

function autowrite() {
    document.body.innerText = text.slice(0, index);
    
    if(index > text.lenght) {
        index = 0;
    }

    index++;
}
setInterval(autowrite,100);