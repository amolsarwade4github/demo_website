var serachProductBtn = document.querySelector('#productSearch');
var productSearchBox = document.querySelector('#productSearchBox');

serachProductBtn.addEventListener('click', function() {
    alert('You are searching for ' + productSearchBox.value);
});