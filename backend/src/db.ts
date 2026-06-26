import { Sequelize, DataTypes } from "sequelize";
import { potionValid, type Potion } from "./types.js"
import { readFile } from "node:fs/promises";

const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: ":memory:",
  // logging: false,
});

const potionModel = sequelize.define(
  "Potion",
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "Poção sem nome"
    },
    desc: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "Descrição"
    },
    price: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 3.25
    },
    imgPath: {
      type: DataTypes.STRING,
      // allowNull: false,
    },
  },
);

await potionModel.sync();

const potJson = await readFile("src/potions.json", "utf-8");
const pot: { potions: Potion[] } = await JSON.parse(potJson);
pot.potions.forEach(async (p) => {
  await potionModel.create(p);
})

export async function createPotion(potion: Potion) {
  if ((await potionModel.findAll({where: {name: potion.name}})).length == 0) {
    await potionModel.create(potion);
    return "OK"
  }
  else {
    return "FOUND";
  }
}

export async function selectPotions(): Promise<Potion[]> {
  const potions = await potionModel.findAll();

  return potions.map((potion) => potionValid.parse(potion))
}
