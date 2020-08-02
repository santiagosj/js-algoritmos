/**
 * Observer
 */

const user = new user();

const init = () => {
    user.on('login',userLoggedIn);
    user.on('login',someOtherFunction);
};

const userLoggedIn = () => {
    console.log("Some user logged in...")
}

app.init()

/**
 * the following code would be in another file.
 */

 const login = () => {
     // Business logic for login here...

     user.trigger('login')
 }

 login()