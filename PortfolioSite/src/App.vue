<template>
  <div class="container">
    
    <nav class="nav-bar">
      <p class="my-name"><b></b>Kyle A. Piacenta Portfolio<b></b></p>
      <div class="nav-links">
        <router-link to="" href="" class="links">Home</router-link>
        <a href="https://github.com/kpiacenta93" class="links">GitHub</a>
        <a href="https://www.linkedin.com/in/kyle-piacenta/" class="links">LinkedIn</a>
        <a href="#projects-section" class="links">Projects</a>
        <a href="#work-exp" class="links">Experience</a>
        <router-link to="/VideoView" class="links">VideoResume</router-link>
        <a class="connect" href="mailto:piacentakyle@gmail.com" method="post" enctype="text/plain">Lets connect</a>
       
      </div>
      
    </nav>
    <!-- <router-view/> -->
    <h3 class="about-me-title">About Me:</h3>
    <div class="about-me">
      <div class="about-me-section">
        <img src="../src/assets/headShot.jpeg" alt="photo" class="photo">
        <h2 class="description">As a professional who has successfully transitioned from company management to the tech
          industry, I bring a unique combination of strategic business acumen and extensive technical expertise. My
          background in business management has instilled in me a deep understanding of market dynamics, while my current
          role in technology has seen me develop robust skills in Java, Spring Boot, JDBC, DAOs, REST API development, MVC
          architecture, Microservices, PostgreSQL, JavaScript, HTML/CSS, Vue.js, Express.js, and Node.js. This blend of
          management experience and technical proficiency makes me uniquely capable of bridging the gap between
          operational demands and technological solutions, ensuring project alignment with business goals. My journey
          through different sectors has not only honed my problem-solving skills but also equipped me to adapt and excel
          in the fast-paced and evolving tech landscape, making me a valuable asset to any team or project in need of a
          dynamic and versatile professional.
        </h2>
      </div>

    </div>
    <!-- <h4 class="projects-title">Projects</h4> -->
    <div class="projects" id="projects-section">
      <!-- <h4 class="projects-title">Projects</h4> -->
      <div class="project-divs" href="projects">
        <a class="p1" href="https://github.com/kpiacenta93/VendingMachineOOP">Vending Machine</a>
        <span class="hover-text">abc</span>
        <a class="p2" href="https://github.com/kpiacenta93/MoneyTransferApp">Backend Venmo App</a>
        <span class="hover-text">acs</span>
        <a class="p3" href="https://github.com/kpiacenta93/PotholeTrackerApp">Pothole Patrole</a>
        <span class="hover-text">asdas</span>
        <a class="p4" href="https://github.com/kpiacenta93/vue-router-setup">Application Tracker</a>
        <span class="hover-text">asda</span>
        <a class="p5" href="https://dev3774.d28huaaxdc1rfd.amplifyapp.com/">Random Password Generator</a>
        <span class="hover-text">asda</span>
        <a class="p5" href="https://dev1044.d2fguqojy8kbjj.amplifyapp.com/">Quote Generator</a>
        <a class="p5" href="https://dev1044.d2fguqojy8kbjj.amplifyapp.com/">Quote Generator</a>
        <a class="p5" href="https://dev1044.d2fguqojy8kbjj.amplifyapp.com/">Quote Generator</a>
        <a class="p5" href="https://dev1044.d2fguqojy8kbjj.amplifyapp.com/">Quote Generator</a>
        <a class="p5" href="https://dev1044.d2fguqojy8kbjj.amplifyapp.com/">Quote Generator</a>
      </div>
    </div>
    <div class="work-experience" id="work-exp">
      <div class="work-box" id="work1">
        <h3 class="job-title">Director Of Administrative Operations</h3>
        <p class="company-name"><b>Adriano's Lawn Care</b></p>
        <p>Led workflow optimization initiatives, resulting in a 15% boost in business acquisition through strategic
          planning and improved client relationship management, demonstrating skills in growth driving and client
          engagement.</p>
        <p>Increased team efficiency by 20% through effective service scheduling and route optimization, showcasing strong
          organizational and logistical abilities.</p>
        <p>Achieved a 25% reduction in billing errors via meticulous customer database management, enhancing financial
          transaction accuracy and reliability.</p>
        <p>Drafted clear and fair customer contracts, devised creative yearly payment plans, and enhanced financial
          options, leading to exemplary customer service standards, increased client trust, and higher business cash flow.
        </p>
        <p><b>Skills Obtained:</b> Workload Prioritization, Problem Solving, Administrative Organization, General Office
          Work,
          Customer Satisfaction, Sales, Management.</p>


      </div>
      <div class="work-box" id="work2">
        <h3>Job Title 2</h3>
        <br>
        <p>Company 2</p>
        <!-- More info about Job 2 -->
      </div>
      <div class="work-box" id="work3">
        <h3>Job Title 3</h3>
        <p>Company 3</p>
        <!-- More info about Job 3 -->
      </div>
    </div>
  </div>

  <footer class="footer"><span>&copy; Kyle Piacenta's Portfolio 2023</span></footer>
  
</template>


<script>
export default {
  data() {
    return {

    }
  }
}

</script>

<style scoped>
body {
  background-color: black;
  background-image: url('https://as2.ftcdn.net/v2/jpg/03/52/58/99/1000_F_352589922_wrQkznnjAYjCX0OOhryzYgzsWAOZboBN.jpg');
}

.work-experience {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-top: 20px
}

.job-title {
  text-decoration: underline;
  font-size: 1.4rem;
}

.company-name {
  font-size: 1.2rem;

}

