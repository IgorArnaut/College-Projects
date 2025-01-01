import express, { json, urlencoded } from "express";
import cors from "cors";

import { routes } from "./app/routes/product.routes.js";

const app = express();
const PORT = process.env.PORT || 8080;
const corsOptions = {
  origin: "http://localhost:8081",
};

app.use(cors(corsOptions));
app.use(json());
app.use(urlencoded({ extended: true }));

app.get("/", (req, res) => res.json({ message: "Dobrodošli." }));

routes.default(app);

app.listen(PORT, () => console.log(`Server je pokrenut na portu ${PORT}.`));
