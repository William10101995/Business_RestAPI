//Import Routers
import {Router} from 'express'
//Import fuctions Routes
import * as tableCtrl from './table.controller'
//Metodh Router
const router = Router();


//Routes
router.get('/',tableCtrl.getIni)

export default  router;



