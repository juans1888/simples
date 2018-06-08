// 1. 📝
const express = require('express');
const app = express();

// 2. ⚙️
app.use(express.static(__dirname + '/public'));
var port = 3000;

// 3. 👁️
app.listen(port, () => console.log('Server in: http://localhost:' + port.toString()));