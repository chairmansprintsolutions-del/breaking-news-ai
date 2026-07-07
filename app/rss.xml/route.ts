import { supabase } from "../../lib/supabase";

export async function GET() {
  const { data: articles } = await supabase
    .from("articles")
    .select("*")
    .order("created_at", { ascending: false })
    .limit(50);

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
<channel>

<title>Breaking News AI</title>

<link>https://breaking-news-ai.vercel.app</link>

<description>AI Powered Global News</description>

${(articles || [])
  .map(
    (a: any) => `
<item>
<title><![CDATA[${a.title}]]></title>
<link>https://breaking-news-ai.vercel.app/alert/${a.id}</link>
<description><![CDATA[${a.summary}]]></description>
<pubDate>${new Date(a.created_at).toUTCString()}</pubDate>
</item>`
  )
  .join("")}

</channel>
</rss>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
