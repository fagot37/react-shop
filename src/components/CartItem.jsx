const CartItem = (props) => {
  const {
    removeFromCart = Function.prototype,
    removeItem = Function.prototype,
    addItem = Function.prototype,
    id,
    name,
    price,
    quantity,
  } = props;
  return (
    <li className="collection-item">
      {name}
      <i
        className="material-icons cart-quantity"
        onClick={() => removeItem(id)}
      >
        remove
      </i>
      x{quantity}
      <i className="material-icons cart-quantity" onClick={() => addItem(id)}>
        add
      </i>
      = {price * quantity} руб.
      <span className="secondary-content" onClick={() => removeFromCart(id)}>
        <i className="material-icons cart-delete">close</i>
      </span>
    </li>
  );
};

export default CartItem;
