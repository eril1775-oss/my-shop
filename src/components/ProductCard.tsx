import { Card, Button } from 'react-bootstrap'
import { motion } from 'framer-motion'

export type Product = {
  id: string
  title: string
  imageUrl: string
  description: string
  price: number
}

type Props = {
  product: Product
  onAddToCart?: (product: Product) => void
}

export default function ProductCard({ product, onAddToCart }: Props) {
  return (
    // Карточка товара. При наведении слегка увеличивается (визуальный отклик).
    <motion.div whileHover={{ scale: 1.02 }}>
      <Card className="h-100">
        <Card.Img variant="top" src={product.imageUrl} alt={product.title} />
        <Card.Body className="d-flex flex-column">
          <Card.Title>{product.title}</Card.Title>
          <Card.Text className="text-muted">{product.description}</Card.Text>
          <div className="mt-auto d-flex justify-content-between align-items-center">
            <strong>${product.price.toFixed(2)}</strong>
            <Button variant="primary" style={{background: 'green'}} onClick={() => onAddToCart?.(product)}>
              Add to cart
            </Button>
          </div>
        </Card.Body>
      </Card>
    </motion.div>
  )
}


