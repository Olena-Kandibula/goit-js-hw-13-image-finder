import creatDomElements from './create-dom-elements';
// import {creatDomElements, creatLoadMoreBtn} from './create-dom-elements'
import ImgApiService from './apiService';
import imgTmpl from '../templates/imgTmpl.hbs';
creatDomElements()

const refs = {
    searchFormEl: document.querySelector('#search-form'),    
    galleryEl: document.querySelector('.gallery'),
    loadMoreBtnEl: document.querySelector('.btn-more')
}

const imagesApiService = new ImgApiService;
refs.searchFormEl.addEventListener('submit', onSearch);
refs.loadMoreBtnEl.addEventListener('click', onLoadMore);

console.log(imagesApiService)

function onSearch(e) {
     e.preventDefault();     
    
    imagesApiService.query = e.currentTarget.elements.query.value;
    imagesApiService.resetPage();
    console.log(imagesApiService.query);
    
    imagesApiService.fetchImg()
    .then(onShowGallery)
    
    
}

function onShowGallery(images) {
    console.log(images)
    refs.galleryEl.innerHTML = imgTmpl(countries);
    
}

function onLoadMore() {
    console.log('load more')
    imagesApiService.fetchImg()
}


// fetchImg11()
// function fetchImg11() {
//         console.log(this)
//         // const url = `${BASE_URL}?key=${API_KEY}&q=${this.searchQuery}&image_type=photo`
//     const url ='pixabay.com/api/?image_type=photo&orientation=horizontal&q=cat&page=1&per_page=12&key=22960570-8de4834e5e1a62c8570402763'
//         // `${BASE_URL}?key=${API_KEY}&q=${this.searchQuery}&image_type=photo&orientation=horizontal&page=${this.page}&per_page=12`
//         // https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=что_искать&page=номер_страницы&per_page=12&key=твой_ключ

//         return fetch(url)
            
//             // .then(response => response.json())

//              .then((response) => {
//                  if (!response.ok) throw Error(response.status);
//             console.log(response)     
//             return response.json();
//             })
//             .then(({ images }) => {
//                 this.incrementPage();
//                 return images;
//             })
        
//     }

// function onSearch1() {
//     e.preventDefault();

//     return fetch('https://pixabay.com/api/?key=22960570-8de4834e5e1a62c8570402763&q=yellow+flowers&image_type=photo')
//         .then((response) => {
//                  if (!response.ok) throw Error(response.status);
//             console.log(response)     
//             return response.json();
//             })
//             .then(({ images }) => {
//                 this.incrementPage();
//                 return images;
//             })
// }

// var API_KEY = '22960570-8de4834e5e1a62c8570402763';
// var URL = "https://pixabay.com/api/?key="+API_KEY+"&q="+encodeURIComponent('red roses');
// $.getJSON(URL, function(data){
// if (parseInt(data.totalHits) > 0)
//     $.each(data.hits, function(i, hit){ console.log(hit.pageURL); });
// else
//     console.log('No hits');
// });

// function onSearch(e) {
//     e.preventDefault();   
// // console.log(e.currentTarget.creatDomElements.query.value)
//     imagesApiService.query = e.currentTarget.creatDomElements.query.value;
//     console.log(imagesApiService.query)
//     if (imagesApiService.query === '') {
//          return alert ('input is empty')
//     }else
//     {console.log("show444")}
// }

