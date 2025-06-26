"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./initial.module.css";

const Initial: React.FC = () => {
  const [anonymousMode, setAnonymousMode] = useState<boolean | undefined>(
    undefined
  );
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    const savedMode = localStorage.getItem("anonymousMode");
    setAnonymousMode(savedMode !== null ? savedMode === "true" : true);
    setIsClient(true);
  }, []);

  const handleAnonymousModeChange = () => {
    const newMode = !anonymousMode;
    setAnonymousMode(newMode);
    localStorage.setItem("anonymousMode", String(newMode));
  };

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <div className={styles.lumoContainer}>
          <div className={styles.lumoAvatar}>
            <Image
              src="/logo.PNG"
              alt="Lumo Face"
              width={160}
              height={160}
              priority
            />
          </div>
          <h1 className={styles.title}>Hola, soy Lumo.</h1>
          <p className={styles.description}>
            Estoy acá para escucharte.
            <br />
            Cuentame como te sientes.
          </p>

          <Link href="/chat" className={styles.button}>
            Empezar a conversar
          </Link>

          <div className={styles.anonymousMode}>
            {isClient && (
              <>
                <input
                  type="checkbox"
                  id="anonymousMode"
                  checked={anonymousMode === true}
                  onChange={handleAnonymousModeChange}
                />
                <label htmlFor="anonymousMode">Modo anónimo activado</label>
              </>
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Initial;
