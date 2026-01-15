import { Github } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-8 border-t border-border bg-background">
      <div className="container px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="font-bold">
            <span className="text-foreground">Open</span>
            <span className="text-gradient">Fiskalizacija</span>
          </div>

          <p className="text-sm text-muted-foreground text-center">
            Projekt pod pokroviteljstvom{" "}
            <a
              href="https://open.hr"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors underline"
            >
              Hrvatske udruge za otvorene sustave i Internet
            </a>
          </p>

          <a
            href="https://github.com/openfiskalizacija"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <Github className="w-4 h-4" />
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
