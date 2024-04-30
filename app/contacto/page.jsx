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
                            <Link href="/contacto" className="contacto-a" >Contacto</Link>
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
                            <a href="https://api.whatsapp.com/send/?phone=5491159976440&text=Dra.+Pamela+Gini%0AEstimado+paciente.+Cu%C3%A1l+es+su+consulta%3F&type=phone_number&app_absent=0">¡Hablame por WhatsApp!
                                <FontAwesomeIcon icon={faWhatsapp} size="2x" /></a>
                        </div>
                    </section>
                    <section className="contacto-whatsapp linkedin">
                        <div>
                            <a href="">¡Buscame en LinkedIn!
                                <FontAwesomeIcon icon={faLinkedin} size="2x" /></a>
                        </div>
                    </section>
                </section>
                <section className="mapa">
                    <h2>Ubicación:</h2>
                    <p>Arribeños 2564 2 c, Cdad. Autónoma de Buenos Aires</p>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1642.9956391539731!2d-58.45380245897951!3d-34.55377621282864!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb42dce2a23b1%3A0x992c007f828d023b!2sArribe%C3%B1os%202564%202%20c%2C%20Cdad.%20Aut%C3%B3noma%20de%20Buenos%20Aires!5e0!3m2!1ses-419!2sar!4v1714155888486!5m2!1ses-419!2sar" className="mapa-google-salud"></iframe>
                </section>
            </main>
            <footer className="footer">
                <h2>© Todos los derechos reservados por Dra. Pamela Gini</h2>
            </footer >

        </>
    )
}

export default Page