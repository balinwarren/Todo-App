import { toDate, isToday, isThisWeek, subDays } from "date-fns";

export default class Project {

    constructor(name) {
        this.name = name;
        this.tasks = [];
    }

    setName(name){
        this.name = name;
    }

    getName(){
        return this.name;
    }

    setTasks(tasks){
        this.tasks = tasks;
    }

    getTasks(){
        return this.tasks;
    }

    getTask(taskName){
        return this.tasks.find((task) => task.getName() === taskName);
    }

    contains(taskName){
        return this.tasks.some((task) => task.getName() === taskName);
    }

    addTask(newTask){
        if (this.tasks.find((task) => task.getName() === newTask)){
            return
        }
        this.tasks.push(newTask);
    }

    deleteTask(taskName){
        this.tasks = this.tasks.filter((task) => task.name !== taskName);
    }

    getDaily() {
        return this.tasks.filter((task) => {
            const taskDate = new Date(task.getDueDateFormatted());
            return isToday(toDate(taskDate));
        })
    }

    getWeekly() {
        return this.tasks.filter((task) => {
            const taskDate = new Date(task.getDueDateFormatted());
            return isThisWeek(subDays(toDate(taskDate), 1));
        })
    }
}