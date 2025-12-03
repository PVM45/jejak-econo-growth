import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroIllustration from "@/assets/hero-illustration.png";

export function Hero() {
  return (
    <section className="relative min-h-screen bg-navy-gradient overflow-hidden pt-20 lg:pt-0">
      {/* Background glow effects */}
      <div className="absolute inset-0 bg-glow pointer-events-none" />
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-teal-500/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 lg:px-8 min-h-screen flex items-center">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center w-full py-12 lg:py-0">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="text-center lg:text-left"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-2 mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-teal-400 animate-pulse" />
              <span className="text-teal-300 text-sm font-medium">
                Econo-Creative Agency
              </span>
            </motion.div>

            {/* Headline */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6">
              Ubah Desain dari{" "}
              <span className="text-gradient">'Cost Center'</span> Menjadi{" "}
              <span className="text-gradient">'Profit Center'</span>
            </h1>

            {/* Subheadline */}
            <p className="text-lg lg:text-xl text-navy-300 mb-8 max-w-xl mx-auto lg:mx-0">
              <span className="font-semibold text-white">Jejak:</span> Jasa
              Desain Econo-Creative. Kami merancang visual yang tidak hanya
              indah, tapi terbukti menguntungkan secara data ekonomi.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button variant="hero" size="lg" asChild>
                <a href="#contact" className="group">
                  Konsultasi Strategi Gratis
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
              <Button variant="hero-outline" size="lg" asChild>
                <a href="#case-studies" className="group">
                  <Play className="w-5 h-5" />
                  Lihat Hasil Klien
                </a>
              </Button>
            </div>

            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="mt-12 flex items-center gap-8 justify-center lg:justify-start"
            >
              <div className="text-center">
                <div className="text-3xl font-bold text-white">50+</div>
                <div className="text-sm text-navy-400">Klien Puas</div>
              </div>
              <div className="w-px h-12 bg-navy-600" />
              <div className="text-center">
                <div className="text-3xl font-bold text-teal-400">35%</div>
                <div className="text-sm text-navy-400">Avg. ROI Increase</div>
              </div>
              <div className="w-px h-12 bg-navy-600" />
              <div className="text-center">
                <div className="text-3xl font-bold text-white">100%</div>
                <div className="text-sm text-navy-400">Data-Driven</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Illustration */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Glow behind image */}
              <div className="absolute inset-0 bg-teal-500/20 blur-3xl rounded-full scale-75" />
              <img
                src={heroIllustration}
                alt="Growth chart with creative design tools"
                className="relative z-10 w-full max-w-lg animate-float drop-shadow-2xl"
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-navy-400 text-sm">Scroll</span>
          <div className="w-6 h-10 border-2 border-navy-500 rounded-full flex justify-center pt-2">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1.5 h-1.5 bg-teal-400 rounded-full"
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
}
