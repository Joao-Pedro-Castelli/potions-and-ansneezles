import express from "express";
import multer from "multer";
import cors from "cors";

import { potionValid } from "./types.js";
import { createPotion, selectPotions } from "./db.js";


const upload = multer({
  dest: "./uploads",
})

const port = 3000;
const origin = "http://localhost:5173";
const addr = "http://localhost:3000";
const router = express();
router.use(cors({
  origin: origin,
  credentials: true,
}))


router.get("/", (_req, res) => {
  res.send("Hello World!");
})


router.get("/potions", async (_req, res) => {
  try {
    const potions = await selectPotions();
    res.status(200).json(potions);
  }
  catch {
    res.status(500).send("Erro na busca");
  }
});

router.post("/potion", upload.single("potionImg"), async (req, res, _next) => {
  try {
    const imageURI = req.file?.filename;
    console.log(req.body);
    const potion = potionValid.parse({...req.body, imgPath: `${addr}/potionimg/${imageURI}`});
    const resp = await createPotion(potion);
    res.status(201).send(resp);
  }
  catch (err) {
    console.log(err);
    res.status(400).send()
  }
})

router.use("/potionimg", express.static("uploads"));

router.listen(port, () => {
  console.log(`Listening on http://localhost:${port}`);
})
