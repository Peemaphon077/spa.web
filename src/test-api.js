import 'dotenv/config';
import fetch from 'node-fetch';

const url = process.env.VITE_SUPABASE_URL + "/rest/v1/services?select=*";
const key = process.env.VITE_SUPABASE_ANON_KEY;

if (!url || !key) {
  throw new Error("Supabase URL or Anon Key is missing in environment variables.");
}

fetch(url, {
  headers: {
    apikey: key,
    Authorization: `Bearer ${key}`,
  },
})
  .then(res => res.json())
  .then(data => console.log("Services from Supabase:", data))
  .catch(err => console.error(err));
