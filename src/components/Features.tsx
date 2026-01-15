import { Shield, Zap, Code, Server, Lock, Users } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Zero Knowledge",
    description:
      "Servis ne pohranjuje niti obrađuje vaše račune. Potpuna privatnost podataka.",
  },
  {
    icon: Lock,
    title: "Zero Trust",
    description:
      "Dizajniran s principom nultog povjerenja. Svaki zahtjev je verificiran i siguran.",
  },
  {
    icon: Zap,
    title: "AS4 Protokol",
    description:
      "Potpuna implementacija AS4 protokola za siguran prijenos e-Računa.",
  },
  {
    icon: Server,
    title: "Mikroservis",
    description:
      "Lako se postavlja i skalira. Podržava Docker i sve moderne platforme.",
  },
  {
    icon: Code,
    title: "Open Source",
    description:
      "Potpuno otvoren kod. Transparentan i besplatan za korištenje.",
  },
  {
    icon: Users,
    title: "Zajednica",
    description: "Podrška zajednice i dokumentacija za brzi početak rada.",
  },
];

const Features = () => {
  return (
    <section id="features" className="py-24 bg-card">
      <div className="container px-6">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Zašto OpenFiskalizacija?
          </h2>
          <p className="text-lg text-muted-foreground">
            Potpuno kontrolirajte svoju fiskalizaciju bez ovisnosti o trećim
            stranama.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group p-6 rounded-xl bg-background border border-border hover:border-primary/30 hover:shadow-card transition-all duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-12 h-12 rounded-lg gradient-hero flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
