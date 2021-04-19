//Import Routers
import {Router} from 'express'
//Import fuctions Routes
import * as businessCtrl from './business.controller'
//Metodh Router
const router = Router();


//Routes
router.get('/',businessCtrl.getIni)

export default  router;



