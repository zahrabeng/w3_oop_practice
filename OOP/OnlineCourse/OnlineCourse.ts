import { Course } from './Course';

// this is a subclass of Course (the 'superclass'), which is why extends is used.
// inherits all of the course properties and methods whilst allowing the possibility to override/add to them.
// super() is  required if the parent class has a constructor
// it lets the subclass reuse the logic from the superclass

class OnlineCourse extends Course {
    platform: string;
    duration: number;

    constructor(platform: string, duration: number, courseName: string, instructor: string, credits: number) {
        super(courseName, instructor, credits);
        this.platform = platform;
        this.duration = duration;
    }

    isCourseEligableForACertificate() {
        this.duration > 4 
            ? console.log('This course is eligable for a certificate')
            : console.log('This course is not eligable for a certificate');
    }
};

const onlineCourse = new OnlineCourse('google', 6, 'marketing', 'ron', 10);
console.log(onlineCourse.isCourseEligableForACertificate());