.work-box {
  background-color: white;
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 30%;
  padding: 15px;
  border: 1px solid #575353;
  height: 500px;
  margin: 5px;
  box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;
  font-family: monospace;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  box-sizing: border-box;
  margin-bottom: 50px;
}

.work-box:hover {
  display: flex;
  text-align: center;
  transform: scale(1.5);
  z-index: 2;
  margin-left: 140px;
  margin-right: 140px;
  font-size: 0.6rem;
}



.about-me-title {
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: monospace;
  margin-bottom: 10px;
}

.project-divs a {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.project-divs {
  color: whitesmoke;
  font-size: 3rem;
  display: flex;
  justify-content: center;
  flex-direction: row;
  align-items: center;
  flex-wrap: wrap;
  gap: 15px;
  margin-top: 0px;
  margin-right: ;

  /* background-image: url('https://as2.ftcdn.net/v2/jpg/03/52/58/99/1000_F_352589922_wrQkznnjAYjCX0OOhryzYgzsWAOZboBN.jpg'); */
  /* box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px; */
  /* margin-bottom: 30px; */
}

/* .projects-title {
  display: flex;
  align-items: center;
  text-align: center;
 
  justify-content: center;
} */

.project-divs .p1,
.project-divs .p2,
.project-divs .p3,
.project-divs .p4,
.project-divs .p5 {
  color: whitesmoke;
  text-decoration: dotted;
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;
  margin-left: 10px;
  border-radius: 15px;
  width: 300px;
  height: 300px;
  border: 1px solid black;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-image: url('https://as2.ftcdn.net/v2/jpg/03/52/58/99/1000_F_352589922_wrQkznnjAYjCX0OOhryzYgzsWAOZboBN.jpg');
}

.project-divs .p1:hover,
.project-divs .p2:hover,
.project-divs .p3:hover,
.project-divs .p4:hover,
.project-divs .p5:hover {
  transform: scale(1.66);
  /* Scales up the div on hover */
  box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;
  /* Optional: Adds a shadow for depth */
  border: 2px solid whitesmoke;
}

.hover-text {
  position: absolute;
  opacity: 0;
  transition: opacity 0.3s ease, transform 0.3s ease;
  transform: translateY(20px);
  width: 100%;
  text-align: center;
  bottom: 10px;
  color: white;
}

.project-divs a:hover .hover-text {
  opacity: 1;
  transform: translateY(0);
}

.projects-title {
  margin-bottom: 760px;
  font-family: monospace;
  font-size: 2rem;
  ;
}

.projects {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  height: 800px;
  border: 1px solid grey;
  width: 1882px;
  overflow: auto;
  box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;

}

.footer {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 280px;
  border: 1px solid grey;
  height: 30px;
  font-family: monospace;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
}

.nav-bar {
  height: 50px;
  border: 1.5px solid rgb(148, 147, 147);
  margin-left: 50px;
  margin-right: 50px;
  border-radius: 15px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
}

.nav-links {
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 100%;
}

.links {
  margin: 0 10px;
  font-family: monospace;
  font-size: 1.2rem;
  text-decoration: none;
  color: rgb(23, 160, 162);

}

.links:hover {
  text-decoration: underline 1px solid rgb(23, 160, 162);
}

.my-name {
  margin-right: auto;
  margin-left: 7px;
  font-family: monospace;
  font-size: 1.3rem;
}

.about-me {
  display: flex;
  justify-content: center;
  margin-top: 20px;
  font-family: monospace;
  width: 191vh;
  border: 1.5px solid rgb(148, 147, 147);
  height: 600px;
  box-shadow: rgba(0, 0, 0, 0.07) 0px 1px 2px, rgba(0, 0, 0, 0.07) 0px 2px 4px, rgba(0, 0, 0, 0.07) 0px 4px 8px, rgba(0, 0, 0, 0.07) 0px 8px 16px, rgba(0, 0, 0, 0.07) 0px 16px 32px, rgba(0, 0, 0, 0.07) 0px 32px 64px;
}

.about-me-section {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
}

.connect {
  text-decoration: none;
  margin: 5px;
  display: flex;
  justify-content: center;
  width: 120px;
  align-items: center;
  display: flex;
  margin-right: 5px;
  height: 40px;
  border-radius: 10px;
  font-family: monospace;
  background-color: aqua;
  color: white;
  border: 1px solid grey;
  transition: transform 0.3s ease, background-color 0.3s ease;
  transform: translateZ(0);
  box-shadow: rgba(0, 0, 0, 0.10) 0px 54px 55px, rgba(0, 0, 0, 0.10) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
}

.connect:hover {
  border: 1px solid whitesmoke;
  background-color: rgb(17, 195, 211);
  transform: scale(1.3rem);
  text-decoration: underline;
}

.description {
  /* width: 700px; */
  display: flex;
  height: 500px;
  justify-content: center;
  align-items: center;
  margin-top: 60px;
  font-family: monospace;
  margin-left: 100px;
  font-family: monospace;
}





.photo {
  display: flex;
  justify-content: center;
  align-items: start;
  height: 500px;
  border-radius: 50%;
  ;
  margin: 20px;
  border: 2px solid black;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;

}

@media (max-width: 468px) {
  .nav-bar {
    flex-direction: column;
    align-items: center;
  }

  .nav-links,
  .my-name {
    margin-top: 10px;
  }

  .about-me {
    width: auto;
    padding: 10px;
    box-sizing: border-box;
  }

  .about-me-section {
    flex-direction: column;
  }

  .description {
    margin-left: 0;
    font-size: 1rem;
    text-align: center;
  }

  .photo {
    width: 100%;
    max-width: 300px;
    height: auto;
    margin: 0 auto;
  }
}</style>
