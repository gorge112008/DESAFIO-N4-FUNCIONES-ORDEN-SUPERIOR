//ALGORITMO DE SIMULACIÓN DE VENTAS DE COMIDA RÁPIDA:
alert ("**************BIENVENIDO A DELIPASO****************"    +"\n"+"\n"+
        "Come todo lo que te puedas imaginar a un solo clic!!!" +"\n"+"\n"+
        "*********************************************************."     );
//DEFINIENDO VARIABLES:
let todototal=0; let detalle=""; let detalle2="";  let contamenu=0;  let tiempo=0; let opci="1";
const menutotal=[];  let ini=0; let menus=""; const casos=[]; let tamaño=0; let menu=[]; 
const tiposmenus=[1,2,3]; 
//ESTABLECIENDO FUNCIÓN CONSTRUCTORA:
function Menu(Nombre, Stock, Costo, Descripción, Total) {
    this.Nombre=Nombre; this.Stock=Stock; this.Costo= Costo; this.Descripción=Descripción; this.total=Total;
    //MÉTODO QUE REALIZA EL PEDIDO DEL MENÚ SELECCIONADO:
    this.pedido = () => {
        if (opci==1) {
            this.cantidad=parseInt(prompt(  "El pedido: "+this.Nombre+" cuesta S/."+this.Costo+" la unidad.\n"+
                                        "¿Qué cantidad desea pedir? \nPor favor ingrese un número"      ));
        return this.cantidad;
        }else{
            this.cantidad=parseInt(prompt(  "En su pedido de "+this.Nombre+" tiene "+this.total+" unidad(es).\n"+
                                        "¿Qué cantidad desea cancelar? \nPor favor ingrese un número"      ));
        return this.cantidad;
        }
    }
    //MÉTODO QUE ACTUALIZA LAS PROPIEDADES DE CADA OBJETO:
    this.actualizar = () => {
        if (opci==1) {
            console.log(    "Se ha pedido " + this.cantidad + " " + this.Nombre    );
            this.Stock  -=   this.cantidad             ; //ACTUALIZANDO STOCK DEL OBJETO SELECCIONADO.           
            this.total  +=   this.cantidad             ; //ACTUALIZANDO CANTIDAD DE PEDIDOS DEL OBJETO.
            todototal   +=   (this.Costo*this.cantidad); //ACTUALIZANDO MONTO TOTAL DE COMPRA.
            alert(  "Ha pedido "+ this.cantidad +" "+   this.Nombre +   "\n"        +
                    "Queda "    + this.Stock    +" "+   this.Nombre +   " en Stock");
    }else{
            console.log(    "Se ha cancelado " + this.cantidad + " unidad(es) de " + this.Nombre    );
            this.Stock  +=   this.cantidad             ; //ACTUALIZANDO STOCK DEL OBJETO SELECCIONADO.           
            this.total  -=   this.cantidad             ; //ACTUALIZANDO CANTIDAD DE PEDIDOS DEL OBJETO.
            todototal   -=   (this.Costo*this.cantidad); //ACTUALIZANDO MONTO TOTAL DE COMPRA.
            alert(  "Ha cancelado "+ this.cantidad +" unidades de "+   this.Nombre +   "\n"        +
                    "Queda "    + this.total    +" unidades de "+   this.Nombre +   " en su pedido.");
    }
}
    //MÉTODO QUE INDICA LA DISPONIBILIDAD DE CADA MENÚ:
    this.disponible = () => {
        console.log(    "*"+this.Nombre+":\n"+"--> "+ this.Stock+" unidades disponibles."               );
    }
    //MÉTODO QUE INDICA QUE LA CANTIDAD INGRESADA NO ESTA DISPONIBLE Y PERMITE UN NUEVO REINGRESO:
    this.comparar= () => {
        if (opci==1) {
        this.cantidad=parseInt(prompt(  "Disculpe, solo hay disponible "+this.Stock+" "+this.Nombre+".\n"+
                                        "Por favor, elija otra cantidad."));
        return this.cantidad;
    }else{
        this.cantidad=parseInt(prompt(  "Disculpe, solo tiene "+this.total+" unidad(es) de "+this.Nombre+" en su pedido.\n"+
                                        "Por favor, elija otra cantidad."));
        return this.cantidad;
        } 
    }
    //MÉTODO PARA INDICAR QUE SE HA CANCELADO LA OPERACIÓN Y SE DEVOLVERA AL MENÚ.
    this.cancelado = () => {
        alert(  "Se ha cancelado o no se ha indicado ninguna cantidad válida.\nSe le devolverá al menú" );
    }
    //MÉTODO PARA CALCULAR LA DEMORA DE CADA PEDIDO EN BASE A LA CANTIDAD PEDIDA.
    this.demora = () => {
        this.tiempo=this.cantidad*2;
        return this.tiempo;
    }
    //MÉTODO PARA INDICAR QUE SE HA TERMINADO EL STOCK Y SE ELIJA OTRA OPCIÓN.
    this.agotado= () => {
        alert(  "Disculpe, no queda más "+this.Nombre+", por favor elija otra opción del menú."         );
    }

    this.cancelar=()=>{
        this.opcion=prompt("¿Desea pedir más o cancelar pedidos del menú seleccionado?\n"+
        " 1. Pedir más\n 2. Cancelar pedidos\n 0. Ninguna, volver al menú\n"+
        "--------------------------------------------------------\n"+
        "Por favor, ingrese una de las opciones disponibles.");
        return this.opcion;
    }
}

