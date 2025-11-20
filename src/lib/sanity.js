import { createClient } from "@sanity/client";

export const client = createClient({
  projectId: '8cbp73ti',
  dataset: 'production',
  apiVersion: '2025-06-18',
  useCdn: true,
});
