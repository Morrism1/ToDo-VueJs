import Vue from 'vue'
import App from './App.vue'
//import router from './router';
import firebase from 'firebase';


Vue.config.productionTip = false

const config = {
  apiKey: "AIzaSyAyTE_IdXgFRlU3oEhMyUya_HlWB7QGB_o",
    authDomain: "todolist-aa1a6.firebaseapp.com",
    databaseURL: "https://todolist-aa1a6.firebaseio.com",
    projectId: "todolist-aa1a6",
    storageBucket: "",
    messagingSenderId: "217103269935",
    appId: "1:217103269935:web:aef485ee5dfb9dad7506da"
}

firebase.initializeApp(config);

export const db = firebase.firestore();

new Vue({
  render: h => h(App),
}).$mount('#app')
