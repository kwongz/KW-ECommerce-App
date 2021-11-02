import axios from 'axios';
import { useEffect, useState } from 'react';
import DisplayMakeup from './DisplayMakeup';

const Catalogue = () => {
    const [makeup, setMakeup] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        axios({
            url: 'http://makeup-api.herokuapp.com/api/v1/products.json',
            params: {
                product_type: 'foundation'
            }
        }).then((res) => {
            setMakeup(res.data);
            setIsLoading(false)
        })
    }, []);

    return (
        <>
            {
                isLoading ?
                    <div className="loader-wrapper">
                        <div className="loader-wrapper-content">
                            <span className="loader"><span className="loader-inner"></span></span>
                        </div>
                    </div>
                : <DisplayMakeup makeup={makeup} />
            }
        </>
    );
}

export default Catalogue;