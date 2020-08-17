<template>
    <div class="rank-list" v-show="checkRank">
        <div
        v-for="rank of rankList"
        :key="rank.topId"
        class="d-flex mx-4 my-3 shadow"
        @click="rankDetail(rank)"
        >
            <img :src="rank.picUrl" width="100" height="100">
            <ul class="d-flex flex-wrap text-gray1 text-xs p-3">
                <li
                v-for="(song, index) of rank.song"
                :key="index"
                class="w100"
                >{{ ++index }}. {{ song.title }}</li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            checkRank: false
        }
    },
    props: {
        rankList: {
            type: Array,
            required: true
        }
    },
    methods: {
        rankDetail(item) {
            // console.log(item);
            this.$router.push({path:`/rank/${item.topId}`, query: {title: item.label, img: item.picUrl}})
        },
        changeRank() {
            this.checkRank = !this.checkRank
        }
    },
    watch: {
        // '$route':'changeRank'
        $route(to,from) {
            if(to.path.search("rank")==1){
                if(from.path.search("rank")==1) {
                    this.changeRank()
                }
            }
        }
        
    },
    created() {
        //防止在详情界面刷新
        if(this.$route.path=='/rank'){
            this.checkRank = true
        }
    },
}
</script>