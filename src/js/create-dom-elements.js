import searchFoarmTmpl from '../templates/search-form.hbs';

export default
function creatDomElements() {
    const section = document.createElement('section');
    section.className = "#";
    section.innerHTML = searchFoarmTmpl()
    document.body.prepend(section);
    console.log(document.querySelector('#search-form'))
    document.querySelector('#search-form').insertAdjacentHTML('afterend', '<ul class="gallery"></ul>')
}
