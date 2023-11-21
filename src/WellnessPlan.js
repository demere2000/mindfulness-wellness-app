// Import the React library and the useState hook, which allows us to track state in a functional component
import React, { useState } from 'react';
// Importing UI components from Material-UI for better styling
// TextField is used for styled input fields, Button for styled buttons, and Box for layout and spacing
// LinearProgress is used for displaying progress visually
import { TextField, Button, Box, LinearProgress } from '@material-ui/core';

// Define the WellnessPlan functional component
function WellnessPlan() {
    // Initialize state with useState hook. 
    // 'plan' is our state variable, and 'setPlan' is the function to update this state.
    // Here, the state is an object with properties 'goal', 'status', 'progress', and 'badges'
    const [plan, setPlan] = useState({
        goal: '', // The goal property will store the user's wellness goal
        status: '', // New property to store the status message after form submission
        progress: 0, // New state property to track progress percentage
        badges: [] // New state property to store earned badges
    });

    // Function to calculate badges based on progress
    const calculateBadges = (newProgress) => {
        const newBadges = []; // Initialize an array to store earned badges
        // Add badges based on progress. More conditions can be added here
        if (newProgress >= 50) newBadges.push('Halfway There!');
        if (newProgress === 100) newBadges.push('Goal Achieved!');
        return newBadges; // Return the array of earned badges
    };

    // Define a function to handle the form submission.
    // 'event' is the form event that gets passed to this function automatically on form submission.
    function handleSubmit(event) {
        event.preventDefault(); // Prevent the default form submission behavior which refreshes the page.
        // Simulating progress update and badge calculation
        const newProgress = 50; // Example progress update
        const newBadges = calculateBadges(newProgress); // Calculating new badges
        // Updating the state with new progress, badges, and a status message
        setPlan({ ...plan, progress: newProgress, badges: newBadges, status: `Your plan for "${plan.goal}" is making progress!` });
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
            {/* New LinearProgress component to show progress visually */}
            <LinearProgress variant="determinate" value={plan.progress} style={{ marginTop: '20px' }} />
            {/* Displaying progress percentage */}
            <Box mt={2}>Progress: {plan.progress}%</Box> 
            {/* Displaying earned badges */}
            {plan.badges.length > 0 && (
                <Box mt={2}>
                    <h3>Earned Badges</h3> {/* New: Heading for the badges section */}
                    {/* New: Mapping through each badge in the badges array and displaying it */}
                    {plan.badges.map((badge, index) => <div key={index}>{badge}</div>)}
                </Box>
            )}
        </Box>
    );
}

export default WellnessPlan; // Export the WellnessPlan component for use in other parts of the app
