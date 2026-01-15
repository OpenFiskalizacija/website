import { Button } from "@/components/ui/button";
import { Github, ExternalLink } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,hsl(var(--primary)/0.08)_0%,transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,hsl(var(--accent)/0.05)_0%,transparent_50%)]" />

      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px),
                           linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      <div className="container relative z-10 px-6 py-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div
            className="inline-flex items-center px-4 py-2 rounded-full bg-card border border-border shadow-soft mb-8 animate-fade-up"
            style={{ animationDelay: "0.1s" }}
          >
            <span className="text-sm font-medium text-muted-foreground">
              Open Source • Besplatno • Sigurno
            </span>
          </div>

          {/* Title */}
          <h1
            className="text-3xl sm:text-5xl md:text-7xl font-bold tracking-tight mb-6 animate-fade-up whitespace-nowrap"
            style={{ animationDelay: "0.2s" }}
          >
            <span className="text-foreground">Open</span>
            <span className="text-gradient">Fiskalizacija</span>
          </h1>

          {/* Subtitle */}
          <p
            className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto mb-4 animate-fade-up"
            style={{ animationDelay: "0.3s" }}
          >
            Vaša vlastita pristupna točka za Fiskalizaciju 2.0
          </p>

          <p
            className="text-lg text-muted-foreground/80 max-w-xl mx-auto mb-10 animate-fade-up"
            style={{ animationDelay: "0.4s" }}
          >
            Besplatan, siguran i transparentan mikroservis koji omogućuje slanje
            i primanje e-Računa bez posrednika.
          </p>

          {/* CTA Buttons */}
          <div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-up"
            style={{ animationDelay: "0.5s" }}
          >
            <Button variant="hero" size="lg" asChild>
              <a
                href="https://github.com/OpenFiskalizacija/OpenFiskalizacija"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="w-5 h-5" />
                Pogledaj na GitHubu
              </a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="#features">
                Saznaj više
                <ExternalLink className="w-4 h-4" />
              </a>
            </Button>
          </div>

          {/* Tech badges */}
          <div
            className="flex flex-wrap gap-3 justify-center mt-12 animate-fade-up"
            style={{ animationDelay: "0.6s" }}
          >
            {[
              "Python",
              "AS4 Protocol",
              "Zero Trust",
              "Docker Ready",
              "GPL-2.0",
            ].map((tech) => (
              <span
                key={tech}
                className="px-3 py-1.5 text-xs font-mono font-medium bg-card border border-border rounded-md text-muted-foreground"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default Hero;
