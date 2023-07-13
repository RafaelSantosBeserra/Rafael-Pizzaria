import express from "express";
import { MenuBusiness } from "../../business/MenuBusiness";
import { MenuDatabase } from "../../data/MenuDatabase";
import { IdGenerator } from "../../services/IdGenerator";
import { TokenGenerator } from "../../services/TokenGenerator";
import { MenuController } from "../MenuController";

export const menuRouter = express.Router();

const menuBusiness = new MenuBusiness(
  new MenuDatabase(),
  new TokenGenerator(),
  new IdGenerator()
);
    
const menuController = new MenuController(menuBusiness);

menuRouter.post("/add-recipe", menuController.createRecipe);
menuRouter.get("/busca-receita/:id", menuController.findRecipeById);
menuRouter.get("/cardapio", menuController.findAllRecipes);
menuRouter.put("/editar-receita/:id", menuController.editRecipe);
menuRouter.delete("/deletar-receita/:id", menuController.deleteRecipe);
