import * as React from "react"
import { OutboundLink } from "gatsby-plugin-google-gtag"

import ExampleToken from "../images/example-token.svg"
import Layout from "../components/Layout"
import Seo from "../components/Seo"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <section
      id="hero"
      className="px-8 py-32 sm:py-52  flex flex-col items-center justify-center bg-cover bg-no-repeat"
      style={{
        backgroundImage: "url(hero-background.svg)",
        backgroundPosition: "50% 30%",
      }}
    >
      <h1 className="text-4xl mb-5 sm:mb-2 sm:text-6xl font-black text-center text-bark !leading-headline">
        Rewarding Impact
        <br /> with Hypercerts
      </h1>
      <p className=" max-w-2xl leading-paragraph font-bold text-xl text-center">
        To solve the challenges we face in this century, we need scalable and
        sustainable financing models for public goods that reward contributors
        for the positive impact they create.
      </p>
    </section>
    <section id="features-token" className="p-8 md:p-36 md:flex md:flex-row">
      <p className="w-64 md:w-1/2 order-2 flex-shrink mx-auto md:mx-0 align-top mb-16 md:mb-0">
        <ExampleToken />
      </p>
      <div className="order-1 md:w-1/2 flex-shrink md:mr-24">
        <h2 className="font-black text-3xl md:text-4xl lg:text-5xl text-evergreen leading-headline mb-9">
          Hypercerts are a tool to build scalable retrospective reward systems
          for impact.
        </h2>
        <p className="text-xl font-medium leading-paragraph ">
          Hypercerts are like carbon credits, but on any impact vector. While
          carbon credits are not perfect, they allow to reward projects for
          positive outcomes retrospectively, i.e. when these outcomes are
          observable. hypercerts enable this for other impact areas, such as
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
      As long as projects create impact, they can create hypercerts for the
      impact and get retrospective rewards for these. In contrast to today’s
      grant systems, projects have recurring income streams.
    </Feature>
    <Feature
      id="high-potential"
      image="high-potential.svg"
      headline="High-potential public goods"
    >
      Buying hypercerts retrospectively allows funders to increase their funding
      in relation to the impact created, incentivizing projects to maximize
      their positive impact. Funders benefit from a large positive impact and
      incur project risks. Retrospective funding encourages
      high-risk/high-potential public goods.
      <br />
      <br />
      <i>
        Retrospective funding shouldn’t be used in cases where a significant
        negative impact is possible since a nongovernmental, permissionless
        framework can’t impose retrospective penalties for negative
        externalities.
      </i>
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
        Using the same hypercert primitive, funders and projects create a
        scalable, interoperable and transparent funding environment for
        innovative public goods.
      </h2>
    </section>
    <section
      id="events"
      className=" bg-no-repeat bg-right p-8 md:p-36"
      style={{ backgroundImage: "url(body-background.svg)" }}
    >
      <div className=" max-w-xl mx-auto">
        <h2 className="text-bark font-black leading-headline text-5xl mb-2">
          Get Involved
        </h2>
        <p className="font-medium leading-paragraph text-xl">
          Join the discussion on telegram or sign up for updates:
        </p>
        <ul className="flex flex-col text-xl leading-paragraph  sm:flex-row justify-between pb-10 pt-6 max-w-xs font-medium">
          <li>
            <OutboundLink
              className="cursor-pointer"
              href="https://t.me/+YF9AYb6zCv1mNDJi"
            >
              Telegram
            </OutboundLink>
          </li>
          <li>
            <OutboundLink
              className="cursor-pointer"
              href="https://forms.gle/ACe4doFJh7bW9nac7"
              target="_bla"
            >
              Sign up for updates
            </OutboundLink>
          </li>
        </ul>
        <hr className="max-w-xs mt-24 mb-4" />
        <h3 className="text-evergreen font-black leading-headline text-3xl mb-5">
          Events
        </h3>
        <p className="leading-paragraph text-xl">
          hypercerts.xyz originated from the communities of Funding the Commons,
          Schelling Point, and the Sustainable Blockchain Summit and we are
          grateful to be part of these communities.
        </p>
        <Item date="November 02, 2022">
          <a href="https://protocol.zoom.us/meeting/register/tJApf-GhqjwsEtOjtcAG3yZLSVFU5kw2fkTs" target="_blank">
            Hypercert community call #1 (online, register now)
          </a>
        </Item>
        <Item date="October 26, 2022">
          <a href="https://fundingthecommons.io/" target="_blank">
            Funding the Commons
          </a>{" "}
          @{" "}
          <a href="https://labweek2022.plnetwork.io/" target="_blank">
            LabWeek22
          </a>
        </Item>
        <Item date="October 12, 2022">
          <a href="https://sbs.tech/" target="_blank">
            Sustainable Blockchain Summit LATAM 2022
          </a>
        </Item>
        <Item date="October 10, 2022">
          <a href="https://fundingthecommons.io/" target="_blank">
            Funding the Commons
          </a>{" "}
          @{" "}
          <a href="https://schellingpoint.gitcoin.co/" target="_blank">
            Schelling Point Bogota
          </a>
        </Item>
        <hr className="max-w-xs mt-24 mb-4" />
        <h3 className="text-evergreen font-black leading-headline text-3xl mb-5">
          Blogposts, Podcasts, and Talks
        </h3>
        <Item date="October 13, 2022">
          <a
            href="https://youtu.be/YpIQoq_bfu8"
            target="_blank"
          >
            Hypercerts for Regenerative Cryptoeconomics​
          </a>
          <br />
          by{" "}
          <a href="http://twitter.com/emiyazono" target="_blank">
            @emiyazono
          </a>
        </Item>
        <Item date="October 12, 2022">
          <a
            href="https://youtu.be/1_navTxlewg"
            target="_blank"
          >
            How Impact Certificates Will Change Web3 Incentive for Impact​
          </a>
          <br />
          by{" "}
          <a href="https://twitter.com/holkeb" target="_blank">
            @holkeb
          </a>
        </Item>
        <Item date="August 24, 2022">
          <a
            href="https://protocol.ai/blog/hypercert-new-primitive/"
            target="_blank"
          >
            Hypercerts: A new primitive for public goods funding​
          </a>
          <br />
          by{" "}
          <a href="https://twitter.com/holkeb" target="_blank">
            @holkeb
          </a>
        </Item>
        <Item date="June 24, 2022">
          <a href="https://youtu.be/2hOhOdCbBlU" target="_blank">
            Hypercerts: on-chain primitives for impact markets​
          </a>
          <br />
          by{" "}
          <a href="https://twitter.com/davidad" target="_blank">
            @davidad
          </a>
        </Item>
        <Item date="June 23, 2022">
          <a href="https://youtu.be/kyo5SxtSJ9U" target="_blank">
            Impact Certificates | Green Pill #21​
          </a>
          <br />
          by{" "}
          <a href="http://twitter.com/emiyazono" target="_blank">
            @emiyazono
          </a>
          ,{" "}
          <a href="http://twitter.com/owocki" target="_blank">
            @owocki
          </a>
        </Item>
        <Item date="March 4, 2022">
          <a href="https://youtu.be/acbBeGcevok" target="_blank">
            Interoperable mechanisms for non-rival goods (Hypercerts)​
          </a>
          <br />
          by{" "}
          <a href="https://twitter.com/davidad" target="_blank">
            @davidad
          </a>
        </Item>
      </div>
    </section>
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
      <h2 className="font-black text-3xl text-bark leading-headline mb-5">
        {headline}
      </h2>
      <p className="text-xl font-medium leading-paragraph">{children}</p>
    </div>
  </section>
)

const Item = ({ date, children }) => (
  <article className="mt-12 text-xl leading-paragraph">
    <h4>{date}</h4>
    <p>{children}</p>
  </article>
)

export const Head = () => <Seo title="Home" />

export default IndexPage
