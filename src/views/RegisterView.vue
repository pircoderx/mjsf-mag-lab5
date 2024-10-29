<script setup lang="ts">
import { ref } from "vue"
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useRouter } from 'vue-router';
const router = useRouter()
const m_email = ref('');
const m_password = ref('');
function register() {
  const auth = getAuth();
  createUserWithEmailAndPassword(auth, m_email, m_password)
  .then(() => {
    alert('Successfully registered! Please login.');
    router.push('/login');
  })
  .catch(error => {
    alert(error.message);
  });
}
</script>

<template>
  <div @submit.prevent="register">
    <h2>Register</h2>
    <input
      type="email"
      placeholder="Email address..."
      v-model="m_email"
    />
    <input
      type="password"
      placeholder="password..."
      v-model="m_password"
    />
    <button type="button" @click="register">Register</button>
  </div>
</template>

