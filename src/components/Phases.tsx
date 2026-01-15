import { CheckCircle2, Circle, ArrowRight } from "lucide-react";

const phases = [
  {
    number: "01",
    title: "AS4 Pristupna točka",
    subtitle: "Faza 1 — Aktivna",
    status: "active",
    features: [
      "Potpuna AS4 implementacija",
      "Slanje Fiskalizacija 2.0 računa",
      "Primanje Fiskalizacija 2.0 računa",
      "Podrška za Fiskalizacija 1.0",
      "Zero knowledge & zero trust",
      "Docker deployment",
    ],
  },
  {
    number: "02",
    title: "Informacijski posrednik",
    subtitle: "Faza 2 — U razvoju",
    status: "upcoming",
    features: [
      "Postanite certificirani posrednik",
      "Upravljanje više klijenata",
      "Napredna administracija",
      "Proširena dokumentacija",
      "Enterprise podrška",
      "Dodatne integracije",
    ],
  },
];

const Phases = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container px-6">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Razvojni Plan
          </h2>
          <p className="text-lg text-muted-foreground">
            OpenFiskalizacija se razvija u fazama kako bi osigurala stabilnost i
            kvalitetu.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {phases.map((phase) => (
            <div
              key={phase.number}
              className={`relative p-8 rounded-2xl border-2 transition-all duration-300 ${
                phase.status === "active"
                  ? "border-primary bg-card shadow-card"
                  : "border-border bg-muted/30"
              }`}
            >
              {/* Status badge */}
              <div className="absolute -top-3 left-8">
                <span
                  className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold ${
                    phase.status === "active"
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted text-muted-foreground"
                  }`}
                >
                  {phase.status === "active" ? (
                    <>
                      <span className="w-1.5 h-1.5 rounded-full bg-primary-foreground animate-pulse-soft" />
                      Aktivno
                    </>
                  ) : (
                    "Uskoro"
                  )}
                </span>
              </div>

              {/* Phase number */}
              <div className="text-5xl font-bold text-muted-foreground/20 mb-4">
                {phase.number}
              </div>

              <h3 className="text-2xl font-bold text-foreground mb-1">
                {phase.title}
              </h3>
              <p className="text-sm text-muted-foreground mb-6">
                {phase.subtitle}
              </p>

              {/* Features list */}
              <ul className="space-y-3">
                {phase.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    {phase.status === "active" ? (
                      <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    ) : (
                      <Circle className="w-5 h-5 text-muted-foreground/50 mt-0.5 flex-shrink-0" />
                    )}
                    <span
                      className={`text-sm ${
                        phase.status === "active"
                          ? "text-foreground"
                          : "text-muted-foreground"
                      }`}
                    >
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Phases;
