# tailwindcss study

[Tailwind CSS \- Rapidly build modern websites without ever leaving your HTML\.](https://tailwindcss.com/)

- tailwindcss とは: class ベースの css テンプレート
- 基本動作: 最初から css があるのではなく、javascript によって、対象 html ファイルを確認し必要な css を出力する(利用しない class は出力しない)
- postcss は使ったほうがいい?: 使ったほうが良さそう。tailwindcss 単体でも実行できるが 公式ドキュメントでもちょいちょい出てきて、利用前提っぽい感じがする
  - [awisu2/postcss\-study](https://github.com/awisu2/postcss-study)

## tailwindcss 公式ドキュメントの大項目

- [Documentation](https://tailwindcss.com/docs/installation): tailwindcss の利用方法
- [Components](https://tailwindui.com/): tailwndcss を利用したいい感じのテンプレート集
  - code ボタンを押して表示された code をコピーして利用
  - 鍵アイコンが付いたものは有料
  - デフォルトでプラグインとして提供されているものもある。(@tailwindcss/forms, @tailwindcss/typography, @tailwindcss/aspect-ratio など)
- [Screencasts](https://www.youtube.com/tailwindlabs): youtube
- [Tailwind Play](https://play.tailwindcss.com/): オンラインお試し環境
- [Resources](https://tailwindcss.com/resources): tailwindcss でのデザインをもっと良くするあれこれ追加要素
- [comunity](https://github.com/tailwindlabs/tailwindcss/discussions): github discussions

## .contents

- [getting start](./gettingStart): とりあえずやってみる
- [postcss](./withpostcss): postcss を利用して実行
- [samples](./samples): 実験サンプル。基本設定も

### ./docs

- [Editor Setup \- Tailwind CSS](https://tailwindcss.com/docs/editor-setup)
- [cheatsheet](./docs/cheatsheet.md): チートシート
- [config](./docs/config.md): tailwind.config.js について
