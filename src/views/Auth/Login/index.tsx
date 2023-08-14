import { useRouter } from 'next/router';
import React from 'react'
import style from './Login.module.scss'
import Link from 'next/link';

const LoginViews = () => {
    const { push, query } = useRouter();
  const handlerLogin = () => {
    push("/product");
  };
    return (
        <div className={style.login}>
          <h1 className='text-3xl text-red-500 font-bold'>Login Page</h1>
          <button onClick={() => handlerLogin()}>Login</button>
          <p>
            Belum punya akun? registrasi <Link href={"/auth/register"}>disini</Link>
          </p>
        </div>
      );
}

export default LoginViews