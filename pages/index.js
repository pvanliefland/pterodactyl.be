import React from 'react';

import Page from './components/page';

const Index = () => (
  <Page>
    <h1>Pterodactyl</h1>
    <h2>Hey there! I'm Pierre. I develop APIs, web platforms and mobile applications.</h2>
    <p>
      Get in touch: <a href="mailto:pierre+contact@pterodactyl.be">pierre@pterodactyl.be</a>, or <a
      href="https://www.linkedin.com/in/pvanliefland/" target="_blank">linkedin/pvanliefland</a>.
    </p>
    <p>My recent work mostly involved the following technologies:</p>
    <ul>
      <li><strong>Python</strong> (usually with Flask or Django)</li>
      <li><strong>React</strong> and <strong>React Native</strong> (usually with Redux)</li>
      <li><strong>Databases</strong> (PostgreSQL, MySQL, Couchbase, Mongo, Redis)</li>
      <li><strong>Docker</strong> as the development environment</li>
    </ul>
    <p>
      I am currently learning <strong>data science</strong> and <strong>machine learning</strong>, and I am eager
      to get hands-on experience in this field.
    </p>
    <p>Here is a short summary of my career until now:</p>
    <ul>
      <li>
        <p>
          In 2017 and 2018, I helped build <a href="https://ludus.one" target="_blank">Ludus</a>, an innovative
          web-based presentation software. I worked on the development of the API and of the web application itself.
        </p>
      </li>
      <li>
        <p>
          Between 2015 and 2017, I worked on <a href="https://jack.media" target="_blank">Jack</a>, an app that lets you
          send messages
          in the future. I worked on the project API and on the mobile application.
        </p>
      </li>
      <li>
        <p>
          From 2010 to 2015, together with two partners, I co-founded and led <a href="http://snowcap.be"
                                                                                  target="_blank">Snowcap</a>, a
          development agency specialised in custom websites and applications.
        </p>
      </li>
      <li>
        <p>
          From 2007 to 2010, I worked for <a href="https://emakina.be" target="_blank">Emakina</a> and <a
          href="https://dogstudio.co" target="_blank">Dogstudio</a>, two leading belgian agencies, as a full-stack
          developer and technical/functional analyst.
        </p>
      </li>
    </ul>
  </Page>
);

export default Index;