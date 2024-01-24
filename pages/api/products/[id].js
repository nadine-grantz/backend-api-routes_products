import { getProductById } from "@/services/productServices";

export default function handler(request, response) {
  const { id } = request.query;
  const currentProduct = getProductById(id);
  if (!currentProduct) {
    response.status(404).json({ status: "not found" });
  }
  response.status(200).json(currentProduct);
}
