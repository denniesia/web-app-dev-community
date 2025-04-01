const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();

// Set EJS as the view engine
app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended: true }));

// Set the views directory to 'templates' where start-page.ejs is located
app.set('views', path.join(__dirname, 'templates'));

// Serve static files (CSS) from the 'views' directory
app.use(express.static(path.join(__dirname, 'views')));



// Route for the home page
app.get('/', (req, res) => {
    res.render('start-page'); // Renders templates/start-page.ejs
});

app.get('/form', (req, res) => {
    res.render('form');
});

app.post('/submit', (req, res) => {
    const { username, password, remember } = req.body;
    console.log(`Username: ${username}, Password: ${password}, Remember me: ${remember}`);
    
    res.send('Form submitted successfully!');
});

app.get('/register', (req, res) => {
    res.render('register');
});

app.get('/profile', (req, res) => {
    res.render('profile');
});


// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});





