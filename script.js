
import { Stack } from './stack.js';

document.onkeydown = function(event) {
    if (event.ctrlKey || event.metaKey) {
        event.preventDefault();
    }
};

onload = function () {
    // Get reference to elements
    const textbox = document.getElementById('comment');
    const undo = document.getElementById('undo');
    const clear = document.getElementById('clear');
    const temptext = document.getElementById('temptext');

    textbox.value = "";
    let text = "";
    let stack = new Stack();

   
1
    clear.onclick = function () {
        stack.clear();
        text = "";
        textbox.value = "";
        temptext.innerHTML = "Sequence of operations will be shown here !";
    };

    textbox.oninput = function(event){
        // console.log(event);
        switch(event.inputType){
            case "insertText":
                stack.push(0, event.data);
                break;
            case "deleteContentBackward":
                stack.push(0, text[text.length-1]);
                break;
        }

        temptext.innerHTML = "On stack "+stack.top()+"<br>"+temptext.innerHTML;
        text = textbox.value;
    };

    undo.onclick = function () {
        let operation = stack.pop();
        if(operation!==-1){
            temptext.innerHTML = "Performing undo operation<br>"+temptext.innerHTML;
       
            textbox.value += operation;
        }
            text = textbox.value;
        
    };
};