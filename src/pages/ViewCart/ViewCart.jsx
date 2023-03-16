import NavBar from "../../components/NavBar/NavBar";
import { useNavigate } from "react-router-dom";

function ViewCart({items, total, handleBook}) {
    const navigate = useNavigate()
    const itemList = items.map((item) => {
        if (item.buyQuantity === 0) {
            return 
        } 
        return (<tr key={item.id}>
            <td> {item.title} </td> 
            <td> {item.buyQuantity}</td>
            <td> {item.cost}</td>
            <td> {item.cost * item.buyQuantity}</td>
        </tr>)
    })
    return ( <div className="view-cart-container">
        <div className="view-cart-top">
            <NavBar haveButton={false} total={total}/>
        </div>
        <div className="view-cart-bottom">
            <table className="view-cart-table">
                <tbody>
                <tr>
                    <th>
                        Product
                    </th>
                    <th>
                        Unit
                    </th>
                    <th>
                        Price 
                    </th>
                    <th>
                        Total
                    </th>
                </tr>
                {itemList}
                </tbody>
            </table>
            <div className="view-cart-button"> 
                <button className="view-cart-button-book" onClick={
                    () => {
                        handleBook()
                    }
                }> Book </button>
                <button className="view-cart-button-back" onClick={
                    () => {
                        navigate("/")
                    }
                }> Back To Cart </button>
            </div>
        </div>
    </div> );
}

export default ViewCart;