class Student {
    constructor(rollno, name, branch, section){
        this.rollno=rollno;
        this.name=name;
        this.branch=branch;
        this.section=section
    }
    greet(){
        console.log(`Hello ${this.name}`)
    }
}
const stud1 = new Student(1, "abc", "elce", "A");