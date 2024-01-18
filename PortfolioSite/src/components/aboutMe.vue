<template>
    <div class="about-me">

        <div class="about-me-section">
            <img src="../src/assets/headShot.jpeg" alt="photo" class="photo">
            <p class="about-me-title">About Me:</p>
            <h2 class="description">As a professional who has successfully transitioned from company management to the tech
                industry, I bring a unique combination of strategic business acumen and extensive technical expertise. My
                background in business management has instilled in me a deep understanding of market dynamics, while my
                current
                role in technology has seen me develop robust skills in Java, Spring Boot, JDBC, DAOs, REST API development,
                MVC
                architecture, Microservices, PostgreSQL, JavaScript, HTML/CSS, Vue.js, Express.js, and Node.js. This blend
                of
                management experience and technical proficiency makes me uniquely capable of bridging the gap between
                operational demands and technological solutions, ensuring project alignment with business goals. My journey
                through different sectors has not only honed my problem-solving skills but also equipped me to adapt and
                excel
                in the fast-paced and evolving tech landscape, making me a valuable asset to any team or project in need of
                a
                dynamic and versatile professional.
            </h2>
        </div>

    </div>
</template>


<script>
export default {

    name: {
        aboutMe,
    }


}

</script>

<style>
.about-me-title {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 15px;
}

.about-me-title {
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: monospace;
  margin-bottom: 10px;
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

.description {
  width: 100vh;;
  display: flex;
  height: 500px;
  justify-content: center;
  align-items: center;
  margin-top: 60px;
  font-family: monospace;
  margin-left: 60px;
  font-family: monospace;
}

.photo {
  display: flex;
  justify-content: center;
  align-items: start;
  height: 500px;
  border-radius: 50%;
  margin-right: 300px;
  margin: 20px;
  border: 2px solid black;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
}
</style>