<template>
    <div class="singer-list" v-show="checksinger">
        <ul
        class="pl-3"
        v-for="(singer) of singerList"
        :key="singer.singer_id"
        >
            <li class="d-flex ai-center py-3" @click="singerDetail(singer)">
                <img :src="singer.singer_pic"
                style="border-radius: 50%; width:60px;"
                >
                <span class="px-3 text-gray2">
                    {{ singer.singer_name }}
                </span>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    data() {
        return {
            checksinger: false
        }
    },
    props: {
        singerList: {
            type: Array,
            required: true
        }
    },
    methods: {
        singerDetail(item) {
            this.$router.push({path:`/singer/${item.singer_mid}`, query: {title: item.singer_name, img: item.singer_pic}})
        },
        changeSinger() {
            this.checksinger = !this.checksinger
        }
    },
    watch: {
        // '$route':'changeSinger'
        $route(to,from) {
            if(to.path.search("singer")==1){
                if(from.path.search("singer")==1) {
                    this.changeSinger()
                }
            } 
        }
    },
    created() {
        //防止在详情界面刷新
        if(this.$route.path=='/singer'){
            this.checksinger = true
        }
    },
}
</script>