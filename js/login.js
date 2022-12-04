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

firebase.initializeApp(firebaseConfig);

//로그인 함수
function login(){
    var user_email = $('#email_login_input').val();
    var user_password = $('#password_login_input').val();

    firebase.auth().signInWithEmailAndPassword(user_email, user_password).then((result) => {
        const user = firebase.auth().currentUser;
        if (user) {
            const uid = user.uid;
            localStorage.setItem('currentUser',uid);
            window.location.href = 'mypage.html';
        } else {
        }
    }).catch((error) => {
        alert("로그인 오류입니다. 이메일과 비밀번호를 확인하세요.");
    });
}

$('#login_btn').click(function () { //로그인 버튼 클릭 시
    login();
});
   

$("#password_login_input").keypress(function (e) { //엔터 입력시
    if (e.keyCode === 13) {
        login();
    }
});


// 이건 나중에

// var user = firebase.auth().currentUser;

// function UserCheck() {
//     firebase.auth().onAuthStateChanged((user) => {
//         if (user) {
//             var uid = user.uid;

//             if (uid != "") {
//                 window.location.href = "Main.html";
//             }
//         }
//     });
// } 

