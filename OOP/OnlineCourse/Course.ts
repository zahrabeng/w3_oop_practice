export class Course {
    courseName: string;
    instructor: string;
    credits: number;

    constructor(courseName: string, instructor: string, credits: number) {
        this.courseName = courseName;
        this.instructor = instructor;
        this.credits = credits
    }
}