import type { Metadata } from "next";
import Reveal from "@/components/ui/Reveal";
import MainImage from "@/components/ui/MainImage";
import { clients } from "@/data/clients";

export const metadata: Metadata = {
  title: "Clients",
  description: "Startups, growing companies, and Fortune 100s that have trusted Clay with their brands and products.",
};

export default function ClientsPage() {
  return (
    <>
      <section className="section page-hero">
        <div className="container-clay">
          <p className="eyebrow">Clients</p>
          <h1 className="h-display page-hero__title">Teams we&rsquo;ve had the pleasure of serving.</h1>
          <p className="t-lede page-hero__lead" style={{ marginTop: 24, maxWidth: 640 }}>
            From Fortune 100s to bold startups, we work alongside companies that care about the quality of what they
            ship.
          </p>
        </div>
      </section>

      <section className="section clients">
        <div className="container-clay">
          <div className="clients-grid">
            {clients.map((client, i) => (
              <Reveal className="client-card" key={client.name} delay={(i % 4) * 70}>
                <div className="client-card__media">
                  <MainImage src={client.image} alt={client.name} sizes="(min-width: 1250px) 25vw, 50vw" />
                </div>
                <h2 className="client-card__name">{client.name}</h2>
                <p className="client-card__desc">{client.description}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}