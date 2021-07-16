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
// import "./layout.css"

const styles = {
    layoutContent: 'text-center flex flex-col h-screen',
    children: 'flex-grow',
}

const Layout = ({ children }) => {
    return (
        <div className={styles.layoutContent}>
            <Header/>
            <Navbar/>
                <main className={styles.children}>
                    { children }
                </main>
            <footer className="text-xs bg-turbo-500 w-full">
              © {new Date().getFullYear()}, Built with  
              {` `}
             💖 by <a href="https://www.twitter.com/KennKibadi" target="_blank" rel="noreferrer" className="font-bold border-blue-20 border-b-2 hover:border-turbo-900">Kenn Kibadi </a>
             - <span className="font-semibold">webcontract</span> 
            </footer>
        </div>
    )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
