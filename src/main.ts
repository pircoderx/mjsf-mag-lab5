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
