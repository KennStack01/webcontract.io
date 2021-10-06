/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import Header from "./header"
import Navbar from "./Navbar"
import Footer from "./Footer"

const styles = {
  layoutContent: "text-center flex flex-col h-screen",
  children: "flex-grow font-sans",
}

const Layout = ({ children }) => {
  return (
    <div className={styles.layoutContent} style={{ fontFamily: "Gontserrat" }}>
      <div>
        <Header />
      </div>
      <div className="w-full sticky top-0 z-50">
        <Navbar />
      </div>
      <main className={styles.children}>{children}</main>
      <div className="w-full h-24 md:h-auto">
        <Footer />
      </div>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
