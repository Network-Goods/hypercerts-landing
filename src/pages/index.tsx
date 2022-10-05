import * as React from "react"

import Layout from "../components/Layout"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <section
      id="hero"
      className="flex flex-col h-96 items-center justify-center bg-contain bg-top p-8"
      style={{
        backgroundImage: "url(hero-background.svg)",
      }}
    >
      <h1 className="text-4xl mb-5 sm:mb-2 sm:text-6xl font-bold text-center text-bark !leading-headline">
        Rewarding impact
        <br /> with Hypercerts
      </h1>
      <p className=" max-w-2xl leading-paragraph">
        We want to realign what we reward with what we value. Instead of
        rewarding economic activities that destroy our planet or exploit people,
        let’s build scalable retrospective reward systems for any action with
        truly positive outcomes. HyperCerts are a tool for that.
      </p>
    </section>
    <section
      id="features"
      className=" p-36 flex flex-row space-x-16 space-x-reverse"
    >
      <img src="example-token.svg" className=" max-w-sm order-2" />
      <div className="order-1">
        <h2 className="font-bold text-5xl text-evergreen leading-headline mb-9">
          HyperCerts = Carbon credits, but on any impact vector.
        </h2>
        <p className="text-sm font-medium leading-paragraph">
          Examples. Not only what we can measure. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua.
        </p>
      </div>
    </section>
    <section
      id="claim"
      className="flex flex-col items-center justify-center bg-no-repeat bg-contain bg-center"
      style={{
        backgroundImage: "url(claim-background.svg)",
      }}
    >
      <h2 className="md:px-36 my-44 text-2xl sm:text-4xl font-bold text-center text-evergreen !leading-headline">
        The HyperCert ledger brings full transparency to Lorem ipsum dolor sit
        amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna aliqua.
      </h2>
    </section>
    <div
      className=" h-[1000px] bg-no-repeat bg-right"
      style={{ backgroundImage: "url(body-background.svg)" }}
    >
      &nbsp;
    </div>
  </Layout>
)

export const Head = () => <Seo title="Home" />

export default IndexPage
