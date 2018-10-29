const users = ["Игорь", "Кирилл", "Артем"];// массив вытаскивать из бд

const loginIn = _userIn => ({ message: "Пользователь добавлен!" }); // Добавить пользователя в бд

const nameUser = (user) => {
  const userName = `${user}`;
  if (users.some(item => item === userName)) { return { message: "Пользователь существует!" }; } return loginIn(userName); // вместо return выгрузить пользователя
};

module.exports = nameUser;
