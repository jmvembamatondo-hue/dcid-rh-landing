import { Link } from "react-router";
import { 
  BarChart3, 
  Target, 
  Radar, 
  GitCompare, 
  Users, 
  CheckCircle2, 
  FileText,
  ArrowRight 
} from "lucide-react";
import { Button } from "../components/ui/button";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export function Product() {
  const features = [
    {
      icon: BarChart3,
      title: "Évaluation culturelle",
      description: "Questionnaires scientifiques pour mesurer la culture à tous les niveaux : organisation, équipe et candidat",
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: Target,
      title: "Scoring de compatibilité",
      description: "Calcul automatique des scores d'alignement culturel sur toutes les dimensions importantes",
      color: "from-indigo-500 to-indigo-600",
    },
    {
      icon: Radar,
      title: "Visualisation radar",
      description: "Radars interactifs pour comparer visuellement les profils culturels et identifier les écarts",
      color: "from-purple-500 to-purple-600",
    },
    {
      icon: GitCompare,
      title: "Analyse de compatibilité",
      description: "Comparaison détaillée entre les profils organisationnels, d'équipe et candidats",
      color: "from-pink-500 to-pink-600",
    },
    {
      icon: Users,
      title: "Simulation d'équipe",
      description: "Testez l'impact potentiel d'une nouvelle recrue sur la dynamique culturelle de l'équipe",
      color: "from-rose-500 to-rose-600",
    },
    {
      icon: CheckCircle2,
      title: "Aide à la décision",
      description: "Recommandations claires et actionnables basées sur les données d'alignement culturel",
      color: "from-orange-500 to-orange-600",
    },
    {
      icon: FileText,
      title: "Plan d'onboarding",
      description: "Générez des plans personnalisés pour faciliter l'intégration et l'alignement culturel",
      color: "from-amber-500 to-amber-600",
    },
  ];

  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-white via-blue-50/30 to-white py-24 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-primary/10 to-blue-500/10 rounded-full blur-3xl"></div>
        
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <div className="inline-flex items-center gap-2.5 px-4 py-2 bg-gradient-to-r from-primary/10 to-blue-500/10 border border-primary/20 text-primary rounded-full text-[14px] font-medium shadow-sm">
              Plateforme SaaS complète
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-foreground tracking-tight">
              Une suite complète pour vos décisions RH
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              Tous les outils dont vous avez besoin pour mesurer, analyser et optimiser la compatibilité culturelle dans votre organisation
            </p>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 bg-gradient-to-b from-white to-slate-50/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="group bg-white rounded-2xl p-8 border border-border/60 shadow-sm hover:shadow-2xl hover:shadow-primary/5 transition-all duration-300 hover:-translate-y-1"
                >
                  <div className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center mb-6 shadow-lg ${feature.color.includes('blue') ? 'shadow-blue-500/25' : feature.color.includes('purple') ? 'shadow-purple-500/25' : 'shadow-orange-500/25'}`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Dashboard Preview 1 */}
      <section className="py-24 bg-gradient-to-br from-blue-50/40 via-white to-blue-50/40">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
            <div className="space-y-7">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground tracking-tight leading-tight">
                Dashboard intuitif et puissant
              </h2>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                Une interface moderne qui centralise toutes vos données culturelles et facilite la prise de décision.
              </p>
              <ul className="space-y-5">
                <li className="flex items-start gap-4">
                  <div className="w-7 h-7 bg-gradient-to-br from-primary to-blue-700 rounded-xl flex items-center justify-center flex-shrink-0 mt-1 shadow-lg shadow-primary/25">
                    <CheckCircle2 className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1.5 text-lg">Vue d'ensemble en temps réel</h4>
                    <p className="text-muted-foreground leading-relaxed">Suivez vos métriques culturelles en un coup d'œil</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-7 h-7 bg-gradient-to-br from-primary to-blue-700 rounded-xl flex items-center justify-center flex-shrink-0 mt-1 shadow-lg shadow-primary/25">
                    <CheckCircle2 className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1.5 text-lg">Graphiques interactifs</h4>
                    <p className="text-muted-foreground leading-relaxed">Explorez vos données avec des visualisations dynamiques</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-7 h-7 bg-gradient-to-br from-primary to-blue-700 rounded-xl flex items-center justify-center flex-shrink-0 mt-1 shadow-lg shadow-primary/25">
                    <CheckCircle2 className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1.5 text-lg">Rapports personnalisables</h4>
                    <p className="text-muted-foreground leading-relaxed">Créez des rapports adaptés à vos besoins spécifiques</p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-border/60 bg-white p-5 backdrop-blur-sm">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1575388902449-6bca946ad549?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBhbmFseXRpY3MlMjBkYXNoYm9hcmQlMjBpbnRlcmZhY2V8ZW58MXx8fHwxNzc0Nzk0NjA5fDA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Dashboard principal"
                  className="w-full rounded-xl"
                />
              </div>
              <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-gradient-to-tl from-primary/20 to-blue-500/20 rounded-full blur-3xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Dashboard Preview 2 */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
            <div className="order-2 md:order-1 relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-border/60 bg-white p-5 backdrop-blur-sm">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1767482890839-bf17e605db51?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwdmlzdWFsaXphdGlvbiUyMHJhZGFyJTIwY2hhcnR8ZW58MXx8fHwxNzc0Nzk3OTkxfDA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Analyse de compatibilité"
                  className="w-full rounded-xl"
                />
              </div>
              <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-gradient-to-br from-blue-500/15 to-primary/15 rounded-full blur-3xl"></div>
            </div>

            <div className="order-1 md:order-2 space-y-7">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground tracking-tight leading-tight">
                Analyse de compatibilité avancée
              </h2>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                Comparez les profils culturels en profondeur et identifiez les zones d'alignement et de divergence.
              </p>
              <ul className="space-y-5">
                <li className="flex items-start gap-4">
                  <div className="w-7 h-7 bg-gradient-to-br from-primary to-blue-700 rounded-xl flex items-center justify-center flex-shrink-0 mt-1 shadow-lg shadow-primary/25">
                    <CheckCircle2 className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1.5 text-lg">Radars multidimensionnels</h4>
                    <p className="text-muted-foreground leading-relaxed">Visualisez la compatibilité sur toutes les dimensions</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-7 h-7 bg-gradient-to-br from-primary to-blue-700 rounded-xl flex items-center justify-center flex-shrink-0 mt-1 shadow-lg shadow-primary/25">
                    <CheckCircle2 className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1.5 text-lg">Scores détaillés</h4>
                    <p className="text-muted-foreground leading-relaxed">Obtenez des scores précis pour chaque critère culturel</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-7 h-7 bg-gradient-to-br from-primary to-blue-700 rounded-xl flex items-center justify-center flex-shrink-0 mt-1 shadow-lg shadow-primary/25">
                    <CheckCircle2 className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1.5 text-lg">Alertes automatiques</h4>
                    <p className="text-muted-foreground leading-relaxed">Soyez alerté des divergences culturelles importantes</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Integration & Security */}
      <section className="py-24 bg-gradient-to-b from-slate-50/50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground tracking-tight">
              Sécurité et intégration
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground">
              Une plateforme sécurisée qui s'intègre parfaitement dans votre écosystème RH
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-white rounded-2xl p-10 border border-border/60 shadow-sm hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-green-500/25">
                <CheckCircle2 className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Sécurité maximale</h3>
              <p className="text-muted-foreground leading-relaxed">
                Vos données sont chiffrées et hébergées sur des serveurs conformes RGPD
              </p>
            </div>

            <div className="bg-white rounded-2xl p-10 border border-border/60 shadow-sm hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-blue-500/25">
                <GitCompare className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Intégrations</h3>
              <p className="text-muted-foreground leading-relaxed">
                API REST pour s'intégrer avec vos outils RH existants (ATS, SIRH)
              </p>
            </div>

            <div className="bg-white rounded-2xl p-10 border border-border/60 shadow-sm hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-purple-500/25">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Support dédié</h3>
              <p className="text-muted-foreground leading-relaxed">
                Une équipe d'experts vous accompagne dans le déploiement et l'utilisation
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-3xl shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-br from-primary via-blue-600 to-blue-700"></div>
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjA1IiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-40"></div>
            
            <div className="relative p-12 md:p-20 text-center text-white">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Découvrez DCID-RH en action
              </h2>
              <p className="text-xl md:text-2xl text-blue-100 mb-10 max-w-3xl mx-auto leading-relaxed">
                Demandez une démonstration personnalisée et voyez comment notre plateforme peut transformer vos processus RH
              </p>
              <Link to="/contact">
                <Button size="lg" variant="secondary" className="rounded-full text-lg px-10 shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105">
                  Réserver une démo
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
