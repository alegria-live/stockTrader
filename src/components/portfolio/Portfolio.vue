<template>
<div>
   <app-stock v-for="stock in myStocks" :key="stock.id" :stock="stock" :myCash="myCash"></app-stock>
</div>
</template>
<script>
import appStock from './Stock.vue';
import {mapGetters} from 'vuex'
export default {
    computed: {

        ...mapGetters({
            myStocks : 'stocksPortfolio',
            myCash : 'fund'
        })
        // myStocks() {
        //     return this.$store.getters.stocksPortfolio
        // }
    },
    components : {
        appStock
    }
}
</script>
