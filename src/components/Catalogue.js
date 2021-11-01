import axios from 'axios';
import { useEffect, useState } from 'react';
import DisplayMakeup from './DisplayMakeup';

const Catalogue = () => {
    const [makeup, setMakeup] = useState([]);

    useEffect(() => {
        axios({
            url: 'http://makeup-api.herokuapp.com/api/v1/products.json',
            params: {
                product_type: 'foundation'
            }
        }).then((res) => {
            setMakeup(res.data);
        })
    }, []);

    return (
        <>
            {
                makeup.length ?
                    <DisplayMakeup makeup={makeup} />
                    : null
            }
        </>
    );
}

export default Catalogue;