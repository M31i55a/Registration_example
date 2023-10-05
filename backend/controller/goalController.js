// @desc    Get goals
// @route   GET /api/goals
// @access  Private
const getGoals = async (req, res) => {
    res.status(200).json({message : "These are the goals"})
    console.log("GET successfully sent !")
}

// @desc    Create a goal
// @route   POST /api/goals
// @access  Private
const postGoal = async (req, res) => {
    if(!req.body.text){
        res.status(400)
        throw new Error("Please add a text field !")
    }
    else{
        res.status(200).json({ message : "successfully posted"})
    }
}

// @desc    Update a goal
// @route   PUT /api/goals
// @access  Private
const updateGoal = async (req, res) => {
    res.status(200).json({message : `Update goal ${req.params.id}`})
    console.log("PUT is  successful !")
}

// @desc    Delete a goal
// @route   DELETE /api/goals
// @access  Private
const deleteGoal = async (req, res) => {
    res.status(200).json({message : `The id : ${req.params.id} has been deleted successfully !`})
    console.log("DELETE request was successful !")
}

module.exports = {
    getGoals,
    updateGoal,
    postGoal,
    deleteGoal
}