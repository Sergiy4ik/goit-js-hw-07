const formEl = document.querySelector(".login-form");
formEl.addEventListener("submit", (event) => {
    event.preventDefault();

    const email = formEl.elements.email.value.trim();
    const password = formEl.elements.password.value.trim();

    if (email === "" || password === "") {
        return alert('All form fields must be filled in')
    }
    const userForm = {
        email: email,
        password: password
    }

    console.log(userForm);

    formEl.reset()
});

