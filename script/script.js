Vue.createApp({
    data() {
        return {
            profiles: [
                {
                    username: 'marisahonkai', name: 'Honkai News Network', desc: 'Honkai Impact 3rd and Honkai Star Rail CN News, Translation and Guides', created: 'July 2019', following: 2181, follower: 170
                }
            ]
        }
    }
})
    .component('twitter-profile', {
        template: '#twitter-profile-card',
        props: {
            username: { type: String },
            name: { type: String },
            desc: { type: String },
            created: { type: String },
            following: { type: Number },
            follower: { type: Number }
        }
    })
    .mount('#app')