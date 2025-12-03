import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Store, Rocket, Building2, Check } from "lucide-react";

const markets = [
  {
    icon: Store,
    title: "UMKM",
    subtitle: "Usaha Mikro, Kecil, Menengah",
    description:
      "Bisnis lokal yang ingin naik level dengan branding profesional dan strategi digital yang terjangkau.",
    points: [
      "Budget-friendly packages",
      "Quick turnaround",
      "Measurable results",
    ],
  },
  {
    icon: Rocket,
    title: "Startups",
    subtitle: "Perusahaan Rintisan",
    description:
      "Startup yang membutuhkan identitas brand kuat dan UI/UX yang scalable untuk growth cepat.",
    points: ["Scalable design systems", "MVP-focused approach", "Growth hacking"],
  },
  {
    icon: Building2,
    title: "Corporate Teams",
    subtitle: "Tim Marketing Korporat",
    description:
      "Tim marketing perusahaan yang membutuhkan support desain data-driven untuk campaign mereka.",
    points: ["Enterprise solutions", "Dedicated support", "Integration ready"],
  },
];

export function TargetMarket() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-20 lg:py-32 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-teal-500/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

      <div className="container mx-auto px-4 lg:px-8" ref={ref}>
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            className="text-teal-600 font-semibold text-sm uppercase tracking-wider"
          >
            Target Market
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="text-3xl lg:text-5xl font-bold text-foreground mt-3 mb-4"
          >
            Siapa yang Kami Layani
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="text-lg text-muted-foreground"
          >
            Solusi desain yang disesuaikan dengan kebutuhan dan skala bisnis Anda
          </motion.p>
        </div>

        {/* Market Cards */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {markets.map((market, index) => (
            <motion.div
              key={market.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 + index * 0.15 }}
              className="group"
            >
              <div className="h-full bg-card border border-border rounded-2xl p-8 hover:border-teal-500/50 hover:shadow-xl transition-all duration-300">
                {/* Icon */}
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-navy-900 to-navy-800 flex items-center justify-center mb-6 group-hover:shadow-lg transition-shadow">
                  <market.icon className="w-8 h-8 text-teal-400" />
                </div>

                {/* Content */}
                <div className="mb-4">
                  <h3 className="text-2xl font-bold text-foreground">
                    {market.title}
                  </h3>
                  <span className="text-sm text-muted-foreground">
                    {market.subtitle}
                  </span>
                </div>

                <p className="text-muted-foreground leading-relaxed mb-6">
                  {market.description}
                </p>

                {/* Points */}
                <ul className="space-y-3">
                  {market.points.map((point) => (
                    <li
                      key={point}
                      className="flex items-center gap-3 text-foreground"
                    >
                      <div className="w-5 h-5 rounded-full bg-teal-100 flex items-center justify-center flex-shrink-0">
                        <Check className="w-3 h-3 text-teal-600" />
                      </div>
                      <span className="text-sm">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
