import React, { useState, useEffect } from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';

const ItemDetailContainer = () => {

    const [antojos, setAntojos] = useState([]);
    const [isLoading, setIsLoading] = useState(true);


    useEffect(() => {
        fetch('https://api.github.com/users')
            .then((response) => response.json())
            .then((json) => setAntojos(json));
        setTimeout(() => {
            setIsLoading(false)
        }, 2000)
    }, [])

    return (
        <div>
            {isLoading ? <p>Is loading...</p> : <div> {antojos.map((antojos) => {
                return (
                    <div key={antojos.id}>
                        <ItemDetail data={antojos} />
                    </div>)


            })}
            </div>
            }

        </div>
    );
};

export default ItemDetailContainer;