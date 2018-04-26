import firebase from 'firebase'

// const config = {
//   apiKey: 'AIzaSyCkdoXv3kbMlGUWc7uudukzmz97BWUpU4o',
//   authDomain: 'kanban-878bb.firebaseapp.com',
//   databaseURL: 'https://kanban-878bb.firebaseio.com',
//   projectId: 'kanban-878bb',
//   storageBucket: 'kanban-878bb.appspot.com',
//   messagingSenderId: '934307208134',
// };

const config = {
  apiKey: 'AIzaSyBqyuyv9cLau8z4pv6U_FDJvf2sR11PlDc',
  databaseURL: 'https://progressive-tamvan.firebaseio.com',
  projectId: 'progressive-tamvan'
}

firebase.initializeApp(config)
export const db = firebase.database()
