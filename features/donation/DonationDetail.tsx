'use client';

import { useState } from 'react';
import { useParams } from 'next/navigation';
import Image from 'next/image';
import { useLocale, useTranslations } from 'next-intl';

// hooks global
import useLocalizedField from '@/hooks/useLocalizedField';

import {
  BankTransferSection,
  ContactSection,
  DonationProgress,
  PageError,
  PageLoading,
  ProgramDetailSection,
  ProgramTimeline,
} from './components';
import useFetchProgramDetail from './hooks/useFetchProgramDetail';
import SmallBankTransferInfo from './components/SmallBankTransferInfo';

const DonationDetailPage = () => {
  const t = useTranslations('DonationDetailPage');
  const currentLocale = useLocale();

  const confirmationWhatsapp = currentLocale === 'id'
    ? '+62 823-4992-2884'
    : '6285225575696+'
  const confirmationPosition = currentLocale === 'id'
    ? 'Bendahara Yayasan'
    : 'Foundation Management Chairman'
  const params = useParams<{ slug: string }>();
  const slug = params?.slug ?? '';

  const { program, status, error } = useFetchProgramDetail(slug);
  const { getField } = useLocalizedField();

  const [copiedText, setCopiedText] = useState<string>('');

  const copyToClipboard = async (text: string, label: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedText(label);
      setTimeout(() => setCopiedText(''), 3000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  if (status === 'loading') return <PageLoading />;

  if (error) return <PageError />;

  return (
    <div className="min-h-screen" dir={currentLocale === 'ar' ? 'rtl' : 'ltr'}>
      {/* button back */}
      {/* <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="md:py-4">
          <div className="flex items-center space-x-3">
            <Link
              href={'/'}
              className="group flex items-center space-x-3 text-gray-600 hover:text-accent-600 transition-colors duration-300 focus-ring rounded-lg p-2 -ml-2"
            >
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-100 group-hover:bg-accent-50 transition-colors duration-300">
                <ArrowLeft className={`h-5 w-5`} />
              </div>
              <div className="flex flex-col text-left">
                <span className="font-semibold text-base">{t('btnBackLabel')}</span>
                <span className="text-sm text-gray-500 group-hover:text-accent-500 transition-colors">
                  {t('prevPageLabel')}
                </span>
              </div>
            </Link>
          </div>
        </div>
      </div> */}
      {/* end button back */}

      <div className="max-w-4xl mx-auto py-0 px-0 md:px-6 md:py-6">
        <div className="bg-card md:rounded-2xl shadow-sm border border-border overflow-hidden">
          {/* image */}
          <div className="aspect-video w-full relative">
            <Image
              src={program?.image_url || '/placeholder.svg'}
              alt={program?.title || 'donation-picture'}
              fill
              className="object-cover"
              sizes="(min-width: 896px) 896px, 100vw"
            />
          </div>
          {/* end image */}

          {/* Content */}
          <div className="px-3 py-6 sm:p-8">
            <h1 className="text-lg sm:text-2xl font-bold text-foreground mb-6 leading-tight">
              {getField(program, 'title')}
            </h1>

            <DonationProgress donation={program} />

            <SmallBankTransferInfo
              copiedText={copiedText}
              copyToClipboard={copyToClipboard}
            />

            <ProgramDetailSection data={program} />

            <ProgramTimeline timeline={program?.program_timeline} />

            {/* Donation Methods */}
            <div className="border-t border-border pt-8 mb-8">
              <h3 className="text-red-900 font-semibold text-foreground mb-6 text-xl sm:text-2xl">
                {t('donation-section.title')}
              </h3>

              {/* Bank Transfer */}
              <BankTransferSection
                copiedText={copiedText}
                copyToClipboard={copyToClipboard}
              />
              {/* end bank transfer */}

              <h4 className="font-medium text-foreground mb-6 text-lg sm:text-xl">
                {t('contact-section.step2Label')}
              </h4>

              <ContactSection
                copiedText={copiedText}
                copyToClipboard={copyToClipboard}
                contactNumber={confirmationWhatsapp}
                contactName={confirmationPosition}
              />
            </div>
            {/* end donation method */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DonationDetailPage;
