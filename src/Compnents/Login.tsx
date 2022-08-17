const Login = (props:any) =>{

    return (
            <div className="container">
                <span className="error animated tada" id="msg"></span>
                <img  onClick={()=>{props.SetOpenLogin(false)}}  style={{cursor:'pointer',width: '10%',position: 'absolute',right: '-10px',top: '-20px'}} src={require('../Style/Img/shutdown.png')} alt="" />
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
    )
}

export default Login;