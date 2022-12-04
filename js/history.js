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

function getDB_history() {
    var i = 0;
    const userUid = localStorage.getItem('currentUser')
    firebase.database().ref('MyRen/DrivingRecord').once('value').then((snapshot) => {
        var data
        if (snapshot.exists()) {
            snapshot.forEach((childSnapshot) => {
                var accidentType_local = localStorage.getItem('Type')
                var childKey = childSnapshot.key;
                var childData = childSnapshot.val();
                
                if (localStorage.getItem('Type') == '충돌 감지') {
                    if (childData.key == userUid && childData.accidentType == "충돌 감지") {
                        console.log(childData);
                        data = childData;
                        add_tb(data)
                        
                    }
                }
                if (localStorage.getItem('Type') == '직접 신고') {
                    if (childData.key == userUid && childData.accidentType == "가벼운 접촉" ||
                        childData.key == userUid && childData.accidentType == "추돌 • 충돌" ||
                        childData.key == userUid && childData.accidentType == "대인사고") {
                        console.log(childData);
                        data = childData;
                        add_tb(data)
                    }
                }
                if (localStorage.getItem('Type') == '속도 감지') {
                    if (childData.key == userUid && childData.accidentType == "자동차 급정거" ||
                        childData.key == userUid && childData.accidentType == "자동차 급감속" ||
                        childData.key == userUid && childData.accidentType == "자동차 급가속" ||
                        childData.key == userUid && childData.accidentType == "자동차 급출발") {
                        console.log(childData);
                        data = childData;
                    }
                }
            
            });

                
        } 
        
        else {
            console.log("No data available");
        }
    }).catch((error) => {
        console.error(error);
    });
}
var count = 0
function add_tb(data_set){
        var i = 0
        var data = data_set;
		var dbAccidentType = data.accidentType;
        var dbAddress = data.address;
        var dbDate = data.date;
        var dbKey = data.key;
        var dbLatitude = data.latitude;
        var dbLongitude = data.longitude;

        var table = document.getElementById("accidentRecordTable");

        var td1 = document.createElement("td");
        var td2 = document.createElement("td");
        var td3 = document.createElement("td");

        var tr1 = document.createElement("tr");

        //  showMap(36.8522448,127.1502565); 마지막 정보 보여주기

		if(dbAccidentType != undefined){
            var tr2 = document.getElementById(i-1); 
            table.insertBefore(tr1,tr2);
            // table.appendChild(tr1);
            tr1.id = i;
            td1.innerHTML = dbAccidentType;
            td1.style.borderRight = "none"
            td1.style.borderTopLeftRadius = "10px"
            td1.style.borderBottomLeftRadius = "10px"
            td1.style.fontWeight = "bold"
            td1.style.textAlign = "left"
            tr1.appendChild(td1)
            
            td2.innerHTML = dbAddress;  
            td2.style.borderLeft = "none";
            td2.style.borderRight = "none"
            td2.style.fontSize = "13px"
            tr1.appendChild(td2);
            
            td3.innerHTML = dbDate;
            td3.style.borderLeft = "none";
            td3.style.borderTopRightRadius = "10px"
            td3.style.borderBottomRightRadius = "10px"
            td3.style.fontSize = "13px"
            tr1.appendChild(td3);
            i++
            count++
        }
}

// function remove(){
//     var header = document.querySelector("h1");	//제거하고자 하는 엘리먼트
//     var body = document.body;	// 그 엘리먼트의 부모 객체
//     body.removeChild(header);

// }

function menu_select(num) {
    
    if (num == 1) {
        if (count > 0){
            for (var j = 0; j<=count; j++)
                $("#0").remove();
        }
        else{
            $("#table").remove()
        }
        const user_accidentType = "충돌 감지"
        localStorage.setItem('Type', user_accidentType)
        console.clear()
        

    }
    else if (num == 2) {
        if (count > 0){
            for (var j = 0; j<=count; j++)
                $("#0").remove();
        }
        else{
            $("#table").remove()
        }
        const user_accidentType = "직접 신고"
        localStorage.setItem('Type', user_accidentType)
        console.clear()
        
        
    }
    else {
        if (count > 0){
            for (var j = 0; j<=count; j++)
                $("#0").remove();
        }
        else{
            $("#table").remove()
        }
        const user_accidentType = "속도 감지"
        localStorage.setItem('Type', user_accidentType)
        console.clear()
        
    }
    getDB_history()
}


window.onload = function(){
    localStorage.setItem('Type', "충돌 감지")
}
getDB_history();
//div.classList.replace('greeting', 'hello');