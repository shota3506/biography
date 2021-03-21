<template>
  <div class="top">
    <!-- <router-link to="/foo">Go to Foo</router-link> -->
    <div class="name section">
      <h1>Shota Sugiura</h1>
    </div>

    <div class="section">
      <h2>Introduction</h2>
      Graduate School of Information Science and Technology at The University of Tokyo, Master 2nd. <br>
      Machine Perception Group <a href="http://www.nlab.ci.i.u-tokyo.ac.jp/" target="_blank">Nakayama Lab. <font-awesome-icon :icon="'external-link-alt'" /></a> <br>
      Natural Language Processing Research <br>
      <br>
      Web Application Engineer (Backend / Frontend)
    </div>

    <hr>

    <div class="section">
      <h2>Career</h2>
      <ul>
        <li>
          <b>Merpay, Inc.</b><br>
          Apr. 2021 -<br>
          Backend Engineer<br>
        </li>
      </ul>
    </div>

    <hr>

    <div class="section">
      <h2>Education</h2>
      <ul>
        <li>
          <b>The University of Tokyo, Graduate School of Information Science and Technology, Creative Informatics</b><br>
          Apr. 2019 - Mar. 2021<br>
          Master of Information Science and Technology<br>
          Supervisor is Prof. Hideki Nakayama.<br>
        </li>
        <li>
          <b>The University of Tokyo, Faculty of Engineering, Systems Innovation</b><br>
          Apr. 2015 - Mar. 2019<br>
          Bachelor of Engineering<br>
          Supervisor is Prof. Yoshihiro Konno.<br>
        </li>
      </ul>
    </div>

    <hr>

    <div class="section">
      <h2>Research</h2>
      <h3>Natural Language Processing</h3>
      Paraphrase generation with deep neural networks.

      <h3>Ocean Science</h3>
      Anarysis on hydrate-bearing sediment using computational fluid dynamics.

      <h3>Award</h3>
      <ul>
        <li>Young Researcher Encouragement Award, the Annual Meeting of the Association for Natural Language Processing (NLP), March 2021.</li>
      </ul>
    </div>
    
    <hr>

    <div class="section">
      <h2>Internship</h2>
      <ul>
        <li>
          <b>Gracia, Inc.</b>, Nov. 2018 - Nov. 2019<br>
          Developed a gift EC service "TANP" as a software engineer.
        </li>
        <li>
          <b>Recruit Technologies Co., Ltd.</b>, Oct. 2019 - Nov. 2019<br>
          Analyzed and Developed search engine in web applications as a software engineer.
        </li>
        <li>
          <b>GREE, Inc.</b>, Apr. 2017 - June 2018<br>
          Developed a beauty media service "ARINE" as a software engineer.
        </li>
      </ul>
    </div>

    <hr>

    <div class="section">
      <h2>Contact</h2>
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
    </div>
  </div>
</template>

<script>
export default {
  name: 'Top'
}
</script>

<style lang='scss' scoped>
.top {
  text-align: left;
  margin: 0 20rem;
}
.section {
  margin-bottom: 2rem;
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
