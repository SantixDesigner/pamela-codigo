'use client'
import Image from "next/image";
import './globals.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown, faX } from "@fortawesome/free-solid-svg-icons";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import Aos from "aos";
import { SlArrowUp } from "react-icons/sl";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import { faBars } from "@fortawesome/free-solid-svg-icons";
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
              <a href="#inicio">Inicio</a>
            </li>
            <li>
              <a href="#formacion-academica">Formación Académica
              </a>
            </li>
            <li>
              <a href="#tratamiento">Tratamientos</a>
            </li>
            <li>
              <a href="#contacto">Contacto</a>
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
              <h2>Médica.</h2>
              <h2>M.N.: 131.814</h2>
              <h5>Especialista en Salud Mental.</h5>
            </div>
            <div className="context-image">
              <img src="./images/pamela-fondo.png" alt="Pamela" data-aos="fade-left" style={{ overflowX: "hidden" }} />
            </div>
          </article>
        </section>
        <div className="title-sep-a" id="formacion-academica">
          <h2 className="sep text-center">Estudios</h2>
        </div>
        <section>
          <article className="formacion-academica" >
            <div className="formacion-psiquiatria">
              <h2>Formación Académica</h2>
              <ul>
                <li>- Especialización en Psiquiatría. (U.C.A).</li>
              </ul>
            </div>
            <div className="formacion-medica">
              <h4>Médica (U.A.I)</h4>
              <ul>
                <li className="mb-3">- Curso Superior de Posgrado en la Construcción del Diagnostico en Salud Mental. (A.N.A).</li>
                <li className="mb-3 mt-3">- Curso Superior de Posgrado en Psico-Neurofarmacología. (A.N.A).</li>
                <li className="mb-3 mt-3">- Curso Superior de Posgrado en Terapia Cognitivo Conductual en Adultos. (A.N.A).</li>
              </ul>
            </div>
          </article>
        </section>


        <section className="formaciones-especificas-color">
          <section className="formaciones-especificas">
            <div className={aberturaDePsiquiatriaCursos ? 'cursos cursos-psiquiatria cursos-abiertos izquierda' : 'cursos cursos-psiquiatria izquierda'}>
              <div onClick={() => setAberturaPsiquiatriaCursos(!aberturaDePsiquiatriaCursos)}>
                <h4>Psiquiatría y Psicoterapia <SlArrowUp className={aberturaDePsiquiatriaCursos ? 'first-man' : 'first-man check'} /></h4>
                <ul>
                  <li>-Emergencias en Salud Mental. (Hospital de Salud Mental Braulio Moyano).</li>
                  <li>-Formación de Formadores en Prevención de Suicidio y Construcción de Resiliencia. (U.N.L.P).</li>
                  <li>-Clínica de las Adicciones. (Hospital de Salud Mental Braulio Moyano).</li>
                  <li>-Actualización en Neurociencias y Psicopatología clínica. (Hospital de Salud Mental Braulio Moyano).</li>
                  <li>-Jornada de Capacitación Ética  en Investigación. (Hospital de Salud Mental Braulio Moyano).</li>
                  <li>-Neurociencia, Trastornos Mentales y Pandemia. (Hospital de Salud Mental Braulio Moyano).</li>
                  <li>-Psicosis y Narcisismo. (Hospital de Salud Mental Braulio Moyano).</li>
                  <li>-Salud y Crisis Social. (Hospital Zonal Gral. de Agudos Gral. Manuel Belgrano).</li>
                  <li>-1° Jornadas de Psiquiatría A.P.S.A San Luis. Pensando los Nuevos Desafíos en la Salud Mental ( A.P.S.A).</li>
                  <li>-2°Encuentro Virtual Internacional Psicogeriatría Hoy. (U.M.A.I).</li>
                  <li>-II Jornadas Virtuales del Capítulo de Psicofarmacología de A.P.S.A. Nuevas Tendencias en Psicofarmacoterapia(A.P.S.A).</li>
                  <li>-4° Congreso Psiquiatría y Adicciones del Comahue. (A.r.S.A.M- A.P.R.I.N- A.P.S.A)</li>
                  <li>-VI Jornadas La Cultura del Exceso y sus Malestares. (Hospital Zonal Gral. de Agudos Gral. Manuel Belgrano).</li>
                  <li>-VII Congreso Internacional de la Federación Latinoamericana de Psico-Neuro-Inmuno-Endocrinología. (F.L.A.P.I.N.E).</li>
                  <li>-XXII Jornadas del Capítulo de Psicofarmacología de A.P.S.A. Intervenciones Tempranas en Psiquiatría, Evidencias para una Psicofarmacoterapia Racional. (A.P.S.A).</li>
                  <li>-XXIII Congreso Argentino de Neuropsiquiatría y Neurociencia Cognitiva. (A.N.A).</li>
                  <li>-XXIV Simposio Situaciones Especiales de los Cuadros Demenciales. (A.N.A).</li>
                  <li>-XXV Congreso Argentino de la Enfermedad de Alzheimer y Otros Trastornos Cognitivos. (ALZAR- CAL U.B.A).</li>
                  <li>-XXVII Jornadas Anuales de Actualización de A.P.N.A. (A.P. N.A).</li>
                  <li>-29° Congreso Internacional de Psiquiatría y Salud Mental. (A.A.P - W.P.A).</li>
                  <li>-XXXV Congreso Argentino de Psiquiatría. (A.P.S.A).</li>
                  <li>-Jornadas Saludables: Vive la Vida. (U.N.L.P).</li>
                  <li>-Herramientas para Pensar la Clínica 1. (Fundación Alberto Roemmers- IntraMed).</li>
                  <li>-Herramientas para Pensar la Clínica 2. (Fundación Alberto Roemmers- IntraMed).</li>
                  <li>-Locura y Genialidad.(IntraMed).</li>
                  <li>-Urgencias Toxicológicas.(IntraMed).</li>
                  <li>-Alzheimer: Todo lo que Hay Que Saber Y Nunca se Animó a Preguntar. (IntraMed).</li>
                  <li>-El Rol de la Enfermería Durante la Pandemia COVID-19. (IntraMed).</li>
                  <li>-Uso Racional de Psicofármacos en Pandemia. (IntraMed).</li>
                </ul>

              </div>
            </div>
            <div className="cursos cursos-medicina medicina derecha" style={{ maxHeight: aberturaDeMedicinaCursos ? '600px' : '30px' }}>
              <div onClick={() => setAberturaMedicinaCursos(!aberturaDeMedicinaCursos)}>
                <h4>Formación en Medicina General <SlArrowUp className={aberturaDeMedicinaCursos ? 'first-man' : 'first-man check'} /></h4>
                <ul>
                  <li>-I Jornadas de Ginecología y Obstetricia. (Hospital Zonal Gral. de Agudos Gral. Manuel Belgrano).</li>
                  <li>-Diabetes tipo 2: Avances en la Prevención, Diagnóstico y Tratamiento. (U.B.A).</li>
                  <li>-XXI Jornadas de Oncología: Un Enfoque Multidisciplinario. (Instituto de Oncología Ángel H. Roffo).</li>
                  <li>-XXIV Jornadas Científicas de la Sociedad Argentina de SIDA - Filial Conurbano: Tuberculosis, VIH / SIDA.(Hospital Zonal Gral. de Agudos Gral. Manuel Belgrano).</li>
                  <li>-XXVII Jornadas Anuales/ XVIII Congreso Nacional Asociación Argentina de Alergia e Inmunología Clínica. (A.A.A. e I. C).</li>
                  <li>-Jornada Regional de Tuberculosis, V Jornada Municipal de San Martín (U.N.S.A.L - U.N.S.A.M -M.S.M).</li>
                  <li>-Recomendaciones de la A.A.F.H  para las Unidades de Mezclas Intravenosas- (A.A.F.H).</li>
                </ul>
              </div>
            </div>
            <div className="cursos cursos-holisteria holisteria izquierda" style={{ maxHeight: aberturaDeHolisticaCursos ? '300px' : '30px' }}>
              <div onClick={() => setAberturaHolisticaCursos(!aberturaDeHolisticaCursos)}>
                <h4>Formación Holística <SlArrowUp className={aberturaDeHolisticaCursos ? 'first-man' : 'first-man check'} /></h4>
                <ul>
                  <li>-Coach Ontológico Profesional.  (A.C.T.P – M.C.C).</li>
                  <li>-Practitioner en P.N.L. (Society of P.N.L).</li>
                  <li>-Mindfulness en Tiempos de Estrés. (U.C.A).</li>
                  <li>-Curso de Biodescodificación (Capacitarte).</li>

                </ul>
              </div>
            </div>
            <div className="cursos cursos-estetica estetica derecha" style={{ maxHeight: aberturaDeEsteticaCursos ? '550px' : '30px' }}>
              <div onClick={() => setAberturaEsteticaCursos(!aberturaDeEsteticaCursos)}>
                <h4>Formación en Medicina Estética <SlArrowUp className={aberturaDeEsteticaCursos ? 'first-man' : 'first-man check'} /> </h4>
                <ul>
                  <li>-Posgrado Intensivo Avanzado en Medicina Estética. (A.M.A – E.G.A.M.A).</li>
                  <li>-Posgrado Intensivo Avanzado en Medicina Estética. (I. A. E. R).</li>
                  <li>-Mini Lipoescultura Ambulatoria, Subcisión y Lipolisis Química. (I. A. E. R).</li>
                  <li>-Hilos Tensores Volumétricos y Lifting Químico. (I. A. E. R).</li>
                  <li>-Toxina Botulínica, Bioimplantes y Rinomodelación. (I. A. E. R).</li>
                  <li>Técnicas de Bioestimulación, P.R.P y Mesoterapia. (I. A. E. R).</li>
                  <li>-Dermoestética, Peelings y Aparatología Facial. (I. A. E. R).</li>
                  <li>-Skin Talk: Voces que Inspiran (B.A.A.S Institute).</li>
                </ul>
              </div>
            </div>
          </section>
        </section>
        <div className="title-sep">
          <h2 className="sep text-center" id="tratamiento">Tratamientos</h2>
        </div>
        <section className="tratamientos-especificos-color">
          <section className="tratamientos-especificos">
            <div className="tratamiento tratamiento-psicoterapia izquierda" style={{ maxHeight: aberturaDeTratamientoPsicoterapico ? '400px' : '30px' }} onClick={() => setAberturaDeTratamientoPsicoterapico(!aberturaDeTratamientoPsicoterapico)}>
              <h4>Psicoterapias   <SlArrowUp className={aberturaDeTratamientoPsicoterapico ? 'first-man' : 'first-man check'} /></h4>
              <ul>
                <li>-Problema del Ciclo Vital.</li>
                <li>-Problema de Relación.</li>
                <li>-Problema de Identidad.</li>
                <li>-Problema Religioso.</li>
                <li>-Problema Espiritual.</li>
                <li>-Problema Académico.</li>
                <li>-Problema Laboral.</li>
                <li>-Problema de Aculturación.</li>
                <li>-Problema Biográfico.</li>
                <li>-Duelo.</li>
                <li>-Abuso.</li>
                <li>-Negligencia.</li>
                <li>-Incumplimiento Terapéutico.</li>
              </ul>
            </div>
            <div className="tratamiento tratamiento-psiquiatria derecha" style={{ maxHeight: aberturaDeTratamientoPsiquiatrico ? '1320px' : '30px' }} onClick={() => setAberturaDeTratamientoPsiquiatrico(!aberturaDeTratamientoPsiquiatrico)}>
              <h4>Psiquiatría <SlArrowUp className={aberturaDeTratamientoPsiquiatrico ? 'first-man' : 'first-man check'} /></h4>
              <ul>
                <li>-Demencias.</li>
                <li>-Trastornos amnésicos.</li>
                <li>-Trastornos cognoscitivos.</li>
                <li>-Trastornos Somatomorfos.</li>
                <li>-Trastornos Facticios.</li>
                <li>-Esquizofrenia.</li>
                <li>-Trastornos Psicóticos.</li>
                <li>-Trastornos Disociativos.</li>
                <li>-Trastornos Inducidos por Medicamentos.</li>
                <li>-Trastornos mentales debidos a enfermedades médicas.</li>
                <li>-Trastornos Adaptativos.</li>
                <li>-Trastornos del sueño.</li>
                <li>-Trastornos del Espectro del Estado del Ánimo.</li>
                <li>-Trastornos del Espectro de la Ansiedad.</li>
                <li>-Trastornos de Personalidad.</li>
                <li>-Trastornos de la Comunicación.</li>
                <li>-Trastornos del Aprendizaje.</li>
                <li>-Trastornos Generalizados del desarrollo.</li>
                <li>-Retrasos Madurativos.</li>
                <li>-Trastornos por Déficit de Atención.</li>
                <li>-Trastornos del Control de los Esfínteres.</li>
                <li>-Trastorno de las Habilidades Motoras.</li>
                <li>-Trastornos de Tics.</li>
                <li>-Trastorno de la Conducta Alimentaria.</li>
                <li>-Trastornos Sexuales.</li>
                <li>-Trastornos de la Identidad sexual.</li>
                <li>-Trastorno del Control de los Impulsos.</li>
                <li>-Trastorno por Consumo de Sustancias.</li>
                <li>-Delirium.</li>
                <li>-Demencias.</li>
                <li>-Trastornos amnésicos.</li>
                <li>-Trastornos cognoscitivos.</li>
                <li>-Trastornos Somatomorfos.</li>
                <li>-Trastornos Facticios.</li>
                <li>-Esquizofrenia.</li>
                <li>-Trastornos Psicóticos.</li>
                <li>-Trastornos Disociativos.</li>
              </ul>
            </div>
          </section>
        </section>
        <div className="title-sep-b">
          <h2 className="sep text-center">¡Contactame!</h2>
        </div>
        <section className="seccion-de-contacto" id="contacto">
          <section className="contacto-whatsapp">
            <div>
              <a href="https://api.whatsapp.com/send/?phone=5491159976440&text=Dra.+Pamela+Gini%0AEstimado+paciente.+Cu%C3%A1l+es+su+consulta%3F&type=phone_number&app_absent=0">¡Podés contactarme por WhatsApp!
                <FontAwesomeIcon icon={faWhatsapp} size="2x" />
              </a>
            </div>
          </section>
          <section className="mapa">
            <h2>Mapa del lugar:</h2>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1642.9956391539731!2d-58.45380245897951!3d-34.55377621282864!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb42dce2a23b1%3A0x992c007f828d023b!2sArribe%C3%B1os%202564%202%20c%2C%20Cdad.%20Aut%C3%B3noma%20de%20Buenos%20Aires!5e0!3m2!1ses-419!2sar!4v1714155888486!5m2!1ses-419!2sar" className="mapa-google-salud"></iframe>
          </section>
        </section>
      </main >
      {/*<div className="whatsapp">
        <FontAwesomeIcon icon={faWhatsapp} />
  </div>*/}
      <footer className="bg-black p-3 mt-3 text-center text-white">
        <h2>© Todos los derechos reservados por Dra. Pamela Gini</h2>
      </footer >
    </>
  );
}
