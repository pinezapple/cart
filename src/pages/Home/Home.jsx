import NavBar from "../../components/NavBar/NavBar";
import Item from "../../components/Item/Item";
import './Home.scss'

function Home ({items, total, handleAddItemToCart, handleDeleteItemFromCart}) {
    const itemList = items.map((item)=> {
        return <Item item={item} key={item.id} handleAddItemToCart={handleAddItemToCart} 
        handleDeleteItemFromCart={handleDeleteItemFromCart}></Item>
    })   

     return ( <div className="home-container">
        <div className="home-top">
            <NavBar haveButton={true} total={total}></NavBar>
        </div>
        <div className="home-bottom"> 
            {itemList}    
        </div>
    </div> );
}

export default Home ;