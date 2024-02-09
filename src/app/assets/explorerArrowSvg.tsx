import * as React from "react"
import { SVGProps } from "react"
const ExplorerArrowSVG = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={16}
    {...props}
  >
    <path stroke="#fff" d="m6 4 4 4-4 4" />
  </svg>
)
export default ExplorerArrowSVG
