import { Router } from "express";
import {doctorList, addDoctor, updateDoctor, deleteDoctor, doctorDetails} from "../Controllers/DoctorController.js"

const router = Router();

router.get("/list", doctorList);
router.get("/details/:id", doctorDetails);
router.post("/add", addDoctor);
router.put("/update/:id", updateDoctor);
router.delete("/delete/:id", deleteDoctor);

export default router;