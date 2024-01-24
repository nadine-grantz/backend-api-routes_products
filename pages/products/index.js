import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function Prdoucts() {
  const { data: products, isLoading } = useSWR("/api/products", fetcher);

  if (isLoading) {
    return <h1>...loading</h1>;
  }

  return (
    <ul>
      {products.map((product) => {
        return (
          <li key={product.id}>
            <h2>{product.name}</h2>
            <p>
              {product.price}
              {product.currency}
            </p>
          </li>
        );
      })}
    </ul>
  );
}
