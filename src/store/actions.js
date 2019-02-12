import {storeBus} from './storeBus';
import {AnonymousCredential} from 'mongodb-stitch-browser-sdk';
const {client, db, objectId} = storeBus;

export const loadDataDb = ({commit}) => {
    client.auth.loginWithCredential(new AnonymousCredential())
    .then(()=> db.collection('portfolio').find({_id: objectId}).toArray())
    .then(res => {
        if(res.length) {           
            commit('LOAD_USER_STATE', res[0]);
            commit('SET_STOCKS', res[0].stocks)
        } else {
            console.log("Data not found")
        }        
    }).catch(err => {console.log(err)});        
};
export const saveDataDb = (context, data) => {   
    client.auth.loginWithCredential(new AnonymousCredential())
    .then((user)=> db.collection('portfolio').updateOne({_id: objectId}, data, {upsert: true}))
    .catch(err => {console.log(err)});
}
