"use client";
import React from "react";
import Link from "next/link";
import "../../app/globals.css";
import styles from "./terms-and-conditions.module.css";

const TermsAndConditions: React.FC = () => {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <Link href="/chat" className={styles.backButton}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path
              d="M19 12H5"
              stroke="#292D32"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M12 19L5 12L12 5"
              stroke="#292D32"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Link>
        <h1 className={styles.title}>Términos y Condiciones</h1>
      </header>

      <main className={styles.content}>
        <section className={styles.section}>
          <h2>Sobre Lumo</h2>
          <p>
            Lumo es una aplicación de chat de bienestar emocional diseñada para
            ofrecer un espacio seguro donde puedas expresar tus pensamientos y
            sentimientos. Nuestro objetivo es proporcionar un entorno de escucha
            sin juicios.
          </p>
        </section>

        <section className={styles.section}>
          <h2>No Reemplazamos a Profesionales de la Salud Mental</h2>
          <p>
            <strong>Importante:</strong> Lumo no es un servicio de terapia,
            tratamiento médico o psicológico y no está diseñado para
            diagnosticar o tratar trastornos mentales o condiciones de salud.
          </p>
          <p>
            Nuestra aplicación no debe utilizarse como sustituto de los
            consejos, diagnósticos o tratamientos profesionales proporcionados
            por profesionales de la salud mental cualificados como psicólogos,
            psiquiatras o terapeutas.
          </p>
          <p>
            Si estás experimentando una crisis, pensamientos suicidas, o
            necesitas ayuda inmediata, por favor contacta con un servicio de
            emergencia local o llama a una línea de ayuda en crisis.
          </p>
        </section>

        <section className={styles.section}>
          <h2>Política de Privacidad y Datos</h2>
          <p>
            <strong>Compromiso con tu privacidad:</strong> No almacenamos ni
            guardamos ningún tipo de información personal o conversaciones que
            mantienes con Lumo.
          </p>
          <p>
            Cuando utilizas la opción de Modo anónimo, las conversaciones no
            se guardan entre sesiones. Cada vez que cierras la aplicación, el
            historial de conversación se elimina completamente.
          </p>
          <p>
            No compartimos datos con terceros ni utilizamos tus conversaciones
            para entrenar modelos o mejorar nuestro servicio. Tu privacidad y
            confidencialidad son nuestra prioridad máxima.
          </p>
        </section>

        <section className={styles.section}>
          <h2>Limitaciones del Servicio</h2>
          <p>
            Las respuestas de Lumo son generadas por un sistema automático que
            tiene limitaciones inherentes. Aunque intentamos proporcionar
            respuestas útiles y empáticas, la aplicación:
          </p>
          <ul>
            <li>
              No puede proporcionar consejos médicos o psicológicos
              profesionales
            </li>
            <li>
              No tiene la capacidad de diagnosticar o tratar condiciones de
              salud
            </li>
            <li>
              Puede no comprender completamente situaciones complejas o
              matizadas
            </li>
            <li>No debe utilizarse en situaciones de emergencia o crisis</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2>Uso Seguro</h2>
          <p>
            Te recomendamos utilizar Lumo como una herramienta complementaria de
            reflexión y expresión emocional. Si te encuentras en una situación
            que requiere atención profesional, te instamos a buscar ayuda
            adecuada de profesionales calificados.
          </p>
          <p>
            Si en algún momento durante tu interacción con Lumo sientes que
            necesitas ayuda adicional, te animamos a contactar con un
            profesional de la salud mental o un servicio de apoyo en crisis.
          </p>
        </section>

        <section className={styles.section}>
          <h2>Aceptación de Términos</h2>
          <p>
            Al utilizar Lumo, aceptas estos Términos y Condiciones en su
            totalidad. Si no estás de acuerdo con alguna parte de estos
            términos, te pedimos que no utilices el servicio.
          </p>
          <p>
            Nos reservamos el derecho de modificar estos términos en cualquier
            momento. Las modificaciones entrarán en vigor inmediatamente después
            de su publicación en la aplicación.
          </p>
        </section>
      </main>

      <footer className={styles.footer}>
        <p>© {new Date().getFullYear()} Lumo. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
};

export default TermsAndConditions;
