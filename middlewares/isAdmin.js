


async function isAdmin(req, res, next) {
try {
    if(req.user){
        if(req.user.role === "admin"){
            next();
        }else{
           res.redirect("/login");
        }
    }
} catch (error){
    res.redirect("/login");
 }
}

module.exports = isAdmin;