const authorize = (req, res, next) => {
    const { user } = req.query;
    if (user === 'Rose') {
        req.user = { name: 'MyRose', id: 1 }
        next();
    }
    else{
        console.log('Unauthorize');
        res.status(401).send('Unauthorized');
    }
}

module.exports = authorize;