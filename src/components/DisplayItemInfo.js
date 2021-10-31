import { useParams } from 'react-router-dom';

function DisplayItemInfo(props) {

    const { product } = useParams();
    const { id } = (props.location && props.location.state)||{};
    console.log(id);

    return (
        <div>
            <p>Makeup!</p>
        </div>
    )
}

export default DisplayItemInfo
