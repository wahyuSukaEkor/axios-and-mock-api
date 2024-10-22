import express, {Application } from "express"
import {PORT as port, MOCK_API_URL} from "./config/envConfig"
import userRoute from "./routes/user.route"
// import masukMiddleware from "./middlewares/masuk.middleware";
// import errorMiddleware from "./middlewares/error.middleware";
// import axios from "axios";

const PORT = Number(port) || 8000;

const app: Application = express()


//middleware parsing body 
app.use(express.json());

//route
app.use("/expenses", userRoute)



app.listen(PORT, () => {
    console.log(`Server berjalan di port ${PORT}`)
})