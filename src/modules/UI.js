export default class UI {

    static loadHome (){
        UI.createHeader();
    }

    static createHeader(){
        const headerContainer = document.createElement('div');
        headerContainer.classList.add("navbar");
        document.body.appendChild(headerContainer);
    }
}