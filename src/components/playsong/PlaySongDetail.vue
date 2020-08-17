<template>
    <div class="play-song-detail">
        <div class="play-song-detail-header d-flex jc-center flex-wrap">
            <h4 class="text-primary my-0">{{ pagedetaillist.name }}</h4>
            <span class="w100 text-center my-3">{{ pagedetaillist.singer[0].name }}</span>
        </div>
        
        <div class="play-song-detail-lyric px-5">
            <span>
                <pre class="text-center text-gray2">{{ pagedetaillist.lyric }}</pre>
            </span>
        </div>
        
    </div>
</template>

<script>
export default {
    data() {
        return {
            pagedetaillist: ''
        }
        
    },
    methods: {
        async getPageList()  {
            this.pagedetaillist = this.$parent.playSongDetail
            await this.getSongLyric()
            this.$forceUpdate()
            console.log(this.pagedetaillist);
        },
        async getSongLyric() {
            const res = await this.$http.get('/lyric', {params:{'songmid': this.pagedetaillist.mid}})
            // console.log(res);
            let data = res.data.data.lyric.replace(/\[(.+?)\]/g, "")
            // console.log(data);
            // this.pagedetaillist.lyric = res.data.data.lyric
            this.pagedetaillist.lyric = data
        }
    },
    watch: {
        '$parent.playSongDetail': 'getPageList'
    }
}
</script>
<style lang="scss" scoped>
.play-song-detail-lyric {
    // height: 100vh;
    pre {
        height: 70vh;
        overflow: scroll;
    }
}
</style>