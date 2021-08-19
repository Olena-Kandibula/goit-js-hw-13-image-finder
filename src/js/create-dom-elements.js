import searchFoarmTmpl from '../templates/search-form.hbs';

export default
function creatDomElements() {
    const section = document.createElement('section');
    section.className = "#";
    section.innerHTML = searchFoarmTmpl()
    document.body.prepend(section);
    // console.log(document.querySelector('#search-form'))
    document.querySelector('#search-form').insertAdjacentHTML('afterend', '<ul class="gallery"></ul>');
    document.querySelector('.gallery').insertAdjacentHTML('afterend', '<button type="submit" class="btn btn-more">Load more</button>');
        // visually - hidden
        
}

// function creatLoadMoreBtn() {
//     // const section = document.createElement('section');
//     // section.className = "#";
//     // section.innerHTML = searchFoarmTmpl()
//     // document.body.prepend(section);
//     // // console.log(document.querySelector('#search-form'))
//     document.querySelector('.gallery').insertAdjacentHTML('afterend', '<button type="submit" class="btn btn-more">Load more</button>')
// }

// export {creatDomElements, creatLoadMoreBtn}