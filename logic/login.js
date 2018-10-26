let users = ['Игорь', 'Кирилл', 'Артем']// массив вытаскивать из бд

const nameUser = (user) => {
    const userName = user + "";
    users.forEach((item) => { //перебор из бд
        if (item === userName) { //если есть отправить предупреждение
            // console.log(userName);
            return {message:'Пользователь существует!'}
        } else {
            return loginIn(userName) //создаем пользователя
        }
    }
    )
}

const loginIn = (user) => {
    // здесь добавляем user в бд.
    return {message:'Пользователь добавлен!'}
}

module.exports = nameUser;