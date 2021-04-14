# news-app1.github.io
# News Feed
Система за създадване, управление, и подържане на новини със свободен достъп.

## Функционалност
* Регистрация на потребители
* Възможност за филтриране по дата и филтриране по тема.

## Технологии
* HTML, CSS, JavaScript
* lit-html, page
* GitHub Pages, Back4app

## Екрани (Страници)
* Welcome Screen (catalogue page)
* Login/Regsiter - регистрация с мейл, потребителско име, парола
* News Search by Title - списък с възможност за търсене по заглавие 
* News Details - допълнително описание и текст /добавяне на снимка и автор/
* Edit/Delete - само авторът на статия може да я редактира или изтрива

Part 1
Създаване и настройване на приложение в Back4app
Тестване на API 
Деплойване на приложение в GitHub Pages
Login/Register страница
CRUD функционалност
Part 2
Довършване на структура и стилизация


 ### Реализация
Структура на данните
* Колекции

Sessions (служебна)
Users (служебна)
```javascript
{
    email: String,
    username: String,
    password: String
}
```
News
```javascript
{
    title: String,
    description: String,
    text: String
}
```
 
### Контрол на достъпа
* Гостите могат да се регистрират, да преглеждат каталога, детайлите на статиите и профилните страници на потребителите
* Регистрираните потребители могат да създават, редактират и изтриват статии
* Само създателя на един тест може да го редактира и изтрива
* Всеки регистриран потребител може да вижда статиите


