import { css } from "@emotion/react"

import NotoBold from "./Noto/Bold.otf"
import NotoLight from "./Noto/Light.otf"
import NotoRegular from "./Noto/Regular.otf"

const typeface = css`

@font-face {
  font-family: Noto;
  src: url('${NotoBold}') format('opentype');
  font-weight: bold;
}

@font-face {
  font-family: Noto;
  src: url('${NotoLight}') format('opentype');
  font-weight: 300;
}

@font-face {
  font-family: Noto;
  src: url('${NotoRegular}') format('opentype');
}

html, body {
  font-family: Noto;
}

`
export default typeface
