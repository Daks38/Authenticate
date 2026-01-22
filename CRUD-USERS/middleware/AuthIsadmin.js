const authIsadmin = (req, res, next)=>{
    if(!req.user.isAdmin === "admin"){
        res.status(403).json({error: "Accès reservé aux admins"})
    }
    next()
}
module.exports = authIsadmin