import {
  skillGroups,
  softSkills,
  methodologySteps,
} from "../../data/skills";
import { Monitor, ShieldCheck } from "../../data/icons";
import Seo from "../../components/Seo/Seo";
import SkillCard from "../../components/SkillCard/SkillCard";

import "./Skills.scss";

function Skills() {
  return (

    <>
      <Seo
        title="Compétences | Lilya - Développeuse Front-End React"
        description="Découvrez les compétences techniques de Lilya en développement front-end : React, JavaScript, Sass, accessibilité, responsive design et méthodologie projet."
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
        {softSkills.map((skill) => {
          const Icon = skill.icon;

          return (
            <article className="soft-skill-card" key={skill.title}>
              <span className="soft-skill-card__icon">
                <Icon />
              </span>

              <h3>{skill.title}</h3>
              <p>{skill.description}</p>
            </article>
          );
        })}
      </div>

      <div className="skills__section-title skills__section-title--spaced">
        <span>
          <ShieldCheck />
        </span>

        <h2>Ma méthodologie</h2>
      </div>

      <div className="methodology">
        {methodologySteps.map((step, index) => {
          const Icon = step.icon;

          return (
            <article className="methodology-card" key={step.title}>
              <span className="methodology-card__icon">
                <Icon />
              </span>

              <h3>
                {index + 1}. {step.title}
              </h3>

              <p>{step.description}</p>
            </article>
          );
        })}
      </div>
    </section>
  </>
  );
}

export default Skills;