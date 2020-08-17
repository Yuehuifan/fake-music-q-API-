<template>
    <div class="singer">
        <singer-category
        :singer-category="singerCategory"
        @category-click="fetchSingetList"
        />
        <singer-list
        :singer-list="singerList"
        />
        <router-view/>
    </div>
</template>

<script>
import SingerCategory from '@/components/singer/SingerCategory'
import SingerList from '@/components/singer/SingerList'

export default {
    data() {
        return {
            singerCategory: {},
            singerList: [],
        }
    },
    methods: {
        //获取歌手种类
        async fetchSingerCategory(){
            const { data: { data: category } } = await this.$http.get('/singer/category')
            this.singerCategory = {
                sex: category.sex,
                area: category.area,
                genre:category.genre
            }
        },
        //获取歌手列表
        async fetchSingetList(params) {
            const res = await this.$http.get('/singer/list', { params })
            this.singerList = res.data.data.list
        }
    },
    created() {
        this.fetchSingerCategory()
        this.fetchSingetList()
    },
    components: {
        SingerCategory,
        SingerList
    }
}
</script>