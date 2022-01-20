# withpostcss

[Installation: Using PostCSS \- Tailwind CSS](https://tailwindcss.com/docs/installation/using-postcss)

## やってみる

### インストールと設定

```bash
npm install -D tailwindcss postcss autoprefixer

npx tailwindcss init
```

- `npx tailwindcss init`を実行すると tailwind.config.js が生成される(詳細ログが出る)

_postcss.config.js_

```js
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {}
  }
}
```

_tailwind.config.js_

```js
module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {}
  },
  plugins: []
}
```

_src/main.css_

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

_index.html_

結果確認用

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link href="/dist/main.css" rel="stylesheet" />
  </head>
  <body>
    <h1 class="text-3xl font-bold underline">Hello world!</h1>
  </body>
</html>
```

### 変換用コマンドの用意と変換

公式だと変換コマンドに `npm run dev` と記載してあって、`npx tailwindcss init` 時にも実際のコマンドがわからないため適当なコマンドで代替

_package.json_

```json
  "scripts": {
    // src配下のcssを監視し、distディレクトリに出力
    "dev": "postcss ./src/**/*.css -d dist --watch"
  },
```

```bash
npm run dev
```

dist/main.css に変換後ファイルが出力されるので、index.html を開いて確認
