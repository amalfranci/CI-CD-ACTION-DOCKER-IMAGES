import  mongoose from "mongoose";


const dbConn= async() => {
    
    try {
       await  mongoose.connect(process.env.MONGODB_URI)

        console.log("Database Connected Successfully")
    }
    catch (error) {
        console.log(error)
    }
}


export default dbConn