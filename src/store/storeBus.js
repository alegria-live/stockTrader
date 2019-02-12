import Vue from "vue";
import _env from '../data/env';
import {Stitch, RemoteMongoClient} from 'mongodb-stitch-browser-sdk';
import {ObjectId} from 'bson';
    const client = Stitch.initializeDefaultAppClient('testowa-ehyqm');
    const db = client.getServiceClient(RemoteMongoClient.factory, 'atlas-testowa').db('StockTrader');
    const objectId = new ObjectId(_env._id);

export const storeBus = new Vue(
    {
        data() {
            return {
                client,
                db,
                objectId               
            }
        }
    }
)