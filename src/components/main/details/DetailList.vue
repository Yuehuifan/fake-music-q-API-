<template>
    <div class="detail-list h100" v-show="refresh">
        
        <div class="bg-image w100 h300" :style="`background-image: url(${recommandDetailLists.img})`">
            <div class="detail-header text-center p-3">
                <span class="firstspan text-primary" @click="back"></span>
                <h3 class="mt-0">{{ recommandDetailLists.title }}</h3>
            </div>
            <div class="detail-songlist w100 h100 pos-a pt-3">
                <ul>
                    <li
                    v-for="(item, index) of recommandDetailLists.songlist"
                    :key="index"
                    @click="playSong(item)"
                    >
                    <div class="w100 d-flex flex-wrap px-5 ai-center my-2" style="height:3.2rem;">
                        <!-- <span class="text-size-lg mx-2">{{ index }}</span> -->
                        <span class="secondspan text-primary text-sm w100" v-if="$route.meta.recommand">{{ item.songname }}</span>
                        <span class="secondspan text-primary text-sm w100" v-if="$route.meta.singer">{{ item.name }}</span>
                        <span class="secondspan text-primary text-sm w100" v-if="$route.meta.rank">{{ item.name }}</span>
                        <!-- <br/> -->
                        <span class="text-xs text-gray1">{{ item.singer[0].name }}</span>
                    </div>
                    </li>
                </ul>
            </div>

        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            refresh: true
        }
    },
    props: {
        recommandDetailLists: {
            type: Array,
            required: true,
            default: []
        }
    },
    methods: {
        back() {
            this.$router.back()
        },
        playSong(playItem) {
            this.$emit('play-item', playItem)
        }
    },
}
</script>
<style lang="scss" scoped>
// .detail-list {
//     z-index: 100;
// }
.bg-image {
    background-size: cover;
    .firstspan::after {
        content: '＜';
        font-weight: 900;
    }
    span {
        float: left;
    }
    h3 {
        color: white;
    }
    .detail-songlist{
        top: 300px;
    }
}
.secondspan{
    overflow: hidden;
    text-overflow:ellipsis;
    white-space:nowrap;
}

</style>