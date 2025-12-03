const dogsDiv = document.querySelector('.dogs_container');
const btn = document.querySelector('button')
async function getDogs () {
    try {
        const fetchData = await fetch('https://dog.ceo/api/breeds/image/random/20');
        const data = await fetchData.json();
        const urls = data.message;
        dogsDiv.innerHTML = ''
        for (const url of urls) {
            displayDogs(url)
        }
    } catch (e) {
        console.error(e)
    }
}

function displayDogs (url) {
    const dogImage = document.createElement('img');
    dogImage.alt = 'dog';
    dogImage.src = url;
    dogImage.style.width = '100%';
    dogImage.style.height = '100%';
    dogsDiv.appendChild(dogImage)
}

btn.addEventListener('click', getDogs)
