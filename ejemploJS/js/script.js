function cliente(){
//document.getElementById('izquierda').innerHTML="uno";
document.getElementById('izquierda').innerHTML="<br><br><form name='clientes' method='post'>"+
"nombre   :<input type='text' name='n' value='' placeholder='apellidos,nombre' class='textbox' requiered /><br><br>"+
"direccion:<input type='text' name='d' value='' placeholder='calle,num,col,cp' class='textbox' requiered /><br><br>"+
"<input type='button' name='e' value='ENVIAR'  onclick='nombre()' id='submit'/></form>";
}

function compra(){
//document.getElementById('izquierda').innerHTML="dos";
document.getElementById('izquierda').innerHTML="<br><br><form name='compras' method='post'>"+
//"codigo  :<input type='text' name='codigo' value='' placeholder='codigo' class='textbox' requiered /><br><br>"+
"costo   :<input type='number' name='costo' value='' placeholder='pesos' class='textbox' requiered /><br><br>"+
"cantidad:<input type='number' name='cantidad' value='' placeholder='cantidad' class='textbox' requiered /><br><br>"+
"<input type='button' name='cal' value='calcular' onclick='sumar()' id='submit'/>"+
"<input type='button' name='lim' value='limpiar' onclick='limpiarForm()' id='submit'/></form>";
}

valor=0;

function sumar(){
var cost=document.compras.costo.value;
var cant=document.compras.cantidad.value;
valor=valor+(cost*cant);
document.compras.costo.value="";
document.compras.cantidad.value="";
document.getElementById("derecha").innerHTML="$"+valor;
}


function nombre(){
var nom=document.clientes.n.value;
var dir=document.clientes.d.value;
document.getElementById('derecha').innerHTML="<p style='font-size:40px;'><strong>BIENVENIDO </strong><br><img src='img/images.jpg' width='100px' height='100px'/><br> TU ERES :"+nom+"<br> Y VIVES EN: "+dir+"</p>";
}

function limpiarForm(){
valor=0;
document.getElementById("derecha").innerHTML="$"+valor;
}
function limpia(){
document.getElementById('derecha').innerHTML='<img src="img/productos.jpg" width="100%" height="100%">';
document.getElementById('izquierda').innerHTML='<img src="img/baile.gif" width="100%" height="100%">';
}
