const dogsDiv = document.querySelector('.dogs_container');
const btn = document.querySelector('button')
async function getDogs () {
    const { loader, loaderText } = createLoader();
    try {
        const fetchData = await fetch('https://dog.ceo/api/breeds/image/random/20');
        const data = await fetchData.json();
        const urls = data.message;
        dogsDiv.innerHTML = ''
        await new Promise(resolve => setTimeout(resolve, 500));
        for (const url of urls) {
            displayDogs(url)
        }
    } catch (e) {
        console.error(e)
    } finally {
        removeLoader(loader, loaderText);
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

function createLoader() {
    const loader = document.createElement('div');
    loader.className = 'loader';

    const loaderText = document.createElement('div');
    loaderText.className = 'loader-text';
    loaderText.textContent = 'Загружаем собачек...';

    dogsDiv.appendChild(loader);
    dogsDiv.appendChild(loaderText);

    return { loader, loaderText };
}

function removeLoader(loader, loaderText) {
    if (loader) loader.remove();
    if (loaderText) loaderText.remove();
}

btn.addEventListener('click', getDogs)
