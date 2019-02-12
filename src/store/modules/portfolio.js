const state = {
    fund: 40000,
    myStocks : []
};
const mutations = {
    'BUY_STOCK'(state, {stockId, quantity, stockPrice}) {
        const record = state.myStocks.find(elem => {
            return elem.id == stockId
        });
        if(record) {
            record.quantity += quantity
        } else {
            state.myStocks.push({
                id: stockId,
                quantity: quantity
            });
        }
        state.fund -= stockPrice * quantity;
    },
    'SELL_STOCK'(state, {stockId, quantity, stockPrice}) {
        const record = state.myStocks.find(elem => elem.id == stockId);
        if(record.quantity > quantity) {
            record.quantity -= quantity
        } else {
            state.myStocks.splice(state.myStocks.indexOf(record), 1);
        }
        state.fund += stockPrice * quantity;
    },
    'LOAD_USER_STATE'(state, {myStocks, fund, stocks}) {
        state.myStocks = myStocks;
        state.fund = fund;       
    }
};
const actions = {
    sellStock({commit}, order) {
        commit('SELL_STOCK', order)
    }    
};
const getters = {
    stocksPortfolio(state, getters) { //getters to gettersy ze store, tutaj odpalamy getStocks by z niego wyciągnąć obiekt i z niego name i price
        return state.myStocks.map(stock => {
            const record = getters.getStocks.find(elem => elem.id == stock.id);           
            return {
                id: stock.id,
                quantity: stock.quantity,
                name: record.name,
                price: record.price
            }
        })
    },
    fund(state) {
        return state.fund;
    },
    portfolio(state) {
        return state.myStocks;
    }
};
export default {
    state,
    mutations,
    actions,
    getters
}