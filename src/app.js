document.getElementById('calculate').addEventListener('click', function () {
    const firstNumber = parseFloat(document.getElementById('firstNumber').value);
    const secondNumber = parseFloat(document.getElementById('secondNumber').value);
    const resultField = document.getElementById('result');
    const notification = document.getElementById('notification');
    const operation = document.querySelector('input[name="operation"]:checked');

    notification.innerHTML = ''; // Clear notifications
    resultField.value = ''; // Clear result field

    if (isNaN(firstNumber)) {
        notification.innerHTML = 'Giá trị nhập ở ô <i>Số thứ nhất</i> không phải là số';
        return;
    }

    if (isNaN(secondNumber)) {
        notification.innerHTML = 'Giá trị nhập ở ô <i>Số thứ hai</i> không phải là số';
        return;
    }

    if (!operation) {
        notification.innerHTML = 'Vui lòng chọn một phép tính';
        return;
    }

    let result;
    switch (operation.value) {
        case 'add':
            result = firstNumber + secondNumber;
            break;
        case 'subtract':
            result = firstNumber - secondNumber;
            break;
        case 'multiply':
            result = firstNumber * secondNumber;
            break;
        case 'divide':
            if (secondNumber === 0) {
                notification.innerHTML = 'Không thể chia cho 0';
                return;
            }
            result = firstNumber / secondNumber;
            break;
    }

    resultField.value = result;
});
