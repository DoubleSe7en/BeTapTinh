function setNotify(num1, num2) {
    var chooseCalculation = document.querySelector('input[name="calculation"]:checked');
    document.getElementById("notify").innerHTML = "";
    if (chooseCalculation == null) {
        document.getElementById("notify").innerHTML = "Bạn chưa nhập phép tính!";
        return 0;
    }
    if (num1.length == 0) {
        document.getElementById("notify").innerHTML = "Bạn chưa nhập số thứ nhất!";
        return 0;
    }
    if (num2.length == 0) {
        document.getElementById("notify").innerHTML = "Bạn chưa nhập số thứ hai!";
        return 0;
    }

    if (isNaN(num1)) {

        document.getElementById("notify").innerHTML = "Số thứ nhất không hợp lệ!";
        return 0;
    }
    if (isNaN(num2)) {
        document.getElementById("notify").innerHTML = "Số thứ hai không hợp lệ!";
        return 0;
    }
    return chooseCalculation.value;
}
function myCalculation() {
    var num1 = document.getElementById("number1").value;
    var num2 = document.getElementById("number2").value;
    var result = document.getElementById("result");
    var check = setNotify(num1, num2);

    if (check == 0) {
        return;
    }

    if (check == "sum") {
        result.value = parseInt(num1) + parseInt(num2);
    }
    if (check == "sub") {
        result.value = parseInt(num1) - parseInt(num2);
    }
    if (check == "mul") {
        result.value = parseInt(num1) * parseInt(num2);
    }
    if (check == "div") {
        result.value = parseInt(num1) / parseInt(num2);
    }
}

