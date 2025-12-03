import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Mail, MapPin, Send, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "sonner";

const challenges = [
  { value: "sales", label: "Penjualan Rendah" },
  { value: "branding", label: "Branding Kurang Kuat" },
  { value: "website", label: "Website Sepi" },
  { value: "other", label: "Lainnya" },
];

export function Contact() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [formData, setFormData] = useState({
    name: "",
    business: "",
    email: "",
    challenge: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    toast.success("Pesan Terkirim!", {
      description: "Tim kami akan menghubungi Anda dalam 24 jam.",
    });

    setFormData({
      name: "",
      business: "",
      email: "",
      challenge: "",
      message: "",
    });
    setIsSubmitting(false);
  };

  return (
    <section
      id="contact"
      className="py-20 lg:py-32 bg-navy-gradient relative overflow-hidden"
    >
      {/* Background effects */}
      <div className="absolute inset-0 bg-glow pointer-events-none" />
      <div className="absolute top-0 left-0 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />

      <div className="container mx-auto px-4 lg:px-8" ref={ref}>
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            className="text-teal-400 font-semibold text-sm uppercase tracking-wider"
          >
            Kontak
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="text-3xl lg:text-5xl font-bold text-white mt-3 mb-4"
          >
            Mulai Investasi Desain Anda
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="text-lg text-navy-300"
          >
            Siap mengubah bisnis Anda? Hubungi kami untuk audit desain gratis.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left - Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">
                Mari Berdiskusi Tentang Pertumbuhan Bisnis Anda
              </h3>
              <p className="text-navy-300 leading-relaxed">
                Kami percaya setiap bisnis unik. Itulah mengapa kami menawarkan
                konsultasi awal gratis untuk memahami kebutuhan spesifik Anda
                sebelum memberikan solusi.
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center">
                  <Mail className="w-5 h-5 text-teal-400" />
                </div>
                <div>
                  <div className="text-sm text-navy-400">Email</div>
                  <a
                    href="mailto:hello@jejak-creative.com"
                    className="text-white hover:text-teal-400 transition-colors font-medium"
                  >
                    hello@jejak-creative.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-teal-400" />
                </div>
                <div>
                  <div className="text-sm text-navy-400">Basecamp</div>
                  <span className="text-white font-medium">
                    Kampus IT & Bisnis
                  </span>
                </div>
              </div>
            </div>

            {/* WhatsApp Button */}
            <Button variant="whatsapp" size="lg" asChild className="w-full sm:w-auto">
              <a
                href="https://wa.me/6281234567890"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="w-5 h-5" />
                Chat Tim Strategis
              </a>
            </Button>

            {/* Trust Badge */}
            <div className="p-6 bg-white/5 border border-white/10 rounded-2xl">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-xl bg-teal-500/20 flex items-center justify-center">
                  <span className="text-2xl font-bold text-teal-400">24h</span>
                </div>
                <div>
                  <div className="text-white font-semibold">Respons Cepat</div>
                  <div className="text-navy-400 text-sm">
                    Tim kami akan merespons dalam 24 jam kerja
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right - Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.4 }}
          >
            <form
              onSubmit={handleSubmit}
              className="bg-white rounded-2xl p-8 shadow-2xl"
            >
              <div className="space-y-6">
                {/* Name */}
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Nama Lengkap
                  </label>
                  <Input
                    type="text"
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    required
                    className="h-12"
                  />
                </div>

                {/* Business Name */}
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Nama Bisnis
                  </label>
                  <Input
                    type="text"
                    placeholder="PT Contoh Indonesia"
                    value={formData.business}
                    onChange={(e) =>
                      setFormData({ ...formData, business: e.target.value })
                    }
                    required
                    className="h-12"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Email
                  </label>
                  <Input
                    type="email"
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    required
                    className="h-12"
                  />
                </div>

                {/* Challenge Dropdown */}
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Apa Tantangan Terbesar Bisnis Anda?
                  </label>
                  <Select
                    value={formData.challenge}
                    onValueChange={(value) =>
                      setFormData({ ...formData, challenge: value })
                    }
                  >
                    <SelectTrigger className="h-12">
                      <SelectValue placeholder="Pilih tantangan" />
                    </SelectTrigger>
                    <SelectContent>
                      {challenges.map((challenge) => (
                        <SelectItem key={challenge.value} value={challenge.value}>
                          {challenge.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Pesan (Opsional)
                  </label>
                  <Textarea
                    placeholder="Ceritakan lebih lanjut tentang bisnis Anda..."
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    rows={4}
                  />
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  variant="hero"
                  size="lg"
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Mengirim...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Kirim & Dapatkan Analisis Awal
                    </>
                  )}
                </Button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
