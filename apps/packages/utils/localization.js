export let translation;
export const loadTranslation = async (locale = 'en-us') => {
  translation = await fetch(`/assets/i18n/${locale}.json`).then(async (res) => res.json());
};
