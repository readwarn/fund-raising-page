import Vue from "vue";
import router from "./router";
import mixins from "./mixins";
import App from "./App.vue";

import "./assets/fonts/font.css";
import "./assets/styles/style.css";

Vue.mixin(mixins);
Vue.config.productionTip = false;

new Vue({
    render: (h) => h(App),
    router,
}).$mount("#app");