//CONSTRUYENDO EL MENÚ EN BASE A LA FUNCIÓN CONSTRUCTORA Y AGREGANDOLOS AL ARRAY MENU:
menutotal.push( M1= new Menu( "Hamburguesa de Carne Fina", 10, 15, "Hamburguesa 100% hecha de lomo fino de res a la parrilla, "     +
                        "jugosos tomates, frescas lechugas, pepinillos y ricas cremas ",0               ), 
                M2= new Menu( "Hamburguesa de Pollo", 12, 5, "Hamburguesa elaborada con las mejores pechugas blancas de pollo,"     +
                        "ligeramente sazonada con una combinación de lechuga y cremosa mayonesa. ",0    ),
                M3= new Menu( "Sandwich de Carne Fina", 15, 12, "Sandwich preparado con la mejor calidad de filete de lomo fino de res "    +
                        "sazonado y cocinado a la perfección; acompañado de frescas lechugas, mayonesa y ketchup al gusto. ",0      ),        
                M4= new Menu( "Sandwich de Pollo ", 15, 3, "Sandwich preparado con deliciosa pechuga de pollo fresca,         "     +
                        "rica lechuga, mayonesa y ketchup al gusto. ", 0                                ),   
                M5= new Menu( "Toasted Twister Americano", 5, 20, "Delicioso Snack tostado con tiras de pollo, tocino y carne "     +
                        "envuelto junto a lechugas frescas, tomate y pepinillo. ",0                     ),  
                M6= new Menu( "Combo Alitas bbq picante", 5, 20, "Alitas bañadas en nuestra salsa secreta BBQ picante,"             +
                        "con una porción de papas fritas, ensalada y cremas al gusto. ",0               ),  
                M7= new Menu( "Salchipapa", 15, 6, " Rodajas fritas de salchicha y papas fritas cortadas a la perfección "          +
                        "bañadas en deliciosa mayonesa y ketchup al gusto. ",0                          ),
                M8= new Menu( "Pollo Broster", 10, 10, "Pechuga de pollo tierno enharinado, rebozado y frito, "                     +
                        "acompañado de  una porción de papas fritas, ensalada y cremas al gusto. ",0    ));

//ORDENANDO MENÚ POR NOMBRES:
menutotal.sort((a,b)=>{
    if  (a.Nombre > b.Nombre) { return  1;  } 
    if  (a.Nombre < b.Nombre) { return -1;  }
    return 0;
        }       )
//CREANDO EL MENÚ ECONÓMICO:
menueconomico= menutotal.filter (el=>{
    return el.Costo <= 10;
        }       )

//CREANDO EL MENÚ DELUXE:
menuedeluxe= menutotal.filter (el=>{
    return el.Costo > 10;
        }       )

