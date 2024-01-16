// Import necessary modules and components
import { motion, useTransform, useScroll } from "framer-motion";
import { WhatWeDoCard } from "../components";
import { useRef } from "react";

const WhoWeAre = () => {
// Create a ref for the target element
const targetRef = useRef(null);

// Get scroll position using useScroll
const { scrollYProgress } = useScroll({
target: targetRef,
});

// Map scroll position to x-axis values using useTransform
const x = useTransform(scrollYProgress, [0, 1], ["0%", "-75.7%"]);
return (
<section ref={targetRef} className="h-[200vh] pb-[2rem] relative">
<div className="sticky top-0 flex items-center h-screen overflow-hidden">
{/_ Apply motion to the list of cards _/}
<div className="flex flex-col">
<div className="top-0 left-0">
<h2 className="text-[64px] text-[#110326]">So who are we?</h2>
</div>
<motion.div style={{ x }} className="">
<div className="flex gap-8">
<WhatWeDoCard key={1} />
<WhatWeDoCard key={2} />
<WhatWeDoCard key={3} />
<WhatWeDoCard key={4} />
</div>
</motion.div>
</div>
</div>
</section>
);
};

// Export the WhoWeAre component as the default export
export default WhoWeAre;
