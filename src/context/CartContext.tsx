import { createContext, useContext, useMemo, useState } from 'react'
import type { Product } from '../components/ProductCard'

type CartItem = Product & { quantity: number }

type CartContextType = {
  items: CartItem[]
  addItem: (product: Product) => void
}

const CartContext = createContext<CartContextType | undefined>(undefined)

export function CartProvider({ children }: { children: React.ReactNode }) {
  // Храним товары в корзине в локальном состоянии приложения
  const [items, setItems] = useState<CartItem[]>([])

  // Добавление товара в корзину: увеличиваем количество, если уже есть
  const addItem = (product: Product) => {
    setItems(prev => {
      const existing = prev.find(p => p.id === product.id)
      if (existing) {
        return prev.map(p => (p.id === product.id ? { ...p, quantity: p.quantity + 1 } : p))
      }
      return [...prev, { ...product, quantity: 1 }]
    })
  }

  // Мемоизируем значение контекста, чтобы не вызывать лишние перерисовки
  const value = useMemo(() => ({ items, addItem }), [items])
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export function useCart() {
  const ctx = useContext(CartContext)
  if (!ctx) throw new Error('useCart must be used within CartProvider')
  return ctx
}


