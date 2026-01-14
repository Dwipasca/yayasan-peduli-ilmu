import Image from 'next/image';
import { getLocale, getTranslations } from 'next-intl/server';
import { PostgrestResponse } from '@supabase/supabase-js';

import { ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { supabase } from '@/lib/supabase';

// global components
import { Button } from '@/components/ui/Button';


import { ProgramDonationProps } from './types';

const HomePage = async () => {
  const locale = await getLocale();
  const t = await getTranslations('HomePage');
  const isRTL = locale === 'ar';

  const { data, error }: PostgrestResponse<ProgramDonationProps> = await supabase
    .from('program_donation')
    .select('*')
    .order('ends_at', { ascending: false });

  return (
    <div style={{ background: '#fffbf1' }} className="min-h-screen bg-white">
      {/* Hero Banner */}
      <section className="relative bg-gradient-to-b from-white to-primary-50 pt-28 sm:pt-36 overflow-hidden isolate">
        {/* Decorative Background Logo */}
        <div
          aria-hidden
          className="absolute inset-0 flex justify-center items-center z-0 pointer-events-none"
        >
          <div className="relative w-[460px] h-[460px] sm:w-[520px] sm:h-[520px] opacity-5 blur-[3px]">
            <Image
              src="/logo.png"
              alt="Logo yayasan peduli ilmu"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-3xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-accent-900 leading-tight drop-shadow-md">
            {t('hero-section.title')}
          </h1>

          <h2 className="mt-4 text-xl sm:text-2xl text-secondary-700 font-medium drop-shadow-sm">
            {t('hero-section.subtitle')}
          </h2>

          <p className="mt-6 text-lg sm:text-xl text-gray-700 leading-relaxed sm:leading-loose">
            {t('hero-section.description')}
          </p>

          <div
            className={cn(
              'mt-10 flex flex-col sm:flex-row justify-center gap-4',
              isRTL && 'sm:flex-row-reverse '
            )}
          >
            <Button
              href="/donation/ponpes-putri-daarul-hadiits-sibowi"
              variant="primary"
              size="lg"
              className="group"
            >
              <span>{t('hero-section.cta.primary')}</span>
              <ArrowRight
                className={`h-5 w-5 transition-transform duration-300 group-hover:translate-x-1 ${
                  isRTL ? 'mr-2' : 'ml-2'
                }`}
              />
            </Button>

            <Button href="/about" variant="secondary" size="lg">
              {t('hero-section.cta.secondary')}
            </Button>
          </div>
        </div>
      </section>
      {/* end hero banner */}

      {/* <VisiMisiSection
        title={t('visimisi-section.title')}
        description={t('visimisi-section.description')}
        visi={{
          title: t('visimisi-section.visi.title'),
          desc: t.rich('visimisi-section.visi.desc', {
            bold: (chunks) => <strong>{chunks}</strong>,
          }),
        }}
        misi={{
          title: t('visimisi-section.misi.title'),
          list: t.raw('visimisi-section.misi.list') as string[],
        }}
        isRTL={locale === 'ar'}
        visiIcon={<Eye className="h-5 w-5 text-primary-600" />}
        misiIcon={<Target className="h-5 w-5 text-secondary-600" />}
      /> */}

      {/* Program Section */}
      {/* <section className="min-h-screen grid grid-rows-[auto_1fr_auto] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <TitleSection
            title={t('program-section.title')}
            shortDesc={t('program-section.description')}
          />


          <div className="grid md:grid-cols-2 gap-8 pb-16">
            {PROGRAM_CARD_DATA.map((program, idx) => (
              <ProgramCard
                key={idx}
                href={program.href}
                icon={program.icon}
                iconBg={program.iconBg}
                title={t(`program-section.${program.id}.title`)}
                description={t(`program-section.${program.id}.desc`)}
                location={program.location}
                features={program.features}
                ctaLabel={t(`program-section.${program.id}.ctaLabel`)}
              />
            ))}
          </div>
        </div>
      </section> */}
      {/* end program section */}

      {/* Announcement section  */}
      {/* <section className="bg-muted py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <TitleSection
            title={t('announcement-section.title')}
            shortDesc={t('announcement-section.description')}
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ANNOUNCEMENTS.map((announcement) => (
              <div
                key={announcement.id}
                className="bg-card rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 border border-border group hover:-translate-y-1 flex flex-col"
              >

                <div className="p-6 border-b border-border">
                  <div className="flex items-center justify-between mb-2">
                    <span
                      className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                        announcement.urgent
                          ? 'bg-secondary-100 text-secondary-800'
                          : 'bg-muted text-muted-foreground'
                      }`}
                    >
                      {announcement.urgent && <Bell className="w-3 h-3 mr-1" />}
                      {announcement.category}
                    </span>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Calendar className="w-4 h-4 mr-1" />
                      {announcement.date}
                    </div>
                  </div>
                  <h3 className="text-accent-800 text-lg font-bold group-hover:text-primary-600 transition-colors duration-200 min-h-[60px]">
                    {announcement.title}
                  </h3>
                </div>


                <div className="p-6 flex flex-col h-full flex-1">
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    {announcement.content}
                  </p>

                  <div className="mt-auto">
                    <button className="text-primary-600 hover:text-primary-700 text-sm font-medium flex items-center group">
                      {t('announcement-section.ctaLabel')}
                      <ArrowRight className="ml-1 h-3 w-3 group-hover:translate-x-1 transition-transform duration-200" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}
      {/* end announcement section  */}

      {/* donation section */}
      {/* <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <TitleSection
            title={t('donation-section.title')}
            shortDesc={t('donation-section.description')}
          />

          {error && (
            <p className="text-center text-red-600">
              {t('donation-section.errorMsg')}
            </p>
          )}

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {data?.map((program) => (
              <ProgramDonationCard
                key={program.id}
                program={program}
                t={t}
                locale={locale as 'id' | 'en' | 'ar'}
              />
            ))}
          </div>
        </div>
      </section> */}
      {/* end donation section */}
    </div>
  );
};

export default HomePage;
