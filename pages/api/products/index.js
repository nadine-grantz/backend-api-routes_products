import { getAllProducts } from "@/services/productServices";

export default function handler(request, response) {
  const allProducts = getAllProducts();
  if (!allProducts) {
    response.status(404).json({ status: "not found" });
  }
  response.status(200).json(allProducts);
}
