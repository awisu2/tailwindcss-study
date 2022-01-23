# tailwindcss まとめ

## tips

- おすすめ事項
  - postcss を利用: [awisu2/postcss\-study](https://github.com/awisu2/postcss-study)
  - フォントの追加: [Font Family \- Tailwind CSS](https://tailwindcss.com/docs/font-family)
    - デフォルトのフォントだと文字の厚みがたりなかったりするので、[Google Fonts](https://fonts.google.com/)などを利用するほうが良さそう
    - また、tailwindcss では `font-sans` などがデフォルトで用意されているので拡張して使用するのが良さそう
      - `tailwindcss init -f` で全デフォルト値がわかるので参考に
- css が反映されないパターン
  - content(tailwind.config.js) に一致するファイルに tailwindcss の class が「そのまま」文字列としている必要がある
    - NG パターン:`text-{color}-100`のように途中を区切る、関数の文字列で返却(変数宣言して返却なら OK), css で宣言しただけ
    - OK パターン: 変数として存在している, タグ内の class に関数利用しながらも存在
  - 関連記事
    - [Just\-in\-Time Mode \- Tailwind CSS](https://v2.tailwindcss.com/docs/just-in-time-mode#arbitrary-value-support)
    - [How to change classes dynamically? \(Tailwind with Next\.js\) · Discussion \#3461 · tailwindlabs/tailwindcss](https://github.com/tailwindlabs/tailwindcss/discussions/3461)
- 大量に class 書かないといけないんだけど
  - [Reusing Styles \- Tailwind CSS](https://tailwindcss.com/docs/reusing-styles)
  - js やフレームワークでコンポーネントを分けることが推奨されている。
  - @apply により一つのクラスにまとめることが可能
- postcss.conofig.js は配列式と Object 式のどちらがいいのか？
  - 基本環境によるという前提で、配列 式のほうが良さそう？
  - tailwindcss の init コマンドを利用すると Object 式でファイルが生成される、けれどドキュメントの設定例を見ると配列式

## 新規プロジェクトでのセットアップ

1. postcss で構築する: nest や extends などの拡張機能、webpack や gulp などビルドを利用するようなプロジェクトでも利用しやすくなる
2. config ファイルの作成: `tailwindcss init -p` ([commands](./commands))
3. minifi の追加: `cssnano`
4. @import, nest, vendor prefixes など拡張機能の追加
   - [Using with Preprocessors \- Tailwind CSS](https://tailwindcss.com/docs/using-with-preprocessors)
5. tailwind.config.js の content をセットする: セットしないとクラスが出力されないので忘れない

```bash
# パッケージインストール
npm install -D tailwindcss postcss-cli cssnano postcss-import postcss-nesting autoprefixer
# configファイルの作成(tailwindcss.config.jsのdefaultを知りたい場合は -f を追加)
npx tailwindcss -p

# 変換(下記設定後)
npx postcss src/*.scss -d postcss_dist
```

_postcss.config.js_

```js
const isProduction = process.env.NODE_ENV === 'production'

function getPlugins() {
  let plugins = [
    require('postcss-import'),
    require('tailwindcss/nesting'),
    require('tailwindcss'),
    require('autoprefixer')
  ]
  if (isProduction) {
    const prodPlugins = [require('cssnano')]
    plugins = [].concat(plugins, prodPlugins)
  }

  return plugins
}

module.exports = {
  plugins: getPlugins()
}
```

_tailwind.config.js_

src ディレクトリ配下の html, js を対象に

```js
module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {}
  },
  plugins: []
}
```
