# config

tailwind.config.js について

[Configuration \- Tailwind CSS](https://tailwindcss.com/docs/configuration)

デフォルトで生成される中身

```js
module.exports = {
  content: [],
  theme: {
    extend: {}
  },
  plugins: []
}
```

- javascript で設定する場合: [Configuration \- Tailwind CSS](https://tailwindcss.com/docs/configuration#referencing-in-java-script)

## ファイル生成

通常は `npx tailwindcss init -p` が良さそう

- `npx tailwindcss init` を実行すると生成される
- `-p` オプションを付与すると _postcss.config.js_ も生成する
- `-full` オプションを付与すると 全デフォルト値が設定された _tailwind.config.js_ が生成される([UNPKG \- tailwindcss](https://unpkg.com/browse/tailwindcss@3.0.15/stubs/defaultConfig.stub.js))

## 別名

ファイル自体の作成は自由で実行時に指定が必要

- -c オプションで指定 `npx tailwindcss -c twconfig.js`
- _postcss.config.js_ で指定する場合: `tailwindcss: { config: './twconfig.js' },`

## 各パラメータ

- [Content](https://tailwindcss.com/docs/content-configuration): tailwind のクラス名が含まれるファイルを指定 (ex: `'./pages/**/*.{html,js}'`)
  - 指定しなかった場合、ビルドしても style が反映されなかったので、使われているクラスのみコンパイルしているかと思われる
- [Theme](https://tailwindcss.com/docs/configuration#theme): tailwind class の追加及び既存設定のカスタム設定
- [Plugins](https://tailwindcss.com/docs/plugins): css の新しいスタイルの登録や、js 用いての設定が可能になる
  - [official Plugins](https://tailwindcss.com/docs/plugins#official-plugins)
    - [typography](https://tailwindcss.com/docs/typography-plugin)
    - [forms](https://github.com/tailwindlabs/tailwindcss-forms)
    - [line\-clamp](https://github.com/tailwindlabs/tailwindcss-line-clamp)
    - [aspect\-ratio](https://github.com/tailwindlabs/tailwindcss-aspect-ratio)
- [Presets](https://tailwindcss.com/docs/presets): 他の config ファイルを読み込み deafult に上書き
- Prefix(string): tailwind のクラスに prefix を付与する
  - `prefix: 'tw-'` とした場合 `tw-p1` のように tw-を付与される
- Important(boolean): tailwind の style に!important が付与される
- separator(string): パラメータ間を接続する文字の変更
  - `separator: '_'` とすると `text-center` が `text_center` になる
    - この例は [Pug](https://pugjs.org/api/getting-started.html) テンプレートなどで利用する際に有効とのこと
- _corePlugins_: tailwind がデフォルトで生成する class の on/off の設定
  - いくつかの指定方法がある
    - 個別設定式: `corePlugins: { float: false, padding: false, }`
    - セーフリスト設定: `corePlugins: ['float', 'padding']` のように記述するとセーフリストになる(設定してもののみを有効)
      - すべて無効: `corePlugins: []`
  - 設定可能なパラメータ: [Configuration \- Tailwind CSS](https://tailwindcss.com/docs/configuration#core-plugins)
