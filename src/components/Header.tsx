import * as React from "react"
import { Link } from "gatsby"

export default function Header() {
  return (
    <header className="bg-gradient-to-r from-backgreen to-backsun py-5 px-10 flex flex-row justify-between text-copy">
      <Link to="/" className="flex flex-row items-center space-x-2">
        <img alt="Hypercerts logo" height={16} src="logo.svg" />
        <span>HyperCerts</span>
      </Link>

      <ul className="flex-row flex space-x-12 items-center font-bold">
        <li className=" cursor-pointer">
          <Link
            to="https://network-goods.github.io/hypercerts-docs/"
            target="_blank"
          >
            Documentation
          </Link>
        </li>
        {/* <li className=" cursor-pointer">Launch Pilot</li> */}
      </ul>
    </header>
  )
}
