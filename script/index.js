let signup = document.forms.signup
let signin = document.forms.signin
let inputs = signup.querySelectorAll('input')
let cent = document.querySelector('.center')
let inplog = document.querySelectorAll('input')


signup.onsubmit = (event) => {
    event.preventDefault()

    let user = []
    inputs.forEach(inp => {
        user.push(inp.classList.value)
    })
    submit()
    location.reload()
}

function submit() {
    let userData = {}

    let fm = new FormData(signup)

    fm.forEach((value, key) => {
        console.log(value, key);
        userData[key] = value
    })

    localStorage.userData = JSON.stringify(userData)
}

let temp = JSON.parse(localStorage.getItem('userData'))
console.log(temp);

if(temp.length > 0) {
    console.log('nest');
}else {
    cent.innerHTML = ''
    cent.innerHTML += `<form name="signin">
    <h1>Войти в аккаунт</h1>
    <div class="inputs">
        <input type="email" name="email" id="1" placeholder="Почта" class="logemail">
        <input type="password" name="password" id="4" placeholder="Пароль" class="logpass">
        <button class="logbtn">Продолжить</button>
    </div>
    <a href="#">Регистрация</a>
</form>`
}
let logemail = document.querySelector('.logemail')
let logpass = document.querySelector('.logpass')
let logbtn = document.querySelector('.logbtn')

logbtn.onclick = (e) => {
    e.preventDefault()
    if(temp.email == logemail.value && temp.password == logpass.value){
        cent.innerHTML = ''
        cent.classList.remove('center')
        cent.innerHTML += `<div>
        <header>
            <div class="left">
                <a href="#">Главная</a>
                <a href="#">Мои кошельки</a>
                <a href="#">Мои транзакции</a>
            </div>
            <div class="right">
                <a href="#">Выйти</a>
            </div>
        </header>
        <main>
            <div class="welcome">
                <h1>Добро Пожаловать, ${temp.name}</h1>
                <span>${temp.email}</span>
            </div>
            <br>
            <h2>Мои кошельки</h2>
            <br>
            <div class="wallets">
                <div class="wallet">
                    <p>VISA</p>
                    <p>RUB</p>
                </div>
                <div class="wallet">
                    <p>VISA</p>
                    <p>RUB</p>
                </div>
                <div class="wallet">
                    <p>VISA</p>
                    <p>RUB</p>
                </div>
                <div class="wallet">
                    <p>VISA</p>
                    <p>RUB</p>
                </div>
                <a href="#">Смотреть все кошельки</a>
            </div>
            <div class="tranzaksii">
                <table>
                    <tr>
                        <th>ID</th>
                        <th>Отправлено с кошелька</th>
                        <th>Категория</th>
                        <th>Сумма транзакции</th>
                        <th>Когда</th>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>VISA</td>
                        <td>Автомобиль</td>
                        <td>100000$</td>
                        <td>Сегодня</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>VISA</td>
                        <td>Автомобиль</td>
                        <td>100000$</td>
                        <td>Сегодня</td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>VISA</td>
                        <td>Автомобиль</td>
                        <td>100000$</td>
                        <td>Сегодня</td>
                    </tr>
                    <tr>
                        <td>4</td>
                        <td>VISA</td>
                        <td>Автомобиль</td>
                        <td>100000$</td>
                        <td>Сегодня</td>
                    </tr>
                    <tr>
                        <td>5</td>
                        <td>VISA</td>
                        <td>Автомобиль</td>
                        <td>100000$</td>
                        <td>Сегодня</td>
                    </tr>
                    <tr>
                        <td>6</td>
                        <td>VISA</td>
                        <td>Автомобиль</td>
                        <td>100000$</td>
                        <td>Сегодня</td>
                    </tr>
                </table>
            </div>
        </main>
    </div>`
    }else{
        alert('Error!')
        console.log('error');
    }
}

