import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Frown, DollarSign, Unlink } from "lucide-react";

const problems = [
  {
    icon: Frown,
    title: "Hanya Estetika, No Sales",
    description:
      "Desain yang indah tapi tidak membantu konversi. Visual yang tidak berbicara pada target pasar dan tidak mendorong keputusan pembelian.",
  },
  {
    icon: DollarSign,
    title: "Dianggap Beban Biaya",
    description:
      "Desain selalu dilihat sebagai pengeluaran, bukan investasi. ROI tidak terukur dan sulit membuktikan nilai bisnis dari desain.",
  },
  {
    icon: Unlink,
    title: "Kesenjangan Kreatif & Bisnis",
    description:
      "Desainer berbicara 'visual', bisnis berbicara 'angka'. Tidak ada jembatan antara kreativitas dan tujuan finansial perusahaan.",
  },
];

export function Problems() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-20 lg:py-32 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-destructive/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

      <div className="container mx-auto px-4 lg:px-8" ref={ref}>
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            className="text-destructive font-semibold text-sm uppercase tracking-wider"
          >
            Masalah
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="text-3xl lg:text-5xl font-bold text-foreground mt-3 mb-4"
          >
            Masalah Fundamental Desain Saat Ini
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="text-lg text-muted-foreground"
          >
            Inilah mengapa banyak bisnis gagal memanfaatkan kekuatan desain
          </motion.p>
        </div>

        {/* Problem Cards */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {problems.map((problem, index) => (
            <motion.div
              key={problem.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 + index * 0.15 }}
              className="group"
            >
              <div className="h-full bg-card border border-border rounded-2xl p-8 hover:border-destructive/30 hover:shadow-xl transition-all duration-300">
                {/* Icon */}
                <div className="w-14 h-14 rounded-xl bg-destructive/10 flex items-center justify-center mb-6 group-hover:bg-destructive/20 transition-colors">
                  <problem.icon className="w-7 h-7 text-destructive" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-foreground mb-3">
                  {problem.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {problem.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
