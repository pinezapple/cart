import './App.css';
import Home from './pages/Home/Home';
import ViewCart from './pages/ViewCart/ViewCart'

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { useEffect, useState } from "react";

function App() {
   const initValue = [{
        "id": 10,
        "category": "Fruits and Vegetables",
        "brand": "Fresho",
        "title": "Potato",
        "availableQuantity": 50,
        "cost": 10,
        "description": "1 kg",
        "imageUrl": "https://blog.oxforddictionaries.com/wp-content/uploads/potato.jpg"
        },
        {
        "id": 20,
        "category": "Fruits and Vegetables",
        "brand": "Fresho",
        "title": "Guava",
        "availableQuantity": 60,
        "cost": 40,
        "description": "0.5 kg",
        "imageUrl": "https://www.caloriesecrets.net/wp-content/uploads/2016/11/health-benefits-of-guavas.jpg"
        },
        {
        "id": 30,
        "category": "Dairy",
        "brand": "Farm Fresh",
        "title": "Milk",
        "availableQuantity": 0,
        "cost": 22,
        "description": "500ml",
        "imageUrl": "https://atmedia.imgix.net/589dd2e644dfd7a46b4cbf4871afa2a782532280?w=1500&fit=max"
        }
    ]

    const [items, setItems] = useState(initValue)
    useEffect(() => {
      const newItems = items.map((item) => (
        {
          ...item,
          buyQuantity: 0,
        }
      ))
      setItems(newItems)
    }, [])

    const [total, setTotal] = useState(0)
    const handleAddItemToCart = (id) => {
        const newItems = items.map((item) => {
          if (item.id === id ) {
            return {
                ...item,
                buyQuantity: item.buyQuantity + 1,
                availableQuantity: item.availableQuantity - 1,
            }
          }  
          return item
        })
        setItems(newItems)
        setTotal(total + 1)
    }

    const handleDeleteItemFromCart = (id) => {
        const newItems = items.map((item) => {
          if (item.id === id ) {
            return {
                ...item,
                buyQuantity: item.buyQuantity - 1,
                availableQuantity: item.availableQuantity + 1,
            }
          }  
          return item
        })
        setItems(newItems)
        setTotal(total - 1)
    }

    const handleBook = () => {
        const newItems = items.map((item) => (
            {
                ...item,
                buyQuantity: 0,
            }
        ))
        setItems(newItems)
        setTotal(0)
    }

    const router = createBrowserRouter([
        {
            path: "/",
            element: <Home items={items} total={total} 
            handleAddItemToCart={handleAddItemToCart}
            handleDeleteItemFromCart={handleDeleteItemFromCart}/>
        },
        {
            path: "/cart",
            element: <ViewCart items={items} total={total} handleBook={handleBook}/>
        },
    ])

    return (
    <div className="App">
      <RouterProvider router={router} />      
    </div>
  );
}

export default App;
