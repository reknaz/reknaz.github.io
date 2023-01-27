
document.getElementById("perfil-nav").addEventListener("click", function() {
    document.getElementById("perfil-nav").style.display = "none";
    document.getElementById("exp-nav").style.display = "block";
    document.getElementById("formacion-nav").style.display = "block";
    document.getElementById("info-nav").style.display = "block";
});

document.getElementById("exp-nav").addEventListener("click", function() {
    document.getElementById("exp-nav").style.display = "none";
    document.getElementById("perfil-nav").style.display = "block";
    document.getElementById("formacion-nav").style.display = "block";
    document.getElementById("info-nav").style.display = "block";
});

document.getElementById("formacion-nav").addEventListener("click", function() {
    document.getElementById("formacion-nav").style.display = "none";
    document.getElementById("perfil-nav").style.display = "block";
    document.getElementById("exp-nav").style.display = "block";
    document.getElementById("info-nav").style.display = "block";
});

document.getElementById("info-nav").addEventListener("click", function() {
    document.getElementById("info-nav").style.display = "none";
    document.getElementById("perfil-nav").style.display = "block";
    document.getElementById("exp-nav").style.display = "block";
    document.getElementById("formacion-nav").style.display = "block";
});

document.getElementById("Perfil").addEventListener("wheel", function() {
    document.getElementById("perfil-nav").style.display = "none";
    document.getElementById("exp-nav").style.display = "block";
    document.getElementById("formacion-nav").style.display = "block";
    document.getElementById("info-nav").style.display = "block";
});

document.getElementById("Experiencia-Laboral").addEventListener("wheel", function() {
    document.getElementById("perfil-nav").style.display = "block";
    document.getElementById("exp-nav").style.display = "none";
    document.getElementById("formacion-nav").style.display = "block";
    document.getElementById("info-nav").style.display = "block";
});

document.getElementById("Formacion").addEventListener("wheel", function() {
    document.getElementById("perfil-nav").style.display = "block";
    document.getElementById("exp-nav").style.display = "block";
    document.getElementById("formacion-nav").style.display = "none";
    document.getElementById("info-nav").style.display = "block";
});

document.getElementById("Info").addEventListener("wheel", function() {
    document.getElementById("perfil-nav").style.display = "block";
    document.getElementById("exp-nav").style.display = "block";
    document.getElementById("formacion-nav").style.display = "block";
    document.getElementById("info-nav").style.display = "none";
});