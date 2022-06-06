const input = document.getElementById('email');
const form = document.getElementById('form');
const error = 'error';

const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const validateEmail = (email) => regex.test(email);

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = input.value;
    
    if (!validateEmail(email)) {
        form.classList.add(error);
        return;
    }

    form.classList.remove(error);
});