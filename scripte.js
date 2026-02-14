console.log("succesfully connected")
const joke_button = document.querySelector(".but")
const display_joke = document.querySelector(".joke")

const get_joke = async () => {
    display_joke.textContent = "Loading..."

    try {
        const res = await fetch("https://v2.jokeapi.dev/joke/Any?type=single")
        const data = await res.json();
        display_joke.textContent = data.joke
    } catch (error) {
        display_joke.textContent = "Failed to fetch joke"
    }

}


joke_button.addEventListener("click", get_joke)