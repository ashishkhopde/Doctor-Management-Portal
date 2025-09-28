import { Router } from "express";
import { diseaseList, addDisease, updateDisease, deleteDisease, diseaseDetails } from "../Controllers/DiseaseController.js"

const router = Router();

router.get('/list', diseaseList);
router.get('/details/:id', diseaseDetails);
router.post('/add', addDisease);
router.put('/update/:id', updateDisease);
router.delete('/delete/:id', deleteDisease);

export default router;