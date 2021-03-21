<template>
  <div class="top">
    <!-- <router-link to="/foo">Go to Foo</router-link> -->
    <div class="name">
      <h1>Shota Sugiura</h1>
    </div>

    <Section title="Introduction">
      Software engineer.<br>
      Natural Language Processing researcher.
    </Section>

    <hr>

    <Section title="Career">
      <ul>
        <li>
          <b>Merpay, Inc.</b><br>
          Apr. 2021 -<br>
          Develop Merpay as a software engineer.
        </li>
      </ul>
    </Section>

    <hr>

    <Section title="Education">
      <ul>
        <li>
          <b>The University of Tokyo, Graduate School of Information Science and Technology, Creative Informatics</b><br>
          Apr. 2019 - Mar. 2021<br>
          Master of Information Science and Technology<br>
          <a href="http://www.nlab.ci.i.u-tokyo.ac.jp/" target="_blank">Nakayama Lab. <font-awesome-icon :icon="'external-link-alt'" /></a>
        </li>
        <li>
          <b>The University of Tokyo, Faculty of Engineering, Systems Innovation</b><br>
          Apr. 2015 - Mar. 2019<br>
          Bachelor of Engineering<br>
          <a href="https://www.deepblue.edu.k.u-tokyo.ac.jp/" target="_blank">Konno Lab. <font-awesome-icon :icon="'external-link-alt'" /></a>
        </li>
      </ul>
    </Section>

    <hr>

    <Section title="Research">
      <sub-section title="Natural Language Processing">
        Paraphrase generation with deep neural networks.
      </sub-section>

      <sub-section title="Ocean Science">
        Anarysis on hydrate-bearing sediment using computational fluid dynamics.
      </sub-section>


      <sub-section title="Award">
        <ul>
          <li>Young Researcher Encouragement Award, the Annual Meeting of the Association for Natural Language Processing (NLP), March 2021.</li>
        </ul>
      </sub-section>
    </Section>
    
    <hr>

    <Section title="Internship">
      <ul>
        <li>
          <b>Gracia, Inc.</b><br>
          Nov. 2018 - Nov. 2019<br>
          Develop a gift EC service "TANP" as a software engineer.
        </li>
        <li>
          <b>Recruit Technologies Co., Ltd.</b><br>
          Oct. 2019 - Nov. 2019<br>
          Analyze and develop search engine in web applications as a software engineer.
        </li>
        <li>
          <b>GREE, Inc.</b><br>
          Apr. 2017 - June 2018<br>
          Develop a beauty media service "ARINE" as a software engineer.
        </li>
      </ul>
    </Section>

    <hr>

    <Section title="Contact">
      <div class="contacts">
        <div class="contact">
          <font-awesome-icon :icon="'envelope'" class='contact__icon' />
          <span class='contact__link'>s.shota.710.3506[at]gmail.com</span>
        </div>
        <div class="contact">
          <font-awesome-icon :icon="['fab', 'linkedin']" class='contact__icon' />
          <a href="https://www.linkedin.com/in/shota-sugiura-141055199" target="_blank" class='contact__link'>LinkedIn</a>
        </div>
        <div class="contact">
          <font-awesome-icon :icon="['fab', 'github']" class='contact__icon' />
          <a href="https://github.com/shota3506" target="_blank" class='contact__link'>Github</a>
        </div>
      </div>
    </Section>

  </div>
</template>

<script>
import Section from '../components/Section'
import SubSection from '../components/SubSection' 

export default {
  name: 'Top',
  components: { Section, SubSection },
}
</script>

<style lang='scss' scoped>
.top {
  text-align: left;
  margin: 0 20rem;
}
.contacts {
  .contact {
    width: 1;
    &__icon {
      font-size: 3.2rem;
      height: 3.2rem;
      width: 3.2rem;
      margin-right: 1rem;
      &:hover {
        color: #2962ff;
      }
    }
    &__link {
      display: inline-block;
      font-size: 1.6rem;
      height: 3.2rem;
      vertical-align:top;
      line-height: 2;
    }
  }
}
@media screen and (max-width: 1024px) { 
  .top {
    margin: 0 1rem;;
  }
}
</style>
