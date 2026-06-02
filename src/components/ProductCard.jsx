import { useState } from "react";

function ProductCard({ product, addToCart }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showPopup, setShowPopup] = useState(false);

  const salePrice =
    product.originalPrice -
    (product.originalPrice * product.discount) / 100;

  return (
    <div className="product-card">
      {product.soldOut && (
  <div className="sold-out">
    SOLD OUT
  </div>
)}
      <img
        src={
          product.images
            ? product.images[currentImageIndex]
            : product.image
        }
        alt={product.name}
        className="product-image"
      />

      {product.images && product.images.length > 1 && (
        <div className="thumbnail-row">
          {product.images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt=""
              className="thumbnail"
              onClick={() => setCurrentImageIndex(index)}
            />
          ))}
        </div>
      )}

      <h4 className="brand">{product.brand}</h4>

      <h2>{product.name}</h2>

      <div className="price-box">
        <span className="old-price">
          Rs. {product.originalPrice}
        </span>

        <span className="discount">
          {product.discount}% OFF
        </span>
      </div>

      <h3 className="sale-price">
        Rs. {salePrice.toFixed(0)}
      </h3>

      <div className="product-details">
        <p><strong>Fabric:</strong> {product.fabric}</p>

        <p className="stock">✓ In Stock</p>

        <p><strong>Color:</strong> {product.color}</p>

        <p><strong>Type:</strong> {product.type}</p>

        <p><strong>Stitched:</strong> {product.stitched}</p>

        <p><strong>Shirt:</strong> {product.shirt}</p>

        <p><strong>Trouser:</strong> {product.trouser}</p>

        <p><strong>Dupatta:</strong> {product.dupatta}</p>
      </div>
      {product.stitched === "Stitched" && (
  <div className="size-box">
    {["S", "M", "L", "XL"].map((size) => (
      <span
        key={size}
        className={
          product.availableSizes?.includes(size)
            ? "size-active"
            : "size-disabled"
        }
      >
        {size}
      </span>
    ))}
  </div>
)}
      {product.stitched === "Stitched" && (
        <select className="size-select">
          <option>Select Size</option>
          <option>Small</option>
          <option>Medium</option>
          <option>Large</option>
          <option>XL</option>
        </select>
      )}
        {showPopup && (

<div
  className="popup-overlay"
  onClick={() => setShowPopup(false)}
>

  <div
    className="popup-content"
    onClick={(e) => e.stopPropagation()}
  >

    <img
      src={
        product.images
          ? product.images[0]
          : product.image
      }
      alt={product.name}
    />

    <h2>{product.name}</h2>

    <p>{product.fabric}</p>

    <button
      onClick={() => setShowPopup(false)}
    >
      Close
    </button>

  </div>

</div>

)}
      <div className="quantity-box">
        <label>Quantity</label>

        <select className="quantity-select">
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
        </select>
      </div>
        <button
  className="quick-view-btn"
  onClick={() => setShowPopup(true)}
>
  Quick View
</button>

      <button
  className="cart-btn"
  disabled={product.soldOut}
  onClick={() => addToCart(product)}
> 
        Add To Cart
      </button>

      <a
        href={`https://wa.me/923377190902?text=I want to order ${product.name}`}
        target="_blank"
        rel="noreferrer"
        className="whatsapp-link"
      >
        <button
          type="button"
          className="whatsapp-btn"
        >
          Order on WhatsApp
        </button>

      </a>
       
    </div>

  );
}

export default ProductCard;