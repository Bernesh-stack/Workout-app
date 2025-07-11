const { default: mongoose } = require("mongoose");
const Workout  = require("../Models/WorkoutModel")

// Get all workouts
const getWorkouts = async(req,res)=>{
    try{
        const workouts = await Workout.find({}).sort({createdAt: -1}); // Sort by createdAt in descending order
        res.status(200).json(workouts); 


    }catch(error){
        console.error("Error fetching workouts:", error);
        return res.status(500).json({ error: "Internal server error" });

    }
}



// get single workout's

const singleWorkout = async(req, res) =>{
    const {id} = req.params;
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(400).json({ error: "Invalid workout ID" });
    }
    const VerifyId = await Workout.findById(id);
    if(!VerifyId){
        return res.status(404).json({ error: "Workout not found" });
    }
    res.status(200).json(VerifyId); 

}





const createWorkout = async (req, res) => {
  const { title, load, reps } = req.body;
  try {
    const workout = new Workout({
      title,
      load,
      reps
    });
    await workout.save(); 
    res.status(201).json(workout); 
  } catch (error) {
    console.error("Error creating workout:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}



// Delete a workout
const deleteWorkout = async (req,res)=>{
  const {id} = req.params;
  if(!mongoose.Types.ObjectId.isValid(id)){
    return res.status(404).json({error:"Couldnot find the id"})
  }
  const deleted = await Workout.findByIdAndDelete(id);
  if(!deleted){
    return res.status(404).json({error:"Couldnot find the id"})
  }
  res.status(200).json(deleted);
}



// Update a workout
const updateWorkouts = async(req,res)=>{
  const {id} = req.params;
  if(!mongoose.Types.ObjectId.isValid(id)){
    return res.status(404).json({error:"Couldnot find the id"})
  }
  const updated = await Workout.findByIdAndUpdate(id,
    {...req.body},
    { new: true }
   )
  if(!updated){
    return res.status(404).json({error:"Something went wrong while updating the workout"})
  }

res.status(200).json(updated);
}



module.exports={createWorkout,getWorkouts,singleWorkout,deleteWorkout,updateWorkouts}
