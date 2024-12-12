/*
Resume Modal
*/
var resume_modal = document.getElementById("resumeModal");
var resume_btn = document.getElementById("resumeButton");
var resume_span = document.getElementsByClassName("close")[0];

resume_btn.onclick = function() {
    resume_modal.style.display = "block";
}

resume_span.onclick = function() {
    resume_modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == resume_modal) {
            resume_modal.style.display = "none";
    }
}

/*
Email Modal
*/
var email_modal = document.getElementById("emailModal");
var email_btn = document.getElementById("emailButton");
var email_span = document.getElementsByClassName("close")[1];

email_btn.onclick = function() {
    email_modal.style.display = "block";
}

email_span.onclick = function() {
    email_modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == email_modal) {
            email_modal.style.display = "none";
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