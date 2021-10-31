import { useState } from "react"


function DisplayMakeup({number}) {
    // save all the makeup into an array where it can be modified
    // use splice to take 20 items from that array and display to the currentDisplay
    // once user clicks "display more" button, run the function again
        // splice 20 more items from the array and add it in addition to the 20 currentDisplay (40 displayed items)
        // keep adding 20 each time user clicks "display more" button

    // How to add numbered directory
        // check the length of the props array items
        // based on the length, we add an appropriate number buttons
            // Math.ceil(array.length / 20)  -> ceil rounds up to the greatest integer
        // loop through the array

    const [currentDisplay, setCurrentDisplay] = useState([]);

    const sortMakeupByNumber = () => {
        // write code
    }

    return (
        // <div className="kyleIsStupid">
        //     {
        //         makeup.map((individualMakeup) => {
        //             return(
        //                 <div className="makeupCard">
        //                     <h2>{individualMakeup.name}</h2>
        //                     <img src={individualMakeup.api_featured_image} alt="individualMakeup.name" />
        //                 </div>
        //             )
        //         })
        //     }
        // </div>
        <>
            <h2>Kyle is Stupid</h2>
        </>
    )
}

export default DisplayMakeup
