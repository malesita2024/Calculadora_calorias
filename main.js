//alert()

let inputEdad = document.getElementById("input-edad");
let inputAltura = document.getElementById("input-altura");
let inputPeso = document.getElementById("input-peso");
let genero = document.getElementById("genero");
let actividadFisica = document.getElementById("act-fisica");
let resCalorias = document.getElementById("p-res-calorias");
let resultado = document.getElementById("resultado");

function iconCalOnClick(valor) {
    switch (valor) {
        case 'MenosEdad':
            if (inputEdad.value >= 1) {
                let inputMenos = inputEdad.value - 1;
                inputEdad.value = inputMenos;
            } else {
                inputEdad.value = 0;
            }
            break;
        case 'MenosAltura':
            if (inputAltura.value >= 1) {
                let inputMenos = inputAltura.value - 1;
                inputAltura.value = inputMenos;
            } else {
                inputAltura.value = 0;
            }
            break;
        case 'MenosPeso':
            if (inputPeso.value >= 1) {
                let inputMenos = inputPeso.value - 1;
                inputPeso.value = inputMenos;
            } else {
                inputPeso.value = 0;
            }
            break;

        case 'MasEdad':
            if (inputEdad.value >= 0) {
                let inputEdadFormateado = parseInt(inputEdad.value);
                let inputMas = inputEdadFormateado + 1;
                inputEdad.value = inputMas;
            } else {
                inputEdad.value = 0;
            }
            break;

        case 'MasAltura':
            if (inputAltura.value >= 0) {
                let inputAlturaFormateado = parseInt(inputAltura.value);
                let inputMas = inputAlturaFormateado + 1;
                inputAltura.value = inputMas;
            } else {
                inputAltura.value = 0;
            }
            break;

        case 'MasPeso':
            if (inputPeso.value >= 0) {
                let inputPesoFormateado = parseInt(inputPeso.value);
                let inputMas = inputPesoFormateado + 1;
                inputPeso.value = inputMas;
            } else {
                inputPeso.value = 0;
            }
            break;

    }
}

function calculoCalorias() {
    console.log(genero.value);
    console.log(inputEdad.value);
    console.log(inputAltura.value);
    console.log(inputPeso.value);
    console.log(actividadFisica.value);

    let TMBFemenino = (10 * inputPeso.value) + (6.25 * inputAltura.value) - (5 * inputEdad.value) - 161;
    let TMBMasculino = (10 * inputPeso.value) + (6.25 * inputAltura.value) - (5 * inputEdad.value) - 5;

    if (genero.value == "Femenino") {
        console.log("escogi femenino")
        if (actividadFisica.value == "Poco") {
            let TMB = TMBFemenino * 1.2;
            resCalorias.innerHTML = "Tu consumo recomendado de calorías es: " + TMB;
            resultado.style.display = "block";
        } else if (actividadFisica.value == "Ligero") {
            let TMB = TMBFemenino * 1.375;
            resCalorias.innerHTML = "Tu consumo recomendado de calorías es: " + TMB;
            resultado.style.display = "block";
        } else if (actividadFisica.value == "Moderado") {
            let TMB = TMBFemenino * 1.55;
            resCalorias.innerHTML = "Tu consumo recomendado de calorías es: " + TMB;
            resultado.style.display = "block";
        } else if (actividadFisica.value == "Fuerte") {
            let TMB = TMBFemenino * 1.75;
            resCalorias.innerHTML = "Tu consumo recomendado de calorías es: " + TMB;
            resultado.style.display = "block";
        } else if (actividadFisica.value == "Muy fuerte") {
            let TMB = TMBFemenino * 1.9;
            resCalorias.innerHTML = "Tu consumo recomendado de calorías es: " + TMB;
            resultado.style.display = "block";
        }
    } else if (genero.value == "Masculino") {
        if (actividadFisica == "Poco") {
            let TMB = TMBMasculino * 1.2;
            resCalorias.innerHTML = "Tu consumo recomendado de calorías es: " + TMB;
            resultado.style.display = "block";
        } else if (actividadFisica.value == "Ligero") {
            let TMB = TMBMasculino * 1.375;
            resCalorias.innerHTML = "Tu consumo recomendado de calorías es: " + TMB;
            resultado.style.display = "block";
        } else if (actividadFisica.value == "Moderado") {
            let TMB = TMBMasculino * 1.55;
            resCalorias.innerHTML = "Tu consumo recomendado de calorías es: " + TMB;
            resultado.style.display = "block";
        } else if (actividadFisica.value == "Fuerte") {
            let TMB = TMBMasculino * 1.75;
            resCalorias.innerHTML = "Tu consumo recomendado de calorías es: " + TMB;
            resultado.style.display = "block";
        } else if (actividadFisica.value == "Muy fuerte") {
            let TMB = TMBMasculino * 1.9;
            resCalorias.innerHTML = "Tu consumo recomendado de calorías es: " + TMB;
            resultado.style.display = "block";
        }
    }

}