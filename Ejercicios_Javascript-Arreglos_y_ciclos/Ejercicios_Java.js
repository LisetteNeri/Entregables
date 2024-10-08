// Ejercicio 1
function exercise1() {
    let arr = ["This", "is", "a", "sentence."];
    let sentence = arr.join(" ");
    document.getElementById('result1').innerHTML = sentence;
}

// Ejercicio 2
function exercise2() {
    let numbers = [10, 20, 30, 40];
    let doubledArray = numbers.map(function(number) {
        return number * 2;
    });
    document.getElementById('result2').innerHTML = doubledArray.join(", ");
}

// Ejercicio 3
function exercise3() {
    let numbers = [1, 2, 3, 4];

    let sum = numbers.reduce(function(total, number) {
        return total + number;
    }, 0);

    let product = numbers.reduce(function(total, number) {
        return total * number;
    }, 1);

    document.getElementById('result3').innerHTML = "Suma: " + sum + " - Producto: " + product;
}

// Ejercicio 4
function exercise4() {
    let student1Courses = ['Math', 'English', 'Programming'];
    let student2Courses = ['Geography', 'Spanish', 'Programming'];

    let commonCourses = student1Courses.filter(function(course) {
        return student2Courses.includes(course);
    });

    if (commonCourses.length > 0) {
        document.getElementById('result4').innerHTML = "Cursos comunes: " + commonCourses.join(", ");
    } else {
        document.getElementById('result4').innerHTML = "No hay cursos comunes.";
    }
}

// Ejercicio 5
function exercise5() {
    let people = ["Maria", "Dani", "Luis", "Juan", "Camila"];

    // 1. Imprimir todos los nombres
    let result = "1. Lista de personas: " + people.join(", ") + "<br>";

    // 2. Eliminar "Dani"
    people.splice(people.indexOf("Dani"), 1);
    result += "2. Después de eliminar 'Dani': " + people.join(", ") + "<br>";

    // 3. Eliminar "Juan"
    people.splice(people.indexOf("Juan"), 1);
    result += "3. Después de eliminar 'Juan': " + people.join(", ") + "<br>";

    // 4. Mover "Luis" al inicio
    people.splice(people.indexOf("Luis"), 1);
    people.unshift("Luis");
    result += "4. Después de mover 'Luis' al inicio: " + people.join(", ") + "<br>";

    // 5. Agregar "Lisette" al final
    people.push("Lisette");
    result += "5. Después de agregar 'Lisette': " + people.join(", ") + "<br>";

    // 6. Iterar hasta "Maria"
    for (let i = 0; i < people.length; i++) {
        if (people[i] === "Maria") {
            result += "6. Encontrado: Maria<br>";
            break;
        }
    }

    // 7. Obtener el índice de "Maria"
    let indexOfMaria = people.indexOf("Maria");
    result += "7. 'Maria' está en la posición: " + indexOfMaria;

    document.getElementById('result5').innerHTML = result;
}
