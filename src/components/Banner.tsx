import { Carousel } from 'react-bootstrap'
import './banner.css'

export default function Banner() {
  return (
    // Слайдер на всю высоту окна, без изменения размеров при перелистывании
    <div className="banner-full">
      <Carousel interval={4000} indicators controls fade>
      <Carousel.Item>
        <img
          className="d-block w-100 banner-img"
          src="https://avatars.mds.yandex.net/i?id=071b61a973de867a4ef5c13b0d70f2cc_l-7612999-images-thumbs&n=13"
          alt="First slide"
          />
          <Carousel.Caption>
            <h3>Hot Deals</h3>
            <p>Save big on popular gadgets</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
          className="d-block w-100 banner-img"
          src="https://i.pinimg.com/736x/7f/e6/76/7fe6768d938150b295d21b2d9358ff42.jpg"
          alt="Second slide"
        />
          <Carousel.Caption>
            <h3>New Arrivals</h3>
            <p>Check the latest products</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  )
}


