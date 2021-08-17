const API_KEY = '22960570-8de4834e5e1a62c8570402763';
const BASE_URL = 'https://pixabay.com/api/';
const options = {
            headers: {
                Autorization: '22960570-8de4834e5e1a62c8570402763',
            }
        }

export default class ImgApiService {
    constructor() {
        this.searchQuery = '';
        this.page = 1;
    }

    fetchImg() {
        // const url = `${BASE_URL}?key=${API_KEY}&q=${this.searchQuery}&image_type=photo`
        const url = `${BASE_URL}?key=${API_KEY}&q=${this.searchQuery}&image_type=photo&orientation=horizontal&page=${this.page}&per_page=12`
        // https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=что_искать&page=номер_страницы&per_page=12&key=твой_ключ

        return fetch(url, options) 
            .then(response => response.json())
            .then(({ images }) => {
                this.incrementPage();
                return images;
            })
        
    }

    incrementPage() {
        this.page += 1;
    }

    resetPage() {
        this.page = 1;
    }

    get query() {
        return this.searchQuery;
    }

    set query(newQuery) {
        this.searchQuery = newQuery;
    }
}
// ar API_KEY = '22960570-8de4834e5e1a62c8570402763';
// var URL = "https://pixabay.com/api/?key="+API_KEY+"&q="+encodeURIComponent('red roses');
// $.getJSON(URL, function(data){
// if (parseInt(data.totalHits) > 0)
//     $.each(data.hits, function(i, hit){ console.log(hit.pageURL); });
// else
//     console.log('No hits');
// });

// const BASE_URL = '#';

//     function fetchCountries(searchQuery) {

//     return fetch(`${BASE_URL}/name/${searchQuery}?fields=name;capital;population;languages;flag`)        
                
//         .then((response) => {
//             if (!response.ok) throw Error(response.status);            
//             return response.json();
//         })        
//     }              

// function onFetchError(eror) {     
//     refs.countriesList.innerHTML = '';
//     onAlertErrorInput
// }
// export default {fetchCountries}