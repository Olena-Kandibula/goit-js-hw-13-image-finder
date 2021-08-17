import creatDomElements from './create-dom-elements';
import ImgApiService from './apiService';
creatDomElements()
console.log("show")
console.log(document.querySelector('#search-form'))

const refs = {
     searchFormEl: document.querySelector('#search-form'),
    galleryEl:document.querySelector('.gallery'),
}

const imagesApiService = new ImgApiService;
refs.searchFormEl.addEventListener('submit', onSearch);
console.log(imagesApiService)
console.log(imagesApiService.query)

function onSearch(e) {
    e.preventDefault();   
// console.log(e.currentTarget.creatDomElements.query.value)
    imagesApiService.query = e.currentTarget.creatDomElements.query.value;
    console.log(imagesApiService.query)
    if (imagesApiService.query === '') {
         return alert ('input is empty')
    }else
    {console.log("show444")}
}

