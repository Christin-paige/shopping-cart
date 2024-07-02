import { useEffect, useState } from "react";
import NavBar from './navBar';
import { Outlet } from 'react-router-dom'


export default function Jewelery(){

    const [items, setItems] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect (()=> {
        fetch("https://fakestoreapi.com/products") 
            .then ((response) => {
                if (response.status >= 400){
                    throw new Error ("server error")
                }
                return response.json()
            })
      //this was displaying all of the items, so I have to figure out how to display specific items   
                //setItems(data)

                //filter!!! 
               .then((data) => {
                const specificItems = data.filter(item => 
                    (item.id === 8) ||
                    (item.id === 7) ||
                    (item.id === 6)
                );

          setItems(specificItems)

          
    })
                .catch((error) => setError(error))
                .finally(() => setLoading(false));
                },[])
            
            if (loading) return <p>loading...</p>
            if (error) return <p>a network error was encountered</p>;

            return (
                <>
                <NavBar />
                <h2 className="shirt-collection">The Shirt Collection</h2>
                <div className="container">
               {items.map((item) => item && (
                <div className="shirts" key={item.id}>
                <img src={item.image} alt={item.title} className="item" />
                <div className="description">
                <p>{item.title}</p>
                <p>${item.price}</p>  
                 <button>add to bag</button>   
                
                </div>
               
                </div>
               
               ))}
                <Outlet />
                </div>
                </>
            )
        
        }