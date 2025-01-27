import john from "@/assets/john.svg";
import peter from "@/assets/peter.svg";
import ekundayo from "@/assets/ekundayo.svg";

export const routes = [
  {
    path: "/",
    title: "Home",
  },
  {
    path: "/about",
    title: "About",
  },
  {
    path: "/service",
    title: "Services",
  },
  {
    path: "/contact",
    title: "Contact Us",
  },
];


export const images ={
    john,
    peter,
    ekundayo
}
export const testimonials = [
  {
    id: 1,
    title: "Dr Peter Saloma",
    role: "University Lecturer",
    compliment: "You and your company are great and i enjoy working with you.",
    image: images.peter
  },
  {
    id: 2,
    title: "Dr John Abioma",
    role: "University Lecturer",
    compliment: "You and your company are great and i enjoy working with you.",
    image: images.john
  },
  {
    id: 3,
    title: "Engr Ekundayo",
    role: "Town Planning Personnel",
    compliment: "Thank you so much for a job weldone",
    image: images.ekundayo
  },
];
