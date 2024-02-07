import * as React from "react"
import { SVGProps } from "react"
const FileSVG = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={28}
    height={32}
    fill="none"
    {...props}
  >
    <path
      fill="#fff"
      d="M22.094 27.688h-2.125v2.125H2.437V8.03h2.126V5.906H.313v26.032h21.78v-4.25Z"
    />
    <path
      fill="#fff"
      d="M6.688.063v25.5h21.25V9.184L18.815.062H6.687Zm19.125 23.375h-17V2.188h6.906V12.28h10.094v11.156Zm0-13.282h-7.97V2.187h.092l7.878 7.878v.091Z"
    />
  </svg>
)
export default FileSVG
