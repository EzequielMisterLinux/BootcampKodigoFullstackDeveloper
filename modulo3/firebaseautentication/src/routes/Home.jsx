import { onAuthStateChanged, signOut } from 'firebase/auth'
import { useState, useEffect } from 'react'
import auth_user from '../api/api'
import Login from '../components/Login'
import Swal from 'sweetalert2'

export default function Home() {
  const [user, setUser] = useState(null)

  const cerrarSesion = () => {
    signOut(auth_user)
      .then(() => {
        Swal.fire({
          title: "Adios",
          text: "has cerrado sesión",
          icon: "success"
        });
      }).catch((error) => {
        Swal.fire({
          title: "Problema",
          text: "Hubo un problema al cerrar sesión",
          icon: "warning"
        });
        console.error(error.message);
      })
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth_user, (userFirebase) => {
      if (userFirebase) {
        setUser(userFirebase)
      } else {
        setUser(null)
      }
    });

    return () => unsubscribe(); // Cleanup subscription on unmount
  }, [])

  return (
    <>
      {user ?
        <div>
          <h1>Bienvenid@ </h1>
          <p>Has iniciado sesión</p>
          <button onClick={cerrarSesion}>Cerrar sesión</button>
        </div>
        :
        <Login />
      }
    </>
  )
}
