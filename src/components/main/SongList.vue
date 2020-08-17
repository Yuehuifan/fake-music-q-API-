<template>
    <div class="recommand-song" v-show="checkSonglist">
        <ul class="pt-3 pl-4"  v-if="recommandSong.length" >
            <li
            class="d-flex pb-3"
            v-for="item of recommandSong"
            :key="item.id"
            @click="showDetails(item)"
            >
                <img :src="item.img" width="60" height="60">
                <div class="d-flex flex-wrap ai-center pl-3">
                    <span 
                    class="title text-gray2 w100">
                    {{item.title}}</span>
                    <span 
                    class="info text-gray1">
                    {{item.info}}</span>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    data() {
        return {
            checkSonglist: false
        }
    },
    props: {
        recommandSong: {
            type: Array,
            required: true,
        }
    },
    methods: {
        showDetails(item) {
            this.$router.push({path:`/recommand/${item.id}`, query: {title: item.title}})
        },
        changeShow() {
            this.checkSonglist = !this.checkSonglist
        }
    },
    created() {
        //防止在详情界面刷新
        if(this.$route.path=='/recommand'){
            this.checkSonglist = true
        }
    },
    watch: {
        // '$route':'changeShow'
        $route(to,from) {
            if(to.path.search("recommand")==1){
                if(from.path.search("recommand")==1) {
                    this.changeShow()
                }
            }
        }
    }
}
</script>