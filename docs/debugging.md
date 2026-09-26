# Отладка

## 1. Forbidden на Helios

**Ошибка.** По адресу `https://se.ifmo.ru/~s564789/` браузер показывал:

```text
Forbidden
You don't have permission to access this resource.
```

**Гипотеза.** Не хватает прав на домашний каталог или на `public_html` — веб-сервер
не может прочитать файлы.

**Проверка.** Посмотрел настройки Apache и права:

```bash
cat /usr/local/etc/apache24/Includes/userdir.conf
ls -ld ~ ~/public_html ~/public_html/index.html
```

В конфиге `UserDir public_html` и доступ открыт для `/home/*/*/public_html`, права на
домашний каталог `drwxr-xr-x` — нормальные. А `ls` ответил
`public_html: Нет такого файла или каталога`: каталога просто не было.

**Решение.** Создал каталог и тестовую страницу:

```bash
mkdir -p ~/public_html && chmod 755 ~/public_html
echo "helios-test-ok" > ~/public_html/index.html && chmod 644 ~/public_html/index.html
```

После этого страница открылась. Вывод: Apache возвращает 403, а не 404, когда
у пользователя нет `public_html`.

## 2. `uv` не распознан в PowerShell

**Ошибка.**

```text
uv : Имя "uv" не распознано как имя командлета, функции, файла сценария или выполняемой программы.
```

**Гипотеза.** uv не установлен или его нет в `PATH`.

**Проверка.** `uv.exe` лежит в `C:\Users\maxpr\.local\bin`, и этот каталог уже есть
в пользовательской переменной `Path`. Значит, дело в том, что терминал VS Code был
открыт до установки uv и получил старое окружение.

**Решение.** Перезапустить VS Code (или обновить `$env:Path` в текущей сессии).

## 3. _Заполнить по ходу настройки CI_

**Ошибка.** …

**Гипотеза.** …

**Проверка.** …

**Решение.** …
