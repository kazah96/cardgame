# react-education-server

##Расположение

Индекс находится в папке .\views\index.ejs, на данный момент там находится пример с отправкой запроса для авторизации. Здесь будет
располагатья root. Ознакомьтесь с примером.

Вся публичная часть находится .\public туда складывать весь front-end. 

## Доступные routes

/users принимает JSON файл формата {userName: userName} для авторизации.
Выполняется после авторизации 
/map возвращает сохраненную карту.
/timeOfday возвращает время суток день\ночь в виде JSON файла формата {time: day\night}. Период изменения 1 мин.
/temperature возращает температуру в мире  в виде JSON файла формата {temperature: Number}. Период изменения 20 сек.

##Пример запроса

```js
        document.querySelector("form").addEventListener("submit", (event) => {  
            event.preventDefault();
            const registerForm = document.forms["registerForm"];
            const userName = registerForm.elements["userName"].value;
            const url = '/users';   //Выбрать из routes
            fetch(url, {  
                method: 'post',  
                body: JSON.stringify({userName: userName}), //Отправляемый JSON
            }) 
            .then(response => response.json())
            .then((data) => console.log(data)) //Обрабатываем пришедшие данные
            .catch( (error) => console.log('Request failed', JSON.parse(error)));
        });

```