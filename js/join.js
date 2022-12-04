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
    
function writeUserData(car_number, car_name, car_displacement, user_email,
                        car_fuel, user_id, company, user_name, user_other_phone_number,
                        user_password){
    firebase.database().ref('MyRen/UserAccount/' + user_id).set({
        carNumber: car_number,
        carType: car_name,
        displacement: car_displacement,
        emailId: user_email,
        fuel: car_fuel,
        idToken: user_id,
        insuranceCompany: company,
        name: user_name,
        parentPhoneNumber: user_other_phone_number,
        password: user_password,
    });
    location.href("login.html") 
    
}

const userInfo = {
    car_number: "car_number",
    car_name: "car_name",
    car_displacement: "car_displacement",
    user_email: "user_email",
    car_fuel: "car_fuel",
    user_id: "user_id",
    company: "company",
    user_name: "user_name",
    user_other_phone_number: "user_other_phone_number",
    user_password: "user_password",
}

    $('#register1').click(function () { //user auth 생성

        var email = $('#email_input').val();
        var password = $('#password_input').val();

        var email_2 = document.getElementById("email_input");
        var password_2 = document.getElementById("password_input");
        var password_confirm_2 = document.getElementById("password_confirm_input");
        
        function email_check(email) {
            var reg = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
            return reg.test(email);

        }

        if(email_2.value == ""){
            alert("이메일 주소를 입력하세요.");
            email_input.focus()
            return false;
        }

        else{
            if(!email_check(email_2.value)){
                alert("이메일 형식이 맞지않습니다.");
                return false;
            }
        }

        if(password_2.value == ""){
            alert("비밀번호를 입력하세요.");
            password_input1.focus()
            return false;
        }
        
        if(password_2.value != password_confirm_2.value){
            alert("비밀번호가 같지 않습니다.");
            password_input2.focus()
            return false;
        }
        firebase.auth().createUserWithEmailAndPassword(email, password).then((result) => {
				console.log("성공");
                const user = firebase.auth().currentUser;
                userInfo.user_email = email;
                userInfo.user_password = password;
                userInfo.user_id = user.uid;

                console.log(userInfo);
                localStorage.setItem("user-info", JSON.stringify(userInfo));
                location.href= "join2.html";

			}).catch((result) => {
				alert("이메일 중복입니다. 다른 이메일을 입력하세요.");
			});
                
        
    });

// function local_get(){
    
// }

    $('#register2').click(function () { //join2 회원가입
    const { user_email, user_id, user_password} = JSON.parse(localStorage.getItem("user-info"));
        localStorage.removeItem("user-info");
        //console.log(user_email, user_id, user_password);

        var user_name = $('#name_input').val();
        var user_other_phone_number = $('#other_phone_number_input').val();
        var car_number = $('#car_number_input').val();
        var company = $('#company_select').val();

        var user_name2 = document.getElementById("name_input");
        var user_other_phone_number2 = document.getElementById("other_phone_number_input");
        var car_number2 = document.getElementById("car_number_input");
        var company2 = document.getElementById("company_select");

        console.log(user_name, user_other_phone_number, car_number, company);

        if(user_name2.value == ""){
            alert("이름을 입력하세요.");
            name_input.focus()
            return false;
        }

        if(user_other_phone_number2.value == ""){
            alert("보호자 연락처를 입력하세요.");
            other_phone_number_input.focus()
            return false;
        }

        if(car_number2.value == ""){
            alert("차량번호를 입력하세요.");
            car_number_input.focus()
            return false;
        }

        if(company2.value == "none"){
            alert("보험회사를 선택하세요.");
            company_select.focus()
            return false;
        }

        if(user_name2.value != "" && user_other_phone_number2.value != "" && 
            car_number2.value != "" && company2.value != "none"){
                alert("성공");
                userInfo.user_email = user_email;
                userInfo.user_id = user_id;
                userInfo.user_password = user_password;
                userInfo.user_name = user_name;
                userInfo.user_other_phone_number = user_other_phone_number;
                userInfo.car_number = car_number;
                userInfo.company = company;
                console.log(userInfo);
                localStorage.setItem("user-info", JSON.stringify(userInfo));
                location.href="join3.html";
            }
        
    });

    $('#register3').click(function () { //join3 회원가입
        const { user_email, user_id, user_password,
            user_name, user_other_phone_number, car_number, company} = JSON.parse(localStorage.getItem("user-info"));
        localStorage.removeItem("user-info");

        var car_name = $('#car_name_input').val();
        var car_fuel = $('#car_fuel_select').val();
        var car_displacement = $('#car_displacement_select').val();

        var car_name2 = document.getElementById("car_name_input");
        var car_fuel2 = document.getElementById("car_fuel_select");
        var car_displacement2 = document.getElementById("car_displacement_select");

        if(car_name2.value == ""){
            alert("차량명을 입력하세요.");
            car_name2.focus()
            return false;
        }

        if(car_fuel2.value == "none"){
            alert("차량유종을 선택하세요.");
            car_fuel_select.focus()
            return false;
        }

        if(car_displacement2.value == "none"){
            alert("차량형태를 선택하세요.");
            car_displacement_select.focus()
            return false;
        }

        if(car_name2.value != "" && car_fuel2.value != "none" && car_displacement2.value != "none"){
                userInfo.user_email = user_email;
                userInfo.user_id = user_id;
                userInfo.user_password = user_password;
                userInfo.user_name = user_name;
                userInfo.user_other_phone_number = user_other_phone_number;
                userInfo.car_number = car_number;
                userInfo.company = company;
                userInfo.car_name = car_name;
                userInfo.car_fuel = car_fuel;
                userInfo.car_displacement = car_displacement;
                console.log(userInfo);

                console.log("car number = " + car_number, "car name = " + car_name, "car displacement = " + car_displacement,
                "user email = " + user_email, "car fuel = " + car_fuel, "user id = " + user_id, "company = " + company, 
                "user name = " + user_name, "user_other_phone_number = " + user_other_phone_number, "user password " + user_password);

                 writeUserData(userInfo.car_number, car_name, userInfo.car_displacement, userInfo.user_email,
                    userInfo.car_fuel, userInfo.user_id, userInfo.company, userInfo.user_name, userInfo.user_other_phone_number,
                    userInfo.user_password);
                location.href="login.html"
            }
        
    });
