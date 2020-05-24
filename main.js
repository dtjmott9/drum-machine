new Vue({
    el: "#drum-machine",
    data: {
        keys: ['q','w','e','a','s','d','z','x','c'],
        sound: ['https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3','','','','','','','','']
    },
    methods: {
        playClip() {
            console.log('Audio Clip will play');
        }
    }
})