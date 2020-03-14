const ogs = require('open-graph-scraper')
const cors = require('cors')

module.exports = async (config) => {
    const routing = new Routing(config.app);
    routing.configure();
    routing.bind(routing.handle);
}

class Routing {
    constructor(app) {
        this.app = app;
    }

    configure() {
        const bodyParser = require('body-parser')
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.raw());
        this.app.use(bodyParser.text({ type : "text/*" }));
        this.app.use(cors())
        this.app.disable('x-powered-by');
    }

    bind(route) {
        this.app.post('/*', route);
        this.app.get('/*', route);
        this.app.patch('/*', route);
        this.app.put('/*', route);
        this.app.delete('/*', route);
        this.app.options('/*', route);
    }

    handle(req, res) {
        if(req.body && req.body.url){
            ogs({
                url: req.body.url,
                'timeout': 50000
            }).then(result => {
                res.json(result);
            }).catch(err => {
                res.status(500).json(err);
            })
        } else {
            res.status(400).send(new Error('req.body and req.body.url parameter are required, perkin'))
        }
        // res.send(JSON.stringify(req.body.url));
    }
}
