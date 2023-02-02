

import { dev, browser } from '$app/environment'

import { initializeApp } from 'firebase/app'
import { getAnalytics, type Analytics } from 'firebase/analytics'
import { getPerformance, type FirebasePerformance } from 'firebase/performance'
import { getDatabase, type Database } from 'firebase/database';

const firebaseConfig = {
    apiKey: 'AIzaSyD6UE0Cl-NNsveeBrAFYFMNHTYbrL41Ir8',
    authDomain: 'wingstako-dev-blog.firebaseapp.com',
    projectId: 'wingstako-dev-blog',
    storageBucket: 'wingstako-dev-blog.appspot.com',
    messagingSenderId: '738823241655',
    appId: '1:738823241655:web:d4e230f5e1bc54213bb232',
    measurementId: 'G-XXEDEX1PTF'
}

export let analytics: Analytics;
export let performance: FirebasePerformance;
export let database: Database;
export const initializeFirebase = () => {

    const app = initializeApp(firebaseConfig)

    database = getDatabase(app)
    if (!dev && browser) {
        analytics = getAnalytics(app)
        performance = getPerformance(app)
    }
}


