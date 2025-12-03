import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Users, TrendingUp, Calculator, ArrowRight } from "lucide-react";

const features = [
  {
    icon: Users,
    title: "Analisis Perilaku Konsumen",
    description:
      "Memahami psikologi target pasar Anda melalui riset mendalam. Desain dibuat berdasarkan bagaimana konsumen berpikir dan mengambil keputusan.",
    points: ["User Research", "Psikologi Warna", "Behavioral Analytics"],
  },
  {
    icon: TrendingUp,
    title: "Optimisasi Konversi (CRO)",
    description:
      "Setiap elemen desain dioptimalkan untuk meningkatkan konversi. Dari CTA placement hingga visual hierarchy yang strategis.",
    points: ["A/B Testing", "Heatmap Analysis", "Funnel Optimization"],
  },
  {
    icon: Calculator,
    title: "Analisis Cost-Benefit",
    description:
      "Mengukur dampak finansial dari setiap keputusan desain. Memastikan setiap rupiah yang diinvestasikan memberikan return yang terukur.",
    points: ["ROI Tracking", "Budget Planning", "Performance Metrics"],
  },
];

export function Methodology() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section
      id="methodology"
      className="py-20 lg:py-32 bg-navy-gradient relative overflow-hidden"
    >
      {/* Background effects */}
      <div className="absolute inset-0 bg-glow pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 lg:px-8" ref={ref}>
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            className="text-teal-400 font-semibold text-sm uppercase tracking-wider"
          >
            Solusi
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="text-3xl lg:text-5xl font-bold text-white mt-3 mb-4"
          >
            Pendekatan Econo-Creative Kami
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="text-lg text-navy-300"
          >
            Framework unik yang menggabungkan kreativitas dengan strategi bisnis
            berbasis data
          </motion.p>
        </div>

        {/* Features */}
        <div className="grid lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 + index * 0.15 }}
              className="group"
            >
              <div className="h-full bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 hover:border-teal-500/30 transition-all duration-300">
                {/* Icon */}
                <div className="w-14 h-14 rounded-xl bg-teal-500/20 flex items-center justify-center mb-6 group-hover:bg-teal-500/30 transition-colors">
                  <feature.icon className="w-7 h-7 text-teal-400" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-navy-300 leading-relaxed mb-6">
                  {feature.description}
                </p>

                {/* Points */}
                <ul className="space-y-2">
                  {feature.points.map((point) => (
                    <li
                      key={point}
                      className="flex items-center gap-2 text-sm text-navy-400"
                    >
                      <ArrowRight className="w-4 h-4 text-teal-500" />
                      {point}
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
