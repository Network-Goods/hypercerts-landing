import * as React from "react"

import Header from "./Header"
import Footer from "./Footer"

export default function Layout({ children }) {
  return (
    <div className="mx-auto max-w-7xl bg-gradient-to-b from-backsun to-backgreen">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  )
}
