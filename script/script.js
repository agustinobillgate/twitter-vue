Vue.createApp({
    data() {
        return {
            profiles: [
                {
                    username: 'parys410', name: 'Ary Setiyawan',
                    desc: 'Have a Nice Day', location: 'Badung, Bali, Indonesia',
                    created: 'July 2010', following: 305, follower: 170
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
            location: { type: String },
            following: { type: Number },
            follower: { type: Number }
        }
    })
    .mount('#app')