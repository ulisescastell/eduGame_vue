<template>
    <footer class="ftr-general-container">
      <p>EduGame © 2024</p>
      <p>Legal & privacity</p>
      <p>Contact</p>
      <p>Cookies</p>
    </footer>
</template>
  
  <script>
  export default {
    name: 'FooterCmp',
    data() {
      return {}
    }
  }
  </script>
  
  <style scoped>
  .ftr-general-container {
    background-color: #565151;
    width: 100%;
    padding: .5rem 0;
    height: fit-content;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
  
  @media (max-width: 1000px) {
    .ftr-general-container {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      text-align: center;
      overflow: auto;
    }
  }
  
  @media (max-width: 768px) {
    .ftr-general-container {
      grid-template-columns: repeat(1, 1fr);
    }
  }
  
  * {
    color: #fff;
    font-size: 0.9rem;
  }
  </style>
  