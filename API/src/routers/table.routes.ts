//Import Routers
import {Router} from 'express'
import { table } from 'node:console';
//Import fuctions Routes
import * as tableCtrl from './table.controller'
//Metodh Router
const router = Router();


//Routes
//GET: Obtener
router.get('/tables',tableCtrl.getTable); //Obtener Mesas
router.get('/users',tableCtrl.getUsers); //Obtener Usuarios

//POST: Agregar
router.post('/newtable', tableCtrl.createTable); //Alta de Mesa
router.post('/newuser', tableCtrl.createUser); //Alta de Usuario

//PUT: Actualizacion
router.put('/tables/:id', tableCtrl.updateTable); //Actualizar Mesa
router.put('/users/:id', tableCtrl.updateTable); //Actualizar Mesa




export default  router;



