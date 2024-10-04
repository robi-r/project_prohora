<?php

namespace App\Http\Controllers;

use GuzzleHttp\Client;

class FloodController extends Controller
{
    public function getFloodData()
    {
        $client = new Client();
        // Update the URL to include the API key and check the endpoint
        $apiKey = '0jGIqskxUyoDEalRTOmS3DdUoDl7Eg2pARc9Kb8E'; // Replace with your actual API key
        $url = 'https://floodmap.modaps.eosdis.nasa.gov/api/v1/events?bbox=88.01,20.59,92.67,26.63&api_key=' . $apiKey;

        try {
            // Make the GET request to the NASA Flood Map API
            $response = $client->request('GET', $url);
            $data = json_decode($response->getBody(), true);

            // Ensure $data is an array and contains events
            if (!isset($data['events'])) {
                return response()->json(['error' => 'No flood events found'], 404);
            }

            // Prepare the flood events for the frontend
            $floodEvents = [];
            foreach ($data['events'] as $event) {
                // Ensure the necessary keys exist in the event array
                if (isset($event['country']) && $event['country'] === 'Bangladesh') {
                    $floodEvents[] = [
                        'location' => [
                            'lat' => $event['lat'] ?? null, // Fallback to null if not set
                            'lon' => $event['lon'] ?? null,
                            'name' => $event['place_name'] ?? 'Unknown Location'
                        ],
                        'water_level' => $event['flood_depth'] ?? 0 // Default to 0 if not set
                    ];
                }
            }

            return response()->json($floodEvents);
        } catch (\Exception $e) {
            return response()->json(['error' => 'Could not fetch data: ' . $e->getMessage()], 500);
        }
    }
}
