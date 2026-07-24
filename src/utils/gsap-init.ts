import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Registers GSAP's ScrollTrigger plugin once, synchronously, at module load, so
// any importer has it available before building a scroll timeline. GSAP silently
// no-ops a missing plugin, so importing this module keeps registration
// deterministic instead of relying on timing.
gsap.registerPlugin(ScrollTrigger);

export { gsap, ScrollTrigger };
