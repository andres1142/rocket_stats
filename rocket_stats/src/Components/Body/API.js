import { useState } from 'react';  // Importing useState from React to use state in functional component.

export default function API() {
    // Creates the state variable counter and the function setCounter to update the state variable.
    const [counter, setCounter] = useState(0);


    // Function to update the state variable counter.
    function handleClick() {
        setCounter(counter + 1);
    }

    // Returns the JSX for the API component.
    return (
        <div>
            <h1>API</h1>
            <p>Here we will be using the SpaceX API to get data about the rockets.</p>
            <br/>
            <br/>

            {/* Button to update the state variable counter. */}
            <button onClick={handleClick}>Click Here</button>

            {/* Conditional  to display the number of times the button was clicked. */
            /* it calls the function handleClick when the button is clicked. */}
            {counter > 0 ? <p>Button Clicked {counter} times.</p> : null}
        </div>
    )
}