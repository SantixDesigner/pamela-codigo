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
    const [aberturaDePsiquiatriaCursos, setAberturaPsiquiatriaCursos] = useState(false)
    const [aberturaDeMedicinaCursos, setAberturaMedicinaCursos] = useState(false)
    const [aberturaDeHolisticaCursos, setAberturaHolisticaCursos] = useState(false)
    const [aberturaDeEsteticaCursos, setAberturaEsteticaCursos] = useState(false)
    const [aberturaDeTratamientoPsiquiatrico, setAberturaDeTratamientoPsiquiatrico] = useState(false)
    const [aberturaDeTratamientoPsicoterapico, setAberturaDeTratamientoPsicoterapico] = useState(false)
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
                            <Link href="/contacto" >Contacto</Link>
                        </li>
                        <li>
                            <Link href="/servicio" className="contacto-a">Servicios</Link>
                        </li>
                    </ul>
                </nav>
                <FontAwesomeIcon icon={abierto ? faX : faBars} className={abierto ? 'xBars fa-2x' : 'bars fa-2x'} onClick={() => {
                    setAbierto(!abierto)
                }} />
            </header>
            <main className="main" style={{ overflowX: "hidden" }}>
                <section className="tratamientos-especificos-color" id="tratamiento">
                    <h2>Servicios</h2>
                    <section className="tratamientos-especificos">
                        <div className="cursos tratamiento tratamiento-psiquiatria derecha" style={{ maxHeight: aberturaDeTratamientoPsiquiatrico ? '300px' : '45px' }} onClick={() => setAberturaDeTratamientoPsiquiatrico(!aberturaDeTratamientoPsiquiatrico)}>
                            <h4>Servicio de Coaching y PNL <SlArrowUp className={aberturaDeTratamientoPsiquiatrico ? 'first-man' : 'first-man check'} /></h4>
                            <ul>
                                <li>Gestión de estados emocionales.</li>
                                <li>Pedagogia ontológica</li>
                                <li>Desarrollo y liderazgo Personal</li>
                                <li>Procesos de coaching ejecutivo</li>
                                <li>Potenciación en áreas de Project Management</li>
                                <li>Construcción de equipos de alto desempeño</li>
                            </ul>
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