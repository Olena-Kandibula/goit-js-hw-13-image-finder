
const API_KEY = '22960570-8de4834e5e1a62c8570402763';
        const BASE_URL = 'https://pixabay.com/api/';

export default class ImgApiService {
    constructor() {
        this.searchQuery = '';
        this.page = 1;
    }

    fetchImg() {
        // console.log(this)        
        
        const url = `${BASE_URL}?key=${API_KEY}&q=${this.searchQuery}&image_type=photo&orientation=horizontal&page=${this.page}&per_page=12`
        
        return fetch(url)
            
            .then(response => 
                // console.log(response.json())
                response.json()
            )
            .then(( images ) => {             
                
                return images.hits;
            })
            .catch(error => console.warn(error));
        
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
