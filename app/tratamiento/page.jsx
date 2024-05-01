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
                            <Link href='/tratamiento' className="contacto-a">Tratamientos</Link>
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
                <section className="tratamientos-especificos-color" id="tratamiento">
                    <h2>Tratamientos</h2>
                    <section className="tratamientos-especificos">
                        <div className="cursos tratamiento tratamiento-psiquiatria derecha" style={{ maxHeight: aberturaDeTratamientoPsiquiatrico ? '1600px' : '45px' }} onClick={() => setAberturaDeTratamientoPsiquiatrico(!aberturaDeTratamientoPsiquiatrico)}>
                            <h4>Psiquiatría y Psicoterapia <SlArrowUp className={aberturaDeTratamientoPsiquiatrico ? 'first-man' : 'first-man check'} /></h4>
                            <ul>
                                <li>Demencias.</li>
                                <li>Trastornos amnésicos.</li>
                                <li>Trastornos cognoscitivos.</li>
                                <li>Trastornos Somatomorfos.</li>
                                <li>Trastornos Facticios.</li>
                                <li>Esquizofrenia.</li>
                                <li>Trastornos Psicóticos.</li>
                                <li>Trastornos Disociativos.</li>
                                <li>Trastornos Inducidos por Medicamentos.</li>
                                <li>Trastornos mentales debidos a enfermedades médicas.</li>
                                <li>Trastornos Adaptativos.</li>
                                <li>Trastornos del sueño.</li>
                                <li>Trastornos del Espectro del Estado del Ánimo.</li>
                                <li>Trastornos del Espectro de la Ansiedad.</li>
                                <li>Trastornos de Personalidad.</li>
                                <li>Trastornos de la Comunicación.</li>
                                <li>Trastornos del Aprendizaje.</li>
                                <li>Trastornos Generalizados del desarrollo.</li>
                                <li>Retrasos Madurativos.</li>
                                <li>Trastornos por Déficit de Atención.</li>
                                <li>Trastornos del Control de los Esfínteres.</li>
                                <li>Trastorno de las Habilidades Motoras.</li>
                                <li>Trastornos de Tics.</li>
                                <li>Trastorno de la Conducta Alimentaria.</li>
                                <li>Trastornos Sexuales.</li>
                                <li>Trastornos de la Identidad sexual.</li>
                                <li>Trastorno del Control de los Impulsos.</li>
                                <li>Trastorno por Consumo de Sustancias.</li>
                                <li>Delirium.</li>
                                <li>Demencias.</li>
                                <li>Trastornos amnésicos.</li>
                                <li>Trastornos cognoscitivos.</li>
                                <li>Trastornos Somatomorfos.</li>
                                <li>Trastornos Facticios.</li>
                                <li>Esquizofrenia.</li>
                                <li>Trastornos Psicóticos.</li>
                                <li>Trastornos Disociativos.</li>
                                <li>Problema del Ciclo Vital.</li>
                                <li>Problema de Relación.</li>
                                <li>Problema de Identidad.</li>
                                <li>Problema Religioso.</li>
                                <li>Problema Espiritual.</li>
                                <li>Problema Académico.</li>
                                <li>Problema Laboral.</li>
                                <li>Problema de Aculturación.</li>
                                <li>Problema Biográfico.</li>
                                <li>Duelo.</li>
                                <li>Abuso.</li>
                                <li>Negligencia.</li>
                                <li>Incumplimiento Terapéutico.</li>
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