<template>
    <div>
        <h1>Trade or View your Portfolio</h1>
        <h6>You may Save and Load your Data</h6>
        <h6>Click on a 'End Day' to begin a New Day!</h6>
        <hr>
        <p>Your Funds: {{fund | currency}}</p>
        <hr>        
    </div>
</template>

<script>
export default {
    computed : {
        fund() {
            return this.$store.getters.fund
        }
    },
    data() {
        return {
      products:[]
    }
  }
}
</script>

