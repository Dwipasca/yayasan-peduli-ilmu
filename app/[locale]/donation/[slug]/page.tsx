// app/[locale]/donation/[slug]/page.tsx
import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import DonationDetailPage from '@/features/donation/DonationDetail';
import { getCachedProgramDetail } from '@/features/donation/lib/cached-program';
import { getLocalizedField } from '@/lib/getLocalizedField';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  const t = await getTranslations('HomePage');
  const program = await getCachedProgramDetail(slug);

  if (program) {
    
    const image = program?.image_url ?? undefined;
    const title = getLocalizedField(program, 'title', locale);
    const description = getLocalizedField(program, 'short_description', locale);
    const metaData: Metadata = {
      title,
      description,
      openGraph: {
        title,
        description,
      }
    }

    if (image) {
      metaData.openGraph!.images = [image]
    }

    return metaData
  }

  return {
    title: t('meta.title'),
    description: t('meta.description'),
  };
}

export default function DonationDetail() {
  return <DonationDetailPage />;
}
