import "./Styles/Login.css"
import { useState } from "react";


const Login = () => {
    return (

        <>
            <main className="main-login">
                <div className="area">
                    <form action="" className="FormLogin">
                        <div className="area-login">
                            <h2>LOGIN</h2>
                            <div id="input-transform"><i class="bi bi-person"></i>
                                <input type="text" name="" id="" placeholder="User" />
                            </div>
                            <div id="input-transform">
                                <i class="bi bi-eye"></i>
                                <input type="password" placeholder="Password" />
                            </div>
                            <div id="help-bottom">
                                <p>
                                    <label>
                                        <input type="checkbox" /> 
                                        Lembrar-me
                                    </label>
                                </p>
                                <p>
                                    <a href="http://">Esqueceu a senha?</a>
                                </p>
                            </div>
                            <button>Entrar</button>
                        </div>
                    </form>
                </div >
            </main >
        </>
    )
}

export default Login;