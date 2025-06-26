"use client";
import React, { useEffect } from "react";
import styles from "./sidebar.module.css";
import Link from "next/link";

interface SidebarProps {
  showMenu: boolean;
  setShowMenu: (show: boolean) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ showMenu, setShowMenu }) => {
  const [showSidebar, setShowSidebar] = React.useState(showMenu);

  useEffect(() => {
    setShowSidebar(showMenu);
  }, [showMenu]);

  const handleSidebarClick = () => {
    setShowMenu(false);
    setShowSidebar(!showMenu);
  };

  return (
    <div
      className={`${styles.sidebar} ${showSidebar ? styles.sidebarOpen : ""}`}
    >
      <div className={styles.sidebarHeader}>
        <h2>Menú</h2>
        <button
          className={styles.closeSidebarButton}
          onClick={handleSidebarClick}
          aria-label="Cerrar menú"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
      </div>
      <div className={styles.sidebarContent}>
        <Link href="/terms-and-conditions" className={styles.sidebarItem}>
          Términos y Condiciones
        </Link>
        <Link href="/" className={styles.sidebarItem}>
          Inicio
        </Link>
        <div className={styles.sidebarDivider}></div>
        <div className={styles.sidebarInfo}>
          <p>Lumo v1.0</p>
          <p>© {new Date().getFullYear()} Todos los derechos reservados</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
