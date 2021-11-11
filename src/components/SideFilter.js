import React, { useEffect, useState } from 'react'

function SideFilter({ productType, makeupArray, getTag, getBrand }) {
    const [sortTags, setSortTags] = useState([]);
    const [sortBrands, setSortBrands] = useState([]);
    const [showTags, setShowTags] = useState(false);
    const [showBrands, setShowBrands] = useState(false);

    useEffect(() => {
        sortArrayInfo();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [productType])

    const sortArrayInfo = () => {
        const newTags = [];
        const newBrands = [];

        makeupArray.forEach((makeup) => {
            if (makeup.tag_list.length > 0) {
                makeup.tag_list.forEach((tag) => {
                    if (!newTags.includes(tag)) {
                        newTags.push(tag);
                    }
                })
            }
            if (makeup.brand) {
                if (!newBrands.includes(makeup.brand)) {
                    newBrands.push(makeup.brand);
                }
            }
        });

        setSortTags(newTags);
        setSortBrands(newBrands);
    }

    return (
        <div className="sideFilterContainer">
            <h2>{productType}</h2>
            <ul>
                <li className="tagsContainer">
                    <h4 onClick={() => setShowTags(!showTags)}>Tags</h4>
                    {
                        showTags ?
                            <ul>
                                {
                                    sortTags.map((tag) => {
                                        return (
                                            <li
                                                onClick={(e) => getTag(e.target.innerText)}
                                                className="tag"
                                                key={tag}>{tag}
                                            </li>
                                        )
                                    })
                                }
                            </ul>
                            : null
                    }
                </li>
                <li className="brandsContainer">
                    <h4 onClick={() => setShowBrands(!showBrands)}>Brands</h4>
                    {
                        showBrands ?
                            <ul>
                                {
                                    sortBrands.map((brand) => {
                                        return(
                                            <li
                                                onClick={(e) => getBrand(e.target.innerText.toLowerCase())}
                                                key={brand} 
                                                className="brand">{brand}
                                            </li>
                                        )
                                    })
                                }
                            </ul>
                            : null
                    }
                </li>
            </ul>
        </div>
    )
}

export default SideFilter;
