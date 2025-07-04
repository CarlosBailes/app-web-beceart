import React from 'react'
import Header from './Header'
import Footer from './Footer'

const Layout = ({ children }) => {
  return (
    <div className="app-layout">
      <Header />
      <main className="main-content">
        {children}
      </main>
      <Footer />
      <style jsx>{`
        .app-layout {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
        }

        .main-content {
          flex: 1;
          padding-top: 80px; /* Height of fixed header */
        }
      `}</style>
    </div>
  )
}

export default Layout