function cal(){
    var name = document.getElementsByTagName('input')[0].value;
    // var name = document.getElementsById('input').value;
    var bodyDiv = document.querySelector('.body').innerHTML = name;
}