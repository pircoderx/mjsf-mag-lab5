import '@/assets/main.scss'

import {createApp} from 'vue'
import {createPinia} from 'pinia'
import directivesPlugin from '@/plugins/directives';
import i18n from '@/plugins/i18n'
// import App from './App.vue'
import DemoI18n from "@/DemoI18n.vue";
import App from "@/App.vue";
import router from './router'

import './style.css';

import * as firebase from "firebase/app";
// import firebase from 'firebase';
router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.authRequired)) {
    if (firebase.auth().currentUser) {
      next();
    } else {
      alert('You must be logged in to see this page');
      next({
        path: '/',
      });
    }
  } else {
    next();
  }
});

import { initializeApp } from "firebase/app";

var firebaseConfig = {
  apiKey: "AIzaSyDwml6fGxNJAMmVTqw18jxtbKaG6fcz3ck",
  authDomain: "mjsf-mag-lab5-8e8e1.firebaseapp.com",
  projectId: "mjsf-mag-lab5-8e8e1",
  storageBucket: "mjsf-mag-lab5-8e8e1.appspot.com",
  messagingSenderId: "914214443384",
  appId: "1:914214443384:web:62436c9971b1ac6ba9108d"
};
// Initialize Firebase
initializeApp(firebaseConfig);

const firebase_app = initializeApp(firebaseConfig);
const app = createApp(App)

/* tooltip "plugin" begin */
function tooltip_before_mount(element, binding) {
  var span = document.createElement('span');
  span.classList.add('tooltip');
  if (binding.value.triger) {
    span.classList.add('tooltip_' + binding.value.triger);
  }
  else {
    span.classList.add('tooltip_hover');
  }
  if (binding.value.html) {
    span.innerHTML = binding.value.content;
  }
  else {
    span.innerText = binding.value.content;
  }
  element.appendChild(span);
  element.classList.add('tooltip_parent');
}
app.directive('tooltip', {beforeMount: tooltip_before_mount})
/* tooltip "plugin" end */

app.use(createPinia())
app.use(router)

app.mount('#app')
