import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Smartphone, Megaphone, Palette, BarChart3, ArrowUpRight } from "lucide-react";

const services = [
  {
    icon: Smartphone,
    title: "UI/UX Aplikasi",
    subtitle: "User Journey Optimization",
    description:
      "Desain antarmuka yang intuitif dan engaging. Fokus pada pengalaman pengguna yang meningkatkan retention dan konversi.",
    features: ["Mobile Apps", "Web Apps", "Dashboard Design"],
  },
  {
    icon: Megaphone,
    title: "Pemasaran Digital",
    subtitle: "A/B Testing & Optimization",
    description:
      "Konten visual untuk kampanye digital yang terukur. Setiap desain dioptimalkan melalui testing untuk performa maksimal.",
    features: ["Social Media", "Ad Creatives", "Email Marketing"],
  },
  {
    icon: Palette,
    title: "Branding Strategis",
    subtitle: "Identity & Positioning",
    description:
      "Membangun identitas brand yang resonan dengan target pasar. Brand strategy yang mendukung tujuan bisnis jangka panjang.",
    features: ["Logo Design", "Brand Guidelines", "Visual Identity"],
  },
  {
    icon: BarChart3,
    title: "Visualisasi Data",
    subtitle: "Data Storytelling",
    description:
      "Mengubah data kompleks menjadi visual yang mudah dipahami. Membantu stakeholder mengambil keputusan berbasis data.",
    features: ["Infographics", "Reports", "Presentations"],
  },
];

export function Services() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="services" className="py-20 lg:py-32 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-teal-500/5 rounded-full blur-3xl -translate-x-1/2" />

      <div className="container mx-auto px-4 lg:px-8" ref={ref}>
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            className="text-teal-600 font-semibold text-sm uppercase tracking-wider"
          >
            Layanan
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="text-3xl lg:text-5xl font-bold text-foreground mt-3 mb-4"
          >
            Solusi Desain yang Menguntungkan
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="text-lg text-muted-foreground"
          >
            Setiap layanan dirancang untuk memberikan hasil bisnis yang terukur
          </motion.p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 + index * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="h-full bg-card border border-border rounded-2xl p-8 hover:border-teal-500/50 hover:shadow-xl hover:shadow-teal-500/5 transition-all duration-300">
                <div className="flex justify-between items-start mb-6">
                  {/* Icon */}
                  <div className="w-14 h-14 rounded-xl bg-teal-50 flex items-center justify-center group-hover:bg-teal-100 transition-colors">
                    <service.icon className="w-7 h-7 text-teal-600" />
                  </div>
                  {/* Arrow */}
                  <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-teal-600 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                </div>

                {/* Content */}
                <div className="mb-6">
                  <h3 className="text-xl font-bold text-foreground mb-1">
                    {service.title}
                  </h3>
                  <span className="text-sm text-teal-600 font-medium">
                    {service.subtitle}
                  </span>
                </div>

                <p className="text-muted-foreground leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Features Tags */}
                <div className="flex flex-wrap gap-2">
                  {service.features.map((feature) => (
                    <span
                      key={feature}
                      className="px-3 py-1 bg-secondary text-secondary-foreground text-sm rounded-full"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
