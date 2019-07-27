/*
-const
-let
*/

/*
-Fat Arrow functions
*/

/*
-Object Destructuring
const servicios ={
    api:"api",
    mailer:"soy mailer",
    apollo:{}
}

const enviarCorreo = ({mailer}) =>{
    console.log(mailer);
}

enviarCorreo(servicios);
*/


/*
-Array spread operator
const arr=[1,2];

 const suma= (a,b) => a + b

 const resultado = suma(...arr);

 console.log(resultado);
 */

 /*
 -Object Spread Operator
 */

 const obj1 ={
     a:1,
     b:2
 };

 const obj2 ={
     ...obj1
 };

 obj1['c']=3;

 console.log("obj1: ",obj1);
 console.log("obj2: ",obj2);

 