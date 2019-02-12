import Stocks from '../../data/stocks'

const state = {
    stocks : []
};
const mutations = {
    'SET_STOCKS'(state, Stocks) { //ES6 function in object notation
        state.stocks = Stocks;
    },
    'RND_STOCKS' : (state) => {
        state.stocks.forEach(stock => {
            stock.price = Math.round(stock.price * (1 + Math.random() - 0.5));
        });
    }
};
const actions = {
    buyStock : ({commit}, order) =>  {
        commit('BUY_STOCK', order)
    },
    initStocks({commit}) {  
        commit('SET_STOCKS', Stocks);
    },
    randomizeStocks : ({commit}) => {
        commit('RND_STOCKS')
    }
};
const getters = {
    getStocks: state => {
        return state.stocks
    }
}
export default {
    state,
    mutations,
    actions,
    getters
}