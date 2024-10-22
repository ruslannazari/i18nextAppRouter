import initTranslations from '../i18n';
export default async function Home({ params: { locale } }: {params: {locale: "en" | "fr" | "it"}}) {
  const { t } = await initTranslations(locale, ['default']);

  return (
    <main>
      <h1>{t("greeting")}</h1>
    </main>
  );
}