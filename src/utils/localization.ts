// localization.ts

export let translation: Translation;

export const loadTranslation = async (locale = 'en-us') => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  translation = await fetch(`/assets/i18n/${locale}.json`).then(async res => res.json());
};

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface Translation {
  /* for Intellisense */
  gallery: {
    title: string;
    seoTitle: string;
    seoDescription: string;
  };
}
