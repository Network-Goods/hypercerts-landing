import * as React from "react"

import { Link } from "gatsby"
import Layout from "../components/Layout"
import Seo from "../components/Seo"

export const Head = () => <Seo title="App" />

export default function AppPage() {
  return (
    <Layout>
      <Seo title="App" />
      <section
        id="hero"
        className="px-8 py-16 sm:py-26  flex flex-col items-center justify-center bg-cover bg-no-repeat"
        style={{
          backgroundImage: "url(hero-background.svg)",
          backgroundPosition: "50% 30%",
        }}
      >
        <h1 className="text-3xl mb-5 sm:mb-2 sm:text-5xl font-black text-center text-bark !leading-headline">
          Test-Net Implementation
          <br /> Disclaimer
        </h1>
        <p className=" max-w-2xl leading-paragraph font-medium text-xl ">
          We are excited to provide all collaborators with access to Solidity
          API, data models, a UI for minting or burning hypercerts, and more. We
          encourage everyone to experiment on the Goerli testnet and sandbox new
          ideas. <b>Please continue reading for important legal disclaimers</b>.
          <ul className=" list-disc mt-5 ml-5 space-y-2">
            <li>
              All information, code and UI is provided as-is and is not subject
              to any warranties.
            </li>
            <li>
              You engage with and use the information, website and code provided
              at your own risk, financial, legal or otherwise.
            </li>
            <li>
              {" "}
              This is a test environment and collaboration space only, and
              nothing in the Solidity API, data models, UI or otherwise
              constitutes an offer to sell, lease or loan any assets.
            </li>
          </ul>
        </p>
      </section>
      <section
        id="options"
        className="px-8 md:px-36 py-16 md:flex md:flex-row md:space-x-24 justify-center"
      >
        <div className=" md:w-1/3 w-full">
          <h2 className="font-black text-3xl text-bark leading-headline mb-5">
            Join Community
          </h2>
          <p className="text-xl font-medium leading-paragraph">
            How would you use HyperCerts? Let's connect and collaborate.
            <br />
            <br />
            <Link to="https://t.me/+YF9AYb6zCv1mNDJi" target="_blank">
              Telegram
            </Link>
          </p>
        </div>
        <div className="md:w-1/3 w-full">
          <h2 className="font-black text-3xl text-bark leading-headline mb-5">
            Launch Pilot App
          </h2>
          <p className="text-xl font-medium leading-paragraph">
            Be among the first people to see what it feels like to claim real
            impact. Have a look at our pilot app - the first of many
            applications on the HyperCerts Ledger.
            <br />
            <br />
            <Link to="https://pilot.hypercerts.xyz" target="_blank">
              Pilot App
            </Link>
          </p>
        </div>
      </section>
    </Layout>
  )
}
