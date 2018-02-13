/** hacer funcion que escriba un arreglo palabra por palabra
 * */


/*var writingWord = function(){
    var input = document.getElementById("input1").value;
    var pos = 0;
    var id = setInterval(frame, 5);
    function frame() {
        if (pos == 350) {
            clearInterval(id);
        } else {
            pos++;
            elem.style.top = pos + 'px';
            elem.style.left = pos + 'px';
        }
    }
}
*/

var pos = 0;
var id;

function frame (value){

    console.log(element.innerHTML);
}
var writingWord = function(){

    var input = document.getElementById("word").value;
    var element = document.getElementById("setWord");

    for (i in input){
        var column = document.createElement("td");
        var node = document.createTextNode(input[i]);
        column.appendChild(node);
        element.appendChild(column);
    }
}
