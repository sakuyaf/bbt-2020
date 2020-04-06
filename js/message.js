function sendMes() {
    var name = document.getElementById('name').value;
    var sex = document.getElementById('sex').value;
    var grade = document.getElementById('grade').value;
    var campus = document.getElementById('campus').value;
    var college = document.getElementById('college').value;
    var academy = document.getElementById('academy').value;
    var phonenumber = document.getElementById('phonenumber').value;
    var dept = document.getElementById('dept').value;
    var YorN = document.getElementById('YorN').value;
    var interviewtime = document.getElementById('interviewtime').value;
    var self_introduction = document.getElementById('self_introduction').value;

    var data = {'name':name,'sex':sex,'grade':grade,'campus':campus,'college':college,'academy':academy,'phonenumber':phonenumber,'dept':dept,'YorN':YorN,'interviewtime':interviewtime,'self_introduction':self_introduction}

    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open('POST', '   ', true);
    xmlhttp.setRequestHeader('Content-type', 'application/json');
    xmlhttp.send(JSON.stringify(data));
    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            var response = xmlhttp.responseText;
            var RESPONSE = JSON.parse(response);
            var errcode = RESPONSE['errcode'];
            var errmsg = RESPONSE['errmsg'];
            if (errcode == 0) {
                document.getElementById('ccc').innerHTML = errmsg;
            } else {
                document.getElementById('ccc').innerHTML = errmsg;
            }
        } else {
            document.getElementById('uWarn').innerHTML = '请求失败';
        }
    }
}