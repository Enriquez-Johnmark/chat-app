const signUpUser = async (req,res) => {
    try {

    } catch(e) {
        res.status(500).json({ message: "Something went wrong" });
    }
}


const loginUser = async (req,res) => {
    res.send("This is login");
}



const logoutUser = async (req,res) => {
    res.send("This is login");
}





export default {
    loginUser,
    signUpUser,
    logoutUser
};