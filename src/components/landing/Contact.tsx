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
                    href="mailto:posterrebel@gmail.com"
                    className="text-white hover:text-teal-400 transition-colors font-medium"
                  >
                    posterrebel@gmail.com
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

            {/* Social Media Links */}
            <div className="flex items-center gap-4">
              <a
                href="https://www.instagram.com/jejak.design_/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center hover:bg-teal-500/20 transition-colors"
                aria-label="Instagram"
              >
                <svg className="w-5 h-5 text-teal-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a
                href="https://www.tiktok.com/@jejak.design"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center hover:bg-teal-500/20 transition-colors"
                aria-label="TikTok"
              >
                <svg className="w-5 h-5 text-teal-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                </svg>
              </a>
              <a
                href="https://x.com/jejakdesign?s=21"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center hover:bg-teal-500/20 transition-colors"
                aria-label="X (Twitter)"
              >
                <svg className="w-5 h-5 text-teal-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
            </div>

            {/* WhatsApp Button */}
            <Button variant="whatsapp" size="lg" asChild className="w-full sm:w-auto">
              <a
                href="https://wa.me/6282324292385"
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
                  <span className="text-lg font-bold text-teal-400">🕐</span>
                </div>
                <div>
                  <div className="text-white font-semibold">Jam Kerja</div>
                  <div className="text-navy-400 text-sm">
                    08.00 - 22.00 WIB
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
                  variant="hero"
                  size="lg"
                  className="w-full"
                  asChild
                >
                  <a
                    href={`https://wa.me/6282324292385?text=${encodeURIComponent(`Halo, saya ${formData.name} dari ${formData.business}. Email: ${formData.email}. Tantangan: ${formData.challenge}. Pesan: ${formData.message}`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Send className="w-5 h-5" />
                    Kirim & Dapatkan Analisis Awal
                  </a>
                </Button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
