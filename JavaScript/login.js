function checkUser() {
    //Build object that we are going to store

    let emailid = document.getElementById("mailusrid").value;
    let pwd = document.getElementById("password").value;



    if (localStorage[emailid] === undefined) {//checking User
        //Inform user that they do not have an account
        document.getElementById("Result").innerHTML = "Email not recognized. Do you have an account?";
        document.getElementById("Result").style.display = "block";
        setTimeout(function(){
            document.getElementById("Result").style.display = "none";
            },1000);
        return; //Do nothing else
    }
    else {
        let usrObject = JSON.parse(localStorage[emailid]);
        if ( pwd == usrObject.password) {
            document.getElementById("Result").innerHTML = "<b>Login successful.</b>";
            document.getElementById("Result").style.display = "block";
           // console.log("Login");
           // sessionStorage.loggedInUsrEmail = usrObject.email;
        }
        else {
            document.getElementById("Result").innerHTML = "<b>Incorrect Username or Password.</b>";
            document.getElementById("Result").style.display = "block";
            setTimeout(function(){
                document.getElementById("Result").style.display = "none";
                },1000);
            console.log("Incorrect Password");
        }
    }
}
