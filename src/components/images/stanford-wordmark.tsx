import {HtmlHTMLAttributes} from "react"

type Props = HtmlHTMLAttributes<SVGSVGElement> & {
  height?: number
  width?: number
}

const StanfordWordMark = ({height = 90, width = 429, ...props}: Props) => {
  if (height != 90 && width == 429) {
    width *= height / 90
  }

  if (height == 90 && width != 429) {
    height *= width / 429
  }

  return (
    <svg
      aria-hidden
      width={width}
      height={height}
      viewBox="0 0 429.000000 90.000000"
      preserveAspectRatio="xMidYMid meet"
      {...props}
    >
      <g transform="translate(0,91) scale(0.1,-0.1)" fill="currentColor" stroke="none">
        <path
          d="M2438 896 c-95 -34 -132 -95 -143 -237 -7 -86 -7 -86 -41 -102 -46
    -22 -45 -47 1 -47 l35 0 0 -211 c0 -118 -4 -218 -10 -229 -5 -10 -23 -23 -40
  -28 -16 -6 -30 -15 -30 -19 0 -4 70 -8 155 -8 111 -1 155 3 155 11 0 6 -18 14
  -40 18 -24 4 -43 14 -50 25 -6 12 -10 105 -10 230 l0 211 60 0 60 0 0 35 0 35
  -60 0 -60 0 0 100 c0 111 10 143 50 160 38 16 76 3 109 -37 l29 -35 32 43 31
  44 -21 17 c-46 37 -144 48 -212 24z"
        />
        <path
          d="M4125 894 c-27 -7 -69 -13 -92 -13 -31 -1 -43 -5 -43 -16 0 -8 9 -15
  19 -15 39 0 51 -37 51 -155 l0 -110 -85 3 c-182 7 -288 -76 -316 -248 -26
  -165 51 -302 188 -330 61 -13 107 -8 170 20 42 18 42 18 45 -3 2 -13 9 -21 18
  -19 8 2 52 8 97 15 88 11 105 26 51 42 -28 9 -34 16 -40 50 -4 22 -7 207 -6
  412 1 205 0 374 -3 376 -2 2 -26 -2 -54 -9z m-88 -389 c23 -15 23 -18 23 -210
  l0 -194 -42 -11 c-57 -16 -121 -4 -159 28 -50 41 -69 94 -69 192 0 121 34 187
  106 210 38 12 112 4 141 -15z"
        />
        <path
          d="M159 816 c-88 -31 -139 -101 -139 -189 0 -96 34 -143 175 -242 50
    -34 100 -74 113 -87 59 -64 46 -169 -23 -203 -19 -8 -60 -15 -97 -15 -85 0
  -128 23 -148 79 -24 68 -40 53 -40 -39 0 -78 1 -81 28 -92 15 -7 80 -12 152
  -12 120 -1 127 0 178 28 92 51 130 151 98 258 -18 64 -46 93 -180 185 -120 82
  -141 108 -140 169 2 83 70 120 188 102 56 -8 92 -37 101 -79 12 -56 25 -28 25
  55 l0 83 -37 7 c-65 10 -216 6 -254 -8z"
        />
        <path
          d="M675 680 c-22 -43 -80 -105 -121 -131 -43 -26 -43 -39 1 -39 l35 0 0
    -187 c0 -209 7 -251 50 -286 55 -47 172 -45 234 4 35 28 36 52 0 39 -47 -18
  -103 -12 -129 15 -25 24 -25 25 -25 220 l0 195 95 0 95 0 0 35 0 35 -95 0 -94
  0 -3 62 c-3 70 -19 84 -43 38z"
        />
        <path
          d="M1165 596 c-5 -3 -22 -7 -37 -10 -30 -7 -93 -57 -109 -88 -7 -13 -7
    -23 1 -32 8 -11 17 -7 44 20 29 29 41 34 81 34 25 0 55 -5 66 -10 26 -14 49
  -62 49 -102 l0 -33 -107 -35 c-69 -22 -119 -45 -140 -63 -64 -56 -67 -161 -8
  -226 31 -34 37 -36 107 -39 63 -3 78 0 112 21 l38 24 24 -24 c31 -31 89 -31
  135 0 46 31 51 57 10 57 -20 0 -34 7 -41 19 -6 12 -9 87 -8 193 2 158 1 177
  -18 212 -12 23 -35 47 -55 57 -33 17 -123 33 -144 25z m95 -391 c0 -108 -6
  -116 -88 -118 -56 0 -82 26 -82 83 0 50 29 84 93 109 80 31 77 33 77 -74z"
        />
        <path
          d="M2809 590 c-138 -24 -219 -134 -219 -299 0 -101 21 -163 76 -217 105
    -106 321 -93 410 23 60 79 80 214 48 322 -37 126 -166 196 -315 171z m143 -98
  c86 -97 71 -359 -23 -407 -15 -8 -48 -15 -73 -15 -36 0 -50 6 -75 31 -39 38
  -61 113 -61 203 0 97 15 143 61 190 38 37 41 38 91 34 42 -4 57 -11 80 -36z"
        />
        <path
          d="M1677 579 c-9 -6 -49 -13 -87 -16 -77 -6 -88 -19 -37 -43 l32 -15 3
    -208 c3 -221 -1 -242 -43 -253 -14 -3 -25 -11 -25 -18 0 -8 41 -11 135 -11
  104 -1 135 2 135 12 0 7 -9 13 -19 13 -45 0 -51 31 -51 247 0 232 -3 225 97
  227 111 1 136 -54 130 -287 -3 -124 -7 -150 -22 -167 -10 -11 -26 -20 -37 -20
  -10 0 -18 -6 -18 -12 0 -10 35 -13 140 -14 77 0 140 3 140 7 0 5 -16 15 -35
  23 -19 8 -36 16 -37 18 0 2 -4 95 -7 208 -7 227 -12 248 -73 292 -48 33 -157
  38 -223 9 -57 -25 -52 -25 -58 -1 -6 22 -14 24 -40 9z"
        />
        <path
          d="M3330 575 c-30 -7 -72 -14 -92 -14 -48 -1 -51 -24 -6 -37 43 -13 46
    -28 46 -214 1 -212 -4 -241 -45 -260 -61 -28 -38 -35 117 -35 116 -1 150 2
  150 12 0 7 -9 13 -20 13 -32 0 -68 21 -74 44 -3 11 -6 105 -6 208 0 175 1 188
  19 198 33 17 78 11 109 -15 17 -14 35 -25 41 -25 12 0 51 72 51 95 0 19 -57
  45 -98 45 -16 0 -50 -11 -75 -24 l-47 -23 0 23 c0 13 -3 23 -7 23 -5 -1 -33
  -7 -63 -14z"
        />
      </g>
    </svg>
  )
}

export default StanfordWordMark
