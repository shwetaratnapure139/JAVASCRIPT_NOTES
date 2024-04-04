const course ={
    coursename:"Js in Hindi",
    price:"555",
    courseInstructor:"shweta"
}

const{courseInstructor:instructor}=course
//console.log(course["courseInstructor"]);
console.log(Object.keys(course));
//console.log(Object.entries(course));
console.log(instructor);

