function getKeyCode(param)
{
    //console.log(param);

var keycode={
        enter:"13"




}
console.log(keycode[param]);

}




function keyBoard(param,callback)
{

   // console.log(param);
console.log("hai keyboard just loaded initialy");
if(typeof callback == "function")
    {
   console.log(getKeyCode(param))    ;
    callback();
    }
}

//window.onload=keyBoard;
window.onkeypress=keyBoard;
