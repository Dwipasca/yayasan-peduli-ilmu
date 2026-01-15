import { useLocale, useTranslations } from "next-intl";
import HeaderBanner from '@/components/layout/HeaderBanner';
import MarkdownRenderer from '@/components/ui/MarkdownRenderer';
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { getTranslations } from "next-intl/server";
import { Metadata } from "next";

const imageURL = "https://uegsbnqzpdfvntuiuold.supabase.co/storage/v1/object/public/program-images/mahad-female-2.jpg"

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations('MahadWomen');

  const title = t('title')
  const description = t('subtitle')
  const metaData: Metadata = {
    title,
    description,
    openGraph: {
      title,
      description,
      images: [imageURL],
    }
  }

  return metaData
}

const MahadWomenPage = () => {
  const t = useTranslations('MahadWomen');
  const th = useTranslations('HomePage');
  const locale = useLocale()
  const isRTL = locale === 'ar';

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeaderBanner
        title={t('title')}
        description={t('subtitle')}
      />

      {/* Main Content Section */}
      <section className="pb-20 bg-muted/20">
        <div className="w-full mx-auto">

          {/* Description Section */}
          <div className="max-w-4xl mx-4 md:mx-auto mt-8 md:mt-20">
            <div className="bg-card rounded-xl shadow-lg border">
              <div className="text-center mb-6">
                <div className="mb-4">
                  <div className="relative rounded-t-xl overflow-hidden shadow-2xl hover:shadow-3xl transition-shadow duration-300 ">
                    <img
                      src={imageURL}
                      alt="Pondok Putri Darul Hadits Sibowi"
                      className="w-full h-auto object-cover"
                    />
                  </div>
                </div>
                <div className=" p-8 md:p-12">
                  <div className="w-24 h-1 bg-primary-500 rounded-full mx-auto mb-6"></div>
                  <h2 className="text-2xl md:text-3xl font-bold text-accent-900 mb-6">
                    {t('about')}
                  </h2>
                  <div className="text-muted-foreground text-lg md:text-xl leading-relaxed text-center">
                    <MarkdownRenderer markdown={t('description')} />

                    <br />
                    <Link className="inline-flex items-center justify-center rounded-xl font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none btn-primary px-6 py-3 text-lg group" href="/donation/ponpes-putri-daarul-hadiits-sibowi">
                      {th('hero-section.cta.primary')}
                      <ArrowRight
                        className={`h-5 w-5 transition-transform duration-300 group-hover:translate-x-1 ${isRTL ? 'mr-2' : 'ml-2'
                          }`}
                      />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default MahadWomenPage
