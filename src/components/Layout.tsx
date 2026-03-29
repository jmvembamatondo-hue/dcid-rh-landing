import { Link, useLocation } from "react-router";
import { clsx } from "clsx";
import { Button } from "./ui/button";

const navLinks = [
  { to: "/", label: "Accueil" },
  { to: "/product", label: "Produit" },
  { to: "/use-cases", label: "Cas d'usage" },
  { to: "/why", label: "Pourquoi DCID-RH" },
  { to: "/about", label: "À propos" },
];

function Navbar() {
  const { pathname } = useLocation();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-2 font-bold text-xl text-primary">
          DCID-RH
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              className={clsx(
                "text-sm font-medium transition-colors hover:text-primary",
                pathname === to ? "text-primary" : "text-muted-foreground"
              )}
            >
              {label}
            </Link>
          ))}
        </nav>

        <Link to="/contact">
          <Button size="sm" className="rounded-full">
            Demander une démo
          </Button>
        </Link>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border/40 bg-slate-50/50 py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="font-bold text-xl text-primary mb-3">DCID-RH</div>
            <p className="text-sm text-muted-foreground max-w-xs leading-relaxed">
              La plateforme HR Tech qui mesure la compatibilité culturelle pour des décisions RH éclairées.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4 text-sm">Produit</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="/product" className="hover:text-primary transition-colors">Fonctionnalités</Link></li>
              <li><Link to="/use-cases" className="hover:text-primary transition-colors">Cas d'usage</Link></li>
              <li><Link to="/why" className="hover:text-primary transition-colors">Pourquoi DCID-RH</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4 text-sm">Entreprise</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="/about" className="hover:text-primary transition-colors">À propos</Link></li>
              <li><Link to="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-border/40 text-sm text-muted-foreground text-center">
          © {new Date().getFullYear()} DCID-RH. Tous droits réservés.
        </div>
      </div>
    </footer>
  );
}

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
