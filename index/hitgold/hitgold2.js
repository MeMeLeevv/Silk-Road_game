window.onload = init;
function init() {
    let $ = function (id) {//方便按id提取
        return document.getElementById(id);
    };
    let zdivs = new Array();//用于存储所有的砖块。
    let zdivs1 = new Array();
    let maindiv = $("mainDiv");
    /*    let st = document.getElementById("start");*/
    let n = 0;
    let score = document.getElementById("markDiv");
    score.innerHTML = n;
    let run = true;
    let qx = 295;//飞球初始坐标left
    let qy = 570;//飞球初始坐标top
    let jiao = 89;//初始飞行角度
    let qiumoveX = 1.5;//控制left位移的正负
    let qiumoveY = -1.5;//控制top位移的正负
    let bangleft = 225;//取挡板当前的左坐标，就是left距离
    let GoTime = null;//控制游戏进程
    let imgTime = document.getElementsByTagName("img")[2];
    imgTime.style.display = "block";
    let bangtu = true;
    let bom = true;
    let jew = true;

    getBrick();
    bindDom();
    function getBrick() {//布置金币分步状态
        let t1 = 450;
        let lef1 = 240;
        let t2 = 180;
        let lef2 = 100;
        let Qb = 20;//金币长宽
        for (let k = 1; k <= 2; k++) {//爱心
            for (let l = 0; l < 2 * k; l++) {
                let di5 = document.createElement("div");
                di5.style.top = t2 - 160 + (k - 1) * Qb;
                di5.style.left = lef2 - 80 - (k - 1) * Qb + l * Qb;
                di5.style.backgroundImage = "url(images/end.png)";
                maindiv.appendChild(di5);
                zdivs[zdivs.length] = di5;
            }
            for (let m = 0; m < 2 * k; m++) {
                let di6 = document.createElement("div");
                di6.style.top = t2 - 160 + (k - 1) * Qb;
                di6.style.right = lef2 - 78 - (k - 1) * Qb + m * Qb;
                di6.style.backgroundImage = "url(images/end.png)";
                maindiv.appendChild(di6);
                zdivs[zdivs.length] = di6;
            }
        }
        for (let j = 0; j < 3; j++) {//T
            let di4 = document.createElement("div");
            di4.style.top = t2 - 6 * Qb;
            di4.style.left = 500 - 6 * Qb + j * Qb;
            di4.style.backgroundImage = "url(images/end.png)";
            maindiv.appendChild(di4);
            zdivs[zdivs.length] = di4;
        }
        for (let c = 0; c < 2; c++) {
            let di7 = document.createElement("div");
            di7.style.top = t2 - 8 * Qb + c * Qb;
            di7.style.left = 400;
            di7.style.backgroundImage = "url(images/end.png)";
            maindiv.appendChild(di7);
            zdivs[zdivs.length] = di7;
        }

        for (let a = 1; a <= 3; a++) {////  ///  /
            for (let b = 0; b < 2 * a - 1; b++) {
                let di3 = document.createElement("div");
                di3.style.top = t2 - (a + 1) * Qb;//每列向下移动一行
                di3.style.left = 80 - a * Qb + b * Qb;//每列向左移动15，同行的每一个向右移动一个div宽度30
                di3.style.backgroundImage = "url(images/end.png)";
                maindiv.appendChild(di3);//即i控制列的换行，j控制每行的输出这里写了个x,y其实就是从上向下画图时的起点，下面加150，加450等其实是换位置画图的意思，完全可以直接用算好的数字而不用x,y。只为清楚计算过程
                zdivs[zdivs.length] = di3;
            }
        }//for
        for (let d = 1; d <= 2; d++) {/// /
            for (let i = 0; i < 2 * d - 1; i++) {
                let di8 = document.createElement("div");
                di8.style.top = 200 - (d - 1) * Qb;//每列向下移动一行
                di8.style.left = 500 - d * Qb + i * Qb;//每列向左移动15，同行的每一个向右移动一个div宽度30
                di8.style.backgroundImage = "url(images/end.png)";
                maindiv.appendChild(di8);//即i控制列的换行，j控制每行的输出这里写了个x,y其实就是从上向下画图时的起点，下面加150，加450等其实是换位置画图的意思，完全可以直接用算好的数字而不用x,y。只为清楚计算过程
                zdivs[zdivs.length] = di8;
            }
        }
        for (let g = 0; g <= 5; g++) {
            let di1 = document.createElement("div");
            di1.style.top = 350 - Qb * Math.random() + g;
            di1.style.left = 2 * Qb * g;
            di1.style.backgroundImage = "url(images/end.png)";
            maindiv.appendChild(di1);
            zdivs[zdivs.length] = di1;
        }
        for (let e = 1; e <= 3; e++) {
            for (let f = 0; f < e; f++) {/// // /
                let di = document.createElement("div");
                di.style.top = 150 - (e - 1) * Qb;//每列向下移动一行
                di.style.left = 270 - e * (Qb / 2) + f * Qb;//每列向左移动15，同行的每一个向右移动一个div宽度30
                di.style.backgroundImage = "url(images/end.png)";
                maindiv.appendChild(di);//即i控制列的换行，j控制每行的输出这里写了个x,y其实就是从上向下画图时的起点，下面加150，加450等其实是换位置画图的意思，完全可以直接用算好的数字而不用x,y。只为清楚计算过程
                zdivs[zdivs.length] = di;
            }
        }

        for (let h = 0; h < 5; h++) {//lefttop/// // /
            let di2 = document.createElement("div");
            di2.style.top = 80 - 14 * h;
            di2.style.left = 100 - 40 + h * Qb;
            di2.style.backgroundImage = "url(images/end.png)";
            maindiv.appendChild(di2);
            zdivs[zdivs.length] = di2;
        }
        for (let z = 1; z <= 2; z++) {/// /半框
            for (let x = 0; x < 2 * z - 1; x++) {
                let di9 = document.createElement("div");
                di9.style.top = 160 - (z - 1) * Qb;//每列向下移动一行
                di9.style.left = 500 + x * Qb;//每列向左移动15，同行的每一个向右移动一个div宽度30
                di9.style.backgroundImage = "url(images/end.png)";
                maindiv.appendChild(di9);//即i控制列的换行，j控制每行的输出这里写了个x,y其实就是从上向下画图时的起点，下面加150，加450等其实是换位置画图的意思，完全可以直接用算好的数字而不用x,y。只为清楚计算过程
                zdivs[zdivs.length] = di9;
            }
        }



        for (let g1 = 0; g1 <= 5; g1++) {
            let di11 = document.createElement("div");
            di11.style.top = 250 - Qb * Math.random() + g1;
            di11.style.left = 150 + 2 * Qb * g1;
            di11.style.backgroundImage = "url(images/end.png)";
            maindiv.appendChild(di11);
            zdivs1[zdivs1.length] = di11;
        }
        for (let g2 = 0; g2 <= 5; g2++) {
            let di12 = document.createElement("div");
            di12.style.top = 300 - Qb * Math.random() + g2;
            di12.style.left = 250 + 2 * Qb * g2;
            di12.style.backgroundImage = "url(images/end.png)";
            maindiv.appendChild(di12);
            zdivs1[zdivs1.length] = di12;
        }

    }//getBrick();

    go = function () {
        //console.log(zdivs.length);
        let qiu = $("qiuDiv");
        qx = qx + qiumoveX * Math.cos((2 * Math.PI / 360) * jiao);
        qy = qy + qiumoveY * Math.sin((2 * Math.PI / 360) * jiao);
        if (qy >= 570) {
            if (qx + 15 <= bangleft || qx >= bangleft + 150) {//判断是否接住
                let x = null;
                x = setTimeout(function () {//控制小球下到一定地步触发结束页面
                    gameovImgShow();
                    gameOver();
                }, 10);
            }
            else {
                qiumoveY = -1;
                if ((qx - bangleft) >= (75)) {
                    jiao = 90 - (qx - bangleft + 15 - 75) / 75 * 90;//正中心为90度，其他位置按距离差*90度
                    //qiumoveX = 1;
                } else {
                    jiao = 90 - (75 - (qx - bangleft + 15)) / 75 * 90;
                    // qiumoveX = -1;
                }
            }
        }
        else {
            if (qy <= 360) {//x/y都可以减少计算
                for (let i = 0; i < zdivs.length; i++) {
                    let io = checkIsP(qx, qy, zdivs[i].offsetLeft, zdivs[i].offsetTop);
                    if (i === 0) {
                        zdivs[i].style.backgroundImage = "url(images/钻石.png)";
                    }
                    if (jew) {
                        if (i === zdivs.length - 1) {
                            zdivs[i].style.backgroundImage = "url(images/蓝宝石.png)";
                        }
                    }
                    if (io != 0) {
                        zdivs[i].classList.add("fadeout");
                        n += 1;
                        setTimeout(function(){
                            zdivs[i].style.display = "none";
                        },50)
                        //zdivs[i].style.display = "none";
                        if (i === 0) {//直接晋级
                            alert("晋级！");
                            n += 100;
                        }
                        if (jew) {
                            if (i === zdivs.length - 1) {
                                alert("加5分");
                                n += 5;
                                jew = false;
                            }
                        }
                        /*    else {
                                n+=1;
                                console.log(n);
                            }*/
                        score.innerHTML = n;
                        zdivs.splice(i, 1);
                        if (n >= 10) {
                            goodforyImgShow();
                            gameOver();
                            run = false;
                        }
                        if (io == 1) {
                            qiumoveX = 1;
                        }
                        if (io == 2) {
                            qiumoveX = -1;
                        }
                        if (io == 3) {
                            qiumoveY = 1;
                        }
                        if (io == 4) {
                            qiumoveY = -1;
                        }
                        break;//直接跳出for循环
                    }
                }//for

                for (let j = 0; j < zdivs1.length; j++) {
                    let io1 = checkIsP(qx, qy, zdivs1[j].offsetLeft, zdivs1[j].offsetTop);
                    if (j === 0) {
                        zdivs1[j].style.backgroundImage = "url(images/炸弹.png)";
                    }
                    if (bom) {
                        if (j === zdivs1.length - 1) {
                            zdivs1[j].style.backgroundImage = "url(images/红宝石.png)";
                        }
                    }
                    if (io1 != 0) {
                        zdivs1[j].classList.add("fadeout");
                        n += 1;
                        setTimeout(function(){
                            zdivs1[j].style.display = "none";
                        },50)
                        if (bom) {
                            if (j === zdivs1.length - 1) {
                                alert("加5分！");
                                /*gameovImgShow();
                                gameOver();*/
                                n += 5;
                                bom = false;
                            }
                        }
                        if (j === 0) {
                            alert("游戏结束！");
                            let x = null;
                            x = setTimeout(function () {//控制小球下到一定地步触发结束页面
                                gameovImgShow();
                                gameOver();
                            }, 10);
                        }
                    
                        score.innerHTML = n;
                        zdivs1.splice(j, 1);
                        if (n >= 10) {
                            let xy = null;
                            xy = setTimeout(function () {//控制小球下到一定地步触发结束页面
                                gameOver();
                                goodforyImgShow();
                                run = false;
                            }, 10);

                        }
                        if (io1 == 1) {
                            qiumoveX = 1;
                        }
                        if (io1 == 2) {
                            qiumoveX = -1;
                        }
                        if (io1 == 3) {
                            qiumoveY = 1;
                        }
                        if (io1 == 4) {
                            qiumoveY = -1;
                        }
                        break;//直接跳出for循环
                    }
                }//for
            }//减少计算量
            if (qx >= 585) qiumoveX = -1;
            if (qx <= 0) qiumoveX = 1;
            if (qy <= 0) qiumoveY = 1;
        }
        qiu.style.left = qx + "px";
        qiu.style.top = qy + "px";
        GoTime = setTimeout(function () {
            go();
        }, 0);
    } //go();
    function checkIsP(qx, qy, divX, divY) {
        let ball = {//qiu
            x: qx,
            y: qy,
            x1: qx + 15,
            y1: qy + 15
        }
        let Div = {//
            x: divX,
            y: divY,
            x1: divX + 20,
            y1: divY + 20
        }
        let Xer;
        let Yer;
        Xer = ball.x >= Div.x ? ball.x : Div.x;//哪个横轴最大
        Yer = ball.y >= Div.y ? ball.y : Div.y;//哪个纵轴最大
        if (Xer >= ball.x && Xer <= ball.x1 && Yer >= ball.y && Yer <= ball.y1 && Xer >= Div.x && Xer <= Div.x1 && Yer >= Div.y && Yer <= Div.y1) {//两者有交集

            return LenthSmaller(Math.abs(ball.x - Div.x1), Math.abs(ball.x1 - Div.x), Math.abs(ball.y - Div.y1), Math.abs(ball.y1 - Div.y));//判断是那边被碰
            //右左下上区分，距离最小为准

        } else {
            return 0;
        }
    }//checkIsP();
    function LenthSmaller(a, b, c, d) {

        if (a < b && a < c && a < d) {//右
            return 1;
        }
        if (b < a && b < c && b < d) {//左
            return 2;
        }
        if (c < a && c < b && c < d) {//下
            return 3;
        }
        if (d < b && d < c && d < a) {//上
            return 4;
        }
    }//LenthSmaller(a,b,c,d)
    //键盘处理事件
    function bindDom() {
        function flatmove() {
            document.onkeydown = function keydownEvent(e) {
                e = e || event;
                let bang = $("bangDiv");//取挡板div
                let qiu = $("qiuDiv");//取飞球的div
                let bs = 10;//按一次键移动多少，
                if (run) {
                    if (event.keyCode == 37) {//如果是左箭头
                        bang.style.backgroundImage = "url(images/left.gif)";
                        bangtu = false;
                        for (let i = 0; i < bs; i++) {
                            if (bangleft - 1 != 0) {//0即left为0，即已经到左移动到了墙壁，就不再起作用。
                                bangleft -= 1;//每一次向左移动1，其实上面做了for循环，结果就是每按一次向左移动了bs=10，为什么要循环着去加而不一次性去加，原因很简单就是为了防止一次就加过了超出了范围，同时我们可以通过设定bs参数的值来改变挡板移动的快慢
                                bang.style.left = bangleft + "px";//改变挡板位置
                            }
                        }
                    }//37
                    if (event.keyCode == 39) {//如果是右箭头同理
                        bang.style.backgroundImage = "url(images/right.gif)";
                        bangtu = false;
                        for (let i = 0; i < bs; i++) {
                            if (bangleft + 1 != 450) {//检测是否碰右壁
                                bangleft += 1;
                                bang.style.left = bangleft + "px";//如何简化！！
                            }
                        }
                    }//39
                    let Timeout2 = null;
                    Timeout2 = setTimeout(function () {
                        if (bangtu == false) {
                            bang.style.backgroundImage = "url(images/notmuve.jpg)";
                            window.clearTimeout(Timeout2);
                        }
                    }, 2000);
                }//run

            }//keydownevent();
        }//flatmove()
        let Count = null;
        let rt = document.getElementById("reset");
        let ng = document.getElementById("nextpage");
        let st = document.getElementById("start");
        let home = document.getElementById("back");
        /*  window.clearTimeout(Count);
          Count = setTimeout(function () {
              let imgTime = document.getElementsByTagName("img")[0];
              imgTime.style.display = "none";
              go();
              flatmove();
          }, 4500);*/
        st.onclick = function () {
            let imgTime = document.getElementsByTagName("img")[2];
            imgTime.style.display = "none";
            st.style.display = "none";
            home.style.display = "none";
            go();
            flatmove();
        }
        rt.onclick = function () {//重新刷新
            window.location.reload();
        }
        ng.onclick = closePageForm;
        home.onclick = closePageForm;
    }//bindDom();
    function closePageForm() {
        window.opener = null;
        window.open('', '_self');
        window.close();
    }
    function gameovImgShow() {
        let btn1 = document.getElementsByTagName("button")[2];
        let imgGameOver = document.getElementsByTagName("img")[3];//gameover
        imgGameOver.src = "images/ending.png";
        imgGameOver.style.display = "block";
        // btn1.style.backgroundImage="url(images/tryagain.png)";
        btn1.style.display = "block";
    }
    function goodforyImgShow() {
        let btn2 = document.getElementsByTagName("button")[3];
        let imgGameOver = document.getElementsByTagName("img")[3];//gameover
        imgGameOver.src = "images/succed.png";
        imgGameOver.style.display = "block";
        // btn2.style.backgroundImage="url(images/next.jpg)";
        btn2.style.display = "block";
    }
    function gameOver() {
        let h1 = document.getElementsByTagName("h1")[0];
        h1.style.display = "block";
        h1.innerHTML = score.innerHTML;
        window.clearInterval(GoTime);
        run = false;
    }
}//init