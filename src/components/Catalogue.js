import axios from 'axios';
import { useEffect, useState } from 'react';
import DisplayMakeup from './DisplayMakeup';
import SideFilter from './SideFilter';

const Catalogue = ({ callProduct, checkCartQuantity }) => {
    const [allMakeup, setAllMakeup] = useState([]);
    const [makeup, setMakeup] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    
    useEffect(() => {
        setIsLoading(true);
        axios({
            url: 'https://makeup-api.herokuapp.com/api/v1/products.json',
            params: {
                product_type: callProduct
            }
        }).then((res) => {
            takeOutNoPrice(res.data);
        })
    }, [callProduct]);

    const takeOutNoPrice = (apiResult) => {
        const newMakeupArray = [];

        apiResult.forEach((makeupItem) => {
            if(makeupItem.price > 0) {
                newMakeupArray.push(makeupItem);
            }
        });

        setAllMakeup(newMakeupArray);
        setMakeup(newMakeupArray);
        setIsLoading(false);
    }

    const addTagSearch = (tag) => {
        const newArray = [];
        
        allMakeup.forEach((makeupItem) => {
            if(makeupItem.tag_list.includes(tag)) {
                newArray.push(makeupItem);
            }
        })
        setMakeup(newArray);
    }
    const addBrandSearch = (brand) => {
        const newArray = [];
        
        allMakeup.forEach((makeupItem) => {
            if(makeupItem.brand) {
                if(makeupItem.brand.includes(brand)) {
                    newArray.push(makeupItem);
                }
            }
        })
        setMakeup(newArray);
    }

    return (
        <>
            {
                isLoading ?
                <div className="loader-wrapper">
                        <div className="loader-wrapper-content">
                            <span className="loader"><span className="loader-inner"></span></span>
                        </div>
                    </div>
                : 
                <>
                    <SideFilter 
                        productType={callProduct} 
                        makeupArray={allMakeup}
                        getTag={addTagSearch}
                        getBrand={addBrandSearch}
                    />

                    <DisplayMakeup makeup={makeup} checkCartQuantity={(cartQuantity) => checkCartQuantity(cartQuantity)}/>
                </>
            }
        </>
    );
}

export default Catalogue;