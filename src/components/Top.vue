<template>
  <div class="top">
    <div class="name section">Shota Sugiura</div>

    <div class="status section">
      <h1>Introduction</h1>
      Graduate School of Information Science and Technology at the University of Tokyo <br>
      Master 1st <br>
      Machine Perception Group <a href="http://www.nlab.ci.i.u-tokyo.ac.jp/" target="_blank">Nakayama Lab.</a> <br>
      Natural Language Processing Research <br>
      <br>
      Web Application Engineer (Backend / Frontend)
    </div>

    <div class="research section">
      <h1>Research</h1>
      <div>
        Natural Language Processing (NLP)
      </div>
    </div>

    <div class="work section">
      <h1>Work Experience</h1>
      <table border="1">
        <tr>
          <th>year</th>
          <th>place</th>
          <th>detail</th>
        </tr>
        <tr>
          <td>2018/11-2019/11</td>
          <td>Gracia</td>
          <td>
            Software Engineer <br>
            Development of <a href="https://tanp.jp/" target="_blank">TANP</a> / TANP LINE Bot
          </td>
        </tr>
        <tr>
          <td>2017/4-2018/6</td>
          <td>GREE, Inc</td>
          <td>
            Software Engineer <br>
            Development of <a href="https://arine.jp/" target="_blank">ARINE</a>
          </td>
        </tr>
      </table>
    </div>

    <div class="internship section">
      <h1>Internship</h1>
      <table border="1">
        <tr>
          <th>year</th>
          <th>place</th>
          <th>detail</th>
        </tr>
        <tr>
          <td>2019/10-2019/11</td>
          <td>Recruit Technologies</td>
          <td>Engineer / Serach Engine</td>
        </tr>
        <tr>
          <td>2019/9</td>
          <td>freee</td>
          <td>Software Engineer / Frontend Engineer / React</td>
        </tr>
        <tr>
          <td>2019/8</td>
          <td>DeNA</td>
          <td>Software Engineer / Backend Engineer / Golang</td>
        </tr>
      </table>
    </div>

    <div class="education section">
      <h1>Education</h1>
      <ul>
        <li>
          Master student in Information Science and Technology, Department of Creative Informatics, the University of Tokyo, Present. <br>
          (Supervisor: Prof. Hideki Nakayama)
        </li>
        <li>
          Bachelor's Degree in Engineering, Department of Systems Innovation, the University of Tokyo, March 2019. <br>
          (Supervisor: Prof. Yoshihiro Konno)
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Top'
}
</script>

<style scoped>
ul {
  margin: auto;
}
li {
  text-align: left;
}
table {
  margin: 2rem auto;
  width: 80%;
  border-collapse: collapse;
}
table th {
  padding: 0.5rem 1rem;
}
table td {
  padding: 0.5rem 1rem;
}
.top {
  margin: 0 8rem;
}
.section {
  margin-bottom: 4rem;
}
.name {
  font-size: 2rem;
}
.education {
  display:inline-block
}
</style>
