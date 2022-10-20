import { OutboundLink } from "gatsby-plugin-google-gtag"
import * as React from "react"

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
          <OutboundLink href="https://t.me/+YF9AYb6zCv1mNDJi" target="_blank">Telegram</OutboundLink>
        </li>
        <li>
          <OutboundLink href="https://forms.gle/ACe4doFJh7bW9nac7" target="_blank">
            Sign up for updates
          </OutboundLink>
        </li>
        <li>
          <OutboundLink target="_blank" href="https://protocol.ai/legal/#privacy-policy">
            Privacy policy
          </OutboundLink>
        </li>
        <li>
          <OutboundLink
            target="_blank"
            href="https://protocol.ai/legal/#terms-of-service"
          >
            Terms &amp; Conditions
          </OutboundLink>
        </li>
      </ul>
    </footer>
  )
}
