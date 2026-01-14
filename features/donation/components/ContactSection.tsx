import React from 'react';
import { useTranslations } from 'next-intl';
import { Phone, CheckCircle } from 'lucide-react';

import { Button } from '@/components/ui/Button';

type ContactSectionProps = {
  copiedText: string | null;
  copyToClipboard: (text: string, id: string) => void;
  contactNumber?: string;
  contactName?: string;
};

function ContactSection({
  copiedText,
  copyToClipboard,
  contactNumber = '+62-823-4992-2884',
  contactName = 'Bendahara Yayasan',
}: ContactSectionProps) {
  const t = useTranslations('DonationDetailPage.contact-section');

  const cleanedNumber = contactNumber.replace(/\D/g, '')
  const handleClick = () => {
    copyToClipboard(`+${cleanedNumber}`, 'phone');
  };
  const whatsappLink = `https://wa.me/${cleanedNumber}`;

  return (
    <div className="bg-primary/10 rounded-xl p-6 border border-primary/20">
      <p className="font-semibold text-foreground mb-6 text-lg">WhatsApp</p>
      <div className="flex items-center gap-4 mb-6">
        <Phone className="h-6 w-6 text-primary flex-shrink-0" />
        <div className="min-w-0 flex-1">
          <p className="font-semibold text-foreground text-lg break-all">
            {contactNumber}
          </p>
          <p className="text-base text-muted-foreground">{contactName}</p>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row gap-3 mb-4">
        <Button onClick={handleClick} variant={'secondary'} className="flex-1">
          {copiedText === 'phone' ? (
            <span className="flex justify-center">
              <CheckCircle className="h-5 w-5 mr-2" />
              {t('copiedNumberLabel')}
            </span>
          ) : (
            t('copyNumberLabel')
          )}
        </Button>
        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-600 text-white px-6 py-3 rounded-lg text-base font-semibold hover:bg-green-700 transition-colors text-center flex-1"
        >
          {t('whatsappLabel')}
        </a>
      </div>
      <div className="bg-white/50 rounded-lg p-4">
        <p className="text-sm text-muted-foreground text-center leading-relaxed">
          {t.rich('infoImportant', {
            strong: (chunks) => <strong>{chunks}</strong>,
          })}
        </p>
      </div>
    </div>
  );
}

export default ContactSection;
