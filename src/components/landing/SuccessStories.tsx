import { useEffect, useState, useCallback } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { TrendingUp, Star } from "lucide-react";

const caseStudies = [
  {
    headline: "Kenaikan Omzet 40% untuk UMKM Kopi",
    tag: "Rebranding & Social Media",
    snippet:
      "Sebelumnya akun sepi. Setelah Jejak menerapkan strategi visual berbasis psikologi warna, interaksi naik 3x lipat dan penjualan melonjak.",
    metric: 40,
    metricLabel: "Revenue",
    metricSuffix: "%",
    metricPrefix: "+",
  },
  {
    headline: "Konversi Website Naik 65% untuk Startup EdTech",
    tag: "UI/UX Redesign",
    snippet:
      "Landing page lama memiliki bounce rate tinggi. Setelah optimasi CRO dan A/B testing, sign-up rate meningkat drastis dalam 2 bulan.",
    metric: 65,
    metricLabel: "Conversion",
    metricSuffix: "%",
    metricPrefix: "+",
  },
  {
    headline: "Brand Awareness Meningkat 3x untuk Fashion Lokal",
    tag: "Branding Strategis",
    snippet:
      "Dari brand yang tidak dikenal menjadi top-of-mind di kategorinya. Visual identity baru berhasil menarik perhatian target demografis.",
    metric: 3,
    metricLabel: "Awareness",
    metricSuffix: "x",
    metricPrefix: "",
  },
];

function AnimatedCounter({
  value,
  prefix = "",
  suffix = "",
  inView,
}: {
  value: number;
  prefix?: string;
  suffix?: string;
  inView: boolean;
}) {
  const [count, setCount] = useState(0);

  const animateCount = useCallback(() => {
    if (!inView) return;
    
    const duration = 2000;
    const steps = 60;
    const increment = value / steps;
    let current = 0;
    
    const timer = setInterval(() => {
      current += increment;
      if (current >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [value, inView]);

  useEffect(() => {
    const cleanup = animateCount();
    return cleanup;
  }, [animateCount]);

  return (
    <span className="tabular-nums">
      {prefix}
      {count}
      {suffix}
    </span>
  );
}

export function SuccessStories() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <section
      id="case-studies"
      className="py-20 lg:py-32 bg-secondary relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="container mx-auto px-4 lg:px-8" ref={ref}>
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            className="flex items-center justify-center gap-2 mb-3"
          >
            <Star className="w-5 h-5 text-teal-500 fill-teal-500" />
            <span className="text-teal-600 font-semibold text-sm uppercase tracking-wider">
              Studi Kasus
            </span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="text-3xl lg:text-5xl font-bold text-foreground mb-4"
          >
            Jejak Pertumbuhan Klien
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="text-lg text-muted-foreground"
          >
            Hasil nyata dari pendekatan Econo-Creative kami
          </motion.p>
        </div>

        {/* Case Study Cards */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {caseStudies.map((study, index) => (
            <motion.div
              key={study.headline}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 + index * 0.15 }}
              className="group"
            >
              <div className="h-full bg-card border border-border rounded-2xl p-8 hover:border-teal-500/50 hover:shadow-xl transition-all duration-300 flex flex-col">
                {/* Tag */}
                <span className="inline-flex self-start items-center gap-1.5 px-3 py-1 bg-teal-50 text-teal-700 text-sm font-medium rounded-full mb-6">
                  <TrendingUp className="w-3.5 h-3.5" />
                  {study.tag}
                </span>

                {/* Headline */}
                <h3 className="text-xl font-bold text-foreground mb-4 group-hover:text-teal-600 transition-colors">
                  {study.headline}
                </h3>

                {/* Snippet */}
                <p className="text-muted-foreground leading-relaxed mb-6 flex-grow">
                  {study.snippet}
                </p>

                {/* Metric Highlight */}
                <div className="bg-navy-gradient rounded-xl p-6 mb-6">
                  <div className="text-center">
                    <div className="text-5xl font-extrabold text-teal-400 mb-1">
                      <AnimatedCounter
                        value={study.metric}
                        prefix={study.metricPrefix}
                        suffix={study.metricSuffix}
                        inView={inView}
                      />
                    </div>
                    <div className="text-navy-300 text-sm font-medium">
                      {study.metricLabel}
                    </div>
                  </div>
                </div>

              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
