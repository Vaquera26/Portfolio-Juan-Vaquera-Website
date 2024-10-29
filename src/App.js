import "./App.css";
import { useState, useEffect } from "react";
import imagenPerfil from "./img/Juan_Fernando_Vaquera_Sanchez.png";
import linkedinIcon from "./img/linkedin.svg";
import githubIcon from "./img/github.svg";
import instagramIcon from "./img/instagram.svg";
import javaIcon from "./img/java.svg";
import cppIcon from "./img/cpp.svg";
import jsIcon from "./img/js.svg";
import sqlIcon from "./img/sql.svg";
import htmlcssIcon from "./img/htmlcss.svg";
import reactIcon from "./img/react.svg";
import phpIcon from "./img/php.svg";
import vscIcon from "./img/vs_code.svg";
import gitIcon from "./img/git.svg";
import figmaIcon from "./img/figma.svg";
import aiIcon from "./img/adobe_illustrator.svg";
import svgIcon from "./img/Download Minimalistic.svg";
import tsIcon from "./img/ts.svg";
import nestjsIcon from "./img/nestjs.svg";
import React, { memo, useMemo } from "react";
import figmaBWIcon from "./img/b&w-icons/figmaBW.svg";
import reactBWIcon from "./img/b&w-icons/reactBW.svg";
import vlsmImage from "./img/imageProjects/vlsmCalculator.png";
import computerLabImage from "./img/imageProjects/computerLabImage.png";
import jsBWIcon from "./img/b&w-icons/jsBW.svg";
import javaBWIcon from "./img/b&w-icons/javaBW.svg";
import sqlBWIcon from "./img/b&w-icons/sqlBW.svg";
import f1CrudImage from "./img/imageProjects/F1CRUD.png";
import listenIA from "./img/imageProjects/listenIA.png";
import chambitasImage from "./img/imageProjects/chambitas.png";
import hackmty23Image from "./img/imageProjects/hackmty23.png";
import pythonBWIcon from "./img/b&w-icons/pythonBW.svg";
import joinmeImage from "./img/imageProjects/joinme.png";
import nestJSBWIcon from "./img/b&w-icons/nestJSBW.svg";
import tsBWIcon from "./img/b&w-icons/tsBW.svg";
import githubBWIcon from "./img/b&w-icons/githubBW.svg";
import icpcCamp24 from "./img/activities/ICPCCamp24.png";
import HACKMTY24 from "./img//activities/HACKMTY24.png";
import HACKMTY23 from "./img//activities/HACKMTY23.png";
import GPICPC24 from "./img//activities/GPICPC24.png";
import GPICPC23 from "./img//activities/GPICPC23.png";
import CCTECNM23 from "./img//activities/CCTECNM23.png";
function App() {
  const [palabraActual, setPalabraActual] = useState("");
  const [indicePalabra, setIndicePalabra] = useState(0);
  const [escribiendo, setEscribiendo] = useState(true);
  const [indiceCaracter, setIndiceCaracter] = useState(0);
  const [showMessage, setShowMessage] = useState(false); // Estado para mostrar el mensaje
  const [visibleProjects, setVisibleProjects] = useState(2);
  // Asigna las imágenes a los nombres en el JSON
  // Ajusta los nombres en el objeto images para que coincidan con los nombres de archivo.
  const images = {
    "vlsmCalculator.png": vlsmImage,
    "computerLabImage.png": computerLabImage, // Asegúrate de que el nombre de la imagen coincida con el archivo en tu carpeta
    "chambitas.png": chambitasImage,
    "F1CRUD.png": f1CrudImage,
    "listenIA.png": listenIA,
    "hackmty23.png": hackmty23Image,
    "joinme.png": joinmeImage,
  };

  const activitiesImages = {
    "ICPCCamp24.png": icpcCamp24,
    "HACKMTY24.png": HACKMTY24,
    "HACKMTY23.png": HACKMTY23,
    "GPICPC24.png": GPICPC24,
    "GPICPC23.png": GPICPC23,
    "CCTECNM23.png": CCTECNM23,

  }

  useEffect(() => {
    const palabras = [
      "STUDENT",
      "SOFTWARE ENGINEER",
      "C++ FAN",
      "FORMULA 1 FAN",
    ];
    const intervalo = setInterval(() => {
      if (escribiendo) {
        if (indiceCaracter < palabras[indicePalabra].length) {
          setPalabraActual(
            palabraActual + palabras[indicePalabra].charAt(indiceCaracter)
          );
          setIndiceCaracter(indiceCaracter + 1);
        } else {
          setEscribiendo(false);
        }
      } else {
        if (indiceCaracter > 0) {
          setPalabraActual(palabraActual.slice(0, -1));
          setIndiceCaracter(indiceCaracter - 1);
        } else {
          setEscribiendo(true);
          setIndicePalabra((indicePalabra + 1) % palabras.length);
        }
      }
    }, 150);

    return () => clearInterval(intervalo);
  }, [indiceCaracter, escribiendo, palabraActual, indicePalabra]);

  const [projects, setProjects] = useState([]);

  // Cargar el archivo JSON al cargar el componente
  useEffect(() => {
    fetch(`${process.env.PUBLIC_URL}/projects.json`) // Asegúrate de que la ruta sea correcta
      .then((response) => response.json())
      .then((data) => {
        console.log(data); // Imprime los datos en la consola
        setProjects(data); // Almacena los datos en el estado
      })
      .catch((error) => console.error("Error fetching the JSON:", error));
  }, []);

  const handleShowMore = () => {
    setVisibleProjects((prevVisibleProjects) => prevVisibleProjects + 2);
     // Añadimos el scroll automático aquí
     window.scrollBy({
      top: 600, // Ajusta el valor para controlar cuánto se desplaza hacia abajo
      left: 0,
      behavior: 'smooth', // Desplazamiento suave
    }); // Show 2 more projects
  };

  const [activities, setActivities] = useState([]);

  useEffect(() => {
    fetch(`${process.env.PUBLIC_URL}/activities.json`) 
    .then((response) => response.json())
    .then((data) => {
      console.log(data); // Imprime los datos en la consola
      setActivities(data); // Almacena los datos en el estado
    })
    .catch((error) => console.error("Error fetching the JSON:", error));
}, []);

  // Función que se ejecuta cuando se hace clic en "Download CV"
  const handleDownload = () => {
    const pdfUrl = "Resume_Juan_Fernando_Vaquera_Sanchez.pdf"; // ruta al archivo PDF
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "CV_Juan_Vaquera.pdf"; // Nombre del archivo que se descargará
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    setShowMessage(true); // Mostrar mensaje
    setTimeout(() => {
      setShowMessage(false); // Ocultar mensaje después de 3 segundos
    }, 3000);
  };

  // Componente de barra de progreso
  const ProgressBar = ({ level }) => {
    return (
      <div className="progress-bar">
        <div className="progress" style={{ width: `${level}%` }}></div>
      </div>
    );
  };

  // Componente de tarjeta de habilidades con tooltip
  const SkillCard = ({ icon, name, level, description }) => {
    return (
      <div className="skill-card">
        <img src={icon} alt={name} />
        <h4>{name}</h4>
        <ProgressBar level={level} />

        <div className="tooltip">{description}</div>
      </div>
    );
  };

  const technologyIcons = {
    java: javaBWIcon,
    cpp: cppIcon,
    js: jsBWIcon,
    sql: sqlBWIcon,
    htmlcss: htmlcssIcon,
    react: reactBWIcon,
    php: phpIcon,
    vsc: vscIcon,
    github: githubBWIcon,
    figma: figmaBWIcon,
    ai: aiIcon,
    ts: tsBWIcon,
    nestjs: nestJSBWIcon,
    python: pythonBWIcon,
  };

  const ProyectCard = memo(({ technologies, photo, name, description }) => {
    const techIcons = useMemo(
      () =>
        technologies.map((tech, index) => (
          <img
            className="icons-KeyCard"
            key={index}
            src={technologyIcons[tech]}
            alt={`${name} technology ${index}`}
          />
        )),
      [technologies, name]
    );

    return (
      <div className="proyect-card">
        <div className="proyect-Card-Container">
          <div className="imageProject">
            <img src={photo} alt={`${name} project`} />
          </div>
          <div>
            <div className="infoProjectContainer">
              <div className="nameANDIconsContainer">
                <div className="namContainer">
                  <h4>{name}</h4>
                </div>
                <div className="iconsConatiner">{techIcons}</div>
              </div>

              <div className="description">
                <p>{description}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  });

  const ActivitiesCard = ({ photo, name }) => {
    return (
      <div className="activities-card">
        <div className="content-container">
          <div className="activitie-img">
            <img src={photo} alt={name} />
          </div>
          <div className="activitie-name">
            <h4>{name}</h4>
          </div>
        </div>
      </div>
    );
  };
  
    

  return (
    <div className="App">
      <header className="cabecera">
        <nav className="navegacion">
          <ul>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#habilidades">My Hard Skills</a>
            </li>
            <li>
              <a href="#proyectos">My Projects</a>
            </li>
            <li>
              <a href="#extractivities">My Extra Activities</a>
            </li>
            <li>
              <a href="#contacto">Contact Me</a>
            </li>
          </ul>
        </nav>
      </header>

      <div className="circulo-blanco"></div>

      <section id="home" className="seccion-hero">
        <div className="contenedor-texto">
          <h1 className="titulo-principal">Hi! I'm</h1>
          <h2 className="nombre-completo">
            <span className="nombre">JUAN </span>
            <span className="apellido">VAQUERA</span>
          </h2>
          <h2 className="titulo-dinamico">
            And I'm a <span className="texto-dinamico">{palabraActual}</span>
          </h2>
          <p className="descripcion">
            I'm a <strong>Computer Systems Engineering</strong> student at
            Instituto Tecnológico de La Laguna. I’m passionate about learning
            new technologies and solving problems creatively. Outside of school,
            I love Formula 1, nature, the gym, and of course, tacos de papa!
          </p>
          <a
            className="boton-descargar"
            href="#"
            onClick={handleDownload}
            role="button" // Para que lo detecte como botón en lugar de link
          >
            <img src={svgIcon} alt="Download Icon" className="svg-icon" />
            Download CV
          </a>
        </div>

        <div className="contenedor-imagen">
          <div className="fotoPrincipal">
          <img  src={imagenPerfil} alt="Juan Vaquera" />

          </div>

          <div className="iconos-redes">
            <a
              href="https://www.linkedin.com/in/juan-vaquera-ln/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={linkedinIcon} alt="LinkedIn" />
            </a>
            <a
              href="https://github.com/Vaquera26"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={githubIcon} alt="GitHub" />
            </a>
            <a
              href="https://www.instagram.com/vaquera.cpp?igsh=YW83MGIxeTJ2djE3"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={instagramIcon} alt="Instagram" />
            </a>
          </div>
        </div>
      </section>

      <section id="habilidades" className="seccion-habilidades">
        <h2>My Hard Skills</h2>

        <p>PROGRAMMING LANGUAGES</p>
        <div className="skills-grid">
          <SkillCard
            icon={javaIcon}
            name="Java"
            level={80}
            description="My first programming language, so many beautiful moments with it, countless projects done, and a special fondness."
          />
          <SkillCard
            icon={cppIcon}
            name="C++"
            level={80}
            description="The language that takes me into battle, I always use it in competitive programming, it has helped me a lot, especially using Qt."
          />
          <SkillCard
            icon={jsIcon}
            name="JavaScript"
            level={43}
            description="Less than a year learning it, but even so, it has taught me to improve how I create web pages."
          />
          <SkillCard
            icon={tsIcon}
            name="TypeScript"
            level={60}
            description="My main tool for web development, it’s been a key player in my projects."
          />
          <SkillCard
            icon={sqlIcon}
            name="SQL"
            level={75}
            description="My first database language, I really enjoy using it, I love making queries, creating relationships—everything."
          />
        </div>

        <p>FRONTEND DEVELOPMENT</p>
        <div className="skills-grid">
          <SkillCard
            icon={htmlcssIcon}
            name="HTML & CSS"
            level={80}
            description="My foundation in web development, they’ve been with me everywhere. Even though there are a thousand ways to center a div, I love designing web pages."
          />
          <SkillCard
            icon={reactIcon}
            name="React"
            level={40}
            description="I’m just getting to know it, but I really like how easy it is to create pages and apps with it."
          />
        </div>

        <p>BACKEND DEVELOPMENT</p>
        <div className="skills-grid">
          <SkillCard
            icon={nestjsIcon}
            name="NestJS"
            level={40}
            description="A new framework for me, but I appreciate its structure and scalability."
          />
          <SkillCard
            icon={phpIcon}
            name="PHP"
            level={45}
            description="I’ve used it for several projects. It can be a bit boring, but if you know how to leverage it, it has a lot of potential."
          />
        </div>

        <p>TOOLS & DESIGN</p>
        <div className="skills-grid">
          <SkillCard
            icon={vscIcon}
            name="VS Code"
            level={80}
            description="My preferred code editor, with countless extensions and tools for every language."
          />
          <SkillCard
            icon={gitIcon}
            name="GIT"
            level={70}
            description="I’m not an expert, but I know what’s necessary. It helps a lot in school and team projects."
          />
          <SkillCard
            icon={figmaIcon}
            name="Figma"
            level={85}
            description="The tool I rely on for designing web pages and apps. I’m not an expert, but I manage well."
          />
          <SkillCard
            icon={aiIcon}
            name="Illustrator"
            level={85}
            description="Essential for creating assets and illustrations for web and mobile apps."
          />
        </div>
      </section>

      {showMessage && (
        <div className="mensaje-descarga">
          <p>Thanks for downloading!</p>
        </div>
      )}

      <section id="proyectos" className="seccion-proyectos">
        <h2>My Projects</h2>
        {projects.slice(0, visibleProjects).map((project, index) => (
          <ProyectCard
            key={index}
            technologies={project.technologies}
            photo={images[project.photo]}
            name={project.name}
            description={project.description}
          />
        ))}

        {visibleProjects < projects.length && (
          <button onClick={handleShowMore} className="showmoreButton">
            Show More
          </button>
        )}
      </section>

      <section id="extractivities" className="section-extractivities">
        <h2>My Extra Activities</h2>
        
        <div className="activitiesContainer">
        {activities.map((activitie, index) => (
          <div >
          <ActivitiesCard             key={index}
          photo={activitiesImages[activitie.photo]}
          name={activitie.name}>

          </ActivitiesCard>
          </div>
        ))}
        </div>

        

      </section>
    </div>
  );
}

export default App;
