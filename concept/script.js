const circle = document.getElementById("circle");

const observer = new IntersectionObserver((items) => {
    const trackingInfo = items[0];
    if (trackingInfo.isIntersecting) {
        console.log("Circle is visible");
        observer.disconnect();
    } else {
        console.log("Circle is not  visible");
    }
    // const trackingInfo = items[0];

    // if (trackingInfo.isIntersecting) {
    //     console.log("Circle is visible");
    //     observer.disconnect();
    // } else {
    //     console.log("Circle is not visible");
    // }
});

observer.observe(circle);

// class Person {
//     constructor(personN, personA) {
//         this.name = personN;
//         this.age = personA;
//     }
//     displayInfo() {
//         console.log(`Name: ${this.name}, Age: ${this.age}`);
//     }
// }
// const personOne = new Person("Rejaul karim", 20);
// personOne.displayInfo()
