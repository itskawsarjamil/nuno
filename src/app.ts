import express from "express";
import cors from "cors";
import router from "./app/routes";
import globalErrorHandler from "./app/middleware/globalErrorHandler";
import NotFound from "./app/middleware/notFound";

export const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("hello from nuno");
});

app.use("/api/v1", router);

app.use(globalErrorHandler);
app.use("*", NotFound);
