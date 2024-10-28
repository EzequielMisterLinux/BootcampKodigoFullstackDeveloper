import { doc, getDoc } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import db from '../api/Firebase'

export default function EditProduct() {
    const { id } = useParams()
    const [product, setProduct] = useState(null)
    const [loading, setLoading] = useState(true)

    const getProduct = async () => {
        try {
            const productDoc = await getDoc(doc(db, "products", id))
            if (productDoc.exists()) {
                setProduct(productDoc.data())
            } else {
                console.log("El producto no existe.")
            }
        } catch (error) {
            console.error("Error al obtener el producto:", error)
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        getProduct()
    }, [id])

    if (loading) {
        return <div>Cargando...</div>
    }

    return (
        <div>
            <h2>Editar Producto</h2>
            {product ? (
                <div>
                    <h3>{product.name}</h3>
                    <p>{product.description}</p>
                </div>
            ) : (
                <p>No se encontró el producto.</p>
            )}
        </div>
    )
}
