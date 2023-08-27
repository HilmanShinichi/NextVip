import { fetcher } from "@/lib/swr/fetcher";
import ProductView from "@/views/Product/Main";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import useSWR from "swr";

const ProductPage = () => {
  const { push } = useRouter();

  const [products, setProducts] = React.useState([]);

  const { data, error, isLoading } = useSWR("/api/product", fetcher);

  // useEffect(() => {
  //   fetch("/api/product")
  //     .then((res) => res.json())
  //     .then((response) => {
  //       setProducts(response.data);
  //     });
  // }, []);

  return (
    <div>
      <ProductView products={isLoading ? [] : data.data} />
    </div>
  );
};

export default ProductPage;
