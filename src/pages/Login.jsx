import { useRef } from "react"
import '../components/Login/style/login.css'

const Login = () => {

  const emailRef = useRef('')
  const passwordRef = useRef('')

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <article className="login">
        <form className="login__form" onSubmit={handleSubmit}>
          <h3 className="login__titulo">Iniciar Sesión</h3>
          <input
            className="login__input"
            type="email"
            placeholder="Escribe su correo electronico"
            ref={emailRef}
          />
          <input
            className="login__input"
            type="password" 
            placeholder="Escribe su contraseña"
            ref={passwordRef}
          />
          <button className="login__btn">Entrar</button>
        </form>
    </article>
  )
}

export default Login