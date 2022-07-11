module.exports = (srv) => {
    srv.before ('READ','*', (req)=>{
        console.log(req.user)
    })

    srv.on('getCurrentUserID', (req) => {
        return req.user.id;
    });
}