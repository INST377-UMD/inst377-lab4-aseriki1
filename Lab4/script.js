// Function for the Alert Me section
function alertName() {
    const name = document.getElementById('name').value;
    if (name) {
        alert(`Hi ${name}!`);
    }
}

// Function for the Change Color section
function changeColor() {
    const body = document.body;
    body.style.backgroundColor = body.style.backgroundColor === 'blue' ? 'green' : 'blue';
}

// Function for the Text Tester section
function validateText() {
    const text = document.getElementById('text-tester').value;
    const validation = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;

    if (validation.test(text)) {
        alert('Text contains special characters!');
    } else {
        alert('Text is valid!');
    }
}

// Function for the Add Text section
function addText() {
    const heading = document.getElementById('page-heading');
    heading.textContent += ' Add Text';
}
