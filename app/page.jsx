'use client'
import Image from "next/image";
import './globals.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown, faX } from "@fortawesome/free-solid-svg-icons";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import Aos from "aos";
import { SlArrowUp } from "react-icons/sl";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
export default function Home() {
  const [abierto, setAbierto] = useState(false)
  const [aberturaDePsiquiatriaCursos, setAberturaPsiquiatriaCursos] = useState(false)
  const [aberturaDeMedicinaCursos, setAberturaMedicinaCursos] = useState(false)
  const [aberturaDeHolisticaCursos, setAberturaHolisticaCursos] = useState(false)
  const [aberturaDeEsteticaCursos, setAberturaEsteticaCursos] = useState(false)
  const [aberturaDeTratamientoPsiquiatrico, setAberturaDeTratamientoPsiquiatrico] = useState(false)
  const [aberturaDeTratamientoPsicoterapico, setAberturaDeTratamientoPsicoterapico] = useState(false)


  useEffect(() => {
    Aos.init();
  }, [])
  return (
    <>
      <header className="header">
        <nav className={abierto ? 'nav nav-abierto' : 'nav'}>
          <ul>
            <li>
              <Link href="/" className="contacto-a">Inicio</Link>
            </li>
            <li>
              <Link href="/formacion">Formación Académica
              </Link>
            </li>
            <li>
              <Link href="/tratamiento">Tratamientos</Link>
            </li>
            <li>
              <Link href="/servicio" >Servicios</Link>
            </li>
            <li>
              <Link href="/contacto" >Contacto</Link>
            </li>
            <li>
              <Link href="/ubicacion">Ubicación</Link>
            </li>
          </ul>
        </nav>
        <FontAwesomeIcon icon={abierto ? faX : faBars} className={abierto ? 'xBars fa-2x' : 'bars fa-2x'} onClick={() => {
          setAbierto(!abierto)
        }} />
      </header>
      <main className="main" style={{ overflowX: "hidden" }}>
        <section className="presentacion" style={{ overflowX: "hidden" }} id="inicio">
          <article className="first-container" style={{ overflowX: "hidden" }}>
            <div className="context-info" data-aos="fade-right" style={{ overflowX: "hidden" }}>
              <h2>Dra. Gini Pamela Romina.</h2>
              <h2>MÉDICO</h2>
              <h2>MATRICULA NACIONAL: 131.814</h2>
              <h5>ESPECIALISTA EN SALUD MENTAL</h5>
              <a href="/contacto" className="contacto-perso">¡Contactame!</a>
            </div>
            <div className="context-image">
              <img src="./images/pamela-fondo.png" alt="Pamela" data-aos="fade-left" style={{ overflowX: "hidden" }} />
            </div>
          </article>
        </section>
      </main >
      {/*<div className="whatsapp">
        <FontAwesomeIcon icon={faWhatsapp} />
  </div>*/}
      <footer className="footer">
        <h2>© Todos los derechos reservados por Dra. Pamela Gini</h2>
      </footer >
    </>
  );
}
