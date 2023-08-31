import styles from "./Navbar.module.css";
import { signIn, signOut, useSession } from "next-auth/react";

type User = {
  email: string;
  fullname: string;
};

type SessionData = {
  user: User;
  expires: string;
};

const Navbar = () => {
  const { data }: any = useSession();
  return (
    <div className={styles.navbar}>
      <div>Navbar</div>
      <div>
        {data && data?.user.fullname}{" "}
        {data ? (
          <button className={styles.button} onClick={() => signOut()}>
            Sign Out
          </button>
        ) : (
          <button className={styles.button} onClick={() => signIn()}>
            Sign In
          </button>
        )}
      </div>
    </div>
  );
};

export default Navbar;
