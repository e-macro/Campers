import Link from "next/link";
import css from "./page.module.css";

export default function Home() {
  return (
    <main className={css.main}>
      <div className={css.container}>
        <div className={css.textContainer}>
          <h1 className={css.title}>
            Campers of your dreams
          </h1>
          <p className={css.text}>
            You can find everything you want in our catalog
          </p>
        </div>
        <Link href="/catalog" className={css.button}>
          View Now
        </Link>
      </div>
    </main>
  );
}
