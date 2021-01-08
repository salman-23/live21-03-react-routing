// These comments do magic. Hover the variables to see it!

/**
 * An instructor object with instructor details.
 *
 * @typedef {Object} Instructor
 * @property {string} name The name of the instructor.
 * @property {string} emoji The emoji used to iconise the instructor.
 * @property {string} slug The unique slug used to identify the instructor.
 * @property {string} github The GitHub account handle of the instructor.
 * @property {string} description A brief description about the instructor.
 *
 * @example
 * {
 *     name: "Nikita",
 *     emoji: "👽",
 *     slug: "nikita",
 *     github: "cheloveq",
 *     description: "Nikita is a very funky guy!"
 * }
 */

/**
 * An array of instructors.
 *
 * @type {Array<Instructor>}
 */
const instructors = [
  {
    name: "Hamza",
    emoji: "🌚",
    slug: "hamza",
    github: "DarthHamza",
    description: "From The Death Star, emerges the most eloquent instructor.",
  },
  {
    name: "Laila",
    emoji: "🐥",
    slug: "laila",
    github: "Lailz",
    description: "Laila is the cutest instructor in the bootcamp.",
  },
  {
    name: "Hasan",
    emoji: "🦍",
    slug: "hasan",
    github: "theHasanas",
    description: "Hasan could have been the cutest instructor in the bootcamp.",
  },
];

export default instructors;
