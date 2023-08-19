import ProductView from "@/views/Product/Main";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import useSWR from "swr";
import { fetcher } from '@/lib/swr/fetcher';

type productType = {
    id: number;
    name: string;
    price: number;
    size:string;
};

const ProductPage = () => {
  const { push } = useRouter();
  const [isLogin, setIsLogin] = React.useState(true);
  const [products, setProducts] = React.useState([]);

  useEffect(() => {
    if (!isLogin) {
      push("/auth/login");
    }
  }, []);

  const { data, error, isLoading } = useSWR(
    "/api/product",
    fetcher
  )
  console.log(data)

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
