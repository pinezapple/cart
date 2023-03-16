import './Item.scss'
function Item({item, handleAddItemToCart, handleDeleteItemFromCart}) {
    const itemContainerClassName =item.availableQuantity === 0? "item-container-unavail" : "item-container-avail" 
    return ( <div className={itemContainerClassName}>
        <img className="item-image" src={item.imageUrl} alt='images'></img>
        <div className="item-meta">
            <div className="item-title"> {item.title}</div>
            <div className="item-brand"> {item.brand}</div>
            <div className="item-quantity"> {item.availableQuantity}</div>
            <div className="item-cost"> {item.cost}VND</div>
        </div>
        <div className="buy-item">
            <button className="add-item" onClick={() => {
                handleAddItemToCart(item.id)
            }}> Add </button>
            <div className="buy-quantity"> {item.buyQuantity} </div>
            <button className="remove-item" onClick={() => {
                handleDeleteItemFromCart(item.id)
            }}>Remove</button>
        </div>
    </div> );
}

export default Item;