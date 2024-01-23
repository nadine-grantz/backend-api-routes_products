import { getProductById } from "@/services/productServices";

export default function handlerTwo(request, response) {
  const { id } = request.query;
  const oneProduct = getProductById(id);

  if (!oneProduct) {
    response.status(404).json({ status: "not found" });
    return;
  }
  response.status(200).json(oneProduct);
}
