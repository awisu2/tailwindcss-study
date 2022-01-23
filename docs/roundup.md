# tailwindcss まとめ

## 新規プロジェクトでのセットアップ

1. postcss で構築する: nest や extends などの拡張機能、webpack や gulp などビルドを利用するようなプロジェクトでも利用しやすくなる
2. config ファイルの作成: `tailwindcss init -p` ([commands](./commands))

## やったほうが良さそうなこと

- フォントの追加: [Font Family \- Tailwind CSS](https://tailwindcss.com/docs/font-family)
  - デフォルトのフォントだと文字の厚みがたりなかったりするので、[Google Fonts](https://fonts.google.com/)などを利用するほうが良さそう
  - また、tailwindcss では `font-sans` などがデフォルトで用意されているので拡張して使用するのが良さそう
    - `tailwindcss init -f` で全デフォルト値がわかるので参考に
