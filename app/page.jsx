'use client'
import Image from "next/image";
import './globals.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import { faBars } from "@fortawesome/free-solid-svg-icons";
export default function Home() {
  const [abierto, setAbierto] = useState(false)
  useEffect(() => {
    Aos.init();
  }, [])
  return (
    <>
      <header className="header">
        <nav className={abierto ? 'nav nav-abierto' : 'nav'}>
          <ul>
            <li>
              <a>Inicio</a>
            </li>
            <li>
              <a>Formación Académica
              </a>
            </li>
            <li>
              <a>Tratamientos</a>
            </li>
            <li>
              <a>Coaching Ontológico y PNL</a>
            </li>
            <li>
              <a>Contacto</a>
            </li>
            <li>
              <a>Agendá una sesión</a>
            </li>
          </ul>
        </nav>
        <FontAwesomeIcon icon={faBars} className="bars fa-2x" onClick={() => {
          setAbierto(!abierto)
        }}/>
      </header>
      <main className="main">
        <div>
          <div className="first-container">
            <div className="context-info" data-aos="fade-right">
              <h2>Dra. Gini Pamela Romina.</h2>
              <h2>Médica.</h2>
              <h2>MN: 131.814</h2>
              <h5>Especialista en Salud Mental.</h5>
            </div>
            <div className="context-image">
              <img src="./images/Pamela.jpg" alt="Pamela" data-aos="fade-left" />
            </div>
          </div>
        </div>
      </main>
      {/*<div className="whatsapp">
        <FontAwesomeIcon icon={faWhatsapp} />
  </div>*/}
      <footer>
      </footer>
    </>
  );
}
