const express = require("express");
const path = require("path");
const app = express();
const port = 3000;

app.use('/static', express.static(path.join(__dirname, 'dist')));

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
})

// in the terminal enter the comand npm run dev
// then paste http://localhost:3000/static/index.html in any browser