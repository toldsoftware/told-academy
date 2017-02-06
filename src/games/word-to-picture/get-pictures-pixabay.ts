import { Platform, setupBrowser } from '@told/platform/lib';

setupBrowser();
let http = Platform.http();

const apiKey = '4473112-a196654cdbdfffe7ac8adcf39';
const urlTemplate = `https://pixabay.com/api/?key=${apiKey}&q={WORD}&image_type=all&safesearch=true`;

const attribution = `
<a href="https://pixabay.com/">
    <img src="https://pixabay.com/static/img/public/medium_rectangle_a.png" alt="Pixabay">
</a>
`;

interface PixabayResponse {
    totalHits: number;
    hits: {
        // previewHeight: 83;
        // likes: 92;
        // favorites: 67;
        // tags: "rose, flower, yellow";
        webformatHeight: number;
        // views: 40971;
        webformatWidth: number;
        // previewWidth: 150;
        // comments: 20;
        // downloads: 5548;
        // pageURL: "https://pixabay.com/en/rose-flower-yellow-yellow-rose-113735/";
        // previewURL: "https://cdn.pixabay.com/photo/2013/05/26/12/14/rose-113735_150.jpg";
        webformatURL: string; // "https://pixabay.com/get/e834b2082bf11c2ad65a5854e2484195e276e0c818b5194796f8c971a1e4_640.jpg";
        // imageWidth: 2410;
        // user_id: 817;
        // user: "blizniak";
        // type: "photo";
        // id: 113735;
        // userImageURL: "https://cdn.pixabay.com/user/2013/06/28/17-07-05-714_250x250.jpg";
        // imageHeight: 133;
    }[];
}

export async function getPictures(word: string, count = 10, skip = 0) {

    let url = urlTemplate;

    let response = await http.request<PixabayResponse>(url.replace('{WORD}', word));
    let imageUrls = response.data.hits.map(x => x.webformatURL);

    if (imageUrls.length > count) {
        imageUrls = imageUrls.slice(skip, count);
    }

    return imageUrls;
}