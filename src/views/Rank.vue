<template>
    <div class="rank">
        <rank-list
        :rank-list="rankList"
        />
        <router-view/>
        
    </div>
</template>

<script>
import RankList from '@/components/rank/RankList'

export default {
    data() {
        return {
            rankList: [],
        }
    },
    methods: {
        async fetchRankList() {
            const res = await this.$http.get('/top/category', { params: { showDetail: 1 } })
            this.rankList = res.data.data.reduce((total,item)=> total.concat(item.list), []);
            // console.log(res);
        }
    },
    created() {
        this.fetchRankList();
    },
    components: {
        RankList
    }
}
</script>