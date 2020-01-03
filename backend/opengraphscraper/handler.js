const ogs = require('open-graph-scraper');
const bodyParser = require('body-parser')

module.exports = async (config) => {
    const app = config.app;
    app.use(bodyParser.json())

    app.get('/', (req, res) => {
        res.json({
            data: req.body
        });
    });
}