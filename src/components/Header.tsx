import { Link } from "gatsby"
import { OutboundLink } from "gatsby-plugin-google-gtag"
import * as React from "react"

export default function Header() {
  return (
    <header className="bg-gradient-to-r from-backgreen to-backsun py-5 px-10 flex flex-row justify-between text-copy text-xl">
      <Link
        to="/"
        className="flex flex-row items-center space-x-2 no-underline"
      >
        <img alt="Hypercerts logo" height={16} src="logo.svg" />
        <span>HyperCerts</span>
      </Link>

      <ul className="flex-row flex space-x-12 items-center font-bold">
        <li>
          <OutboundLink
            href="https://network-goods.github.io/hypercerts-docs/"
            target="_blank"
          >
            <span className="sm:hidden">Docs</span>
            <span className="hidden sm:inline">Documentation</span>
          </OutboundLink>
        </li>
        {/* <li>
          <OutboundLink to="/app">
            Launch Pilot
            <span className="hidden sm:inline">{' '}App</span>
          </OutboundLink>
        </li> */}
      </ul>
    </header>
  )
}
