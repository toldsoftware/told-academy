import * as OCA from './get-pictures-open-clip-art';
import * as PB from './get-pictures-pixabay';


export async function getPictures(word: string, count = 10, attempt = 0) {

    // if (attempt === 0) {
    // Get Official Pictures
    // } else 

    if (attempt <= 0) { return OCA.getPictures(word, count, count * (attempt - 0)); }
    else { return PB.getPictures(word, count, count * (attempt - 2)); }
}