var express = require('express');

var app = express();

const port = 3000

app.use(express.json());

app.get('/', (req: Request, res: Response) => {
	res.send({"server": "express"})
});

app.get('/users', (req: Request, res: Response) => {
	res.send({"user": "rajae"})
});

app.listen(port, () => {
	console.log(`Server Listening on ${port}`)
})
