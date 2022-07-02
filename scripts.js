let imagenes=[
    "./recursos/bowser.jpg",
    "./recursos/sonic.jpg",
    "./recursos/mario.jpg",

];
let descripcion=[
    "Bowser",
    "Sonic",
    "Mario",

];
let contador= imagenes.length;
for (imagen in imagenes){
    $(".gallery").append(`
    <div class="picture">
        <img src=${imagenes[imagen]}>
        <p class="fondo">${descripcion[imagen]}<p>
    </div>`)

}; 

$(".add").click(function(){
    let img = $(".picture-url").val();
    let des=$(".descrip").val();
    $(".gallery").append(`
    <div class="picture">
        <img src=${img}>
        <p class="fondo">${des}<p>
    </div>`);


    imagenes.push(img)
    $(".cont").text("Cantidad de imagenes "+ imagenes.length)

    
});




