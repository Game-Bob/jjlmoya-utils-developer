import type { APIRoute } from "astro";
import { developerCategory } from "../../../../category";
import { ALL_ENTRIES } from "../../../../entries";
import { LANGUAGE_CODES, type Language } from "../../../../i18n/languages";
import { getCategoryPath, getUtilityPath } from "../../../../mfe/routes";

const GAMEBOB_URL = "https://www.gamebob.dev";
const JJLMOYA_URL = "https://www.jjlmoya.es";

type LocalizedEntry = {
    i18n: Partial<Record<Language, () => Promise<{ slug: string }>>>;
};

const absoluteUrl = (locale: Language, path: string): string =>
    path.startsWith("http") ? path : `${locale === "es" ? JJLMOYA_URL : GAMEBOB_URL}${path}`;

const escapeXml = (value: string): string => value
    .replaceAll("&", "&amp;")
    .replaceAll("\"", "&quot;")
    .replaceAll("'", "&apos;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");

const getContent = async (entry: LocalizedEntry, locale: Language): Promise<{ slug: string }> => {
    const loader = entry.i18n[locale] ?? entry.i18n.en;
    if (!loader) throw new Error(`Missing ${locale} and English fallback`);
    return loader();
};

export const prerender = true;

export function getStaticPaths() {
    return LANGUAGE_CODES.map((locale) => ({
        params: { locale, vertical: "developer" },
        props: { locale },
    }));
}

const buildUrlEntry = async (locale: Language, path: string, index: number): Promise<string> => {
    const links = await Promise.all(LANGUAGE_CODES.map(async (alternateLocale) => {
        const alternateCategory = await getContent(developerCategory, alternateLocale);
        const alternateContent = index === 0 ? null : await getContent(ALL_ENTRIES[index - 1]!, alternateLocale);
        const alternatePath = alternateContent
            ? getUtilityPath(alternateLocale, alternateCategory.slug, alternateContent.slug)
            : getCategoryPath(alternateLocale, alternateCategory.slug);
        return `    <xhtml:link rel="alternate" hreflang="${alternateLocale}" href="${escapeXml(absoluteUrl(alternateLocale, alternatePath))}"/>`;
    }));
    return [
        "  <url>",
        `    <loc>${escapeXml(absoluteUrl(locale, path))}</loc>`,
        ...links,
        `    <changefreq>${index === 0 ? "weekly" : "monthly"}</changefreq>`,
        `    <priority>${index === 0 ? "0.7" : "0.6"}</priority>`,
        "  </url>",
    ].join("\n");
};

export const GET: APIRoute = async ({ props }) => {
    const locale = props.locale as Language;
    const category = await getContent(developerCategory, locale);
    const contents = await Promise.all(ALL_ENTRIES.map((entry) => getContent(entry, locale)));
    const paths = [
        getCategoryPath(locale, category.slug),
        ...contents.map((content) => getUtilityPath(locale, category.slug, content.slug)),
    ];
    const urls = await Promise.all(paths.map((path, index) => buildUrlEntry(locale, path, index)));

    const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n${urls.join("\n")}\n</urlset>`;
    return new Response(xml, {
        headers: {
            "Content-Type": "application/xml; charset=utf-8",
            "Cache-Control": "public, max-age=3600, s-maxage=3600, must-revalidate",
        },
    });
};
