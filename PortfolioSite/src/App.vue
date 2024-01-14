<template>
 <div class="container">
  <nav class="nav-bar">
    <p class="my-name"><b></b>Kyle A. Piacenta Portfolio<b></b></p>
    <div class="nav-links">
    <a href="" class="links">Home</a>
    <a href="" class="links">GitHub</a>
    <a href="" class="links">LinkedIn</a>
    <a href="" class="links">Projects</a>
    <a href="" class="links">Experience</a>
  </div>
  </nav>
 </div>
  
</template>


<script>

</script>

<style scoped>

body {
  background-color: #333333; 
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
  margin-right: auto; /* Pushes everything else to the right */
  margin-left: 7px;
  font-family: monospace;
  font-size: 1.3rem;
}

</style>
