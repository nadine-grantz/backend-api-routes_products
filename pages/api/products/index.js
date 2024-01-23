import { getAllProducts } from "@/services/productServices";

export default function handler(request, response) {
  const products = getAllProducts();
  console.log(products);
  if (!products) {
    response.status(404).json({ status: "not found" });
    return;
  }
  response.status(200).json(products);
}
