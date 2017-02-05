import { Platform, setupBrowser } from '@told/platform/lib';

setupBrowser();
let http = Platform.http();

const urlTemplate = 'https://openclipart.org/search/json/?query={WORD}&sort=downloads';

interface OpenClipArtResponse {
    msg: 'success';
    info: {
        results: number;
        pages: number;
        current_page: number;
    };
    payload: {
        title: string; // 'Soccer ball',
        // uploader: 'nicubunu',
        // total_favorites: 7,
        description: string; // 'An European football (soccer) ball',
        tags: string; // 'ball, cartoon, football, play, playing, soccer, sport, toy, Various, Verbs',
        // tags_array: string[]; // ['ball', 'cartoon', 'football', 'play', 'playing', 'soccer', 'sport', 'toy', 'Various', 'Verbs'],
        // svg_filesize: 10789,
        // downloaded_by: 26930,
        // detail_link: 'https://openclipart.org/detail/21992/Soccer%20ball',
        // id: 21992,
        // created: '2009-03-09 13:31:04',
        svg: {
            // url: 'https://openclipart.org/download/21992/nicubunu-Soccer-ball.svg',
            png_thumb: 'https://openclipart.org/image/250px/svg_to_png/21992/nicubunu-Soccer-ball.png',
            // png_full_lossy: 'https://openclipart.org/image/800px/svg_to_png/21992/nicubunu-Soccer-ball.png',
            // png_2400px: 'https://openclipart.org/image/2400px/svg_to_png/21992/nicubunu-Soccer-ball.png'
        },
        // dimensions: {
        //     'png_thumb': {
        //         'width': 250,
        //         'height': 246
        //     },
        //     'png_full_lossy': {
        //         'width': 800,
        //         'height': 786
        //     }
        // }

    }[];
}

export async function getPictures(word: string) {

    let response = await http.request<OpenClipArtResponse>(urlTemplate.replace('{WORD}', word));
    let imageUrls = response.data.payload.map(x => x.svg.png_thumb);

    return imageUrls;
}