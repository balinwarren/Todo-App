export default class UI {

    static loadHome (){
        UI.createHeader();
        UI.createMain();
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

    static createMain (){
        const mainScreen = document.createElement('div');
        mainScreen.classList.add('main-screen');

        mainScreen.appendChild(UI.createSideBar());

        document.body.appendChild(mainScreen);
    }

    static createSideBar (){
        const sideBar = document.createElement('div');
        sideBar.classList.add('side-bar');

        let tabs = UI.createTabs();
        tabs.forEach(element => sideBar.appendChild(element));

        return sideBar;
    }

    static createTabs (){
        const inboxTab = document.createElement('div');
        inboxTab.classList.add('tab');

        const inboxIcon = document.createElement('i');
        inboxIcon.classList.add('fa-solid');
        inboxIcon.classList.add('fa-inbox');
        inboxIcon.classList.add('tab-icon');
        inboxIcon.id = "inbox-icon";
        inboxTab.appendChild(inboxIcon);

        const inboxLabel = document.createElement('p');
        inboxLabel.innerHTML = 'Inbox';
        inboxLabel.classList.add('tab-label');
        inboxTab.appendChild(inboxLabel);

        return [inboxTab];
    }
}