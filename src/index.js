module.exports = function solveEquation(equation) {
    // your implementation
    var string = equation;
    var numbers = string.match(/[+-]?\d+(?:\.\d+)?/g).map(Number);
    var a = numbers[0];
    var b = numbers[2]; // ������ �� ������� �������� �����
    var c = numbers[3];
    //var koren = Math.sqrt((b * b) - (4 * a * c));
    //var xx = (-b + koren) / 2 * a;
    //var yy = (-b - koren) / 2 * a;
    var aa = b * (-1); //������ ��������
    var bb = b * b; //������ ��������
    var cc = 4 * a * c; //������ ��������
    var dd = Math.sqrt(bb - cc); // ��������� ��������
    var e1 = aa + dd; //��������� �1
    var e2 = aa - dd;//��������� �2
    var x1 = e1 / (2 * a);
    var x2 = e2 / (2 * a);


        //var x1 = (-b + Math.sqrt((b * b) - (4 * a * c))) / 2 * a;
        //var x2 = (-b - Math.sqrt((b * b) - (4 * a * c))) / 2 * a;
    return [x1, x2];
    //return (aa);
}
