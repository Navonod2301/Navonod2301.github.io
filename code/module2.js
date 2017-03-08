var xPos = 5;
var yPos = 5;
var Xpos = 395;
var Ypos = 5;

draw = function() {
    background(29, 40, 115);
    fill(255, 242, 0);
    ellipse(xPos, yPos, 10, 10);
    ellipse(Xpos, Ypos, 12, 12);
    xPos += 3;
    yPos += 1;
    Xpos -= 2;
    Ypos += 1;
    fill(102, 102, 102);
    rect(-3,222,48,638);
    rect(261,203,202,638);
    fill(138, 138, 138);
    rect(34,238,143,638);
    rect(213,177,89,638);
    fill(77, 77, 77);
    rect(81,253,48,638);
    rect(252,259,109,638);
    fill(161, 2, 2);
    rect(-3,343,193,638);
};
