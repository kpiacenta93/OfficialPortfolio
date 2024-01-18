<template>
    <div class="video-view">
      <video width="1120" controls>
        <source src="../assets/potholeDemo.mp4" type="video/mp4">
        Your browser does not support the video tag.
      </video>
      
    </div>
  </template>
  
  <script>
  export default {
    name: 'VideoView',
    
  }
  </script>
  
  <style>
    .video-view {

     display: flex;
     justify-content: center;
     align-items: center;
     margin-top: 150px;
     /* box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px;box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px; */
      
    }
  </style>
  