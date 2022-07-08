module.exports = (srv) => {
    srv.on('getCurrentUserID', (req) => {
        console.log(req.user)
        return req.user.id;
    });
}