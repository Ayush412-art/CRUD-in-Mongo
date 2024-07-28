import mongoose from 'mongoose';
const url = 'mongodb+srv://iamayush449:1rD34hwk8MJZ2X0u@ayush.mv5dzyj.mongodb.net/?retryWrites=true&w=majority&appName=Ayush';

const connection = async ()=>{
    try{
           await mongoose.connect(url);
            console.log("database has been connected" );
    }
    catch(err){
        console.error(err)
    }
}
export default connection;