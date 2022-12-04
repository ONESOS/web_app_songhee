const firebaseConfig = {
    apiKey: "AIzaSyBJmNa9uOAhVCCU_J7QP9ouPWNSrSpB6EY",
    authDomain: "myren-5a547.firebaseapp.com",
    databaseURL: "https://myren-5a547-default-rtdb.firebaseio.com",
    projectId: "myren-5a547",
    storageBucket: "myren-5a547.appspot.com",
    messagingSenderId: "789517072518",
    appId: "1:789517072518:web:a66e632d485fb5d8cd7907",
    measurementId: "G-LK0MPPR0X0"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);


function getDB(){
    // const dbRef = firebase.database().ref();
    const userUid=localStorage.getItem('currentUser')
    console.log(userUid);
    firebase.database().ref('MyRen/UserAccount/' + userUid).once('value').then((snapshot) => {
        if (snapshot.exists()) {
            console.log(snapshot.val());
            //console.log(snapshot);
        } else {
            console.log("No data available");
        }
    }).catch((error) => {
        console.error(error);
    });

}

getDB();