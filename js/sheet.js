var name = $("input[id='name']").val();
var sex = $("input[name='sex']").val();
var grade = $("input[name='grade']").val();
var campus = $("input[id='campus']").val();
var college = $("input[id='college']").val();
var phonenumber = $("input[id='phonenumber']").val();
var first_choice = $("input[id='first_choice']").val();
var second_choice = $("input[id='second_choice']").val();
var YorN = $("input[name='YorN']").val();
var time= $("input[id='interviewtime']").val();
var self_introduction = $("input[id='self_introduction']").val();
var numbercheck = 0;
function checkTel() {
    if(phonenumber.toString().length!=11){
        numbercheck=1;
    }
    else {
        alert("请输入电话号码！");
        return false;
    }
}
function postSignup(name, sex, grade, campus, college, phonenumber,first_choice, second_choice, YorN,time,self_introduction) {
    //创建一个XMLHttpRequest 对象
    var xhr = new XMLHttpRequest();
    //准备发送请求的数据：url
    var url = "http://127.0.0.1:5000/query";
    //使用HTTP POST请求与服务器交互数据
    xhr.open("POST", url, true);
    //设置发送数据的请求格式
    xhr.setRequestHeader('content-type', 'application/json');
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 3) {
            // loading();
        } else if (xhr.readyState == 4) {
            // closeLoading();
            //根据服务器的响应内容格式处理响应结果
            if (xhr.getResponseHeader('content-type') === 'application/json') {
                console.log(xhr.responseText);
                var resultJSON = JSON.parse(xhr.responseText);
                if (resultJSON.errcode === 0) {
                    alert("报名成功!");
                    reload();
                }
            } else {
                console.log(xhr.responseText);
                alert("发生错误");
            }
        }
    }

    var sendData = {
        'name': name,
        'sex': sex,
        'grade': grade,
        'campus': campus,
        'college': college,
        'phonenumber': phonenumber,
        'first_choice': first_choice,
        'second_choice': second_choice,
        'YorN':YorN,
        'time':time,
        'self_introduction': self_introduction
    };
    //将用户输入值序列化成字符串
    console.log(JSON.stringify(sendData));
    xhr.send(JSON.stringify(sendData));
}
function submit(){
    if (name === ""||name === null) {
        $("#errname").html("请输入姓名");
        $("#errname").css("color",'red');
    } else if (sex === ""||sex === null) {
        $("#errsex").html("请选择性别");
        $("#errsex").css("color",'red');
    } else if (grade === ""||grade === null) {
        $("#errgrade").html("请选择年级");
        $("#errgrade").css("color",'red');
    } else if (campus === ""||campus === null) {
        $("#errcampus").html("请选择校区");
        $("#errcampus").css("color",'red');
    } else if (college === ""|| college === null) {
        $("#errcollege").html("请选择学院");
        $("#errcollege").css("color",'red');
    } else if (numbercheck===1) {
        $("#errtel").html("请输入11位号码");
        $("#errtel").css("color",'red');
    } else if (numbercheck===0) {
        $("#errtel").html("请输入手机号码");
        $("#errtel").css("color",'red');
    }else if (first_choice === ""||first_choice === null) {
        $("#errchoice_1").html("请选择第一志愿");
        $("#errchoice_1").css("color",'red');
    }else if (second_choice === ""||second_choice === null) {
        $("#errchoice_2").html("请选择第二志愿");
        $("#errchoice_2").css("color",'red');
    }else if (YorN === ""||YorN === null) {
        $("#errjudge").html("请选择是否接受调剂");
        $("#errjudge").css("color",'red');
    }else if (time === ""|| time === null) {
        $("#errtime").html("请选择面试时间");
        $("#errtime").css("color",'red');
    }else if(name === ""||name === null||sex === ""||sex === null||grade === ""||grade === null||campus === ""||campus === null||college === ""|| college === null||numbercheck ===1||numbercheck ===0||first_choice === ""||first_choice === nullsecond_choice === ""||second_choice === nullYorN === ""||YorN === nulltime === ""|| time === null){
        alert("请填写相应项目");
        return;
    }
    else{
        postSignup(name, sex, grade, campus, college, phonenumber,first_choice, second_choice, YorN,time,self_introduction)
    }
}

