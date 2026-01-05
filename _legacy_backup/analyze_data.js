
const fs = require('fs');

try {
    const data = require('./Pohjois-Karjalan-tilanne-ja-kehityskuva-vuodelle-2025.json');
    data.Pages.forEach((page, i) => {
        console.log(`--- Page ${i + 1} ---`);
        const text = page.Texts.map(t => {
            try {
                return decodeURIComponent(t.R[0].T);
            } catch (e) {
                return t.R[0].T;
            }
        }).join(' ');
        console.log(text);
    });
} catch (e) {
    console.error(e);
}
