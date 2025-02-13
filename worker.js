addEventListener('fetch', event => {
	event.respondWith(handleRequest(event.request))
})

async function handleRequest(request) {
	// Get the IP address from the request headers
	const ip = request.headers.get('CF-Connecting-IP') || 'Unknown IP';

	// Create a response with the IP address in plain text
	return new Response(ip, {
		headers: {
			'Content-Type': 'text/plain',
			'Cache-Control': 'no-store', // Prevent caching
		},
	});
}
