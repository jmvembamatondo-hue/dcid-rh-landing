import { Link } from "react-router";
import { Target, Heart, Users, Lightbulb, ArrowRight } from "lucide-react";
import { Button } from "../components/ui/button";

export function About() {
  const values = [
    {
      icon: Target,
      title: "Excellence",
      description: "Nous visons l'excellence dans chaque aspect de notre plateforme, de la science à l'expérience utilisateur.",
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: Heart,
      title: "Impact humain",
      description: "Notre mission est de créer des environnements de travail où chacun peut s'épanouir et contribuer pleinement.",
      color: "from-red-500 to-red-600",
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "Nous repoussons les limites de l'analyse culturelle en combinant science, technologie et design.",
      color: "from-yellow-500 to-yellow-600",
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "Nous croyons en la co-construction avec nos clients pour développer les meilleures solutions.",
      color: "from-green-500 to-green-600",
    },
  ];

  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-white via-blue-50/30 to-white py-24 overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-primary/10 to-blue-500/10 rounded-full blur-3xl"></div>
        
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <div className="inline-flex items-center gap-2.5 px-4 py-2 bg-gradient-to-r from-primary/10 to-blue-500/10 border border-primary/20 text-primary rounded-full text-[14px] font-medium shadow-sm">
              Notre histoire
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-foreground tracking-tight">
              Réinventer les décisions RH
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
              DCID-RH est né d'une conviction : la culture est le levier le plus puissant 
              de performance et d'épanouissement en entreprise
            </p>
          </div>
        </div>
      </section>

      {/* Vision */}
      <section className="py-24 bg-gradient-to-b from-white to-slate-50/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-6">
                <div className="w-14 h-14 bg-gradient-to-br from-primary to-blue-700 rounded-2xl flex items-center justify-center">
                  <Target className="w-7 h-7 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-foreground">Notre vision</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Nous croyons qu'un monde du travail où chacun trouve sa place est possible. 
                  Pour cela, les organisations doivent mesurer et comprendre leur culture, 
                  et prendre des décisions RH basées sur des données objectives plutôt que sur l'intuition.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Notre vision est de devenir la référence mondiale en matière d'analyse de 
                  compatibilité culturelle, en aidant des millions de personnes à trouver 
                  les environnements où elles s'épanouiront.
                </p>
              </div>

              <div className="space-y-6">
                <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-purple-700 rounded-2xl flex items-center justify-center">
                  <Heart className="w-7 h-7 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-foreground">Notre mission</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Transformer la culture organisationnelle en données mesurables et actionnables. 
                  Nous fournissons aux professionnels RH et aux dirigeants les outils dont ils 
                  ont besoin pour :
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    <span className="text-muted-foreground">Réduire les erreurs de recrutement coûteuses</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    <span className="text-muted-foreground">Améliorer l'intégration et la rétention des talents</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    <span className="text-muted-foreground">Optimiser les mobilités internes</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    <span className="text-muted-foreground">Piloter les transformations culturelles</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-gradient-to-b from-slate-50/50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground tracking-tight">
              Nos valeurs
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Les principes qui guident notre travail et notre relation avec nos clients
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-10 border border-border/60 shadow-sm hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
                >
                  <div className={`w-16 h-16 bg-gradient-to-br ${value.color} rounded-2xl flex items-center justify-center mb-6 shadow-lg ${value.color.includes('blue') ? 'shadow-blue-500/25' : value.color.includes('red') ? 'shadow-red-500/25' : value.color.includes('yellow') ? 'shadow-yellow-500/25' : 'shadow-green-500/25'}`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">{value.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-16 text-center tracking-tight">
              Notre histoire
            </h2>
            
            <div className="space-y-8">
              <div className="bg-gradient-to-br from-blue-50 to-white rounded-2xl p-10 border border-border/60 shadow-sm hover:shadow-lg transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-primary to-blue-700 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg shadow-primary/25">
                    <span className="text-2xl font-bold text-white">1</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-foreground mb-3">Le constat</h3>
                    <p className="text-muted-foreground leading-relaxed text-lg">
                      Après avoir observé pendant des années les échecs de recrutement dus à un mauvais 
                      alignement culturel, nos fondateurs ont décidé qu'il fallait une meilleure approche. 
                      Les tests de personnalité et les entretiens traditionnels ne suffisaient plus.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-white rounded-2xl p-10 border border-border/60 shadow-sm hover:shadow-lg transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-primary to-blue-700 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg shadow-primary/25">
                    <span className="text-2xl font-bold text-white">2</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-foreground mb-3">La recherche</h3>
                    <p className="text-muted-foreground leading-relaxed text-lg">
                      En collaboration avec des chercheurs en psychologie organisationnelle et en 
                      sociologie du travail, nous avons développé une méthodologie d'analyse systémique 
                      à trois niveaux : organisation, équipe et individu.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-white rounded-2xl p-10 border border-border/60 shadow-sm hover:shadow-lg transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-primary to-blue-700 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg shadow-primary/25">
                    <span className="text-2xl font-bold text-white">3</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-foreground mb-3">La plateforme</h3>
                    <p className="text-muted-foreground leading-relaxed text-lg">
                      Nous avons créé DCID-RH pour rendre cette méthodologie accessible à toutes 
                      les organisations. Une plateforme SaaS moderne qui transforme des années de 
                      recherche en insights actionnables et décisions RH éclairées.
                    </p>
                  </div>
                </div>
              </div>

              <div className="relative overflow-hidden bg-gradient-to-br from-primary to-blue-700 rounded-2xl p-10 text-white shadow-xl">
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjA1IiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-40"></div>
                <div className="relative flex items-start gap-4">
                  <div className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl font-bold">4</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-3">Aujourd'hui</h3>
                    <p className="text-blue-100 leading-relaxed text-lg">
                      DCID-RH aide des centaines d'organisations à prendre de meilleures décisions RH. 
                      Nous continuons d'innover et d'améliorer notre plateforme pour avoir un impact 
                      positif sur des milliers de vies professionnelles.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team (placeholder) */}
      <section className="py-24 bg-gradient-to-b from-slate-50/50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-8 tracking-tight">
              Une équipe passionnée
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground mb-16 leading-relaxed max-w-3xl mx-auto">
              DCID-RH réunit des experts en psychologie organisationnelle, data science, 
              design produit et ingénierie logicielle. Ensemble, nous construisons l'avenir des décisions RH.
            </p>

            <div className="bg-white rounded-3xl p-10 md:p-14 border border-border/60 shadow-2xl">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
                <div>
                  <div className="text-5xl font-bold bg-gradient-to-r from-primary to-blue-700 bg-clip-text text-transparent mb-2">20+</div>
                  <div className="text-sm text-muted-foreground font-medium">Experts</div>
                </div>
                <div>
                  <div className="text-5xl font-bold bg-gradient-to-r from-primary to-blue-700 bg-clip-text text-transparent mb-2">15+</div>
                  <div className="text-sm text-muted-foreground font-medium">Années d'expérience</div>
                </div>
                <div>
                  <div className="text-5xl font-bold bg-gradient-to-r from-primary to-blue-700 bg-clip-text text-transparent mb-2">500+</div>
                  <div className="text-sm text-muted-foreground font-medium">Clients satisfaits</div>
                </div>
                <div>
                  <div className="text-5xl font-bold bg-gradient-to-r from-primary to-blue-700 bg-clip-text text-transparent mb-2">50K+</div>
                  <div className="text-sm text-muted-foreground font-medium">Évaluations réalisées</div>
                </div>
              </div>
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
                Rejoignez-nous dans cette mission
              </h2>
              <p className="text-xl md:text-2xl text-blue-100 mb-10 max-w-3xl mx-auto leading-relaxed">
                Découvrez comment DCID-RH peut transformer vos décisions RH et créer 
                un meilleur environnement de travail pour tous
              </p>
              <Link to="/contact">
                <Button size="lg" variant="secondary" className="rounded-full text-lg px-10 shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105">
                  Demander une démo
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