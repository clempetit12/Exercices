class Task {
    static taskCount = 0

    constructor(name, deadline,completeed) {
        this.name = name
        this.deadline = deadline
        this.completeed= completeed
        this.idTask = ++Task.taskCount
        
    }

    marquerComplet() {
        this.completee = true;
      }
    
      estCompletee() {
        return this.completee;
      }

    
}

export default Task