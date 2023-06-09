export default class UI {

    static loadHome (){
        UI.createHeader();
    }

    static createHeader(){
        // creates navbar container
        const headerContainer = document.createElement('div');
        headerContainer.classList.add("navbar");
        document.body.appendChild(headerContainer);

        // creates left side icon set
        const leftIcons = document.createElement('div');
        leftIcons.classList.add('nav-icons');
        leftIcons.classList.add('left');
        headerContainer.appendChild(leftIcons);

        const stackIcon = document.createElement('i');
        stackIcon.classList.add('fa-solid');
        stackIcon.classList.add('fa-bars');
        stackIcon.classList.add('icon');
        leftIcons.appendChild(stackIcon);

        const homeIcon = document.createElement('i');
        homeIcon.classList.add('fa-solid');
        homeIcon.classList.add('fa-house');
        homeIcon.classList.add('icon');
        leftIcons.appendChild(homeIcon);

        const plusIcon = document.createElement('i');
        plusIcon.classList.add('fa-solid');
        plusIcon.classList.add('fa-plus');
        plusIcon.classList.add('icon');
        leftIcons.appendChild(plusIcon);
    }
}