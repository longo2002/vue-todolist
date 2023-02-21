console.log("works!")

const tasks =[]
console.log(tasks)

const { createApp } = Vue

createApp({
	data() {
		return {
			tasks: tasks,
			taskDescription: "",
            taskDone: false,
		}
	},
	methods: {
		addTaskBtn() {
			const newTask = this.taskDescription
			if(newTask === "" ){
                alert("Inserisci una task!")
            } else {
                this.tasks.push(newTask)
            }

			this.taskDescription = ""
		},
		removeTaskBtn(i) {
			this.tasks.splice(i, 1)
		},
        doneTaskBtn(){
            this.taskDone = true
        }

	},
}).mount("#app")
