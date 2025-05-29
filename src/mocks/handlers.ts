// src/mocks/handlers.js
import { delay, http, HttpResponse } from "msw";
import { laundromats, servicesVendorOne, servicesVendorTwo } from "./booking";
import type { CitySuggestion } from "../api/vendor"; // Import the interface

const allSampleCities: CitySuggestion[] = [
  { id: "1", description: "New York City, NY" },
  { id: "2", description: "Newark, NJ" },
  { id: "3", description: "New Haven, CT" },
  { id: "4", description: "Boston, MA" },
  { id: "5", description: "Philadelphia, PA" },
  { id: "6", description: "Newton, MA"},
  { id: "7", description: "New Rochelle, NY"},
];

export const handlers = [
  http.get("/api/city-suggestions", async ({ request }) => {
    const url = new URL(request.url);
    const query = url.searchParams.get("query");

    if (!query || query.length < 1) {
      return HttpResponse.json([]);
    }

    const filteredCities = allSampleCities.filter((city) =>
      city.description.toLowerCase().includes(query.toLowerCase())
    );
    await delay(300); // Simulate network delay
    return HttpResponse.json(filteredCities);
  }),
  http.get("http://localhost:8080/vendor/nearby", async () => {
    await delay(1000);
    return HttpResponse.json(laundromats);
  }),
  // Example 404 Not Found
  // http.get("http://localhost:8080/vendor/nearby", async () => {
  //   await delay(500);
  //   return new HttpResponse(null, { status: 404, statusText: 'Not Found' });
  // }),

  // Example 500 Internal Server Error
  // http.get("http://localhost:8080/vendor/nearby", async () => {
  //   await delay(500);
  //   return new HttpResponse(null, { status: 500, statusText: 'Internal Server Error' });
  // }),
  http.get(
    "https://localhost:8080/laundromat/services/*",
    async ({ params }) => {
      await delay(3000);
      if (params[0] === "1") {
        return HttpResponse.json(servicesVendorOne);
      }
      return HttpResponse.json(servicesVendorTwo);
    }
  ),
];

// Add bag instructions
