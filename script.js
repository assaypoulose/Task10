// Assuming a hypothetical async function displayText that displays the text passed to it
// and then calls the callback function when it's done.
const displayText = (text, callback) => {
    // Simulate async operation
    setTimeout(() => {
        console.log(text);
        if (callback) callback();
    }, 1000);
};

// Now, we'll create the countdown using callback hell
displayText('10', () => {
    displayText('9', () => {
        displayText('8', () => {
            displayText('7', () => {
                displayText('6', () => {
                    displayText('5', () => {
                        displayText('4', () => {
                            displayText('3', () => {
                                displayText('2', () => {
                                    displayText('1', () => {
                                        displayText('Happy Independence Day', null);
                                    });
                                });
                            });
                        });
                    });
                });
            });
        });
    });
});