import { RevealBento } from "../RevealBento";
import { RevealLinks } from "../RevealLinks";

export const ContactContent = () => (
  <div>
    <h2>Contact Me ☎️</h2>
    <p>Discuss a project or just want to say hi?</p>
    <p>Phone: (763) 464-2656</p>
    <p>Email: sojkaa@proton.me</p>
    <RevealBento />
    <RevealLinks />
    <div className="grid grid-cols-1 gap-4 transition-[grid-template-columns] lg:grid-cols-[120px_1fr] lg:gap-8 lg:[&:has(>*:first-child:hover)]:grid-cols-[160px_1fr]">
      <div className="h-32 rounded-lg bg-gray-200"></div>
      <div className="h-32 rounded-lg bg-gray-200"></div>
    </div>
  </div>
);
