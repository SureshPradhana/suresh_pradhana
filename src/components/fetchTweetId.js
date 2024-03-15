// fetchTweetId.js
import fs from 'fs/promises';

export async function fetchTweetId() {
	try {
		const data = await fs.readFile('tweets.json', 'utf-8');
		const tweets = JSON.parse(data);
		const currentDate = new Date().toISOString().split('T')[0]; // Get current date in "YYYY-MM-DD" format
		return tweets[currentDate] || ''; // Return tweetId for the current date or an empty string if not found
	} catch (error) {
		console.error('Error reading tweet data:', error);
		return ''; // Return empty string in case of error
	}
}

