let operacion, base, altura, largo, ancho, resultado, valorX;

do{
    operacion = prompt("OPERACIONES \n1. Area del Triangulo \n2. Area del Rectangulo" +
        "\n3. Perimetro del Rectangulo \n4. Calcula Y = X^2 + 6X + 9 \n5. Salir", "Opcion: ");


        if(operacion==1){
            base = prompt("Ingresa la base: ");
            altura = prompt("Ingresa la altura: ");

            resultado = 1/2 * base * altura;
            alert("El resultado es " + resultado);
        }

        else if(operacion==2){
            largo = prompt("Ingresa el largo: ");
            ancho = prompt("Ingresa el ancho: ");

            resultado = largo * ancho;
            alert("El resultado es " + resultado);
        }

        else if(operacion==3){
            largo = prompt("Ingresa el largo: ");
            ancho = prompt("Ingresa el ancho: ");

            resultado = 2 * largo + 2 * ancho;
            alert("El resultado es " + resultado);
        }

        else if(operacion==4){
            valorX = prompt("Ingresa el valor de X: ");

            resultado = Math.pow(valorX) + 6 * valorX + 9;
            alert("El resultado es " + resultado);
        }


} while (operacion!=5);
