import Link from "next/link";
import styles from "./home.module.css";

const Homepage = () => {
  const navLinks = [
    {
      title: "Dashboard",
      desc: "View data overview, charts and statistics",
      href: "/dashboard",
      icon: "📊",
    },
    {
      title: "Users",
      desc: "Manage system users, add or edit user info",
      href: "/dashboard/users",
      icon: "👥",
    },
    {
      title: "Products",
      desc: "Manage product catalog, add or edit products",
      href: "/dashboard/products",
      icon: "📦",
    },
    {
      title: "Login",
      desc: "Sign in to the admin panel",
      href: "/login",
      icon: "🔐",
    },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.hero}>
        <h1 className={styles.title}>
          <span className={styles.highlight}>Next</span>Admin
        </h1>
        <p className={styles.subtitle}>Modern Admin Dashboard</p>
      </div>

      <div className={styles.grid}>
        {navLinks.map((link) => (
          <Link href={link.href} key={link.title} className={styles.card}>
            <span className={styles.icon}>{link.icon}</span>
            <h2 className={styles.cardTitle}>{link.title}</h2>
            <p className={styles.cardDesc}>{link.desc}</p>
            <span className={styles.arrow}>→</span>
          </Link>
        ))}
      </div>

      <footer className={styles.footer}>
        <p>© 2025 NextAdmin Demo</p>
      </footer>
    </div>
  );
};

export default Homepage;
