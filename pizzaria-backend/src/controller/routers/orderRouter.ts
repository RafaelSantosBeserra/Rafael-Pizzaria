import express from "express";
import { OrderBusiness } from "../../business/OrderBusiness";
import { OrderDatabase } from "../../data/OrderDatabase";
import { IdGenerator } from "../../services/IdGenerator";
import { TokenGenerator } from "../../services/TokenGenerator";
import { OrderController } from "../OrderController";
import { UserDatabase } from "../../data/UserDatabase";

export const orderRouter = express.Router();

const orderBusiness = new OrderBusiness(
  new OrderDatabase(),
  new TokenGenerator(),
  new IdGenerator(),
  new UserDatabase()
);

const orderController = new OrderController(orderBusiness);

orderRouter.post("/checkout-order/:totalprice", orderController.createOrderItem);
orderRouter.get("/historico-de-pedidos", orderController.findUserOrderHistory);
orderRouter.get("/search-itens/:orderid", orderController.findItemOrderByOrderId);
