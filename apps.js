//request data from the API//

const url = `https://dog.ceo/api/breeds/image/random`;
const image = document.createElement('img');
const btn = document.querySelector('#get-image');

const getImages = () => {
fetch(url)
.then((res) => res.json())
.then((data) => {
    console.log(data);
    image.setAttribute('src', data.message);
    image.setAttribute('alt', 'dog');
    document.querySelector('#dogImage').appendChild(image);
});
};

btn.addEventListener('click', getImages);

image.setAttribute('height', 400);
image.setAttribute('width', 600);
//convert data into JSON//