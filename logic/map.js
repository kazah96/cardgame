
const saveMap = (user, map) => ({ massage: "Карта сохранена" }); // Сохранить карту по имени пользователя

const loadMap = (user) => {
  const map = []; // Выгрузить карту по имени пользвоателя
  return { map };
};

module.exports = saveMap;
module.exports = loadMap;
