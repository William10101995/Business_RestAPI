
import {RequestHandler} from 'express'

//Testing
export const getIni: RequestHandler = (req, res)=>{
    res.send('Hola Mundo')
}

//Obtener Mesas
export const getTable: RequestHandler = (req, res)=>{
    res.send('Obteniendo Mesas')
}

//Crear una nueva mesa
export const createTable: RequestHandler = (req, res)=>{
    res.send('Mesa Creada')
}

//Borrar una mesa
export const deleteTable: RequestHandler = (req, res)=>{
    res.send('Mesa Borrada')
}

//Actualizar una mesa. Aqui tendriamos el ingreso y egreso de usuarios
export const updateTable: RequestHandler = (req, res)=>{
    res.send('Mesa Actualizada')
}

//Obtener Usuarios
export const getUsers: RequestHandler = (req, res)=>{
    res.send('Obteniendo Usuarios')
}

//Crear Usuario
export const createUser: RequestHandler = (req, res)=>{
    res.send('Usuario Creado')
}

//Actualizar usuario
export const updateUser: RequestHandler = (req, res)=>{
    res.send('Usuario Actualizado')
}



