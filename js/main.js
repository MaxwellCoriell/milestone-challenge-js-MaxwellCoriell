// Listen for "Grow Your Tree" button click and run function tree
document.getElementById("submit-button").addEventListener("click", tree);

// Return key === "Grow Your Tree" button click
document.getElementById("input-height").onkeypress=function(tomato){
    if(tomato.keyCode===13) {
        tomato.preventDefault();
        var pressedEnter = document.getElementById("submit-button").click();
    }
}

document.getElementById("input-char").onkeypress=function(tomato){
    if(tomato.keyCode===13) {
        tomato.preventDefault();
        var pressedEnter = document.getElementById("submit-button").click();
    }
}

// Create a tree function that should build a pine tree out of a character in the Chrome dev tools console.
function tree(treeObject) {
	//debugger for tree function
	//debugger
	// 1. A key that specifies the height of the pine tree.
	// 2. The value for the height of the tree should be from user input in a <input type="text"> field in the DOM.
    var treeObject = {
    inputHeight: document.getElementById("input-height").value,
    // 3. A key that specifies which character to use to build the pine tree.
	// 4. The character to use should be from user input in a <input type="text"> field in the DOM.
    inputChar: document.getElementById("input-char").value
}
console.log("Fröhliche Weihnachten!");

// Check that user populated both text boxes correctly:
// 1. check that height box is filled, is a whole number, and that it is greater than 0
// 2. check that character box is filled, and that there is no more than one character in it
// display error if one or more statement is false
    if (treeObject.inputHeight === "" || isNaN(treeObject.inputHeight) || treeObject.inputChar ===  "" || treeObject.inputChar.length > 1) {
        alert("Please fill out both inputs correctly!");

    }  else { //if entries are correct: build the tree:
    	// set variables
        var treeString = ""; //actual tree
        var space = " "; //number of spaces in each line to center the tree
        var spaceCount = parseInt(treeObject.inputHeight); //
        var charCount = 1;
        for (var i = 0; i < treeObject.inputHeight; i++) {
            treeString += space.repeat(spaceCount);
            treeString += treeObject.inputChar.repeat(charCount);
            //display tree in console
            console.log(treeString);
            //cset values for next loop
            spaceCount -= 1;
            charCount += 2;
            //loop function to completion
            treeString = "";
        }
    }
}



// function test() {
//     console.log("Listener is working");
// }