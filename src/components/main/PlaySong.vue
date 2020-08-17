<template>
    <div class="play-song pos-a top-0 bootom-0 left-0 right-0">
        <button @click="back">back</button>
        <play-song-detail />
        <!-- {{ playSongDetail }} -->
        <div class="play-bar pos-f bottom-0 my-3 w100 d-flex jc-center">
            <audio :src="playSongsrc" autoplay controls preload ref="autoplaysong"></audio>
        </div>
    </div>
</template>

<script>
import PlaySongDetail from '@/components/playsong/PlaySongDetail'

export default {
    props: {
        playSongsrc: {
            type: String,
            required: true
        },
        playSongDetail: {
            type: Object,
            required: true
        }
    },
    data() {
        return {
            playshow: false,
        }
    },
    methods: {
        back() {
            
            // this.$parent.refresh = !this.$parent.refresh
            // this.$parent.playcheck = !this.$parent.playcheck
            this.$parent.refresh = true
            this.$parent.playcheck = false
        },
    },
    mounted() {
        this.$refs.autoplaysong.click()
        // console.log(this.$refs.autoplaysong);
    },
    components: {
        PlaySongDetail,
    },
    watch: {
        playSongDetail() {
            console.log('change');
        }
    }
    
}
</script>

<style lang="scss" scoped>
.play-song {
    // z-index: 90;
    height: 100vh;
    background-color: white;
}
</style>