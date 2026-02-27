// Given a csv containing a long string parse the word "wine"
// CVS starts with "1,a list of strings check for the word wine"

//expected output would be a array with all the indexes of the word wine ex: [1, 5, 10, 15]

// mock Csv file 1-50 with strings the given function should act as a search bar where it only contains the word "wine" and return the index of the word "wine" in the csv file

const csv = `1,hello my name is Megan I love a chilled glass of wine before dinner
2,One thing I love about life is living it to the fullest every single day
3,Hello again this is Johnny Walker from chat town glad to be here
4,wine is a lovely thing of life lets make sure we live it well
5,The sunset painted the sky in shades of orange and red as we sat on the porch
6,Sometimes a quiet evening with a good book is all you need to feel at peace
7,She poured herself a glass of red wine and watched the rain fall softly outside
8,Life is too short to spend worrying about things you cannot change so enjoy it
9,The farmers market on Sunday morning always smelled of fresh bread and lavender
10,Johnny walked through the vineyard hand picking grapes for the annual wine harvest
11,Nothing brings people together quite like a shared meal and great conversation
12,The old oak tree in the backyard had stood tall and proud for over a hundred years
13,She had always dreamed of opening her own little wine shop by the sea one day
14,Every morning starts with possibility all you have to do is step outside and breathe
15,The children laughed and chased each other through the golden autumn leaves in the park
16,A fine wine like a fine friendship only gets better with the passage of time
17,He spent his afternoons tending to his garden and his evenings reading old history books
18,The mountain air was crisp and clean filling her lungs with a wonderful sense of freedom
19,They raised their glasses of wine and toasted to many more years of adventure together
20,Life is not measured by the number of breaths we take but by the moments that take our breath away`;

function csvParse(csv: string): number[] {
    const lines = csv.split('\n');
    const indices: number[] = [];

    for (const line of lines) {
        const commaIndex = line.indexOf(',');
        const rowNumber = Number(line.slice(0, commaIndex));
        const sentence = line.slice(commaIndex + 1);

        if (sentence.toLowerCase().includes('wine')) {
            indices.push(rowNumber);
        }
    }

    return indices;
}

console.log(csvParse(csv))