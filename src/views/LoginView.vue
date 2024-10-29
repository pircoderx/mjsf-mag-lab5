<script setup lang="ts">
import { ref } from "vue"
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useRouter } from 'vue-router';
const router = useRouter()
const m_email = ref('');
const m_password = ref('');
function login() {
  const auth = getAuth();
  signInWithEmailAndPassword(auth, m_email, m_password)
  .then(() => {
    alert('Successfully logged in');
    router.push('/todo');
  })
  .catch(error => {
    alert(error.message);
  });
}
</script>

<template>
  <div @submit.prevent="login">
    <h2>Login</h2>
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
    <button type="button">
       Login
    </button>
  </div>
</template>

