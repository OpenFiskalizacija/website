import { Button } from "@/components/ui/button";
import { Github, Heart } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-24 bg-card">
      <div className="container px-6">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl gradient-hero mb-8">
            <Heart className="w-8 h-8 text-primary-foreground" />
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Pridružite se zajednici
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto">
            OpenFiskalizacija je projekt zajednice. Vaš doprinos, bilo kroz kod,
            dokumentaciju ili povratne informacije, pomaže u razvoju boljeg
            rješenja za sve.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="github" size="lg" asChild>
              <a
                href="https://github.com/OpenFiskalizacija/OpenFiskalizacija"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="w-5 h-5" />
                Pregledaj repozitorij
              </a>
            </Button>
          </div>

          <p className="mt-8 text-sm text-muted-foreground">
            Licencirano pod GPL-2.0 licencom • Slobodno za korištenje
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTA;
