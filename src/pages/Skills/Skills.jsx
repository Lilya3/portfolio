import {
  skillGroups,
  softSkills,
  methodologySteps,
} from "../../data/skills";
import { Monitor, ShieldCheck } from "../../data/icons";
import Seo from "../../components/Seo/Seo";
import SkillCard from "./_components/SkillCard/SkillCard";
import SoftSkillCard from "./_components/SoftSkillCard/SoftSkillCard";
import MethodologyCard from "./_components/MethodologyCard/MethodologyCard";

import "./Skills.scss";

function Skills() {
  return (

    <>
      <Seo
        title="Compétences | Lilya3 - Développeuse Front-End React"
        description="Découvrez les compétences techniques de Lilya3 en développement front-end : React, JavaScript, Sass, accessibilité, responsive design et méthodologie projet."
      />

    <section className="skills">
      <div className="skills__hero">
        <div>
          <p className="skills__eyebrow">Compétences</p>

          <h1>
            Mes <span>compétences</span>
          </h1>

          <p>
            Voici les technologies et outils que j'utilise pour concevoir et
            développer des applications web modernes, performantes et accessibles.
          </p>

          <div className="skills__note">
            <span>
              <Monitor />
            </span>

            <p>
              Je continue à apprendre, à solidifier et à améliorer mes compétences chaque jour.
            </p>
          </div>
        </div>

        <div className="skills__visual" aria-hidden="true">
          <span className="code-arrow code-arrow--xl">&lt;/&gt;</span>
        </div>
      </div>

      <div className="skills__section-title">
        <span>
          <Monitor />
        </span>

        <h2>Compétences techniques</h2>
      </div>

      <div className="skills__grid">
        {skillGroups.map((group) => (
          <SkillCard group={group} key={group.title} />
        ))}
      </div>

      <div className="skills__section-title skills__section-title--spaced">
        <span>
          <ShieldCheck />
        </span>

        <h2>Compétences comportementales</h2>
      </div>

      <div className="soft-skills">
        {softSkills.map((skill) => (
          <SoftSkillCard skill={skill} key={skill.title} />
        ))}
      </div>

      <div className="skills__section-title skills__section-title--spaced">
        <span>
          <ShieldCheck />
        </span>

        <h2>Ma méthodologie</h2>
      </div>

      <div className="methodology">
        {methodologySteps.map((step, index) => (
          <MethodologyCard step={step} index={index} key={step.title} />
        ))}
      </div>
    </section>
  </>
  );
}

export default Skills;