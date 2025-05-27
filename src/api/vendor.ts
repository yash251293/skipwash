import { useQuery } from "@tanstack/react-query";

interface Laundromat {
  id: number;
  name: string;
  website: string;
  city: string;
  address: string;
  postalCode: string;
  disallowedItems: string[];
  basePrice: number;
}

interface LaundromatServices {
  id: number;
  vendorId: number;
  title: string;
  price: number;
}

const BASE_URL = "http://localhost:8080/vendor";

const useGetLaundromats = (long: number, lat: number) => {
  const query = useQuery({
    queryKey: ["laundromats"],
    queryFn: async () => {
      const res = await fetch(`${BASE_URL}/nearby?long=${long}&lat=${lat}`);
      return res.json() as Promise<Laundromat[]>;
    },
  });

  return query;
};

const useGetLaundromatServices = (laundromatId?: number) => {
  const query = useQuery({
    queryKey: [`laundromatServices`, laundromatId],
    queryFn: async () => {
      const res = await fetch(
        `https://localhost:8080/laundromat/services/${laundromatId}`
      );
      return res.json() as Promise<LaundromatServices[]>;
    },
    enabled: !!laundromatId,
  });

  return query;
};

export interface CitySuggestion {
  id: string;
  description: string;
}

const useGetCitySuggestions = (searchQuery: string) => {
  const query = useQuery<CitySuggestion[]>({
    queryKey: ["citySuggestions", searchQuery],
    queryFn: async () => {
      // Assuming /api is a valid endpoint prefix for this application
      const res = await fetch(`/api/city-suggestions?query=${searchQuery}`);
      if (!res.ok) {
        throw new Error("Network response was not ok");
      }
      return res.json();
    },
    enabled: searchQuery.length > 0, // Enabled if searchQuery has at least 1 character
  });

  return query;
};

export { useGetLaundromats, useGetLaundromatServices, useGetCitySuggestions };
