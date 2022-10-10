import * as React from "react"

import Header from "./Header"
import Footer from "./Footer"

export default function Layout({ children }) {
  return (
    <div
      className="mx-auto max-w-7xl bg-gradient-to-b from-backsun to-backgreen"
      style={{
        background: "linear-gradient(rgb(254, 245, 172), rgb(161, 230, 218))",
      }}
    >
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  )
}
