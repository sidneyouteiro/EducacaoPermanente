//página de login 
import React from 'react'

import './inicio.css'

function Inicio() {

    //adaptar login para js
    //fazer mudanças para usar useState
    //mudar links esqueci a senha e cadastro

    return (
        <div className="login-index">
            <div className="index-header">
                <a href="/">Educação Permanente</a>
            </div>

            <main className="main-content-forms">
                <div className="form-page-container">
                    <div className="form-container">
                        <form>
                            <h1>Olá!</h1>
                            <p>Realize login para ter acesso a funcionalidades exclusivas.</p>
                            <input type="text" name="usuario" class="form-input" placeholder="Usuário" required />
                            <input type="password" name="senha" class="form-input" placeholder="Senha" required></input>
                            <input type="submit" class="button login" value="Login" />
                            <a href="esqueciasenha" class="forgot">Esqueceu a senha?</a>
                            <a href="cadusuario" class="signup">Não possui conta? <span class="form-highlight">Se cadastre</span></a>
                        </form>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default Inicio