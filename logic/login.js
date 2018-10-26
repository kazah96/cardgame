let users = ['Игорь', 'Кирилл', 'Артем']// массив вытаскивать из бд

const nameUser = (user) => {
    const user = user + "";
    console.log(1);
    users.forEach((item, user) => { //перебор из бд
        if (item === user) { //если есть отправить предупреждение
            return alert('Пользователь существует!')
        } else {
            return (loginIn(user))() //создаем пользователя
        }
    }
    )
}

const loginIn = (user) => {
    // здесь добавляем user в бд.
}

module.exports = nameUser;