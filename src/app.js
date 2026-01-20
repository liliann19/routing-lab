import express from 'express';
import router from './routers/campus.routes.js';

//configure Express.js app
const app = express();

//view engine
app.set("view engine", "ejs");
app.set("views", "src/views");

//static directories
app.use(express.static('public'));

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//routers
app.use("/", router);

//mount routers
app.use("/campuses", router);
app.use("/locations", router);

export default app;