const tmenu=[menueconomico, menuedeluxe, menutotal]; //CREANDO ARRAY DE OBJETOS CON MENUS FILTRADOS

//INICIANDO BUCLE MEDIANTE CONDICIONAL DO WHILE
do {    
    //SOLICITANDO DATOS DEL TIPO DE MENU DESEADO:
    tm = prompt("ESTIMADO CLIENTE: ¿Desea algún tipo de menú especial?\n"+
                " 1. Menú Económico\n 2. Menú Deluxe\n 3. No, Mostrar todo el Menú Disponible\n"+
                "--------------------------------------------------------\n"+
                "Por favor, ingrese una de las opciones disponibles.");
    if (tm==null) { tm=3; } //SE CANCELA EL MENU ESPECIAL Y SE INGRESA A TODO EL MENU DISPONIBLE.
    switch (parseInt(tm)) {
        case tiposmenus[tm-1]:  //INGRESANDO AL ARRAY TIPOSMENUS[1,2,3] PARA DEFINIR CADA CASO.
            //CONSTRUYENDO MENUS DEPENDIENDO DEL TIPO DE MENU SELECCIONADO.
            tamaño=tmenu[tm-1].length;  //DECLARANDO TAMAÑO DEL MENU RESPECTO AL SELECCIONADO.
            for (let i = 1; i < tamaño+1; i++) { 
                menus+= i+"-"+tmenu[tm-1][i-1].Nombre+"\n";   
            }
            //CONFIGURANDO ARREGLO CASOS PARA DETERMINAR LA CANTIDAD DE CASOS POR MENÚS DISPONIBLES.
            for (let i = 1; i < tamaño+1; i++) { 
                casos[i]=i.toString();
            }        
            break;
        default:
            alert("Esta no es una opción válida ")
            break;
        }
} while (tm!=1 && tm!=2 && tm!=3);  //DETENIENDO BUCLE SI SE ELIGE ALGUNA OPCION VALIDA.
//MOSTRANDO ENTRADAS DEL TIPO DE MENU SELECCIONADO:
if (tm=="1") {menu= menueconomico.slice(0,tamaño+1);
    alert("*********************************************\n> INGRESANDO AL MENÚ ECONÓMICO -->\n*********************************************")} 
if (tm=="2") {menu= menuedeluxe.slice(0,tamaño+1);
    alert("***************************************\n$ INGRESANDO AL MENÚ DELUXE -->\n***************************************")} 
if (tm=="3") {menu= menutotal.slice(0,tamaño+1);
    alert("*******************************************\n* INGRESANDO AL MENÚ COMPLETO -->\n*******************************************")} 

//SOLICITANDO DATOS PARA INICIAR EL PEDIDO:
let ingreso = prompt(   "Buen día, selecciona la opción del menú que desea pedir:       \n"+   
                         menus   +   "0-Ninguna, Salir                                   \n"+
                        "***************************************************************\n"+
                        "Si desea ver la carta detallada ingrese el "+(tamaño+1)+"." );

