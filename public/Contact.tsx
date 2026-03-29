import { useState } from "react";
import { Mail, Phone, MapPin, Send, CheckCircle2 } from "lucide-react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { Label } from "../components/ui/label";

export function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    phone: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        company: "",
        phone: "",
        message: "",
      });
    }, 3000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-white via-blue-50/30 to-white py-24 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-primary/10 to-blue-500/10 rounded-full blur-3xl"></div>
        
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <div className="inline-flex items-center gap-2.5 px-4 py-2 bg-gradient-to-r from-primary/10 to-blue-500/10 border border-primary/20 text-primary rounded-full text-[14px] font-medium shadow-sm">
              Contactez-nous
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-foreground tracking-tight">
              Parlons de vos enjeux RH
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
              Notre équipe est à votre disposition pour échanger sur vos besoins 
              et vous présenter DCID-RH
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="py-24 bg-gradient-to-b from-white to-slate-50/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
            {/* Contact Info */}
            <div className="lg:col-span-1 space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-6">
                  Contactez notre équipe
                </h2>
                <p className="text-muted-foreground mb-8">
                  Vous avez des questions ? Nous sommes là pour vous aider à découvrir 
                  comment DCID-RH peut transformer vos processus RH.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Email</h3>
                    <p className="text-muted-foreground">contact@dcid-rh.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Téléphone</h3>
                    <p className="text-muted-foreground">+33 1 23 45 67 89</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Adresse</h3>
                    <p className="text-muted-foreground">
                      123 Avenue des Champs-Élysées<br />
                      75008 Paris, France
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-accent to-white rounded-2xl p-6 border border-border">
                <h3 className="font-semibold text-foreground mb-2">
                  Temps de réponse moyen
                </h3>
                <p className="text-2xl font-bold text-primary mb-2">24h</p>
                <p className="text-sm text-muted-foreground">
                  Nous nous engageons à vous répondre rapidement
                </p>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl border border-border shadow-xl p-8 md:p-10">
                {submitted ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                      <CheckCircle2 className="w-8 h-8 text-green-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-foreground mb-3">
                      Message envoyé !
                    </h3>
                    <p className="text-muted-foreground">
                      Merci pour votre message. Notre équipe vous contactera très bientôt.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">Prénom *</Label>
                        <Input
                          id="firstName"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleChange}
                          required
                          placeholder="Jean"
                          className="rounded-lg"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName">Nom *</Label>
                        <Input
                          id="lastName"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleChange}
                          required
                          placeholder="Dupont"
                          className="rounded-lg"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">Email professionnel *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="jean.dupont@entreprise.com"
                        className="rounded-lg"
                      />
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="company">Entreprise *</Label>
                        <Input
                          id="company"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          required
                          placeholder="Nom de votre entreprise"
                          className="rounded-lg"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">Téléphone</Label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="+33 6 12 34 56 78"
                          className="rounded-lg"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Message *</Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        placeholder="Parlez-nous de vos enjeux RH et de vos besoins..."
                        rows={6}
                        className="rounded-lg resize-none"
                      />
                    </div>

                    <div className="bg-accent/50 rounded-lg p-4">
                      <p className="text-sm text-muted-foreground">
                        En soumettant ce formulaire, vous acceptez que DCID-RH traite vos 
                        données pour vous recontacter. Vos données sont protégées conformément 
                        au RGPD.
                      </p>
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      className="w-full rounded-full text-base"
                    >
                      Envoyer le message
                      <Send className="ml-2 w-4 h-4" />
                    </Button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Demo CTA */}
      <section className="py-20 bg-accent/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-primary to-blue-700 rounded-3xl p-12 md:p-16 text-center text-white">
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Demandez une démonstration personnalisée
              </h2>
              <p className="text-xl text-blue-100 mb-8">
                Découvrez DCID-RH en action avec un membre de notre équipe. 
                Nous adaptons la démonstration à vos enjeux spécifiques.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <div className="flex items-center gap-2 text-blue-100">
                  <CheckCircle2 className="w-5 h-5" />
                  <span>30 minutes</span>
                </div>
                <div className="flex items-center gap-2 text-blue-100">
                  <CheckCircle2 className="w-5 h-5" />
                  <span>Sans engagement</span>
                </div>
                <div className="flex items-center gap-2 text-blue-100">
                  <CheckCircle2 className="w-5 h-5" />
                  <span>Q&A incluses</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Quick */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground mb-12 text-center">
              Questions fréquentes
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-accent/50 rounded-2xl p-6 border border-border">
                <h3 className="font-semibold text-foreground mb-2">
                  Combien de temps dure une démo ?
                </h3>
                <p className="text-muted-foreground">
                  Une démonstration dure environ 30 minutes, avec du temps pour vos questions.
                </p>
              </div>

              <div className="bg-accent/50 rounded-2xl p-6 border border-border">
                <h3 className="font-semibold text-foreground mb-2">
                  Y a-t-il un engagement ?
                </h3>
                <p className="text-muted-foreground">
                  Non, la démonstration est gratuite et sans aucun engagement de votre part.
                </p>
              </div>

              <div className="bg-accent/50 rounded-2xl p-6 border border-border">
                <h3 className="font-semibold text-foreground mb-2">
                  Pour quelle taille d'entreprise ?
                </h3>
                <p className="text-muted-foreground">
                  DCID-RH s'adapte de la PME de 50 personnes aux grandes entreprises.
                </p>
              </div>

              <div className="bg-accent/50 rounded-2xl p-6 border border-border">
                <h3 className="font-semibold text-foreground mb-2">
                  Combien de temps pour déployer ?
                </h3>
                <p className="text-muted-foreground">
                  Le déploiement initial peut se faire en 2 à 4 semaines selon vos besoins.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}