class Task {
  done: boolean = false;

  constructor(public descriptionParameter: string, public priorityParameter: string) {}

  markDone(){
    this.done = true;
  }

}

var tasks: Task[] = [];
tasks.push(new Task('Do the dishes.', 'Medium'));
tasks.push(new Task('Buy chocolate.', 'Low'));
tasks.push(new Task('Do laundry.', 'High'));

tasks[0].markDone();

for(var task of tasks ) {
  console.log(task);
}
