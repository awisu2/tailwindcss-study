# cheatsheet

基本的な設定は class に指定することで反映される

公式サンプル: [Utility\-First Fundamentals \- Tailwind CSS](https://tailwindcss.com/docs/utility-first)

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
  - : ``
  - : ``
  - : ``
