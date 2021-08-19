// const API_KEY = '22960570-8de4834e5e1a62c8570402763';
// const BASE_URL = 'https://pixabay.com/api/';
// const options = {
//             headers: {
//         Autorization: '22960570-8de4834e5e1a62c8570402763',
//         // Mode: 'no-cors',
//             //    Contant-type: 'application/json',
//             //    AccessControlAllowOrigin:'*', 
                
//                 // Access-Control-Allow-Origin: '22960570-8de4834e5e1a62c8570402763',
//             }
//         }

export default class ImgApiService {
    constructor() {
        this.searchQuery = '';
        this.page = 1;
    }

    fetchImg() {
        console.log(this)

        const API_KEY = '22960570-8de4834e5e1a62c8570402763';
        const BASE_URL = 'https://pixabay.com/api/';
        // const options = {
            // headers: {
        // key: '22960570-8de4834e5e1a62c8570402763',                   
        // 

            // },
        // };
        
        const url = `${BASE_URL}?key=${API_KEY}&q=${this.searchQuery}&image_type=photo&orientation=horizontal&page=${this.page}&per_page=12&fields=id`
        // const url = `https://pixabay.com/api/?key=22960570-8de4834e5e1a62c8570402763&q=cat&image_type=photo&orientation=horizontal&page=${this.page}&per_page=12`
                
        // return fetch(url, options)
            return fetch(url)
            
            // .then(response => response.json())

             .then((response) => {
                 if (!response.ok) throw Error(response.status);
                //  console.log(response)
                //  console.log(this.page)
            return response.json();
            })
            // .then(( images ) => {
            //     this.incrementPage();
            //     // console.log(images)
            //     // console.log(this.page)
            //     return images;
            // })
        
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
