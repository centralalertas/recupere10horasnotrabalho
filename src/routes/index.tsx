import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Mail,
  FileText,
  FileSpreadsheet,
  Users,
  BookOpen,
  Calendar,
  Lightbulb,
  Zap,
  Clock,
  CheckCircle2,
  ArrowRight,
  Star,
  ShieldCheck,
  Sparkles,
  Award,
  Briefcase,
  Target,
} from "lucide-react";

import guiaCover from "@/assets/guia-cover.png.asset.json";
import professionalCalm from "@/assets/professional-calm.jpg";
import authorPhoto from "@/assets/author.jpg";
import heroBg from "@/assets/hero-bg.jpg";

export const Route = createFileRoute("/")({
  component: LandingPage,
  head: () => ({
    meta: [
      {
        property: "og:image",
        content: "https://id-preview--cb4ae9bd-c817-4331-afdd-a782099c18a0.lovable.app" +
          guiaCover.url,
      },
    ],
  }),
});

const CTA_TEXT = "QUERO RECUPERAR MEU TEMPO";
const CTA_TEXT_LONG = "QUERO RECUPERAR MEU TEMPO AGORA";

function CTAButton({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-full px-7 py-4 font-bold text-base md:text-lg transition-all duration-250 hover:-translate-y-0.5 hover:scale-[1.02] active:translate-y-0 active:scale-[0.99] btn-cta";
  return (
    <a href="#oferta" className={`${base} ${className}`}>
      {children}
      <ArrowRight className="h-5 w-5" strokeWidth={2.5} />
    </a>
  );
}

function LandingPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <Hero />
      <Benefits />
      <ProblemSection />
      <BeforeAfter />
      <ImpactSection />
      <Modules />
      <Testimonials />
      <Author />
      <Offer />
      <Guarantee />
      <FAQ />
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
        <a href="#" className="flex items-center gap-2 font-display text-lg font-bold text-navy">
          <span className="grid h-8 w-8 place-items-center rounded-lg bg-navy text-navy-foreground">
            <Clock className="h-4 w-4" />
          </span>
          Recupere 10h
        </a>
        <a
          href="#oferta"
          className="hidden rounded-full bg-cta px-5 py-2.5 text-sm font-semibold text-cta-foreground transition-transform hover:scale-105 md:inline-flex"
        >
          Garantir minha vaga
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section
      className="hero-bg relative overflow-hidden text-navy-foreground"
      style={{
        backgroundImage: `linear-gradient(180deg, oklch(0.15 0.06 260 / 0.85), oklch(0.1 0.05 260 / 0.95)), url(${heroBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="mx-auto grid max-w-6xl gap-14 px-5 pb-24 pt-16 md:grid-cols-2 md:items-center md:pt-24 md:pb-32">
        <div className="fade-up">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-medium tracking-wide text-white/80">
            <Sparkles className="h-3.5 w-3.5" /> Guia digital · Acesso imediato
          </span>
          <h1 className="mt-6 font-display text-4xl font-extrabold leading-[1.05] tracking-tight md:text-6xl">
            Recupere até{" "}
            <span className="text-sky-300">
              10 horas da sua semana
            </span>{" "}
            utilizando IA de forma simples e prática
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-white/75 md:text-lg">
            Aprenda a transformar tarefas de horas em minutos e aplicar seu tempo no que
            realmente faz diferença: estar com quem você ama, aprender novas habilidades,
            cuidar da sua saúde ou simplesmente viver com mais tranquilidade.
          </p>

          <div className="mt-8">
            <CTAButton>{CTA_TEXT}</CTAButton>
          </div>

          <ul className="mt-8 grid grid-cols-2 gap-x-6 gap-y-2 text-sm text-white/80">
            {[
              "Acesso imediato",
              "Linguagem simples",
              "Aplicação prática",
              "Resultados desde o 1º dia",
            ].map((b) => (
              <li key={b} className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-cta" /> {b}
              </li>
            ))}
          </ul>
        </div>

        <div className="fade-up relative flex justify-center md:justify-end">
          <div
            aria-hidden
            className="absolute -inset-8 rounded-full bg-cta/20 blur-3xl"
          />
          <img
            src={guiaCover.url}
            alt="Capa do guia: Como Recuperar Até 10 Horas por Semana com Inteligência Artificial no Trabalho"
            width={900}
            height={1200}
            className="relative w-[280px] rotate-[-4deg] rounded-lg shadow-2xl transition-transform duration-500 hover:rotate-0 hover:scale-105 md:w-[380px]"
          />
        </div>
      </div>
    </section>
  );
}

function ProblemSection() {
  const problems = [
    "Responder e-mails intermináveis",
    "Criar documentos do zero",
    "Produzir relatórios extensos",
    "Preparar e resumir reuniões",
    "Organizar planilhas manualmente",
    "Pesquisar informações dispersas",
  ];
  return (
    <section className="bg-secondary/40 py-24">
      <div className="mx-auto max-w-4xl px-5 text-center">
        <span className="text-sm font-semibold uppercase tracking-widest text-cta">
          O problema real
        </span>
        <h2 className="mt-3 text-3xl font-bold text-navy md:text-4xl">
          Você trabalha muito. Só que muito tempo se perde no caminho.
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground">
          O problema não é falta de esforço. É desperdício de tempo com tarefas repetitivas que
          consomem sua energia e roubam o foco daquilo que realmente importa.
        </p>

        <ul className="mt-12 grid gap-3 text-left sm:grid-cols-2">
          {problems.map((p) => (
            <li
              key={p}
              className="flex items-start gap-3 rounded-xl border border-border bg-card px-5 py-4 text-navy shadow-sm"
            >
              <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-destructive/70" />
              <span className="font-medium">{p}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Benefits() {
  const items = [
    { icon: Mail, title: "E-mails profissionais", desc: "Escreva mensagens claras e educadas em segundos." },
    { icon: FileText, title: "Relatórios inteligentes", desc: "Estruture análises completas com poucos comandos." },
    { icon: FileSpreadsheet, title: "Documentos", desc: "Primeiras versões prontas para revisar e enviar." },
    { icon: Users, title: "Reuniões organizadas", desc: "Pautas, resumos e próximos passos automáticos." },
    { icon: BookOpen, title: "Resumo de conteúdos", desc: "Transforme textos longos em síntese objetiva." },
    { icon: Calendar, title: "Planejamento", desc: "Monte cronogramas e planos de ação com IA." },
    { icon: Lightbulb, title: "Geração de ideias", desc: "Desbloqueie novas soluções para o dia a dia." },
    { icon: Zap, title: "Automação prática", desc: "Elimine tarefas repetitivas sem complicação." },
  ];
  return (
    <section id="beneficios" className="py-24">
      <div className="mx-auto max-w-6xl px-5">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-cta">
            O que você vai conquistar
          </span>
          <h2 className="mt-3 text-3xl font-bold text-navy md:text-4xl">
            Aplicações reais para o seu trabalho
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Um passo a passo direto para transformar sua rotina usando IA como aliada.
          </p>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {items.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="surface-card p-6">
              <div className="grid h-11 w-11 place-items-center rounded-xl bg-navy/5 text-navy">
                <Icon className="h-5 w-5" strokeWidth={2} />
              </div>
              <h3 className="mt-5 text-base font-semibold text-navy">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function BeforeAfter() {
  const before = [
    "Horas escrevendo documentos",
    "E-mails redigidos do zero",
    "Reuniões sem estrutura",
    "Retrabalho constante",
  ];
  const after = [
    "Primeiras versões em segundos",
    "E-mails prontos e bem escritos",
    "Reuniões organizadas e resumidas",
    "Mais tempo para o que é estratégico",
  ];
  return (
    <section className="bg-navy py-24 text-navy-foreground">
      <div className="mx-auto max-w-5xl px-5">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-cta">
            Antes e depois
          </span>
          <h2 className="mt-3 text-3xl font-bold md:text-4xl">
            A diferença que a IA faz no seu dia
          </h2>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-8">
            <h3 className="text-sm font-semibold uppercase tracking-widest text-white/60">
              Antes
            </h3>
            <ul className="mt-5 space-y-4">
              {before.map((i) => (
                <li key={i} className="flex items-start gap-3 text-white/85">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-white/40" />
                  {i}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border border-cta/30 bg-cta/5 p-8 shadow-[0_0_60px_-20px_var(--cta)]">
            <h3 className="text-sm font-semibold uppercase tracking-widest text-cta">Depois</h3>
            <ul className="mt-5 space-y-4">
              {after.map((i) => (
                <li key={i} className="flex items-start gap-3 text-white">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-cta" />
                  <span className="font-medium">{i}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 text-center">
          <CTAButton>{CTA_TEXT_LONG}</CTAButton>
        </div>
      </div>
    </section>
  );
}

function ImpactSection() {
  return (
    <section className="py-24">
      <div className="mx-auto grid max-w-6xl gap-14 px-5 md:grid-cols-2 md:items-center">
        <div className="relative order-2 md:order-1">
          <div className="absolute -inset-3 rounded-3xl bg-cta/20 blur-2xl" aria-hidden />
          <img
            src={professionalCalm}
            alt="Profissional trabalhando de forma tranquila e organizada"
            width={1600}
            height={1100}
            loading="lazy"
            className="relative aspect-[4/3] w-full rounded-2xl object-cover shadow-[var(--shadow-elegant)]"
          />
        </div>
        <div className="order-1 md:order-2">
          <span className="text-sm font-semibold uppercase tracking-widest text-cta">
            O verdadeiro ganho
          </span>
          <h2 className="mt-3 text-3xl font-bold leading-tight text-navy md:text-4xl">
            Mais do que velocidade. É liberdade.
          </h2>
          <div className="mt-6 space-y-5 text-lg leading-relaxed text-muted-foreground">
            <p>
              O maior benefício não está apenas na velocidade. Está na liberdade de utilizar sua
              energia para aquilo que realmente gera valor.
            </p>
            <p>
              Enquanto a Inteligência Artificial auxilia nas tarefas operacionais, você ganha
              mais espaço para analisar, criar, decidir e inovar.
            </p>
            <p className="font-medium text-navy">
              O tempo recuperado não beneficia apenas sua produtividade. Ele melhora sua
              qualidade de vida.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Modules() {
  const mods = [
    "Introdução à IA aplicada ao trabalho",
    "Como conversar corretamente com a IA",
    "E-mails profissionais",
    "Relatórios inteligentes",
    "Documentos",
    "Reuniões",
    "Planejamento",
    "Produtividade",
    "Automação",
    "Plano prático para recuperar tempo",
  ];
  return (
    <section id="modulos" className="bg-secondary/40 py-24">
      <div className="mx-auto max-w-6xl px-5">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-cta">
            Conteúdo do guia
          </span>
          <h2 className="mt-3 text-3xl font-bold text-navy md:text-4xl">
            10 módulos objetivos e aplicáveis
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Um caminho claro, do zero à automação, sem termos técnicos.
          </p>
        </div>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {mods.map((title, i) => (
            <div key={title} className="surface-card flex items-start gap-4 p-6">
              <div className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-navy text-sm font-bold text-navy-foreground">
                {String(i + 1).padStart(2, "0")}
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  Módulo {i + 1}
                </p>
                <h3 className="mt-1 font-semibold text-navy">{title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  const items = [
    {
      name: "Ana P.",
      role: "Analista Administrativa",
      text: "Consegui reduzir o tempo de relatórios pela metade já na primeira semana. Simples e direto.",
    },
    {
      name: "Roberto M.",
      role: "Advogado",
      text: "Nunca imaginei que usar IA fosse tão prático. Meus e-mails ficaram muito melhores.",
    },
    {
      name: "Camila S.",
      role: "Consultora",
      text: "Recuperei tempo para pensar estrategicamente em vez de operar tarefas repetitivas.",
    },
  ];
  return (
    <section className="py-24">
      <div className="mx-auto max-w-6xl px-5">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-cta">
            Quem já aplicou
          </span>
          <h2 className="mt-3 text-3xl font-bold text-navy md:text-4xl">
            Resultados reais no dia a dia
          </h2>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {items.map((t) => (
            <figure key={t.name} className="surface-card flex h-full flex-col p-7">
              <div className="flex gap-0.5 text-cta">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <blockquote className="mt-5 flex-1 text-base leading-relaxed text-navy">
                “{t.text}”
              </blockquote>
              <figcaption className="mt-6 border-t border-border pt-4">
                <p className="font-semibold text-navy">{t.name}</p>
                <p className="text-sm text-muted-foreground">{t.role}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

function Author() {
  const badges = [
    { icon: Award, text: "25+ anos de experiência" },
    { icon: Briefcase, text: "Especialista em TI" },
    { icon: Target, text: "Projetos de Alta Complexidade" },
    { icon: Users, text: "Scrum Master" },
    { icon: Zap, text: "Especialista em Produtividade" },
  ];
  return (
    <section className="bg-secondary/40 py-24">
      <div className="mx-auto grid max-w-5xl gap-12 px-5 md:grid-cols-[280px_1fr] md:items-center">
        <div className="relative mx-auto">
          <div className="absolute -inset-4 rounded-full bg-cta/20 blur-2xl" aria-hidden />
          <img
            src={authorPhoto}
            alt="Marcos Nascimento, autor do guia"
            width={280}
            height={280}
            loading="lazy"
            className="relative h-64 w-64 rounded-full object-cover shadow-[var(--shadow-elegant)] ring-4 ring-background"
          />
        </div>
        <div>
          <span className="text-sm font-semibold uppercase tracking-widest text-cta">
            Sobre o autor
          </span>
          <h2 className="mt-3 text-3xl font-bold text-navy md:text-4xl">Marcos Nascimento</h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            Profissional com mais de duas décadas atuando em tecnologia, gestão de projetos e
            produtividade. Une experiência prática de campo a métodos simples para transformar
            complexidade em resultado.
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            {badges.map(({ icon: Icon, text }) => (
              <span
                key={text}
                className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3.5 py-1.5 text-sm font-medium text-navy"
              >
                <Icon className="h-4 w-4 text-cta" /> {text}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Offer() {
  return (
    <section id="oferta" className="py-24">
      <div className="mx-auto max-w-4xl px-5">
        <div className="relative overflow-hidden rounded-3xl border border-border bg-gradient-to-br from-navy to-[oklch(0.28_0.08_265)] p-8 text-navy-foreground shadow-[var(--shadow-elegant)] md:p-14">
          <div
            className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-cta/25 blur-3xl"
            aria-hidden
          />
          <div className="relative grid gap-10 md:grid-cols-[1fr_auto] md:items-center">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-medium text-white/80">
                <ShieldCheck className="h-3.5 w-3.5" /> Pagamento único · Acesso imediato
              </span>
              <h2 className="mt-5 text-3xl font-bold md:text-4xl">
                Comece hoje a recuperar seu tempo
              </h2>
              <p className="mt-4 max-w-md text-white/75">
                Acesso vitalício ao guia completo, sem mensalidades, sem letras miúdas.
              </p>

              <ul className="mt-6 space-y-2 text-sm text-white/85">
                {[
                  "Acesso imediato após a compra",
                  "10 módulos objetivos e aplicáveis",
                  "Atualizações incluídas",
                ].map((f) => (
                  <li key={f} className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-cta" /> {f}
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-7 text-center backdrop-blur-sm">
              <p className="text-sm text-white/60">
                De <span className="line-through">R$ 97</span>
              </p>
              <p className="mt-1 text-sm font-medium text-white/80">Por apenas</p>
              <p className="mt-1 font-display text-6xl font-extrabold tracking-tight text-cta">
                R$47
              </p>
              <p className="mt-1 text-xs text-white/60">pagamento único</p>
              <div className="mt-6">
                <CTAButton className="w-full justify-center">{CTA_TEXT_LONG}</CTAButton>
              </div>
              <p className="mt-4 text-xs text-white/60">
                Compra 100% segura · Sem mensalidade
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Guarantee() {
  return (
    <section className="bg-secondary/40 py-16">
      <div className="mx-auto max-w-4xl px-5">
        <div className="surface-card relative overflow-hidden p-8 text-center md:p-12">
          <div
            className="absolute -right-16 -top-16 h-64 w-64 rounded-full bg-cta/15 blur-3xl"
            aria-hidden
          />
          <div className="relative mx-auto max-w-2xl">
            <div className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-cta/10 text-cta">
              <ShieldCheck className="h-8 w-8" strokeWidth={2} />
            </div>
            <h2 className="mt-6 text-2xl font-bold text-navy md:text-3xl">
              Garantia de 7 dias ou seu dinheiro de volta
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              Você tem 7 dias para acessar o guia completo e aplicar as técnicas. Se por
              qualquer motivo não sentir que fez a escolha certa, devolvemos 100% do seu
              investimento, sem perguntas, sem burocracia.
            </p>
            <div className="mt-8 inline-flex items-center gap-2 rounded-full border border-cta/30 bg-cta/10 px-5 py-2 text-sm font-semibold text-cta">
              <ShieldCheck className="h-4 w-4" /> Risco zero na compra
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FAQ() {
  const [open, setOpen] = useState<string | undefined>("item-0");
  const faqs = [
    {
      q: "Preciso conhecer Inteligência Artificial para começar?",
      a: "Não. O guia foi desenvolvido para quem está começando do zero. Toda a linguagem é simples e prática.",
    },
    {
      q: "Serve para a minha profissão?",
      a: "Sim. As técnicas se aplicam a qualquer profissional que trabalhe com computador: gestores, analistas, advogados, contadores, professores, servidores públicos e muito mais.",
    },
    {
      q: "O acesso é imediato?",
      a: "Sim. Após a confirmação do pagamento, você recebe o acesso ao guia por e-mail em poucos minutos.",
    },
    {
      q: "O conteúdo é atualizado?",
      a: "Sim. Sempre que houver atualizações relevantes, elas são disponibilizadas sem custo adicional.",
    },
    {
      q: "Quanto tempo leva para concluir o guia?",
      a: "Você pode ler no seu ritmo. A maioria dos leitores conclui em poucas horas e começa a aplicar já no primeiro dia.",
    },
    {
      q: "E se eu não gostar?",
      a: "O guia é objetivo e prático. Estamos confiantes de que fará diferença no seu dia a dia.",
    },
  ];

  return (
    <section id="faq" className="bg-secondary/40 py-24">
      <div className="mx-auto max-w-3xl px-5">
        <div className="text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-cta">
            Dúvidas frequentes
          </span>
          <h2 className="mt-3 text-3xl font-bold text-navy md:text-4xl">
            Tire suas principais dúvidas
          </h2>
        </div>

        <Accordion
          type="single"
          collapsible
          value={open}
          onValueChange={setOpen}
          className="mt-12 space-y-3"
        >
          {faqs.map((f, i) => (
            <AccordionItem
              key={i}
              value={`item-${i}`}
              className="rounded-xl border border-border bg-card px-5 shadow-sm data-[state=open]:border-cta/50"
            >
              <AccordionTrigger className="py-5 text-left text-base font-semibold text-navy hover:no-underline">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="pb-5 text-base leading-relaxed text-muted-foreground">
                {f.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="mt-14 text-center">
          <CTAButton>{CTA_TEXT_LONG}</CTAButton>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border bg-navy py-14 text-navy-foreground">
      <div className="mx-auto max-w-6xl px-5">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <div>
            <div className="flex items-center gap-2 font-display text-lg font-bold">
              <span className="grid h-8 w-8 place-items-center rounded-lg bg-cta text-cta-foreground">
                <Clock className="h-4 w-4" />
              </span>
              Recupere 10h
            </div>
            <p className="mt-3 max-w-sm text-sm text-white/60">
              Um guia prático para transformar sua rotina de trabalho com Inteligência Artificial.
            </p>
          </div>

          <nav className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-white/70">
            <a href="#" className="transition-colors hover:text-white">
              Política de Privacidade
            </a>
            <a href="#" className="transition-colors hover:text-white">
              Termos de Uso
            </a>
            <a href="#" className="transition-colors hover:text-white">
              Contato
            </a>
          </nav>
        </div>
        <div className="mt-10 border-t border-white/10 pt-6 text-center text-xs text-white/50">
          © {new Date().getFullYear()} Recupere 10h. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
}
