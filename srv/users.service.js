module.exports = (srv) => {
    srv.before ('READ','*', (req)=>{
        console.log(req.user)
        console.log(req.user.id)
        console.log(req.user.attr)
    })

    srv.on('getCurrentUserID', (req) => {
        console.log("USER: ", req.user.attr.email)
        const user = req.user;
        user.myAttributes = {
            id: req.user.attr.id,
            email: req.user.attr.email,
            givenName: req.user.attr.givenName,
            familyName: req.user.attr.familyName
        }
        return user;
    });
}