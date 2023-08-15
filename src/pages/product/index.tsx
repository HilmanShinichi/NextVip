import { useRouter } from "next/router";
import React, { useEffect } from "react";

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

  useEffect(() => {
    fetch("/api/product")
      .then((res) => res.json())
      .then((response) => {
        setProducts(response.data);
      });
  }, []);

  return (
    <div>
      <h1>ProductPage</h1>
      {products.map((product: productType) => (
        <div key={product.id}>{product.name}</div>
      ))}
    </div>
  );
};

export default ProductPage;
