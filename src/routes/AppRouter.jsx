import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './components/layout/Layout'
import ScrollToTop from './components/common/ScrollToTop'
import Home from './pages/Home'
import About from './pages/About'
import Gallery from './pages/Gallery'
import Blog from './pages/Blog'
import BlogPost from './pages/BlogPost'
import Contact from './pages/Contact'
import './styles/global.css'

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sobre-mi" element={<About />} />
          <Route path="/galeria" element={<Gallery />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/contacto" element={<Contact />} />
        </Routes>
      </Layout>
    </Router>
  )
}

export default App;