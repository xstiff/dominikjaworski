import * as React from "react"
import { SVGProps } from "react"
const UserSVG = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 30"
    {...props}
  >
    <path
      d="M12 6a3.25 3.25 0 1 0 0 6.5A3.25 3.25 0 0 0 12 6ZM7.75 9.25a4.25 4.25 0 1 1 8.5 0 4.25 4.25 0 0 1-8.5 0ZM5.078 18.315c-.073.118-.078.177-.078.185a.5.5 0 0 1-1 0c0-.26.1-.503.227-.71.13-.21.31-.417.52-.615.424-.396 1.017-.794 1.726-1.149 1.42-.71 3.372-1.276 5.527-1.276 2.155 0 4.106.566 5.527 1.276.71.355 1.302.753 1.725 1.15.212.197.391.404.521.615.127.206.227.449.227.709a.5.5 0 0 1-1 0c0-.008-.005-.067-.078-.185a2.099 2.099 0 0 0-.353-.41c-.335-.313-.841-.66-1.49-.984-1.293-.647-3.092-1.171-5.079-1.171-1.987 0-3.786.524-5.08 1.17-.648.324-1.154.672-1.49.985a2.097 2.097 0 0 0-.352.41Z"
    />
    <path
      d="M12 2.5a9.5 9.5 0 1 0 0 19 9.5 9.5 0 0 0 0-19ZM1.5 12C1.5 6.201 6.201 1.5 12 1.5S22.5 6.201 22.5 12 17.799 22.5 12 22.5 1.5 17.799 1.5 12Z"
    />
  </svg>
)
export default UserSVG
