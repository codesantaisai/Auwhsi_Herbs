import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addCartItem } from "../../actions/cartActions";
import { toast } from 'react-toastify';
import Pagination from 'react-js-pagination';

export default function Product({ product, col }) {
  const dispatch = useDispatch();

  return (
    <div className={` col-md-4 col-sm-8`}>
      <div className="product-grid">
        <div className="product-image">
          <Link to="#" className="image">
            {product.images.length > 0 && (
              <img className="pic-1" src={product.images[0].image} alt={product.name} />
            )}
          </Link>
          {product.discount && (
            <span className="product-discount-label">-{product.discount}%</span>
          )}
            <ul className="product-links">
            
            <li>
              <a href={`/product/${product._id}`} data-tip="view details">
                <i className="fa fa-eye"></i>
              </a>
            </li>
            
          </ul>
        </div>
        <div className="product-content">
          <ul className="rating">
            {Array.from({ length: 5 }).map((_, index) => (
              <li
                key={index}
                className={`${
                  index < product.ratings ? 'fas' : 'far'
                } fa-star`}
              ></li>
            ))}
          </ul>
          <h3 className="title">
            <Link to="#">{product.name}</Link>
          </h3>
          <div className="price">
            {product.discount ? (
              <>
                <span>LKR {product.price}</span> ${calculateDiscountedPrice(product)}
              </>
            ) : (
              <span>LKR {product.price}</span>
            )}
          </div>
          <button
            type="button"
            disabled={product.stock === 0 ? true : false}
            onClick={() => {
              const quantity = 1; // Provide the desired quantity here
              dispatch(addCartItem(product._id, quantity));
              toast('Cart Item Added!', {
                type: 'success',
                position: toast.POSITION.BOTTOM_CENTER,
              });
            }}
            className="add-to-cart"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

function calculateDiscountedPrice(product) {
  const discountedPrice = product.price - (product.price * product.discount) / 100;
  return discountedPrice.toFixed(2);
}

function ProductList({ products, currentPage, setCurrentPageNo, productsCount, resPerPage }) {
  return (
    <div>
      {products.map((product) => (
        <Product key={product.id} product={product} col={3} />
      ))}

      {products.length > 0 ? (
        <div className="d-flex justify-content-center mt-5">
          <Pagination
            activePage={currentPage}
            onChange={setCurrentPageNo}
            totalItemsCount={productsCount}
            itemsCountPerPage={resPerPage}
            nextPageText={'Next'}
            firstPageText={'First'}
            lastPageText={'Last'}
            itemClass={'page-item'}
            linkClass={'page-link'}
          />
        </div>
      ) : null}
    </div>
  );
}

export { ProductList };
