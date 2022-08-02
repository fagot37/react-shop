import CartItem from "./CartItem";
const CartList = (props) => {
  const {
    order = [],
    handleCartShow = Function.prototype,
    removeFromCart = Function.prototype,
    removeItem = Function.prototype,
    addItem = Function.prototype,
  } = props;
  const totalPrice = order.reduce((sum, el) => {
    return sum + el.price * el.quantity;
  }, 0);
  return (
    <div className="cart-list">
      <ul className="collection">
        <li className="collection-item active">Корзина</li>
        {order.length ? (
          order.map((item) => (
            <CartItem
              key={item.id}
              removeFromCart={removeFromCart}
              removeItem={removeItem}
              addItem={addItem}
              {...item}
            />
          ))
        ) : (
          <li className="collection-item">Корзина пуста</li>
        )}
        <li className="collection-item active">
          Общая стоимость: {totalPrice} руб.
          <button className="secondary-content btn-small">Оформить</button>
        </li>
      </ul>
      <i className="material-icons cart-close" onClick={handleCartShow}>
        close
      </i>
    </div>
  );
};

export default CartList;
