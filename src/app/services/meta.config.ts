import { createClient, Entry } from 'contentful';

// const CONFIG = {
//   space: '1q8fb1hdekqp',
//   accessToken: 'TyNRjeXVFMFBO6BPfyPKeh5DKMFj5znZM0bxDDpWo4k',

//   contentTypeIds: {
//     page: 'structurePage',
//   },
// };

// const cdaClient = createClient({
//   space: CONFIG.space,
//   accessToken: CONFIG.accessToken,
// });

// function getPages(query?: object): Promise<Entry<any>[]> {
//   return cdaClient
//     .getEntries(
//       Object.assign(
//         {
//           content_type: CONFIG.contentTypeIds.page,
//         },
//         query
//       )
//     )
//     .then((res) => res.items);
// }

// const res = getPages().then((pages) => {
//   // META_INFO = pages[0].fields.seoTitle;
//   let metadata: string = '{';

//   pages.forEach((page, key, pages) => {
//     metadata += `"${page.fields.slug}": { "title": "${page.fields.seoTitle}", "description": "${page.fields.seoDescription}" }`;
//     if (!Object.is(pages.length - 1, key)) {
//       metadata += ',';
//     }
//   });

//   metadata += '}';

//   return JSON.parse(metadata);
// });

// console.log(res);

// async function getPage() {
//   cdaClient
//     .getEntry('5yUqatrKAgYPxstLJuV5Pz')
//     .then((entry) => console.log(entry))
//     .catch(console.error);
// }

// function getPage() {
//   cdaClient
//     .getEntry('5yUqatrKAgYPxstLJuV5Pz')
//     .then((entry) => console.log('test', entry))
//     .catch(console.error);
// }

// const result = async () => {
//   const page = await getPage();
//   return page;
// };

// result().then((result) => console.log('here', result));

// export const META_INFO: any = res;

export const META_INFO: any = {
  '/': {
    title: 'This is the app root',
    description: 'Welcome to my app',
  },
  '/home': {
    title: 'This is the homepage',
    description: 'Welcome to the homepage',
  },
  '/contact': {
    title: 'Contact us',
    description: 'Setting meta for the contact page',
  },
};
