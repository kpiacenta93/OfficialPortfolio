<template>
    <div class="container">
        <nav class="nav-bar">

            <p class="my-name"><b></b>Kyle A. Piacenta Portfolio<b></b></p>
            <div class="nav-links">
                <router-link to="/Home" href="" class="links">Home</router-link>
                <a href="https://github.com/kpiacenta93" class="links">GitHub</a>
                <a href="https://www.linkedin.com/in/kyle-piacenta/" class="links">LinkedIn</a>
                <a href="#projects-section" class="links">Projects</a>
                <a href="#work-exp" class="links">Experience</a>
                <router-link to="/VideoView" class="links">VideoResume</router-link>

                <a class="connect" href="mailto:piacentakyle@gmail.com" method="post" enctype="text/plain">Lets connect</a>
            </div>
        </nav>
    </div>
</template>


<script>
export default {

    name: 'navBar'



}
</script>

<style>
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
</style>