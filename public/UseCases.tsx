import { Link } from "react-router";
import { UserPlus, Users, TrendingUp, Target, ArrowRight } from "lucide-react";
import { Button } from "../components/ui/button";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export function UseCases() {
  const useCases = [
    {
      icon: UserPlus,
      title: "Recrutement",
      subtitle: "Recrutez les bons talents",
      description: "Identifiez les candidats qui s'alignent vraiment avec votre culture d'entreprise et d'équipe. Réduisez les erreurs de recrutement et le turnover précoce.",
      benefits: [
        "Réduction du temps de recrutement de 30%",
        "Diminution du turnover pendant la première année",
        "Meilleure satisfaction des managers",
        "ROI mesurable sur chaque embauche",
      ],
      color: "from-blue-500 to-blue-600",
      image: "https://images.unsplash.com/photo-1758518730384-be3d205838e8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBidXNpbmVzcyUyMGhhbmRzaGFrZXxlbnwxfHx8fDE3NzQ3MzA1NDV8MA&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      icon: Target,
      title: "Onboarding",
      subtitle: "Intégrez efficacement",
      description: "Créez des plans d'onboarding personnalisés basés sur les écarts culturels identifiés. Accélérez l'intégration et la montée en compétence.",
      benefits: [
        "Plans d'intégration sur-mesure",
        "Réduction du temps d'adaptation",
        "Meilleure rétention des nouveaux talents",
        "Accompagnement ciblé et efficace",
      ],
      color: "from-green-500 to-green-600",
      image: "https://images.unsplash.com/photo-1630487656049-6db93a53a7e9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHRlYW0lMjBtZWV0aW5nJTIwb2ZmaWNlfGVufDF8fHx8MTc3NDcyMTU4NXww&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      icon: Users,
      title: "Mobilité interne",
      subtitle: "Optimisez les évolutions",
      description: "Évaluez la compatibilité culturelle pour les promotions et changements d'équipe. Assurez le succès des mobilités internes et la satisfaction des collaborateurs.",
      benefits: [
        "Mobilités internes réussies",
        "Fidélisation des talents clés",
        "Gestion prévisionnelle optimisée",
        "Développement des carrières aligné",
      ],
      color: "from-purple-500 to-purple-600",
      image: "https://images.unsplash.com/photo-1646579886741-12b59840c63f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNoJTIwc3RhcnR1cCUyMHRlYW0lMjBjb2xsYWJvcmF0aW9ufGVufDF8fHx8MTc3NDcwMjM3OXww&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      icon: TrendingUp,
      title: "Diagnostic culturel",
      subtitle: "Comprenez votre culture",
      description: "Cartographiez la culture de votre organisation et de vos équipes. Identifiez les forces, les écarts et les opportunités d'évolution culturelle.",
      benefits: [
        "Vision claire de votre culture réelle",
        "Identification des sous-cultures",
        "Pilotage des transformations",
        "Alignement stratégique renforcé",
      ],
      color: "from-orange-500 to-orange-600",
      image: "https://images.unsplash.com/photo-1765366417030-16d9765d920a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3Jwb3JhdGUlMjBvZmZpY2UlMjBtb2Rlcm4lMjB3b3Jrc3BhY2V8ZW58MXx8fHwxNzc0Nzk3OTkxfDA&ixlib=rb-4.1.0&q=80&w=1080",
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
              Solutions adaptées à vos besoins
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-foreground tracking-tight">
              DCID-RH pour tous vos enjeux RH
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              Du recrutement au développement des talents, utilisez la compatibilité culturelle comme levier de performance
            </p>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-24 bg-gradient-to-b from-white to-slate-50/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-32">
            {useCases.map((useCase, index) => {
              const Icon = useCase.icon;
              const isEven = index % 2 === 0;

              return (
                <div
                  key={index}
                  className={`grid md:grid-cols-2 gap-12 items-center ${
                    !isEven ? "md:flex-row-reverse" : ""
                  }`}
                >
                  <div className={`space-y-6 ${!isEven ? "md:order-2" : ""}`}>
                    <div className={`w-14 h-14 bg-gradient-to-br ${useCase.color} rounded-2xl flex items-center justify-center`}>
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    
                    <div>
                      <p className="text-primary font-semibold mb-2">{useCase.subtitle}</p>
                      <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                        {useCase.title}
                      </h2>
                      <p className="text-lg text-muted-foreground">
                        {useCase.description}
                      </p>
                    </div>

                    <div className="bg-white rounded-2xl p-6 border border-border">
                      <h3 className="font-semibold text-foreground mb-4">Bénéfices clés :</h3>
                      <ul className="space-y-3">
                        {useCase.benefits.map((benefit, idx) => (
                          <li key={idx} className="flex items-start gap-3">
                            <div className="w-5 h-5 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                              <div className="w-2 h-2 bg-primary rounded-full"></div>
                            </div>
                            <span className="text-muted-foreground">{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className={`relative ${!isEven ? "md:order-1" : ""}`}>
                    <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-border bg-white p-4">
                      <ImageWithFallback
                        src={useCase.image}
                        alt={useCase.title}
                        className="w-full rounded-lg"
                      />
                    </div>
                    <div className={`absolute -bottom-6 ${isEven ? "-right-6" : "-left-6"} w-32 h-32 bg-gradient-to-br ${useCase.color} opacity-20 rounded-full blur-3xl`}></div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Success Story */}
      <section className="py-20 bg-accent/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-3xl p-8 md:p-12 border border-border shadow-xl">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <span className="text-3xl">💡</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-2">
                    Cas client : TechCorp
                  </h3>
                  <p className="text-muted-foreground">Scale-up tech, 200 collaborateurs</p>
                </div>
              </div>

              <p className="text-lg text-foreground mb-6 italic">
                "Grâce à DCID-RH, nous avons réduit notre turnover de 40% en un an. La plateforme nous aide à identifier les candidats qui s'épanouiront vraiment dans notre environnement et nos équipes."
              </p>

              <div className="grid grid-cols-3 gap-6 pt-6 border-t border-border">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-1">40%</div>
                  <div className="text-sm text-muted-foreground">Réduction du turnover</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-1">85%</div>
                  <div className="text-sm text-muted-foreground">Satisfaction RH</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-1">3 mois</div>
                  <div className="text-sm text-muted-foreground">Temps d'intégration</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-primary to-blue-700 rounded-3xl p-12 md:p-16 text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Prêt à optimiser vos processus RH ?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Discutons de vos enjeux et découvrez comment DCID-RH peut vous aider
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button size="lg" variant="secondary" className="rounded-full text-lg w-full sm:w-auto">
                  Demander une démo
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link to="/product">
                <Button size="lg" variant="outline" className="rounded-full text-lg bg-white/10 border-white/20 hover:bg-white/20 text-white w-full sm:w-auto">
                  Découvrir les fonctionnalités
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}