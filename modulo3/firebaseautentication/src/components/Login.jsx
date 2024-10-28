import { signInWithEmailAndPassword } from 'firebase/auth'
import React from 'react'
import { useForm } from 'react-hook-form'
import auth_user from '../api/api'
import Swal from 'sweetalert2'
import { Link } from 'react-router-dom'

export default function Login() {
  const { register, handleSubmit, formState: { errors } } = useForm()

  const loginForm = (data) => {
    signInWithEmailAndPassword(auth_user, data.email, data.password)
      .then((userCredentials) => {
        const user = userCredentials.user
        console.log(user);
        Swal.fire({
          title: "bienvenid@",
          text: "has iniciado sesión",
          icon: "success"
        });
      }).catch((error) => {
        Swal.fire({
          title: "usuario inválido",
          text: "revise la información de login",
          icon: "warning"
        });
        console.error(error.message);
      })
  }

  return (
    <div>
      <form onSubmit={handleSubmit(loginForm)}>
        <div>
          <input type='email' placeholder='ingrese su correo' {...register("email", { required: true })} />
          {errors.email && <span style={{ color: "red" }}>campo obligatorio</span>}
        </div>
        <div>
          <input type='password' placeholder='ingrese su contraseña' {...register("password", { required: true })} />
          {errors.password && <span style={{ color: "red" }}>campo obligatorio</span>}
        </div>
        <div>
          <button>
            Login
          </button>
        </div>
      </form>
      <section>
        <p><Link to="/register">Registrarse</Link></p>
      </section>
    </div>
  )
}
