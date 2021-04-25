//Import Routers
import {Router} from 'express'
//Import fuctions Routes
import * as tableCtrl from './table.controller'
//Metodh Router
const router = Router();


//Routes
//GET: Obtener
router.get('/tables',tableCtrl.getTableUser); //Obtener Mesas + usuarios FUNCIONA
router.get('/users',tableCtrl.getUsersTables); //Obtener Usuarios + mesas FUNCIONA

//POST: Agregar mesa
router.post('/tables', tableCtrl.createTable); //Alta de Mesa FUNCIONA

//PUT: Agregar usuario a mesa
router.put('/tables/users', tableCtrl.createUserTable); //Actualizar Mesa FUNCIONA

//DELETE: Borrar usuario de mesa
router.delete('/tables/users', tableCtrl.deleteUserTable); //Actualizar Mesa FUNCIONA



export default  router;



