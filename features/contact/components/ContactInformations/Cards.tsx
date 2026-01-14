import React from 'react';

import { Mail, Phone, MapPin, Clock } from 'lucide-react';

export default function Cards() {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
      {/* Email Card */}
      <div className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-shadow duration-300">
        <div className="mx-auto w-16 h-16 bg-yellow-600 rounded-full flex items-center justify-center mb-4">
          <Mail className="h-8 w-8 text-white" />
        </div>
        <h3 className="text-lg font-semibold text-brand-navy mb-2">Email</h3>
        <p className="text-gray-700 text-sm mb-1">peduliilmusulteng@gmail.com</p>
      </div>

      {/* Phone Card */}
      <div className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-shadow duration-300">
        <div className="mx-auto w-16 h-16 bg-green-700 rounded-full flex items-center justify-center mb-4">
          <Phone className="h-8 w-8 text-white" />
        </div>
        <h3 className="text-lg font-semibold text-brand-navy mb-2">Telepon</h3>
        <p className="text-gray-700 text-sm mb-1">+62 812-3456-7890</p>
        <p className="text-gray-700 text-sm">+62 821-9876-5432</p>
      </div>

      {/* Address Card */}
      <div className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-shadow duration-300">
        <div className="mx-auto w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mb-4">
          <MapPin className="h-8 w-8 text-white" />
        </div>
        <h3 className="text-lg font-semibold text-brand-navy mb-2">Alamat</h3>
        <p className="text-gray-700 text-sm">
          Jl. Pendidikan No. 123
          <br />
          Palu, Sulawesi Tengah
          <br />
          94111
        </p>
      </div>

      {/* Hours Card */}
      <div className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-shadow duration-300">
        <div className="mx-auto w-16 h-16 bg-yellow-600 rounded-full flex items-center justify-center mb-4">
          <Clock className="h-8 w-8 text-white" />
        </div>
        <h3 className="text-lg font-semibold text-brand-navy mb-2">
          Jam Operasional
        </h3>
        <p className="text-gray-700 text-sm mb-1">Senin - Jumat: 08:00 - 17:00</p>
        <p className="text-gray-700 text-sm">Sabtu: 08:00 - 12:00</p>
      </div>
    </div>
  );
}
