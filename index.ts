import express, {Express, Request, Response} from "express";
import stringsController from "./controllers/strings";
import articleController from  "./controllers/articleController";
import commentController from "./controllers/commentController";
import authorController from "./controllers/authorController";
import cors from "cors";
import mongoose from "mongoose";

mongoose.connect("mongodb+srv://riggur:riggur123@kool.pmmlais.mongodb.net/");
const database = mongoose.connection;

database.on('error', (error) => {
    console.log(error);
});

database.once('connected', () => {
    console.log("Connected");
});

const app: Express = express();
app.use(cors());

app.get('/', (req: Request, res:Response) => {
    res.send("Express + TypeScript Server");
});
app.use('/', stringsController);
app.use('/comment', commentController);
app.use('/article', articleController);
app.use('/author', authorController);

app.listen(3000,() => {
    console .log("Server running")
});