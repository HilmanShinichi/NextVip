import { useRouter } from "next/router";
import React, { useEffect } from "react";

const ProductPage = () => {
  const { push } = useRouter();
  const [isLogin, setIsLogin] = React.useState(false);

  useEffect(() => {
    if (!isLogin) {
      push("/auth/login");
    }
  }, []);
  
  return <div>ProductPage</div>;
};

export default ProductPage;
