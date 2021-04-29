import React, { useState, useEffect } from "react";
import Layout from "./Layout";
import Card from "./Card";
import { getCategories, getFilteredProducts } from "./apiCore";
import Checkbox from "./Checkbox";
import RadioBox from "./RadioBox";
import { prices } from "./fixedPrices";
const Shop = () => {
    const [myFilters, setMyFilters] = useState({
        filters: { category: [], price: [] }
    });
    const [categories, setCategories] = useState([]);
    /* eslint-disable no-unused-vars */
    const [error, setError] = useState(false);
    const [limit, setLimit] = useState(6);
    const [skip, setSkip] = useState(0);
    const [size, setSize] = useState(0);
    const [filteredResults, setFilteredResults] = useState([]);

    const init = () => {
        getCategories().then(data => {
            if (data.error) {
                setError(data.error);
            } else {
                setCategories(data);
            }
        });
    };

    const loadFilteredResults = newFilters => {
        // console.log(newFilters);
        getFilteredProducts(skip, limit, newFilters).then(data => {
            if (data.error) {
                setError(data.error);
            } else {
                setFilteredResults(data.data);
                setSize(data.size);
                setSkip(0);
            }
        });
    };

    const loadMore = () => {
        let toSkip = skip + limit;
        // console.log(newFilters);
        getFilteredProducts(toSkip, limit, myFilters.filters).then(data => {
            if (data.error) {
                setError(data.error);
            } else {
                setFilteredResults([...filteredResults, ...data.data]);
                setSize(data.size);
                setSkip(toSkip);
            }
        });
    };

    const loadMoreButton = () => {
        return (
            size > 0 &&
            size >= limit && (
                <button onClick={loadMore} className="btn btn-warning mb-5 font-weight-bold rounded">
                    Load more
                </button>
            )
        );
    };

    useEffect(() => {
        init();
        loadFilteredResults(skip, limit, myFilters.filters);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const handleFilters = (filters, filterBy) => {
        // console.log("SHOP", filters, filterBy);
        const newFilters = { ...myFilters };
        newFilters.filters[filterBy] = filters;

        if (filterBy === "price") {
            let priceValues = handlePrice(filters);
            newFilters.filters[filterBy] = priceValues;
        }
        loadFilteredResults(myFilters.filters);
        setMyFilters(newFilters);
    };

    const handlePrice = value => {
        const data = prices;
        let array = [];

        for (let key in data) {
            if (data[key]._id === parseInt(value)) {
                array = data[key].array;
            }
        }
        return array;
    };

    return (
        <Layout
            title=""
            description=""
            className=""
        >
        <div className="container-fluid bg-success w-100 shadow">
        <div className="row p-2">
            <Checkbox
                categories={categories}
                handleFilters={filters =>
                handleFilters(filters, "category")
                }
            />
        </div>
        </div>
        <div className="container-fluid mb-2 p-1 shadow">
            <h1 className="h1 text-center my-3 p-2 font-weight-bold"><span style={{color:"orange"}}>Incre</span><span style={{color:"#e8e8e8"}}>dible</span><span style={{color:"green"}}> India!</span></h1>
            <p className="text-justify mx-2">Travel to the 27 vibrant states in the multilingual, multicultural and pluralistic Union of India. Each of the Indian states has something exclusive to offer to wide-eyed tourists who flock throughout the year. India is a major travel and tourist destination because of its rich and versatile travel experience in terms of recreational and adventure activities, historic and modern tourist sites, cultural and spiritual insight. Travel to India is like exploring its treasure trove. The priceless monuments like the Taj Mahal and the Imambara attract tourists to India besides revealing its rich architectural and cultural heritage. </p>
        </div>
        <div className="container-fluid">
            <div className="row mt-3">
                <div className="col-md-2 col-sm-12 border-right shadow">
                    <h5 className="h5 font-weight-bold text-warning text-center my-3 border-bottom">Filter by price range</h5>
                    <RadioBox
                        prices={prices}
                        handleFilters={filters =>
                        handleFilters(filters, "price")
                    }
                    />
                </div>
                <div className="col-md-10 col-sm-12">
                    <div className="row mx-auto">
                        {filteredResults.map((product, i) => (
                            <div key={i} className="col-md-4 col-sm-6 col-xs-12 mb-3">
                                <Card product={product} />
                            </div>
                        ))}
                    </div>
                    <hr />
                    {loadMoreButton()}
                </div>
            </div>
        </div>

        </Layout>
    );
};

export default Shop;
