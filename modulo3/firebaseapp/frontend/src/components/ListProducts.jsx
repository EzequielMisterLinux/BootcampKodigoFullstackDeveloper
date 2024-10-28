import { collection, onSnapshot, doc, updateDoc, deleteDoc } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import db from '../api/Firebase'
import { useForm } from 'react-hook-form'
import Swal from 'sweetalert2'

export default function ListProducts() {
    const [products, setProducts] = useState([])
    const [selectedProduct, setSelectedProduct] = useState(null)
    const [showModal, setShowModal] = useState(false)

    useEffect(() => {
        onSnapshot(
            collection(db, "products"),
            (snapshot) => {
                const array_products = snapshot.docs.map((doc) => {
                    return { ...doc.data(), id: doc.id }
                })
                setProducts(array_products)
            }
        )
    }, [])

    const openEditModal = (product) => {
        setSelectedProduct(product)
        setShowModal(true)
    }

    const { register, handleSubmit, setValue } = useForm()

    useEffect(() => {
        if (selectedProduct) {
            setValue('name', selectedProduct.name)
            setValue('description', selectedProduct.description)
        }
    }, [selectedProduct, setValue])

    const onSubmit = async (data) => {
        try {
            await updateDoc(doc(db, "products", selectedProduct.id), data)
            setShowModal(false) 
        } catch (error) {
            console.error("Error al actualizar el producto:", error)
        }
    }

    const eliminarProducto = async (id) => {
      
      try {
        
        Swal.fire({
          title: "Are you sure?",
          text: "You won't be able to revert this!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, delete it!"
        }).then((result) => {

          if (result.isConfirmed) {
            deleteDoc(doc(db, "products", id))
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success"
            });
          }
        });

      } catch (error) {
        console.error(error);
        
      }

    }

    return (
        <div>
            <h2>Lista de Productos</h2>
            <div>
                {
                    products.length > 0 ?
                        products.map((product) => (
                            <div key={product.id}>
                                <div>
                                    <h3>{product.name}</h3>
                                    <p>{product.description}</p>
                                    <button onClick={() => openEditModal(product)}>Editar</button>
                                    <button onClick={() => eliminarProducto(product.id)}>Eliminar</button>
                                </div>
                            </div>
                        ))
                    : <p>No hay productos por el momento</p>
                }
            </div>


            {showModal && selectedProduct && (
                <div className="modal">
                    <div className="modal-content">
                        <h2>Editar Producto</h2>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div>
                                <label>Nombre:</label>
                                <input {...register('name')} />
                            </div>
                            <div>
                                <label>Descripción:</label>
                                <input {...register('description')} />
                            </div>
                            <button type="submit">Actualizar</button>
                            <button type="button" onClick={() => setShowModal(false)}>Cerrar</button>
                        </form>
                    </div>
                </div>
            )}

            <style jsx="true">{`
                .modal {
                    position: fixed;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background: rgba(0, 0, 0, 0.5);
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }
                .modal-content {
                    background: white;
                    padding: 20px;
                    border-radius: 8px;
                    width: 400px;
                }
            `}</style>
        </div>
    )
}
