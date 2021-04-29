import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Layout from './Layout';
import { getCart } from './cartHelpers';
import Card from './Card';
import Checkout from './Checkout';

const Cart = () => {
    const [items, setItems] = useState([]);
    const [run, setRun] = useState(false);

    useEffect(() => {
        setItems(getCart());
    }, [run]);

    const showItems = items => {
        return (
            <div>
                <h3 className="h3 my-2 p-2 text-center text-info border-info rounded border">You have {`${items.length}`} Dream destination.</h3>
                {items.map((product, i) => (
                    <Card
                        key={i}
                        product={product}
                        showAddToCartButton={false}
                        cartUpdate={true}
                        showRemoveProductButton={true}
                        setRun={setRun}
                        run={run}
                    />
                ))}
            </div>
        );
    };

    const noItemsMessage = () => (
        <h3 className ="border border-warning p-3 my-4 h3 rounded shadow text-center">
            Your Wishlist is empty. <br /><br /> <Link to="/shop" className="text-info font-weight-bold h4">Look for places to visit</Link>
        </h3>
    );

    return (
        <Layout
            title=""
            description=""
            className=""
        >
            <div className="row my-2">
           
                <div className="col-4 offset-1">
                <div className="cart-product-details">{items.length > 0 ? showItems(items) : noItemsMessage()}</div>
                </div>
                <div className="col-5 offset-1">
                <div className="my-4 card p-3">
                    <h2 className="my-2 p-3 border rounded shadow text-warning text-center">Your cart summary</h2>
                    <hr />
                    <Checkout products={items} setRun={setRun} run={run} />
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default Cart;
