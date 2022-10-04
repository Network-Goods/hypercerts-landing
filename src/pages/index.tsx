import * as React from "react"

import Layout from "../components/Layout"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <div
      className="flex flex-col h-96 items-center justify-center bg-contain bg-top p-8"
      style={{
        backgroundImage: "url(hero-background.svg)",
      }}
    >
      <h1 className="text-4xl mb-8 sm:mb-2 sm:text-6xl font-bold text-center text-bark">
        Rewarding impact
        <br /> with Hypercerts
      </h1>
      <p className=" max-w-2xl">
        We want to realign what we reward with what we value. Instead of
        rewarding economic activities that destroy our planet or exploit people,
        let’s build scalable retrospective reward systems for any action with
        truly positive outcomes. HyperCerts are a tool for that.
      </p>
    </div>
    <div className=" h-[1000px] bg-no-repeat bg-right" style={{ backgroundImage: 'url(body-background.svg)'}}>&nbsp;</div>
  </Layout>
)

export const Head = () => <Seo title="Home" />

export default IndexPage
