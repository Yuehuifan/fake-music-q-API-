<template>
    <div class="search">
        <searcher
        :searche-result-list="searchResult"
        @search-input="fetchSearchQuick"
        v-show="refresh"
        />

        <hot-search
        :hot-search="hotSearch"
        v-show="refresh"
        @userDefinedEvent="changeSearcherInput"
        />

        <search-history v-show="refresh"/>
        <play-song v-if="playcheck" :play-songsrc="playSongsrc" :play-song-detail="playSongDetail"/>
    </div>
</template>
<script>
import Searcher from '@/components/search/Searcher'
import HotSearch from '@/components/search/HotSearch'
import searchHistory from '@/components/search/SearchHistory'
import PlaySong from '@/components/main/PlaySong'
export default {
    data() {
        return {
            searchResult: [],
            hotSearch: [],
            playcheck: false,
            playSongsrc: '',
            refresh: true,
            playSongDetail:{}
        }
    },
    components: {
        Searcher,
        HotSearch,
        searchHistory,
        PlaySong
    },
    methods: {
        async fetchSearchQuick(param) {
            const res = await this.$http.get('/search/quick', { params: param })
            this.searchResult = res.data.data.song.itemlist
        },
        async fetchHotSearch() {
            const res= await this.$http.get('/search/hot')
            this.hotSearch = res.data.data.splice(0,9)
        },
        async fetchPlaySong(val) {
            //歌曲链接
            const res =await this.$http.get('/song/urls', {params: {"id": val.mid}})
            let a = Object.values(res.data.data)
            this.playSongsrc =a[0] 
            
            this.playcheck = true
            this.refresh = false

            //歌曲详细信息
            const res1 =await this.$http.get('/song', {params: {"songmid": val.mid}})
            // console.log(res1.data.data);
            this.playSongDetail = res1.data.data.track_info
        },
        changeSearcherInput(val) {
            //通过子组件二传值给父组件，再由父组件改变子组件的值
            this.$children[0].input =val.k
        }
    },
    created() {
        this.fetchHotSearch();
    }
}
</script>