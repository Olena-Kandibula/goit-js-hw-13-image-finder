import creatDomElements from './create-dom-elements';
import ImgApiService from './apiService';
import imgTmpl from '../templates/imgTmpl.hbs';
import  onAlertErrorInput from './notification';

creatDomElements()

const refs = {
    inputEl:document.querySelector('.input'),
    searchFormEl: document.querySelector('#search-form'),    
    galleryEl: document.querySelector('.gallery'),
    searchBtnEl:document.querySelector('.btn-submit'),
    loadMoreBtnEl: document.querySelector('.btn-more')
}

const imagesApiService = new ImgApiService;

refs.searchFormEl.addEventListener('submit', onSearch);
refs.loadMoreBtnEl.addEventListener('click', onLoadMore);

refs.inputEl.addEventListener('input', onSwitchSearchBtn);
refs.inputEl.addEventListener('keydown', onControlInput);



function onSearch(e) {
     e.preventDefault();     
    
    onSearchBtControl()
    imagesApiService.resetPage();
    
    imagesApiService.query = e.currentTarget.elements.query.value;
    imagesApiService.resetPage();
    onClearGallery()   
    
    imagesApiService
        .fetchImg()
        .then(onShowGallery)
    
}
function onShowGallery(images) {      
   
    if (images.length > 0 || imagesApiService.page === 42 ) {
        appendImagesMarkup(images)
        onRemoveLoadBtn()        
    } else {
         onAlertErrorInput() 
    }
}


function onLoadMore() {
    
    imagesApiService.incrementPage();    
    imagesApiService.fetchImg().then(appendImagesMarkup);   
    // console.log(refs.galleryEl.children.length)//к-во загруженных картинок 
    document.querySelector('.scroll-control').scrollIntoView({ block: "end", behavior: "smooth" });
}


function appendImagesMarkup(images) {         
    refs.galleryEl.insertAdjacentHTML('beforeend', imgTmpl(images));       
}

function onRemoveLoadBtn() {
    refs.loadMoreBtnEl.classList.remove("visually-hidden");
}

function onClearGallery() {
 refs.galleryEl.innerHTML = '';
}

function onSwitchSearchBtn(e) {
    let inputValue = e.target.value;    
    if(inputValue === '')
    refs.searchBtnEl.disabled = false;
}

function onControlInput(e) {    
    if ((this.value.length === 0 && e.which === 32)
        || (e.which >= 96 && e.which <= 105))        
        e.preventDefault();   
}

function onSearchBtControl() {
    console.log(imagesApiService.query)
    if (imagesApiService.query !== '') {
         refs.searchBtnEl.disabled = false;
    }
    refs.searchBtnEl.disabled = true;
}

function onLoadBtControl() {
    if (imagesApiService.query !== '' || images.length < 12) {
         refs.loadMoreBtnEl.classList.add("visually-hidden");
    }
    refs.loadMoreBtnEl.classList.remove("visually-hidden");
}


