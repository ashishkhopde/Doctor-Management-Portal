import DoctorModel from "../Models/DoctorModel.js";
import DiseaseModel from "../Models/DiseaseModel.js";

export async function doctorList(req, res) {

    const data = await DoctorModel.find();
    return res.json({
        status: "Success",
        message: "Data get successfully of Doctor",
        data: data
    });

}

export async function doctorDetails(req, res) {

    let { id } = req.params;
    const DoctorData = await DoctorModel.findById(id);
    const DiseaseData = await DiseaseModel.find({operatingDoctor : id})
    return res.json({DoctorData, DiseaseData});

}

export async function addDoctor(req, res) {

    const DoctorData = new DoctorModel(req.body);
    await DoctorData.save();

    return res.json({
        status: "Success",
        message: "Data added successfully of Doctor"
    });

}

export async function updateDoctor(req, res) {

    const { id } = req.params;
    const updatedDoctor = await DoctorModel.findByIdAndUpdate(id, req.body);

    if (!updatedDoctor) {
        return res.json({ message: "Doctor not found" });
    }
    // await updatedDoctor.save();
    return res.json({ message: "Doctor updated successfully" });

}

export async function deleteDoctor(req, res) {

    const { id } = req.params;
    const deletedDoctor = await DoctorModel.findByIdAndDelete(id);

    if (!deletedDoctor) {
        return res.json({ message: "Doctor not found" });
    }
    return res.json({ message: "Doctor deleted successfully" });

}