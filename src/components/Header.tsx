import * as React from "react"
import { Link } from "gatsby"

export default function Header() {
  return (
    <header className=" bg-gradient-to-r from-backgreen to-backsun py-5 px-10 flex flex-row justify-between text-copy">
      <Link to="/">
        <img alt="Hypercerts logo" height={16} src="logo-text.svg" />
      </Link>
      <ul className="flex-row flex space-x-12 items-center">
        <li className=" cursor-pointer">Documentation</li>
        <li className=" cursor-pointer">Launch Pilot</li>
      </ul>
    </header>
  )
}
