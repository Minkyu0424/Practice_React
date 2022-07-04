import styles from "./NavBar.module.css";

function NavBar() {
  return (
    <div>
      <nav className={styles.titleBox}>
        <ul className={styles.menuBar1}>
          <li>Genre</li>
          <li>High rating</li>
          <li>Released this year</li>
        </ul>
        <h1 className={styles.title}>
          <a href="/react.try">KYUFLIX</a>
        </h1>
        <ul className={styles.menuBar2}>
          <a href="https://www.instagram.com/min9_is/"><i class="fa-brands fa-instagram"></i></a>
          <a href="https://minkyunoori.tistory.com/"><i class="fa-solid fa-t"></i></a>
          <a href="https://github.com/Minkyu0424"><i class="fa-brands fa-github"></i></a>
        </ul>
      </nav>
    </div>
  );
}
export default NavBar;
