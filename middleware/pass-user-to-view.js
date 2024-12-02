// This middleware is used to pass the user object to the view so that we can use it in the views.
const passUserToView = (req, res, next) => {
    res.locals.user = req.session.user ? req.session.user : null;
    next();
  }
  
  module.exports = passUserToView;
  