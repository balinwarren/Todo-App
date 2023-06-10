export default class UI {

    static createHome (){
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
        mainScreen.appendChild(UI.createTaskList());

        document.body.appendChild(mainScreen);
    }

    //sidebar dom construction
    static createSideBar (){
        const sideBar = document.createElement('div');
        sideBar.classList.add('side-bar');

        const inboxTab = UI.createTab('fa-solid','fa-inbox', 'inbox-icon', 'Inbox', true);
        sideBar.appendChild(inboxTab);

        const todayTab = UI.createTab('fa-solid', 'fa-calendar-day', 'today-icon', 'Today', false);
        sideBar.appendChild(todayTab);

        const weekTab = UI.createTab('fa-solid', 'fa-calendar-week', 'week-icon', 'This Week', false);
        sideBar.appendChild(weekTab);

        const projectsTab = UI.createTab('fa-solid', 'fa-caret-down', 'project-icon', 'Projects', false);
        projectsTab.id = 'projects-tab';
        sideBar.appendChild(projectsTab);

        return sideBar;
    }

    static createTab (iconClass, iconName, iconId, labelText, isActive){
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
        
        if (isActive) {
            tab.classList.add('active');
        }

        return tab;
    }

    //task screen dom construction
    static createTaskList (){
        const taskList = document.createElement('div');
        taskList.classList.add('task-list-container');

        const title = document.createElement('p');
        title.innerHTML = 'Inbox';
        title.classList.add('title-text');
        title.classList.add('task-list-item');
        taskList.appendChild(title);

        return taskList;
    }
}