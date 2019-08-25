import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import * as firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyAYK-O-5ToiZT8fFdRwEoXa1IUpDzVLhZg",
    authDomain: "fts-project-1999.firebaseapp.com",
    databaseURL: "https://fts-project-1999.firebaseio.com",
    projectId: "fts-project-1999",
    storageBucket: "fts-project-1999.appspot.com",
    messagingSenderId: "1024322500785",
    appId: "1:1024322500785:web:9caa283635acf8fd"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
