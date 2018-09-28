module.exports = function solveEquation(equation) {
    // your implementation
    function isInteger(num) {
        return (num ^ 0) === num;
    }
    var string = equation;
    var result = string.replace(/\s/g, "");
    var numbers = result.match(/[+-]?\d+(?:\.\d+)?/g).map(Number);
    var a = numbers[0];
    var b = numbers[2]; // ������ �� ������� �������� �����
    var c = numbers[3];
    var aa = b; //������ ��������
    var bb = b * b; //������ ��������
    var ca = 4 * a; //������ ��������
    var cc = ca * c;
    var dd = Math.sqrt(bb - cc); // ��������� ��������
    var e1 = aa + dd; //��������� �1
    var e2 = aa - dd;//��������� �2
    var x1 = e1 / (2 * a);
    var x2 = e2 / (2 * a);
    var x3 = x1 * (-1);
    var x4 = x2 * (-1);
    var x = Math.floor(x3 * 100) / 100;
    var y = Math.floor(x4 * 100) / 100;


    if (x > y) {
        return [y, x];
    }
    else {
        return [x, y];
    }
}
