import { homeFaq } from "@/data/faq";
import FaqAccordion from "../ui/FaqAccordion";

export default function HomeFaq() {
  return (
    <section className="section section--black faq">
      <div className="container-clay faq__inner">
        <div className="faq__head">
          <div>
            <p className="eyebrow faq__eyebrow">FAQ</p>
            <h2 className="h-display faq__title section__title">Frequently asked questions</h2>
          </div>
        </div>

        <FaqAccordion items={homeFaq} />
      </div>
    </section>
  );
}