function makeBigger(){
    alert("Hello, world!");
    document.getElementById("textInput").style.fontSize = "24pt";
}

function makeFancy(){
    let value = document.getElementById("textInput");

    if(document.getElementById("fancy").checked){
        value.style.fontWeight = "bold";
        value.style.color = "blue";
        value.style.textDecoration = "underline";

    } else if (document.getElementById("boring").checked) {
        value.style.fontWeight = "normal";
        value.style.color = "black";
        value.style.textDecoration = "none";
    }
}

function mooText(){
    let textArea = document.getElementById("textInput"); // get the text area
    let text = textArea.value.toUpperCase(); // convert text to uppercase

    let sentences = text.split("."); // split text into sentences
    for (let i=0; i<sentences.length-1; i++){ 
        let parts = sentences[i].trim().split(" "); // split sentence into words
        if (parts.length>0){
            parts[parts.length-1]=parts[parts.length-1]+"-Moo"; // add "-Moo" to the last word
        }
        sentences[i] = parts.join(" ");
    }
    textArea.value = sentences.join(". ");  // set the text area value to the uppercase text
}
