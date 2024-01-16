<template>
    <div class="video-view">
    

      <video width="720" controls>
        <source src="" type="video/mp4">
        Your browser does not support the video tag.
      </video>
      
    </div>
  </template>
  
  <script>
  export default {
    name: 'VideoView',
    // Any component logic here
  }
  </script>
  
  <style>
    .video-view {
     display: flex;
     justify-content: center;
     align-items: center;
      
    }
  </style>
  