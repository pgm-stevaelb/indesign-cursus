import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Leren',
    Svg: require('@site/static/img/undraw_knowledge_re_5v9l.svg').default,
    description: (
      <>
        Je zal tijdens de fysieke lessen telkens kort wat theorie krijgen, maar je kan gebruik maken van deze online cursus om snel dingen terug te vinden.
      </>
    ),
  },
  {
    title: 'Doen',
    Svg: require('@site/static/img/undraw_developer_activity_re_39tg.svg').default,
    description: (
      <>
        Alle lessen worden zo praktisch mogelijk gegeven, we zorgen ervoor dat je InDesign in de vingers krijgt.
      </>
    ),
  },
  {
    title: 'Afwerken',
    Svg: require('@site/static/img/undraw_book_lover_re_rwjy.svg').default,
    description: (
      <>
        Ons doel is dat we een mooi eindresultaat verkrijgen waar je zelf ook heel trots op kan zijn.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
