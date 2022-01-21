# cheatsheet

基本的な設定は class に指定することで反映される

公式サンプル: [Utility\-First Fundamentals \- Tailwind CSS](https://tailwindcss.com/docs/utility-first)

## ほぼ style と 1:1 の class

- paddding: `p-0` = `padding: 0px;`
  - [Padding \- Tailwind CSS](https://tailwindcss.com/docs/padding)
  - size: `p-6` = `padding: 1.5rem;` (1-96 全サイズあるわけではない 1-12 までは完備、rem で指定)
  - dimention: `px-0` = `padding-left: 0px; padding-right: 0px;` (`{t|r|b|l|x|y}` で方向を指定)
  - custom: [Padding \- Tailwind CSS](https://tailwindcss.com/docs/padding#customizing-your-theme)
- display
  - [Display \- Tailwind CSS](https://tailwindcss.com/docs/display#flex)
  - table: `table`
  - block/inline: `inline`, `inline-block`, `block`
  - flex: `flex`, `inline-flex`
  - grid: `grid`, `gap-0`, `grid-cols-0`, `grid-rows-0`
    - [Grid Template Columns \- Tailwind CSS](https://tailwindcss.com/docs/grid-template-columns)
    - custom: [Grid Template Columns \- Tailwind CSS](https://tailwindcss.com/docs/grid-template-columns#customizing-your-theme)
      - minmax の一定サイズ固定などで必要になりそう
- border
  - width: `border{-position}{-size}`
    - size: `border-{0|2|4|8}`
      - 単位は px 指定したサイズそのままの px が割当
    - position: `border-{t|r|b|l|x|y}`
  - raddius: `rounded{-position}{-size}`(`rounded`, `rounded-tl-3xl`)
    - [Border Radius \- Tailwind CSS](https://tailwindcss.com/docs/border-radius#rounded-corners)
    - size: `rounded-{sm|lg|xl|2xl|3xl|full|none}`
      - 単位は rem, full の場合 9999px
    - position: `rounded-{t|r|b|l|tr|rl|br|bl}`
- [text](https://tailwindcss.com/docs/text-align)
  - align: `text-{left|center|right|justify}`
  - color: `text{-color{-power{/opacity}}}` 共有値を参照(後述)
    - [Text Color \- Tailwind CSS](https://tailwindcss.com/docs/text-color)
- [font](https://tailwindcss.com/docs/font-family)
  - font-family: font-family の標準的(?)な組み合わせ `font-{sans|serif|mono}`
  - font-weight: `font-{thin|extralight|light|normal|medium|semibold|bold|extrabold|black}` (左から順に大きくなる(100~900))
- text-decoration: `{underline|overline|line-through|no-underline}`
  - color: `decoration-{color{-power{/opacity}}}` 共有値を参照(後述)
- list
  - list-style-type: `list-{none|disc|decimal}` (disc: "・", decimal: "1. 2. 3....")
  - list-style-position: コンテンツ領域内の list-style-type の表示位置 `list-{inside|outside}`

## style の実態が少し複雑な指定になるもの

- divide: 直下の子要素間に線を引く `divide`, `divide-x-8`, `divide{-position}{-size}`
  - size: `divide-{1-8}` 数値に対応した px が指定
  - position: `divide-{x|y}`
- ring: 要素の周りに囲み線(box-shadow を利用) `ring{-size}`
  - 角は`rounded`に合わせて変化
- メディアサイズ別設定: `{sm|md|lg|xl|2xl}:{any}`
  - [Responsive Design \- Tailwind CSS](https://tailwindcss.com/docs/responsive-design)
- ダークモード: `dark:{any}`

## 特殊指定

- [Functions & Directives](https://tailwindcss.com/docs/functions-and-directives)
  - @tailwind: tailwind の事前準備した style を出力する
    - todo: base, components が具体例がないため何やってるか不明なので調査必要
  - @layer: カスタムスタイルが所属する bucket を指定 (base, components, utilities のいずれか)
    - 具体的には、記載したカスタムクラスを @tailwind での export 時に紛れさせられるのだと思う、上書きによる意図しない反映 を防止可能との頃
  - @apply: 複数の class をまとめて別のクラスとして宣言

## 共有値

- color: `{inherit|current|transarent|black|white|slate|gray|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose}`
  - 公式ドキュメント: [Customizing Colors \- Tailwind CSS](https://tailwindcss.com/docs/customizing-colors)
  - transparent: 透明
  - gray 系: slate, zinc, neutral, stone
- (color)power: 小さいほど白く薄く、大きいほど濃い `text-{color}-{50,100-900}`(50 以外は 100 単位)
- (color)opacity: 透明度 `text-{color}-{power}/{0,5,10-100}`(0,5 以外は 10 単位)
  - `/[.30]` という記載も可能。指定数値に制限なし
