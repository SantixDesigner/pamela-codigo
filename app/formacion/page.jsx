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
              <Link href="/formacion" className="contacto-a">Formación Académica
              </Link>
            </li>
            <li>
              <Link href="/tratamiento">Tratamientos</Link>
            </li>
            <li>
              <Link href="/servicio" >Servicios</Link>
            </li>
            <li>
              <Link href='/experiencia'>Experiencia Laboral</Link>
            </li>
            <li>
              <Link href="/contacto">Contacto</Link>
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
        <div className="formaciones-grid" id="formacion-academica">
          <section className="forma-cursos">
            <article className="formacion-academica" >
              <div className="formacion-psiquiatria">
                <h2>Formación Académica:</h2>
                <ul>
                  <li className="mb-5">Médica (U.A.I)</li>
                  <li className="mb-5 mt-5"> Especialización en Psiquiatría. (U.C.A).</li>
                  <li className="mb-5 mt-5"> Curso Superior de Posgrado en la Construcción del Diagnostico en Salud Mental. (A.N.A).</li>
                  <li className="mb-5 mt-5"> Curso Superior de Posgrado en Psico-Neurofarmacología. (A.N.A).</li>
                  <li className="mt-5"> Curso Superior de Posgrado en Terapia Cognitivo Conductual en Adultos. (A.N.A).</li>
                </ul>
              </div>
            </article>
          </section>
          <section className="formaciones-especificas-color forma-psi">
            <section className="formaciones-especificas">
              <div className={aberturaDePsiquiatriaCursos ? 'cursos cursos-psiquiatria cursos-abiertos izquierda' : 'cursos cursos-psiquiatria izquierda'}>
                <div onClick={() => setAberturaPsiquiatriaCursos(!aberturaDePsiquiatriaCursos)}>
                  <h4>Psiquiatría y Psicoterapia <SlArrowUp className={aberturaDePsiquiatriaCursos ? 'first-man' : 'first-man check'} /></h4>
                  <ul>
                    <li>Emergencias en Salud Mental. (Hospital de Salud Mental Braulio Moyano).</li>
                    <li>Formación de Formadores en Prevención de Suicidio y Construcción de Resiliencia. (U.N.L.P).</li>
                    <li>Clínica de las Adicciones. (Hospital de Salud Mental Braulio Moyano).</li>
                    <li>Actualización en Neurociencias y Psicopatología clínica. (Hospital de Salud Mental Braulio Moyano).</li>
                    <li>Jornada de Capacitación Ética  en Investigación. (Hospital de Salud Mental Braulio Moyano).</li>
                    <li>Neurociencia, Trastornos Mentales y Pandemia. (Hospital de Salud Mental Braulio Moyano).</li>
                    <li>Psicosis y Narcisismo. (Hospital de Salud Mental Braulio Moyano).</li>
                    <li>Salud y Crisis Social. (Hospital Zonal Gral. de Agudos Gral. Manuel Belgrano).</li>
                    <li>1° Jornadas de Psiquiatría A.P.S.A San Luis. Pensando los Nuevos Desafíos en la Salud Mental ( A.P.S.A).</li>
                    <li>2°Encuentro Virtual Internacional Psicogeriatría Hoy. (U.M.A.I).</li>
                    <li>II Jornadas Virtuales del Capítulo de Psicofarmacología de A.P.S.A. Nuevas Tendencias en Psicofarmacoterapia(A.P.S.A).</li>
                    <li>4° Congreso Psiquiatría y Adicciones del Comahue. (A.r.S.A.M- A.P.R.I.N- A.P.S.A)</li>
                    <li>VI Jornadas La Cultura del Exceso y sus Malestares. (Hospital Zonal Gral. de Agudos Gral. Manuel Belgrano).</li>
                    <li>VII Congreso Internacional de la Federación Latinoamericana de Psico-Neuro-Inmuno-Endocrinología. (F.L.A.P.I.N.E).</li>
                    <li>XXII Jornadas del Capítulo de Psicofarmacología de A.P.S.A. Intervenciones Tempranas en Psiquiatría, Evidencias para una Psicofarmacoterapia Racional. (A.P.S.A).</li>
                    <li>XXIII Congreso Argentino de Neuropsiquiatría y Neurociencia Cognitiva. (A.N.A).</li>
                    <li>XXIV Simposio Situaciones Especiales de los Cuadros Demenciales. (A.N.A).</li>
                    <li>XXV Congreso Argentino de la Enfermedad de Alzheimer y Otros Trastornos Cognitivos. (ALZAR- CAL U.B.A).</li>
                    <li>XXVII Jornadas Anuales de Actualización de A.P.N.A. (A.P. N.A).</li>
                    <li>29° Congreso Internacional de Psiquiatría y Salud Mental. (A.A.P - W.P.A).</li>
                    <li>XXXV Congreso Argentino de Psiquiatría. (A.P.S.A).</li>
                    <li>Jornadas Saludables: Vive la Vida. (U.N.L.P).</li>
                    <li>Herramientas para Pensar la Clínica 1. (Fundación Alberto Roemmers- IntraMed).</li>
                    <li>Herramientas para Pensar la Clínica 2. (Fundación Alberto Roemmers- IntraMed).</li>
                    <li>Locura y Genialidad.(IntraMed).</li>
                    <li>Urgencias Toxicológicas.(IntraMed).</li>
                    <li>Alzheimer: Todo lo que Hay Que Saber Y Nunca se Animó a Preguntar. (IntraMed).</li>
                    <li>El Rol de la Enfermería Durante la Pandemia COVID-19. (IntraMed).</li>
                    <li>Uso Racional de Psicofármacos en Pandemia. (IntraMed).</li>
                  </ul>
                </div>
              </div>
            </section>
          </section>
          <section className="formaciones-especificas-color forma-host">
            <section className="formaciones-especificas">
              <div className="cursos cursos-holisteria holisteria izquierda" style={{ maxHeight: aberturaDeHolisticaCursos ? '300px' : '40px' }}>
                <div onClick={() => setAberturaHolisticaCursos(!aberturaDeHolisticaCursos)}>
                  <h4>Formación Holística <SlArrowUp className={aberturaDeHolisticaCursos ? 'first-man' : 'first-man check'} /></h4>
                  <ul>
                    <li>Coach Ontológico Profesional.  (A.C.T.P – M.C.C).</li>
                    <li>Practitioner en Programación Neurolingüística (Society of P.N.L).</li>
                    <li>Mindfulness en Tiempos de Estrés. (U.C.A).</li>
                    <li>Curso de Biodescodificación (Capacitarte).</li>
                  </ul>
                </div>
              </div>
            </section>
          </section>
        </div>
      </main>
      <footer className="footer">
        <h2>© Todos los derechos reservados por Dra. Pamela Gini</h2>
      </footer >
    </>
  )
}

export default Page