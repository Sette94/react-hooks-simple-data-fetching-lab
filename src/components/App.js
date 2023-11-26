import react, { useEffect, useState } from "react";

const dogUrl = "https://dog.ceo/api/breeds/image/random"

function App() {

    const [image, setImage] = useState("Loading...")

    useEffect(() => {
        fetch(dogUrl)
            .then(res => res.json())
            .then(dogImage => {
                console.log(dogImage.message)
                setImage(<img src={dogImage.message} alt={"A Random Dog"}></img>)

            })

    }, [])


    return (

        <div>
            <p>{image}</p>
        </div>
    )

}



export default App;
