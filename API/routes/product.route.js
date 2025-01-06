import { Router } from "express";
import { CreateProduct, GetAllProduct, GetProductById } from "../controller/product.controller.js";

const router = Router()

router.post("/create", CreateProduct)
router.get("/allProducts", GetAllProduct)
router.get("/getProduct/:id", GetProductById)

export default router