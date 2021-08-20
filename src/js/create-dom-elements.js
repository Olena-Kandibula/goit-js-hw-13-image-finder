import sectionTmp from '../templates/sectionHtml.hbs';

export default
    function creatDomElements() {
    const section = document.createElement('section');   
    section.innerHTML = sectionTmp();   
    document.body.prepend(section);
}
