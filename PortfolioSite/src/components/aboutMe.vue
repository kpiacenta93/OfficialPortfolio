<template>
    <div class="about-me">
        <div class="about-me-section">
            <img src="../assets/headShot.jpeg" alt="photo" class="photo">
            <div class="text-content">
                <p class="about-me-title">About Me:</p>
                <p class="description">As a professional who has successfully transitioned from company management to the
                    tech industry, I bring a unique combination of strategic business acumen and extensive technical
                    expertise. My background in business management has instilled in me a deep understanding of market
                    dynamics, while my current role in technology has seen me develop robust skills in Java, Spring Boot,
                    JDBC, DAOs, REST API development, MVC architecture, Microservices, PostgreSQL, JavaScript, HTML/CSS,
                    Vue.js, Express.js, and Node.js. This blend of management experience and technical proficiency makes me
                    uniquely capable of bridging the gap between operational demands and technological solutions, ensuring
                    project alignment with business goals. My journey through different sectors has not only honed my
                    problem-solving skills but also equipped me to adapt and excel in the fast-paced and evolving tech
                    landscape, making me a valuable asset to any team or project in need of a dynamic and versatile
                    professional.</p>
                    <p class="about-me-title">Skills:</p>
                <ul class="skills">
                    <li>Java</li>
                    <li>Spring Boot</li>
                    <li>JDBC, DAOs</li>
                    <li>REST API Development</li>
                    <li>MVC Architecture</li>
                    <li>Microservices</li>
                    <li>PostgreSQL</li>
                    <li>JavaScript</li>
                    <li>HTML/CSS</li>
                    <li>Vue.js</li>
                    <li>Express.js</li>
                    <li>Node.js</li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'aboutMe'
}
</script>

<style>
.skills {
    text-decoration: wavy;
    list-style-type: none; /* Remove default list styling */
    padding: 0;
    display: grid;
    grid-template-columns: repeat(3, 1fr); /* Adjust number of columns as needed */
    gap: 10px;
    font-size: 1.2rem;
    text-align: center;
    width: 900px;
}

.about-me {
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    border: 1px solid black;
    box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px;
    margin-top: 10px;
    font-family: monospace;
}

.about-me-section {
    display: grid;
    grid-template-columns: 1fr 2fr;
    align-items: center;
    gap: 20px;
    margin: 20px;
}

.photo {
    margin-left: 40px;
    max-width: 500px;
    height: 500px;
    border-radius: 50%;
    border: 2px solid black;
    background-image: center;
    background-repeat: no-repeat;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
}

.text-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: 1.3rem;
}

.about-me-title {
    font-family: monospace;
    margin-bottom: 10px;
    font-size: 1.6rem;
    text-decoration: underline;
}

.description {
    font-family: monospace;
    font-size: 1.3rem;
    margin-bottom: 20px; /* Adjusted for better spacing */
}
</style>
