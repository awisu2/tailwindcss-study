# gettingStart study

[Installation: Tailwind CLI \- Tailwind CSS](https://tailwindcss.com/docs/installation)

- 本番用ビルド: --minifyを追加 (`npx tailwindcss -o build.css --minify` )
- watch: --watchを追加 (`npx tailwindcss -i ./src/input.css -o ./dist/output.css --watch`)

## getting start

```bash
npm init

npm install -D tailwindcss
npx tailwindcss init
```

*tailwind.config.js*

```js
module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
      extend: {},
    },
    plugins: [],
  }
```

src/input.css

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

input.css を tailwindcss で変換して dist/output.css へ

```bash
npx tailwindcss -i ./src/input.css -o ./dist/output.css --watch
```

*index.html*

一旦ローカルファイルで試すのでsrcディレクトリ内には設置しない

```html
<!doctype html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link href="./dist/output.css" rel="stylesheet">
</head>
<body>
  <h1 class="text-3xl font-bold underline">
    Hello world!
  </h1>
</body>
</html>
```

ファイラから開くとcssが適応されている
