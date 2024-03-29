// localization.ts

let translation;

const loadTranslation = async (locale = 'en-us') => {
  translation = (await fetch(`assets/i18n/${locale}.json`).then(async res => res.json()));
};

// eslint-disable-next-line @typescript-eslint/no-empty-interface
// interface Translation {
//   /* for Intellisense */
//   gallery: {
//     title: string;
//     seoTitle: string;
//     seoDescription: string;
//   };
// }


export { translation, loadTranslation };
