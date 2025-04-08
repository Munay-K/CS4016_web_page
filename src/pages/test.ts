export const get = async () => {
  const res = await fetch('https://prxlmyivnwvpjzrxwosj.supabase.co/rest/v1/projects', {
    headers: {
      'apikey': import.meta.env.PUBLIC_SUPABASE_ANON_KEY,
      'Authorization': `Bearer ${import.meta.env.PUBLIC_SUPABASE_ANON_KEY}`
    }
  });
  
  return new Response(await res.text());
};
