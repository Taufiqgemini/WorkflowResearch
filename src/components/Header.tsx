import styles from "./Header.module.scss";
import clsx from "clsx";

const navLinks = [
  { text: "Actie", href: "#" },
  { text: "Beauty", href: "#" },
  { text: "Verzorging", href: "#" },
  { text: "Gezondheid", href: "#" },
];

export function Header() {
  return (
    <header className={clsx(styles.header, "full-width")}>
      <div className={clsx(styles["top-header"])}>
        <p>Bekijk hier alle GRATIS verzending acties!</p>
      </div>
      <div className={styles["main-header"]}>
        <div className={styles["logo-and-links"]}>
          <a href="/" className={styles["logo-link"]}>
            <img
              className={styles.logo}
              src="https://www.kruidvat.nl/medias/sys_master/images/hd8/h44/8796143157278/logo-Kruidvat-2019/logo-Kruidvat-2019.svg"
              alt=""
            ></img>
          </a>
          <nav className={styles["below-logo-links"]}>
            <ul>
              <li>
                <a href="#">Winkels</a>
              </li>
              <li>
                <a href="#">Klantenservice</a>
              </li>
            </ul>
          </nav>
        </div>
        <div className={styles["search-and-nav"]}>
          <div className={styles.search}>
            <input
              type="text"
              className={styles["input-field"]}
              placeholder="Waar ben je naar op zoek?"
            />
            <button>zoek</button>
          </div>

          <nav className={styles["main-navigation"]}>
            <ul className={styles["link-list"]}>
              {navLinks.map((link) => (
                <li>
                  <a href={link.href}>{link.text}</a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <div className={styles["login-and-cart"]}>
          <a className={styles.login} href="#">
            <img
              src="https://www.kruidvat.nl/medias/sys_master/root/h1d/h2c/26990387560478/1219944_Homepage_65x40/1219944-Homepage-65x40.png"
              alt="kruidvat-club-logo"
            />
            <p className={styles["login-label"]}>Inloggen</p>
          </a>
          <a className={styles.cart} href="#">
            <div className={styles["price-and-icon"]}>
              <span className={styles["total-price"]}>0.00</span>
              <span className={styles["cart-icon"]}>insert Cart icon</span>
            </div>
            <p className={styles["cart-label"]}>Bekijk winkelmandje</p>
          </a>
        </div>
      </div>
    </header>
  );
}
