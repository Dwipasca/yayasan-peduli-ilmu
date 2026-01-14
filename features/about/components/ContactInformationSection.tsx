import React from 'react';

import { MapPin, Phone, Mail } from 'lucide-react';
import { useTranslations } from 'next-intl';

export default function ContactInformationSection() {
  const t = useTranslations('AboutPage');

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-accent-50 to-primary-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title Section */}
        <div className="text-center mb-12">
          <h2 className={`text-3xl lg:text-4xl font-bold text-accent-800 mb-4`}>
            {t('contactinformation-section.title')}
          </h2>
          {/* <p></p> */}
          <div className="w-24 h-1 bg-primary-500 mx-auto mt-4"></div>
        </div>

        {/* Contacts */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* adress */}
          <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
            <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <MapPin className="h-8 w-8 text-primary-600" />
            </div>
            <h3 className={`text-xl font-bold text-accent-900 mb-4`}>
              {t('contactinformation-section.addressTitle')}
            </h3>
            <p className={`text-gray-600 `}>
              Jl. Sungai Manonda Atas, Lrg. Masjid Imam Muslim Besar
              RT/RW. 007/001 Kel. Duyu, Kec. Tatanga
              Kota Palu, Sulawesi Tengah
            </p>
          </div>
          {/* phone numbers */}
          <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
            <div className="w-16 h-16 bg-secondary-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Phone className="h-8 w-8 text-secondary-600" />
            </div>
            <h3 className={`text-xl font-bold text-accent-900 mb-4 `}>
              {t('contactinformation-section.phoneTitle')}
            </h3>
            <p className={`text-gray-600 `}>
              +6285333111102
              <br />
              +6285225575696
            </p>
          </div>
          {/* emails */}
          <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
            <div className="w-16 h-16 bg-accent-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Mail className="h-8 w-8 text-accent-600" />
            </div>
            <h3 className={`text-xl font-bold text-accent-900 mb-4 `}>
              {t('contactinformation-section.emailTitle')}
            </h3>
            <p className={`text-gray-600 `}>
              peduliilmusulteng@gmail.com
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
