import { useRouter } from "next/router";
import useSWR from "swr";
import Prdoucts from ".";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function DetailsPage() {
  const router = useRouter();
  const { id } = router.query;

  const { data: productDetails, isLoading } = useSWR(
    `/api/products/${id}`,
    fetcher
  );

  if (isLoading) {
    return <h1>...loading...</h1>;
  }

  return (
    <>
      <h1>{productDetails.name}</h1>
      <p>{productDetails.description}</p>
      <p>
        {productDetails.price}
        {productDetails.currency}
      </p>
      <p>{productDetails.category}</p>
    </>
  );
}
