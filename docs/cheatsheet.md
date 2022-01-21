# cheatsheet

基本的な設定は class に指定することで反映される

公式サンプル: [Utility\-First Fundamentals \- Tailwind CSS](https://tailwindcss.com/docs/utility-first)

## ほぼ style と 1:1 の class

- [padding](https://tailwindcss.com/docs/padding): `p-0` = `padding: 0px;`
  - size: `p-6` = `padding: 1.5rem;` (1-96 全サイズあるわけではない 1-12 までは完備、rem で指定)
  - dimention: `px-0` = `padding-left: 0px; padding-right: 0px;` (`{t|r|b|l|x|y}` で方向を指定)
  - custom: [Padding \- Tailwind CSS](https://tailwindcss.com/docs/padding#customizing-your-theme)
- [display](https://tailwindcss.com/docs/display#flex)
  - table: `table`
  - block/inline: `inline`, `inline-block`, `block`
  - flex: `flex`, `inline-flex`
  - [grid](https://tailwindcss.com/docs/grid-template-columns): `grid`, `gap-0`, `grid-cols-0`, `grid-rows-0`
    - custom: [Grid Template Columns \- Tailwind CSS](https://tailwindcss.com/docs/grid-template-columns#customizing-your-theme)
      - 例: `grid-cols-[repeat(auto-fill,_minmax(200px,_1fr))]`
        - `[]` の中の部分がカスタム \_ はスペースの代わり
- [border](https://tailwindcss.com/docs/border-radius)
  - width: `border{-position}{-size}`
    - size: `border-{0|2|4|8}`
      - 単位は px 指定したサイズそのままの px が割当
    - position: `border-{t|r|b|l|x|y}`
  - raddius: `rounded{-position}{-size}`(`rounded`, `rounded-tl-3xl`)
    - size: `rounded-{sm|lg|xl|2xl|3xl|full|none}`
      - 単位は rem, full の場合 9999px
    - position: `rounded-{t|r|b|l|tr|rl|br|bl}`
- [outline](https://tailwindcss.com/docs/outline-width): 要素の周りに囲み線
  - width: `outline-{0|1|2|4|8}`
  - color: `outline-{color{-power{/opacity}}}` 共有値を参照(後述)
  - style: `outline-{none|dashed|dotted|double|hidden}` 共有値を参照(後述)
    - `outline` だけの場合 solid
  - offset: 要素からの空き幅 `outline-offset-{0|1|2|4|8}`
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
- [columns](https://tailwindcss.com/docs/columns): 内部要素を横方向に分割やサイズ指定 `columns-{param}`
  - param: `columns-{1-12|auto|[3|2]?xs|sm|md|lg|[2-7]?xl}`
- [box-sizing](https://tailwindcss.com/docs/box-sizing) width/height の計算に margin などを含めるかの設定 `box-{border|content}`
- object
  - [object-fit](https://tailwindcss.com/docs/object-fit): 画像内での画像の表示方法を指定
    - `object-contain`: アスペクト比維持で内側にフィット
    - `object-fill`: アスペクト比維持ではみ出すようにフィット
  - [object-position](https://tailwindcss.com/docs/object-position) `object-{bottom|center|left|left-bottom|left-top|right|right-bottom|right-top|top}`
- [overflow](https://tailwindcss.com/docs/overflow) 親要素をはみ出す場合の設定 `overflow{-x|y}-{hiden|clip|visible|scroll}`
- [position](https://tailwindcss.com/docs/position) `{static|fixed|absolute|relative|sticky}`
- [top/right/bottom/left](https://tailwindcss.com/docs/top-right-bottom-left) `{-?}{inset|top|right|bottom|left}-{size}`
  - 先頭に`-`を付与するとサイズがマイナスになる
  - size: 1-96, auto, 1/2, 2/4, 3/4, full
- [visibility \- Tailwind CSS](https://tailwindcss.com/docs/visibility) dom 上は存在したまま表示の on/off をコントロール `{visible|invisible}`
- [flex \- Tailwind CSS](https://tailwindcss.com/docs/flex)

## style の実態が少し複雑な指定になるもの

- [container](https://tailwindcss.com/docs/container): `container` 具体的には @media を使用して、よくあるサイズに合わせて、max-width を設定する。これによりはみ出し防止になる(はず)
  - 通常 body 配下の最上位タグにセット
- [divide](https://tailwindcss.com/docs/divide-width)
  - divide: 直下の子要素間に線を引く `divide`, `divide-x-8`, `divide{-position}{-size}`
    - size: `divide-{1-8}` 数値に対応した px が指定
    - position: `divide-{x|y}`
  - color: `divide-{color{-power{/opacity}}}` 共有値を参照(後述)
  - style: `divide-{solid|dashed|dotted|double|none}`
- メディアサイズ別設定: `{sm|md|lg|xl|2xl}:{any}`
  - [Responsive Design \- Tailwind CSS](https://tailwindcss.com/docs/responsive-design)
- ダークモード: `dark:{any}`

## 特殊指定

- breakpoint: 特定の media サイズ時に反映など条件付け識別子(例: `sm:{any}` で 640px 以下のときに反映される)
  - 専用のドキュメントがない。今わかっているのはメディアサイズ別, hover 時の指定
  - [Container \- Tailwind CSS](https://tailwindcss.com/docs/container)
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
