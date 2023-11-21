// Import the React library and the useState hook, which allows us to track state in a functional component
import React, { useState } from 'react';

// Define the WellnessPlan functional component
function WellnessPlan() {
    // Initialize state with useState hook. 
    // 'plan' is our state variable, and 'setPlan' is the function to update this state.
    // Here, the state is an object with one property 'goal' which is initialized as an empty string.
    const [plan, setPlan] = useState({
        goal: '', // The goal property will store the user's wellness goal
    });

    // Define a function to handle the form submission.
    // 'event' is the form event that gets passed to this function automatically on form submission.
    function handleSubmit(event) {
        event.preventDefault(); // Prevent the default form submission behavior which refreshes the page.
        console.log(plan); // For now, just log the plan object to the console to see the user's input.
    }

    // The JSX returned by our component that describes the UI.
    return (
        <div>
            <h2>Create Your Wellness Plan</h2> {/* A heading for the component */}
            <form onSubmit={handleSubmit}> {/* A form element with an onSubmit event handler */}
                <label> {/* A label for the input field */}
                    Goal: {/* Text for the label */}
                    <input
                        type="text" 
                        value={plan.goal} 
                        onChange={e => setPlan({ ...plan, goal: e.target.value })}
                        /* An input field for the user to enter their goal
                           The value of the input is controlled by our state
                           onChange updates the state with the user's input */
                    />
                </label>
                <button type="submit">Create Plan</button> {/* A submit button for the form */}
            </form>
        </div>
    );
}

export default WellnessPlan; // Export the WellnessPlan component for use in other parts of the app
