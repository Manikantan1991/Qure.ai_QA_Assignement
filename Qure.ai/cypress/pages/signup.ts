var signup = 
{
    Sign_Up :() =>
    {

        return '[show-authed="false"] > :nth-child(3) > .nav-link'
    },

    Username_txtbox :() =>
    {
        return 'input[placeholder="Username"]'

    },

    Email_txtbox :() =>
    {
        return 'input[placeholder="Email"]'
    },

    Password_txtbox: () =>
    {
        return "input[placeholder='Password']"
    },

    SignUP_btn :() =>
    {
        return "button[type='submit']"
    },

    Settings_icon :() =>
    {
        return '[show-authed="true"] > :nth-child(3) > .nav-link';
    },

    Logout_btn :() =>
    {
        return ".btn.btn-outline-danger";
    }
    
}

export default signup;