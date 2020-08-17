<template>
    <div class="recommand-detail pos-a left-0 top-0 right-0 bottom-0">
        <detail-list
        v-if="refresh"
        :recommand-detail-lists="recommandDetailLists"
        @play-item="fetchPlaySong"
        />
        <!-- <h2>{{ playcheck }}</h2> -->
         <play-song v-if="playcheck" :play-songsrc="playSongsrc" :play-song-detail="playSongDetail"/>
    </div>
</template>
<script>

import DetailList from '@/components/main/details/DetailList'
import PlaySong from '@/components/main/PlaySong'
export default {
    components: {
        DetailList,
        PlaySong,
    },
    data() {
        return {
            recommandDetailLists: [],
            refresh: false,
            playcheck: false,
            playSongmsrc: '',
            playSongDetail: {},
        }
    },
    methods: {
        async fetchRecommandDetail(param) {
            const res = await this.$http.get('/songlist', {params: param})
            // console.log(res);
            this.recommandDetailLists.title = this.$route.query.title
            this.recommandDetailLists.songlist = res.data.data.songlist
            this.recommandDetailLists.img = res.data.data.dir_pic_url2
            this.refresh = true
        },
        async fetchPlaySong(val) {
            //歌曲链接
            const res =await this.$http.get('/song/urls', {params: {"id": val.songmid}})
            let a = Object.values(res.data.data)
            this.playSongsrc =a[0] 
            // console.log(res.data.data);
            this.playcheck = true
            this.refresh = false

            //歌曲详细信息
            const res1 =await this.$http.get('/song', {params: {"songmid": val.songmid}})
            // console.log(res1.data.data);
            this.playSongDetail = res1.data.data.track_info
        }
    },
    created() {
        // console.log(this.$route.query.title);
        this.fetchRecommandDetail(this.$route.params)
    },
}
</script>

<style lang="scss" scoped>
.recommand-detail {
    z-index: 100;
    background-color: white;
}
</style>