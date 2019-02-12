<template>
    <nav class="navbar navbar-default">
    <div class="container-fluid">     
        <div class="navbar-header">
            <router-link to="/" class="navbar-brand"> Stock Trader</router-link>
        </div>

       <div class="collapse navbar-collapse">
        <ul class="nav navbar-nav">
            <router-link to="/portfolio" activeClass="active" tag="li"><a>Portfolio</a></router-link>
            <router-link to="/stocks" activeClass="active" tag="li"><a>Stocks</a></router-link>
        </ul>
        <strong class="navbar-text navbar-right">Founds: {{fund | currency}}</strong>    
        <ul class="nav navbar-nav navbar-right">
            <li @click.prevent="randomStocks"><a href="#">End Day</a></li>
            <li class="dropdown" :class="{'open': isDropdownOpen}" @click="isDropdownOpen = !isDropdownOpen">
            <a 
                href="#" 
                class="dropdown-toggle"
                data-toggle="dropdown"
                role="button"
                aria-haspopup="true"
                aria-expanded="false">Save & Load <span class="caret"></span></a>
            <ul class="dropdown-menu">
                <li @click="saveData"><a href="#">Save Data</a></li>
                <li @click="loadData"><a href="#">Load Data</a></li>
            </ul>
            </li>
        </ul>
        </div><!-- /.navbar-collapse -->
    </div><!-- /.container-fluid -->
    </nav>
</template>
<script>
    import {mapActions} from 'vuex';
    
export default {
    data() {
        return {
            isDropdownOpen : false
        }
    },
    computed: {
        fund() {
            return this.$store.getters.fund;
        },
        portfolio() {
            return this.$store.getters.portfolio;
        }
    },
    methods : {
        ...mapActions(['randomizeStocks', 'loadDataDb', 'saveDataDb']),

        randomStocks() {
            this.randomizeStocks()
        },
        saveData() {
            const data = { myStocks: this.portfolio, fund: this.fund, stocks: this.$store.getters.getStocks}              
            this.saveDataDb(data)
        },
        loadData() {            
            this.loadDataDb();
        }
    }
}
</script>