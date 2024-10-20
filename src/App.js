import './App.css';
import { useState, useEffect } from 'react';
import imagenPerfil from './img/Juan_Fernando_Vaquera_Sanchez.png'; 
import linkedinIcon from './img/linkedin.svg';  
import githubIcon from './img/github.svg';     
import instagramIcon from './img/instagram.svg'; 
import javaIcon from './img/java.svg'; 
import cppIcon from './img/cpp.svg';    
import jsIcon from './img/js.svg';    
import sqlIcon from './img/sql.svg';      
import htmlcssIcon from './img/htmlcss.svg';      
import reactIcon from './img/react.svg';     
import phpIcon from './img/php.svg'; 
import vscIcon from './img/vs_code.svg';   
import gitIcon from './img/git.svg';   
import figmaIcon from './img/figma.svg';   
import aiIcon from './img/adobe_illustrator.svg';   
import svgIcon from './img/Download Minimalistic.svg';   

function App() {
  const palabras = ["STUDENT", "SOFTWARE ENGINEER", "C++ FAN", "FORMULA 1 FAN"];
  const [palabraActual, setPalabraActual] = useState('');
  const [indicePalabra, setIndicePalabra] = useState(0);
  const [escribiendo, setEscribiendo] = useState(true);
  const [indiceCaracter, setIndiceCaracter] = useState(0);
  const [showMessage, setShowMessage] = useState(false); // Estado para mostrar el mensaje

  useEffect(() => {
    const intervalo = setInterval(() => {
      if (escribiendo) {
        if (indiceCaracter < palabras[indicePalabra].length) {
          setPalabraActual(palabraActual + palabras[indicePalabra].charAt(indiceCaracter));
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
  }, [indiceCaracter, escribiendo, palabraActual, indicePalabra, palabras]);

  // Función que se ejecuta cuando se hace clic en "Download CV"
  const handleDownload = () => {
    const pdfUrl = 'Resume_Juan_Fernando_Vaquera_Sanchez.pdf'; // ruta al archivo PDF
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
        
        <div className="tooltip">    
          {description}
        </div>
      </div>
    );
  };

  return (
    <div className="App">
      <header className="cabecera">
        <nav className="navegacion">
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#habilidades">My Hard Skills</a></li>
            <li><a href="#proyectos">My Projects</a></li>
            <li><a href="#actividades">My Extra Activities</a></li>
            <li><a href="#contacto">Contact Me</a></li>
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
          <h2 className="titulo-dinamico">And I'm a <span className="texto-dinamico">{palabraActual}</span></h2>
          <p className="descripcion">
            I'm a <strong>Computer Systems Engineering</strong> student at Instituto Tecnológico de La Laguna. I’m passionate about learning new technologies and solving problems creatively. Outside of school, I love Formula 1, nature, the gym, and of course, tacos de papa!
          </p>
          <a
            className="boton-descargar"
            href='#' 
            onClick={handleDownload} // Disparar función al hacer clic
          >
            <img src={svgIcon} alt="Download Icon" className="svg-icon" />
            Download CV
          </a>
        </div>

        <div className="contenedor-imagen">
          <img src={imagenPerfil} alt="Juan Vaquera" />

          <div className="iconos-redes">
            <a href="https://www.linkedin.com/in/juan-vaquera-ln/" target="_blank" rel="noopener noreferrer">
              <img src={linkedinIcon} alt="LinkedIn" />
            </a>
            <a href="https://github.com/Vaquera26" target="_blank" rel="noopener noreferrer">
              <img src={githubIcon} alt="GitHub" />
            </a>
            <a href="https://www.instagram.com/vaquera.cpp?igsh=YW83MGIxeTJ2djE3" target="_blank" rel="noopener noreferrer">
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
            description="The language that takes me into battle, I always use it in competitive programming, it has helped me a lot, especially using Qt"
          />
          <SkillCard 
            icon={jsIcon} 
            name="JavaScript" 
            level={43} 
            description=" Less than a year learning it, but even so, it has taught me to improve how I create web pages."
          />
          <SkillCard 
            icon={sqlIcon} 
            name="SQL" 
            level={75} 
            description="My first database language, I really enjoy using it, I love making queries, creating relationships—everything."
          />
        </div>
        <p>WEB DEVELOPMENT</p>
        <div className="skills-grid">
          <SkillCard 
            icon={htmlcssIcon} 
            name="HTML & CSS" 
            level={80} 
            description="My beginnings in web development, they’ve been with me everywhere. Even though there are a thousand ways to center a div, I love designing web pages."
          />
          <SkillCard 
            icon={reactIcon} 
            name="React" 
            level={40} 
            description=" I’m just getting to know it, but I really like how easy it is to create pages with it."
          />
          <SkillCard 
            icon={phpIcon} 
            name="PHP" 
            level={45} 
            description="I’ve used it for several projects, it can be a bit boring, but if you know how to leverage it, it has a lot of potential."
          />
        </div>
        <p>TOOLS</p>
        <div className="skills-grid">
          <SkillCard 
            icon={vscIcon} 
            name="VS Code" 
            level={80} 
            description="A very good tool."
          />
          <SkillCard 
            icon={gitIcon} 
            name="GIT" 
            level={40} 
            description="I’m not an expert, but I know what’s necessary. It helps a lot in school and team projects."
          />
          <SkillCard 
            icon={figmaIcon} 
            name="Figma" 
            level={85} 
            description=" The love of my web pages and apps, I always use it before developing anything. I’m not an expert, but I can manage well."
          />
          <SkillCard 
            icon={aiIcon} 
            name="Illustrator" 
            level={85} 
            description=" The love of my web pages and apps, I always use it before developing anything. I’m not an expert, but I can manage well."
          />
        </div>
      </section>

      
      {showMessage && (
        <div className="mensaje-descarga">
          <p>Thanks for downloading!</p>
        </div>
      )}
    </div>
  );
}

export default App;
