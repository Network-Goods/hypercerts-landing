import * as React from "react"

import Layout from "../components/Layout"
import Seo from "../components/Seo"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <section
      id="hero"
      className="p-8 flex flex-col h-96 items-center justify-center bg-contain bg-no-repeat bg-top"
      style={{
        backgroundImage: "url(hero-background.svg)",
      }}
    >
      <h1 className="text-4xl mb-5 sm:mb-2 sm:text-6xl font-black text-center text-bark !leading-headline">
        Rewarding impact
        <br /> with HyperCerts
      </h1>
      <p className=" max-w-2xl leading-paragraph font-bold">
        To solve the challenges we face in this century, we need scalable and
        sustainable financing models for public goods that reward contributors
        for the positive impact they create.
      </p>
    </section>
    <section id="features-token" className="p-8 md:p-36 md:flex md:flex-row">
      <p className="w-64 md:w-1/2 order-2 flex-shrink mx-auto md:mx-0 align-top mb-16 md:mb-0">
        <img src="example-token.svg" />
      </p>
      <div className="order-1 md:w-1/2 flex-shrink md:mr-24">
        <h2 className="font-black text-3xl md:text-4xl lg:text-5xl text-evergreen leading-headline mb-9">
          HyperCerts are a tool to build scalable retrospective reward systems
          for impact.
        </h2>
        <p className="text-sm font-medium leading-paragraph">
          HyperCerts are like carbon credits, but on any impact vector. While
          carbon credits are not perfect, they allow to reward projects for
          positive outcomes retrospectively, i.e. when these outcomes are
          observable. HyperCerts enable this for other impact areas, such as
          education, healthcare, AI safety and open source software.
        </p>
      </div>
    </section>
    <Feature
      id="recurring"
      image="recurring.svg"
      headline="Recurring income for public goods"
    >
      Retrospective funding rewards projects for the impact they have created.
      As long as projects create impact, they also create HyperCerts for the
      impact and sell these. In contrast to today’s grant systems, projects have
      recurring income streams.
    </Feature>
    <Feature
      id="high-potential"
      image="high-potential.svg"
      headline="High-potential public goods"
    >
      Buying HyperCerts retrospectively allows funders to increase their funding
      the more impact has been created. Projects are incentivized to maximize
      their positive impact. As they benefit from a large positive impact, they
      can also incur the risk that projects fail. Retrospective funding
      encourages high-risk/high-potential public goods.
    </Feature>
    <Feature
      id="de-risking"
      image="bridge.svg"
      headline="De-risking impact-funding"
    >
      Retrospective funders allocate their funds more effectively as they face
      less uncertainty about the impact projects had. This is especially
      important when the impact of public goods doesn't increase linearly.
      Retrospective funders wouldn’t waste funds by rewarding a project for
      building half a bridge.
    </Feature>
    <section
      id="claim"
      className="px-8 flex flex-col items-center justify-center bg-no-repeat bg-contain bg-center"
      style={{
        backgroundImage: "url(claim-background.svg)",
      }}
    >
      <h2 className="md:px-28 my-44 text-2xl sm:text-4xl font-black text-center text-evergreen !leading-headline">
        Using the same HyperCert primitive, funders and projects create a
        scalable, interoperable and transparent funding environment for
        innovative public goods.
      </h2>
    </section>
    {/* <div
      className=" h-[1000px] bg-no-repeat bg-right"
      style={{ backgroundImage: "url(body-background.svg)" }}
    >
      &nbsp;
    </div> */}
  </Layout>
)

const Feature = ({ id, image, headline, children }) => (
  <section
    id={`features-${id}`}
    className="px-8 md:px-36 py-16 md:flex md:flex-row md:space-x-24"
  >
    <img
      src={image}
      className=" w-96 flex-grow mb-16 md:mb-0 mx-auto md:mx-0"
    />
    <div>
      <h2 className="font-black text-2xl text-bark leading-headline mb-5">
        {headline}
      </h2>
      <p className="text-sm font-medium leading-paragraph">{children}</p>
    </div>
  </section>
)

export const Head = () => <Seo title="Home" />

export default IndexPage
