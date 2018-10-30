# react-education-server

## Доп. софт

Дополнительно необходимо установить https://www.mongodb.com/download-center/community 

## Расположение

Индекс находится в папке .\views\index.ejs, на данный момент там находится пример с отправкой запроса для авторизации. Здесь будет
располагатья root. Ознакомьтесь с примером.

Вся публичная часть находится .\public туда складывать весь front-end. 

## Доступные routes

 * GET /world?name=$NAME
    Возвращает состояние мира $NAME пользователя если таковой имеется, 404 в противном случае.  
    ```JSON
        {   
            "user": "",
            "map": {},
            "events": [{}, {}]
        }
    ```
  * POST /world
    Принимает JSON вида:  
      ```JSON
        {   
            "user": "",
            "map": {},
            "events": [{}, {}]
        }
    ```
    Обновляет, если мир пользователя user уже существует, добавляет если не существует.

    * POST /event возвращает значение события в виде JSON файла формата: 
    ```JSON
        {
            eventType: "x",
        }
    ```
, где x значение события, строка, если значение строкове и число, если числовое.

### Существующие event

    eventName: "temperature" - Вернет числовое значение в интервале [1,30], в виде { temperature: 25 }. Обновление при каждом запросе.

    eventName: "timeOfday" - Вернет строковое значение "day" или "night", в виде { time: "day" }. Обновление каждые 30 сек.

## Пример запроса

### js
```js
            const eventType = "temperature";
            const url = '/event';   //Выбрать из routes
            fetch(url, {  
                method: 'post',  
                body: JSON.stringify({eventName: eventType}), //Отправляемый JSON
            }) 
            .then(response => response.json())
            .then((data) => console.log(data)) //Обрабатываем пришедшие данные
            .catch( (error) => console.log('Request failed', JSON.parse(error)));

```


