/*$(document).ready(function () {*/
window.onload = init;

function init() {
    let $ = function (id) {//方便按id提取
        return document.getElementById(id);
    };
    let zdivs = new Array();//存放id
    let zdivs1 = new Array("西安", "嘉峪关", "吐鲁番", "楼兰", "印度", "巴格达", "埃及");//存放地址
    //存放对应地址的链接
    let zdivs2 = new Array("#","#","#","#","#","index/hitgold/hitgold2.html","index/aiji/aiji.html");
    let xiaoren = $("xiaoren");
    let kuang = $("kuang");
    let jieshao = $("jieshao");
    let pp = true;
    let dd = true;
    //let cc = true;
    let GoTime;
    getimg();
    peng();


    function getimg() {
        //console.log("getimg");
        let bageda = $("bageda");
        let xian = $("xian");
        let tulufan = $("tulufan");
        let aiji = $("aiji");
        let jiayuguan = $("jiayuguan");
        let yindu = $("yindu");
        let loulan = $("loulan");
        zdivs[zdivs.length] = xian;
        zdivs[zdivs.length] = jiayuguan;
        zdivs[zdivs.length] = tulufan;
        zdivs[zdivs.length] = loulan;
        zdivs[zdivs.length] = yindu;
        zdivs[zdivs.length] = bageda;
        zdivs[zdivs.length] = aiji;
    };

    /*$(document).keydown(function (event) {*/
    document.onkeydown = function keydownEvent(e) {
        e = e || event;
        let keyNum = e.keyCode;   //获取键值

        //要移动的元素
        // xiaoren.css({position:'relative'});  //设置position

        switch (keyNum) {  //判断按键
            case 37:
                //console.log(zdivs2[2]);
                xiaoren.style.left = xiaoren.offsetLeft - 60 + "px";
                xiaoren.src = "map/left.png";
                break;
            case 38:
                xiaoren.style.top = xiaoren.offsetTop - 60 + "px";
                xiaoren.src = "map/back.png";
                break;
            case 39:
                xiaoren.style.left = xiaoren.offsetLeft + 60 + "px";
                xiaoren.src = "map/right.png";
                break;
            case 40 :
                xiaoren.style.top = xiaoren.offsetTop + 60 + "px";
                xiaoren.src = "map/front.png";
                break;
            case 13:
                for (let i = 0; i < zdivs.length; i++) {
                    let ii = checkIsP(xiaoren, zdivs[i]);
                    if (ii != 0) {
                            let newhref = zdivs2[i];
                        //window.location.href=newhref;
                        window.open(newhref);
                        break;
                    }
                }
                break;
            default:
                break;
        }

    };

    function peng() {
        for (let i = 0; i < zdivs.length; i++) {
            let imgleft = xiaoren.offsetLeft + xiaoren.offsetWidth;
            let imgtop = xiaoren.offsetTop - kuang.offsetHeight;
            let io = checkIsP(xiaoren, zdivs[i]);
            if (io != 0) {
                    zdivs[i].style.transform="scale(1.2)";
                    zdivs[i].style.MozTransform="scale(1.2)";
                    jieshao.style.display = "block";
                    jieshao.innerHTML = zdivs1[i];
                    jieshao.style.left = zdivs[i].offsetLeft;
                    jieshao.style.top = zdivs[i].offsetTop - jieshao.offsetHeight;

                kuang.style.display = "block";
                kuang.style.left = imgleft;
                kuang.style.top = imgtop;
                break;
            }
            else {
        
                jieshao.style.display="none";
                kuang.style.display = "none";
                zdivs[i].style.transform="scale(1)";
                zdivs[i].style.MozTransform="scale(1)";
             
                    jieshao.innerHTML = "";
              
            }
        }
        clearTimeout(GoTime);
        GoTime = setTimeout(function () {
            peng();
        }, 0);
    };

    function checkIsP(xiaoren, imgT) {//节流1！！1
        let people = {//qiu
            x: xiaoren.offsetLeft,
            y: xiaoren.offsetTop,
            x1: xiaoren.offsetLeft + xiaoren.offsetWidth,
            y1: xiaoren.offsetTop + xiaoren.offsetHeight
        }
        let Img = {//
            x: imgT.offsetLeft + 40,
            y: imgT.offsetTop + 140,
            x1: imgT.offsetLeft + imgT.offsetWidth / 2 + 40,
            y1: imgT.offsetTop + imgT.offsetHeight / 2 + 80
        }

        if (
            people.x1 >= Img.x && people.x <= Img.x1 && 
            people.y1  >= Img.y && people.y <= Img.y1) {//两者有交集
            //console.log("peng");
            return 1;
        } else {
            return 0;
        }
    };
};//checkIsP();
