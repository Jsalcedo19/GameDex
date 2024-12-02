// This middleware checks if the user is signed in. If the user is signed in, the request is passed to the next middleware. If the user is not signed in, the user is redirected to the sign-in page.
const isSignedIn = (req, res, next) => {
    if (req.session.user) return next();
    res.redirect('/auth/sign-in');
  };
  
  module.exports = isSignedIn;
  