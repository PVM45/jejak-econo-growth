import { Instagram, Twitter, Linkedin, Youtube } from "lucide-react";

const footerLinks = [
  { href: "#", label: "Home" },
  { href: "#services", label: "Layanan" },
  { href: "#case-studies", label: "Studi Kasus" },
  { href: "#contact", label: "Kontak" },
];

const socialLinks = [
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Youtube, href: "#", label: "YouTube" },
];

export function Footer() {
  return (
    <footer className="bg-navy-900 border-t border-navy-800">
      <div className="container mx-auto px-4 lg:px-8 py-12 lg:py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <a href="#" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-xl bg-teal-500 flex items-center justify-center">
                <span className="text-white font-bold text-xl">J</span>
              </div>
              <span className="text-xl font-bold text-white">Jejak</span>
            </a>
            <p className="text-navy-400 max-w-sm mb-6">
              Econo-Creative Agency yang menggabungkan desain visual dengan
              strategi bisnis berbasis data untuk hasil yang terukur.
            </p>
            {/* Social Links */}
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 rounded-xl bg-navy-800 flex items-center justify-center text-navy-400 hover:bg-teal-500 hover:text-white transition-all"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {footerLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-navy-400 hover:text-teal-400 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4">Kontak</h4>
            <ul className="space-y-3 text-navy-400">
              <li>
                <a
                  href="mailto:hello@jejak-creative.com"
                  className="hover:text-teal-400 transition-colors"
                >
                  hello@jejak-creative.com
                </a>
              </li>
              <li>Basecamp Jejak</li>
              <li>Kampus IT & Bisnis</li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-navy-800 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-navy-500 text-sm">
            © {new Date().getFullYear()} Jejak Econo-Creative Agency. All rights
            reserved.
          </p>
          <div className="flex items-center gap-6 text-sm text-navy-500">
            <a href="#" className="hover:text-navy-400 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-navy-400 transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
