//sources always get imported here
import HeroThumb from './components/TheHeroThumbnail.js';
import Lightbox from './components/TheLightboxComponents.js';

(() => {
    // create vue instance here
    const { createApp } = Vue

    createApp({
        created() {
            // fetch call aways go here -> retrieve any data you need 
            fetch('./data.json')// go and get the remote data
                .then(res => res.json())// convert the json object to plain JS object
                .then(data => this.heroData = data) // sotre the data in the Vue instance
            .catch(error => console.error(error)); // report any errors that might occur
        },

        data() {
            return {
                heroData: {},
                lightboxData: {},
                showLightBox: false
            }
        },

        methods: {
            loadLightBox(item) { 
                this.lightboxData = item;
                this.showLightBox = true; 
            }
        },

        components: {
            herothumnail: HeroThumb,
            lightbox: Lightbox
        }
    }).mount('#app')
})()