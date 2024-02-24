import express from 'express';
import connectDB from './db/index.js';

const app = express(); 

// Connect to MongoDB Atlas
connectDB()
.then(() => {
    app.listen(process.env.PORT || 3001, () =>{
        console.log(`Server is running at port: ${process.env.PORT}`);
    })
})
.catch((err) =>{
    console.log("MONGO db connection failed", err)
})

// Define routes and other middleware here

// Start the server
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
