<template>
    <div class="col-sm-6 col-md-4">
        <div class="panel panel-success">
            <div class="panel-heading">
                <h3 class="panel-title">
                    {{stock.name}}
                    <small>(Price: {{stock.price}} $)</small>
                </h3>
            </div>
            <div class="panel-body">
                <div class="pull-left">
                    <input
                    type="number"
                    class="form-control"
                    placeholder="Quantity"
                    :class="{'danger': insufficientFunds}"
                    v-model.number="quantity">
                </div>
                <div class="pull-right">
                    <button class="btn btn-success" 
                    @click="buyStock"
                    :disabled="quantity <=0 || !Number.isInteger(quantity) || insufficientFunds"
                    >{{ insufficientFunds ? 'Out of Funds' : 'Buy' }}</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ['stock'],
    data() {
        return {
            quantity: 0
        }
    },
    computed : {
        fund() {return this.$store.getters.fund},

        insufficientFunds() {
            return this.quantity * this.stock.price > this.fund
        }
    },
    methods: {
        buyStock() {
            const order = {
                stockId: this.stock.id,
                stockPrice: this.stock.price,
                quantity: this.quantity
            };
            this.$store.dispatch('buyStock', order);       
            this.quantity = 0;
        }
    }
}
</script>
<style scoped>
    .danger {
        border: 1px solid red;
    }
</style>

