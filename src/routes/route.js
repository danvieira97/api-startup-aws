const route = require('express').Router();

route.get('/', (req, res) => {
    res.json({ message: 'API - Integração Startup Unifil'})
});

route.post('/login', (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
        return res.status(400).json({ message: 'Invalid body params' })
    }
    fetch('http://localhost:3000/login', {
        method: 'POST',
        body: JSON.stringify({ email, password }),
    })
    .then(res => res.json())
    .catch(err => res.status(500).json({ message: 'Internal server error' }))
});

route.post('/createClient', (req, res) => {
    const { name, email, celphone, password, confirmPassword } = req.body;
    if (!name, !email, !celphone, !password, !confirmPassword) {
        return res.status(400).json({ message: 'Invalid body params' })
    }
    const payload = { name, email, celphone, password, confirmPassword };

    fetch('http://localhost:3000/createClient', {
        method: 'POST',
        body: JSON.stringify(payload),
    })
    .then(res => res.json())
    .catch(err => res.status(500).json({ message: 'Internal server error' }))
});

module.exports = route;