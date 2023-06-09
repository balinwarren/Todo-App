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

        const inboxTab = UI.createTab('fa-solid','fa-inbox', 'inbox-icon', 'Inbox');
        sideBar.appendChild(inboxTab);

        const todayTab = UI.createTab('fa-solid', 'fa-calendar-day', 'today-icon', 'Today');
        sideBar.appendChild(todayTab);

        const weekTab = UI.createTab('fa-solid', 'fa-calendar-week', 'week-icon', 'This Week');
        sideBar.appendChild(weekTab);

        return sideBar;
    }

    static createTab (iconClass, iconName, iconId, labelText){
        const tab = document.createElement('div');
        tab.classList.add('tab');

        const icon = document.createElement('i');
        icon.classList.add(iconClass);
        icon.classList.add(iconName);
        icon.classList.add('tab-icon');
        icon.id = iconId;
        tab.appendChild(icon);

        const label = document.createElement('p');
        label.innerHTML = labelText;
        label.classList.add('tab-label');
        tab.appendChild(label);

        return tab;
    }
}