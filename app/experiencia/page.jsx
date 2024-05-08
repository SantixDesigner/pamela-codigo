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
                            <Link href="/servicio" >Servicios</Link>
                        </li>
                        <li>
                            <Link href='/experiencia' className="contacto-a">Experiencia Laboral</Link>
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
                <section className="tratamientos-especificos-color" id="tratamiento">
                    <h2>Experiencia Laboral</h2>
                    <section className="tratamientos-especificos">
                        <div className="cursos tratamiento tratamiento-psiquiatria derecha" style={{ maxHeight: aberturaDeTratamientoPsiquiatrico ? '1600px' : '45px' }} onClick={() => setAberturaDeTratamientoPsiquiatrico(!aberturaDeTratamientoPsiquiatrico)}>
                            <h4>Lugares <SlArrowUp className={aberturaDeTratamientoPsiquiatrico ? 'first-man' : 'first-man check'} /></h4>
                            <ul>
                                <li>Hospital Provincial Gral. Manuel Belgrano. Av. de los Constituyentes 3120, Provincia de Buenos Aires. Tel: 4752-8450.</li>
                                <li>Unidad Sanitaria N° 3. A v América 651. Sáenz Peña, Provincia de Buenos Aires. Tel: 4757-0093.</li>
                                <li>IOSFA – Instituto Obra Social de las Fuerzas Armadas. Paso 551, CABA. Tel: 0800-222-3300.</li>
                                <li>Hospital Militar Central Mayor Dr. Cosme Argerich. Av. Luis María Campos 726, CABA. Tel: 4576-5737.</li>
                                <li>FASAM - Fundación Argentina para la Salud Mental. Agüero 1287, CABA. Tel: 4961-6847.</li>
                                <li>PSB - Psicólogos Sin Barreras, Republica Árabe Siria 3065, CABA. Tel: 4169-4821.</li>
                                <li>Clínica Alvear- Alem, Alem 1250 Tel: 4242-0636/ 4202-6556.</li>
                                <li>Centro Asclepíades - Salud Mental. Mendoza 5451, CABA. Tel: 155-805-0218.</li>
                                <li>Api -Asistencia Psicoterapéutica Integral. Av. Santa Fe 4°E, CABA/ Av. Rivadavia 5170 3°C, CABA. Tel: 4816-1200/ 4815-7781/4816- 1156.</li>
                                <li>El Sol del Sur SRL. José Garibaldi 2348, Llavallol, Provincia de Buenos Aires. Tel: 4298-2100.</li>
                                <li>Instituto de Psicopatología del Sur. J. Darragueira 425 Banfield, Provincia de Buenos Aires. Tel: 4248-4015.</li>
                                <li>Clínica Abrines. Benito Pérez Galdós 2647, Provincia de Buenos Aires. Tel: 011-6065-2000.</li>
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