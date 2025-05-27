// src/mocks/handlers.js
import { delay, http, HttpResponse } from "msw";
import { laundromats, servicesVendorOne, servicesVendorTwo } from "./booking";

export const handlers = [
  http.get("https://localhost:8080/laundromat", async () => {
    await delay(1000);
    return HttpResponse.json(laundromats);
  }),
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
  http.get(
    "https://localhost:8080/laundromat/laundromat/timeslots/*",
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
