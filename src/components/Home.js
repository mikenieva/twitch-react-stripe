/**
 * REACT HOOKS
 * UN HOOK ES UNA FUNCIÓN QUE SE VUELVE NATIVA A REACT
 * 
 * 
 * MANEJO DE DATOS
 * Cuando trabajas con React, existen dos maneras de gestionar datos.
 * La primera forma es con los estados locales. Es decir directamente a un componente.
 * La segunda forma es con un estado global.
 */

import React, { useState } from 'react'

export default function Home() {

    // 1. ESTADO LOCAL
    // a. Desestructuración de arreglos
    // b. Invocación del hook useState y como argumento tiene un estado inicial
    const [newProduct, setNewProduct]   = useState("Soy un texto")
    const [newUser, setNewUser]         = useState("Mike")

    // FUNCIONES

    const changeText = (event) => {
        
        // GESTIÓN DE ESTADOS LOCALES
        setNewUser("Mike Nieva")
        setNewProduct("Soy mike en el segundo stream.")
        
        return 
    }

    return (
        <div>
            Este es el home.
            
            <p>{newProduct} - {newUser} </p>

            <button onClick={ (event) => { changeText(event) } }>
                Cambiar el nombre del texto
            </button>

        </div>
    )
}
