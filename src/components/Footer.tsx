import * as React from "react"
import { Link } from "gatsby"

export default function Footer() {
  return (
    <footer className="mt-16 text-copy">
      <div className="flex flex-row items-center justify-center mx-12">
        <hr className="grow border-evergreen" />
        <img className="mx-8" alt="Hypercerts logo" src="logo.svg" />
        <hr className="border-evergreen grow" />
      </div>
      <ul className="flex flex-col items-center sm:flex-row justify-evenly pb-10 pt-6">
        <li>
          <Link className="cursor-pointer" to="https://t.me/+YF9AYb6zCv1mNDJi">
            Telegram
          </Link>
        </li>
        <li>
          <Link
            className="cursor-pointer"
            to="https://forms.gle/ACe4doFJh7bW9nac7"
            target="_bla"
          >
            Sign up for updates
          </Link>
        </li>
        <li>
          <Link
            className="cursor-pointer"
            target="_blank"
            to="https://protocol.ai/legal/#privacy-policy"
          >
            Privacy policy
          </Link>
        </li>
        <li>
          <Link
            className="cursor-pointer"
            target="_blank"
            to="https://protocol.ai/legal/#terms-of-service"
          >
            Terms &amp; Conditions
          </Link>
        </li>
      </ul>
    </footer>
  )
}
