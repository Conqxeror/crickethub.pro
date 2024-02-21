import cheerio from 'cheerio';

export async function GET(req, { params }) {
    const rawMatchSlug = params.slug;
    const matchSlug = rawMatchSlug.replaceAll('-', ' ');

    console.log(matchSlug);

    try {
        // Fetch HTML content from Google News
        const response = await fetch(`https://news.google.com/search?q=${matchSlug}`);
        const html = await response.text();

        // Parse HTML using Cheerio
        const $ = cheerio.load(html);

        // Select articles using the same CSS selector as in the Node.js application
        const articles = $('article');

        // Extract relevant information from each article
        const news = articles.map((index, element) => ({
            title: $(element).find('h4').text() || $(element).find('div > div + div > div a').text(),
            link: $(element).find('a[href^="./article"]').attr('href').replace('./', 'https://news.google.com/') || '',
            image: $(element).find('figure img').attr('src') || '',
            source: $(element).find('div[data-n-tid]').text() || '',
            datetime: new Date($(element).find('div:last-child time').attr('datetime')) || '',
            time: $(element).find('div:last-child time').text() || '',
        })).get();

        // Return the extracted news data
        return Response.json(news);
    } catch (error) {
        console.error('Error fetching news:', error);
        return Response.json({ error: 'Internal Server Error' });
    }
}