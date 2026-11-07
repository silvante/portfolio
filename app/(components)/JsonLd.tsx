/* Structured data for search engines and AI answer engines.
   Rendered server-side as plain <script type="application/ld+json">,
   so crawlers see it without running any JavaScript. */
type Props = { data: Record<string, unknown> | Record<string, unknown>[] };

export default function JsonLd({ data }: Props) {
  const json = {
    "@context": "https://schema.org",
    "@graph": Array.isArray(data) ? data : [data],
  };

  return (
    <script
      type="application/ld+json"
      // "<" escaped so content can never close the script tag early
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(json).replace(/</g, "\\u003c"),
      }}
    />
  );
}
