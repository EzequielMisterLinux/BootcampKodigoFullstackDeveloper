import { addDoc, collection } from 'firebase/firestore';
import React from 'react';
import { useForm } from 'react-hook-form';
import db from '../api/Firebase';

export default function RegisterProduct() {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    /**
     * register = register input data
     * watch = observe specific input data (values)
     * handleSubmit = handles form submission with the provided data
     */

    console.log(watch('name'));

    // Method to save a product
    const saveProduct = async (data) => {
        const { name, description } = data;
        console.log("Product saved:", name, description);

        // Connect to the database and save the document
        try {
            await addDoc(collection(db, "products"), {
                name: name,
                description: description
            });
        } catch (error) {
            console.error("Error registering the product", error);
        }
    };

    return (
        <div>
            <h2>Registro de Productos</h2>
            <form onSubmit={handleSubmit(saveProduct)}>
                <div>
                    <label htmlFor="name">Ingresar Producto</label>
                    <input type="text" {...register('name', { required: true })} />
                    {errors.name && <p>El nombre del producto es obligatorio.</p>}
                </div>

                <div>
                    <label htmlFor="description">Descripción</label>
                    <input type="text" {...register('description', { required: true })} />
                    {errors.description && <p>La descripción es obligatoria.</p>}
                </div>

                <div>
                    <button type="submit">Guardar Producto</button>
                </div>
            </form>
        </div>
    );
}
