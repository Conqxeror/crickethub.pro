import axios from "axios";

export async function GET() {
    try {
        const response = await fetch('https://cric-api-nine.vercel.app/matches');
        const data = await response.json(); 
        return Response.json(data);
    } catch (error) {
        console.error('Error fetching matches:', error);
        return Response.json({ error: 'Failed to fetch matches' });
    }
}