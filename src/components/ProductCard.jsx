function ProductCard({ product, addToCart }) {
  const salePrice =
    product.originalPrice -
    (product.originalPrice * product.discount) / 100;

  return (
    <div className="product-card">
      <img
        src={product.image}
        alt={product.name}
        className="product-image"
      />

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
        <p>
          <strong>Fabric:</strong> {product.fabric}
        </p>

        <p>
          <strong>Color:</strong> {product.color}
        </p>

        <p>
          <strong>Type:</strong> {product.type}
        </p>

        <p>
          <strong>Stitched:</strong> {product.stitched}
        </p>

        <p>
          <strong>Shirt:</strong> {product.shirt}
        </p>

        <p>
          <strong>Trouser:</strong> {product.trouser}
        </p>

        <p>
          <strong>Dupatta:</strong> {product.dupatta}
        </p>
      </div>

      {product.stitched === "Stitched" && (
        <>
          <select className="size-select">
            <option>Select Size</option>
            <option>Small</option>
            <option>Medium</option>
            <option>Large</option>
            <option>XL</option>
          </select>

          <p>
            <strong>Available Sizes:</strong> S, M, L, XL
          </p>
        </>
      )}

      <div className="quantity-box">
        <label>Quantity:</label>

        <select className="quantity-select">
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
        </select>
      </div>

      <button
        className="cart-btn"
        onClick={() => addToCart(product)}
      >
        Add To Cart
      </button>

      <a
        href={`https://wa.me/923005220556?text=I want to order ${product.name}`}
        target="_blank"
        rel="noreferrer"
      >
        <button className="whatsapp-btn">
          Order on WhatsApp
        </button>
      </a>
    </div>
  );
}

export default ProductCard;