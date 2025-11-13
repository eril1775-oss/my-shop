import { Offcanvas, ListGroup } from 'react-bootstrap'
import { useCart } from '../../context/CartContext'

export default function CartPanel({ show, onHide }: { show: boolean; onHide: () => void }) {
  const { items } = useCart()
  const total = items.reduce((sum, it) => sum + it.price * it.quantity, 0)

  return (
    <Offcanvas show={show} onHide={onHide} placement="end">
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Корзина</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        {items.length === 0 ? (
          <div className="text-muted">Корзина пуста</div>
        ) : (
          <>
            <ListGroup className="mb-3">
              {items.map(it => (
                <ListGroup.Item key={it.id} className="d-flex justify-content-between align-items-center">
                  <div>
                    <div>{it.title}</div>
                    <small className="text-muted">x{it.quantity}</small>
                  </div>
                  <strong>${(it.price * it.quantity).toFixed(2)}</strong>
                </ListGroup.Item>
              ))}
            </ListGroup>
            <div className="d-flex justify-content-between">
              <strong>Итого</strong>
              <strong>${total.toFixed(2)}</strong>
            </div>
          </>
        )}
      </Offcanvas.Body>
    </Offcanvas>
  )
}


