import { logoClients, logoClientUrl } from "@/data/services";

export default function LogoWall({ dark = false }: { dark?: boolean }) {
  const items = [...logoClients, ...logoClients];

  return (
    <div className={dark ? "logo-marquee logo-marquee--dark" : "logo-marquee"}>
      <div className="logo-marquee__track">
        {items.map((l, i) => (
          <div className="logo-marquee__cell" key={`${l.name}-${i}`}>
            <img className="logo-marquee__img" src={logoClientUrl(l.image)} alt={l.name} width={130} height={68} loading="lazy" decoding="async" />
          </div>
        ))}
      </div>
    </div>
  );
}