<template>
    <div class="searcher">
        <div class="searcher-div d-flex mx-4 py-3">
            <span class="searcher-div-span pl-2"></span>
            <input 
                type="text"
                class="sercher-input w100 ml-3"
                v-model="input"
                :placeholder="placeholder"
            >
            <span class="searcher-div-span-last" @click="clearInput" v-show="input"></span>
        </div>
        <div class="search-result d-flex mx-4"  v-show="input">
            <ul>
                <li
                v-for=" song of searcheResultList"
                :key="song.id"
                class="my-3"
                @click="searcherDetail(song)"
                >
                    <span class="search-result-span text-gray1">
                        {{ song.name }}:  {{ song.singer }}
                    </span>
                </li>
            </ul>
        </div>
        
    </div>
</template>
<script>
export default {
    props: {
        searcheResultList: {
            type: Array,
            required: true
        }
    },
    data() {
        return {
            input: '',
            placeholder: '搜索歌曲',
            timer: null
        }
    },
    methods: {
        clearInput() {
            this.input = null;
        },
        searcherDetail(item) {
            this.$parent.fetchPlaySong(item)
        }
        
    },
    watch: {
        input(val) {
            if(val){
                if(this.timer){clearTimeout(this.timer);}
                this.timer = setTimeout(() => {
                    let params = {
                        'key': val
                    }
                    this.$emit('search-input', params)
                }, 500)
            }
        }
    },
    // mounted() {
        
    //     this.$on("userDefinedEvent", function(msg){
    //         console.log(this.$on);
    //         this.input = msg
    //     })
    // }
}
</script>

<style lang="scss" scoped>
.searcher-div-span::before {
    content: '🔍';
}
.searcher-div-span-last::after {
    content: '❌';
}
.searcher-div {
    background-color: rgb(250, 250, 249);
    border-radius: 5px;
}
.search-result {
    background-color: rgb(250, 250, 249);
}
.sercher-input{
    border: none;
    background-color: transparent;
}
.search-result-span::before {
    content: '🎵';
}
</style>