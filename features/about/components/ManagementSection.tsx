import React from 'react';
import { User } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { MANAGEMENTS } from '../constants';

export default function ManagementSection() {
  const t = useTranslations('AboutPage');

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title Section */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-accent-800 mb-4">
            {t('management-section.title')}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {t('management-section.subTitle')}
          </p>
          <div className="w-24 h-1 bg-primary-500 mx-auto mt-4"></div>
        </div>

        {/* List management */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {MANAGEMENTS.map((person, index) => (
            <div
              key={index}
              className="bg-card rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 border border-b text-center group flex flex-col"
            >
              <div className="flex flex-col flex-1 p-6 border-b">
                {/* Avatar */}
                <div className="mx-auto w-20 h-20 bg-primary-500 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-200">
                  <User className="h-10 w-10 text-white" />
                </div>

                {/* Name */}
                <h3 className="text-accent-800 text-lg font-bold">{person.name}</h3>

                {/* Spacer to push position to bottom */}
                <div className="flex-1" />

                {/* Position */}
                <span className="inline-block mt-2 px-3 py-1 bg-muted text-accent-800 text-sm font-medium rounded-full">
                  {person.position}
                </span>
              </div>

              {/* Description */}
              <div className="p-6 mt-auto">
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {person.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
