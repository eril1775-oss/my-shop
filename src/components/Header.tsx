import { Navbar, Nav, Button, Badge } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import { useState } from 'react'
import CartPanel from './cart/CartPanel'
import { useCart } from '../context/CartContext'

export default function Header() {
  const { items } = useCart()
  const [open, setOpen] = useState(false)
  const count = items.reduce((sum, it) => sum + it.quantity, 0)

  return (
    // Фиксированная шапка (fixed-top). Высоту явно не фиксируем, чтобы меню корректно раскрывалось на мобильных.
    <Navbar bg="dark" data-bs-theme="dark" expand="lg" className="py-0 w-100 fixed-top">
      {/* Ширина на всю страницу без дополнительных контейнеров */}
      <div className="w-100 d-flex align-items-center px-3">
        {/* Название магазина (кликабельно) и элементы навигации */}
        <Navbar.Brand as={NavLink} to="/">My React Shop</Navbar.Brand>
        <Navbar.Toggle aria-controls="main-nav" className="my-auto ms-auto" />
        <Navbar.Collapse id="main-nav">
          <Nav className="ms-3 me-auto">
            <Nav.Link as={NavLink} to="/products">Products</Nav.Link>
            <Nav.Link as={NavLink} to="/about">About</Nav.Link>
            <Nav.Link as={NavLink} to="/contact">Contact</Nav.Link>
          </Nav>
          {/* Кнопка корзины: показывает количество позиций и открывает панель */}
          <Button variant="outline-light" size="sm" onClick={() => setOpen(true)}>
            Cart <Badge bg="secondary" className="ms-1">{count}</Badge>
          </Button>
        </Navbar.Collapse>
      </div>
      <CartPanel show={open} onHide={() => setOpen(false)} />
    </Navbar>
  )
}


