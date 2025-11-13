import './App.css'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Products from './pages/Products'
import About from './pages/About'
import Contact from './pages/Contact'

function ContentWrapper() {
  // Контейнер для содержимого страниц.
  // useLocation позволяет при необходимости реагировать на смену URL.
  useLocation()
  return (
    <div>
      {/* 
        Routes — блок маршрутизации. 
        Он анализирует текущий путь и выбирает подходящий Route.
        Route — правило: какой компонент показывать для конкретного пути.
      */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  )
}

function App() {
  return (
    <BrowserRouter>
      {/* Header — общая шапка сайта (навигация), видна на всех страницах */}
      <Header />
      {/* Основной контент — сюда роутер рендерит выбранную страницу */}
      <ContentWrapper />
      {/* Footer — общий подвал сайта, виден на всех страницах */}
      <Footer />
    </BrowserRouter>
  )
}

export default App
