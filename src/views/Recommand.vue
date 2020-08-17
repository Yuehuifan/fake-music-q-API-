<template>
    <div class="scroll-wrapper">
        <!-- my - swiper -->
        <my-swiper
            :swiper-list="swiperList"
            :swiper-options="swiperOptions" 
            
        />

        <!-- song - list -->
        <song-list
            :recommand-song="recommandSong"    
        />
        <router-view/>
    </div>
</template>

<script>
import MySwiper from '@/components/main/MySwiper'
import SongList from '@/components/main/SongList'


export default {
    data() {
        return {
            swiperList: [],
            swiperOptions: {
                pagination: {
                    el: '.swiper-pagination'
                },
                loop:true, //循环
                autoplay: true,
                effect : 'cube',
            },
            recommandSong: [],
        }
    },
    methods: {
        // //滚动条刷新
        // scrollRefresh() {
        //     this.$refs.scroll.refresh();
        // },
        //获取轮播图图片
        async fetchSwiperList() {
            const res = await this.$http.get('/recommend/banner');
            this.swiperList = res.data.data.map(item => ({img: item.picUrl}))
        },
        //获取按分类推荐歌单
        async fetchRecommandSong() {
            const res = await this.$http.get('/recommend/playlist')
            this.recommandSong = res.data.data.list.map(item => ({
                id: item.tid,
                img: item.cover_url_small,
                title: item.title,
                info: item.creator_info.nick
            }))
        }
    },
    created() {
        this.fetchSwiperList()
        this.fetchRecommandSong()
    },
    components: {
        MySwiper,
        SongList
    }
}
</script>