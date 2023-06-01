'use client'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import styles from "./cards.css"
const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    }
  }
export default function CarouselBody() {
    
  return (
    <div className="card-container">
<Carousel 
    showDots={true}
    responsive={responsive}
    removeArrowOnDeviceType={["tablet", "mobile"]}
>
    <div className="card">
        <img src="/doom.jpg" alt="doom" className="product-image"/>
        <h2>Doom1</h2>
        <p className="price">$19.99</p>
        <p>Some text about the game..</p>
        <p><button>Add to Cart</button></p>
    </div>

    <div className="card">
        <img src="/doom.jpg" alt="doom" className="product-image"/>
        <h2>Doom2</h2>
        <p className="price">$19.99</p>
        <p>Some text about the game..</p>
        <p><button>Add to Cart</button></p>
    </div>

    <div className="card">
        <img src="/doom.jpg" alt="doom" className="product-image"/>
        <h2>Doom3</h2>
        <p className="price">$19.99</p>
        <p>Some text about the game..</p>
        <p><button>Add to Cart</button></p>
    </div>

    <div className="card">
        <img src="/doom.jpg" alt="doom" className="product-image"/>
        <h2>Doom4</h2>
        <p className="price">$19.99</p>
        <p>Some text about the game..</p>
        <p><button>Add to Cart</button></p>
    </div>

    <div className="card">
        <img src="/doom.jpg" alt="doom" className="product-image"/>
        <h2>Doom5</h2>
        <p className="price">$19.99</p>
        <p>Some text about the game..</p>
        <p><button>Add to Cart</button></p>
    </div>
    <div className="card">
        <img src="/doom.jpg" alt="doom" className="product-image"/>
        <h2>Doom6</h2>
        <p className="price">$19.99</p>
        <p>Some text about the game..</p>
        <p><button>Add to Cart</button></p>
    </div>

</Carousel>
    </div>
    );
  }
