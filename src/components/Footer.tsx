

export default function Footer() {
  return (
    // Фиксированный подвал (fixed-bottom). Содержимое по центру, ширина на всю страницу.
    <footer className="bg-dark text-light fixed-bottom w-100" style={{ height: 56 }}>
      {/* Внутренний блок для выравнивания текста по вертикали и горизонтали */}
      <div className="w-100 h-100 d-flex align-items-center justify-content-center text-center px-3">
        {/* Копирайт интернет-магазина */}
        <small>&copy; {new Date().getFullYear()} My React Shop</small>
      </div>
    </footer>
  )
}


