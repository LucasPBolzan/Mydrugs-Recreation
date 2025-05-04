<script setup>
// Sem lógica por enquanto, pode adicionar funcionalidade ao botão aqui mais tarde
</script>

<template>
  <div class="contact-page">
    <div class="contact-card">
      <h1>Contact Us</h1>
      <form class="contact-form">
        <div class="form-group">
          <label for="name">Name</label>
          <input type="text" id="name" placeholder="Your Name" />
        </div>
        <div class="form-group">
          <label for="email">Email</label>
          <input type="email" id="email" placeholder="Your Email" />
        </div>
        <div class="form-group">
          <label for="message">Message</label>
          <textarea id="message" placeholder="Your Message"></textarea>
        </div>
        <button class="submit-button">Send</button>
      </form>
    </div>
  </div>
</template>

<style scoped>
.contact-page {
  background-color: black;
  color: white;
  min-height: 100vh;
  padding: 20px;
  padding-top: 50px; 
  display: flex;
  justify-content: center;
  align-items: center;
}

.contact-card {
  background-color: #1a1a1a;
  border: 1px solid white;
  border-radius: 10px;
  padding: 30px; 
  width: 350px; 
  text-align: center;
}

.contact-card h1 {
  font-size: 24px; 
  margin-bottom: 25px;
}

.contact-form {
  display: flex;
  flex-direction: column;
  gap: 20px; 
}

.form-group {
  text-align: left;
}

.form-group label {
  font-size: 14px; 
  display: block;
  margin-bottom: 8px; 
}

.form-group input,
.form-group textarea {
  width: 100%;
  padding: 12px; 
  background-color: #2a2a2a;
  border: 1px solid #444;
  border-radius: 5px;
  color: white;
  font-size: 14px;
  box-sizing: border-box; 
}


.submit-button {
  background-color: #ff6200;
  color: white;
  border: none;
  padding: 12px 20px; 
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  margin-top: 10px; 
}

</style>