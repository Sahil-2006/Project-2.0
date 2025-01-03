const switchInput = document.getElementById('switch');
const body = document.body;
switchInput.addEventListener('change', function() {
    if (switchInput.checked) {
        body.style.backgroundColor = "#333";
        body.style.color = "#fff";
    } else {
        body.style.backgroundColor = "#fff";
        body.style.color = "#000";
    }
});
