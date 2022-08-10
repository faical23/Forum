const Login = () =>{

    return (
        <div className="animated bounceInDown">
            <div className="container">
                <span className="error animated tada" id="msg"></span>
                <form name="form1" className="box" >
                <h5>Sign in to your account.</h5>
                    <input type="text" name="email" placeholder="Email" />
                    <i className="typcn typcn-eye" id="eye"></i>
                    <input type="password" name="password" placeholder="Passsword" id="pwd" />
                    <label>
                    <input type="checkbox" />
                    <span></span>
                    <small className="rmb">Remember me</small>
                    </label>
                    <a href="#" className="forgetpass">Forget Password?</a>
                    <input type="submit" value="Sign in" className="btn1" />
                </form>
                    <a href="#" className="dnthave">Don’t have an account? Sign up</a>
            </div> 
        </div>
    )
}

export default Login;