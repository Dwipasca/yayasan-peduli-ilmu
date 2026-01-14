import Image from 'next/image';
import { Facebook, Instagram, Youtube, Mail, Phone, MapPin } from 'lucide-react';
import { useTranslations } from 'next-intl';
import LocalizedLink from '../ui/LocalizedLink';
import { NAV_LINKS, PROGRAM_LINKS } from '@/lib/constant';

export default function Footer() {
  const t = useTranslations('Navigation');
  const tf = useTranslations('Footer');

  return (
    <footer className="bg-accent-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="md:col-span-2">
            <div className="flex items-center mb-4">
              <Image
                src="/logo.png"
                alt="Logo"
                width={50}
                height={50}
                className="mr-3"
              />
              <div>
                <h3 className="text-xl font-bold">Yayasan Peduli Ilmu</h3>
                <p className="text-primary-200">Sulawesi Tengah</p>
              </div>
            </div>
            <p className="text-gray-300 mb-4 leading-relaxed"> 
              {tf('logo.desc')}
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-300 hover:text-primary-400 transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-primary-400 transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-primary-400 transition-colors"
              >
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-primary-400">Menu</h4>
            <ul className="space-y-2">
              {NAV_LINKS.map((item) => (
                <li key={item.href}>
                  <LocalizedLink href={item.href} withActive>
                    {t(item.label)}
                  </LocalizedLink>
                </li>
              ))}

              {PROGRAM_LINKS.map((item) => (
                <li key={item.href}>
                  <LocalizedLink href={item.href}>{t(item.label)}</LocalizedLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-primary-400">Kontak</h4>
            <div className="space-y-3">
              <div className="flex items-start">
                <Mail className="h-5 w-5 mr-3 mt-0.5 text-primary-400" />
                <div>
                  <p className="text-gray-300">peduliilmusulteng@gmail.com</p>
                </div>
              </div>
              <div className="flex items-start">
                <Phone className="h-5 w-5 mr-3 mt-0.5 text-primary-400" />
                <div>
                  <p className="text-gray-300">+6285333111102</p>
                </div>
              </div>
              <div className="flex items-start">
                <MapPin className="h-5 w-5 mr-3 mt-0.5 text-primary-400" />
                <div>
                  <p className="text-gray-300">
                    Jl. Sungai Manonda Atas, Lrg. Masjid Imam Muslim Besar
                    <br />
                    RT/RW. 007/001 Kel. Duyu, Kec. Tatanga
                    <br />
                    Kota Palu, Sulawesi Tengah
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-300">
            &copy; {new Date().getFullYear()} Yayasan Peduli Ilmu Sulawesi Tengah.
            All rights reserved.
          </p>

          <p className="mt-6">Developed by <a href="https://hammercode.org" target="_blank" className="hover:text-amber-500 underline">hammercode</a></p>
        </div>
      </div>
    </footer>
  );
}
