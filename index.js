const fs = require('fs');
const http = require('http');
const express = require('express');

const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const config = require('./config');

app.use(cors());
app.use(bodyParser.json());

const parsePackages = require('./utils/packageParser');

// Check if debian file is available
const filePath = fs.existsSync('/var/lib/dpkg/status') ? '/var/lib/dpkg/status' : 'status.real';
console.log(`Using file at '${filePath}' for parsing`);

// Start express application after the file has been parsed
parsePackages(filePath).then((result) => {
    app.get('/api/packages', async (req, res) => {
        res.status(200).send(result);
    });

    // Handle all other endpoints
    app.use((req, res) => {
        res.status(404).send({ status: 404, url: req.url });
    });

    const server = http.createServer(app);

    server.listen(config.port, () => {
        console.log(`Server running on port ${config.port}`);
    });
});
