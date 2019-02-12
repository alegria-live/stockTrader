<template>
    <div class="col-sm-6 col-md-4">
        <div class="panel panel-info">
            <div class="panel-heading">
                <h3 class="panel-title">
                    {{stock.name}}
                    <small>(Price: {{stock.price}} $ | Quantity: {{stock.quantity}})</small>
                </h3>
            </div>
            <div class="panel-body">
                <div class="pull-left">
                    <input
                    type="number"
                    class="form-control"
                    placeholder="Quantity"
                    :class="{'danger' : inssuficientStocks}"
                    v-model.number="quantity">
                </div>
                <div class="pull-right">
                    <button class="btn btn-info"
                    @click="sell"
                    :disabled="quantity <=0 || !Number.isInteger(quantity) || inssuficientStocks"
                    >{{inssuficientStocks ? 'Out of Range' : 'Sell'}}</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import {mapActions} from 'vuex';
export default {
    props: ['stock'],
    data() {
        return {
            quantity: 0
        }
    },
    computed : {
        inssuficientStocks() {
            return this.quantity > this.stock.quantity
        }
    },
    methods: {
        ...mapActions([
            'sellStock'
        ]),       
        sell() {
            const order = {
                stockId: this.stock.id,
                stockPrice: this.stock.price,
                quantity: this.quantity
            };
            this.sellStock(order)
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


