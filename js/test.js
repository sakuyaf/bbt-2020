function scale(){
    var webwidth = 540;
    var screenwidth = window.screen.width;
    rate = screenwidth / webwidth;
    if (screenwidth){
        document.getElementById('meta')[name = "viewport"].content = "width=device-width,height=device-height,initial-scale=" + rate + ",maximum-scale=3.0,user-scalable=no"
    }
}