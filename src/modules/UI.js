export default class UI {

    static loadHome (){
        this.createHeader();
    }

    static createHeader(){
        const headerContainer = document.createElement('div');
        headerContainer.classList.add("navbar");
    }
}