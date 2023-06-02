import { useRouter } from "next/router"
import Image from 'next/image'
import YoutubeVideo from "@/components/YoutubeVideo";
import { AuthRoute } from "@/components/AuthContext";
import ProtectedRoute from "@/components/ProtectedRoute";
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/cart.slice'

export default function desc(props) {
  const router = useRouter()
  const id = router.query;
  const dispatch = useDispatch();
  return (
    <AuthRoute>
      <ProtectedRoute>
        <div className="bodydesc">
          <div className="product-container-description">
              <div className="product-image-container-description">
                  <img className="product-image-description" src={id.coverImage} alt="Product Photo"  />
              </div>
              <div className="product-info-description">
                <YoutubeVideo videoId={id.trailerUrl} />
                  <h1 className="product-name-description">{id.name}</h1>
                  <p className="product-price-description">{id.price}</p>
                  <p className="product-description-description">{id.desc}</p>
                  
                  <button
                  onClick={() => dispatch(addToCart(id))} 
                  className="add-to-cart-button-description">Add to Cart</button>
              </div>
          </div>
        </div>
      </ProtectedRoute>
    </AuthRoute>
  )
}