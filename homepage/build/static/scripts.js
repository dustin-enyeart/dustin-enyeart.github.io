/*
Email Modal
*/
var modal = document.getElementById("emailModal");
var btn = document.getElementById("emailButton");
var span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
    modal.style.display = "block";
}

span.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
            modal.style.display = "none";
    }
}


/*
Copy Button
*/
function copyText(textId) {
    // Get the text field 
    var copyText = document.getElementById(textId);
    // Select the text field 
    window.getSelection().selectAllChildren(copyText);
    // Copy the text inside the text field 
    document.execCommand("copy");
}