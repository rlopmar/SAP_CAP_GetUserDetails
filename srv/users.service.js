module.exports = (srv) => {
    srv.before ('READ','*', (req)=>{
        console.log(req.user)
        console.log(req.user.id)
        console.log(req.user.attr)
    })

    srv.on('getCurrentUserID', (req) => {
        return req.user.id;
    });
}