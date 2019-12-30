<template>
    <div>
        <h1>计数器：{{$store.state.count}}</h1>
        <h1>{{count}}</h1>
        <button @click="$store.commit('add', 10)">增加</button>
        <button @click="reduce">减少</button>
        <p>
            <button @click="addAction">+</button>
            <button @click="reduceAction">-</button>
        </p>
    </div>
</template>

<script>
import store from '@/vuex/store'
import {mapState, mapMutations, mapGetters, mapActions} from 'vuex'
export default {
    data(){
        return {};
    },
    store,
    // 第一种方法
    // computed: {
    //     count(){
    //         return this.$store.state.count;
    //     }
    // }

    // 第二种方法
    // computed:mapState({
    //     count:state=>state.count
    // })

    // 第三种方法
    computed:{
        ...mapState(['count']),
        ...mapGetters(['count'])
    },
    methods: {
        ...mapMutations(['add', 'reduce']),
        ...mapActions(['addAction', 'reduceAction'])
    }
}
</script>

<style scoped>

</style>
