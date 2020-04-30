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
      <h2>Education</h2>
      <ul>
        <li>
          <b>Master of Information Science and Technology, Department of Creative Informatics, The University of Tokyo.</b><br>
          Apr. 2019 - Mar. 2021 (expected) <br>
          Supervisor: Prof. Hideki Nakayama <br>
          Major: Machine learning, Natural language processing
        </li>
        <li>
          <b>Bachelor of Engineering, Department of Systems Innovation, The University of Tokyo.</b><br>
          Apr. 2015 - Mar. 2019 <br>
          Supervisor: Prof. Yoshihiro Konno <br>
          Major: Ocean science, Gas hydrate reservoir engineering, Computational  
        </li>
      </ul>
    </div>

    <hr>

    <div class="section">
      <h2>Research</h2>
      <div>Keywords</div>
      <div class="tags">
        <div class="tag">Machine Learning</div>
        <div class="tag">Natural Language Processing</div>
        <div class="tag">Multimodal Machine Learning</div>
        <div class="tag">Paraphrase Generation</div>
        <div class="tag">Text Generation</div>
      </div>
    </div>

    <hr>

    <div class="section">
      <h2>Internship</h2>
      <table class="table" border="1">
        <tr>
          <th>year</th>
          <th>place</th>
          <th>detail</th>
        </tr>
        <tr>
          <td>Nov. 2018 - Nov. 2019</td>
          <td>Gracia</td>
          <td>
            Software Engineer / Development of <a href="https://tanp.jp/" target="_blank">TANP <font-awesome-icon :icon="'external-link-alt'" /></a> / TANP LINE Bot
          </td>
        </tr>
        <tr>
          <td>Oct. 2019 - Nov. 2019</td>
          <td>Recruit Technologies</td>
          <td>Engineer / Serach Engine</td>
        </tr>
        <tr>
          <td>Sept. 2019</td>
          <td>freee</td>
          <td>Software Engineer / Web Frontend / React.js</td>
        </tr>
        <tr>
          <td>Aug. 2019</td>
          <td>DeNA</td>
          <td>Software Engineer / Web Backend / Golang</td>
        </tr>
        <tr>
          <td>Apr. 2017 - June 2018</td>
          <td>GREE, Inc</td>
          <td>
            Software Engineer / Development of <a href="https://arine.jp/" target="_blank">ARINE <font-awesome-icon :icon="'external-link-alt'" /></a>
          </td>
        </tr>
      </table>
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
.table {
  border-collapse: collapse;
  th, td{
    padding: 1rem;
  }
}
.tags {
  padding: 0.5rem;
  .tag {
    display: inline-block;
    font-size: 1.4rem;
    padding: 0.4rem 0.8rem;
    margin: 0.2rem;
    color: #333;
    border: 0.2rem solid #ddd;
    border-radius: 15.5rem;
  }
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
