import { Link } from "react-router";
import { ArrowRight, TrendingDown, Target, Users, BarChart3, CheckCircle2, GitCompare } from "lucide-react";
import { Button } from "../components/ui/button";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-white via-blue-50/30 to-white py-24 md:py-32 overflow-hidden">
        {/* Decorative blobs */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-primary/10 to-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-blue-500/10 to-primary/10 rounded-full blur-3xl"></div>
        
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2.5 px-4 py-2 bg-gradient-to-r from-primary/10 to-blue-500/10 border border-primary/20 text-primary rounded-full text-[14px] font-medium shadow-sm">
                <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                Plateforme HR Tech nouvelle génération
              </div>
              
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-[1.1] tracking-tight">
                La culture n'est plus invisible.<br />
                <span className="bg-gradient-to-r from-primary to-blue-700 bg-clip-text text-transparent">Elle devient mesurable.</span>
              </h1>
              
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-xl">
                Mesurez la compatibilité culturelle entre votre organisation, vos équipes et vos candidats. 
                Réduisez les erreurs de recrutement et prenez des décisions RH basées sur des données concrètes.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 pt-2">
                <Link to="/contact">
                  <Button size="lg" className="w-full sm:w-auto rounded-full text-base px-8 shadow-xl shadow-primary/25 hover:shadow-2xl hover:shadow-primary/30 transition-all duration-300 hover:scale-105">
                    Demander une démo
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
                <Link to="/product">
                  <Button variant="outline" size="lg" className="w-full sm:w-auto rounded-full text-base px-8 border-2 hover:bg-accent/60 hover:border-primary/30 transition-all duration-300">
                    Découvrir le produit
                  </Button>
                </Link>
              </div>
            </div>
            
            {/* Premium mockup with floating cards */}
            <div className="relative">
              {/* Main dashboard mockup */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-border/60 bg-white p-4 backdrop-blur-sm">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1575388902449-6bca946ad549?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBhbmFseXRpY3MlMjBkYXNoYm9hcmQlMjBpbnRlcmZhY2V8ZW58MXx8fHwxNzc0Nzk0NjA5fDA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Dashboard DCID-RH"
                  className="w-full rounded-xl"
                />
              </div>
              
              {/* Floating card 1 - top left */}
              <div className="absolute -top-8 -left-8 bg-white rounded-2xl shadow-xl border border-border/60 p-5 backdrop-blur-sm hidden lg:block animate-float">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-green-400 to-green-600 rounded-xl flex items-center justify-center">
                    <CheckCircle2 className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground">Compatibilité</div>
                    <div className="text-xl font-bold text-foreground">92%</div>
                  </div>
                </div>
              </div>
              
              {/* Floating card 2 - bottom right */}
              <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-xl border border-border/60 p-5 backdrop-blur-sm hidden lg:block animate-float-delayed">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-primary to-blue-700 rounded-xl flex items-center justify-center">
                    <BarChart3 className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground">Candidats</div>
                    <div className="text-xl font-bold text-foreground">156</div>
                  </div>
                </div>
              </div>
              
              {/* Light effects */}
              <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-gradient-to-tl from-primary/20 to-blue-500/20 rounded-full blur-3xl"></div>
              <div className="absolute -top-8 -left-8 w-40 h-40 bg-gradient-to-br from-blue-500/15 to-primary/15 rounded-full blur-3xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-24 bg-gradient-to-b from-white to-slate-50/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground tracking-tight">
              Le coût d'un mauvais recrutement
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Les décisions RH basées uniquement sur l'intuition entraînent des erreurs coûteuses
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
            <div className="group bg-gradient-to-br from-red-50 to-white rounded-2xl p-8 border border-red-200/60 shadow-sm hover:shadow-xl hover:shadow-red-500/10 transition-all duration-300 hover:-translate-y-1">
              <div className="w-14 h-14 bg-gradient-to-br from-red-500 to-red-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-red-500/25">
                <TrendingDown className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-3">30% de turnover</h3>
              <p className="text-muted-foreground leading-relaxed">
                dû à un mauvais alignement culturel entre le candidat et l'entreprise
              </p>
            </div>

            <div className="group bg-gradient-to-br from-orange-50 to-white rounded-2xl p-8 border border-orange-200/60 shadow-sm hover:shadow-xl hover:shadow-orange-500/10 transition-all duration-300 hover:-translate-y-1">
              <div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-orange-500/25">
                <Target className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-3">Décisions à l'intuition</h3>
              <p className="text-muted-foreground leading-relaxed">
                sans données objectives sur la compatibilité culturelle réelle
              </p>
            </div>

            <div className="group bg-gradient-to-br from-yellow-50 to-white rounded-2xl p-8 border border-yellow-200/60 shadow-sm hover:shadow-xl hover:shadow-yellow-500/10 transition-all duration-300 hover:-translate-y-1">
              <div className="w-14 h-14 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-yellow-500/25">
                <Users className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-3">Impact sur les équipes</h3>
              <p className="text-muted-foreground leading-relaxed">
                démotivation et perte de productivité suite à des intégrations ratées
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-24 bg-gradient-to-br from-blue-50/40 via-white to-blue-50/40">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
            <div className="order-2 md:order-1 relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-border/60 bg-white p-5 backdrop-blur-sm">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1767482890839-bf17e605db51?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwdmlzdWFsaXphdGlvbiUyMHJhZGFyJTIwY2hhcnR8ZW58MXx8fHwxNzc0Nzk3OTkxfDA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Radar de compatibilité culturelle"
                  className="w-full rounded-xl"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-br from-primary/20 to-blue-500/20 rounded-full blur-3xl"></div>
            </div>

            <div className="order-1 md:order-2 space-y-7">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground tracking-tight leading-tight">
                Transformez la culture en données mesurables
              </h2>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                DCID-RH analyse et quantifie la compatibilité culturelle à trois niveaux : 
                l'organisation, les équipes et les candidats.
              </p>
              <ul className="space-y-5">
                <li className="flex items-start gap-4">
                  <div className="w-7 h-7 bg-gradient-to-br from-primary to-blue-700 rounded-xl flex items-center justify-center flex-shrink-0 mt-1 shadow-lg shadow-primary/25">
                    <CheckCircle2 className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1.5 text-lg">Évaluation systémique</h4>
                    <p className="text-muted-foreground leading-relaxed">Analyse complète de la culture organisationnelle et d'équipe</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-7 h-7 bg-gradient-to-br from-primary to-blue-700 rounded-xl flex items-center justify-center flex-shrink-0 mt-1 shadow-lg shadow-primary/25">
                    <CheckCircle2 className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1.5 text-lg">Scoring de compatibilité</h4>
                    <p className="text-muted-foreground leading-relaxed">Scores objectifs pour chaque dimension culturelle</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-7 h-7 bg-gradient-to-br from-primary to-blue-700 rounded-xl flex items-center justify-center flex-shrink-0 mt-1 shadow-lg shadow-primary/25">
                    <CheckCircle2 className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1.5 text-lg">Aide à la décision</h4>
                    <p className="text-muted-foreground leading-relaxed">Recommandations basées sur les données d'alignement</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Model Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground tracking-tight">
              Un modèle à trois niveaux
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              Analysez la compatibilité à chaque niveau pour des décisions RH optimales
            </p>
          </div>

          <div className="relative max-w-6xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="group bg-white rounded-3xl p-10 border-2 border-primary/20 shadow-lg hover:shadow-2xl hover:shadow-primary/10 transition-all duration-300 hover:-translate-y-2">
                <div className="w-20 h-20 bg-gradient-to-br from-primary to-blue-700 rounded-3xl flex items-center justify-center mb-8 mx-auto shadow-xl shadow-primary/30">
                  <BarChart3 className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-center text-foreground mb-4">
                  Organisation
                </h3>
                <p className="text-center text-muted-foreground leading-relaxed">
                  Culture globale de l'entreprise, valeurs et environnement de travail
                </p>
              </div>

              <div className="group bg-white rounded-3xl p-10 border-2 border-primary/20 shadow-lg hover:shadow-2xl hover:shadow-primary/10 transition-all duration-300 hover:-translate-y-2">
                <div className="w-20 h-20 bg-gradient-to-br from-primary to-blue-700 rounded-3xl flex items-center justify-center mb-8 mx-auto shadow-xl shadow-primary/30">
                  <Users className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-center text-foreground mb-4">
                  Équipe
                </h3>
                <p className="text-center text-muted-foreground leading-relaxed">
                  Dynamique spécifique du groupe, style de collaboration et objectifs
                </p>
              </div>

              <div className="group bg-white rounded-3xl p-10 border-2 border-primary/20 shadow-lg hover:shadow-2xl hover:shadow-primary/10 transition-all duration-300 hover:-translate-y-2">
                <div className="w-20 h-20 bg-gradient-to-br from-primary to-blue-700 rounded-3xl flex items-center justify-center mb-8 mx-auto shadow-xl shadow-primary/30">
                  <Target className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-center text-foreground mb-4">
                  Candidat
                </h3>
                <p className="text-center text-muted-foreground leading-relaxed">
                  Profil culturel individuel, motivations et préférences de travail
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-24 bg-gradient-to-b from-slate-50/50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground tracking-tight">
              Comment ça fonctionne
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              Un processus simple en trois étapes pour des décisions RH éclairées
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="relative">
              <div className="bg-white rounded-3xl p-10 shadow-lg border border-border/60 h-full hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-blue-700 text-white rounded-2xl flex items-center justify-center mb-6 text-2xl font-bold shadow-xl shadow-primary/30">
                  1
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">Évaluer</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Collectez les données culturelles de votre organisation, vos équipes et vos candidats via des questionnaires scientifiques
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="bg-white rounded-3xl p-10 shadow-lg border border-border/60 h-full hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-blue-700 text-white rounded-2xl flex items-center justify-center mb-6 text-2xl font-bold shadow-xl shadow-primary/30">
                  2
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">Comparer</h3>
                <p className="text-muted-foreground leading-relaxed">
                  La plateforme analyse et compare automatiquement les profils culturels sur toutes les dimensions clés
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="bg-white rounded-3xl p-10 shadow-lg border border-border/60 h-full hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-blue-700 text-white rounded-2xl flex items-center justify-center mb-6 text-2xl font-bold shadow-xl shadow-primary/30">
                  3
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">Décider</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Obtenez des scores de compatibilité clairs et des recommandations actionnables pour vos décisions RH
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Differentiation */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16 space-y-4">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground tracking-tight">
                Une approche différente
              </h2>
              <p className="text-lg md:text-xl text-muted-foreground">
                DCID-RH va au-delà des tests de personnalité classiques
              </p>
            </div>

            <div className="bg-gradient-to-br from-blue-50 via-white to-blue-50/50 rounded-3xl p-10 md:p-14 border border-border/60 shadow-xl">
              <div className="grid md:grid-cols-2 gap-10">
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 bg-gradient-to-br from-red-500 to-red-600 rounded-xl flex items-center justify-center shadow-lg shadow-red-500/25">
                      <span className="text-white font-bold text-lg">✕</span>
                    </div>
                    <h3 className="text-2xl font-bold text-foreground">Outils traditionnels</h3>
                  </div>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3 text-muted-foreground">
                      <span className="text-red-500 mt-1 text-lg">•</span>
                      <span className="leading-relaxed">Tests de personnalité individuels</span>
                    </li>
                    <li className="flex items-start gap-3 text-muted-foreground">
                      <span className="text-red-500 mt-1 text-lg">•</span>
                      <span className="leading-relaxed">Analyse isolée du candidat</span>
                    </li>
                    <li className="flex items-start gap-3 text-muted-foreground">
                      <span className="text-red-500 mt-1 text-lg">•</span>
                      <span className="leading-relaxed">Pas de contexte organisationnel</span>
                    </li>
                    <li className="flex items-start gap-3 text-muted-foreground">
                      <span className="text-red-500 mt-1 text-lg">•</span>
                      <span className="leading-relaxed">Résultats difficiles à interpréter</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 bg-gradient-to-br from-primary to-blue-700 rounded-xl flex items-center justify-center shadow-lg shadow-primary/25">
                      <GitCompare className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-foreground">DCID-RH</h3>
                  </div>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3 text-foreground font-medium">
                      <span className="text-primary mt-1 text-lg">✓</span>
                      <span className="leading-relaxed">Analyse systémique à 3 niveaux</span>
                    </li>
                    <li className="flex items-start gap-3 text-foreground font-medium">
                      <span className="text-primary mt-1 text-lg">✓</span>
                      <span className="leading-relaxed">Compatibilité organisation-équipe-candidat</span>
                    </li>
                    <li className="flex items-start gap-3 text-foreground font-medium">
                      <span className="text-primary mt-1 text-lg">✓</span>
                      <span className="leading-relaxed">Contexte culturel complet</span>
                    </li>
                    <li className="flex items-start gap-3 text-foreground font-medium">
                      <span className="text-primary mt-1 text-lg">✓</span>
                      <span className="leading-relaxed">Scoring clair et actionnable</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-blue-600 to-blue-700"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjA1IiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-40"></div>
        
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Prêt à transformer vos décisions RH ?
          </h2>
          <p className="text-xl md:text-2xl text-blue-100 mb-10 max-w-3xl mx-auto leading-relaxed">
            Découvrez comment DCID-RH peut vous aider à réduire le turnover et améliorer vos recrutements
          </p>
          <Link to="/contact">
            <Button size="lg" variant="secondary" className="rounded-full text-lg px-10 shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105">
              Demander une démo gratuite
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
