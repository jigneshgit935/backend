import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";

const app = express();

app.use(cors());
/*app.use(
   cors({
     origin: process.env.CORS_ORIGINS,
     credentials: true,
 }) 
);*/

app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(express.static("public"));
app.use(cookieParser());

// routes import
import userRoutes from "./routes/user.routes.js";

// routes declaration
app.use("/api/v1/users", userRoutes);

export { app };
