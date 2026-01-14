'use client';

import React from 'react';
import { Button } from '@/components/ui/Button';
import { CheckCircle } from 'lucide-react';
import { useLocale, useTranslations } from 'next-intl';
import { BANK_ACCOUNTS } from '@/lib/constant';

type BankTransferSectionProps = {
  copiedText: string;
  variant?: 'default' | 'compact';
  copyToClipboard: (value: string, label: string) => void;
};

function SmallBankTransferInfo({
  copiedText,
  copyToClipboard,
}: BankTransferSectionProps) {
  const locale = useLocale();
  const t = useTranslations('DonationDetailPage.donation-section');
  const bank = BANK_ACCOUNTS[0];
  const showSwift = locale !== 'id';

  return (
    <div className="mb-4">
      <div
        key={`${bank.bank}-${bank.account}`}
        className="border-t mt-4 mb-4 border-b py-4"
      >
        <p className="font-semibold text-foreground mb-4 text-sm md:text-lg">{bank.bank}</p>

        <div className="space-y-6">
          <div className="flex flex-col justify-center md:flex-row gap-4">
            <BankCard
              label={t('noAccountLabel')}
              value={bank.account}
              footer={`a.n. ${bank.name}`}
              isCopied={copiedText === 'account'}
              onCopy={() => copyToClipboard(bank.account, 'account')}
              buttonLabelDefault={t('btncopyAccLabel2')}
              buttonLabelCopied={t('btncopyAccLabel')}
              variant="primary"
            />

            {showSwift && <BankCard
              label={t('swiftCodeLabel')}
              value={bank.swift}
              footer="PT BANK SYARIAH INDONESIA TBK"
              isCopied={copiedText === 'swift'}
              onCopy={() => copyToClipboard(bank.swift, 'swift')}
              buttonLabelDefault={t('btncopySwiftLabel2')}
              buttonLabelCopied={t('btncopySwiftLabel')}
              variant="secondary"
            />}
          </div>
        </div>
      </div>
    </div>
  );
}

type BankCardProps = {
  label: string;
  value: string;
  footer: string;
  isCopied: boolean;
  onCopy: () => void;
  buttonLabelDefault: string;
  buttonLabelCopied: string;
  variant?: 'primary' | 'secondary' | 'ghost';
};

const BankCard = ({
  label,
  value,
  footer,
  isCopied,
  onCopy,
  buttonLabelDefault,
  buttonLabelCopied,
  variant,
}: BankCardProps) => {
  return (
    <div className="p-2">
      <p className="text-sm text-muted-foreground mb-2 font-medium">{label}</p>
      <div className="flex gap-4 align-top">
        <div>
          <p className="font-mono font-bold text-md md:text-2xl text-foreground mb-3 break-all">
            {value}
          </p>
          <p className="text-sm md:text-md text-muted-foreground break-words mb-4">
            {footer}
          </p>
        </div>
        <div>
            <Button size="sm" variant={variant} onClick={onCopy} className={`text-base`}>
            {isCopied ? (
              <span className="flex justify-center items-center">
                <CheckCircle className="h-5 w-5 mr-2" />
                {buttonLabelCopied}
              </span>
            ) : (
              buttonLabelDefault
            )}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SmallBankTransferInfo;
