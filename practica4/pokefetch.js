

const fetchPokemon = () => {

    const pokeInput = document.getElementById("pokeName").value.toLowerCase()

    if (pokeInput != '')
    {
        const url = 'https://pokeapi.co/api/v2/pokemon/' + pokeInput 
        fetch(url)
        .then( (response) =>{
            if (response.status == "200")
            {
                return response.json() 
            }
            else 
            {
                console.log(response)
                changeImg("./notfound.gif")
    
            }
        }
        )
        .then(data => changeImg(data.sprites.front_default));
    }
    else {
        changeImg("./pokeball.jpeg")
    }
    
    

}

const changeImg = (url) => {

    const image = url
    let pokeimg = document.getElementById("pokeImage")
    pokeimg.src = url
}

