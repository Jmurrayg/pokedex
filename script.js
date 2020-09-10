  function mostraPok(pokemon){
   // Código para la tarjeta
    var card = document.createElement('div');
    card.className = "card";
    card.id = "myBtn";

    // Código para el contenedor
    var cardContainer = document.getElementById('card-container');
    cardContainer.appendChild(card);
    var dataToggle = document.createAttribute("data-toggle");
    var dataTarget = document.createAttribute("data-target");
    dataToggle.value = "modal";
    dataTarget.value = "#exampleModalLong";
    card.setAttributeNode(dataToggle);
    card.setAttributeNode(dataTarget);

    var contenedorImagen = document.createElement('div');
    contenedorImagen.className = "img-container";
    card.appendChild(contenedorImagen);
    // Código para la imagen
    var img = document.createElement('img');
    img.className = "card-img-top";
    img.src = pokemon.art_url;
    contenedorImagen.appendChild(img);
    // Código para el card-body
    var cardBody = document.createElement('div');
    cardBody.className = "card-body";

    // Código para el numero pokemon
    var Npokemon = document.createElement('h5');
    Npokemon.className = "card-title";
    Npokemon.id = "numeroPokemonCard"
    Npokemon.innerHTML = "No. #" + pokemon.pkdx_id;

    // Código para el título
    var title = document.createElement('h5');
    title.id = "nombrePokemonCard";
    title.className = "card-title";
    title.innerHTML = pokemon.name;

    // Código para tipo
/*     var tipo = document.createElement('span');
    tipo.className = "tipo";
    tipo.id = "tipoPrincipal";

 */    // Código de la descripción
    var descripction = document.createElement('p');
    descripction.className = "card-text";
    descripction.innerHTML = pokemon.description;
    card.appendChild(cardBody);
    cardBody.appendChild(Npokemon);
    cardBody.appendChild(title);
    // cardBody.appendChild(descripction);

    
    var tiposLista = [];
    var fondoCard = [];
    // Código del cambio de tipo
    for(x = 0; x < pokemon.types.length; x++){
     // console.log(pokemon.types[x]);


      if(pokemon.types[x] === "poison"){
         var tipo = document.createElement('span');
         tipo.className = "tipo";
         tipo.id = "tipoPrincipal";
         tipo.style.backgroundColor = "#A040A0";
         //title.insertAdjacentElement('afterend', tipo);
         var agregarArrayColor = fondoCard.push("#A040A0");
         var agregarArraytipo = tiposLista.push(pokemon.types[x])
         }  else if(pokemon.types[x] === "fire"){
          var tipo = document.createElement('span');
          tipo.className = "tipo";
          tipo.id = "tipoPrincipal";
          tipo.style.backgroundColor = "#F08030";
          var agregarArraytipo = tiposLista.push(pokemon.types[x])
          //title.insertAdjacentElement('afterend', tipo);
          var agregarArrayColor = fondoCard.push("#F08030");
        } else if(pokemon.types[x] === "water"){
          var tipo = document.createElement('span');
          tipo.className = "tipo";
          tipo.id = "tipoPrincipal";
          tipo.style.backgroundColor = "#6890F0 ";
          //title.insertAdjacentElement('afterend', tipo);
          var agregarArrayColor = fondoCard.push("#6890F0");
          var agregarArraytipo = tiposLista.push(pokemon.types[x])
        } else if(pokemon.types[x] === "flying"){
          var tipo = document.createElement('span');
          tipo.className = "tipo";
          tipo.id = "tipoPrincipal";
          tipo.style.backgroundColor = "#C6B7F5 ";
          //title.insertAdjacentElement('afterend', tipo);
          var agregarArrayColor = fondoCard.push("#C6B7F5");
          var agregarArraytipo = tiposLista.push(pokemon.types[x])
        } else if(pokemon.types[x] === "bug"){
          var tipo = document.createElement('span');
          tipo.className = "tipo";
          tipo.id = "tipoPrincipal";
          tipo.style.backgroundColor = "#A8B820 ";
          //title.insertAdjacentElement('afterend', tipo);
          var agregarArrayColor = fondoCard.push("#A8B820");
          var agregarArraytipo = tiposLista.push(pokemon.types[x])
        } else if(pokemon.types[x] === "grass"){
          var tipo = document.createElement('span');
          tipo.className = "tipo";
          tipo.id = "tipoPrincipal";
          tipo.style.backgroundColor = "#78C850 ";
          //title.insertAdjacentElement('afterend', tipo);
          var agregarArrayColor = fondoCard.push("#78C850");
          var agregarArraytipo = tiposLista.push(pokemon.types[x])
        } else if(pokemon.types[x] === "normal"){
          var tipo = document.createElement('span');
          tipo.className = "tipo";
          tipo.id = "tipoPrincipal";
          tipo.style.backgroundColor = "#A8A878 ";
          //title.insertAdjacentElement('afterend', tipo);
          var agregarArrayColor = fondoCard.push("#A8A878");
          var agregarArraytipo = tiposLista.push(pokemon.types[x])
        } else if(pokemon.types[x] === "electric"){
          var tipo = document.createElement('span');
          tipo.className = "tipo";
          tipo.id = "tipoPrincipal";
          tipo.style.backgroundColor = "#FCF7DE ";
          //title.insertAdjacentElement('afterend', tipo);
          var agregarArrayColor = fondoCard.push("#FCF7DE");
          var agregarArraytipo = tiposLista.push(pokemon.types[x])
        } else if(pokemon.types[x] === "ground"){
          var tipo = document.createElement('span');
          tipo.className = "tipo";
          tipo.id = "tipoPrincipal";
          tipo.style.backgroundColor = "#f4e7da ";
          //title.insertAdjacentElement('afterend', tipo);
          var agregarArrayColor = fondoCard.push("#f4e7da");
          var agregarArraytipo = tiposLista.push(pokemon.types[x])
        } else if(pokemon.types[x] === "rock"){
          var tipo = document.createElement('span');
          tipo.className = "tipo";
          tipo.id = "tipoPrincipal";
          tipo.style.backgroundColor = "#d5d5d4 ";
          //title.insertAdjacentElement('afterend', tipo);
          var agregarArrayColor = fondoCard.push("#d5d5d4");
          var agregarArraytipo = tiposLista.push(pokemon.types[x])
        } else if(pokemon.types[x] === "fairy"){
          var tipo = document.createElement('span');
          tipo.className = "tipo";
          tipo.id = "tipoPrincipal";
          tipo.style.backgroundColor = "#fceaff ";
          //title.insertAdjacentElement('afterend', tipo);
          var agregarArrayColor = fondoCard.push("#fceaff");
          var agregarArraytipo = tiposLista.push(pokemon.types[x])
        } else if(pokemon.types[x] === "dragon"){
          var tipo = document.createElement('span');
          tipo.className = "tipo";
          tipo.id = "tipoPrincipal";
          tipo.style.backgroundColor = "#97b3e6 ";
          //title.insertAdjacentElement('afterend', tipo);
          var agregarArrayColor = fondoCard.push("#97b3e6");
          var agregarArraytipo = tiposLista.push(pokemon.types[x])
        } else if(pokemon.types[x] === "psychic"){
          var tipo = document.createElement('span');
          tipo.className = "tipo";
          tipo.id = "tipoPrincipal";
          tipo.style.backgroundColor = "#eaeda1 ";
          //title.insertAdjacentElement('afterend', tipo);
          var agregarArrayColor = fondoCard.push("#eaeda1");
          var agregarArraytipo = tiposLista.push(pokemon.types[x])
        } else if(pokemon.types[x] === "fighting"){
          var tipo = document.createElement('span');
          tipo.className = "tipo";
          tipo.id = "tipoPrincipal";
          tipo.style.backgroundColor = "#E6E0D4 ";
          //title.insertAdjacentElement('afterend', tipo);
          var agregarArrayColor = fondoCard.push("#E6E0D4");
          var agregarArraytipo = tiposLista.push(pokemon.types[x])
        }
    }
    console.log(tiposLista);
    //console.log(fondoCard[0]);
    
    if(fondoCard.length === 1){
      card.style.backgroundColor = fondoCard[0];
    } else if(fondoCard.length === 2){
      card.style.backgroundImage = "linear-gradient(45deg ," +fondoCard[0] + "," + fondoCard[1] +")";
    }
    // Código del cambio subTipo
/*     for(x = 0; x < pokemon.types.length; x++){
      //console.log(pokemon.types[x]);
      if(pokemon.types[x] === "grass"){
         var subTipo = document.createElement('span');
         subTipo.id = "tipoSecundario";
         subTipo.className = "subTipo";
         subTipo.style.backgroundColor = "#78C850";
         tipo.insertAdjacentElement('afterend', subTipo);
      }
    } */

     card.onclick = function (){
      var numero = document.getElementById("numeroPokemon");
      numero.innerHTML= "No. #" + pokemon.pkdx_id;
      var nombre = document.getElementById("exampleModalLongTitle");
      nombre.innerHTML = pokemon.name;
      var descripcion = document.getElementById("pokemonDescripcion");
      descripcion.innerHTML = pokemon.description;
      var imagen = document.getElementById("imagenPokemon");
      imagen.src = pokemon.art_url;
      var tipo1 = document.getElementById("prueba");
      tipo1.innerHTML = pokemon.types[0];
      tipo1.style.backgroundColor = fondoCard[0];
      if(pokemon.types.length === 2){
      var tipo2 = document.getElementById("prueba2");
      tipo2.innerHTML = pokemon.types[1];
      tipo2.style.backgroundColor = fondoCard[1];
      } else{
        var tipo2 = document.getElementById("prueba2");
        tipo2.innerHTML = "";
        tipo2.style.backgroundColor = "white";
      }
     }


   }

   for(var i = 0; i < pokemons.length; i++ ){
    mostraPok(pokemons[i]);

   }

   encontrarPokemon = function buscarPokeom(text){
    var nombrePokemon = document.getElementById("buscarPokemon");
    window.find(nombrePokemon.value);
   }

   




