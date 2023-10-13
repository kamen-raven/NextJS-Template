import styles from "./page.module.scss";
import MyComponent from "~/shared/MyComponent/MyComponent";

export default function Home() {
  return (
    <main className={styles.main}>
      <MyComponent />
    </main>
  );
};