//INICIANDO BUCLE MEDIANTE CONDICIONAL WHILE:     
while (ingreso!= "0" && ingreso!=null)  {

    //INDICANDO EL STOCK MEDIANTE CONSOLA PERIODICAMENTE EN CADA CICLO:
    console.log(    "************Stock DELIPASO**********\n"+"Menú disponible:"     );
    for (let i = 0; i < tamaño; i++) { menu[i].disponible(); }
                    
//APLICANDO ESTRUCTURA SWITCH:
switch (ingreso) {
    //INGRESANDO AL CASO 1,2,3,4 SI LA OPCIÓN ELEGIDA ES 1,2,3,4:
    case casos[ingreso]:
        //MIENTRAS EXISTA STOCK DEL MENU SE INGRESA A LA CONDICIÓN IF.
        ini=ingreso-1;  //DECLARANDO NUEVA VARIABLE PORQUE LOS ARRAY COMIENZAN DESDE EL VALOR 0 Y NUESTRO INGRESO EN VALOR 1. 
        if (menu[ini].total!=0) {
            opci=menu[ini].cancelar();
        } 
            switch(opci){
            case "1":
                if (menu[ini].Stock!=0) {
                    menu[ini].cantidad=menu[ini].pedido();    //SE LLAMA AL MÉTODO PEDIDO PARA OBTENER LA CANTIDAD DEL PEDIDO.
                    //SI LA CANTIDAD PEDIDA EXCEDE AL STOCK SE INGRESA A UN BUCLE PARA PEDIR OTRA CANTIDAD.
                    while (menu[ini].cantidad > menu[ini].Stock)    {
                        menu[ini].cantidad=menu[ini].comparar();  //SE LLAMA AL MÉTODO COMPARAR PARA OBTENER UNA NUEVA CANTIDAD DE PEDIDO.
                    }
                    //EVALUANDO LA CANTIDAD INGRESADA MEDIANTE CONDICIONALES IF ELSE:
                    if(menu[ini].cantidad == "" || menu[ini].cantidad == "0" || isNaN (menu[ini].cantidad))  {
                        menu[ini].cancelado()  ;    //SI LA CANTIDAD NO ES CORRECTA, SE LLAMA AL MÉTODO CANCELAR Y DEVUELVE AL MENÚ.
                        break;
                    }   else    {
                        menu[ini].actualizar();    //SI LA CANTIDAD ES CORRECTA, SE LLAMA AL MÉTODO ACTUALIZAR Y DEVUELVE AL MENÚ.
                            if (("tiempo" in menu[ini])==false) { //EVALUANDO SI LA PROPIEDAD TIEMPO EXISTE CON LA ESTRUCTURA IN.
                                menu[ini].tiempo = 0          ;   //CREANDO LA PROPIEDAD TIEMPO DENTRO DEL OBJETO.
                            }
                            menu[ini].demora()    ;    //SE LLAMA AL MÉTODO DEMORA PARA OBTENER LA DEMORA DEL PEDIDO.
                            tiempo += menu[ini].tiempo;   //CALCULANDO TIEMPO TOTAL DE DEMORA DEL PEDIDO.
                        break;
                    } 
                }
                menu[ini].agotado();                  //SI NO EXISTE STOCK DEL MENÚ SE LLAMA AL MÉTODO AGOTADO Y DEVUELVE AL MENÚ.
            break;
            case "2":
                menu[ini].cantidad=menu[ini].pedido();
                while (menu[ini].cantidad > menu[ini].total && menu[ini].cantidad != menu[ini].total)    {
                    menu[ini].cantidad=menu[ini].comparar();  //SE LLAMA AL MÉTODO COMPARAR PARA OBTENER UNA NUEVA CANTIDAD DE PEDIDO.
                }
                if(menu[ini].cantidad == "" || menu[ini].cantidad == "0" || isNaN (menu[ini].cantidad))  {
                    menu[ini].cancelado()  ;    //SI LA CANTIDAD NO ES CORRECTA, SE LLAMA AL MÉTODO CANCELAR Y DEVUELVE AL MENÚ.
                    break;
                }   else    {
                    menu[ini].actualizar();    //SI LA CANTIDAD ES CORRECTA, SE LLAMA AL MÉTODO ACTUALIZAR Y DEVUELVE AL MENÚ.
                        if (("tiempo" in menu[ini])==false) { //EVALUANDO SI LA PROPIEDAD TIEMPO EXISTE CON LA ESTRUCTURA IN.
                            menu[ini].tiempo = 0          ;   //CREANDO LA PROPIEDAD TIEMPO DENTRO DEL OBJETO.
                        }
                        menu[ini].demora()    ;    //SE LLAMA AL MÉTODO DEMORA PARA OBTENER LA DEMORA DEL PEDIDO.
                        tiempo -= menu[ini].tiempo;   //CALCULANDO TIEMPO TOTAL DE DEMORA DEL PEDIDO.
                    break;
                } 
            case "0":    
                alert(  "Regresando al menú principal"  );
            break;
            case null:    
            break;
            default:
                alert(  "Opción no válida, se le devolverá al menú principal"  );
            break;   
        }
    break;
       
    //INGRESANDO AL CASO DETALLE SI LA OPCIÓN ELEGIDA ES LA DE DETALLE DEL MENÚ:
    case (tamaño+1).toString():
        const detallemenu=menu.map(el=>{
            return{Nombre: el.Nombre, Stock: el.Stock, Costo: el.Costo, Descripción:el.Descripción}
        })
        for (const lista of detallemenu) {     //RECORRIENDO ARRAY DETALLEMENU MEDIANTE LA ESTRUCTURA FOR OF.
            if (contamenu>3) {
                contamenu++;
                detalle2 = detalle2 + "Menú " + contamenu + ": ------------>  ";       //ENUMERANDO MENÚS POR ORDEN.
                for (const info in lista) { //RECORRIENDO OBJETOS DENTRO DEL ARRAY MENU MEDIANTE LA ESTRUCTURA FOR IN.
                        detalle2 += "*" + info + ": " + lista[info] + "\n";  //CONSTRUYENDO DETALLES DEL MENÚ.
                }
                detalle2 += "*************************************************************************\n";
            }else {
            contamenu++;
            detalle = detalle + "Menú " + contamenu + ": ------------>  ";       //ENUMERANDO MENÚS POR ORDEN.
            for (const info in lista) { //RECORRIENDO OBJETOS DENTRO DEL ARRAY MENU MEDIANTE LA ESTRUCTURA FOR IN.
                    detalle += "*" + info + ": " + lista[info] + "\n";  //CONSTRUYENDO DETALLES DEL MENÚ.
                }
                detalle += "*************************************************************************\n";
            }
            }
        contamenu = 0;    //REINICIANDO CONTADOR DE MENÚS.
        alert(detalle);   //IMPRIMIENDO POR ALERTA CARTA DETALLADA.
        if (detalle2!="") {alert(detalle2); }  //IMPRIMIENDO POR ALERTA CARTA DETALLADA2 SÓLO SI LA CARTA ES MUY GRANDE.
        detalle, detalle2 = "";     //REINICIANDO VARIABLE PARA MOSTRAR CARTA DETALLADA 1 y 2.
    break;
    //INGRESANDO AL CASO POR DEFECTO SI SE INGRESA UNA OPCIÓN NO VÁLIDA:    
    default:
        alert(  "Opción no válida"  );
    break;
    }   
    //SOLICITANDO DATOS PARA CONTINUAR CON EL BUCLE O SALIR DEL MISMO:
    if (todototal!="0") { cancelar=" o cancelar" }else{ cancelar=""}
    opci="1";
    ingreso = prompt(   "Buen día, selecciona la opción del menú que desea pedir"+cancelar+":       \n"+   
                         menus   +   "0-Ninguna, Terminar Pedido.                       \n"+
                        "***************************************************************\n"+
                        "Si desea ver la carta detallada ingrese el "+(tamaño+1)+"." );
    //
    if (ingreso == "0") {
        break;
    }   else if (ingreso == null) {
                todototal=0;
            alert(  "Se ha cancelado el pedido"); //INDICANDO CANCELACIÓN DEL PEDIDO.
        break;
    }
}
//INDICANDO EL DESENLACE DEL PEDIDO MEDIANTE UNA CONDICIONAL IF ELSE:

if (todototal== "0") {
    alert ("Muchas Gracias por su visita, que tenga un buen día");                 //ALERTA EMITIDA AL CANCELAR EL PEDIDO.
}   else    {
    //METODO QUE FILTRA CADA MENU PEDIDO EN UN ARRAY.
    const pedido=menu.filter(el =>{ return el.total!=0; })
    //METODO QUE CONSTRUYE PARTE DEL MENSAJE FINAL QUE SE IMPRIMIRÁ AL COMPLETAR EL PEDIDO.
    const msjfinal=pedido.reduce((acum, ele)=> acum+"\n"+"*"+ ele.Nombre+"= "+ele.total+" unidad(es).","Su pedido es:")

    alert ( msjfinal+"\n"+"El monto total de su pedido es de: S/."+ todototal   +   " Soles.        \n"+
            "Su pedido estará listo en un tiempo aproximado de "  + tiempo      +   " minutos       \n"+
            "Muchas Gracias por su compra, que tenga un buen día!!!"             );//ALERTA EMITIDA AL COMPLETAR CON ÉXITO EL PEDIDO.
}
