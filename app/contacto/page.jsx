'use client'
import Image from "next/image";
import '../globals.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown, faX } from "@fortawesome/free-solid-svg-icons";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import Aos from "aos";
import { SlArrowUp } from "react-icons/sl";
import "aos/dist/aos.css";
import Link from "next/link";
import { useEffect, useState } from "react";
import { faBars } from "@fortawesome/free-solid-svg-icons";
const Page = () => {
    const [abierto, setAbierto] = useState(false)
    return (
        <>
            <header className="header">
                <nav className={abierto ? 'nav nav-abierto' : 'nav'}>
                    <ul>
                        <li>
                            <Link href="/">Inicio</Link>
                        </li>
                        <li>
                            <Link href='/formacion'>Formación Académica
                            </Link>
                        </li>
                        <li>
                            <Link href='/tratamiento'>Tratamientos</Link>
                        </li>
                        <li>
                            <Link href="/servicio" >Servicios</Link>
                        </li>
                        <li>
                            <Link href='/experiencia'>Experiencia Laboral</Link>
                        </li>
                        <li>
                            <Link href="/contacto" className="contacto-a" >Contacto</Link>
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
                <section className="seccion-de-contacto" id="contacto">
                    <h2>Contacto</h2>
                    <section className="contacto-whatsapp">
                        <div>
                            <a href="https://api.whatsapp.com/send/?phone=5491159976440&text=Hola.+Quisiera+mas+información+sobre...&type=phone_number&app_absent=0">¡Hablame por WhatsApp!
                                <FontAwesomeIcon icon={faWhatsapp} size="2x" /></a>
                        </div>
                    </section>
                    <section className="contacto-whatsapp linkedin">
                        <div>
                            <a href="https://www.linkedin.com/in/dra-pamela-romina-gini-5b9971306/">¡Buscame en LinkedIn!
                                <FontAwesomeIcon icon={faLinkedin} size="2x" /></a>
                        </div>
                    </section>
                </section>
            </main>
            <footer className="footer">
                <h2>© Todos los derechos reservados por Dra. Pamela Gini</h2>
            </footer >

        </>
    )
}

export default Page