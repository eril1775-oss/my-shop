import { useEffect, useState } from 'react'
import { Row, Col } from 'react-bootstrap'
import ProductCard from '../components/ProductCard'
import type { Product } from '../components/ProductCard'
import withLoading from '../components/withLoading'
import { useCart } from '../context/CartContext'

// Грид товаров — отдельный компонент с адаптивной сеткой
function ProductGrid({ products }: { products: Product[] }) {
  const { addItem } = useCart()
  return (
     
    // Bootstrap сетка:
    //   - xs={1}: на очень узких экранах 1 колонка
    //   - md={2}: на средних экранах 2 колонки
    //   - lg={3}: на больших экранах 3 колонки
    //   - className="g-4": одинаковые отступы (gap) между карточками
   
    <Row xs={1} md={2} lg={3} className="g-4">
      {products.map(p => (
        <Col key={p.id}>
          <ProductCard product={p} onAddToCart={addItem} />
        </Col>
      ))}
    </Row>
  )
}

// Оборачиваем грид HOC'ом, чтобы добавить индикатор загрузки
const ProductGridWithLoading = withLoading(ProductGrid)

export default function Products() {
  // Локальное состояние: товары и индикатор загрузки
  const [products, setProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    let cancelled = false
    // Загружаем товары с бэкенда (fetch)
    async function load() {
      setLoading(true)
      try {
        // Напрямую запрашиваем внешний MockAPI (без собственного бэкенда)
        const url = 'https://691498383746c71fe048e068.mockapi.io/Product'
        const res = await fetch(url)
        const data: Product[] = await res.json()
        if (!cancelled) setProducts(data)
      } finally {
        if (!cancelled) setLoading(false)
      }
    }
    load()
    return () => {
      cancelled = true
    }
  }, [])

  return (
    <div className="container py-4">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h2>Products</h2>
      </div>
      <ProductGridWithLoading loading={loading} products={products} />
    </div>
  )
}


