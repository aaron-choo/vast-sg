import Vue from 'vue';
import VueGtag from 'vue-gtag';

if (process.env.NODE_ENV === "production") {
    Vue.use(VueGtag, {
        config: { id: 'G-0XRX1N2RFP' },
        appName: 'VAST',
    });
}