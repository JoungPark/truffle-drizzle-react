import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

// import drizzle functions and contract artifact
import { Drizzle, generateStore } from "drizzle";
import MyStringStore from "./contracts/MyStringStore.json";

// let drizzle know what contracts we want and how to access our test blockchain
const options = {
  contracts: [MyStringStore],
  web3: {
    fallback: {
      type: "ws",
      url: "ws://127.0.0.1:9545",
    },
  },
};

// setup the drizzle store and drizzle
const drizzle = new Drizzle(options);
console.log(options, drizzle)

ReactDOM.render(<App drizzle={drizzle} />, document.getElementById('root'));