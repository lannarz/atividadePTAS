//video do middleware
module.exports = (req, res, next ) => {
    console.log("middleware")
    next();
}
