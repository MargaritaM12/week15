function check() {
    let name = document.getElementById("exampleInputName");
    let lastname = document.getElementById("exampleInputLastname");
    let email = document.getElementById("exampleInputEmail");
    let password1 = document.getElementById("exampleInputPassword");
    let password2 = document.getElementById("exampleInputPassword");

    document
        .getElementById('errorMessage')
        .innerHTML = '';

    if (name.value == '') {
        document
            .getElementById('errorMessage')
            .innerHTML += "Ваше имя не заполнено<br>";
    }

    if (lastname.value == '') {
        document
            .getElementById('errorMessage')
            .innerHTML += "Ваша фамилия не заполнена<br>";
    }

    if (email.value == '') {
        document
            .getElementById('errorMessage')
            .innerHTML += "Ваш email не заполнен<br>";
    }

    if (password1.value.length <= 5) {
        document
            .getElementById('errorMessage')
            .innerHTML += "Ваш пароль короткий<br>";
    }

    if (password2.value.length <= 5) {
        document
            .getElementById('errorMessage')
            .innerHTML += "Ваш пароль короткий<br>";
    }
}