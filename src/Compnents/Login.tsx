import { useState,useEffect } from 'react';
import {User} from '../Interfaces'
import {UsersApi} from '../ApiCall'
import axios from 'axios'
import Alert from '../Compnents/Alert'


import { useAppSelector, useAppDispatch } from '../Hooks'

import {getUserDara,ClearUser}  from '../Features/User'


const Login = (props:any) =>{

    const dispatch = useAppDispatch()


    const [UserData,SetUserData] = useState<User>({
        name: "",
        email: "",
        password: "",
        virified: false,
    })

    const GetData = (key:any,value:any) =>{
        let newState = UserData
        newState[key] = value
        SetUserData(newState)
    }

    const Inscription = () =>{
        if(UserData.email !== "" && UserData.name !== "" && UserData.password !== "" ){
            axios.post<User>("http://localhost:3000"+UsersApi,UserData)
            .then(res =>{
                dispatch(getUserDara(res.data))
                props.SetSuccessLogin(true)
                props.SetOpenLogin(false);
                props.SetiSLogin(false)
            })
            .catch(err =>{})
        }
        else{}
    }

    const LoginUser= () =>{
        console.log("login => "  , UserData)
        if(UserData.email !== ""  && UserData.password !== "" ){
            axios.get("http://localhost:3000"+UsersApi+"?email="+UserData.email+"&password="+UserData.password)
            .then(res =>{
                if(res.data.length){
                    dispatch(getUserDara(res.data[0]))
                    props.SetSuccessLogin(true)
                }
                else{
                    props.SetErrorLogin(true)
                }
                props.SetOpenLogin(false);
                props.SetiSLogin(false)
            })
            .catch(err =>{})
        }
        else{}
    }
    const AUthentification = () => {!props.iSLogin ? Inscription() : LoginUser() }

    return (
        <>        
            <div className="container" style={{width: "400px",height: "500px"}}>
                <span className="error animated tada" id="msg"></span>
                <img  onChange={()=>{
                    console.log("ee");
                    props.SetOpenLogin(false);
                    props.SetiSLogin(false)
                }} 
                className="Close"   src={require('../Style/Img/shutdown.png')} alt="" />
                <form name="form1" className="box" >
                    <h5>Sign in to your account.</h5>
                    {!props.iSLogin && <input onChange={(e)=>{GetData('name',e.target?.value)}} type="text" name="Usename" placeholder="Usename" />}
                    <input  onChange={(e)=>{GetData('email',e.target?.value)}}  type="text" name="Email" placeholder="Email" />
                    <i className="typcn typcn-eye" id="eye"></i>
                    <input  onChange={(e)=>{GetData('password',e.target?.value)}}  type="password" name="password" placeholder="Passsword" id="pwd" />
                    <input onClick={(e)=>{
                        e.preventDefault();
                        AUthentification()
                    }} type="submit" value="Sign in" className="btn1" />
                </form>
            </div> 
        </>
    )
}

export default Login;