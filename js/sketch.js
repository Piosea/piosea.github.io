var angle = 0; // 角度
var r = 1000; // 円周の半径

function setup() { // 最初に実行される関数
    createCanvas(100,100); // canvasの作成
    noStroke();
}

function draw() { // 毎フレーム実行される関数
    background(255); // canvasの塗りつぶし
    push(); // 座標をcanvasの中心にするため一時的に保存
    translate(width / 2, height / 2);
    stroke(0);
    x = sin(radians(angle)) * r; // 円周上のX座標の位置
    y = cos(radians(angle)) * r; // 円周上のY座標の位置
    line(0,0,x,y);
    pop();
    angle -= 1;
}
