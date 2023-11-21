// Import the React library and the useState hook, which allows us to track state in a functional component
import React, { useState } from 'react';
// Importing UI components from Material-UI for better styling
// TextField is used for styled input fields, Button for styled buttons, and Box for layout and spacing
import { TextField, Button, Box } from '@material-ui/core';

// Define the WellnessPlan functional component
function WellnessPlan() {
    // Initialize state with useState hook. 
    // 'plan' is our state variable, and 'setPlan' is the function to update this state.
    // Here, the state is an object with one property 'goal' which is initialized as an empty string.
    // Adding a new 'status' property to store feedback messages after form submission
    const [plan, setPlan] = useState({
        goal: '', // The goal property will store the user's wellness goal
        status: '' // New property to store the status message after form submission
    });

    // Define a function to handle the form submission.
    // 'event' is the form event that gets passed to this function automatically on form submission.
    function handleSubmit(event) {
        event.preventDefault(); // Prevent the default form submission behavior which refreshes the page.
        // Updating the 'status' property in the state with a success message
        setPlan({ ...plan, status: `Your plan for "${plan.goal}" has been created successfully!` });
    }

    // The JSX returned by our component that describes the UI.
    return (
        <Box padding={2}> {/* Box component from Material-UI for layout with padding. 'padding={2}' adds padding around the content */}
            <h2>Create Your Wellness Plan</h2> {/* A heading for the component */}
            <form onSubmit={handleSubmit}> {/* A form element with an onSubmit event handler */}
                {/* Material-UI TextField replaces the standard input field for better styling and UX */}
                <TextField 
                    label="Goal" // 'label' prop to provide a floating label for the TextField
                    type="text" // Specifies the type of input this TextField should accept
                    value={plan.goal} // The 'value' prop binds the TextField to the 'goal' state
                    onChange={e => setPlan({ ...plan, goal: e.target.value })} // 'onChange' updates the 'goal' in the state as user types
                    fullWidth // The 'fullWidth' prop makes the TextField take up the full width of its parent container
                    margin="normal" // Adds standard margin around the TextField for spacing
                />
                {/* Material-UI Button for submitting the form, styled with primary color and contained variant for prominence */}
                <Button 
                    type="submit" 
                    color="primary" 
                    variant="contained"
                >
                    Create Plan {/* Text for the submit button */}
                </Button>
                {/* New div element for displaying the status message. It's only shown when 'status' is not empty */}
                {plan.status && (
                    <div style={{ marginTop: '20px', color: 'green' }}>
                        {plan.status} {/* Displaying the status message */}
                    </div>
                )}
            </form>
        </Box>
    );
}

export default WellnessPlan; // Export the WellnessPlan component for use in other parts of the app
