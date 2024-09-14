
import BubbleText from "../BubbleText";
import { RevealBento } from "../RevealBento";


export const ContactContent = () => (
  <>
  <section className='h-[75vh] content-center'>
  <div className='animate-fade-in'>
    <RevealBento />
    </div>
    <div className="grid animate-float place-content-center">
    <BubbleText />
    </div>
    </section>
</>
);
