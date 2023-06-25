import React from 'react';
import './About.css';
import TechnologyIcon from '../../components/TechnologyIcon/TechnologyIcon';
import { FaHtml5, FaCss3, FaReact, FaJs } from 'react-icons/fa';
import Collapse from '../../components/collapse/Collapse';

function About() {
  return (
    <section className="about-background">
      <div id="about">
        <h2>About</h2>
        <div className="about-content">
          
            En tant que développeur intégrateur web, je maîtrise les technologies clés du développement web telles que HTML, CSS, JavaScript, React, et Redux. Je reste constamment à jour avec les dernières tendances et technologies du domaine pour créer des expériences web optimales.
          

          <div className='TechnologyIcon-section'>
            <Collapse
              title={<TechnologyIcon iconclassName='icon-html' icon={<FaHtml5/>} progress={100} />}
              textTitle={"HTML"}
              children={"Dans mes projets, j'utilise HTML pour structurer le contenu de mes pages web de manière sémantique. Je suis familier avec les balises HTML de base, ainsi que les balises spécifiques pour les formulaires ou les tableaux."}
            />

            <Collapse
              title={<TechnologyIcon iconclassName='icon-css' icon={<FaCss3/>} progress={100} />}
              textTitle={"CSS"}
              children={"Pour CSS, j'ai une bonne compréhension des sélecteurs, des propriétés et des valeurs pour styliser efficacement mes pages. J'utilise les règles CSS pour appliquer des couleurs, des polices, des marges, des bordures et d'autres styles visuels. J'ai également une connaissance pratique des boîtes flexibles pour créer des mises en page responsives et adaptatives."}
            />

            <Collapse
              title={<TechnologyIcon iconclassName='icon-js' icon={<FaJs/>} progress={80} />}
              textTitle={"JS"}
              children={"Je possède de solides compétences en JavaScript, un langage de programmation polyvalent et puissant utilisé pour développer des fonctionnalités interactives et dynamiques sur les sites web. Je suis à l'aise avec les concepts fondamentaux de JavaScript. Je suis capable d'écrire un code JavaScript propre, modulaire et bien structuré, en suivant les bonnes pratiques de programmation. Je suis également compétent dans la gestion de l'état de l'application et la communication avec des API externes."}
            />

            <Collapse
              title={<TechnologyIcon iconclassName='icon-react' icon={<FaReact/>} progress={70} />}
              textTitle={"React"}
              children={"J'utilise React et Redux pour la création d'interfaces utilisateur réactives et performantes. Avec React, je suis capable de construire des composants réutilisables et d'organiser efficacement la structure de mes applications web. En combinant React avec Redux, j'ai la capacité de gérer un état global de l'application de manière prévisible et maintenable. J'utilise les actions et les reducers pour gérer les modifications de l'état et assurer une gestion fluide des données. Je suis à l'aise avec les concepts clés de React et Redux. Je reste constamment à jour avec les nouvelles fonctionnalités et les bonnes pratiques de React et Redux, en suivant la documentation officielle et les ressources communautaires."}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
