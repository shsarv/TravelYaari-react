import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import ShowImage from './ShowImage';
import moment from 'moment';
import ModalVideo from 'react-modal-video';
import { addItem, updateItem, removeItem } from './cartHelpers';
import StarRating from './StarRating';
import './../../node_modules/react-modal-video/scss/modal-video.scss';


const Card = ({
  product,
  showViewProductButton = true,
  showAddToCartButton = true,
  cartUpdate = false,
  showRemoveProductButton = false,
  setRun = f => f,
  run = undefined
  // changeCartSize
}) => {
  const [redirect, setRedirect] = useState(false);
  const [count, setCount] = useState(product.count);

  const showViewButton = showViewProductButton => {
    return (
      showViewProductButton && (
        <Link to={`/product/${product._id}`} className="mr-2">
          <button className="btn btn-info mt-2 mb-2 card-btn-1" id="view-product">More Info!</button>
        </Link>
      )
    );
  };
  const addToCart = () => {
    // console.log('added');
    addItem(product, setRedirect(true));
  };

  const shouldRedirect = redirect => {
    if (redirect) {
      return <Redirect to="/cart" />;
    }
  };

  const showAddToCartBtn = showAddToCartButton => {
    return (
      showAddToCartButton && (
        <button onClick={addToCart} className="btn btn-success mt-2 mb-2 card-btn-1 " id="add-to-cart">
          Book Now!
        </button>
      )
    );
  };

  const showStock = quantity => {
    return quantity > 0 ? (
      <span className="badge badge-success badge-pill">In season</span>
    ) : (
      <span className="badge badge-success badge-pill">Out of Season</span>
    );
  };

  const handleChange = productId => event => {
    setRun(!run); // run useEffect in parent Cart
    setCount(event.target.value < 1 ? 1 : event.target.value);
    if (event.target.value >= 1) {
      updateItem(productId, event.target.value);
    }
  };

  const showCartUpdateOptions = cartUpdate => {
    return (
      cartUpdate && (
        <div>
          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <span className="input-group-text">Adjust Quantity</span>
            </div>
            <input type="number" className="form-control" value={count} onChange={handleChange(product._id)} />
          </div>
        </div>
      )
    );
  };
  const showRemoveButton = showRemoveProductButton => {
    return (
      showRemoveProductButton && (
        <button
          onClick={() => {
            removeItem(product._id);
            setRun(!run); // run useEffect in parent Cart
          }}
          className="btn btn-outline-danger mt-2 mb-2"
        >
          Remove Product
        </button>
      )
    );
  };
  return (
<div className="border rounded shadow">
<div className="card m-2 ">
  <div className="view overlay">
    {shouldRedirect(redirect)}
    {/* <a href={product.youtubelink} data-toggle="lightbox" data-gallery="youtubevideos"> */}
    <ShowImage item={product} url="product" className="img-thumbnail" />
    <h5 className="ml-2 text-success h5 font-weight-bold pb-2">{product.name}</h5>
  </div>
  <div class="card-body m-0 p-0">
    <div className="d-flex justify-content-between mx-2 mb-0">
      <h6 className="font-weight-bold h6" style={{fontWeight:"600",fontSize:"0.8em",color:"#eb07c1"}}>{product.subname}</h6>
      <StarRating />
      </div>
      <div className="mt-2 px-3"><p className="badge badge-warning badge-pill shadow">Price : ₹ {product.price}</p></div>
  </div>
</div>
  <div className="text-justify m-2 p-2" style={{fontSize:"14px",fontWeight:"500"}}>
    <p classname="text-justify">{product.description.substring(0, 400)}</p>
    {showViewButton(showViewProductButton)}
    {showAddToCartBtn(showAddToCartButton)}
    {showRemoveButton(showRemoveProductButton)}
    {showCartUpdateOptions(cartUpdate)}
    <div className="d-flex justify-content-around p-2 m-0">
    <div className="m-0 p-0 mx-1">
    {showStock(product.quantity)}
    </div>
    <p className=" text-warning mx-1" style={{fontSize:"11px",fontWeight:"600"}}>Added on {moment(product.createdAt).fromNow()}</p>
    <p className="text-info mx-1"style={{fontWeight:"600",fontSize:"0.7em"}}><span>Category: </span>{product.category && product.category.name}</p>
  </div>
  </div>
</div>
  );
};

export default Card;
