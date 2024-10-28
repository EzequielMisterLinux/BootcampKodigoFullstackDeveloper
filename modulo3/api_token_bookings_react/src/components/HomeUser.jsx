import { useEffect, useState } from "react";
import { getBooks } from "../api/GetBooks";
import { Navigate } from "react-router-dom";

export default function HomeUser() {
    const [book, setBook] = useState([]);

    useEffect(() => {
        const fetchBooks = async () => {
            try {
                let token = sessionStorage.getItem("token");
                console.log("Token:", token);

                const booksData = await getBooks(token);
                setBook(booksData);
            } catch (error) {
                console.error("Error al obtener los libros:", error);
            }
        };

        fetchBooks();
    }, []);

    const Logout = () => {
        try {
            sessionStorage.clear();
            // Navigate to login after logout
            window.location.href = "/";
        } catch (error) {
            console.error("Error during logout:", error);
        }
    }

    let isLogin = sessionStorage.getItem("token");

    // If the user is not logged in, redirect to the login page
    if (!isLogin) {
        return <Navigate to="/" />;
    }

    return (
        <div>
            <h2>¡Bienvenido de nuevo!</h2>
            <button onClick={Logout}>Cerrar Sesión</button>
            {book.length > 0 ? (
                <ul>
                    {book.map((item, index) => (
                        <li key={index}>
                            <strong>Booking:</strong> {item.booking} <br />
                            <strong>Accommodation:</strong> {item.accomodation}
                        </li>
                    ))}
                </ul>
            ) : (
                <p>No se encontraron libros</p>
            )}
        </div>
    );
}
