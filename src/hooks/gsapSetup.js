// gsapSetup.ts
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Observer } from "gsap/Observer";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(ScrollTrigger, Observer, SplitText);

export { gsap, ScrollTrigger, Observer, SplitText };
