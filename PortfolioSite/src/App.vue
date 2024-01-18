<template>
  <div class="container">
    <navBar />

    <aboutMe />

  </div>
  <footer class="footer"><span>&copy; Kyle Piacenta's Portfolio 2023</span></footer>
</template>


<script>
import aboutMe from './components/aboutMe.vue'
import navBar from './components/navBar.vue'

export default {

  components: {
    navBar,
    aboutMe,
  },

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


.footer {
  border-radius: 10px;
  margin-left: 5px;
  margin-right: 5px;
  margin-bottom: 15px;
  position: fixed;
  left: 0;
  bottom: 0;
  /* width: 100%; */
  width: 99.5%;
  height: 30px;
  border: 1px solid grey;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: monospace;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
}
</style>
