import styles from "./Footer.module.css";

export function Footer() {
  <footer>
    <nav className={[styles.nav, styles.container].join(" ")}>
      <span style={{ fontWeight: "bold", fontSize: "1.5em" }}>Ahmed.R.K</span>
      <div
        style={{
          marginLeft: "auto",
          display: "flex",
          flexGrow: 0.5,
          flexShrink: 0,
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <a className={styles.navLink} href="asa">
          Home
        </a>

        <a className={styles.navLink} href="asa">
          Portfolio
        </a>

        <a className={styles.navLink} href="asa">
          About Me
        </a>

        <a className={styles.navLink} href="asa">
          Contact
        </a>

        <button
          style={{
            borderWidth: 0,
            borderRadius: 6,
            backgroundColor: "#254DD8",
            height: 40,
            width: 120,
            color: "white",
            cursor: "pointer",
          }}
        >
          Hire Me
        </button>
      </div>
    </nav>
  </footer>;
}
