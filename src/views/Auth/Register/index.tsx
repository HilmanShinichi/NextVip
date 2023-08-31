import React, {useState}from "react";
import styles from "./Register.module.scss";
import Link from "next/link";
import { useRouter } from "next/router";

const RegisterView = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const { push } = useRouter();
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const data = {
      email: e.target.email.value,
      fullname: e.target.fullname.value,
      password: e.target.password.value,
    };
    const result = await fetch("/api/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (result.status === 200) {
      e.target.reset();
      setIsLoading(false);
      push("/auth/login");
    } else {
      setIsLoading(false);
      setError(result.status === 400 ? "Email already exists" : "");
    }
  };
  return (
    <div className={styles.register}>
      <h1 className={styles.register__title}>Register</h1>
      <div className={styles.register__form}>
        <form onSubmit={handleSubmit}>
          <div className={styles.register__form__item}>
            <label htmlFor="" className={styles.register__form__item__label}>
              Email
            </label>
            <input
              type="text"
              id="email"
              name="email"
              placeholder="email"
              className={styles.register__form__item__input}
            />
          </div>
          <div className={styles.register__form__item}>
            <label htmlFor="" className={styles.register__form__item__label}>
              Fullname
            </label>
            <input
              type="text"
              id="fullname"
              name="fullname"
              placeholder="fullname"
              className={styles.register__form__item__input}
            />
          </div>
          <div className={styles.register__form__item}>
            <label htmlFor="" className={styles.register__form__item__label}>
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="password"
              className={styles.register__form__item__input}
            />
          </div>
          <button type="submit" className={styles.register__form__item__button}>
            Register
          </button>
        </form>
      </div>
      <p className={styles.register__link}>
        Have an account? Sign in <Link href="/auth/login">here</Link>
      </p>
    </div>
  );
};

export default RegisterView;
