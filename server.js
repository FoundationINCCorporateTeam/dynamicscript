const express = require('express');
const app = express();

app.get('/script.js', (req, res) => {
    // Capture URL parameters
    const param1 = req.query.param1 || 'default1';
    const param2 = req.query.param2 || 'default2';

    // Define a JavaScript template with placeholders
    const scriptTemplate = `
        (function() {
            var variable1 = '${param1}';
            var variable2 = '${param2}';
            console.log("Variable 1: " + variable1);
            console.log("Variable 2: " + variable2);
        })();
    `;

    // Set the response content type to JavaScript
    res.setHeader('Content-Type', 'application/javascript');
    // Send the customized JavaScript
    res.send(scriptTemplate);
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
