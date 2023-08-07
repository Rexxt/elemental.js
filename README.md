# elemental.js
minimal, client-side components (without using the custom components api)

here's a reactive hello world example:
* in `components.js`:
```js
let name = 'world';
elemental.create(function hello(element) {
    return `<p>Hello, ${eval(element.expression)}!</p>`;
});

window.addEventListener('load', () => {
    const textBox = document.getElementById('name');
    textBox.addEventListener('change', (e) => {
        name = textBox.value;
        elemental.renderType('hello');
    });
});
```
* in `index.html`:
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Hello world example</title>

    <script src="elemental.js"></script>
    <script src="components.js"></script>
</head>
<body>
    <input id="name"/>
    <hello expression="name"/>
</body>
</html>
```
