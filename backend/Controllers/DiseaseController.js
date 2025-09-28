import DiseaseModel from "../Models/DiseaseModel.js";

export async function diseaseList(req, res) {
    
    const data = await DiseaseModel.find().populate("operatingDoctor");
    return res.json({
        status: "Success",
        message: "Data get successfully of Disease",
        data: data
    });
    
}

export async function diseaseDetails(req, res) {
    const { id } = req.params;
    const data = await DiseaseModel.findById(id).populate("operatingDoctor");
    return res.json({data});
}

export async function addDisease(req, res) {

    const newDisease = new DiseaseModel(req.body);
    await newDisease.save();

    return res.json({ message: "Disease added successfully" });

}

export async function updateDisease(req, res) {

    const { id } = req.params;
    const updatedDisease = await DiseaseModel.findByIdAndUpdate(id, req.body);

    if (!updatedDisease) {
        return res.json({ message: "Disease not found" });
    }

    return res.json({ message: "Disease updated successfully" });

}


export async function deleteDisease(req, res) {

    const { id } = req.params;
    const deletedDisease = await DiseaseModel.findByIdAndDelete(id);

    if(!deletedDisease)
    {
        return res.json({message:"Disease not found"});
    }
    
    return res.json({message:"Disease deleted successfully"});

}