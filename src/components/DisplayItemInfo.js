import { useParams } from 'react-router-dom';

function DisplayItemInfo({makeup}) {

    const { product } = useParams();
    
    // create a function that will filter the desired makeup product from the APi makeup array
    const filterMakeup = (item) => {
        // console.log(item.id)
        if(item.id === parseInt(product)){
            return item
        }
    }

    let theMakeup = {...makeup.filter(filterMakeup)}
    
    
    

    return (
        <div>
            <h2>{theMakeup[0].name}</h2>
        </div>
    )
}

export default DisplayItemInfo
