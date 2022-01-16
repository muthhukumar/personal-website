var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var __export = (target, all) => {
  __markAsModule(target);
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};

// node_modules/@remix-run/dev/compiler/shims/react.ts
import * as React from "react";

// app/entry.server.tsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
import { renderToString } from "react-dom/server";

// node_modules/remix/esm/client.js
import { Form, Link, Links, LiveReload, Meta, NavLink, Outlet, PrefetchPageLinks, RemixBrowser, RemixServer, Scripts, ScrollRestoration, useActionData, useBeforeUnload, useCatch, useFetcher, useFetchers, useFormAction, useHref, useLoaderData, useLocation, useMatches, useNavigate, useNavigationType, useOutlet, useOutletContext, useParams, useResolvedPath, useSearchParams, useSubmit, useTransition } from "@remix-run/react";

// node_modules/remix/esm/server.js
import { createCookie, createCookieSessionStorage, createMemorySessionStorage, createSession, createSessionStorage, isCookie, isSession, json, redirect } from "@remix-run/server-runtime";

// app/entry.server.tsx
function handleRequest(request, responseStatusCode, responseHeaders, remixContext) {
  const markup = renderToString(/* @__PURE__ */ React.createElement(RemixServer, {
    context: remixContext,
    url: request.url
  }));
  responseHeaders.set("Content-Type", "text/html");
  responseHeaders.set("X-Content-Type-Options", "nosniff");
  responseHeaders.set("X-Frame-Options", "DENY");
  responseHeaders.set("Cross-Origin-Resource-Policy", "same-origin");
  responseHeaders.set("X-XSS-Protection", "1; mode=block");
  responseHeaders.set("Strict-Transport-Security", "max-age=31536000");
  return new Response("<!DOCTYPE html>" + markup, {
    status: responseStatusCode,
    headers: responseHeaders
  });
}

// route-module:/Users/muthu/workspace/remix-blog/app/root.tsx
var root_exports = {};
__export(root_exports, {
  CatchBoundary: () => CatchBoundary,
  ErrorBoundary: () => ErrorBoundary,
  default: () => App,
  links: () => links,
  meta: () => meta
});
import {
  createElement as createElement7,
  useEffect
} from "react";

// public/favicon/dark/apple-touch-icon.png
var apple_touch_icon_default = "/build/_assets/apple-touch-icon-ZKUPG67L.png";

// public/favicon/light/apple-touch-icon.png
var apple_touch_icon_default2 = "/build/_assets/apple-touch-icon-BCLVRCCA.png";

// public/favicon/dark/favicon-32x32.png
var favicon_32x32_default = "/build/_assets/favicon-32x32-F3JPWICZ.png";

// public/favicon/dark/favicon-16x16.png
var favicon_16x16_default = "/build/_assets/favicon-16x16-Q4HRYY6S.png";

// public/favicon/light/favicon-32x32.png
var favicon_32x32_default2 = "/build/_assets/favicon-32x32-IQ5FG3BG.png";

// public/favicon/light/favicon-16x16.png
var favicon_16x16_default2 = "/build/_assets/favicon-16x16-SMTFE2NC.png";

// app/styles/global.css
var global_default = "/build/_assets/global-UFPZTLLJ.css";

// app/styles/tailwind.css
var tailwind_default = "/build/_assets/tailwind-IA6RWZCH.css";

// app/styles/dark.css
var dark_default = "/build/_assets/dark-RFHTAAS3.css";

// app/components/container.tsx
import {
  createElement
} from "react";
import clsx from "clsx";
function Container({
  children,
  className = void 0
}) {
  const hasPy = className == null ? void 0 : className.includes("py");
  return /* @__PURE__ */ createElement("div", {
    className: clsx("px-8 container max-w-5xl mx-auto", { "py-2": !hasPy }, className)
  }, children);
}

// app/components/go-back.tsx
import { HiOutlineArrowLeft } from "react-icons/hi";
import clsx2 from "clsx";
function GoBack({
  className,
  link
}) {
  return /* @__PURE__ */ React.createElement(Link, {
    to: link,
    className: clsx2("flex items-center self-start justify-start mb-2 text-sm light-font-color", className)
  }, /* @__PURE__ */ React.createElement(HiOutlineArrowLeft, null), /* @__PURE__ */ React.createElement("p", {
    className: "self-start ml-2 text-sm md:text-base"
  }, "Go Back"));
}

// app/components/400.tsx
function Four00({
  message,
  title,
  link
}) {
  return /* @__PURE__ */ React.createElement(Container, {
    className: "py-60"
  }, /* @__PURE__ */ React.createElement("h1", {
    className: "font-bold text-7xl"
  }, title), /* @__PURE__ */ React.createElement("p", {
    className: "mt-2 text-xl font-bold light-font-color"
  }, message), /* @__PURE__ */ React.createElement(GoBack, {
    className: "mt-8 link-font-color",
    link
  }));
}

// app/components/blog-post.tsx
import clsx3 from "clsx";
function BlogPost({
  title,
  publishedAt,
  excerpt,
  slug
}) {
  const location = useLocation();
  return /* @__PURE__ */ React.createElement(Link, {
    to: `/blog/${slug}`,
    prefetch: "render",
    className: clsx3("flex flex-col gap-2 w-full mb-2 hover:bg-[color:var(--gray)] rounded-md p-2 px-4", {
      "bg-[color:var(--gray)]": location.pathname === `/blog/${slug}`
    })
  }, /* @__PURE__ */ React.createElement("h2", {
    className: "font-semibold"
  }, title), /* @__PURE__ */ React.createElement("p", {
    className: "text-truncate text-[color:var(--gray)]/[0.3]"
  }, excerpt), /* @__PURE__ */ React.createElement(date_default, {
    className: "light-font-color",
    date: publishedAt
  }));
}

// app/components/date.tsx
import {
  createElement as createElement2
} from "react";
import moment from "moment";
var Date2 = (props) => {
  const date = props.date;
  return date ? /* @__PURE__ */ createElement2("p", __spreadProps(__spreadValues({}, props), {
    className: props.className
  }), moment(date).format("dddd, MMMM Do YYYY")) : null;
};
var date_default = Date2;

// app/components/markdown.tsx
import {
  createElement as createElement3
} from "react";
import clsx4 from "clsx";
function Markdown({
  children,
  className
}) {
  return /* @__PURE__ */ createElement3(Container, {
    className: clsx4("max-w-3xl", className)
  }, /* @__PURE__ */ createElement3("article", {
    className: "py-2 prose md:py-6 max-w-none prose-blue dark:prose-invert"
  }, children));
}

// app/components/link-button.tsx
import {
  createElement as createElement4
} from "react";
import clsx5 from "clsx";
function LinkButton({
  children,
  to,
  className
}) {
  return /* @__PURE__ */ createElement4(Link, {
    to,
    className: clsx5("p-3 md:p-4 text-sm md:text-base font-bold text-center text-gray-600 transition-all border rounded-md min-w-[13rem] bg-color border-color hover:border-black hover:text-gray-900 dark:border-white dark:light-font-color dark:border-color dark:hover:border-white dark:hover:text-white", className)
  }, children);
}

// app/components/quote.tsx
import {
  createElement as createElement5
} from "react";
import clsx6 from "clsx";
function Quote({
  children,
  author,
  className
}) {
  return /* @__PURE__ */ createElement5("figure", {
    className: clsx6("w-full mx-auto overflow-hidden lg:w-fit", className)
  }, /* @__PURE__ */ createElement5("blockquote", {
    className: "mt-4 p-4 lg:p-6 bg-gray-200 dark:bg-[color:var(--pre-color)] rounded-md before:content-['\u201C'] after:content-['\u201D']"
  }, children), /* @__PURE__ */ createElement5("figcaption", {
    className: "mt-2 text-right before:content-['-'] before:mr-1 light-font-color"
  }, author));
}

// app/components/home-section.tsx
import {
  createElement as createElement6
} from "react";
import clsx7 from "clsx";
function HomeSection({
  children,
  showBorder = true,
  title
}) {
  return /* @__PURE__ */ createElement6("div", {
    className: clsx7("py-10 lg:py-16", {
      "border-b border-color": showBorder
    })
  }, /* @__PURE__ */ createElement6("h2", {
    className: "text-xl font-bold md:text-2xl"
  }, title), children);
}

// app/components/sidebar.tsx
import clsx8 from "clsx";
import { HiHome } from "react-icons/hi";
import { RiQuillPenFill } from "react-icons/ri";
import { BsFillBookmarksFill } from "react-icons/bs";
import { GrStackOverflow } from "react-icons/gr";
import { BsGithub } from "react-icons/bs";
import { SiTwitter } from "react-icons/si";
import { IoLogoRss } from "react-icons/io";
import { HiExternalLink } from "react-icons/hi";
var socials = [
  {
    Icon: BsGithub,
    href: "https://rd.nullish.in/github",
    isLast: false,
    alt: `Muthukumar's github profile link`,
    "aria-label": "Github"
  },
  {
    Icon: SiTwitter,
    href: "https://rd.nullish.in/twitter",
    isLast: false,
    alt: `Muthukumar's twitter profile link`,
    "aria-label": "Twitter"
  },
  {
    Icon: IoLogoRss,
    href: "/rss.xml",
    isLast: true,
    alt: `Nullish.in rss feed link`,
    "aria-label": "Rss feed"
  }
];
function NavLink2(_a) {
  var _b = _a, {
    Icon,
    href,
    pathname,
    external
  } = _b, delegated = __objRest(_b, [
    "Icon",
    "href",
    "pathname",
    "external"
  ]);
  const location = useLocation();
  const currentPathname = location.pathname;
  const highlight = href === currentPathname;
  const Component = external ? (props) => /* @__PURE__ */ React.createElement("a", __spreadProps(__spreadValues({}, props), {
    target: "_blank",
    rel: "noreferrer"
  })) : Link;
  return /* @__PURE__ */ React.createElement(Component, __spreadValues({
    to: href,
    href,
    className: clsx8("font-semibold flex items-center p-2 rounded-md", {
      "bg-[color:var(--gray)]": highlight,
      "hover:bg-[color:var(--gray)]": !highlight
    })
  }, delegated), /* @__PURE__ */ React.createElement(Icon, {
    size: 15
  }), /* @__PURE__ */ React.createElement("p", {
    className: "ml-3"
  }, pathname), external ? /* @__PURE__ */ React.createElement(HiExternalLink, {
    className: "ml-auto",
    size: 15
  }) : null);
}
function Sidebar() {
  return /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-col gap-6 p-4 text-sm border-r border-color h-screen min-w-[18rem] "
  }, /* @__PURE__ */ React.createElement("h2", {
    className: "font-bold"
  }, "Muthukumar"), /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-col gap-1"
  }, /* @__PURE__ */ React.createElement(NavLink2, {
    Icon: HiHome,
    href: "/",
    pathname: "Home"
  }), /* @__PURE__ */ React.createElement(NavLink2, {
    Icon: RiQuillPenFill,
    href: "/blog",
    pathname: "Writings"
  })), /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-col gap-1"
  }, /* @__PURE__ */ React.createElement("h2", {
    className: "px-2 mb-4 text-gray-400"
  }, "Me"), /* @__PURE__ */ React.createElement(NavLink2, {
    Icon: BsFillBookmarksFill,
    href: "/bookmarks",
    pathname: "Bookmarks"
  }), /* @__PURE__ */ React.createElement(NavLink2, {
    Icon: GrStackOverflow,
    href: "/stacks",
    pathname: "Stack"
  })), /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-col gap-1"
  }, /* @__PURE__ */ React.createElement("h2", {
    className: "px-2 mb-4 text-gray-400"
  }, "Online"), socials.map((props) => /* @__PURE__ */ React.createElement(NavLink2, __spreadProps(__spreadValues({
    pathname: props["aria-label"]
  }, props), {
    key: props.href,
    external: true
  })))));
}

// app/utils/gtags.ts
var GA_TRACKING_ID = false ? "G-QNMM2GSDYJ" : "";
var pageview = (url) => {
  window.gtag("config", GA_TRACKING_ID, {
    page_path: url
  });
};

// route-module:/Users/muthu/workspace/remix-blog/app/root.tsx
var meta = () => {
  return {
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "black-transparent",
    "apple-mobile-web-app-title": "Muthukumar",
    "format-detection": "telephone=no",
    "mobile-web-app-capable": "yes",
    "msapplication-TileColor": "#000",
    image: "/images/og.jpg",
    "og:image": "/images/og.jpg",
    "og:locale": "en",
    "og:site_name": "Nullish.in",
    "twitter:card": "summary_large_image",
    "twitter:creator": "@am_muthukumar",
    "twitter:site": "@am_muthukumar",
    "X-UA-Compatible": "IE=edge,chrome=1",
    "og:type": "website",
    author: "Muthukumar",
    HandheldFriendly: "True",
    language: "en",
    MobileOptimized: "320",
    pagename: "Muthukumar",
    title: "Muthukumar",
    description: "Tutorials and notes on React, Javascript, CSS and more. Also Personal book reviews and personal thoughts on stuff and more!.",
    viewport: "width=device-width, initial-scale=1",
    robots: "index, follow"
  };
};
var links = () => {
  return [
    { rel: "stylesheet", href: global_default },
    { rel: "stylesheet", href: tailwind_default },
    { rel: "stylesheet", href: dark_default, media: "(prefers-color-scheme: dark)" },
    {
      rel: "preload",
      as: "font",
      href: "/fonts/inter-v7-latin-regular.woff",
      type: "font/woff",
      crossOrigin: "anonymous"
    },
    {
      rel: "preload",
      as: "font",
      href: "/fonts/inter-v7-latin-regular.woff2",
      type: "font/woff2",
      crossOrigin: "anonymous"
    },
    {
      rel: "apple-touch-icon",
      sizes: "180x180",
      href: apple_touch_icon_default,
      media: "(prefers-color-scheme: dark)"
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "32x32",
      href: favicon_32x32_default,
      media: "(prefers-color-scheme: dark)"
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "16x16",
      href: favicon_16x16_default,
      media: "(prefers-color-scheme: dark)"
    },
    {
      rel: "manifest",
      href: "/favicon/dark/site.webmanifest",
      media: "(prefers-color-scheme: dark)"
    },
    {
      rel: "apple-touch-icon",
      sizes: "180x180",
      href: apple_touch_icon_default2,
      media: "(prefers-color-scheme: light)"
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "32x32",
      href: favicon_32x32_default2,
      media: "(prefers-color-scheme: light)"
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "16x16",
      href: favicon_16x16_default2,
      media: "(prefers-color-scheme: light)"
    },
    {
      rel: "manifest",
      href: "/favicon/light/site.webmanifest",
      media: "(prefers-color-scheme: light)"
    }
  ];
};
function App() {
  const location = useLocation();
  useEffect(() => {
    pageview(location.pathname);
  }, [location]);
  return /* @__PURE__ */ createElement7(Document, null, /* @__PURE__ */ createElement7(Layout, null, /* @__PURE__ */ createElement7(Outlet, null)));
}
function Document({ children }) {
  return /* @__PURE__ */ createElement7("html", {
    lang: "en"
  }, /* @__PURE__ */ createElement7("head", null, /* @__PURE__ */ createElement7("meta", {
    charSet: "utf-8"
  }), /* @__PURE__ */ createElement7("meta", {
    name: "color-scheme",
    content: "dark light"
  }), /* @__PURE__ */ createElement7("meta", {
    name: "theme-color",
    media: "(prefers-color-scheme: light)",
    content: "white"
  }), /* @__PURE__ */ createElement7("meta", {
    name: "theme-color",
    media: "(prefers-color-scheme: dark)",
    content: "black"
  }), /* @__PURE__ */ createElement7(Meta, null), /* @__PURE__ */ createElement7(Links, null)), /* @__PURE__ */ createElement7("body", {
    className: "antialiased bg-color"
  }, /* @__PURE__ */ createElement7("script", {
    async: true,
    src: `https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`
  }), /* @__PURE__ */ createElement7("script", {
    async: true,
    id: "gtag-init",
    dangerouslySetInnerHTML: {
      __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', '${GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
          `
    }
  }), children, /* @__PURE__ */ createElement7(Scripts, null), /* @__PURE__ */ createElement7(ScrollRestoration, null), /* @__PURE__ */ createElement7(LiveReload, null)));
}
function Layout({ children }) {
  return /* @__PURE__ */ createElement7("div", {
    className: "flex w-full h-screen"
  }, /* @__PURE__ */ createElement7(Sidebar, null), /* @__PURE__ */ createElement7("main", {
    className: "w-full max-h-full overflow-y-auto"
  }, children));
}
function CatchBoundary() {
  const caught = useCatch();
  const message = caught.status === 404 ? caught.data.message : "Oopsies.. Something went wrong.";
  if (caught.status === 404) {
    return /* @__PURE__ */ createElement7(Four00, {
      title: "404",
      message,
      link: "/blog"
    });
  }
  return /* @__PURE__ */ createElement7(Four00, {
    title: "500",
    message,
    link: "/blog"
  });
}
function ErrorBoundary() {
  return /* @__PURE__ */ createElement7(Document, null, /* @__PURE__ */ createElement7(Layout, null, /* @__PURE__ */ createElement7(Four00, {
    title: "500",
    message: "Oopsies... Something went wrong.",
    link: "/"
  })));
}

// route-module:/Users/muthu/workspace/remix-blog/app/routes/[sitemap.xml].tsx
var sitemap_xml_exports = {};
__export(sitemap_xml_exports, {
  loader: () => loader
});

// app/utils/env.server.ts
var getRequiredServerEnvVar = (key, context) => {
  const value = context ? context[key] : process.env[key];
  if (!value) {
    throw new Error(`${key} is required ENV variable`);
  }
  return value;
};

// app/utils/graphql.server.ts
var gqRequest = async (query, variables, context) => {
  const graphqlEndpoint = getRequiredServerEnvVar("GRAPHQL_ENDPOINT", context);
  const authorizationToken = getRequiredServerEnvVar("GRAPHQL_ACCESS_TOKEN", context);
  const useGraphCdn = getRequiredServerEnvVar("USE_GRAPH_CDN", context) === "true" ? true : false;
  const config = {
    endpoint: graphqlEndpoint,
    method: "POST",
    headers: {}
  };
  if (useGraphCdn) {
    config.endpoint = getRequiredServerEnvVar("GRAPHCDN_ENDPOINT", context);
    config.headers = {
      "graphcdn-token": getRequiredServerEnvVar("GRAPHCDN_API_TOKEN", context)
    };
  } else {
    config.headers = {
      "Authorization": `Bearer ${authorizationToken}`
    };
  }
  const _a = config, { endpoint } = _a, rest = __objRest(_a, ["endpoint"]);
  const response = await fetch(endpoint, __spreadProps(__spreadValues({}, rest), {
    body: JSON.stringify({ query, variables })
  }));
  const json2 = await response.json();
  return json2.data;
};

// app/utils/cms.server.ts
var PostsQuery = `
  query MyQuery($search: String! = "") {
    posts(where: { _search: $search }) {
      id
      slug
      title
      publishedAt
      lastUpdatedAt
      excerpt
    }
  }
`;
var PostQuery = `
query GetPostBySlug($slug: String! = "") {
  post(where: {slug: $slug}) {
    title
    content {
      html
    }
    coverImage {
      url
    }
    excerpt
    publishedAt
    seo {
      title
      keywords
      image {
        url
      }
      description
    }
  }
}
`;
var getPosts = async (query, context) => {
  try {
    const posts = await gqRequest(PostsQuery, { search: query ?? "" }, context);
    if (!posts) {
      return [];
    }
    return posts.posts;
  } catch {
    return [];
  }
};
var getPost = async (slug, context) => {
  try {
    const post = await gqRequest(PostQuery, { slug }, context);
    if (!post) {
      return null;
    }
    return post.post;
  } catch {
    return null;
  }
};

// route-module:/Users/muthu/workspace/remix-blog/app/routes/[sitemap.xml].tsx
var getSiteMapText = async () => {
  const blogs = await getPosts() ?? [];
  return `
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://www.nullish.in/</loc>
    <lastmod>2021-12-28</lastmod>
  </url>
  <url>
    <loc>https://www.nullish.in/changelog</loc>
    <lastmod>2021-12-29</lastmod>
  </url>
  <url>
    <loc>https://www.nullish.in/quotes</loc>
    <lastmod>2021-12-28</lastmod>
  </url>
  <url>
    <loc>https://www.nullish.in/blog</loc>
    <lastmod>2021-12-28</lastmod>
  </url>
  <url>
    <loc>https://www.nullish.in/about</loc>
    <lastmod>2021-12-28</lastmod>
  </url>
  ${blogs.map((blog) => `
  <url>
    <loc>https://www.nullish.in/blog/${blog.slug}</loc>
    <lastmod>${blog.lastUpdatedAt}</lastmod>
  </url>
  `)}
</urlset>
`.trim();
};
var loader = async () => {
  const siteMap = await getSiteMapText();
  return new Response(siteMap, {
    headers: {
      "Content-Type": "application/xml",
      "X-Robots-Tag": "no-index",
      "Content-Length": String(Buffer.byteLength(siteMap))
    }
  });
};

// route-module:/Users/muthu/workspace/remix-blog/app/routes/close-banner.tsx
var close_banner_exports = {};
__export(close_banner_exports, {
  action: () => action
});

// app/utils/session.server.ts
var { commitSession, getSession, destroySession } = createCookieSessionStorage({
  cookie: {
    name: "_session",
    sameSite: "lax",
    path: "/",
    httpOnly: true,
    secrets: ["something string"],
    secure: false
  }
});

// route-module:/Users/muthu/workspace/remix-blog/app/routes/close-banner.tsx
var action = async ({ request }) => {
  const session = await getSession(request.headers.get("Cookie"));
  return new Response("", {
    headers: {
      "Set-Cookie": await destroySession(session)
    }
  });
};

// route-module:/Users/muthu/workspace/remix-blog/app/routes/__changelog.tsx
var changelog_exports = {};
__export(changelog_exports, {
  default: () => Changelog
});
function Changelog() {
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", {
    className: "pb-6 border-b border-color"
  }, /* @__PURE__ */ React.createElement(Container, null, /* @__PURE__ */ React.createElement("h2", {
    className: "py-4 text-xl font-bold md:py-10 md:text-2xl"
  }, "Changelog"), /* @__PURE__ */ React.createElement("p", {
    className: "text-base font-bold md:text-lg"
  }, "All notable changes to this project will be documented in this file."))), /* @__PURE__ */ React.createElement(Markdown, {
    className: "sm:max-w-5xl"
  }, /* @__PURE__ */ React.createElement(Outlet, null)));
}

// mdx:/Users/muthu/workspace/remix-blog/app/routes/__changelog/changelog.mdx
var changelog_exports2 = {};
__export(changelog_exports2, {
  attributes: () => attributes,
  default: () => changelog_default,
  filename: () => filename,
  headers: () => headers,
  links: () => links2,
  meta: () => meta2
});
import React9 from "react";
var attributes = {
  "meta": {
    "title": "Changelog",
    "description": "The history of continuous stream of changes made each day to my personal website are recorded in this page. The changes are put into one of three categories added, changed, removed under each day's date.",
    "robots": "index, follow",
    "pagename": "Changelog",
    "image": "/images/og.jpg",
    "apple-mobile-web-app-title": "Changelog,"
  },
  "headers": {
    "Cache-Control": "max-age=86400000, must-revalidate"
  }
};
function MDXContent(props = {}) {
  const _components = Object.assign({
    h3: "h3",
    h4: "h4",
    ul: "ul",
    li: "li",
    hr: "hr",
    code: "code",
    p: "p",
    pre: "pre"
  }, props.components), { wrapper: MDXLayout } = _components;
  const _content = /* @__PURE__ */ React9.createElement(React9.Fragment, null, /* @__PURE__ */ React9.createElement(_components.h3, null, "2021-12-29"), "\n", /* @__PURE__ */ React9.createElement(_components.h4, null, "Addded"), "\n", /* @__PURE__ */ React9.createElement(_components.ul, null, "\n", /* @__PURE__ */ React9.createElement(_components.li, null, "Added security header to the html request"), "\n"), "\n", /* @__PURE__ */ React9.createElement(_components.hr, null), "\n", /* @__PURE__ */ React9.createElement(_components.h3, null, "2021-12-28"), "\n", /* @__PURE__ */ React9.createElement(_components.h4, null, "Added"), "\n", /* @__PURE__ */ React9.createElement(_components.ul, null, "\n", /* @__PURE__ */ React9.createElement(_components.li, null, "Added seo stuff(description, robots, pageame, image, apple-mobile-web-app-title) to the changelog page"), "\n", /* @__PURE__ */ React9.createElement(_components.li, null, "Added seo stuff(description, robots, pageame, image, apple-mobile-web-app-title and canonical link) to the about page"), "\n", /* @__PURE__ */ React9.createElement(_components.li, null, "Added seo stuff(description, robots, pageame, image, apple-mobile-web-app-title) to the blog page"), "\n", /* @__PURE__ */ React9.createElement(_components.li, null, "Added seo stuff(canonical link) to the blog post page"), "\n", /* @__PURE__ */ React9.createElement(_components.li, null, "Added seo stuff(description, robots, pageame, image, apple-mobile-web-app-title) to the quotes page"), "\n", /* @__PURE__ */ React9.createElement(_components.li, null, "Added ", /* @__PURE__ */ React9.createElement(_components.code, null, "X-Robots-Tag: no-index"), " header to the 'rss.xml", /* @__PURE__ */ React9.createElement(_components.code, null, "and"), "sitemap.xml` file"), "\n"), "\n", /* @__PURE__ */ React9.createElement(_components.h4, null, "Changed"), "\n", /* @__PURE__ */ React9.createElement(_components.ul, null, "\n", /* @__PURE__ */ React9.createElement(_components.li, null, "Moved the canonical url from the root links to index route."), "\n", /* @__PURE__ */ React9.createElement(_components.li, null, "Changed the lastmod late of all the routes in the sitemap file"), "\n"), "\n", /* @__PURE__ */ React9.createElement(_components.h4, null, "Removed"), "\n", /* @__PURE__ */ React9.createElement(_components.ul, null, "\n", /* @__PURE__ */ React9.createElement(_components.li, null, "Removed ", /* @__PURE__ */ React9.createElement(_components.code, null, "rss.xml"), " link from the sitemap file"), "\n", /* @__PURE__ */ React9.createElement(_components.li, null, "Removed the meta function from index route"), "\n", /* @__PURE__ */ React9.createElement(_components.li, null, "Removed rickroll routes"), "\n"), "\n", /* @__PURE__ */ React9.createElement(_components.hr, null), "\n", /* @__PURE__ */ React9.createElement(_components.h3, null, "2021-12-27"), "\n", /* @__PURE__ */ React9.createElement(_components.h4, null, "Added"), "\n", /* @__PURE__ */ React9.createElement(_components.ul, null, "\n", /* @__PURE__ */ React9.createElement(_components.li, null, "Added robots meta tag - ", /* @__PURE__ */ React9.createElement(_components.code, null, "index, follow")), "\n"), "\n", /* @__PURE__ */ React9.createElement(_components.h4, null, "Changed"), "\n", /* @__PURE__ */ React9.createElement(_components.ul, null, "\n", /* @__PURE__ */ React9.createElement(_components.li, null, "Now, all the seo stuff are coming from the SEO schema"), "\n", /* @__PURE__ */ React9.createElement(_components.li, null, "Now, Google analytics will not track in development mode"), "\n", /* @__PURE__ */ React9.createElement(_components.li, null, "Updated blog page to use the seo stuff."), "\n", /* @__PURE__ */ React9.createElement(_components.li, null, "Updated the ", /* @__PURE__ */ React9.createElement(_components.code, null, "sitemap.xml"), " file to include all the blog links"), "\n", /* @__PURE__ */ React9.createElement(_components.li, null, "Changed the bg color to matt black"), "\n", /* @__PURE__ */ React9.createElement(_components.li, null, "Updated some type stuff."), "\n"), "\n", /* @__PURE__ */ React9.createElement(_components.hr, null), "\n", /* @__PURE__ */ React9.createElement(_components.h3, null, "2021-12-26"), "\n", /* @__PURE__ */ React9.createElement(_components.h4, null, "Updated"), "\n", /* @__PURE__ */ React9.createElement(_components.ul, null, "\n", /* @__PURE__ */ React9.createElement(_components.li, null, "Fixed the favicon refetch for every request by importing a file and passing it to the links export"), "\n", /* @__PURE__ */ React9.createElement(_components.li, null, "Showing the browser theme color based on the prefered color scheme"), "\n"), "\n", /* @__PURE__ */ React9.createElement(_components.h4, null, "Removed"), "\n", /* @__PURE__ */ React9.createElement(_components.ul, null, "\n", /* @__PURE__ */ React9.createElement(_components.li, null, "Removed unused packages."), "\n", /* @__PURE__ */ React9.createElement(_components.li, null, "Removed graphql request package and migrated to fetch. So migrating to cf pages will be easy."), "\n"), "\n", /* @__PURE__ */ React9.createElement(_components.hr, null), "\n", /* @__PURE__ */ React9.createElement(_components.h3, null, "2021-12-26"), "\n", /* @__PURE__ */ React9.createElement(_components.h4, null, "Added"), "\n", /* @__PURE__ */ React9.createElement(_components.ul, null, "\n", /* @__PURE__ */ React9.createElement(_components.li, null, ".env.example file to the repository"), "\n", /* @__PURE__ */ React9.createElement(_components.li, null, "Added alt attribute to the image in about page"), "\n"), "\n", /* @__PURE__ */ React9.createElement(_components.h4, null, "Changed"), "\n", /* @__PURE__ */ React9.createElement(_components.ul, null, "\n", /* @__PURE__ */ React9.createElement(_components.li, null, "changed the font size of the footer links"), "\n"), "\n", /* @__PURE__ */ React9.createElement(_components.h4, null, "Removed"), "\n", /* @__PURE__ */ React9.createElement(_components.ul, null, "\n", /* @__PURE__ */ React9.createElement(_components.li, null, "Removed unwanted margin bottom in the body"), "\n"), "\n", /* @__PURE__ */ React9.createElement(_components.hr, null), "\n", /* @__PURE__ */ React9.createElement(_components.h3, null, "2021-12-25"), "\n", /* @__PURE__ */ React9.createElement(_components.h4, null, "Added"), "\n", /* @__PURE__ */ React9.createElement(_components.ul, null, "\n", /* @__PURE__ */ React9.createElement(_components.li, null, "Added title for the Quotes page"), "\n"), "\n", /* @__PURE__ */ React9.createElement(_components.h4, null, "Changed"), "\n", /* @__PURE__ */ React9.createElement(_components.ul, null, "\n", /* @__PURE__ */ React9.createElement(_components.li, null, "Changed the title of the about page from ", /* @__PURE__ */ React9.createElement(_components.code, null, "Muthukumar"), " -> ", /* @__PURE__ */ React9.createElement(_components.code, null, "About")), "\n", /* @__PURE__ */ React9.createElement(_components.li, null, "Changed the title of the changelog page from ", /* @__PURE__ */ React9.createElement(_components.code, null, "Changelog | Muthukumar"), " -> ", /* @__PURE__ */ React9.createElement(_components.code, null, "Changelog")), "\n", /* @__PURE__ */ React9.createElement(_components.li, null, "Changed the title of the blog page from ", /* @__PURE__ */ React9.createElement(_components.code, null, "Blog | Muthukumar"), " -> ", /* @__PURE__ */ React9.createElement(_components.code, null, "Blog")), "\n"), "\n", /* @__PURE__ */ React9.createElement(_components.h4, null, "Removed"), "\n", /* @__PURE__ */ React9.createElement(_components.ul, null, "\n", /* @__PURE__ */ React9.createElement(_components.li, null, "Removed fonts with .eot, svg and ttf. Because those fonts are need for very old browsers."), "\n", /* @__PURE__ */ React9.createElement(_components.li, null, "Removed unused images assets"), "\n"), "\n", /* @__PURE__ */ React9.createElement(_components.hr, null), "\n", /* @__PURE__ */ React9.createElement(_components.h3, null, "2021-12-24"), "\n", /* @__PURE__ */ React9.createElement(_components.h4, null, "Added"), "\n", /* @__PURE__ */ React9.createElement(_components.ul, null, "\n", /* @__PURE__ */ React9.createElement(_components.li, null, "Added mobile navbar"), "\n", /* @__PURE__ */ React9.createElement(_components.li, null, "Added initial version of about page"), "\n", /* @__PURE__ */ React9.createElement(_components.li, null, "Added aria-label to button for opening menu"), "\n", /* @__PURE__ */ React9.createElement(_components.li, null, "Added quote per day in the home page"), "\n", /* @__PURE__ */ React9.createElement(_components.li, null, "Added tasks of the day in the home page"), "\n", /* @__PURE__ */ React9.createElement(_components.li, null, "Added Website map which shows most important links"), "\n", /* @__PURE__ */ React9.createElement(_components.li, null, "Added quotes page which renders all the quotes"), "\n", /* @__PURE__ */ React9.createElement(_components.li, null, "Updated the footer to have most of the links"), "\n", /* @__PURE__ */ React9.createElement(_components.li, null, "Added the initial version of sitemap.xml"), "\n", /* @__PURE__ */ React9.createElement(_components.li, null, "Enabled robots.txt file."), "\n", /* @__PURE__ */ React9.createElement(_components.li, null, "Added image and og:image url to the meta tag of the ", /* @__PURE__ */ React9.createElement(_components.code, null, "/"), " route."), "\n", /* @__PURE__ */ React9.createElement(_components.li, null, "Added this site source code link in the footer link list"), "\n", /* @__PURE__ */ React9.createElement(_components.li, null, "Added postcss-import package for importing stuff inside css files"), "\n"), "\n", /* @__PURE__ */ React9.createElement(_components.h4, null, "Changed"), "\n", /* @__PURE__ */ React9.createElement(_components.ul, null, "\n", /* @__PURE__ */ React9.createElement(_components.li, null, "Updated the RSS url from ", /* @__PURE__ */ React9.createElement(_components.code, null, "https://nullish.in/rss.xml"), " -> ", /* @__PURE__ */ React9.createElement(_components.code, null, "/rss.xml"), ". Just removed the domain from the url. So it will work on locally also."), "\n", /* @__PURE__ */ React9.createElement(_components.li, null, "Updated home page to have likes to blog, about, and changelog page."), "\n", /* @__PURE__ */ React9.createElement(_components.li, null, "Updated Home page about me and some of the easter egg stuff."), "\n", /* @__PURE__ */ React9.createElement(_components.li, null, "Updated the responsiveness of the padding and margin."), "\n", /* @__PURE__ */ React9.createElement(_components.li, null, "Fixed the bug that does not save stuff to the cookie"), "\n", /* @__PURE__ */ React9.createElement(_components.li, null, "Updated the responsiveness stuff in the home page"), "\n", /* @__PURE__ */ React9.createElement(_components.li, null, "Removed the excess padding from social profile icon"), "\n", /* @__PURE__ */ React9.createElement(_components.li, null, "Updated the quote author to have space after the dash"), "\n", /* @__PURE__ */ React9.createElement(_components.li, null, "Reduced the padding of the quote"), "\n", /* @__PURE__ */ React9.createElement(_components.li, null, "Updated the About page(Initial version)"), "\n", /* @__PURE__ */ React9.createElement(_components.li, null, "Decreased the width of the quotes page and made it look good."), "\n", /* @__PURE__ */ React9.createElement(_components.li, null, "Go back link in the ", /* @__PURE__ */ React9.createElement(_components.code, null, "/blog"), " page navigate to the same page. So it is fixed to go to home page."), "\n"), "\n", /* @__PURE__ */ React9.createElement(_components.h4, null, "Removed"), "\n", /* @__PURE__ */ React9.createElement(_components.ul, null, "\n", /* @__PURE__ */ React9.createElement(_components.li, null, "Removed the blog stuff and the loader. So the initial page will be so much faster than before. 300ms average to 150ms"), "\n", /* @__PURE__ */ React9.createElement(_components.li, null, "Removed unwanted title tag in the HTML document"), "\n"), "\n", /* @__PURE__ */ React9.createElement(_components.hr, null), "\n", /* @__PURE__ */ React9.createElement(_components.h3, null, "2021-12-23"), "\n", /* @__PURE__ */ React9.createElement(_components.h4, null, "Added"), "\n", /* @__PURE__ */ React9.createElement(_components.ul, null, "\n", /* @__PURE__ */ React9.createElement(_components.li, null, "Added canonical link to the head"), "\n"), "\n", /* @__PURE__ */ React9.createElement(_components.h4, null, "Changed"), "\n", /* @__PURE__ */ React9.createElement(_components.ul, null, "\n", /* @__PURE__ */ React9.createElement(_components.li, null, "For now, disabling the robots stuff. Once most of the website is done, then we can enable those stuff."), "\n", /* @__PURE__ */ React9.createElement(_components.li, null, "Changed the redirect url of login, signup and admin to the direct youtube url."), "\n"), "\n", /* @__PURE__ */ React9.createElement(_components.h4, null, "Removed"), "\n", /* @__PURE__ */ React9.createElement(_components.ul, null, "\n", /* @__PURE__ */ React9.createElement(_components.li, null, "Removed the ", /* @__PURE__ */ React9.createElement(_components.code, null, "maygodhelpyou"), " link redirect"), "\n"), "\n", /* @__PURE__ */ React9.createElement(_components.hr, null), "\n", /* @__PURE__ */ React9.createElement(_components.h3, null, "2021-12-22"), "\n", /* @__PURE__ */ React9.createElement(_components.h4, null, "Added"), "\n", /* @__PURE__ */ React9.createElement(_components.ul, null, "\n", /* @__PURE__ */ React9.createElement(_components.li, null, "Made the navbar almost transparent."), "\n"), "\n", /* @__PURE__ */ React9.createElement(_components.h4, null, "Changed"), "\n", /* @__PURE__ */ React9.createElement(_components.ul, null, "\n", /* @__PURE__ */ React9.createElement(_components.li, null, "Fixed the google analytics. Before analytics stuff not working for some reason. So I copied the ga template from Nextjs :)"), "\n", /* @__PURE__ */ React9.createElement(_components.li, null, "String.replaceAll not working in production for some reason. So polyfiliing it with regex"), "\n"), "\n", /* @__PURE__ */ React9.createElement(_components.h4, null, "Removed"), "\n", /* @__PURE__ */ React9.createElement(_components.ul, null, "\n", /* @__PURE__ */ React9.createElement(_components.li, null, "Uninstalled React-ga"), "\n"), "\n", /* @__PURE__ */ React9.createElement(_components.hr, null), "\n", /* @__PURE__ */ React9.createElement(_components.h3, null, "2021-12-21"), "\n", /* @__PURE__ */ React9.createElement(_components.h4, null, "Added"), "\n", /* @__PURE__ */ React9.createElement(_components.ul, null, "\n", /* @__PURE__ */ React9.createElement(_components.li, null, "Added initial version of the index page. Before in index route, the traffic is redirected to the /blog page."), "\n", /* @__PURE__ */ React9.createElement(_components.li, null, "Added robots.txt for the SEO stuff."), "\n", /* @__PURE__ */ React9.createElement(_components.li, null, "Created custom Markdown component to render the markdown."), "\n", /* @__PURE__ */ React9.createElement(_components.li, null, "Created Change log file to keep track of the progress."), "\n", /* @__PURE__ */ React9.createElement(_components.li, null, "Added ", /* @__PURE__ */ React9.createElement(_components.code, null, "sitemap.xml"), " file"), "\n", /* @__PURE__ */ React9.createElement(_components.li, null, "Added ", /* @__PURE__ */ React9.createElement(_components.code, null, "sitemap.xml"), " to the robots file"), "\n", /* @__PURE__ */ React9.createElement(_components.li, null, "Addded ", /* @__PURE__ */ React9.createElement(_components.code, null, "aria-label"), " for the github icon in the footer"), "\n", /* @__PURE__ */ React9.createElement(_components.li, null, "Addded ", /* @__PURE__ */ React9.createElement(_components.code, null, "aria-label"), " for the twitter icon in the footer"), "\n", /* @__PURE__ */ React9.createElement(_components.li, null, "Addded ", /* @__PURE__ */ React9.createElement(_components.code, null, "aria-label"), " for the rss feed icon in the footer"), "\n", /* @__PURE__ */ React9.createElement(_components.li, null, "Added google analytics"), "\n"), "\n", /* @__PURE__ */ React9.createElement(_components.h4, null, "Changed"), "\n", /* @__PURE__ */ React9.createElement(_components.ul, null, "\n", /* @__PURE__ */ React9.createElement(_components.li, null, "\n", /* @__PURE__ */ React9.createElement(_components.p, null, "Renamed the title from 'Changelog | Muthukumar' -> 'Changelog | Nullish.in'. It doesn't make sense to have Muthukumar to the changelog."), "\n"), "\n", /* @__PURE__ */ React9.createElement(_components.li, null, "\n", /* @__PURE__ */ React9.createElement(_components.p, null, "In index route, changed the title('Blog | Muthukumar' => 'Muthukumar')."), "\n"), "\n", /* @__PURE__ */ React9.createElement(_components.li, null, "\n", /* @__PURE__ */ React9.createElement(_components.p, null, "Update robots.txt content"), "\n", /* @__PURE__ */ React9.createElement(_components.pre, null, /* @__PURE__ */ React9.createElement(_components.code, {
    className: "language-txt"
  }, "User-agent: *\nAllow: /\n")), "\n"), "\n", /* @__PURE__ */ React9.createElement(_components.li, null, "\n", /* @__PURE__ */ React9.createElement(_components.p, null, "Moved the ", /* @__PURE__ */ React9.createElement(_components.code, null, "robots.txt"), " file from resource routes to public folder."), "\n", /* @__PURE__ */ React9.createElement(_components.pre, null, /* @__PURE__ */ React9.createElement(_components.code, {
    className: "language-txt"
  }, "User-agent: *\nAllow: /\n\nSitemap: https://nullish.in/sitemap.xml\n")), "\n"), "\n", /* @__PURE__ */ React9.createElement(_components.li, null, "\n", /* @__PURE__ */ React9.createElement(_components.p, null, "Changed ", /* @__PURE__ */ React9.createElement(_components.code, null, "Read more"), " in the blog to ", /* @__PURE__ */ React9.createElement(_components.code, null, "Continue reading"), ". Read more seems vague and generic. Continue Reading seems okay than Read more."), "\n"), "\n", /* @__PURE__ */ React9.createElement(_components.li, null, "\n", /* @__PURE__ */ React9.createElement(_components.p, null, "Upgraded to remix FORM for the blog post search"), "\n"), "\n"), "\n", /* @__PURE__ */ React9.createElement(_components.h4, null, "Removed"), "\n", /* @__PURE__ */ React9.createElement(_components.ul, null, "\n", /* @__PURE__ */ React9.createElement(_components.li, null, "Removed duplicate viewport tag."), "\n", /* @__PURE__ */ React9.createElement(_components.li, null, "Removed robots header from the meta. All the robots stuff are moved to the robots.txt file/route."), "\n"));
  return MDXLayout ? /* @__PURE__ */ React9.createElement(MDXLayout, __spreadValues({}, props), _content) : _content;
}
var changelog_default = MDXContent;
var filename = "changelog.mdx";
var headers = typeof attributes !== "undefined" && attributes.headers;
var meta2 = typeof attributes !== "undefined" && attributes.meta;
var links2 = void 0;

// route-module:/Users/muthu/workspace/remix-blog/app/routes/[rss.xml].tsx
var rss_xml_exports = {};
__export(rss_xml_exports, {
  loader: () => loader2
});
function escapeRegExp(string) {
  return string.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
function replaceAll(str, match, replacement) {
  return str.replace(new RegExp(escapeRegExp(match), "g"), () => replacement);
}
function escapeCdata(s) {
  return replaceAll(s, "]]>", "]]]]><![CDATA[>");
}
function escapeHtml(s) {
  const result1 = replaceAll(s, "&", "&amp;");
  const result2 = replaceAll(result1, "<", "&lt;");
  const result3 = replaceAll(result2, ">", "&gt;");
  const result4 = replaceAll(result3, '"', "&quot;");
  const result5 = replaceAll(result4, "'", "&#039;");
  return result5;
}
var loader2 = async ({ request }) => {
  const blogs = await getPosts();
  const host = request.headers.get("X-Forwarded-Host") ?? request.headers.get("host");
  if (!host) {
    throw new Error("Could not determine domain URL.");
  }
  const protocol = host.includes("localhost") ? "http" : "https";
  const domain = `${protocol}://${host}`;
  const blogUrl = `${domain}/blog`;
  const rssString = `
    <rss xmlns:blogChannel="${blogUrl}" version="2.0">
      <channel>
        <title>Muthukumar blog</title>
        <link>${blogUrl}</link>
        <description>The Muthukumar's Blog</description>
        <language>en-us</language>
        <generator>RSS feed generator</generator>
        <ttl>40</ttl>
        ${blogs.map((blog) => `
            <item>
              <title><![CDATA[${escapeCdata(blog.title)}]]></title>
              <description><![CDATA[${escapeHtml(blog.excerpt)}]]></description>
              <author><![CDATA[${escapeCdata("Muthukumar")}]]></author>
              <pubDate>${blog.publishedAt}</pubDate>
              <link>${blogUrl}/${blog.slug}</link>
              <guid>${blogUrl}/${blog.slug}</guid>
            </item>
          `.trim()).join("\n")}
      </channel>
    </rss>
  `.trim();
  return new Response(rssString, {
    headers: {
      "Cache-Control": `public, max-age=${60 * 10}, s-maxage=${60 * 60 * 24}`,
      "Content-Type": "application/xml",
      "Content-Length": String(Buffer.byteLength(rssString)),
      "X-Robots-Tag": "no-index"
    }
  });
};

// route-module:/Users/muthu/workspace/remix-blog/app/routes/quotes.tsx
var quotes_exports = {};
__export(quotes_exports, {
  default: () => Quotes,
  links: () => links3,
  loader: () => loader3,
  meta: () => meta3
});

// app/sources/quotes.ts
var quotes = [
  {
    quote: "The best is the enemy of good",
    id: "15a09e3b-16eb-481d-9125-4befac964486",
    author: "Voltaire"
  },
  {
    quote: `your future needs you, your past doesn't`,
    id: "23d4439f-1b8e-48a1-a78d-ad17d80e5fab",
    author: "Sanvello"
  },
  {
    quote: "When something is important enough, you do it even if the odds are not in your favor.",
    id: "6a781f43-9ab0-497d-8c1a-9b8f1f24a912",
    author: "Elon Musk"
  }
];

// route-module:/Users/muthu/workspace/remix-blog/app/routes/quotes.tsx
var meta3 = () => {
  return {
    "apple-mobile-web-app-title": "Quotes",
    title: "Quotes",
    description: `List of Muthukumar's favorite Quotes I found on Internet and on when reading books and watching Youtube videos`,
    pagename: "Quotes",
    robots: "index, follow",
    image: "/images/og.jpg"
  };
};
var links3 = () => {
  return [
    {
      rel: "canonical",
      href: "https://www.nullish.in/quotes"
    }
  ];
};
var loader3 = () => {
  return json(quotes);
};
function Quotes() {
  const quotes2 = useLoaderData();
  return /* @__PURE__ */ React.createElement("div", {
    className: "py-16"
  }, /* @__PURE__ */ React.createElement(Container, {
    className: "max-w-3xl"
  }, /* @__PURE__ */ React.createElement("ol", null, /* @__PURE__ */ React.createElement("h2", {
    className: "mb-4 text-xl font-bold md:text-2xl"
  }, "My Favorite Quotes"), quotes2.map((quote) => /* @__PURE__ */ React.createElement("li", {
    key: quote.id,
    className: `flex justify-start mb-2 items-start`
  }, /* @__PURE__ */ React.createElement(Quote, __spreadProps(__spreadValues({}, quote), {
    className: "mx-0 lg:w-full"
  }), quote.quote))))));
}

// route-module:/Users/muthu/workspace/remix-blog/app/routes/about.tsx
var about_exports = {};
__export(about_exports, {
  default: () => About,
  links: () => links4,
  meta: () => meta4
});
var meta4 = () => {
  return {
    "apple-mobile-web-app-title": "About",
    title: "About",
    description: "Muthukumar is a full stack developer, living in Tamil Nadu, India. He write code, listen to music and loves to read books. He occasionally write on React, Javascript and in other web development topics",
    pagename: "About",
    robots: "index, follow",
    image: "/images/og.jpg"
  };
};
var links4 = () => {
  return [
    {
      rel: "canonical",
      href: "https://www.nullish.in/about"
    }
  ];
};
function About() {
  return /* @__PURE__ */ React.createElement("div", {
    className: "py-16"
  }, /* @__PURE__ */ React.createElement(Container, null, /* @__PURE__ */ React.createElement("img", {
    src: "/images/profile.jpg",
    width: 200,
    height: 200,
    className: "mx-auto mb-8 rounded-full",
    alt: "Muthukumar"
  }), /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-col max-w-3xl mx-auto space-y-4 text-base md:text-lg"
  }, /* @__PURE__ */ React.createElement("p", null, "Hey, I'm Muthukumar. I'm a full stack developer. I likes to write code. I listen to music. And I occasionally write on React, Javascript and other stuff. Loves to read books."), /* @__PURE__ */ React.createElement("p", null, "Currently I'm in love with building website with Remix. And I also likes to try out new technologies and build stuff with it for practice."), /* @__PURE__ */ React.createElement("p", null, /* @__PURE__ */ React.createElement("a", {
    href: "https://twitter.com/RobertGreene",
    target: "_blank",
    rel: "noreferrer",
    className: "link-font-color"
  }, "Robert Greene"), ",", " ", /* @__PURE__ */ React.createElement("a", {
    href: "https://twitter.com/RyanHoliday",
    target: "_blank",
    rel: "noreferrer",
    className: "link-font-color"
  }, "Ryan Holiday"), " ", "and", " ", /* @__PURE__ */ React.createElement("a", {
    href: "https://twitter.com/IAmMarkManson",
    target: "_blank",
    rel: "noreferrer",
    className: "link-font-color"
  }, "Mark Manson"), " ", "are my favorites authors in the category of Books."), /* @__PURE__ */ React.createElement("p", null, "At present, I'm unemployed and figuring out what to do with my life."))));
}

// route-module:/Users/muthu/workspace/remix-blog/app/routes/index.tsx
var routes_exports = {};
__export(routes_exports, {
  CatchBoundary: () => CatchBoundary2,
  ErrorBoundary: () => ErrorBoundary2,
  default: () => Blog,
  links: () => links5,
  loader: () => loader4,
  meta: () => meta5
});

// app/utils/index.server.ts
var getRandomIntBetweenRange = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};
var getQuote = async (request) => {
  const session = await getSession(request.headers.get("Cookie"));
  const today = new Date().toLocaleDateString();
  let quote = session.get("quote");
  if ((quote == null ? void 0 : quote.lastUpdated) !== today || !quote) {
    const index = getRandomIntBetweenRange(0, quotes.length - 1);
    quote = {
      quote: quotes[index],
      lastUpdated: today
    };
  }
  return quote;
};

// route-module:/Users/muthu/workspace/remix-blog/app/routes/index.tsx
var meta5 = () => {
  return {
    keywords: "Nullish.in, Learn Javascript, Learn Typescript and Learn CSS, Clean code"
  };
};
var links5 = () => {
  return [
    {
      rel: "canonical",
      href: "https://www.nullish.in"
    }
  ];
};
var loader4 = async ({ request }) => {
  const session = await getSession(request.headers.get("Cookie"));
  const quote = await getQuote(request);
  session.set("quote", quote);
  return json({ quote }, {
    headers: {
      "Set-Cookie": await commitSession(session)
    }
  });
};
function Blog() {
  const data = useLoaderData();
  return /* @__PURE__ */ React.createElement("div", {
    className: "py-4 lg:py-8"
  }, /* @__PURE__ */ React.createElement(Container, null, /* @__PURE__ */ React.createElement("div", {
    className: "py-8 text-lg border-b md:py-16 border-color"
  }, /* @__PURE__ */ React.createElement("p", {
    className: "mb-2"
  }, "Hey, I'm"), /* @__PURE__ */ React.createElement("h1", {
    className: "text-3xl font-bold md:text-6xl"
  }, "Muthukumar"), /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-col mt-4 space-y-2 text-base light-font-color md:text-lg"
  }, /* @__PURE__ */ React.createElement("p", null, "Welcome to my Personal website."), /* @__PURE__ */ React.createElement("p", null, "I write ", /* @__PURE__ */ React.createElement("strong", null, "code"), ". I listen to ", /* @__PURE__ */ React.createElement("strong", null, "music"), ". Loves to read", " ", /* @__PURE__ */ React.createElement("strong", null, "books"), ". And I occasionally write articles on React, Javascript and other stuff."), /* @__PURE__ */ React.createElement("p", null, "Feel free to poke around. There are some", " ", /* @__PURE__ */ React.createElement(Link, {
    to: "/login",
    className: "link-font-color"
  }, "easter eggs"), " ", "in this website. If you find any of them, let me know on", " ", /* @__PURE__ */ React.createElement("a", {
    href: "https://rd.nullish.in/twitter",
    target: "_blank",
    rel: "noreferrer",
    "aria-label": "twitter",
    className: "link-font-color"
  }, "Twitter"), "."))), /* @__PURE__ */ React.createElement(HomeSection, {
    title: "Quote of the day"
  }, /* @__PURE__ */ React.createElement(Quote, {
    author: data.quote.quote.author
  }, data.quote.quote.quote)), /* @__PURE__ */ React.createElement(HomeSection, {
    title: "Website map",
    showBorder: false
  }, /* @__PURE__ */ React.createElement("div", {
    className: "flex items-center justify-center mt-8"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-col justify-center w-full space-y-2 md:space-y-0 md:flex-row"
  }, /* @__PURE__ */ React.createElement(LinkButton, {
    to: "/blog",
    className: "w-full md:rounded-r-none md:w-auto"
  }, "Read articles"), /* @__PURE__ */ React.createElement(LinkButton, {
    to: "/about",
    className: "inline-block w-full md:rounded-l-none md:rounded-r-none md:w-auto"
  }, "More about me"), /* @__PURE__ */ React.createElement(LinkButton, {
    to: "/changelog",
    className: "inline-block w-full md:rounded-l-none md:w-auto"
  }, "Website changelog"))))));
}
function CatchBoundary2() {
  const caught = useCatch();
  const message = caught.status === 404 ? caught.data.message : "Oopsies.. Something went wrong.";
  if (caught.status === 404) {
    return /* @__PURE__ */ React.createElement(Four00, {
      title: "404",
      message,
      link: "/blog"
    });
  }
  return /* @__PURE__ */ React.createElement(Four00, {
    title: "500",
    message,
    link: "/blog"
  });
}
function ErrorBoundary2() {
  return /* @__PURE__ */ React.createElement(Four00, {
    title: "500",
    message: "Oopsies... Something went wrong.",
    link: "/"
  });
}

// route-module:/Users/muthu/workspace/remix-blog/app/routes/login.tsx
var login_exports = {};
__export(login_exports, {
  loader: () => loader5
});
var loader5 = () => {
  throw redirect("https://www.youtube.com/watch?v=dQw4w9WgXcQ");
};

// route-module:/Users/muthu/workspace/remix-blog/app/routes/blog.tsx
var blog_exports = {};
__export(blog_exports, {
  CatchBoundary: () => CatchBoundary3,
  ErrorBoundary: () => ErrorBoundary3,
  default: () => Blog2,
  links: () => links6,
  loader: () => loader6,
  meta: () => meta6
});
import {
  createElement as createElement8
} from "react";
var meta6 = () => {
  return {
    "apple-mobile-web-app-title": "Blog",
    title: "Blog",
    description: "Tutorials for developers. Focus on Javascript, Typescript, React and other web development topics",
    pagename: "Blog",
    image: "/images/og.jpg",
    robots: "index, follow"
  };
};
var links6 = () => {
  return [
    {
      rel: "canonical",
      href: "https://www.nullish.in/blog"
    }
  ];
};
var loader6 = async ({ request, context }) => {
  const url = new URL(request.url);
  const query = url.searchParams.get("q") ?? "";
  const blogPosts = await getPosts(query, context);
  if (blogPosts.length === 0) {
    throw json({ message: "No blogs found." }, { status: 404 });
  }
  const filteredBlogPosts = !query ? blogPosts : blogPosts.filter((post) => post.title.toLowerCase().includes(query.toLowerCase()));
  return json({ blogPosts: filteredBlogPosts }, {
    headers: {
      "Cache-Control": "max-age=100, must-revalidate"
    }
  });
};
function Blog2() {
  const { blogPosts } = useLoaderData();
  return /* @__PURE__ */ createElement8("div", {
    className: "flex h-screen"
  }, /* @__PURE__ */ createElement8("div", {
    className: "overflow-y-auto max-h-screen max-w-[24rem] border-r border-color"
  }, /* @__PURE__ */ createElement8("div", {
    className: "sticky top-0 p-6 py-4 bg-color"
  }, /* @__PURE__ */ createElement8("h2", {
    className: "font-bold"
  }, "Writings")), /* @__PURE__ */ createElement8("div", {
    className: "p-2 text-sm"
  }, blogPosts.map((blogPost) => /* @__PURE__ */ createElement8(BlogPost, {
    publishedAt: blogPost.publishedAt,
    key: blogPost.id,
    slug: blogPost.slug,
    title: blogPost.title,
    excerpt: blogPost.excerpt
  })))), /* @__PURE__ */ createElement8("div", {
    className: "w-full max-h-screen overflow-y-auto"
  }, /* @__PURE__ */ createElement8(Outlet, null)));
}
function CatchBoundary3() {
  const caught = useCatch();
  const message = caught.status === 404 ? caught.data.message : "Oopsies.. Something went wrong.";
  if (caught.status === 404) {
    return /* @__PURE__ */ createElement8(Four00, {
      title: "404",
      message,
      link: "/"
    });
  }
  return /* @__PURE__ */ createElement8(Four00, {
    title: "500",
    message,
    link: "/"
  });
}
function ErrorBoundary3() {
  return /* @__PURE__ */ createElement8(Four00, {
    title: "500",
    message: "Oopsies... Something went wrong.",
    link: "/"
  });
}

// route-module:/Users/muthu/workspace/remix-blog/app/routes/blog/$slug.tsx
var slug_exports = {};
__export(slug_exports, {
  CatchBoundary: () => CatchBoundary4,
  ErrorBoundary: () => ErrorBoundary4,
  default: () => BlogSlug,
  links: () => links7,
  loader: () => loader7,
  meta: () => meta7
});
var meta7 = ({ data }) => {
  const postData = data;
  const title = (postData == null ? void 0 : postData.seo.title) ?? "Page Not Found | Muthukumar";
  return {
    "apple-mobile-web-app-title": title,
    title,
    description: (postData == null ? void 0 : postData.seo.description) ?? "",
    keywords: (postData == null ? void 0 : postData.seo.keywords) ?? "",
    image: (postData == null ? void 0 : postData.seo.image.url) ?? "",
    pagename: title,
    "og:url": data == null ? void 0 : data.url,
    "og:type": "article",
    "og:title": title,
    "og:description": (postData == null ? void 0 : postData.seo.description) ?? "",
    "og:image": (postData == null ? void 0 : postData.seo.image.url) ?? "",
    robots: "index, follow"
  };
};
var links7 = () => {
  return [
    {
      rel: "canonical",
      href: "https://www.nullish.in/blog"
    }
  ];
};
var loader7 = async ({ request, params, context }) => {
  const url = new URL(request.url);
  const slug = params.slug ?? "";
  const postData = await getPost(slug, context);
  if (!postData) {
    throw json({ message: `Oh no, the blog you looking for doesn't exists.` }, { status: 404 });
  }
  return json(__spreadValues({
    url
  }, postData), {
    headers: {
      "Cache-Control": "max-age=100, must-revalidate"
    }
  });
};
function BlogSlug() {
  const postData = useLoaderData();
  if (!postData) {
    throw new Error("Post data not found...!");
  }
  return /* @__PURE__ */ React.createElement("div", {
    className: "min-h-screen"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "sticky top-0 p-4 border-b navbar-backdrop-filter border-color"
  }, /* @__PURE__ */ React.createElement("h1", {
    className: "font-bold"
  }, postData.title)), /* @__PURE__ */ React.createElement(Markdown, {
    className: "max-w-5xl"
  }, /* @__PURE__ */ React.createElement("div", {
    dangerouslySetInnerHTML: { __html: postData.content.html }
  })));
}
function CatchBoundary4() {
  const caught = useCatch();
  const message = caught.status === 404 ? caught.data.message : "Oopsies.. Something went wrong.";
  if (caught.status === 404) {
    return /* @__PURE__ */ React.createElement(Four00, {
      title: "404",
      message,
      link: "/blog"
    });
  }
  return /* @__PURE__ */ React.createElement(Four00, {
    title: "500",
    message,
    link: "/blog"
  });
}
function ErrorBoundary4() {
  return /* @__PURE__ */ React.createElement(Four00, {
    title: "500",
    message: "Oopsies... Something went wrong.",
    link: "/blog"
  });
}

// route-module:/Users/muthu/workspace/remix-blog/app/routes/$.tsx
var __exports = {};
__export(__exports, {
  CatchBoundary: () => CatchBoundary5,
  ErrorBoundary: () => ErrorBoundary5,
  default: () => Splat,
  loader: () => loader8
});
var loader8 = async () => {
  throw json({ message: `Page, you are looking for doesn't exists` }, { status: 404 });
};
function Splat() {
  return /* @__PURE__ */ React.createElement(Container, null, /* @__PURE__ */ React.createElement("p", null, "You are not suppose to see this page. Good job getting here. Can you please let Muthu know, you got here."));
}
function CatchBoundary5() {
  const caught = useCatch();
  const message = caught.status === 404 ? caught.data.message : "Oopsies.. Something went wrong.";
  if (caught.status === 404) {
    return /* @__PURE__ */ React.createElement(Four00, {
      title: "404",
      message,
      link: "/"
    });
  }
  return /* @__PURE__ */ React.createElement(Four00, {
    title: "500",
    message,
    link: "/"
  });
}
function ErrorBoundary5() {
  return /* @__PURE__ */ React.createElement(Four00, {
    title: "500",
    message: "Oopsies... Something went wrong.",
    link: "/"
  });
}

// <stdin>
import { default as default2 } from "./assets.json";
var entry = { module: entry_server_exports };
var routes = {
  "root": {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/[sitemap.xml]": {
    id: "routes/[sitemap.xml]",
    parentId: "root",
    path: "sitemap.xml",
    index: void 0,
    caseSensitive: void 0,
    module: sitemap_xml_exports
  },
  "routes/close-banner": {
    id: "routes/close-banner",
    parentId: "root",
    path: "close-banner",
    index: void 0,
    caseSensitive: void 0,
    module: close_banner_exports
  },
  "routes/__changelog": {
    id: "routes/__changelog",
    parentId: "root",
    path: void 0,
    index: void 0,
    caseSensitive: void 0,
    module: changelog_exports
  },
  "routes/__changelog/changelog": {
    id: "routes/__changelog/changelog",
    parentId: "routes/__changelog",
    path: "changelog",
    index: void 0,
    caseSensitive: void 0,
    module: changelog_exports2
  },
  "routes/[rss.xml]": {
    id: "routes/[rss.xml]",
    parentId: "root",
    path: "rss.xml",
    index: void 0,
    caseSensitive: void 0,
    module: rss_xml_exports
  },
  "routes/quotes": {
    id: "routes/quotes",
    parentId: "root",
    path: "quotes",
    index: void 0,
    caseSensitive: void 0,
    module: quotes_exports
  },
  "routes/about": {
    id: "routes/about",
    parentId: "root",
    path: "about",
    index: void 0,
    caseSensitive: void 0,
    module: about_exports
  },
  "routes/index": {
    id: "routes/index",
    parentId: "root",
    path: void 0,
    index: true,
    caseSensitive: void 0,
    module: routes_exports
  },
  "routes/login": {
    id: "routes/login",
    parentId: "root",
    path: "login",
    index: void 0,
    caseSensitive: void 0,
    module: login_exports
  },
  "routes/blog": {
    id: "routes/blog",
    parentId: "root",
    path: "blog",
    index: void 0,
    caseSensitive: void 0,
    module: blog_exports
  },
  "routes/blog/$slug": {
    id: "routes/blog/$slug",
    parentId: "routes/blog",
    path: ":slug",
    index: void 0,
    caseSensitive: void 0,
    module: slug_exports
  },
  "routes/$": {
    id: "routes/$",
    parentId: "root",
    path: "*",
    index: void 0,
    caseSensitive: void 0,
    module: __exports
  }
};
export {
  default2 as assets,
  entry,
  routes
};
/**
 * @remix-run/react v1.1.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
/**
 * @remix-run/server-runtime v1.1.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vbm9kZV9tb2R1bGVzL0ByZW1peC1ydW4vZGV2L2NvbXBpbGVyL3NoaW1zL3JlYWN0LnRzIiwgIi4uL2FwcC9lbnRyeS5zZXJ2ZXIudHN4IiwgIi4uL25vZGVfbW9kdWxlcy9yZW1peC9lc20vY2xpZW50LmpzIiwgIi4uL25vZGVfbW9kdWxlcy9yZW1peC9lc20vc2VydmVyLmpzIiwgInJvdXRlLW1vZHVsZTovVXNlcnMvbXV0aHUvd29ya3NwYWNlL3JlbWl4LWJsb2cvYXBwL3Jvb3QudHN4IiwgIi4uL2FwcC9jb21wb25lbnRzL2NvbnRhaW5lci50c3giLCAiLi4vYXBwL2NvbXBvbmVudHMvZ28tYmFjay50c3giLCAiLi4vYXBwL2NvbXBvbmVudHMvNDAwLnRzeCIsICIuLi9hcHAvY29tcG9uZW50cy9ibG9nLXBvc3QudHN4IiwgIi4uL2FwcC9jb21wb25lbnRzL2RhdGUudHN4IiwgIi4uL2FwcC9jb21wb25lbnRzL21hcmtkb3duLnRzeCIsICIuLi9hcHAvY29tcG9uZW50cy9saW5rLWJ1dHRvbi50c3giLCAiLi4vYXBwL2NvbXBvbmVudHMvcXVvdGUudHN4IiwgIi4uL2FwcC9jb21wb25lbnRzL2hvbWUtc2VjdGlvbi50c3giLCAiLi4vYXBwL2NvbXBvbmVudHMvc2lkZWJhci50c3giLCAiLi4vYXBwL3V0aWxzL2d0YWdzLnRzIiwgInJvdXRlLW1vZHVsZTovVXNlcnMvbXV0aHUvd29ya3NwYWNlL3JlbWl4LWJsb2cvYXBwL3JvdXRlcy9bc2l0ZW1hcC54bWxdLnRzeCIsICIuLi9hcHAvdXRpbHMvZW52LnNlcnZlci50cyIsICIuLi9hcHAvdXRpbHMvZ3JhcGhxbC5zZXJ2ZXIudHMiLCAiLi4vYXBwL3V0aWxzL2Ntcy5zZXJ2ZXIudHMiLCAicm91dGUtbW9kdWxlOi9Vc2Vycy9tdXRodS93b3Jrc3BhY2UvcmVtaXgtYmxvZy9hcHAvcm91dGVzL2Nsb3NlLWJhbm5lci50c3giLCAiLi4vYXBwL3V0aWxzL3Nlc3Npb24uc2VydmVyLnRzIiwgInJvdXRlLW1vZHVsZTovVXNlcnMvbXV0aHUvd29ya3NwYWNlL3JlbWl4LWJsb2cvYXBwL3JvdXRlcy9fX2NoYW5nZWxvZy50c3giLCAibWR4Oi9Vc2Vycy9tdXRodS93b3Jrc3BhY2UvcmVtaXgtYmxvZy9hcHAvcm91dGVzL19fY2hhbmdlbG9nL2NoYW5nZWxvZy5tZHgiLCAicm91dGUtbW9kdWxlOi9Vc2Vycy9tdXRodS93b3Jrc3BhY2UvcmVtaXgtYmxvZy9hcHAvcm91dGVzL1tyc3MueG1sXS50c3giLCAicm91dGUtbW9kdWxlOi9Vc2Vycy9tdXRodS93b3Jrc3BhY2UvcmVtaXgtYmxvZy9hcHAvcm91dGVzL3F1b3Rlcy50c3giLCAiLi4vYXBwL3NvdXJjZXMvcXVvdGVzLnRzIiwgInJvdXRlLW1vZHVsZTovVXNlcnMvbXV0aHUvd29ya3NwYWNlL3JlbWl4LWJsb2cvYXBwL3JvdXRlcy9hYm91dC50c3giLCAicm91dGUtbW9kdWxlOi9Vc2Vycy9tdXRodS93b3Jrc3BhY2UvcmVtaXgtYmxvZy9hcHAvcm91dGVzL2luZGV4LnRzeCIsICIuLi9hcHAvdXRpbHMvaW5kZXguc2VydmVyLnRzIiwgInJvdXRlLW1vZHVsZTovVXNlcnMvbXV0aHUvd29ya3NwYWNlL3JlbWl4LWJsb2cvYXBwL3JvdXRlcy9sb2dpbi50c3giLCAicm91dGUtbW9kdWxlOi9Vc2Vycy9tdXRodS93b3Jrc3BhY2UvcmVtaXgtYmxvZy9hcHAvcm91dGVzL2Jsb2cudHN4IiwgInJvdXRlLW1vZHVsZTovVXNlcnMvbXV0aHUvd29ya3NwYWNlL3JlbWl4LWJsb2cvYXBwL3JvdXRlcy9ibG9nLyRzbHVnLnRzeCIsICJyb3V0ZS1tb2R1bGU6L1VzZXJzL211dGh1L3dvcmtzcGFjZS9yZW1peC1ibG9nL2FwcC9yb3V0ZXMvJC50c3giLCAiPHN0ZGluPiJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5leHBvcnQgeyBSZWFjdCB9O1xuIiwgImltcG9ydCB7IHJlbmRlclRvU3RyaW5nIH0gZnJvbSAncmVhY3QtZG9tL3NlcnZlcidcbmltcG9ydCB7IFJlbWl4U2VydmVyIH0gZnJvbSAncmVtaXgnXG5pbXBvcnQgdHlwZSB7IEVudHJ5Q29udGV4dCB9IGZyb20gJ3JlbWl4J1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBoYW5kbGVSZXF1ZXN0KFxuICByZXF1ZXN0OiBSZXF1ZXN0LFxuICByZXNwb25zZVN0YXR1c0NvZGU6IG51bWJlcixcbiAgcmVzcG9uc2VIZWFkZXJzOiBIZWFkZXJzLFxuICByZW1peENvbnRleHQ6IEVudHJ5Q29udGV4dCxcbikge1xuICBjb25zdCBtYXJrdXAgPSByZW5kZXJUb1N0cmluZyg8UmVtaXhTZXJ2ZXIgY29udGV4dD17cmVtaXhDb250ZXh0fSB1cmw9e3JlcXVlc3QudXJsfSAvPilcblxuICByZXNwb25zZUhlYWRlcnMuc2V0KCdDb250ZW50LVR5cGUnLCAndGV4dC9odG1sJylcbiAgcmVzcG9uc2VIZWFkZXJzLnNldCgnWC1Db250ZW50LVR5cGUtT3B0aW9ucycsICdub3NuaWZmJylcbiAgcmVzcG9uc2VIZWFkZXJzLnNldCgnWC1GcmFtZS1PcHRpb25zJywgJ0RFTlknKVxuICByZXNwb25zZUhlYWRlcnMuc2V0KCdDcm9zcy1PcmlnaW4tUmVzb3VyY2UtUG9saWN5JywgJ3NhbWUtb3JpZ2luJylcbiAgcmVzcG9uc2VIZWFkZXJzLnNldCgnWC1YU1MtUHJvdGVjdGlvbicsICcxOyBtb2RlPWJsb2NrJylcbiAgcmVzcG9uc2VIZWFkZXJzLnNldCgnU3RyaWN0LVRyYW5zcG9ydC1TZWN1cml0eScsICdtYXgtYWdlPTMxNTM2MDAwJylcblxuICByZXR1cm4gbmV3IFJlc3BvbnNlKCc8IURPQ1RZUEUgaHRtbD4nICsgbWFya3VwLCB7XG4gICAgc3RhdHVzOiByZXNwb25zZVN0YXR1c0NvZGUsXG4gICAgaGVhZGVyczogcmVzcG9uc2VIZWFkZXJzLFxuICB9KVxufVxuIiwgIi8qKlxuICogQHJlbWl4LXJ1bi9yZWFjdCB2MS4xLjFcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIFJlbWl4IFNvZnR3YXJlIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UubWQgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqXG4gKiBAbGljZW5zZSBNSVRcbiAqL1xuZXhwb3J0IHsgRm9ybSwgTGluaywgTGlua3MsIExpdmVSZWxvYWQsIE1ldGEsIE5hdkxpbmssIE91dGxldCwgUHJlZmV0Y2hQYWdlTGlua3MsIFJlbWl4QnJvd3NlciwgUmVtaXhTZXJ2ZXIsIFNjcmlwdHMsIFNjcm9sbFJlc3RvcmF0aW9uLCB1c2VBY3Rpb25EYXRhLCB1c2VCZWZvcmVVbmxvYWQsIHVzZUNhdGNoLCB1c2VGZXRjaGVyLCB1c2VGZXRjaGVycywgdXNlRm9ybUFjdGlvbiwgdXNlSHJlZiwgdXNlTG9hZGVyRGF0YSwgdXNlTG9jYXRpb24sIHVzZU1hdGNoZXMsIHVzZU5hdmlnYXRlLCB1c2VOYXZpZ2F0aW9uVHlwZSwgdXNlT3V0bGV0LCB1c2VPdXRsZXRDb250ZXh0LCB1c2VQYXJhbXMsIHVzZVJlc29sdmVkUGF0aCwgdXNlU2VhcmNoUGFyYW1zLCB1c2VTdWJtaXQsIHVzZVRyYW5zaXRpb24gfSBmcm9tICdAcmVtaXgtcnVuL3JlYWN0JztcbiIsICIvKipcbiAqIEByZW1peC1ydW4vc2VydmVyLXJ1bnRpbWUgdjEuMS4xXG4gKlxuICogQ29weXJpZ2h0IChjKSBSZW1peCBTb2Z0d2FyZSBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFLm1kIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKlxuICogQGxpY2Vuc2UgTUlUXG4gKi9cbmV4cG9ydCB7IGNyZWF0ZUNvb2tpZSwgY3JlYXRlQ29va2llU2Vzc2lvblN0b3JhZ2UsIGNyZWF0ZU1lbW9yeVNlc3Npb25TdG9yYWdlLCBjcmVhdGVTZXNzaW9uLCBjcmVhdGVTZXNzaW9uU3RvcmFnZSwgaXNDb29raWUsIGlzU2Vzc2lvbiwganNvbiwgcmVkaXJlY3QgfSBmcm9tICdAcmVtaXgtcnVuL3NlcnZlci1ydW50aW1lJztcbiIsICJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IFNjcmlwdHMsIExpbmtzRnVuY3Rpb24sIHVzZUNhdGNoLCB1c2VMb2NhdGlvbiB9IGZyb20gJ3JlbWl4J1xuaW1wb3J0IHsgTGlua3MsIExpdmVSZWxvYWQsIE1ldGEsIE91dGxldCwgU2Nyb2xsUmVzdG9yYXRpb24sIE1ldGFGdW5jdGlvbiB9IGZyb20gJ3JlbWl4J1xuXG5pbXBvcnQgYXBwbGVUb3VjaEZhdkljb24gZnJvbSAnLi4vcHVibGljL2Zhdmljb24vZGFyay9hcHBsZS10b3VjaC1pY29uLnBuZydcbmltcG9ydCBsaWdodEFwcGxlVG91Y2hGYXZJY29uIGZyb20gJy4uL3B1YmxpYy9mYXZpY29uL2xpZ2h0L2FwcGxlLXRvdWNoLWljb24ucG5nJ1xuXG5pbXBvcnQgYmlnRGFya0Zhdkljb24gZnJvbSAnLi4vcHVibGljL2Zhdmljb24vZGFyay9mYXZpY29uLTMyeDMyLnBuZydcbmltcG9ydCBzbWFsbERhcmtGYXZJY29uIGZyb20gJy4uL3B1YmxpYy9mYXZpY29uL2RhcmsvZmF2aWNvbi0xNngxNi5wbmcnXG5cbmltcG9ydCBiaWdMaWdodEZhdkljb24gZnJvbSAnLi4vcHVibGljL2Zhdmljb24vbGlnaHQvZmF2aWNvbi0zMngzMi5wbmcnXG5pbXBvcnQgc21hbGxMaWdodEZhdkljb24gZnJvbSAnLi4vcHVibGljL2Zhdmljb24vbGlnaHQvZmF2aWNvbi0xNngxNi5wbmcnXG5cbmltcG9ydCBnbG9iYWxTdHlsZXNVcmwgZnJvbSAnfi9zdHlsZXMvZ2xvYmFsLmNzcydcbmltcG9ydCB0YWlsd2luZFN0eWxlc1VybCBmcm9tICd+L3N0eWxlcy90YWlsd2luZC5jc3MnXG5pbXBvcnQgZGFya1N0eWxlc1VybCBmcm9tICd+L3N0eWxlcy9kYXJrLmNzcydcblxuaW1wb3J0IHsgU2lkZWJhciwgRm91cjAwIH0gZnJvbSAnfi9jb21wb25lbnRzJ1xuaW1wb3J0ICogYXMgZ3RhZyBmcm9tICd+L3V0aWxzL2d0YWdzJ1xuXG5leHBvcnQgY29uc3QgbWV0YTogTWV0YUZ1bmN0aW9uID0gKCkgPT4ge1xuICByZXR1cm4ge1xuICAgICdhcHBsZS1tb2JpbGUtd2ViLWFwcC1jYXBhYmxlJzogJ3llcycsXG4gICAgJ2FwcGxlLW1vYmlsZS13ZWItYXBwLXN0YXR1cy1iYXItc3R5bGUnOiAnYmxhY2stdHJhbnNwYXJlbnQnLFxuICAgICdhcHBsZS1tb2JpbGUtd2ViLWFwcC10aXRsZSc6ICdNdXRodWt1bWFyJyxcbiAgICAnZm9ybWF0LWRldGVjdGlvbic6ICd0ZWxlcGhvbmU9bm8nLFxuICAgICdtb2JpbGUtd2ViLWFwcC1jYXBhYmxlJzogJ3llcycsXG4gICAgJ21zYXBwbGljYXRpb24tVGlsZUNvbG9yJzogJyMwMDAnLFxuICAgIGltYWdlOiAnL2ltYWdlcy9vZy5qcGcnLFxuICAgICdvZzppbWFnZSc6ICcvaW1hZ2VzL29nLmpwZycsXG4gICAgJ29nOmxvY2FsZSc6ICdlbicsXG4gICAgJ29nOnNpdGVfbmFtZSc6ICdOdWxsaXNoLmluJyxcbiAgICAndHdpdHRlcjpjYXJkJzogJ3N1bW1hcnlfbGFyZ2VfaW1hZ2UnLFxuICAgICd0d2l0dGVyOmNyZWF0b3InOiAnQGFtX211dGh1a3VtYXInLFxuICAgICd0d2l0dGVyOnNpdGUnOiAnQGFtX211dGh1a3VtYXInLFxuICAgICdYLVVBLUNvbXBhdGlibGUnOiAnSUU9ZWRnZSxjaHJvbWU9MScsXG4gICAgJ29nOnR5cGUnOiAnd2Vic2l0ZScsXG4gICAgYXV0aG9yOiAnTXV0aHVrdW1hcicsXG4gICAgSGFuZGhlbGRGcmllbmRseTogJ1RydWUnLFxuICAgIGxhbmd1YWdlOiAnZW4nLFxuICAgIE1vYmlsZU9wdGltaXplZDogJzMyMCcsXG4gICAgcGFnZW5hbWU6ICdNdXRodWt1bWFyJyxcbiAgICB0aXRsZTogJ011dGh1a3VtYXInLFxuICAgIGRlc2NyaXB0aW9uOlxuICAgICAgJ1R1dG9yaWFscyBhbmQgbm90ZXMgb24gUmVhY3QsIEphdmFzY3JpcHQsIENTUyBhbmQgbW9yZS4gQWxzbyBQZXJzb25hbCBib29rIHJldmlld3MgYW5kIHBlcnNvbmFsIHRob3VnaHRzIG9uIHN0dWZmIGFuZCBtb3JlIS4nLFxuICAgIHZpZXdwb3J0OiAnd2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTEnLFxuICAgIHJvYm90czogJ2luZGV4LCBmb2xsb3cnLFxuICB9XG59XG5cbmV4cG9ydCBjb25zdCBsaW5rczogTGlua3NGdW5jdGlvbiA9ICgpID0+IHtcbiAgcmV0dXJuIFtcbiAgICB7IHJlbDogJ3N0eWxlc2hlZXQnLCBocmVmOiBnbG9iYWxTdHlsZXNVcmwgfSxcbiAgICB7IHJlbDogJ3N0eWxlc2hlZXQnLCBocmVmOiB0YWlsd2luZFN0eWxlc1VybCB9LFxuICAgIHsgcmVsOiAnc3R5bGVzaGVldCcsIGhyZWY6IGRhcmtTdHlsZXNVcmwsIG1lZGlhOiAnKHByZWZlcnMtY29sb3Itc2NoZW1lOiBkYXJrKScgfSxcbiAgICB7XG4gICAgICByZWw6ICdwcmVsb2FkJyxcbiAgICAgIGFzOiAnZm9udCcsXG4gICAgICBocmVmOiAnL2ZvbnRzL2ludGVyLXY3LWxhdGluLXJlZ3VsYXIud29mZicsXG4gICAgICB0eXBlOiAnZm9udC93b2ZmJyxcbiAgICAgIGNyb3NzT3JpZ2luOiAnYW5vbnltb3VzJyxcbiAgICB9LFxuICAgIHtcbiAgICAgIHJlbDogJ3ByZWxvYWQnLFxuICAgICAgYXM6ICdmb250JyxcbiAgICAgIGhyZWY6ICcvZm9udHMvaW50ZXItdjctbGF0aW4tcmVndWxhci53b2ZmMicsXG4gICAgICB0eXBlOiAnZm9udC93b2ZmMicsXG4gICAgICBjcm9zc09yaWdpbjogJ2Fub255bW91cycsXG4gICAgfSxcblxuICAgIHtcbiAgICAgIHJlbDogJ2FwcGxlLXRvdWNoLWljb24nLFxuICAgICAgc2l6ZXM6ICcxODB4MTgwJyxcbiAgICAgIGhyZWY6IGFwcGxlVG91Y2hGYXZJY29uLFxuICAgICAgbWVkaWE6ICcocHJlZmVycy1jb2xvci1zY2hlbWU6IGRhcmspJyxcbiAgICB9LFxuICAgIHtcbiAgICAgIHJlbDogJ2ljb24nLFxuICAgICAgdHlwZTogJ2ltYWdlL3BuZycsXG4gICAgICBzaXplczogJzMyeDMyJyxcbiAgICAgIGhyZWY6IGJpZ0RhcmtGYXZJY29uLFxuICAgICAgbWVkaWE6ICcocHJlZmVycy1jb2xvci1zY2hlbWU6IGRhcmspJyxcbiAgICB9LFxuICAgIHtcbiAgICAgIHJlbDogJ2ljb24nLFxuICAgICAgdHlwZTogJ2ltYWdlL3BuZycsXG4gICAgICBzaXplczogJzE2eDE2JyxcbiAgICAgIGhyZWY6IHNtYWxsRGFya0Zhdkljb24sXG4gICAgICBtZWRpYTogJyhwcmVmZXJzLWNvbG9yLXNjaGVtZTogZGFyayknLFxuICAgIH0sXG4gICAge1xuICAgICAgcmVsOiAnbWFuaWZlc3QnLFxuICAgICAgaHJlZjogJy9mYXZpY29uL2Rhcmsvc2l0ZS53ZWJtYW5pZmVzdCcsXG4gICAgICBtZWRpYTogJyhwcmVmZXJzLWNvbG9yLXNjaGVtZTogZGFyayknLFxuICAgIH0sXG5cbiAgICB7XG4gICAgICByZWw6ICdhcHBsZS10b3VjaC1pY29uJyxcbiAgICAgIHNpemVzOiAnMTgweDE4MCcsXG4gICAgICBocmVmOiBsaWdodEFwcGxlVG91Y2hGYXZJY29uLFxuICAgICAgbWVkaWE6ICcocHJlZmVycy1jb2xvci1zY2hlbWU6IGxpZ2h0KScsXG4gICAgfSxcbiAgICB7XG4gICAgICByZWw6ICdpY29uJyxcbiAgICAgIHR5cGU6ICdpbWFnZS9wbmcnLFxuICAgICAgc2l6ZXM6ICczMngzMicsXG4gICAgICBocmVmOiBiaWdMaWdodEZhdkljb24sXG4gICAgICBtZWRpYTogJyhwcmVmZXJzLWNvbG9yLXNjaGVtZTogbGlnaHQpJyxcbiAgICB9LFxuICAgIHtcbiAgICAgIHJlbDogJ2ljb24nLFxuICAgICAgdHlwZTogJ2ltYWdlL3BuZycsXG4gICAgICBzaXplczogJzE2eDE2JyxcbiAgICAgIGhyZWY6IHNtYWxsTGlnaHRGYXZJY29uLFxuICAgICAgbWVkaWE6ICcocHJlZmVycy1jb2xvci1zY2hlbWU6IGxpZ2h0KScsXG4gICAgfSxcbiAgICB7XG4gICAgICByZWw6ICdtYW5pZmVzdCcsXG4gICAgICBocmVmOiAnL2Zhdmljb24vbGlnaHQvc2l0ZS53ZWJtYW5pZmVzdCcsXG4gICAgICBtZWRpYTogJyhwcmVmZXJzLWNvbG9yLXNjaGVtZTogbGlnaHQpJyxcbiAgICB9LFxuICBdXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFwcCgpIHtcbiAgY29uc3QgbG9jYXRpb24gPSB1c2VMb2NhdGlvbigpXG5cbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICBndGFnLnBhZ2V2aWV3KGxvY2F0aW9uLnBhdGhuYW1lKVxuICB9LCBbbG9jYXRpb25dKVxuXG4gIHJldHVybiAoXG4gICAgPERvY3VtZW50PlxuICAgICAgPExheW91dD5cbiAgICAgICAgPE91dGxldCAvPlxuICAgICAgPC9MYXlvdXQ+XG4gICAgPC9Eb2N1bWVudD5cbiAgKVxufVxuXG5mdW5jdGlvbiBEb2N1bWVudCh7IGNoaWxkcmVuIH06IHsgY2hpbGRyZW46IFJlYWN0LlJlYWN0Tm9kZSB9KSB7XG4gIHJldHVybiAoXG4gICAgPGh0bWwgbGFuZz1cImVuXCI+XG4gICAgICA8aGVhZD5cbiAgICAgICAgPG1ldGEgY2hhclNldD1cInV0Zi04XCIgLz5cbiAgICAgICAgPG1ldGEgbmFtZT1cImNvbG9yLXNjaGVtZVwiIGNvbnRlbnQ9XCJkYXJrIGxpZ2h0XCIgLz5cbiAgICAgICAgPG1ldGEgbmFtZT1cInRoZW1lLWNvbG9yXCIgbWVkaWE9XCIocHJlZmVycy1jb2xvci1zY2hlbWU6IGxpZ2h0KVwiIGNvbnRlbnQ9XCJ3aGl0ZVwiIC8+XG4gICAgICAgIDxtZXRhIG5hbWU9XCJ0aGVtZS1jb2xvclwiIG1lZGlhPVwiKHByZWZlcnMtY29sb3Itc2NoZW1lOiBkYXJrKVwiIGNvbnRlbnQ9XCJibGFja1wiIC8+XG4gICAgICAgIDxNZXRhIC8+XG4gICAgICAgIDxMaW5rcyAvPlxuICAgICAgPC9oZWFkPlxuICAgICAgPGJvZHkgY2xhc3NOYW1lPVwiYW50aWFsaWFzZWQgYmctY29sb3JcIj5cbiAgICAgICAgPHNjcmlwdCBhc3luYyBzcmM9e2BodHRwczovL3d3dy5nb29nbGV0YWdtYW5hZ2VyLmNvbS9ndGFnL2pzP2lkPSR7Z3RhZy5HQV9UUkFDS0lOR19JRH1gfSAvPlxuICAgICAgICA8c2NyaXB0XG4gICAgICAgICAgYXN5bmNcbiAgICAgICAgICBpZD1cImd0YWctaW5pdFwiXG4gICAgICAgICAgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3tcbiAgICAgICAgICAgIF9faHRtbDogYFxuICAgICAgICAgICAgd2luZG93LmRhdGFMYXllciA9IHdpbmRvdy5kYXRhTGF5ZXIgfHwgW107XG4gICAgICAgICAgICBmdW5jdGlvbiBndGFnKCl7ZGF0YUxheWVyLnB1c2goYXJndW1lbnRzKTt9XG4gICAgICAgICAgICBndGFnKCdqcycsIG5ldyBEYXRlKCkpO1xuXG4gICAgICAgICAgICBndGFnKCdjb25maWcnLCAnJHtndGFnLkdBX1RSQUNLSU5HX0lEfScsIHtcbiAgICAgICAgICAgICAgcGFnZV9wYXRoOiB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICBgLFxuICAgICAgICAgIH19XG4gICAgICAgIC8+XG4gICAgICAgIHtjaGlsZHJlbn1cbiAgICAgICAgPFNjcmlwdHMgLz5cbiAgICAgICAgPFNjcm9sbFJlc3RvcmF0aW9uIC8+XG4gICAgICAgIHtwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50JyAmJiA8TGl2ZVJlbG9hZCAvPn1cbiAgICAgIDwvYm9keT5cbiAgICA8L2h0bWw+XG4gIClcbn1cblxuZnVuY3Rpb24gTGF5b3V0KHsgY2hpbGRyZW4gfTogeyBjaGlsZHJlbjogUmVhY3QuUmVhY3ROb2RlIH0pIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggdy1mdWxsIGgtc2NyZWVuXCI+XG4gICAgICB7LyogPE5hdmJhciAvPiAqL31cbiAgICAgIDxTaWRlYmFyIC8+XG4gICAgICA8bWFpbiBjbGFzc05hbWU9XCJ3LWZ1bGwgbWF4LWgtZnVsbCBvdmVyZmxvdy15LWF1dG9cIj57Y2hpbGRyZW59PC9tYWluPlxuICAgICAgey8qIDxGb290ZXIgLz4gKi99XG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIENhdGNoQm91bmRhcnkoKSB7XG4gIGNvbnN0IGNhdWdodCA9IHVzZUNhdGNoKClcblxuICBjb25zdCBtZXNzYWdlID0gY2F1Z2h0LnN0YXR1cyA9PT0gNDA0ID8gY2F1Z2h0LmRhdGEubWVzc2FnZSA6ICdPb3BzaWVzLi4gU29tZXRoaW5nIHdlbnQgd3JvbmcuJ1xuXG4gIGlmIChjYXVnaHQuc3RhdHVzID09PSA0MDQpIHtcbiAgICByZXR1cm4gPEZvdXIwMCB0aXRsZT1cIjQwNFwiIG1lc3NhZ2U9e21lc3NhZ2V9IGxpbms9XCIvYmxvZ1wiIC8+XG4gIH1cblxuICByZXR1cm4gPEZvdXIwMCB0aXRsZT1cIjUwMFwiIG1lc3NhZ2U9e21lc3NhZ2V9IGxpbms9XCIvYmxvZ1wiIC8+XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBFcnJvckJvdW5kYXJ5KCkge1xuICByZXR1cm4gKFxuICAgIDxEb2N1bWVudD5cbiAgICAgIDxMYXlvdXQ+XG4gICAgICAgIDxGb3VyMDAgdGl0bGU9XCI1MDBcIiBtZXNzYWdlPVwiT29wc2llcy4uLiBTb21ldGhpbmcgd2VudCB3cm9uZy5cIiBsaW5rPVwiL1wiIC8+XG4gICAgICA8L0xheW91dD5cbiAgICA8L0RvY3VtZW50PlxuICApXG59XG4iLCAiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgY2xzeCBmcm9tICdjbHN4J1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDb250YWluZXIoe1xuICBjaGlsZHJlbixcbiAgY2xhc3NOYW1lID0gdW5kZWZpbmVkLFxufToge1xuICBjaGlsZHJlbjogUmVhY3QuUmVhY3ROb2RlXG4gIGNsYXNzTmFtZT86IHN0cmluZyB8IHVuZGVmaW5lZFxufSkge1xuICBjb25zdCBoYXNQeSA9IGNsYXNzTmFtZT8uaW5jbHVkZXMoJ3B5JylcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17Y2xzeCgncHgtOCBjb250YWluZXIgbWF4LXctNXhsIG14LWF1dG8nLCB7ICdweS0yJzogIWhhc1B5IH0sIGNsYXNzTmFtZSl9PlxuICAgICAge2NoaWxkcmVufVxuICAgIDwvZGl2PlxuICApXG59XG4iLCAiaW1wb3J0IHsgSGlPdXRsaW5lQXJyb3dMZWZ0IH0gZnJvbSAncmVhY3QtaWNvbnMvaGknXG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAncmVtaXgnXG5pbXBvcnQgY2xzeCBmcm9tICdjbHN4J1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBHb0JhY2soe1xuICBjbGFzc05hbWUsXG4gIGxpbmssXG59OiB7XG4gIGNsYXNzTmFtZT86IHN0cmluZyB8IHVuZGVmaW5lZFxuICBsaW5rOiBzdHJpbmdcbn0pIHtcbiAgcmV0dXJuIChcbiAgICA8TGlua1xuICAgICAgdG89e2xpbmt9XG4gICAgICBjbGFzc05hbWU9e2Nsc3goXG4gICAgICAgICdmbGV4IGl0ZW1zLWNlbnRlciBzZWxmLXN0YXJ0IGp1c3RpZnktc3RhcnQgbWItMiB0ZXh0LXNtIGxpZ2h0LWZvbnQtY29sb3InLFxuICAgICAgICBjbGFzc05hbWUsXG4gICAgICApfVxuICAgID5cbiAgICAgIDxIaU91dGxpbmVBcnJvd0xlZnQgLz5cbiAgICAgIDxwIGNsYXNzTmFtZT1cInNlbGYtc3RhcnQgbWwtMiB0ZXh0LXNtIG1kOnRleHQtYmFzZVwiPkdvIEJhY2s8L3A+XG4gICAgPC9MaW5rPlxuICApXG59XG4iLCAiaW1wb3J0IENvbnRhaW5lciBmcm9tICcuL2NvbnRhaW5lcidcbmltcG9ydCBHb0JhY2sgZnJvbSAnLi9nby1iYWNrJ1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBGb3VyMDAoe1xuICBtZXNzYWdlLFxuICB0aXRsZSxcbiAgbGluayxcbn06IHtcbiAgbGluazogc3RyaW5nXG4gIHRpdGxlOiBzdHJpbmdcbiAgbWVzc2FnZTogc3RyaW5nXG59KSB7XG4gIHJldHVybiAoXG4gICAgPENvbnRhaW5lciBjbGFzc05hbWU9XCJweS02MFwiPlxuICAgICAgPGgxIGNsYXNzTmFtZT1cImZvbnQtYm9sZCB0ZXh0LTd4bFwiPnt0aXRsZX08L2gxPlxuICAgICAgPHAgY2xhc3NOYW1lPVwibXQtMiB0ZXh0LXhsIGZvbnQtYm9sZCBsaWdodC1mb250LWNvbG9yXCI+e21lc3NhZ2V9PC9wPlxuICAgICAgPEdvQmFjayBjbGFzc05hbWU9XCJtdC04IGxpbmstZm9udC1jb2xvclwiIGxpbms9e2xpbmt9IC8+XG4gICAgPC9Db250YWluZXI+XG4gIClcbn1cbiIsICJpbXBvcnQgeyBMaW5rLCB1c2VMb2NhdGlvbiB9IGZyb20gJ3JlbWl4J1xuXG5pbXBvcnQgeyBEYXRlIH0gZnJvbSAnLidcbmltcG9ydCB7IFBvc3QgfSBmcm9tICd+L3V0aWxzL2Ntcy5zZXJ2ZXInXG5pbXBvcnQgY2xzeCBmcm9tICdjbHN4J1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBCbG9nUG9zdCh7XG4gIHRpdGxlLFxuICBwdWJsaXNoZWRBdCxcbiAgZXhjZXJwdCxcbiAgc2x1Zyxcbn06IFBpY2s8UG9zdCwgJ3RpdGxlJyB8ICdwdWJsaXNoZWRBdCcgfCAnZXhjZXJwdCcgfCAnc2x1Zyc+KSB7XG4gIGNvbnN0IGxvY2F0aW9uID0gdXNlTG9jYXRpb24oKVxuICByZXR1cm4gKFxuICAgIDxMaW5rXG4gICAgICB0bz17YC9ibG9nLyR7c2x1Z31gfVxuICAgICAgcHJlZmV0Y2g9XCJyZW5kZXJcIlxuICAgICAgY2xhc3NOYW1lPXtjbHN4KFxuICAgICAgICAnZmxleCBmbGV4LWNvbCBnYXAtMiB3LWZ1bGwgbWItMiBob3ZlcjpiZy1bY29sb3I6dmFyKC0tZ3JheSldIHJvdW5kZWQtbWQgcC0yIHB4LTQnLFxuICAgICAgICB7XG4gICAgICAgICAgJ2JnLVtjb2xvcjp2YXIoLS1ncmF5KV0nOiBsb2NhdGlvbi5wYXRobmFtZSA9PT0gYC9ibG9nLyR7c2x1Z31gLFxuICAgICAgICB9LFxuICAgICAgKX1cbiAgICA+XG4gICAgICA8aDIgY2xhc3NOYW1lPVwiZm9udC1zZW1pYm9sZFwiPnt0aXRsZX08L2gyPlxuICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC10cnVuY2F0ZSB0ZXh0LVtjb2xvcjp2YXIoLS1ncmF5KV0vWzAuM11cIj57ZXhjZXJwdH08L3A+XG4gICAgICA8RGF0ZSBjbGFzc05hbWU9XCJsaWdodC1mb250LWNvbG9yXCIgZGF0ZT17cHVibGlzaGVkQXR9IC8+XG4gICAgPC9MaW5rPlxuICApXG59XG4iLCAiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgbW9tZW50IGZyb20gJ21vbWVudCdcblxuY29uc3QgRGF0ZTogUmVhY3QuRkM8eyBkYXRlOiBzdHJpbmcgfCBudW1iZXIgfCBEYXRlOyBjbGFzc05hbWU/OiBzdHJpbmcgfCB1bmRlZmluZWQgfT4gPSAoXG4gIHByb3BzLFxuKSA9PiB7XG4gIGNvbnN0IGRhdGUgPSBwcm9wcy5kYXRlXG4gIHJldHVybiBkYXRlID8gKFxuICAgIDxwIHsuLi5wcm9wc30gY2xhc3NOYW1lPXtwcm9wcy5jbGFzc05hbWV9PlxuICAgICAge21vbWVudChkYXRlKS5mb3JtYXQoJ2RkZGQsIE1NTU0gRG8gWVlZWScpfVxuICAgIDwvcD5cbiAgKSA6IG51bGxcbn1cblxuZXhwb3J0IGRlZmF1bHQgRGF0ZVxuIiwgImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IGNsc3ggZnJvbSAnY2xzeCdcblxuaW1wb3J0IHsgQ29udGFpbmVyIH0gZnJvbSAnLidcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTWFya2Rvd24oe1xuICBjaGlsZHJlbixcbiAgY2xhc3NOYW1lLFxufToge1xuICBjaGlsZHJlbjogUmVhY3QuUmVhY3ROb2RlXG4gIGNsYXNzTmFtZT86IHN0cmluZyB8IHVuZGVmaW5lZFxufSkge1xuICByZXR1cm4gKFxuICAgIDxDb250YWluZXIgY2xhc3NOYW1lPXtjbHN4KCdtYXgtdy0zeGwnLCBjbGFzc05hbWUpfT5cbiAgICAgIDxhcnRpY2xlIGNsYXNzTmFtZT1cInB5LTIgcHJvc2UgbWQ6cHktNiBtYXgtdy1ub25lIHByb3NlLWJsdWUgZGFyazpwcm9zZS1pbnZlcnRcIj5cbiAgICAgICAge2NoaWxkcmVufVxuICAgICAgPC9hcnRpY2xlPlxuICAgIDwvQ29udGFpbmVyPlxuICApXG59XG4iLCAiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAncmVtaXgnXG5pbXBvcnQgY2xzeCBmcm9tICdjbHN4J1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBMaW5rQnV0dG9uKHtcbiAgY2hpbGRyZW4sXG4gIHRvLFxuICBjbGFzc05hbWUsXG59OiB7XG4gIGNoaWxkcmVuOiBSZWFjdC5SZWFjdE5vZGVcbiAgdG86IHN0cmluZ1xuICBjbGFzc05hbWU/OiBzdHJpbmcgfCB1bmRlZmluZWRcbn0pIHtcbiAgcmV0dXJuIChcbiAgICA8TGlua1xuICAgICAgdG89e3RvfVxuICAgICAgY2xhc3NOYW1lPXtjbHN4KFxuICAgICAgICAncC0zIG1kOnAtNCB0ZXh0LXNtIG1kOnRleHQtYmFzZSBmb250LWJvbGQgdGV4dC1jZW50ZXIgdGV4dC1ncmF5LTYwMCB0cmFuc2l0aW9uLWFsbCBib3JkZXIgcm91bmRlZC1tZCBtaW4tdy1bMTNyZW1dIGJnLWNvbG9yIGJvcmRlci1jb2xvciBob3Zlcjpib3JkZXItYmxhY2sgaG92ZXI6dGV4dC1ncmF5LTkwMCBkYXJrOmJvcmRlci13aGl0ZSBkYXJrOmxpZ2h0LWZvbnQtY29sb3IgZGFyazpib3JkZXItY29sb3IgZGFyazpob3Zlcjpib3JkZXItd2hpdGUgZGFyazpob3Zlcjp0ZXh0LXdoaXRlJyxcbiAgICAgICAgY2xhc3NOYW1lLFxuICAgICAgKX1cbiAgICA+XG4gICAgICB7Y2hpbGRyZW59XG4gICAgPC9MaW5rPlxuICApXG59XG4iLCAiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgY2xzeCBmcm9tICdjbHN4J1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBRdW90ZSh7XG4gIGNoaWxkcmVuLFxuICBhdXRob3IsXG4gIGNsYXNzTmFtZSxcbn06IHtcbiAgY2hpbGRyZW46IFJlYWN0LlJlYWN0Tm9kZVxuICBhdXRob3I6IHN0cmluZ1xuICBjbGFzc05hbWU/OiBzdHJpbmcgfCB1bmRlZmluZWRcbn0pIHtcbiAgcmV0dXJuIChcbiAgICA8ZmlndXJlIGNsYXNzTmFtZT17Y2xzeCgndy1mdWxsIG14LWF1dG8gb3ZlcmZsb3ctaGlkZGVuIGxnOnctZml0JywgY2xhc3NOYW1lKX0+XG4gICAgICA8YmxvY2txdW90ZSBjbGFzc05hbWU9XCJtdC00IHAtNCBsZzpwLTYgYmctZ3JheS0yMDAgZGFyazpiZy1bY29sb3I6dmFyKC0tcHJlLWNvbG9yKV0gcm91bmRlZC1tZCBiZWZvcmU6Y29udGVudC1bJ1x1MjAxQyddIGFmdGVyOmNvbnRlbnQtWydcdTIwMUQnXVwiPlxuICAgICAgICB7Y2hpbGRyZW59XG4gICAgICA8L2Jsb2NrcXVvdGU+XG4gICAgICA8ZmlnY2FwdGlvbiBjbGFzc05hbWU9XCJtdC0yIHRleHQtcmlnaHQgYmVmb3JlOmNvbnRlbnQtWyctJ10gYmVmb3JlOm1yLTEgbGlnaHQtZm9udC1jb2xvclwiPlxuICAgICAgICB7YXV0aG9yfVxuICAgICAgPC9maWdjYXB0aW9uPlxuICAgIDwvZmlndXJlPlxuICApXG59XG4iLCAiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgY2xzeCBmcm9tICdjbHN4J1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lU2VjdGlvbih7XG4gIGNoaWxkcmVuLFxuICBzaG93Qm9yZGVyID0gdHJ1ZSxcbiAgdGl0bGUsXG59OiB7XG4gIGNoaWxkcmVuOiBSZWFjdC5SZWFjdE5vZGVcbiAgc2hvd0JvcmRlcj86IGJvb2xlYW5cbiAgdGl0bGU6IHN0cmluZ1xufSkge1xuICByZXR1cm4gKFxuICAgIDxkaXZcbiAgICAgIGNsYXNzTmFtZT17Y2xzeCgncHktMTAgbGc6cHktMTYnLCB7XG4gICAgICAgICdib3JkZXItYiBib3JkZXItY29sb3InOiBzaG93Qm9yZGVyLFxuICAgICAgfSl9XG4gICAgPlxuICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQteGwgZm9udC1ib2xkIG1kOnRleHQtMnhsXCI+e3RpdGxlfTwvaDI+XG4gICAgICB7Y2hpbGRyZW59XG4gICAgPC9kaXY+XG4gIClcbn1cbiIsICJpbXBvcnQgdHlwZSB7IEljb25UeXBlIH0gZnJvbSAncmVhY3QtaWNvbnMnXG5cbmltcG9ydCBjbHN4IGZyb20gJ2Nsc3gnXG5cbmltcG9ydCB7IEhpSG9tZSB9IGZyb20gJ3JlYWN0LWljb25zL2hpJ1xuaW1wb3J0IHsgUmlRdWlsbFBlbkZpbGwgfSBmcm9tICdyZWFjdC1pY29ucy9yaSdcbmltcG9ydCB7IEJzRmlsbEJvb2ttYXJrc0ZpbGwgfSBmcm9tICdyZWFjdC1pY29ucy9icydcbmltcG9ydCB7IEdyU3RhY2tPdmVyZmxvdyB9IGZyb20gJ3JlYWN0LWljb25zL2dyJ1xuaW1wb3J0IHsgQnNHaXRodWIgfSBmcm9tICdyZWFjdC1pY29ucy9icydcbmltcG9ydCB7IFNpVHdpdHRlciB9IGZyb20gJ3JlYWN0LWljb25zL3NpJ1xuaW1wb3J0IHsgSW9Mb2dvUnNzIH0gZnJvbSAncmVhY3QtaWNvbnMvaW8nXG5pbXBvcnQgeyBIaUV4dGVybmFsTGluayB9IGZyb20gJ3JlYWN0LWljb25zL2hpJ1xuaW1wb3J0IHsgTGluaywgdXNlTG9jYXRpb24gfSBmcm9tICdyZW1peCdcblxuY29uc3Qgc29jaWFscyA9IFtcbiAge1xuICAgIEljb246IEJzR2l0aHViLFxuICAgIGhyZWY6ICdodHRwczovL3JkLm51bGxpc2guaW4vZ2l0aHViJyxcbiAgICBpc0xhc3Q6IGZhbHNlLFxuICAgIGFsdDogYE11dGh1a3VtYXIncyBnaXRodWIgcHJvZmlsZSBsaW5rYCxcbiAgICAnYXJpYS1sYWJlbCc6ICdHaXRodWInLFxuICB9LFxuICB7XG4gICAgSWNvbjogU2lUd2l0dGVyLFxuICAgIGhyZWY6ICdodHRwczovL3JkLm51bGxpc2guaW4vdHdpdHRlcicsXG4gICAgaXNMYXN0OiBmYWxzZSxcbiAgICBhbHQ6IGBNdXRodWt1bWFyJ3MgdHdpdHRlciBwcm9maWxlIGxpbmtgLFxuICAgICdhcmlhLWxhYmVsJzogJ1R3aXR0ZXInLFxuICB9LFxuICB7XG4gICAgSWNvbjogSW9Mb2dvUnNzLFxuICAgIGhyZWY6ICcvcnNzLnhtbCcsXG4gICAgaXNMYXN0OiB0cnVlLFxuICAgIGFsdDogYE51bGxpc2guaW4gcnNzIGZlZWQgbGlua2AsXG4gICAgJ2FyaWEtbGFiZWwnOiAnUnNzIGZlZWQnLFxuICB9LFxuXVxuXG5mdW5jdGlvbiBOYXZMaW5rKHtcbiAgSWNvbixcbiAgaHJlZixcbiAgcGF0aG5hbWUsXG4gIGV4dGVybmFsLFxuICAuLi5kZWxlZ2F0ZWRcbn06IHtcbiAgZXh0ZXJuYWw/OiBib29sZWFuXG4gIEljb246IEljb25UeXBlXG4gIGhyZWY6IHN0cmluZ1xuICBwYXRobmFtZTogc3RyaW5nXG59KSB7XG4gIGNvbnN0IGxvY2F0aW9uID0gdXNlTG9jYXRpb24oKVxuXG4gIGNvbnN0IGN1cnJlbnRQYXRobmFtZSA9IGxvY2F0aW9uLnBhdGhuYW1lXG5cbiAgY29uc3QgaGlnaGxpZ2h0ID0gaHJlZiA9PT0gY3VycmVudFBhdGhuYW1lXG5cbiAgY29uc3QgQ29tcG9uZW50ID0gZXh0ZXJuYWxcbiAgICA/IChwcm9wczogeyBocmVmOiBzdHJpbmc7IGNsYXNzTmFtZTogc3RyaW5nIH0pID0+IChcbiAgICAgICAgPGEgey4uLnByb3BzfSB0YXJnZXQ9XCJfYmxhbmtcIiByZWw9XCJub3JlZmVycmVyXCIgLz5cbiAgICAgIClcbiAgICA6IExpbmtcblxuICByZXR1cm4gKFxuICAgIDxDb21wb25lbnRcbiAgICAgIHRvPXtocmVmfVxuICAgICAgaHJlZj17aHJlZn1cbiAgICAgIGNsYXNzTmFtZT17Y2xzeCgnZm9udC1zZW1pYm9sZCBmbGV4IGl0ZW1zLWNlbnRlciBwLTIgcm91bmRlZC1tZCcsIHtcbiAgICAgICAgJ2JnLVtjb2xvcjp2YXIoLS1ncmF5KV0nOiBoaWdobGlnaHQsXG4gICAgICAgICdob3ZlcjpiZy1bY29sb3I6dmFyKC0tZ3JheSldJzogIWhpZ2hsaWdodCxcbiAgICAgIH0pfVxuICAgICAgey4uLmRlbGVnYXRlZH1cbiAgICA+XG4gICAgICA8SWNvbiBzaXplPXsxNX0gLz5cbiAgICAgIDxwIGNsYXNzTmFtZT1cIm1sLTNcIj57cGF0aG5hbWV9PC9wPlxuICAgICAge2V4dGVybmFsID8gPEhpRXh0ZXJuYWxMaW5rIGNsYXNzTmFtZT1cIm1sLWF1dG9cIiBzaXplPXsxNX0gLz4gOiBudWxsfVxuICAgIDwvQ29tcG9uZW50PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNpZGViYXIoKSB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGdhcC02IHAtNCB0ZXh0LXNtIGJvcmRlci1yIGJvcmRlci1jb2xvciBoLXNjcmVlbiBtaW4tdy1bMThyZW1dIFwiPlxuICAgICAgPGgyIGNsYXNzTmFtZT1cImZvbnQtYm9sZFwiPk11dGh1a3VtYXI8L2gyPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGdhcC0xXCI+XG4gICAgICAgIDxOYXZMaW5rIEljb249e0hpSG9tZX0gaHJlZj1cIi9cIiBwYXRobmFtZT1cIkhvbWVcIiAvPlxuICAgICAgICA8TmF2TGluayBJY29uPXtSaVF1aWxsUGVuRmlsbH0gaHJlZj1cIi9ibG9nXCIgcGF0aG5hbWU9XCJXcml0aW5nc1wiIC8+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBnYXAtMVwiPlxuICAgICAgICA8aDIgY2xhc3NOYW1lPVwicHgtMiBtYi00IHRleHQtZ3JheS00MDBcIj5NZTwvaDI+XG4gICAgICAgIDxOYXZMaW5rIEljb249e0JzRmlsbEJvb2ttYXJrc0ZpbGx9IGhyZWY9XCIvYm9va21hcmtzXCIgcGF0aG5hbWU9XCJCb29rbWFya3NcIiAvPlxuICAgICAgICA8TmF2TGluayBJY29uPXtHclN0YWNrT3ZlcmZsb3d9IGhyZWY9XCIvc3RhY2tzXCIgcGF0aG5hbWU9XCJTdGFja1wiIC8+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBnYXAtMVwiPlxuICAgICAgICA8aDIgY2xhc3NOYW1lPVwicHgtMiBtYi00IHRleHQtZ3JheS00MDBcIj5PbmxpbmU8L2gyPlxuICAgICAgICB7c29jaWFscy5tYXAoKHByb3BzKSA9PiAoXG4gICAgICAgICAgPE5hdkxpbmsgcGF0aG5hbWU9e3Byb3BzWydhcmlhLWxhYmVsJ119IHsuLi5wcm9wc30ga2V5PXtwcm9wcy5ocmVmfSBleHRlcm5hbCAvPlxuICAgICAgICApKX1cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApXG59XG4iLCAiZXhwb3J0IGNvbnN0IEdBX1RSQUNLSU5HX0lEID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJyA/ICdHLVFOTU0yR1NEWUonIDogJydcblxuZGVjbGFyZSBnbG9iYWwge1xuICBpbnRlcmZhY2UgV2luZG93IHtcbiAgICBndGFnOiAob3B0aW9uOiBzdHJpbmcsIGdhVHJhY2tpbmdJZDogc3RyaW5nLCBvcHRpb25zOiBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPikgPT4gdm9pZFxuICB9XG59XG5cbmV4cG9ydCBjb25zdCBwYWdldmlldyA9ICh1cmw6IHN0cmluZykgPT4ge1xuICB3aW5kb3cuZ3RhZygnY29uZmlnJywgR0FfVFJBQ0tJTkdfSUQsIHtcbiAgICBwYWdlX3BhdGg6IHVybCxcbiAgfSlcbn1cblxuZXhwb3J0IGNvbnN0IGV2ZW50ID0gKHsgYWN0aW9uLCBjYXRlZ29yeSwgbGFiZWwsIHZhbHVlIH06IFJlY29yZDxzdHJpbmcsIHN0cmluZz4pID0+IHtcbiAgd2luZG93Lmd0YWcoJ2V2ZW50JywgYWN0aW9uLCB7XG4gICAgZXZlbnRfY2F0ZWdvcnk6IGNhdGVnb3J5LFxuICAgIGV2ZW50X2xhYmVsOiBsYWJlbCxcbiAgICB2YWx1ZTogdmFsdWUsXG4gIH0pXG59XG4iLCAiaW1wb3J0IHsgTG9hZGVyRnVuY3Rpb24gfSBmcm9tICdyZW1peCdcbmltcG9ydCB7IGdldFBvc3RzIH0gZnJvbSAnfi91dGlscy9jbXMuc2VydmVyJ1xuXG5jb25zdCBnZXRTaXRlTWFwVGV4dCA9IGFzeW5jICgpID0+IHtcbiAgY29uc3QgYmxvZ3MgPSAoYXdhaXQgZ2V0UG9zdHMoKSkgPz8gW11cbiAgcmV0dXJuIGBcbjw/eG1sIHZlcnNpb249XCIxLjBcIiBlbmNvZGluZz1cIlVURi04XCI/PlxuPHVybHNldCB4bWxucz1cImh0dHA6Ly93d3cuc2l0ZW1hcHMub3JnL3NjaGVtYXMvc2l0ZW1hcC8wLjlcIj5cbiAgPHVybD5cbiAgICA8bG9jPmh0dHBzOi8vd3d3Lm51bGxpc2guaW4vPC9sb2M+XG4gICAgPGxhc3Rtb2Q+MjAyMS0xMi0yODwvbGFzdG1vZD5cbiAgPC91cmw+XG4gIDx1cmw+XG4gICAgPGxvYz5odHRwczovL3d3dy5udWxsaXNoLmluL2NoYW5nZWxvZzwvbG9jPlxuICAgIDxsYXN0bW9kPjIwMjEtMTItMjk8L2xhc3Rtb2Q+XG4gIDwvdXJsPlxuICA8dXJsPlxuICAgIDxsb2M+aHR0cHM6Ly93d3cubnVsbGlzaC5pbi9xdW90ZXM8L2xvYz5cbiAgICA8bGFzdG1vZD4yMDIxLTEyLTI4PC9sYXN0bW9kPlxuICA8L3VybD5cbiAgPHVybD5cbiAgICA8bG9jPmh0dHBzOi8vd3d3Lm51bGxpc2guaW4vYmxvZzwvbG9jPlxuICAgIDxsYXN0bW9kPjIwMjEtMTItMjg8L2xhc3Rtb2Q+XG4gIDwvdXJsPlxuICA8dXJsPlxuICAgIDxsb2M+aHR0cHM6Ly93d3cubnVsbGlzaC5pbi9hYm91dDwvbG9jPlxuICAgIDxsYXN0bW9kPjIwMjEtMTItMjg8L2xhc3Rtb2Q+XG4gIDwvdXJsPlxuICAke2Jsb2dzLm1hcChcbiAgICAoYmxvZykgPT4gYFxuICA8dXJsPlxuICAgIDxsb2M+aHR0cHM6Ly93d3cubnVsbGlzaC5pbi9ibG9nLyR7YmxvZy5zbHVnfTwvbG9jPlxuICAgIDxsYXN0bW9kPiR7YmxvZy5sYXN0VXBkYXRlZEF0fTwvbGFzdG1vZD5cbiAgPC91cmw+XG4gIGAsXG4gICl9XG48L3VybHNldD5cbmAudHJpbSgpXG59XG5cbmV4cG9ydCBjb25zdCBsb2FkZXI6IExvYWRlckZ1bmN0aW9uID0gYXN5bmMgKCkgPT4ge1xuICBjb25zdCBzaXRlTWFwID0gYXdhaXQgZ2V0U2l0ZU1hcFRleHQoKVxuICByZXR1cm4gbmV3IFJlc3BvbnNlKHNpdGVNYXAsIHtcbiAgICBoZWFkZXJzOiB7XG4gICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL3htbCcsXG4gICAgICAnWC1Sb2JvdHMtVGFnJzogJ25vLWluZGV4JyxcbiAgICAgICdDb250ZW50LUxlbmd0aCc6IFN0cmluZyhCdWZmZXIuYnl0ZUxlbmd0aChzaXRlTWFwKSksXG4gICAgICAvLyAnQ3Jvc3MtT3JpZ2luLVJlc291cmNlLVBvbGljeSc6ICdzYW1lLW9yaWdpbidcbiAgICB9LFxuICB9KVxufVxuIiwgImNvbnN0IGdldFJlcXVpcmVkU2VydmVyRW52VmFyID0gKGtleTogc3RyaW5nLCBjb250ZXh0PzogUmVjb3JkPHN0cmluZywgc3RyaW5nPikgPT4ge1xuICBjb25zdCB2YWx1ZSA9IGNvbnRleHQgPyBjb250ZXh0W2tleV0gOiBwcm9jZXNzLmVudltrZXldXG5cbiAgaWYgKCF2YWx1ZSkge1xuICAgIHRocm93IG5ldyBFcnJvcihgJHtrZXl9IGlzIHJlcXVpcmVkIEVOViB2YXJpYWJsZWApXG4gIH1cblxuICByZXR1cm4gdmFsdWVcbn1cblxuZXhwb3J0IHsgZ2V0UmVxdWlyZWRTZXJ2ZXJFbnZWYXIgfVxuIiwgImltcG9ydCB7IGdldFJlcXVpcmVkU2VydmVyRW52VmFyIH0gZnJvbSAnLi9lbnYuc2VydmVyJ1xuXG5jb25zdCBncVJlcXVlc3QgPSBhc3luYyAoXG4gIHF1ZXJ5OiBzdHJpbmcsXG4gIHZhcmlhYmxlczogUmVjb3JkPHN0cmluZywgdW5rbm93bj4sXG4gIGNvbnRleHQ/OiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+LFxuKSA9PiB7XG4gIGNvbnN0IGdyYXBocWxFbmRwb2ludCA9IGdldFJlcXVpcmVkU2VydmVyRW52VmFyKCdHUkFQSFFMX0VORFBPSU5UJywgY29udGV4dClcblxuICBjb25zdCBhdXRob3JpemF0aW9uVG9rZW4gPSBnZXRSZXF1aXJlZFNlcnZlckVudlZhcignR1JBUEhRTF9BQ0NFU1NfVE9LRU4nLCBjb250ZXh0KVxuXG4gIGNvbnN0IHVzZUdyYXBoQ2RuID0gZ2V0UmVxdWlyZWRTZXJ2ZXJFbnZWYXIoJ1VTRV9HUkFQSF9DRE4nLCBjb250ZXh0KSA9PT0gJ3RydWUnID8gdHJ1ZSA6IGZhbHNlXG5cbiAgY29uc3QgY29uZmlnID0ge1xuICAgIGVuZHBvaW50OiBncmFwaHFsRW5kcG9pbnQsXG4gICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgaGVhZGVyczoge30sXG4gIH1cblxuICBpZiAodXNlR3JhcGhDZG4pIHtcbiAgICBjb25maWcuZW5kcG9pbnQgPSBnZXRSZXF1aXJlZFNlcnZlckVudlZhcignR1JBUEhDRE5fRU5EUE9JTlQnLCBjb250ZXh0KVxuICAgIGNvbmZpZy5oZWFkZXJzID0ge1xuICAgICAgJ2dyYXBoY2RuLXRva2VuJzogZ2V0UmVxdWlyZWRTZXJ2ZXJFbnZWYXIoJ0dSQVBIQ0ROX0FQSV9UT0tFTicsIGNvbnRleHQpLFxuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBjb25maWcuaGVhZGVycyA9IHtcbiAgICAgICdBdXRob3JpemF0aW9uJzogYEJlYXJlciAke2F1dGhvcml6YXRpb25Ub2tlbn1gLFxuICAgIH1cbiAgfVxuXG4gIGNvbnN0IHsgZW5kcG9pbnQsIC4uLnJlc3QgfSA9IGNvbmZpZ1xuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGVuZHBvaW50LCB7XG4gICAgLi4ucmVzdCxcbiAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7IHF1ZXJ5LCB2YXJpYWJsZXMgfSksXG4gIH0pXG4gIGNvbnN0IGpzb24gPSAoYXdhaXQgcmVzcG9uc2UuanNvbigpKSBhcyB7IGRhdGE6IHVua25vd24gfVxuXG4gIHJldHVybiBqc29uLmRhdGFcbn1cblxuZXhwb3J0IHsgZ3FSZXF1ZXN0IH1cbiIsICJpbXBvcnQgeyBncVJlcXVlc3QgfSBmcm9tICcuL2dyYXBocWwuc2VydmVyJ1xuXG5leHBvcnQgdHlwZSBQb3N0ID0ge1xuICBpZDogc3RyaW5nXG4gIHRpdGxlOiBzdHJpbmdcbiAgY29udGVudDoge1xuICAgIGh0bWw6IHN0cmluZ1xuICB9XG4gIGNvdmVySW1hZ2U6IHtcbiAgICB1cmw6IHN0cmluZ1xuICB9XG4gIGV4Y2VycHQ6IHN0cmluZ1xuICBwdWJsaXNoZWRBdDogc3RyaW5nXG4gIGxhc3RVcGRhdGVkQXQ6IHN0cmluZ1xuICBzZW86IHtcbiAgICB0aXRsZTogc3RyaW5nXG4gICAga2V5d29yZHM6IHN0cmluZ1xuICAgIGltYWdlOiB7XG4gICAgICB1cmw6IHN0cmluZ1xuICAgIH1cbiAgICBkZXNjcmlwdGlvbjogc3RyaW5nXG4gIH1cbiAgc2x1Zzogc3RyaW5nXG59XG5cbmNvbnN0IFBvc3RzUXVlcnkgPSBgXG4gIHF1ZXJ5IE15UXVlcnkoJHNlYXJjaDogU3RyaW5nISA9IFwiXCIpIHtcbiAgICBwb3N0cyh3aGVyZTogeyBfc2VhcmNoOiAkc2VhcmNoIH0pIHtcbiAgICAgIGlkXG4gICAgICBzbHVnXG4gICAgICB0aXRsZVxuICAgICAgcHVibGlzaGVkQXRcbiAgICAgIGxhc3RVcGRhdGVkQXRcbiAgICAgIGV4Y2VycHRcbiAgICB9XG4gIH1cbmBcblxuY29uc3QgUG9zdFF1ZXJ5ID0gYFxucXVlcnkgR2V0UG9zdEJ5U2x1Zygkc2x1ZzogU3RyaW5nISA9IFwiXCIpIHtcbiAgcG9zdCh3aGVyZToge3NsdWc6ICRzbHVnfSkge1xuICAgIHRpdGxlXG4gICAgY29udGVudCB7XG4gICAgICBodG1sXG4gICAgfVxuICAgIGNvdmVySW1hZ2Uge1xuICAgICAgdXJsXG4gICAgfVxuICAgIGV4Y2VycHRcbiAgICBwdWJsaXNoZWRBdFxuICAgIHNlbyB7XG4gICAgICB0aXRsZVxuICAgICAga2V5d29yZHNcbiAgICAgIGltYWdlIHtcbiAgICAgICAgdXJsXG4gICAgICB9XG4gICAgICBkZXNjcmlwdGlvblxuICAgIH1cbiAgfVxufVxuYFxuXG5leHBvcnQgY29uc3QgZ2V0UG9zdHMgPSBhc3luYyAocXVlcnk/OiBzdHJpbmcsIGNvbnRleHQ/OiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+KSA9PiB7XG4gIHRyeSB7XG4gICAgY29uc3QgcG9zdHMgPSBhd2FpdCBncVJlcXVlc3QoUG9zdHNRdWVyeSwgeyBzZWFyY2g6IHF1ZXJ5ID8/ICcnIH0sIGNvbnRleHQpXG5cbiAgICBpZiAoIXBvc3RzKSB7XG4gICAgICByZXR1cm4gW11cbiAgICB9XG4gICAgcmV0dXJuIHBvc3RzLnBvc3RzIGFzIEFycmF5PFBvc3Q+XG4gIH0gY2F0Y2gge1xuICAgIHJldHVybiBbXVxuICB9XG59XG5cbmV4cG9ydCBjb25zdCBnZXRQb3N0ID0gYXN5bmMgKHNsdWc6IFBvc3RbJ3NsdWcnXSwgY29udGV4dD86IFJlY29yZDxzdHJpbmcsIHN0cmluZz4pID0+IHtcbiAgdHJ5IHtcbiAgICBjb25zdCBwb3N0ID0gYXdhaXQgZ3FSZXF1ZXN0KFBvc3RRdWVyeSwgeyBzbHVnIH0sIGNvbnRleHQpXG5cbiAgICBpZiAoIXBvc3QpIHtcbiAgICAgIHJldHVybiBudWxsXG4gICAgfVxuICAgIHJldHVybiBwb3N0LnBvc3QgYXMgUG9zdFxuICB9IGNhdGNoIHtcbiAgICByZXR1cm4gbnVsbFxuICB9XG59XG4iLCAiaW1wb3J0IHsgQWN0aW9uRnVuY3Rpb24gfSBmcm9tICdyZW1peCdcbmltcG9ydCB7IGRlc3Ryb3lTZXNzaW9uLCBnZXRTZXNzaW9uIH0gZnJvbSAnfi91dGlscy9zZXNzaW9uLnNlcnZlcidcblxuZXhwb3J0IGNvbnN0IGFjdGlvbjogQWN0aW9uRnVuY3Rpb24gPSBhc3luYyAoeyByZXF1ZXN0IH0pID0+IHtcbiAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGdldFNlc3Npb24ocmVxdWVzdC5oZWFkZXJzLmdldCgnQ29va2llJykpXG5cbiAgcmV0dXJuIG5ldyBSZXNwb25zZSgnJywge1xuICAgIGhlYWRlcnM6IHtcbiAgICAgICdTZXQtQ29va2llJzogYXdhaXQgZGVzdHJveVNlc3Npb24oc2Vzc2lvbiksXG4gICAgfSxcbiAgfSlcbn1cbiIsICJpbXBvcnQgeyBjcmVhdGVDb29raWVTZXNzaW9uU3RvcmFnZSB9IGZyb20gJ3JlbWl4J1xuXG5leHBvcnQgY29uc3QgeyBjb21taXRTZXNzaW9uLCBnZXRTZXNzaW9uLCBkZXN0cm95U2Vzc2lvbiB9ID0gY3JlYXRlQ29va2llU2Vzc2lvblN0b3JhZ2Uoe1xuICBjb29raWU6IHtcbiAgICBuYW1lOiAnX3Nlc3Npb24nLFxuICAgIHNhbWVTaXRlOiAnbGF4JyxcbiAgICBwYXRoOiAnLycsXG4gICAgaHR0cE9ubHk6IHRydWUsXG4gICAgc2VjcmV0czogWydzb21ldGhpbmcgc3RyaW5nJ10sXG4gICAgc2VjdXJlOiBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nLFxuICB9LFxufSlcbiIsICJpbXBvcnQgeyBPdXRsZXQgfSBmcm9tICdyZW1peCdcblxuaW1wb3J0IHsgQ29udGFpbmVyLCBNYXJrZG93biB9IGZyb20gJ34vY29tcG9uZW50cydcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ2hhbmdlbG9nKCkge1xuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInBiLTYgYm9yZGVyLWIgYm9yZGVyLWNvbG9yXCI+XG4gICAgICAgIDxDb250YWluZXI+XG4gICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInB5LTQgdGV4dC14bCBmb250LWJvbGQgbWQ6cHktMTAgbWQ6dGV4dC0yeGxcIj5DaGFuZ2Vsb2c8L2gyPlxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtYmFzZSBmb250LWJvbGQgbWQ6dGV4dC1sZ1wiPlxuICAgICAgICAgICAgQWxsIG5vdGFibGUgY2hhbmdlcyB0byB0aGlzIHByb2plY3Qgd2lsbCBiZSBkb2N1bWVudGVkIGluIHRoaXMgZmlsZS5cbiAgICAgICAgICA8L3A+XG5cbiAgICAgICAgPC9Db250YWluZXI+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxNYXJrZG93biBjbGFzc05hbWU9XCJzbTptYXgtdy01eGxcIj5cbiAgICAgICAgPE91dGxldCAvPlxuICAgICAgPC9NYXJrZG93bj5cbiAgICA8L2Rpdj5cbiAgKVxufVxuIiwgIlxuLypAanN4UnVudGltZSBjbGFzc2ljIEBqc3ggUmVhY3QuY3JlYXRlRWxlbWVudCBAanN4RnJhZyBSZWFjdC5GcmFnbWVudCovXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5leHBvcnQgY29uc3QgYXR0cmlidXRlcyA9IHtcbiAgXCJtZXRhXCI6IHtcbiAgICBcInRpdGxlXCI6IFwiQ2hhbmdlbG9nXCIsXG4gICAgXCJkZXNjcmlwdGlvblwiOiBcIlRoZSBoaXN0b3J5IG9mIGNvbnRpbnVvdXMgc3RyZWFtIG9mIGNoYW5nZXMgbWFkZSBlYWNoIGRheSB0byBteSBwZXJzb25hbCB3ZWJzaXRlIGFyZSByZWNvcmRlZCBpbiB0aGlzIHBhZ2UuIFRoZSBjaGFuZ2VzIGFyZSBwdXQgaW50byBvbmUgb2YgdGhyZWUgY2F0ZWdvcmllcyBhZGRlZCwgY2hhbmdlZCwgcmVtb3ZlZCB1bmRlciBlYWNoIGRheSdzIGRhdGUuXCIsXG4gICAgXCJyb2JvdHNcIjogXCJpbmRleCwgZm9sbG93XCIsXG4gICAgXCJwYWdlbmFtZVwiOiBcIkNoYW5nZWxvZ1wiLFxuICAgIFwiaW1hZ2VcIjogXCIvaW1hZ2VzL29nLmpwZ1wiLFxuICAgIFwiYXBwbGUtbW9iaWxlLXdlYi1hcHAtdGl0bGVcIjogXCJDaGFuZ2Vsb2csXCJcbiAgfSxcbiAgXCJoZWFkZXJzXCI6IHtcbiAgICBcIkNhY2hlLUNvbnRyb2xcIjogXCJtYXgtYWdlPTg2NDAwMDAwLCBtdXN0LXJldmFsaWRhdGVcIlxuICB9XG59O1xuaW1wb3J0IHtEYXRlfSBmcm9tICd+L2NvbXBvbmVudHMnO1xuZnVuY3Rpb24gTURYQ29udGVudChwcm9wcyA9IHt9KSB7XG4gIGNvbnN0IF9jb21wb25lbnRzID0gT2JqZWN0LmFzc2lnbih7XG4gICAgaDM6IFwiaDNcIixcbiAgICBoNDogXCJoNFwiLFxuICAgIHVsOiBcInVsXCIsXG4gICAgbGk6IFwibGlcIixcbiAgICBocjogXCJoclwiLFxuICAgIGNvZGU6IFwiY29kZVwiLFxuICAgIHA6IFwicFwiLFxuICAgIHByZTogXCJwcmVcIlxuICB9LCBwcm9wcy5jb21wb25lbnRzKSwge3dyYXBwZXI6IE1EWExheW91dH0gPSBfY29tcG9uZW50cztcbiAgY29uc3QgX2NvbnRlbnQgPSA8PjxfY29tcG9uZW50cy5oMz57XCIyMDIxLTEyLTI5XCJ9PC9fY29tcG9uZW50cy5oMz57XCJcXG5cIn08X2NvbXBvbmVudHMuaDQ+e1wiQWRkZGVkXCJ9PC9fY29tcG9uZW50cy5oND57XCJcXG5cIn08X2NvbXBvbmVudHMudWw+e1wiXFxuXCJ9PF9jb21wb25lbnRzLmxpPntcIkFkZGVkIHNlY3VyaXR5IGhlYWRlciB0byB0aGUgaHRtbCByZXF1ZXN0XCJ9PC9fY29tcG9uZW50cy5saT57XCJcXG5cIn08L19jb21wb25lbnRzLnVsPntcIlxcblwifTxfY29tcG9uZW50cy5ociAvPntcIlxcblwifTxfY29tcG9uZW50cy5oMz57XCIyMDIxLTEyLTI4XCJ9PC9fY29tcG9uZW50cy5oMz57XCJcXG5cIn08X2NvbXBvbmVudHMuaDQ+e1wiQWRkZWRcIn08L19jb21wb25lbnRzLmg0PntcIlxcblwifTxfY29tcG9uZW50cy51bD57XCJcXG5cIn08X2NvbXBvbmVudHMubGk+e1wiQWRkZWQgc2VvIHN0dWZmKGRlc2NyaXB0aW9uLCByb2JvdHMsIHBhZ2VhbWUsIGltYWdlLCBhcHBsZS1tb2JpbGUtd2ViLWFwcC10aXRsZSkgdG8gdGhlIGNoYW5nZWxvZyBwYWdlXCJ9PC9fY29tcG9uZW50cy5saT57XCJcXG5cIn08X2NvbXBvbmVudHMubGk+e1wiQWRkZWQgc2VvIHN0dWZmKGRlc2NyaXB0aW9uLCByb2JvdHMsIHBhZ2VhbWUsIGltYWdlLCBhcHBsZS1tb2JpbGUtd2ViLWFwcC10aXRsZSBhbmQgY2Fub25pY2FsIGxpbmspIHRvIHRoZSBhYm91dCBwYWdlXCJ9PC9fY29tcG9uZW50cy5saT57XCJcXG5cIn08X2NvbXBvbmVudHMubGk+e1wiQWRkZWQgc2VvIHN0dWZmKGRlc2NyaXB0aW9uLCByb2JvdHMsIHBhZ2VhbWUsIGltYWdlLCBhcHBsZS1tb2JpbGUtd2ViLWFwcC10aXRsZSkgdG8gdGhlIGJsb2cgcGFnZVwifTwvX2NvbXBvbmVudHMubGk+e1wiXFxuXCJ9PF9jb21wb25lbnRzLmxpPntcIkFkZGVkIHNlbyBzdHVmZihjYW5vbmljYWwgbGluaykgdG8gdGhlIGJsb2cgcG9zdCBwYWdlXCJ9PC9fY29tcG9uZW50cy5saT57XCJcXG5cIn08X2NvbXBvbmVudHMubGk+e1wiQWRkZWQgc2VvIHN0dWZmKGRlc2NyaXB0aW9uLCByb2JvdHMsIHBhZ2VhbWUsIGltYWdlLCBhcHBsZS1tb2JpbGUtd2ViLWFwcC10aXRsZSkgdG8gdGhlIHF1b3RlcyBwYWdlXCJ9PC9fY29tcG9uZW50cy5saT57XCJcXG5cIn08X2NvbXBvbmVudHMubGk+e1wiQWRkZWQgXCJ9PF9jb21wb25lbnRzLmNvZGU+e1wiWC1Sb2JvdHMtVGFnOiBuby1pbmRleFwifTwvX2NvbXBvbmVudHMuY29kZT57XCIgaGVhZGVyIHRvIHRoZSAncnNzLnhtbFwifTxfY29tcG9uZW50cy5jb2RlPntcImFuZFwifTwvX2NvbXBvbmVudHMuY29kZT57XCJzaXRlbWFwLnhtbGAgZmlsZVwifTwvX2NvbXBvbmVudHMubGk+e1wiXFxuXCJ9PC9fY29tcG9uZW50cy51bD57XCJcXG5cIn08X2NvbXBvbmVudHMuaDQ+e1wiQ2hhbmdlZFwifTwvX2NvbXBvbmVudHMuaDQ+e1wiXFxuXCJ9PF9jb21wb25lbnRzLnVsPntcIlxcblwifTxfY29tcG9uZW50cy5saT57XCJNb3ZlZCB0aGUgY2Fub25pY2FsIHVybCBmcm9tIHRoZSByb290IGxpbmtzIHRvIGluZGV4IHJvdXRlLlwifTwvX2NvbXBvbmVudHMubGk+e1wiXFxuXCJ9PF9jb21wb25lbnRzLmxpPntcIkNoYW5nZWQgdGhlIGxhc3Rtb2QgbGF0ZSBvZiBhbGwgdGhlIHJvdXRlcyBpbiB0aGUgc2l0ZW1hcCBmaWxlXCJ9PC9fY29tcG9uZW50cy5saT57XCJcXG5cIn08L19jb21wb25lbnRzLnVsPntcIlxcblwifTxfY29tcG9uZW50cy5oND57XCJSZW1vdmVkXCJ9PC9fY29tcG9uZW50cy5oND57XCJcXG5cIn08X2NvbXBvbmVudHMudWw+e1wiXFxuXCJ9PF9jb21wb25lbnRzLmxpPntcIlJlbW92ZWQgXCJ9PF9jb21wb25lbnRzLmNvZGU+e1wicnNzLnhtbFwifTwvX2NvbXBvbmVudHMuY29kZT57XCIgbGluayBmcm9tIHRoZSBzaXRlbWFwIGZpbGVcIn08L19jb21wb25lbnRzLmxpPntcIlxcblwifTxfY29tcG9uZW50cy5saT57XCJSZW1vdmVkIHRoZSBtZXRhIGZ1bmN0aW9uIGZyb20gaW5kZXggcm91dGVcIn08L19jb21wb25lbnRzLmxpPntcIlxcblwifTxfY29tcG9uZW50cy5saT57XCJSZW1vdmVkIHJpY2tyb2xsIHJvdXRlc1wifTwvX2NvbXBvbmVudHMubGk+e1wiXFxuXCJ9PC9fY29tcG9uZW50cy51bD57XCJcXG5cIn08X2NvbXBvbmVudHMuaHIgLz57XCJcXG5cIn08X2NvbXBvbmVudHMuaDM+e1wiMjAyMS0xMi0yN1wifTwvX2NvbXBvbmVudHMuaDM+e1wiXFxuXCJ9PF9jb21wb25lbnRzLmg0PntcIkFkZGVkXCJ9PC9fY29tcG9uZW50cy5oND57XCJcXG5cIn08X2NvbXBvbmVudHMudWw+e1wiXFxuXCJ9PF9jb21wb25lbnRzLmxpPntcIkFkZGVkIHJvYm90cyBtZXRhIHRhZyAtIFwifTxfY29tcG9uZW50cy5jb2RlPntcImluZGV4LCBmb2xsb3dcIn08L19jb21wb25lbnRzLmNvZGU+PC9fY29tcG9uZW50cy5saT57XCJcXG5cIn08L19jb21wb25lbnRzLnVsPntcIlxcblwifTxfY29tcG9uZW50cy5oND57XCJDaGFuZ2VkXCJ9PC9fY29tcG9uZW50cy5oND57XCJcXG5cIn08X2NvbXBvbmVudHMudWw+e1wiXFxuXCJ9PF9jb21wb25lbnRzLmxpPntcIk5vdywgYWxsIHRoZSBzZW8gc3R1ZmYgYXJlIGNvbWluZyBmcm9tIHRoZSBTRU8gc2NoZW1hXCJ9PC9fY29tcG9uZW50cy5saT57XCJcXG5cIn08X2NvbXBvbmVudHMubGk+e1wiTm93LCBHb29nbGUgYW5hbHl0aWNzIHdpbGwgbm90IHRyYWNrIGluIGRldmVsb3BtZW50IG1vZGVcIn08L19jb21wb25lbnRzLmxpPntcIlxcblwifTxfY29tcG9uZW50cy5saT57XCJVcGRhdGVkIGJsb2cgcGFnZSB0byB1c2UgdGhlIHNlbyBzdHVmZi5cIn08L19jb21wb25lbnRzLmxpPntcIlxcblwifTxfY29tcG9uZW50cy5saT57XCJVcGRhdGVkIHRoZSBcIn08X2NvbXBvbmVudHMuY29kZT57XCJzaXRlbWFwLnhtbFwifTwvX2NvbXBvbmVudHMuY29kZT57XCIgZmlsZSB0byBpbmNsdWRlIGFsbCB0aGUgYmxvZyBsaW5rc1wifTwvX2NvbXBvbmVudHMubGk+e1wiXFxuXCJ9PF9jb21wb25lbnRzLmxpPntcIkNoYW5nZWQgdGhlIGJnIGNvbG9yIHRvIG1hdHQgYmxhY2tcIn08L19jb21wb25lbnRzLmxpPntcIlxcblwifTxfY29tcG9uZW50cy5saT57XCJVcGRhdGVkIHNvbWUgdHlwZSBzdHVmZi5cIn08L19jb21wb25lbnRzLmxpPntcIlxcblwifTwvX2NvbXBvbmVudHMudWw+e1wiXFxuXCJ9PF9jb21wb25lbnRzLmhyIC8+e1wiXFxuXCJ9PF9jb21wb25lbnRzLmgzPntcIjIwMjEtMTItMjZcIn08L19jb21wb25lbnRzLmgzPntcIlxcblwifTxfY29tcG9uZW50cy5oND57XCJVcGRhdGVkXCJ9PC9fY29tcG9uZW50cy5oND57XCJcXG5cIn08X2NvbXBvbmVudHMudWw+e1wiXFxuXCJ9PF9jb21wb25lbnRzLmxpPntcIkZpeGVkIHRoZSBmYXZpY29uIHJlZmV0Y2ggZm9yIGV2ZXJ5IHJlcXVlc3QgYnkgaW1wb3J0aW5nIGEgZmlsZSBhbmQgcGFzc2luZyBpdCB0byB0aGUgbGlua3MgZXhwb3J0XCJ9PC9fY29tcG9uZW50cy5saT57XCJcXG5cIn08X2NvbXBvbmVudHMubGk+e1wiU2hvd2luZyB0aGUgYnJvd3NlciB0aGVtZSBjb2xvciBiYXNlZCBvbiB0aGUgcHJlZmVyZWQgY29sb3Igc2NoZW1lXCJ9PC9fY29tcG9uZW50cy5saT57XCJcXG5cIn08L19jb21wb25lbnRzLnVsPntcIlxcblwifTxfY29tcG9uZW50cy5oND57XCJSZW1vdmVkXCJ9PC9fY29tcG9uZW50cy5oND57XCJcXG5cIn08X2NvbXBvbmVudHMudWw+e1wiXFxuXCJ9PF9jb21wb25lbnRzLmxpPntcIlJlbW92ZWQgdW51c2VkIHBhY2thZ2VzLlwifTwvX2NvbXBvbmVudHMubGk+e1wiXFxuXCJ9PF9jb21wb25lbnRzLmxpPntcIlJlbW92ZWQgZ3JhcGhxbCByZXF1ZXN0IHBhY2thZ2UgYW5kIG1pZ3JhdGVkIHRvIGZldGNoLiBTbyBtaWdyYXRpbmcgdG8gY2YgcGFnZXMgd2lsbCBiZSBlYXN5LlwifTwvX2NvbXBvbmVudHMubGk+e1wiXFxuXCJ9PC9fY29tcG9uZW50cy51bD57XCJcXG5cIn08X2NvbXBvbmVudHMuaHIgLz57XCJcXG5cIn08X2NvbXBvbmVudHMuaDM+e1wiMjAyMS0xMi0yNlwifTwvX2NvbXBvbmVudHMuaDM+e1wiXFxuXCJ9PF9jb21wb25lbnRzLmg0PntcIkFkZGVkXCJ9PC9fY29tcG9uZW50cy5oND57XCJcXG5cIn08X2NvbXBvbmVudHMudWw+e1wiXFxuXCJ9PF9jb21wb25lbnRzLmxpPntcIi5lbnYuZXhhbXBsZSBmaWxlIHRvIHRoZSByZXBvc2l0b3J5XCJ9PC9fY29tcG9uZW50cy5saT57XCJcXG5cIn08X2NvbXBvbmVudHMubGk+e1wiQWRkZWQgYWx0IGF0dHJpYnV0ZSB0byB0aGUgaW1hZ2UgaW4gYWJvdXQgcGFnZVwifTwvX2NvbXBvbmVudHMubGk+e1wiXFxuXCJ9PC9fY29tcG9uZW50cy51bD57XCJcXG5cIn08X2NvbXBvbmVudHMuaDQ+e1wiQ2hhbmdlZFwifTwvX2NvbXBvbmVudHMuaDQ+e1wiXFxuXCJ9PF9jb21wb25lbnRzLnVsPntcIlxcblwifTxfY29tcG9uZW50cy5saT57XCJjaGFuZ2VkIHRoZSBmb250IHNpemUgb2YgdGhlIGZvb3RlciBsaW5rc1wifTwvX2NvbXBvbmVudHMubGk+e1wiXFxuXCJ9PC9fY29tcG9uZW50cy51bD57XCJcXG5cIn08X2NvbXBvbmVudHMuaDQ+e1wiUmVtb3ZlZFwifTwvX2NvbXBvbmVudHMuaDQ+e1wiXFxuXCJ9PF9jb21wb25lbnRzLnVsPntcIlxcblwifTxfY29tcG9uZW50cy5saT57XCJSZW1vdmVkIHVud2FudGVkIG1hcmdpbiBib3R0b20gaW4gdGhlIGJvZHlcIn08L19jb21wb25lbnRzLmxpPntcIlxcblwifTwvX2NvbXBvbmVudHMudWw+e1wiXFxuXCJ9PF9jb21wb25lbnRzLmhyIC8+e1wiXFxuXCJ9PF9jb21wb25lbnRzLmgzPntcIjIwMjEtMTItMjVcIn08L19jb21wb25lbnRzLmgzPntcIlxcblwifTxfY29tcG9uZW50cy5oND57XCJBZGRlZFwifTwvX2NvbXBvbmVudHMuaDQ+e1wiXFxuXCJ9PF9jb21wb25lbnRzLnVsPntcIlxcblwifTxfY29tcG9uZW50cy5saT57XCJBZGRlZCB0aXRsZSBmb3IgdGhlIFF1b3RlcyBwYWdlXCJ9PC9fY29tcG9uZW50cy5saT57XCJcXG5cIn08L19jb21wb25lbnRzLnVsPntcIlxcblwifTxfY29tcG9uZW50cy5oND57XCJDaGFuZ2VkXCJ9PC9fY29tcG9uZW50cy5oND57XCJcXG5cIn08X2NvbXBvbmVudHMudWw+e1wiXFxuXCJ9PF9jb21wb25lbnRzLmxpPntcIkNoYW5nZWQgdGhlIHRpdGxlIG9mIHRoZSBhYm91dCBwYWdlIGZyb20gXCJ9PF9jb21wb25lbnRzLmNvZGU+e1wiTXV0aHVrdW1hclwifTwvX2NvbXBvbmVudHMuY29kZT57XCIgLT4gXCJ9PF9jb21wb25lbnRzLmNvZGU+e1wiQWJvdXRcIn08L19jb21wb25lbnRzLmNvZGU+PC9fY29tcG9uZW50cy5saT57XCJcXG5cIn08X2NvbXBvbmVudHMubGk+e1wiQ2hhbmdlZCB0aGUgdGl0bGUgb2YgdGhlIGNoYW5nZWxvZyBwYWdlIGZyb20gXCJ9PF9jb21wb25lbnRzLmNvZGU+e1wiQ2hhbmdlbG9nIHwgTXV0aHVrdW1hclwifTwvX2NvbXBvbmVudHMuY29kZT57XCIgLT4gXCJ9PF9jb21wb25lbnRzLmNvZGU+e1wiQ2hhbmdlbG9nXCJ9PC9fY29tcG9uZW50cy5jb2RlPjwvX2NvbXBvbmVudHMubGk+e1wiXFxuXCJ9PF9jb21wb25lbnRzLmxpPntcIkNoYW5nZWQgdGhlIHRpdGxlIG9mIHRoZSBibG9nIHBhZ2UgZnJvbSBcIn08X2NvbXBvbmVudHMuY29kZT57XCJCbG9nIHwgTXV0aHVrdW1hclwifTwvX2NvbXBvbmVudHMuY29kZT57XCIgLT4gXCJ9PF9jb21wb25lbnRzLmNvZGU+e1wiQmxvZ1wifTwvX2NvbXBvbmVudHMuY29kZT48L19jb21wb25lbnRzLmxpPntcIlxcblwifTwvX2NvbXBvbmVudHMudWw+e1wiXFxuXCJ9PF9jb21wb25lbnRzLmg0PntcIlJlbW92ZWRcIn08L19jb21wb25lbnRzLmg0PntcIlxcblwifTxfY29tcG9uZW50cy51bD57XCJcXG5cIn08X2NvbXBvbmVudHMubGk+e1wiUmVtb3ZlZCBmb250cyB3aXRoIC5lb3QsIHN2ZyBhbmQgdHRmLiBCZWNhdXNlIHRob3NlIGZvbnRzIGFyZSBuZWVkIGZvciB2ZXJ5IG9sZCBicm93c2Vycy5cIn08L19jb21wb25lbnRzLmxpPntcIlxcblwifTxfY29tcG9uZW50cy5saT57XCJSZW1vdmVkIHVudXNlZCBpbWFnZXMgYXNzZXRzXCJ9PC9fY29tcG9uZW50cy5saT57XCJcXG5cIn08L19jb21wb25lbnRzLnVsPntcIlxcblwifTxfY29tcG9uZW50cy5ociAvPntcIlxcblwifTxfY29tcG9uZW50cy5oMz57XCIyMDIxLTEyLTI0XCJ9PC9fY29tcG9uZW50cy5oMz57XCJcXG5cIn08X2NvbXBvbmVudHMuaDQ+e1wiQWRkZWRcIn08L19jb21wb25lbnRzLmg0PntcIlxcblwifTxfY29tcG9uZW50cy51bD57XCJcXG5cIn08X2NvbXBvbmVudHMubGk+e1wiQWRkZWQgbW9iaWxlIG5hdmJhclwifTwvX2NvbXBvbmVudHMubGk+e1wiXFxuXCJ9PF9jb21wb25lbnRzLmxpPntcIkFkZGVkIGluaXRpYWwgdmVyc2lvbiBvZiBhYm91dCBwYWdlXCJ9PC9fY29tcG9uZW50cy5saT57XCJcXG5cIn08X2NvbXBvbmVudHMubGk+e1wiQWRkZWQgYXJpYS1sYWJlbCB0byBidXR0b24gZm9yIG9wZW5pbmcgbWVudVwifTwvX2NvbXBvbmVudHMubGk+e1wiXFxuXCJ9PF9jb21wb25lbnRzLmxpPntcIkFkZGVkIHF1b3RlIHBlciBkYXkgaW4gdGhlIGhvbWUgcGFnZVwifTwvX2NvbXBvbmVudHMubGk+e1wiXFxuXCJ9PF9jb21wb25lbnRzLmxpPntcIkFkZGVkIHRhc2tzIG9mIHRoZSBkYXkgaW4gdGhlIGhvbWUgcGFnZVwifTwvX2NvbXBvbmVudHMubGk+e1wiXFxuXCJ9PF9jb21wb25lbnRzLmxpPntcIkFkZGVkIFdlYnNpdGUgbWFwIHdoaWNoIHNob3dzIG1vc3QgaW1wb3J0YW50IGxpbmtzXCJ9PC9fY29tcG9uZW50cy5saT57XCJcXG5cIn08X2NvbXBvbmVudHMubGk+e1wiQWRkZWQgcXVvdGVzIHBhZ2Ugd2hpY2ggcmVuZGVycyBhbGwgdGhlIHF1b3Rlc1wifTwvX2NvbXBvbmVudHMubGk+e1wiXFxuXCJ9PF9jb21wb25lbnRzLmxpPntcIlVwZGF0ZWQgdGhlIGZvb3RlciB0byBoYXZlIG1vc3Qgb2YgdGhlIGxpbmtzXCJ9PC9fY29tcG9uZW50cy5saT57XCJcXG5cIn08X2NvbXBvbmVudHMubGk+e1wiQWRkZWQgdGhlIGluaXRpYWwgdmVyc2lvbiBvZiBzaXRlbWFwLnhtbFwifTwvX2NvbXBvbmVudHMubGk+e1wiXFxuXCJ9PF9jb21wb25lbnRzLmxpPntcIkVuYWJsZWQgcm9ib3RzLnR4dCBmaWxlLlwifTwvX2NvbXBvbmVudHMubGk+e1wiXFxuXCJ9PF9jb21wb25lbnRzLmxpPntcIkFkZGVkIGltYWdlIGFuZCBvZzppbWFnZSB1cmwgdG8gdGhlIG1ldGEgdGFnIG9mIHRoZSBcIn08X2NvbXBvbmVudHMuY29kZT57XCIvXCJ9PC9fY29tcG9uZW50cy5jb2RlPntcIiByb3V0ZS5cIn08L19jb21wb25lbnRzLmxpPntcIlxcblwifTxfY29tcG9uZW50cy5saT57XCJBZGRlZCB0aGlzIHNpdGUgc291cmNlIGNvZGUgbGluayBpbiB0aGUgZm9vdGVyIGxpbmsgbGlzdFwifTwvX2NvbXBvbmVudHMubGk+e1wiXFxuXCJ9PF9jb21wb25lbnRzLmxpPntcIkFkZGVkIHBvc3Rjc3MtaW1wb3J0IHBhY2thZ2UgZm9yIGltcG9ydGluZyBzdHVmZiBpbnNpZGUgY3NzIGZpbGVzXCJ9PC9fY29tcG9uZW50cy5saT57XCJcXG5cIn08L19jb21wb25lbnRzLnVsPntcIlxcblwifTxfY29tcG9uZW50cy5oND57XCJDaGFuZ2VkXCJ9PC9fY29tcG9uZW50cy5oND57XCJcXG5cIn08X2NvbXBvbmVudHMudWw+e1wiXFxuXCJ9PF9jb21wb25lbnRzLmxpPntcIlVwZGF0ZWQgdGhlIFJTUyB1cmwgZnJvbSBcIn08X2NvbXBvbmVudHMuY29kZT57XCJodHRwczovL251bGxpc2guaW4vcnNzLnhtbFwifTwvX2NvbXBvbmVudHMuY29kZT57XCIgLT4gXCJ9PF9jb21wb25lbnRzLmNvZGU+e1wiL3Jzcy54bWxcIn08L19jb21wb25lbnRzLmNvZGU+e1wiLiBKdXN0IHJlbW92ZWQgdGhlIGRvbWFpbiBmcm9tIHRoZSB1cmwuIFNvIGl0IHdpbGwgd29yayBvbiBsb2NhbGx5IGFsc28uXCJ9PC9fY29tcG9uZW50cy5saT57XCJcXG5cIn08X2NvbXBvbmVudHMubGk+e1wiVXBkYXRlZCBob21lIHBhZ2UgdG8gaGF2ZSBsaWtlcyB0byBibG9nLCBhYm91dCwgYW5kIGNoYW5nZWxvZyBwYWdlLlwifTwvX2NvbXBvbmVudHMubGk+e1wiXFxuXCJ9PF9jb21wb25lbnRzLmxpPntcIlVwZGF0ZWQgSG9tZSBwYWdlIGFib3V0IG1lIGFuZCBzb21lIG9mIHRoZSBlYXN0ZXIgZWdnIHN0dWZmLlwifTwvX2NvbXBvbmVudHMubGk+e1wiXFxuXCJ9PF9jb21wb25lbnRzLmxpPntcIlVwZGF0ZWQgdGhlIHJlc3BvbnNpdmVuZXNzIG9mIHRoZSBwYWRkaW5nIGFuZCBtYXJnaW4uXCJ9PC9fY29tcG9uZW50cy5saT57XCJcXG5cIn08X2NvbXBvbmVudHMubGk+e1wiRml4ZWQgdGhlIGJ1ZyB0aGF0IGRvZXMgbm90IHNhdmUgc3R1ZmYgdG8gdGhlIGNvb2tpZVwifTwvX2NvbXBvbmVudHMubGk+e1wiXFxuXCJ9PF9jb21wb25lbnRzLmxpPntcIlVwZGF0ZWQgdGhlIHJlc3BvbnNpdmVuZXNzIHN0dWZmIGluIHRoZSBob21lIHBhZ2VcIn08L19jb21wb25lbnRzLmxpPntcIlxcblwifTxfY29tcG9uZW50cy5saT57XCJSZW1vdmVkIHRoZSBleGNlc3MgcGFkZGluZyBmcm9tIHNvY2lhbCBwcm9maWxlIGljb25cIn08L19jb21wb25lbnRzLmxpPntcIlxcblwifTxfY29tcG9uZW50cy5saT57XCJVcGRhdGVkIHRoZSBxdW90ZSBhdXRob3IgdG8gaGF2ZSBzcGFjZSBhZnRlciB0aGUgZGFzaFwifTwvX2NvbXBvbmVudHMubGk+e1wiXFxuXCJ9PF9jb21wb25lbnRzLmxpPntcIlJlZHVjZWQgdGhlIHBhZGRpbmcgb2YgdGhlIHF1b3RlXCJ9PC9fY29tcG9uZW50cy5saT57XCJcXG5cIn08X2NvbXBvbmVudHMubGk+e1wiVXBkYXRlZCB0aGUgQWJvdXQgcGFnZShJbml0aWFsIHZlcnNpb24pXCJ9PC9fY29tcG9uZW50cy5saT57XCJcXG5cIn08X2NvbXBvbmVudHMubGk+e1wiRGVjcmVhc2VkIHRoZSB3aWR0aCBvZiB0aGUgcXVvdGVzIHBhZ2UgYW5kIG1hZGUgaXQgbG9vayBnb29kLlwifTwvX2NvbXBvbmVudHMubGk+e1wiXFxuXCJ9PF9jb21wb25lbnRzLmxpPntcIkdvIGJhY2sgbGluayBpbiB0aGUgXCJ9PF9jb21wb25lbnRzLmNvZGU+e1wiL2Jsb2dcIn08L19jb21wb25lbnRzLmNvZGU+e1wiIHBhZ2UgbmF2aWdhdGUgdG8gdGhlIHNhbWUgcGFnZS4gU28gaXQgaXMgZml4ZWQgdG8gZ28gdG8gaG9tZSBwYWdlLlwifTwvX2NvbXBvbmVudHMubGk+e1wiXFxuXCJ9PC9fY29tcG9uZW50cy51bD57XCJcXG5cIn08X2NvbXBvbmVudHMuaDQ+e1wiUmVtb3ZlZFwifTwvX2NvbXBvbmVudHMuaDQ+e1wiXFxuXCJ9PF9jb21wb25lbnRzLnVsPntcIlxcblwifTxfY29tcG9uZW50cy5saT57XCJSZW1vdmVkIHRoZSBibG9nIHN0dWZmIGFuZCB0aGUgbG9hZGVyLiBTbyB0aGUgaW5pdGlhbCBwYWdlIHdpbGwgYmUgc28gbXVjaCBmYXN0ZXIgdGhhbiBiZWZvcmUuIDMwMG1zIGF2ZXJhZ2UgdG8gMTUwbXNcIn08L19jb21wb25lbnRzLmxpPntcIlxcblwifTxfY29tcG9uZW50cy5saT57XCJSZW1vdmVkIHVud2FudGVkIHRpdGxlIHRhZyBpbiB0aGUgSFRNTCBkb2N1bWVudFwifTwvX2NvbXBvbmVudHMubGk+e1wiXFxuXCJ9PC9fY29tcG9uZW50cy51bD57XCJcXG5cIn08X2NvbXBvbmVudHMuaHIgLz57XCJcXG5cIn08X2NvbXBvbmVudHMuaDM+e1wiMjAyMS0xMi0yM1wifTwvX2NvbXBvbmVudHMuaDM+e1wiXFxuXCJ9PF9jb21wb25lbnRzLmg0PntcIkFkZGVkXCJ9PC9fY29tcG9uZW50cy5oND57XCJcXG5cIn08X2NvbXBvbmVudHMudWw+e1wiXFxuXCJ9PF9jb21wb25lbnRzLmxpPntcIkFkZGVkIGNhbm9uaWNhbCBsaW5rIHRvIHRoZSBoZWFkXCJ9PC9fY29tcG9uZW50cy5saT57XCJcXG5cIn08L19jb21wb25lbnRzLnVsPntcIlxcblwifTxfY29tcG9uZW50cy5oND57XCJDaGFuZ2VkXCJ9PC9fY29tcG9uZW50cy5oND57XCJcXG5cIn08X2NvbXBvbmVudHMudWw+e1wiXFxuXCJ9PF9jb21wb25lbnRzLmxpPntcIkZvciBub3csIGRpc2FibGluZyB0aGUgcm9ib3RzIHN0dWZmLiBPbmNlIG1vc3Qgb2YgdGhlIHdlYnNpdGUgaXMgZG9uZSwgdGhlbiB3ZSBjYW4gZW5hYmxlIHRob3NlIHN0dWZmLlwifTwvX2NvbXBvbmVudHMubGk+e1wiXFxuXCJ9PF9jb21wb25lbnRzLmxpPntcIkNoYW5nZWQgdGhlIHJlZGlyZWN0IHVybCBvZiBsb2dpbiwgc2lnbnVwIGFuZCBhZG1pbiB0byB0aGUgZGlyZWN0IHlvdXR1YmUgdXJsLlwifTwvX2NvbXBvbmVudHMubGk+e1wiXFxuXCJ9PC9fY29tcG9uZW50cy51bD57XCJcXG5cIn08X2NvbXBvbmVudHMuaDQ+e1wiUmVtb3ZlZFwifTwvX2NvbXBvbmVudHMuaDQ+e1wiXFxuXCJ9PF9jb21wb25lbnRzLnVsPntcIlxcblwifTxfY29tcG9uZW50cy5saT57XCJSZW1vdmVkIHRoZSBcIn08X2NvbXBvbmVudHMuY29kZT57XCJtYXlnb2RoZWxweW91XCJ9PC9fY29tcG9uZW50cy5jb2RlPntcIiBsaW5rIHJlZGlyZWN0XCJ9PC9fY29tcG9uZW50cy5saT57XCJcXG5cIn08L19jb21wb25lbnRzLnVsPntcIlxcblwifTxfY29tcG9uZW50cy5ociAvPntcIlxcblwifTxfY29tcG9uZW50cy5oMz57XCIyMDIxLTEyLTIyXCJ9PC9fY29tcG9uZW50cy5oMz57XCJcXG5cIn08X2NvbXBvbmVudHMuaDQ+e1wiQWRkZWRcIn08L19jb21wb25lbnRzLmg0PntcIlxcblwifTxfY29tcG9uZW50cy51bD57XCJcXG5cIn08X2NvbXBvbmVudHMubGk+e1wiTWFkZSB0aGUgbmF2YmFyIGFsbW9zdCB0cmFuc3BhcmVudC5cIn08L19jb21wb25lbnRzLmxpPntcIlxcblwifTwvX2NvbXBvbmVudHMudWw+e1wiXFxuXCJ9PF9jb21wb25lbnRzLmg0PntcIkNoYW5nZWRcIn08L19jb21wb25lbnRzLmg0PntcIlxcblwifTxfY29tcG9uZW50cy51bD57XCJcXG5cIn08X2NvbXBvbmVudHMubGk+e1wiRml4ZWQgdGhlIGdvb2dsZSBhbmFseXRpY3MuIEJlZm9yZSBhbmFseXRpY3Mgc3R1ZmYgbm90IHdvcmtpbmcgZm9yIHNvbWUgcmVhc29uLiBTbyBJIGNvcGllZCB0aGUgZ2EgdGVtcGxhdGUgZnJvbSBOZXh0anMgOilcIn08L19jb21wb25lbnRzLmxpPntcIlxcblwifTxfY29tcG9uZW50cy5saT57XCJTdHJpbmcucmVwbGFjZUFsbCBub3Qgd29ya2luZyBpbiBwcm9kdWN0aW9uIGZvciBzb21lIHJlYXNvbi4gU28gcG9seWZpbGlpbmcgaXQgd2l0aCByZWdleFwifTwvX2NvbXBvbmVudHMubGk+e1wiXFxuXCJ9PC9fY29tcG9uZW50cy51bD57XCJcXG5cIn08X2NvbXBvbmVudHMuaDQ+e1wiUmVtb3ZlZFwifTwvX2NvbXBvbmVudHMuaDQ+e1wiXFxuXCJ9PF9jb21wb25lbnRzLnVsPntcIlxcblwifTxfY29tcG9uZW50cy5saT57XCJVbmluc3RhbGxlZCBSZWFjdC1nYVwifTwvX2NvbXBvbmVudHMubGk+e1wiXFxuXCJ9PC9fY29tcG9uZW50cy51bD57XCJcXG5cIn08X2NvbXBvbmVudHMuaHIgLz57XCJcXG5cIn08X2NvbXBvbmVudHMuaDM+e1wiMjAyMS0xMi0yMVwifTwvX2NvbXBvbmVudHMuaDM+e1wiXFxuXCJ9PF9jb21wb25lbnRzLmg0PntcIkFkZGVkXCJ9PC9fY29tcG9uZW50cy5oND57XCJcXG5cIn08X2NvbXBvbmVudHMudWw+e1wiXFxuXCJ9PF9jb21wb25lbnRzLmxpPntcIkFkZGVkIGluaXRpYWwgdmVyc2lvbiBvZiB0aGUgaW5kZXggcGFnZS4gQmVmb3JlIGluIGluZGV4IHJvdXRlLCB0aGUgdHJhZmZpYyBpcyByZWRpcmVjdGVkIHRvIHRoZSAvYmxvZyBwYWdlLlwifTwvX2NvbXBvbmVudHMubGk+e1wiXFxuXCJ9PF9jb21wb25lbnRzLmxpPntcIkFkZGVkIHJvYm90cy50eHQgZm9yIHRoZSBTRU8gc3R1ZmYuXCJ9PC9fY29tcG9uZW50cy5saT57XCJcXG5cIn08X2NvbXBvbmVudHMubGk+e1wiQ3JlYXRlZCBjdXN0b20gTWFya2Rvd24gY29tcG9uZW50IHRvIHJlbmRlciB0aGUgbWFya2Rvd24uXCJ9PC9fY29tcG9uZW50cy5saT57XCJcXG5cIn08X2NvbXBvbmVudHMubGk+e1wiQ3JlYXRlZCBDaGFuZ2UgbG9nIGZpbGUgdG8ga2VlcCB0cmFjayBvZiB0aGUgcHJvZ3Jlc3MuXCJ9PC9fY29tcG9uZW50cy5saT57XCJcXG5cIn08X2NvbXBvbmVudHMubGk+e1wiQWRkZWQgXCJ9PF9jb21wb25lbnRzLmNvZGU+e1wic2l0ZW1hcC54bWxcIn08L19jb21wb25lbnRzLmNvZGU+e1wiIGZpbGVcIn08L19jb21wb25lbnRzLmxpPntcIlxcblwifTxfY29tcG9uZW50cy5saT57XCJBZGRlZCBcIn08X2NvbXBvbmVudHMuY29kZT57XCJzaXRlbWFwLnhtbFwifTwvX2NvbXBvbmVudHMuY29kZT57XCIgdG8gdGhlIHJvYm90cyBmaWxlXCJ9PC9fY29tcG9uZW50cy5saT57XCJcXG5cIn08X2NvbXBvbmVudHMubGk+e1wiQWRkZGVkIFwifTxfY29tcG9uZW50cy5jb2RlPntcImFyaWEtbGFiZWxcIn08L19jb21wb25lbnRzLmNvZGU+e1wiIGZvciB0aGUgZ2l0aHViIGljb24gaW4gdGhlIGZvb3RlclwifTwvX2NvbXBvbmVudHMubGk+e1wiXFxuXCJ9PF9jb21wb25lbnRzLmxpPntcIkFkZGRlZCBcIn08X2NvbXBvbmVudHMuY29kZT57XCJhcmlhLWxhYmVsXCJ9PC9fY29tcG9uZW50cy5jb2RlPntcIiBmb3IgdGhlIHR3aXR0ZXIgaWNvbiBpbiB0aGUgZm9vdGVyXCJ9PC9fY29tcG9uZW50cy5saT57XCJcXG5cIn08X2NvbXBvbmVudHMubGk+e1wiQWRkZGVkIFwifTxfY29tcG9uZW50cy5jb2RlPntcImFyaWEtbGFiZWxcIn08L19jb21wb25lbnRzLmNvZGU+e1wiIGZvciB0aGUgcnNzIGZlZWQgaWNvbiBpbiB0aGUgZm9vdGVyXCJ9PC9fY29tcG9uZW50cy5saT57XCJcXG5cIn08X2NvbXBvbmVudHMubGk+e1wiQWRkZWQgZ29vZ2xlIGFuYWx5dGljc1wifTwvX2NvbXBvbmVudHMubGk+e1wiXFxuXCJ9PC9fY29tcG9uZW50cy51bD57XCJcXG5cIn08X2NvbXBvbmVudHMuaDQ+e1wiQ2hhbmdlZFwifTwvX2NvbXBvbmVudHMuaDQ+e1wiXFxuXCJ9PF9jb21wb25lbnRzLnVsPntcIlxcblwifTxfY29tcG9uZW50cy5saT57XCJcXG5cIn08X2NvbXBvbmVudHMucD57XCJSZW5hbWVkIHRoZSB0aXRsZSBmcm9tICdDaGFuZ2Vsb2cgfCBNdXRodWt1bWFyJyAtPiAnQ2hhbmdlbG9nIHwgTnVsbGlzaC5pbicuIEl0IGRvZXNuJ3QgbWFrZSBzZW5zZSB0byBoYXZlIE11dGh1a3VtYXIgdG8gdGhlIGNoYW5nZWxvZy5cIn08L19jb21wb25lbnRzLnA+e1wiXFxuXCJ9PC9fY29tcG9uZW50cy5saT57XCJcXG5cIn08X2NvbXBvbmVudHMubGk+e1wiXFxuXCJ9PF9jb21wb25lbnRzLnA+e1wiSW4gaW5kZXggcm91dGUsIGNoYW5nZWQgdGhlIHRpdGxlKCdCbG9nIHwgTXV0aHVrdW1hcicgPT4gJ011dGh1a3VtYXInKS5cIn08L19jb21wb25lbnRzLnA+e1wiXFxuXCJ9PC9fY29tcG9uZW50cy5saT57XCJcXG5cIn08X2NvbXBvbmVudHMubGk+e1wiXFxuXCJ9PF9jb21wb25lbnRzLnA+e1wiVXBkYXRlIHJvYm90cy50eHQgY29udGVudFwifTwvX2NvbXBvbmVudHMucD57XCJcXG5cIn08X2NvbXBvbmVudHMucHJlPjxfY29tcG9uZW50cy5jb2RlIGNsYXNzTmFtZT1cImxhbmd1YWdlLXR4dFwiPntcIlVzZXItYWdlbnQ6ICpcXG5BbGxvdzogL1xcblwifTwvX2NvbXBvbmVudHMuY29kZT48L19jb21wb25lbnRzLnByZT57XCJcXG5cIn08L19jb21wb25lbnRzLmxpPntcIlxcblwifTxfY29tcG9uZW50cy5saT57XCJcXG5cIn08X2NvbXBvbmVudHMucD57XCJNb3ZlZCB0aGUgXCJ9PF9jb21wb25lbnRzLmNvZGU+e1wicm9ib3RzLnR4dFwifTwvX2NvbXBvbmVudHMuY29kZT57XCIgZmlsZSBmcm9tIHJlc291cmNlIHJvdXRlcyB0byBwdWJsaWMgZm9sZGVyLlwifTwvX2NvbXBvbmVudHMucD57XCJcXG5cIn08X2NvbXBvbmVudHMucHJlPjxfY29tcG9uZW50cy5jb2RlIGNsYXNzTmFtZT1cImxhbmd1YWdlLXR4dFwiPntcIlVzZXItYWdlbnQ6ICpcXG5BbGxvdzogL1xcblxcblNpdGVtYXA6IGh0dHBzOi8vbnVsbGlzaC5pbi9zaXRlbWFwLnhtbFxcblwifTwvX2NvbXBvbmVudHMuY29kZT48L19jb21wb25lbnRzLnByZT57XCJcXG5cIn08L19jb21wb25lbnRzLmxpPntcIlxcblwifTxfY29tcG9uZW50cy5saT57XCJcXG5cIn08X2NvbXBvbmVudHMucD57XCJDaGFuZ2VkIFwifTxfY29tcG9uZW50cy5jb2RlPntcIlJlYWQgbW9yZVwifTwvX2NvbXBvbmVudHMuY29kZT57XCIgaW4gdGhlIGJsb2cgdG8gXCJ9PF9jb21wb25lbnRzLmNvZGU+e1wiQ29udGludWUgcmVhZGluZ1wifTwvX2NvbXBvbmVudHMuY29kZT57XCIuIFJlYWQgbW9yZSBzZWVtcyB2YWd1ZSBhbmQgZ2VuZXJpYy4gQ29udGludWUgUmVhZGluZyBzZWVtcyBva2F5IHRoYW4gUmVhZCBtb3JlLlwifTwvX2NvbXBvbmVudHMucD57XCJcXG5cIn08L19jb21wb25lbnRzLmxpPntcIlxcblwifTxfY29tcG9uZW50cy5saT57XCJcXG5cIn08X2NvbXBvbmVudHMucD57XCJVcGdyYWRlZCB0byByZW1peCBGT1JNIGZvciB0aGUgYmxvZyBwb3N0IHNlYXJjaFwifTwvX2NvbXBvbmVudHMucD57XCJcXG5cIn08L19jb21wb25lbnRzLmxpPntcIlxcblwifTwvX2NvbXBvbmVudHMudWw+e1wiXFxuXCJ9PF9jb21wb25lbnRzLmg0PntcIlJlbW92ZWRcIn08L19jb21wb25lbnRzLmg0PntcIlxcblwifTxfY29tcG9uZW50cy51bD57XCJcXG5cIn08X2NvbXBvbmVudHMubGk+e1wiUmVtb3ZlZCBkdXBsaWNhdGUgdmlld3BvcnQgdGFnLlwifTwvX2NvbXBvbmVudHMubGk+e1wiXFxuXCJ9PF9jb21wb25lbnRzLmxpPntcIlJlbW92ZWQgcm9ib3RzIGhlYWRlciBmcm9tIHRoZSBtZXRhLiBBbGwgdGhlIHJvYm90cyBzdHVmZiBhcmUgbW92ZWQgdG8gdGhlIHJvYm90cy50eHQgZmlsZS9yb3V0ZS5cIn08L19jb21wb25lbnRzLmxpPntcIlxcblwifTwvX2NvbXBvbmVudHMudWw+PC8+O1xuICByZXR1cm4gTURYTGF5b3V0ID8gPE1EWExheW91dCB7Li4ucHJvcHN9PntfY29udGVudH08L01EWExheW91dD4gOiBfY29udGVudDtcbn1cbmV4cG9ydCBkZWZhdWx0IE1EWENvbnRlbnQ7XG5cblxuZXhwb3J0IGNvbnN0IGZpbGVuYW1lID0gXCJjaGFuZ2Vsb2cubWR4XCI7XG5leHBvcnQgY29uc3QgaGVhZGVycyA9IHR5cGVvZiBhdHRyaWJ1dGVzICE9PSBcInVuZGVmaW5lZFwiICYmIGF0dHJpYnV0ZXMuaGVhZGVycztcbmV4cG9ydCBjb25zdCBtZXRhID0gdHlwZW9mIGF0dHJpYnV0ZXMgIT09IFwidW5kZWZpbmVkXCIgJiYgYXR0cmlidXRlcy5tZXRhO1xuZXhwb3J0IGNvbnN0IGxpbmtzID0gdW5kZWZpbmVkO1xuICAgICAgICAgICIsICJpbXBvcnQgdHlwZSB7IExvYWRlckZ1bmN0aW9uIH0gZnJvbSAncmVtaXgnXG5cbmltcG9ydCB7IGdldFBvc3RzIH0gZnJvbSAnfi91dGlscy9jbXMuc2VydmVyJ1xuXG5mdW5jdGlvbiBlc2NhcGVSZWdFeHAoc3RyaW5nOiBzdHJpbmcpIHtcbiAgcmV0dXJuIHN0cmluZy5yZXBsYWNlKC9bLiorP14ke30oKXxbXFxdXFxcXF0vZywgJ1xcXFwkJicpIC8vICQmIG1lYW5zIHRoZSB3aG9sZSBtYXRjaGVkIHN0cmluZ1xufVxuZnVuY3Rpb24gcmVwbGFjZUFsbChzdHI6IHN0cmluZywgbWF0Y2g6IHN0cmluZywgcmVwbGFjZW1lbnQ6IHN0cmluZykge1xuICByZXR1cm4gc3RyLnJlcGxhY2UobmV3IFJlZ0V4cChlc2NhcGVSZWdFeHAobWF0Y2gpLCAnZycpLCAoKSA9PiByZXBsYWNlbWVudClcbn1cblxuZnVuY3Rpb24gZXNjYXBlQ2RhdGEoczogc3RyaW5nKSB7XG4gIHJldHVybiByZXBsYWNlQWxsKHMsICddXT4nLCAnXV1dXT48IVtDREFUQVs+Jylcbn1cblxuZnVuY3Rpb24gZXNjYXBlSHRtbChzOiBzdHJpbmcpIHtcbiAgY29uc3QgcmVzdWx0MSA9IHJlcGxhY2VBbGwocywgJyYnLCAnJmFtcDsnKVxuICBjb25zdCByZXN1bHQyID0gcmVwbGFjZUFsbChyZXN1bHQxLCAnPCcsICcmbHQ7JylcbiAgY29uc3QgcmVzdWx0MyA9IHJlcGxhY2VBbGwocmVzdWx0MiwgJz4nLCAnJmd0OycpXG4gIGNvbnN0IHJlc3VsdDQgPSByZXBsYWNlQWxsKHJlc3VsdDMsICdcIicsICcmcXVvdDsnKVxuICBjb25zdCByZXN1bHQ1ID0gcmVwbGFjZUFsbChyZXN1bHQ0LCBcIidcIiwgJyYjMDM5OycpXG4gIHJldHVybiByZXN1bHQ1XG59XG5cbmV4cG9ydCBjb25zdCBsb2FkZXI6IExvYWRlckZ1bmN0aW9uID0gYXN5bmMgKHsgcmVxdWVzdCB9KSA9PiB7XG4gIGNvbnN0IGJsb2dzID0gYXdhaXQgZ2V0UG9zdHMoKVxuXG4gIGNvbnN0IGhvc3QgPSByZXF1ZXN0LmhlYWRlcnMuZ2V0KCdYLUZvcndhcmRlZC1Ib3N0JykgPz8gcmVxdWVzdC5oZWFkZXJzLmdldCgnaG9zdCcpXG5cbiAgaWYgKCFob3N0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdDb3VsZCBub3QgZGV0ZXJtaW5lIGRvbWFpbiBVUkwuJylcbiAgfVxuXG4gIGNvbnN0IHByb3RvY29sID0gaG9zdC5pbmNsdWRlcygnbG9jYWxob3N0JykgPyAnaHR0cCcgOiAnaHR0cHMnXG4gIGNvbnN0IGRvbWFpbiA9IGAke3Byb3RvY29sfTovLyR7aG9zdH1gXG4gIGNvbnN0IGJsb2dVcmwgPSBgJHtkb21haW59L2Jsb2dgXG5cbiAgY29uc3QgcnNzU3RyaW5nID0gYFxuICAgIDxyc3MgeG1sbnM6YmxvZ0NoYW5uZWw9XCIke2Jsb2dVcmx9XCIgdmVyc2lvbj1cIjIuMFwiPlxuICAgICAgPGNoYW5uZWw+XG4gICAgICAgIDx0aXRsZT5NdXRodWt1bWFyIGJsb2c8L3RpdGxlPlxuICAgICAgICA8bGluaz4ke2Jsb2dVcmx9PC9saW5rPlxuICAgICAgICA8ZGVzY3JpcHRpb24+VGhlIE11dGh1a3VtYXIncyBCbG9nPC9kZXNjcmlwdGlvbj5cbiAgICAgICAgPGxhbmd1YWdlPmVuLXVzPC9sYW5ndWFnZT5cbiAgICAgICAgPGdlbmVyYXRvcj5SU1MgZmVlZCBnZW5lcmF0b3I8L2dlbmVyYXRvcj5cbiAgICAgICAgPHR0bD40MDwvdHRsPlxuICAgICAgICAke2Jsb2dzXG4gICAgICAgICAgLm1hcCgoYmxvZykgPT5cbiAgICAgICAgICAgIGBcbiAgICAgICAgICAgIDxpdGVtPlxuICAgICAgICAgICAgICA8dGl0bGU+PCFbQ0RBVEFbJHtlc2NhcGVDZGF0YShibG9nLnRpdGxlKX1dXT48L3RpdGxlPlxuICAgICAgICAgICAgICA8ZGVzY3JpcHRpb24+PCFbQ0RBVEFbJHtlc2NhcGVIdG1sKGJsb2cuZXhjZXJwdCl9XV0+PC9kZXNjcmlwdGlvbj5cbiAgICAgICAgICAgICAgPGF1dGhvcj48IVtDREFUQVske2VzY2FwZUNkYXRhKCdNdXRodWt1bWFyJyl9XV0+PC9hdXRob3I+XG4gICAgICAgICAgICAgIDxwdWJEYXRlPiR7YmxvZy5wdWJsaXNoZWRBdH08L3B1YkRhdGU+XG4gICAgICAgICAgICAgIDxsaW5rPiR7YmxvZ1VybH0vJHtibG9nLnNsdWd9PC9saW5rPlxuICAgICAgICAgICAgICA8Z3VpZD4ke2Jsb2dVcmx9LyR7YmxvZy5zbHVnfTwvZ3VpZD5cbiAgICAgICAgICAgIDwvaXRlbT5cbiAgICAgICAgICBgLnRyaW0oKSxcbiAgICAgICAgICApXG4gICAgICAgICAgLmpvaW4oJ1xcbicpfVxuICAgICAgPC9jaGFubmVsPlxuICAgIDwvcnNzPlxuICBgLnRyaW0oKVxuXG4gIHJldHVybiBuZXcgUmVzcG9uc2UocnNzU3RyaW5nLCB7XG4gICAgaGVhZGVyczoge1xuICAgICAgJ0NhY2hlLUNvbnRyb2wnOiBgcHVibGljLCBtYXgtYWdlPSR7NjAgKiAxMH0sIHMtbWF4YWdlPSR7NjAgKiA2MCAqIDI0fWAsXG4gICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL3htbCcsXG4gICAgICAnQ29udGVudC1MZW5ndGgnOiBTdHJpbmcoQnVmZmVyLmJ5dGVMZW5ndGgocnNzU3RyaW5nKSksXG4gICAgICAnWC1Sb2JvdHMtVGFnJzogJ25vLWluZGV4JyxcbiAgICB9LFxuICB9KVxufVxuIiwgImltcG9ydCB7IGpzb24sIExpbmtzRnVuY3Rpb24sIE1ldGFGdW5jdGlvbiwgdXNlTG9hZGVyRGF0YSB9IGZyb20gJ3JlbWl4J1xuaW1wb3J0IHR5cGUgeyBMb2FkZXJGdW5jdGlvbiB9IGZyb20gJ3JlbWl4J1xuXG5pbXBvcnQgeyBxdW90ZXMsIFF1b3RlVHlwZSB9IGZyb20gJ34vc291cmNlcy9xdW90ZXMnXG5pbXBvcnQgeyBDb250YWluZXIsIFF1b3RlIH0gZnJvbSAnfi9jb21wb25lbnRzJ1xuXG5leHBvcnQgY29uc3QgbWV0YTogTWV0YUZ1bmN0aW9uID0gKCkgPT4ge1xuICByZXR1cm4ge1xuICAgICdhcHBsZS1tb2JpbGUtd2ViLWFwcC10aXRsZSc6ICdRdW90ZXMnLFxuICAgIHRpdGxlOiAnUXVvdGVzJyxcbiAgICBkZXNjcmlwdGlvbjogYExpc3Qgb2YgTXV0aHVrdW1hcidzIGZhdm9yaXRlIFF1b3RlcyBJIGZvdW5kIG9uIEludGVybmV0IGFuZCBvbiB3aGVuIHJlYWRpbmcgYm9va3MgYW5kIHdhdGNoaW5nIFlvdXR1YmUgdmlkZW9zYCxcbiAgICBwYWdlbmFtZTogJ1F1b3RlcycsXG4gICAgcm9ib3RzOiAnaW5kZXgsIGZvbGxvdycsXG4gICAgaW1hZ2U6ICcvaW1hZ2VzL29nLmpwZycsXG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IGxpbmtzOiBMaW5rc0Z1bmN0aW9uID0gKCkgPT4ge1xuICByZXR1cm4gW1xuICAgIHtcbiAgICAgIHJlbDogJ2Nhbm9uaWNhbCcsXG4gICAgICBocmVmOiAnaHR0cHM6Ly93d3cubnVsbGlzaC5pbi9xdW90ZXMnLFxuICAgIH0sXG4gIF1cbn1cblxuZXhwb3J0IGNvbnN0IGxvYWRlcjogTG9hZGVyRnVuY3Rpb24gPSAoKSA9PiB7XG4gIHJldHVybiBqc29uKHF1b3Rlcylcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUXVvdGVzKCkge1xuICBjb25zdCBxdW90ZXMgPSB1c2VMb2FkZXJEYXRhPEFycmF5PFF1b3RlVHlwZT4+KClcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInB5LTE2XCI+XG4gICAgICA8Q29udGFpbmVyIGNsYXNzTmFtZT1cIm1heC13LTN4bFwiPlxuICAgICAgICA8b2w+XG4gICAgICAgICAgPGgyIGNsYXNzTmFtZT1cIm1iLTQgdGV4dC14bCBmb250LWJvbGQgbWQ6dGV4dC0yeGxcIj5NeSBGYXZvcml0ZSBRdW90ZXM8L2gyPlxuICAgICAgICAgIHtxdW90ZXMubWFwKChxdW90ZSkgPT4gKFxuICAgICAgICAgICAgPGxpIGtleT17cXVvdGUuaWR9IGNsYXNzTmFtZT17YGZsZXgganVzdGlmeS1zdGFydCBtYi0yIGl0ZW1zLXN0YXJ0YH0+XG4gICAgICAgICAgICAgIDxRdW90ZSB7Li4ucXVvdGV9IGNsYXNzTmFtZT1cIm14LTAgbGc6dy1mdWxsXCI+XG4gICAgICAgICAgICAgICAge3F1b3RlLnF1b3RlfVxuICAgICAgICAgICAgICA8L1F1b3RlPlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC9vbD5cbiAgICAgIDwvQ29udGFpbmVyPlxuICAgIDwvZGl2PlxuICApXG59XG4iLCAiZXhwb3J0IHR5cGUgUXVvdGVUeXBlID0ge1xuICBxdW90ZTogc3RyaW5nXG4gIGlkOiBzdHJpbmdcbiAgYXV0aG9yOiBzdHJpbmdcbn1cblxuZXhwb3J0IGNvbnN0IHF1b3RlczogQXJyYXk8UXVvdGVUeXBlPiA9IFtcbiAge1xuICAgIHF1b3RlOiAnVGhlIGJlc3QgaXMgdGhlIGVuZW15IG9mIGdvb2QnLFxuICAgIGlkOiAnMTVhMDllM2ItMTZlYi00ODFkLTkxMjUtNGJlZmFjOTY0NDg2JyxcbiAgICBhdXRob3I6ICdWb2x0YWlyZScsXG4gIH0sXG4gIHtcbiAgICBxdW90ZTogYHlvdXIgZnV0dXJlIG5lZWRzIHlvdSwgeW91ciBwYXN0IGRvZXNuJ3RgLFxuICAgIGlkOiAnMjNkNDQzOWYtMWI4ZS00OGExLWE3OGQtYWQxN2Q4MGU1ZmFiJyxcbiAgICBhdXRob3I6ICdTYW52ZWxsbycsXG4gIH0sXG4gIHtcbiAgICBxdW90ZTogJ1doZW4gc29tZXRoaW5nIGlzIGltcG9ydGFudCBlbm91Z2gsIHlvdSBkbyBpdCBldmVuIGlmIHRoZSBvZGRzIGFyZSBub3QgaW4geW91ciBmYXZvci4nLFxuICAgIGlkOiAnNmE3ODFmNDMtOWFiMC00OTdkLThjMWEtOWI4ZjFmMjRhOTEyJyxcbiAgICBhdXRob3I6ICdFbG9uIE11c2snLFxuICB9LFxuXVxuIiwgImltcG9ydCB7IExpbmtzRnVuY3Rpb24sIE1ldGFGdW5jdGlvbiB9IGZyb20gJ3JlbWl4J1xuXG5pbXBvcnQgeyBDb250YWluZXIgfSBmcm9tICd+L2NvbXBvbmVudHMnXG5cbmV4cG9ydCBjb25zdCBtZXRhOiBNZXRhRnVuY3Rpb24gPSAoKSA9PiB7XG4gIHJldHVybiB7XG4gICAgJ2FwcGxlLW1vYmlsZS13ZWItYXBwLXRpdGxlJzogJ0Fib3V0JyxcbiAgICB0aXRsZTogJ0Fib3V0JyxcbiAgICBkZXNjcmlwdGlvbjpcbiAgICAgICdNdXRodWt1bWFyIGlzIGEgZnVsbCBzdGFjayBkZXZlbG9wZXIsIGxpdmluZyBpbiBUYW1pbCBOYWR1LCBJbmRpYS4gSGUgd3JpdGUgY29kZSwgbGlzdGVuIHRvIG11c2ljIGFuZCBsb3ZlcyB0byByZWFkIGJvb2tzLiBIZSBvY2Nhc2lvbmFsbHkgd3JpdGUgb24gUmVhY3QsIEphdmFzY3JpcHQgYW5kIGluIG90aGVyIHdlYiBkZXZlbG9wbWVudCB0b3BpY3MnLFxuICAgIHBhZ2VuYW1lOiAnQWJvdXQnLFxuICAgIHJvYm90czogJ2luZGV4LCBmb2xsb3cnLFxuICAgIGltYWdlOiAnL2ltYWdlcy9vZy5qcGcnLFxuICB9XG59XG5cbmV4cG9ydCBjb25zdCBsaW5rczogTGlua3NGdW5jdGlvbiA9ICgpID0+IHtcbiAgcmV0dXJuIFtcbiAgICB7XG4gICAgICByZWw6ICdjYW5vbmljYWwnLFxuICAgICAgaHJlZjogJ2h0dHBzOi8vd3d3Lm51bGxpc2guaW4vYWJvdXQnLFxuICAgIH0sXG4gIF1cbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQWJvdXQoKSB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJweS0xNlwiPlxuICAgICAgPENvbnRhaW5lcj5cbiAgICAgICAgPGltZ1xuICAgICAgICAgIHNyYz1cIi9pbWFnZXMvcHJvZmlsZS5qcGdcIlxuICAgICAgICAgIHdpZHRoPXsyMDB9XG4gICAgICAgICAgaGVpZ2h0PXsyMDB9XG4gICAgICAgICAgY2xhc3NOYW1lPVwibXgtYXV0byBtYi04IHJvdW5kZWQtZnVsbFwiXG4gICAgICAgICAgYWx0PVwiTXV0aHVrdW1hclwiXG4gICAgICAgIC8+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBtYXgtdy0zeGwgbXgtYXV0byBzcGFjZS15LTQgdGV4dC1iYXNlIG1kOnRleHQtbGdcIj5cbiAgICAgICAgICA8cD5cbiAgICAgICAgICAgIEhleSwgSSZhcG9zO20gTXV0aHVrdW1hci4gSSZhcG9zO20gYSBmdWxsIHN0YWNrIGRldmVsb3Blci4gSSBsaWtlcyB0byB3cml0ZSBjb2RlLiBJXG4gICAgICAgICAgICBsaXN0ZW4gdG8gbXVzaWMuIEFuZCBJIG9jY2FzaW9uYWxseSB3cml0ZSBvbiBSZWFjdCwgSmF2YXNjcmlwdCBhbmQgb3RoZXIgc3R1ZmYuIExvdmVzIHRvXG4gICAgICAgICAgICByZWFkIGJvb2tzLlxuICAgICAgICAgIDwvcD5cbiAgICAgICAgICA8cD5cbiAgICAgICAgICAgIEN1cnJlbnRseSBJJmFwb3M7bSBpbiBsb3ZlIHdpdGggYnVpbGRpbmcgd2Vic2l0ZSB3aXRoIFJlbWl4LiBBbmQgSSBhbHNvIGxpa2VzIHRvIHRyeSBvdXRcbiAgICAgICAgICAgIG5ldyB0ZWNobm9sb2dpZXMgYW5kIGJ1aWxkIHN0dWZmIHdpdGggaXQgZm9yIHByYWN0aWNlLlxuICAgICAgICAgIDwvcD5cbiAgICAgICAgICA8cD5cbiAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgIGhyZWY9XCJodHRwczovL3R3aXR0ZXIuY29tL1JvYmVydEdyZWVuZVwiXG4gICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgICAgICAgIHJlbD1cIm5vcmVmZXJyZXJcIlxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJsaW5rLWZvbnQtY29sb3JcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICBSb2JlcnQgR3JlZW5lXG4gICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAseycgJ31cbiAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgIGhyZWY9XCJodHRwczovL3R3aXR0ZXIuY29tL1J5YW5Ib2xpZGF5XCJcbiAgICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgICAgICAgcmVsPVwibm9yZWZlcnJlclwiXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImxpbmstZm9udC1jb2xvclwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIFJ5YW4gSG9saWRheVxuICAgICAgICAgICAgPC9hPnsnICd9XG4gICAgICAgICAgICBhbmR7JyAnfVxuICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vdHdpdHRlci5jb20vSUFtTWFya01hbnNvblwiXG4gICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgICAgICAgIHJlbD1cIm5vcmVmZXJyZXJcIlxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJsaW5rLWZvbnQtY29sb3JcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICBNYXJrIE1hbnNvblxuICAgICAgICAgICAgPC9hPnsnICd9XG4gICAgICAgICAgICBhcmUgbXkgZmF2b3JpdGVzIGF1dGhvcnMgaW4gdGhlIGNhdGVnb3J5IG9mIEJvb2tzLlxuICAgICAgICAgIDwvcD5cbiAgICAgICAgICA8cD5BdCBwcmVzZW50LCBJJmFwb3M7bSB1bmVtcGxveWVkIGFuZCBmaWd1cmluZyBvdXQgd2hhdCB0byBkbyB3aXRoIG15IGxpZmUuPC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvQ29udGFpbmVyPlxuICAgIDwvZGl2PlxuICApXG59XG4iLCAiaW1wb3J0IHsganNvbiwgTGlua3NGdW5jdGlvbiwgTG9hZGVyRnVuY3Rpb24sIE1ldGFGdW5jdGlvbiwgdXNlTG9hZGVyRGF0YSB9IGZyb20gJ3JlbWl4J1xuaW1wb3J0IHsgTGluaywgdXNlQ2F0Y2ggfSBmcm9tICdyZW1peCdcblxuaW1wb3J0IHsgUXVvdGUsIEZvdXIwMCwgQ29udGFpbmVyLCBIb21lU2VjdGlvbiwgTGlua0J1dHRvbiB9IGZyb20gJ34vY29tcG9uZW50cydcbmltcG9ydCB7IGdldFF1b3RlIH0gZnJvbSAnfi91dGlscy9pbmRleC5zZXJ2ZXInXG5pbXBvcnQgeyBjb21taXRTZXNzaW9uLCBnZXRTZXNzaW9uIH0gZnJvbSAnfi91dGlscy9zZXNzaW9uLnNlcnZlcidcblxudHlwZSBMb2FkZXJEYXRhID0ge1xuICBxdW90ZTogQXdhaXRlZDxSZXR1cm5UeXBlPHR5cGVvZiBnZXRRdW90ZT4+XG59XG5cbmV4cG9ydCBjb25zdCBtZXRhOiBNZXRhRnVuY3Rpb24gPSAoKSA9PiB7XG4gIHJldHVybiB7XG4gICAga2V5d29yZHM6ICdOdWxsaXNoLmluLCBMZWFybiBKYXZhc2NyaXB0LCBMZWFybiBUeXBlc2NyaXB0IGFuZCBMZWFybiBDU1MsIENsZWFuIGNvZGUnLFxuICB9XG59XG5cbmV4cG9ydCBjb25zdCBsaW5rczogTGlua3NGdW5jdGlvbiA9ICgpID0+IHtcbiAgcmV0dXJuIFtcbiAgICB7XG4gICAgICByZWw6ICdjYW5vbmljYWwnLFxuICAgICAgaHJlZjogJ2h0dHBzOi8vd3d3Lm51bGxpc2guaW4nLFxuICAgIH0sXG4gIF1cbn1cblxuZXhwb3J0IGNvbnN0IGxvYWRlcjogTG9hZGVyRnVuY3Rpb24gPSBhc3luYyAoeyByZXF1ZXN0IH0pID0+IHtcbiAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGdldFNlc3Npb24ocmVxdWVzdC5oZWFkZXJzLmdldCgnQ29va2llJykpXG5cbiAgY29uc3QgcXVvdGUgPSBhd2FpdCBnZXRRdW90ZShyZXF1ZXN0KVxuXG4gIHNlc3Npb24uc2V0KCdxdW90ZScsIHF1b3RlKVxuXG4gIHJldHVybiBqc29uKFxuICAgIHsgcXVvdGUgfSxcbiAgICB7XG4gICAgICBoZWFkZXJzOiB7XG4gICAgICAgICdTZXQtQ29va2llJzogYXdhaXQgY29tbWl0U2Vzc2lvbihzZXNzaW9uKSxcbiAgICAgIH0sXG4gICAgfSxcbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBCbG9nKCkge1xuICBjb25zdCBkYXRhID0gdXNlTG9hZGVyRGF0YTxMb2FkZXJEYXRhPigpXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJweS00IGxnOnB5LThcIj5cbiAgICAgIDxDb250YWluZXI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHktOCB0ZXh0LWxnIGJvcmRlci1iIG1kOnB5LTE2IGJvcmRlci1jb2xvclwiPlxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm1iLTJcIj5IZXksIEkmYXBvczttPC9wPlxuICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LTN4bCBmb250LWJvbGQgbWQ6dGV4dC02eGxcIj5NdXRodWt1bWFyPC9oMT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgbXQtNCBzcGFjZS15LTIgdGV4dC1iYXNlIGxpZ2h0LWZvbnQtY29sb3IgbWQ6dGV4dC1sZ1wiPlxuICAgICAgICAgICAgPHA+V2VsY29tZSB0byBteSBQZXJzb25hbCB3ZWJzaXRlLjwvcD5cbiAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICBJIHdyaXRlIDxzdHJvbmc+Y29kZTwvc3Ryb25nPi4gSSBsaXN0ZW4gdG8gPHN0cm9uZz5tdXNpYzwvc3Ryb25nPi4gTG92ZXMgdG8gcmVhZHsnICd9XG4gICAgICAgICAgICAgIDxzdHJvbmc+Ym9va3M8L3N0cm9uZz4uIEFuZCBJIG9jY2FzaW9uYWxseSB3cml0ZSBhcnRpY2xlcyBvbiBSZWFjdCwgSmF2YXNjcmlwdCBhbmRcbiAgICAgICAgICAgICAgb3RoZXIgc3R1ZmYuXG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgRmVlbCBmcmVlIHRvIHBva2UgYXJvdW5kLiBUaGVyZSBhcmUgc29tZXsnICd9XG4gICAgICAgICAgICAgIDxMaW5rIHRvPVwiL2xvZ2luXCIgY2xhc3NOYW1lPVwibGluay1mb250LWNvbG9yXCI+XG4gICAgICAgICAgICAgICAgZWFzdGVyIGVnZ3NcbiAgICAgICAgICAgICAgPC9MaW5rPnsnICd9XG4gICAgICAgICAgICAgIGluIHRoaXMgd2Vic2l0ZS4gSWYgeW91IGZpbmQgYW55IG9mIHRoZW0sIGxldCBtZSBrbm93IG9ueycgJ31cbiAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9yZC5udWxsaXNoLmluL3R3aXR0ZXJcIlxuICAgICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgICAgICAgICAgcmVsPVwibm9yZWZlcnJlclwiXG4gICAgICAgICAgICAgICAgYXJpYS1sYWJlbD1cInR3aXR0ZXJcIlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImxpbmstZm9udC1jb2xvclwiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICBUd2l0dGVyXG4gICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgLlxuICAgICAgICAgICAgPC9wPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPEhvbWVTZWN0aW9uIHRpdGxlPVwiUXVvdGUgb2YgdGhlIGRheVwiPlxuICAgICAgICAgIDxRdW90ZSBhdXRob3I9e2RhdGEucXVvdGUucXVvdGUuYXV0aG9yfT57ZGF0YS5xdW90ZS5xdW90ZS5xdW90ZX08L1F1b3RlPlxuICAgICAgICA8L0hvbWVTZWN0aW9uPlxuICAgICAgICA8SG9tZVNlY3Rpb24gdGl0bGU9XCJXZWJzaXRlIG1hcFwiIHNob3dCb3JkZXI9e2ZhbHNlfT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIG10LThcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBqdXN0aWZ5LWNlbnRlciB3LWZ1bGwgc3BhY2UteS0yIG1kOnNwYWNlLXktMCBtZDpmbGV4LXJvd1wiPlxuICAgICAgICAgICAgICA8TGlua0J1dHRvbiB0bz1cIi9ibG9nXCIgY2xhc3NOYW1lPVwidy1mdWxsIG1kOnJvdW5kZWQtci1ub25lIG1kOnctYXV0b1wiPlxuICAgICAgICAgICAgICAgIFJlYWQgYXJ0aWNsZXNcbiAgICAgICAgICAgICAgPC9MaW5rQnV0dG9uPlxuICAgICAgICAgICAgICA8TGlua0J1dHRvblxuICAgICAgICAgICAgICAgIHRvPVwiL2Fib3V0XCJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpbmxpbmUtYmxvY2sgdy1mdWxsIG1kOnJvdW5kZWQtbC1ub25lIG1kOnJvdW5kZWQtci1ub25lIG1kOnctYXV0b1wiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICBNb3JlIGFib3V0IG1lXG4gICAgICAgICAgICAgIDwvTGlua0J1dHRvbj5cbiAgICAgICAgICAgICAgPExpbmtCdXR0b25cbiAgICAgICAgICAgICAgICB0bz1cIi9jaGFuZ2Vsb2dcIlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImlubGluZS1ibG9jayB3LWZ1bGwgbWQ6cm91bmRlZC1sLW5vbmUgbWQ6dy1hdXRvXCJcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIFdlYnNpdGUgY2hhbmdlbG9nXG4gICAgICAgICAgICAgIDwvTGlua0J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L0hvbWVTZWN0aW9uPlxuICAgICAgPC9Db250YWluZXI+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIENhdGNoQm91bmRhcnkoKSB7XG4gIGNvbnN0IGNhdWdodCA9IHVzZUNhdGNoKClcblxuICBjb25zdCBtZXNzYWdlID0gY2F1Z2h0LnN0YXR1cyA9PT0gNDA0ID8gY2F1Z2h0LmRhdGEubWVzc2FnZSA6ICdPb3BzaWVzLi4gU29tZXRoaW5nIHdlbnQgd3JvbmcuJ1xuXG4gIGlmIChjYXVnaHQuc3RhdHVzID09PSA0MDQpIHtcbiAgICByZXR1cm4gPEZvdXIwMCB0aXRsZT1cIjQwNFwiIG1lc3NhZ2U9e21lc3NhZ2V9IGxpbms9XCIvYmxvZ1wiIC8+XG4gIH1cblxuICByZXR1cm4gPEZvdXIwMCB0aXRsZT1cIjUwMFwiIG1lc3NhZ2U9e21lc3NhZ2V9IGxpbms9XCIvYmxvZ1wiIC8+XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBFcnJvckJvdW5kYXJ5KCkge1xuICByZXR1cm4gPEZvdXIwMCB0aXRsZT1cIjUwMFwiIG1lc3NhZ2U9XCJPb3BzaWVzLi4uIFNvbWV0aGluZyB3ZW50IHdyb25nLlwiIGxpbms9XCIvXCIgLz5cbn1cbiIsICJpbXBvcnQgdHlwZSB7IFF1b3RlVHlwZSB9IGZyb20gJy4uL3NvdXJjZXMvcXVvdGVzJ1xuXG5pbXBvcnQgeyBxdW90ZXMgfSBmcm9tICcuLi9zb3VyY2VzL3F1b3RlcydcbmltcG9ydCB7IGdldFNlc3Npb24gfSBmcm9tICd+L3V0aWxzL3Nlc3Npb24uc2VydmVyJ1xuXG5jb25zdCBnZXRSYW5kb21JbnRCZXR3ZWVuUmFuZ2UgPSAobWluOiBudW1iZXIsIG1heDogbnVtYmVyKSA9PiB7XG4gIG1pbiA9IE1hdGguY2VpbChtaW4pXG4gIG1heCA9IE1hdGguZmxvb3IobWF4KVxuICByZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKG1heCAtIG1pbiArIDEpKSArIG1pblxufVxuXG5jb25zdCBnZXRRdW90ZSA9IGFzeW5jIChyZXF1ZXN0OiBSZXF1ZXN0KSA9PiB7XG4gIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBnZXRTZXNzaW9uKHJlcXVlc3QuaGVhZGVycy5nZXQoJ0Nvb2tpZScpKVxuXG4gIGNvbnN0IHRvZGF5ID0gbmV3IERhdGUoKS50b0xvY2FsZURhdGVTdHJpbmcoKVxuXG4gIGxldCBxdW90ZSA9IHNlc3Npb24uZ2V0KCdxdW90ZScpXG5cbiAgaWYgKHF1b3RlPy5sYXN0VXBkYXRlZCAhPT0gdG9kYXkgfHwgIXF1b3RlKSB7XG4gICAgY29uc3QgaW5kZXggPSBnZXRSYW5kb21JbnRCZXR3ZWVuUmFuZ2UoMCwgcXVvdGVzLmxlbmd0aCAtIDEpXG4gICAgcXVvdGUgPSB7XG4gICAgICBxdW90ZTogcXVvdGVzW2luZGV4XSxcbiAgICAgIGxhc3RVcGRhdGVkOiB0b2RheSxcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcXVvdGUgYXMgeyBxdW90ZTogUXVvdGVUeXBlOyBsYXN0VXBkYXRlZDogc3RyaW5nIH1cbn1cblxuZXhwb3J0IHsgZ2V0UmFuZG9tSW50QmV0d2VlblJhbmdlLCBnZXRRdW90ZSB9XG4iLCAiaW1wb3J0IHsgTG9hZGVyRnVuY3Rpb24sIHJlZGlyZWN0IH0gZnJvbSAncmVtaXgnXG5cbmV4cG9ydCBjb25zdCBsb2FkZXI6IExvYWRlckZ1bmN0aW9uID0gKCkgPT4ge1xuICB0aHJvdyByZWRpcmVjdCgnaHR0cHM6Ly93d3cueW91dHViZS5jb20vd2F0Y2g/dj1kUXc0dzlXZ1hjUScpXG59XG4iLCAiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQge1xuICB1c2VDYXRjaCxcbiAganNvbixcbiAgTG9hZGVyRnVuY3Rpb24sXG4gIE1ldGFGdW5jdGlvbixcbiAgdXNlTG9hZGVyRGF0YSxcbiAgTGlua3NGdW5jdGlvbixcbiAgT3V0bGV0LFxufSBmcm9tICdyZW1peCdcblxuaW1wb3J0IHsgQmxvZ1Bvc3QsIEZvdXIwMCB9IGZyb20gJ34vY29tcG9uZW50cydcbmltcG9ydCB7IGdldFBvc3RzLCBQb3N0IH0gZnJvbSAnfi91dGlscy9jbXMuc2VydmVyJ1xuXG5leHBvcnQgY29uc3QgbWV0YTogTWV0YUZ1bmN0aW9uID0gKCkgPT4ge1xuICByZXR1cm4ge1xuICAgICdhcHBsZS1tb2JpbGUtd2ViLWFwcC10aXRsZSc6ICdCbG9nJyxcbiAgICB0aXRsZTogJ0Jsb2cnLFxuICAgIGRlc2NyaXB0aW9uOlxuICAgICAgJ1R1dG9yaWFscyBmb3IgZGV2ZWxvcGVycy4gRm9jdXMgb24gSmF2YXNjcmlwdCwgVHlwZXNjcmlwdCwgUmVhY3QgYW5kIG90aGVyIHdlYiBkZXZlbG9wbWVudCB0b3BpY3MnLFxuICAgIHBhZ2VuYW1lOiAnQmxvZycsXG4gICAgaW1hZ2U6ICcvaW1hZ2VzL29nLmpwZycsXG4gICAgcm9ib3RzOiAnaW5kZXgsIGZvbGxvdycsXG4gICAgLy8gVE9ETzogT2cgc3R1ZmYgYXJlIG1pc3NpbmdcbiAgfVxufVxuXG5leHBvcnQgY29uc3QgbGlua3M6IExpbmtzRnVuY3Rpb24gPSAoKSA9PiB7XG4gIHJldHVybiBbXG4gICAge1xuICAgICAgcmVsOiAnY2Fub25pY2FsJyxcbiAgICAgIGhyZWY6ICdodHRwczovL3d3dy5udWxsaXNoLmluL2Jsb2cnLFxuICAgIH0sXG4gIF1cbn1cblxuZXhwb3J0IGNvbnN0IGxvYWRlcjogTG9hZGVyRnVuY3Rpb24gPSBhc3luYyAoeyByZXF1ZXN0LCBjb250ZXh0IH0pID0+IHtcbiAgY29uc3QgdXJsID0gbmV3IFVSTChyZXF1ZXN0LnVybClcblxuICBjb25zdCBxdWVyeSA9IHVybC5zZWFyY2hQYXJhbXMuZ2V0KCdxJykgPz8gJydcblxuICBjb25zdCBibG9nUG9zdHMgPSBhd2FpdCBnZXRQb3N0cyhxdWVyeSwgY29udGV4dClcblxuICBpZiAoYmxvZ1Bvc3RzLmxlbmd0aCA9PT0gMCkge1xuICAgIHRocm93IGpzb24oeyBtZXNzYWdlOiAnTm8gYmxvZ3MgZm91bmQuJyB9LCB7IHN0YXR1czogNDA0IH0pXG4gIH1cblxuICBjb25zdCBmaWx0ZXJlZEJsb2dQb3N0cyA9ICFxdWVyeVxuICAgID8gYmxvZ1Bvc3RzXG4gICAgOiBibG9nUG9zdHMuZmlsdGVyKChwb3N0KSA9PiBwb3N0LnRpdGxlLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMocXVlcnkudG9Mb3dlckNhc2UoKSkpXG5cbiAgcmV0dXJuIGpzb24oXG4gICAgeyBibG9nUG9zdHM6IGZpbHRlcmVkQmxvZ1Bvc3RzIH0sXG4gICAge1xuICAgICAgaGVhZGVyczoge1xuICAgICAgICAnQ2FjaGUtQ29udHJvbCc6ICdtYXgtYWdlPTEwMCwgbXVzdC1yZXZhbGlkYXRlJyxcbiAgICAgIH0sXG4gICAgfSxcbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBCbG9nKCkge1xuICBjb25zdCB7IGJsb2dQb3N0cyB9ID0gdXNlTG9hZGVyRGF0YTx7IGJsb2dQb3N0czogQXJyYXk8UG9zdD4gfT4oKVxuICAvLyBjb25zdCBbc2VhcmNoUGFyYW1zXSA9IHVzZVNlYXJjaFBhcmFtcygpXG5cbiAgLy8gY29uc3QgcXVlcnkgPSBzZWFyY2hQYXJhbXMuZ2V0KCdxJylcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaC1zY3JlZW5cIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwib3ZlcmZsb3cteS1hdXRvIG1heC1oLXNjcmVlbiBtYXgtdy1bMjRyZW1dIGJvcmRlci1yIGJvcmRlci1jb2xvclwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN0aWNreSB0b3AtMCBwLTYgcHktNCBiZy1jb2xvclwiPlxuICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJmb250LWJvbGRcIj5Xcml0aW5nczwvaDI+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICB7LyogPENvbnRhaW5lcj5cbiAgICAgICAgICA8Rm9ybSBtZXRob2Q9XCJnZXRcIj5cbiAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJweS00IHRleHQteGwgZm9udC1ib2xkIG1kOnB5LTEwIG1kOnRleHQtMnhsXCI+QmxvZzwvaDE+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIG1heC13LXNtIHAtMSBib3JkZXIgcm91bmRlZC1tZCBib3JkZXItY29sb3JcIj5cbiAgICAgICAgICAgICAgPElvSW9zU2VhcmNoIGNsYXNzTmFtZT1cIm1sLTIgdGV4dC1ncmF5LTYwMFwiIHNpemU9ezIwfSAvPlxuICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICBuYW1lPVwicVwiXG4gICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBwLTEgbWwtMiB0ZXh0LXNtIGJvcmRlci13aGl0ZSBiZy1jb2xvciBkYXJrOmJvcmRlci1ibGFja1wiXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJTZWFyY2ggcG9zdHMuLi5cIlxuICAgICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT17cXVlcnkgPz8gJyd9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L0Zvcm0+XG4gICAgICAgIDwvQ29udGFpbmVyPiAqL31cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLTIgdGV4dC1zbVwiPlxuICAgICAgICAgIHtibG9nUG9zdHMubWFwKChibG9nUG9zdCkgPT4gKFxuICAgICAgICAgICAgPEJsb2dQb3N0XG4gICAgICAgICAgICAgIHB1Ymxpc2hlZEF0PXtibG9nUG9zdC5wdWJsaXNoZWRBdH1cbiAgICAgICAgICAgICAga2V5PXtibG9nUG9zdC5pZH1cbiAgICAgICAgICAgICAgc2x1Zz17YmxvZ1Bvc3Quc2x1Z31cbiAgICAgICAgICAgICAgdGl0bGU9e2Jsb2dQb3N0LnRpdGxlfVxuICAgICAgICAgICAgICBleGNlcnB0PXtibG9nUG9zdC5leGNlcnB0fVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIG1heC1oLXNjcmVlbiBvdmVyZmxvdy15LWF1dG9cIj5cbiAgICAgICAgPE91dGxldCAvPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIENhdGNoQm91bmRhcnkoKSB7XG4gIGNvbnN0IGNhdWdodCA9IHVzZUNhdGNoKClcblxuICBjb25zdCBtZXNzYWdlID0gY2F1Z2h0LnN0YXR1cyA9PT0gNDA0ID8gY2F1Z2h0LmRhdGEubWVzc2FnZSA6ICdPb3BzaWVzLi4gU29tZXRoaW5nIHdlbnQgd3JvbmcuJ1xuXG4gIGlmIChjYXVnaHQuc3RhdHVzID09PSA0MDQpIHtcbiAgICByZXR1cm4gPEZvdXIwMCB0aXRsZT1cIjQwNFwiIG1lc3NhZ2U9e21lc3NhZ2V9IGxpbms9XCIvXCIgLz5cbiAgfVxuXG4gIHJldHVybiA8Rm91cjAwIHRpdGxlPVwiNTAwXCIgbWVzc2FnZT17bWVzc2FnZX0gbGluaz1cIi9cIiAvPlxufVxuXG5leHBvcnQgZnVuY3Rpb24gRXJyb3JCb3VuZGFyeSgpIHtcbiAgcmV0dXJuIDxGb3VyMDAgdGl0bGU9XCI1MDBcIiBtZXNzYWdlPVwiT29wc2llcy4uLiBTb21ldGhpbmcgd2VudCB3cm9uZy5cIiBsaW5rPVwiL1wiIC8+XG59XG4iLCAiaW1wb3J0IHsganNvbiwgTGlua3NGdW5jdGlvbiwgTG9hZGVyRnVuY3Rpb24sIE1ldGFGdW5jdGlvbiwgdXNlQ2F0Y2gsIHVzZUxvYWRlckRhdGEgfSBmcm9tICdyZW1peCdcblxuaW1wb3J0IHsgTWFya2Rvd24sIEZvdXIwMCB9IGZyb20gJ34vY29tcG9uZW50cydcbmltcG9ydCB7IGdldFBvc3QgfSBmcm9tICd+L3V0aWxzL2Ntcy5zZXJ2ZXInXG5cbmV4cG9ydCBjb25zdCBtZXRhOiBNZXRhRnVuY3Rpb24gPSAoeyBkYXRhIH0pID0+IHtcbiAgY29uc3QgcG9zdERhdGEgPSBkYXRhIGFzIEF3YWl0ZWQ8UmV0dXJuVHlwZTx0eXBlb2YgZ2V0UG9zdD4+XG5cbiAgY29uc3QgdGl0bGUgPSBwb3N0RGF0YT8uc2VvLnRpdGxlID8/ICdQYWdlIE5vdCBGb3VuZCB8IE11dGh1a3VtYXInXG4gIHJldHVybiB7XG4gICAgJ2FwcGxlLW1vYmlsZS13ZWItYXBwLXRpdGxlJzogdGl0bGUsXG4gICAgdGl0bGUsXG4gICAgZGVzY3JpcHRpb246IHBvc3REYXRhPy5zZW8uZGVzY3JpcHRpb24gPz8gJycsXG4gICAga2V5d29yZHM6IHBvc3REYXRhPy5zZW8ua2V5d29yZHMgPz8gJycsXG4gICAgaW1hZ2U6IHBvc3REYXRhPy5zZW8uaW1hZ2UudXJsID8/ICcnLFxuICAgIHBhZ2VuYW1lOiB0aXRsZSxcbiAgICAnb2c6dXJsJzogZGF0YT8udXJsLFxuICAgICdvZzp0eXBlJzogJ2FydGljbGUnLFxuICAgICdvZzp0aXRsZSc6IHRpdGxlLFxuICAgICdvZzpkZXNjcmlwdGlvbic6IHBvc3REYXRhPy5zZW8uZGVzY3JpcHRpb24gPz8gJycsXG4gICAgJ29nOmltYWdlJzogcG9zdERhdGE/LnNlby5pbWFnZS51cmwgPz8gJycsXG4gICAgcm9ib3RzOiAnaW5kZXgsIGZvbGxvdycsXG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IGxpbmtzOiBMaW5rc0Z1bmN0aW9uID0gKCkgPT4ge1xuICByZXR1cm4gW1xuICAgIHtcbiAgICAgIHJlbDogJ2Nhbm9uaWNhbCcsXG4gICAgICBocmVmOiAnaHR0cHM6Ly93d3cubnVsbGlzaC5pbi9ibG9nJyxcbiAgICB9LFxuICBdXG59XG5cbmV4cG9ydCBjb25zdCBsb2FkZXI6IExvYWRlckZ1bmN0aW9uID0gYXN5bmMgKHsgcmVxdWVzdCwgcGFyYW1zLCBjb250ZXh0IH0pID0+IHtcbiAgY29uc3QgdXJsID0gbmV3IFVSTChyZXF1ZXN0LnVybClcblxuICBjb25zdCBzbHVnID0gcGFyYW1zLnNsdWcgPz8gJydcblxuICBjb25zdCBwb3N0RGF0YSA9IGF3YWl0IGdldFBvc3Qoc2x1ZywgY29udGV4dClcblxuICBpZiAoIXBvc3REYXRhKSB7XG4gICAgdGhyb3cganNvbih7IG1lc3NhZ2U6IGBPaCBubywgdGhlIGJsb2cgeW91IGxvb2tpbmcgZm9yIGRvZXNuJ3QgZXhpc3RzLmAgfSwgeyBzdGF0dXM6IDQwNCB9KVxuICB9XG5cbiAgcmV0dXJuIGpzb24oXG4gICAge1xuICAgICAgdXJsLFxuICAgICAgLi4ucG9zdERhdGEsXG4gICAgfSxcbiAgICB7XG4gICAgICBoZWFkZXJzOiB7XG4gICAgICAgICdDYWNoZS1Db250cm9sJzogJ21heC1hZ2U9MTAwLCBtdXN0LXJldmFsaWRhdGUnLFxuICAgICAgfSxcbiAgICB9LFxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEJsb2dTbHVnKCkge1xuICBjb25zdCBwb3N0RGF0YSA9IHVzZUxvYWRlckRhdGE8QXdhaXRlZDxSZXR1cm5UeXBlPHR5cGVvZiBnZXRQb3N0Pj4+KClcblxuICBpZiAoIXBvc3REYXRhKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdQb3N0IGRhdGEgbm90IGZvdW5kLi4uIScpXG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwibWluLWgtc2NyZWVuXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInN0aWNreSB0b3AtMCBwLTQgYm9yZGVyLWIgbmF2YmFyLWJhY2tkcm9wLWZpbHRlciBib3JkZXItY29sb3JcIj5cbiAgICAgICAgPGgxIGNsYXNzTmFtZT1cImZvbnQtYm9sZFwiPntwb3N0RGF0YS50aXRsZX08L2gxPlxuICAgICAgPC9kaXY+XG4gICAgICA8TWFya2Rvd24gY2xhc3NOYW1lPVwibWF4LXctNXhsXCI+XG4gICAgICAgIDxkaXYgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3sgX19odG1sOiBwb3N0RGF0YS5jb250ZW50Lmh0bWwgfX0gLz5cbiAgICAgIDwvTWFya2Rvd24+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIENhdGNoQm91bmRhcnkoKSB7XG4gIGNvbnN0IGNhdWdodCA9IHVzZUNhdGNoKClcblxuICBjb25zdCBtZXNzYWdlID0gY2F1Z2h0LnN0YXR1cyA9PT0gNDA0ID8gY2F1Z2h0LmRhdGEubWVzc2FnZSA6ICdPb3BzaWVzLi4gU29tZXRoaW5nIHdlbnQgd3JvbmcuJ1xuXG4gIGlmIChjYXVnaHQuc3RhdHVzID09PSA0MDQpIHtcbiAgICByZXR1cm4gPEZvdXIwMCB0aXRsZT1cIjQwNFwiIG1lc3NhZ2U9e21lc3NhZ2V9IGxpbms9XCIvYmxvZ1wiIC8+XG4gIH1cblxuICByZXR1cm4gPEZvdXIwMCB0aXRsZT1cIjUwMFwiIG1lc3NhZ2U9e21lc3NhZ2V9IGxpbms9XCIvYmxvZ1wiIC8+XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBFcnJvckJvdW5kYXJ5KCkge1xuICByZXR1cm4gPEZvdXIwMCB0aXRsZT1cIjUwMFwiIG1lc3NhZ2U9XCJPb3BzaWVzLi4uIFNvbWV0aGluZyB3ZW50IHdyb25nLlwiIGxpbms9XCIvYmxvZ1wiIC8+XG59XG4iLCAiaW1wb3J0IHsganNvbiwgTG9hZGVyRnVuY3Rpb24sIHVzZUNhdGNoIH0gZnJvbSAncmVtaXgnXG5pbXBvcnQgeyBDb250YWluZXIsIEZvdXIwMCB9IGZyb20gJ34vY29tcG9uZW50cydcblxuZXhwb3J0IGNvbnN0IGxvYWRlcjogTG9hZGVyRnVuY3Rpb24gPSBhc3luYyAoKSA9PiB7XG4gIHRocm93IGpzb24oeyBtZXNzYWdlOiBgUGFnZSwgeW91IGFyZSBsb29raW5nIGZvciBkb2Vzbid0IGV4aXN0c2AgfSwgeyBzdGF0dXM6IDQwNCB9KVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTcGxhdCgpIHtcbiAgcmV0dXJuIChcbiAgICA8Q29udGFpbmVyPlxuICAgICAgPHA+XG4gICAgICAgIFlvdSBhcmUgbm90IHN1cHBvc2UgdG8gc2VlIHRoaXMgcGFnZS4gR29vZCBqb2IgZ2V0dGluZyBoZXJlLiBDYW4geW91IHBsZWFzZSBsZXQgTXV0aHUga25vdyxcbiAgICAgICAgeW91IGdvdCBoZXJlLlxuICAgICAgPC9wPlxuICAgIDwvQ29udGFpbmVyPlxuICApXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBDYXRjaEJvdW5kYXJ5KCkge1xuICBjb25zdCBjYXVnaHQgPSB1c2VDYXRjaCgpXG5cbiAgY29uc3QgbWVzc2FnZSA9IGNhdWdodC5zdGF0dXMgPT09IDQwNCA/IGNhdWdodC5kYXRhLm1lc3NhZ2UgOiAnT29wc2llcy4uIFNvbWV0aGluZyB3ZW50IHdyb25nLidcblxuICBpZiAoY2F1Z2h0LnN0YXR1cyA9PT0gNDA0KSB7XG4gICAgcmV0dXJuIDxGb3VyMDAgdGl0bGU9XCI0MDRcIiBtZXNzYWdlPXttZXNzYWdlfSBsaW5rPVwiL1wiIC8+XG4gIH1cblxuICByZXR1cm4gPEZvdXIwMCB0aXRsZT1cIjUwMFwiIG1lc3NhZ2U9e21lc3NhZ2V9IGxpbms9XCIvXCIgLz5cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIEVycm9yQm91bmRhcnkoKSB7XG4gIHJldHVybiA8Rm91cjAwIHRpdGxlPVwiNTAwXCIgbWVzc2FnZT1cIk9vcHNpZXMuLi4gU29tZXRoaW5nIHdlbnQgd3JvbmcuXCIgbGluaz1cIi9cIiAvPlxufVxuIiwgIlxuaW1wb3J0ICogYXMgZW50cnlTZXJ2ZXIgZnJvbSBcIi9Vc2Vycy9tdXRodS93b3Jrc3BhY2UvcmVtaXgtYmxvZy9hcHAvZW50cnkuc2VydmVyLnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGUwIGZyb20gXCIvVXNlcnMvbXV0aHUvd29ya3NwYWNlL3JlbWl4LWJsb2cvYXBwL3Jvb3QudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTEgZnJvbSBcIi9Vc2Vycy9tdXRodS93b3Jrc3BhY2UvcmVtaXgtYmxvZy9hcHAvcm91dGVzL1tzaXRlbWFwLnhtbF0udHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTIgZnJvbSBcIi9Vc2Vycy9tdXRodS93b3Jrc3BhY2UvcmVtaXgtYmxvZy9hcHAvcm91dGVzL2Nsb3NlLWJhbm5lci50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMyBmcm9tIFwiL1VzZXJzL211dGh1L3dvcmtzcGFjZS9yZW1peC1ibG9nL2FwcC9yb3V0ZXMvX19jaGFuZ2Vsb2cudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTQgZnJvbSBcIi9Vc2Vycy9tdXRodS93b3Jrc3BhY2UvcmVtaXgtYmxvZy9hcHAvcm91dGVzL19fY2hhbmdlbG9nL2NoYW5nZWxvZy5tZHhcIjtcbmltcG9ydCAqIGFzIHJvdXRlNSBmcm9tIFwiL1VzZXJzL211dGh1L3dvcmtzcGFjZS9yZW1peC1ibG9nL2FwcC9yb3V0ZXMvW3Jzcy54bWxdLnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGU2IGZyb20gXCIvVXNlcnMvbXV0aHUvd29ya3NwYWNlL3JlbWl4LWJsb2cvYXBwL3JvdXRlcy9xdW90ZXMudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTcgZnJvbSBcIi9Vc2Vycy9tdXRodS93b3Jrc3BhY2UvcmVtaXgtYmxvZy9hcHAvcm91dGVzL2Fib3V0LnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGU4IGZyb20gXCIvVXNlcnMvbXV0aHUvd29ya3NwYWNlL3JlbWl4LWJsb2cvYXBwL3JvdXRlcy9pbmRleC50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlOSBmcm9tIFwiL1VzZXJzL211dGh1L3dvcmtzcGFjZS9yZW1peC1ibG9nL2FwcC9yb3V0ZXMvbG9naW4udHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTEwIGZyb20gXCIvVXNlcnMvbXV0aHUvd29ya3NwYWNlL3JlbWl4LWJsb2cvYXBwL3JvdXRlcy9ibG9nLnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGUxMSBmcm9tIFwiL1VzZXJzL211dGh1L3dvcmtzcGFjZS9yZW1peC1ibG9nL2FwcC9yb3V0ZXMvYmxvZy8kc2x1Zy50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMTIgZnJvbSBcIi9Vc2Vycy9tdXRodS93b3Jrc3BhY2UvcmVtaXgtYmxvZy9hcHAvcm91dGVzLyQudHN4XCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIGFzc2V0cyB9IGZyb20gXCIuL2Fzc2V0cy5qc29uXCI7XG5leHBvcnQgY29uc3QgZW50cnkgPSB7IG1vZHVsZTogZW50cnlTZXJ2ZXIgfTtcbmV4cG9ydCBjb25zdCByb3V0ZXMgPSB7XG4gIFwicm9vdFwiOiB7XG4gICAgaWQ6IFwicm9vdFwiLFxuICAgIHBhcmVudElkOiB1bmRlZmluZWQsXG4gICAgcGF0aDogXCJcIixcbiAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICBtb2R1bGU6IHJvdXRlMFxuICB9LFxuICBcInJvdXRlcy9bc2l0ZW1hcC54bWxdXCI6IHtcbiAgICBpZDogXCJyb3V0ZXMvW3NpdGVtYXAueG1sXVwiLFxuICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICBwYXRoOiBcInNpdGVtYXAueG1sXCIsXG4gICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgbW9kdWxlOiByb3V0ZTFcbiAgfSxcbiAgXCJyb3V0ZXMvY2xvc2UtYmFubmVyXCI6IHtcbiAgICBpZDogXCJyb3V0ZXMvY2xvc2UtYmFubmVyXCIsXG4gICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgIHBhdGg6IFwiY2xvc2UtYmFubmVyXCIsXG4gICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgbW9kdWxlOiByb3V0ZTJcbiAgfSxcbiAgXCJyb3V0ZXMvX19jaGFuZ2Vsb2dcIjoge1xuICAgIGlkOiBcInJvdXRlcy9fX2NoYW5nZWxvZ1wiLFxuICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICBwYXRoOiB1bmRlZmluZWQsXG4gICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgbW9kdWxlOiByb3V0ZTNcbiAgfSxcbiAgXCJyb3V0ZXMvX19jaGFuZ2Vsb2cvY2hhbmdlbG9nXCI6IHtcbiAgICBpZDogXCJyb3V0ZXMvX19jaGFuZ2Vsb2cvY2hhbmdlbG9nXCIsXG4gICAgcGFyZW50SWQ6IFwicm91dGVzL19fY2hhbmdlbG9nXCIsXG4gICAgcGF0aDogXCJjaGFuZ2Vsb2dcIixcbiAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICBtb2R1bGU6IHJvdXRlNFxuICB9LFxuICBcInJvdXRlcy9bcnNzLnhtbF1cIjoge1xuICAgIGlkOiBcInJvdXRlcy9bcnNzLnhtbF1cIixcbiAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgcGF0aDogXCJyc3MueG1sXCIsXG4gICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgbW9kdWxlOiByb3V0ZTVcbiAgfSxcbiAgXCJyb3V0ZXMvcXVvdGVzXCI6IHtcbiAgICBpZDogXCJyb3V0ZXMvcXVvdGVzXCIsXG4gICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgIHBhdGg6IFwicXVvdGVzXCIsXG4gICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgbW9kdWxlOiByb3V0ZTZcbiAgfSxcbiAgXCJyb3V0ZXMvYWJvdXRcIjoge1xuICAgIGlkOiBcInJvdXRlcy9hYm91dFwiLFxuICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICBwYXRoOiBcImFib3V0XCIsXG4gICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgbW9kdWxlOiByb3V0ZTdcbiAgfSxcbiAgXCJyb3V0ZXMvaW5kZXhcIjoge1xuICAgIGlkOiBcInJvdXRlcy9pbmRleFwiLFxuICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICBwYXRoOiB1bmRlZmluZWQsXG4gICAgaW5kZXg6IHRydWUsXG4gICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgIG1vZHVsZTogcm91dGU4XG4gIH0sXG4gIFwicm91dGVzL2xvZ2luXCI6IHtcbiAgICBpZDogXCJyb3V0ZXMvbG9naW5cIixcbiAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgcGF0aDogXCJsb2dpblwiLFxuICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgIG1vZHVsZTogcm91dGU5XG4gIH0sXG4gIFwicm91dGVzL2Jsb2dcIjoge1xuICAgIGlkOiBcInJvdXRlcy9ibG9nXCIsXG4gICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgIHBhdGg6IFwiYmxvZ1wiLFxuICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgIG1vZHVsZTogcm91dGUxMFxuICB9LFxuICBcInJvdXRlcy9ibG9nLyRzbHVnXCI6IHtcbiAgICBpZDogXCJyb3V0ZXMvYmxvZy8kc2x1Z1wiLFxuICAgIHBhcmVudElkOiBcInJvdXRlcy9ibG9nXCIsXG4gICAgcGF0aDogXCI6c2x1Z1wiLFxuICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgIG1vZHVsZTogcm91dGUxMVxuICB9LFxuICBcInJvdXRlcy8kXCI6IHtcbiAgICBpZDogXCJyb3V0ZXMvJFwiLFxuICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICBwYXRoOiBcIipcIixcbiAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICBtb2R1bGU6IHJvdXRlMTJcbiAgfVxufTsiXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7O0FDQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7O0FDVUE7QUFWQTs7QUNVQTtBQVZBOztBRkllLHVCQUNiLFNBQ0Esb0JBQ0EsaUJBQ0EsY0FDQTtBQUNBLFFBQU0sU0FBUyxlQUFlLG9DQUFDLGFBQUQ7QUFBQSxJQUFhLFNBQVM7QUFBQSxJQUFjLEtBQUssUUFBUTtBQUFBO0FBRS9FLGtCQUFnQixJQUFJLGdCQUFnQjtBQUNwQyxrQkFBZ0IsSUFBSSwwQkFBMEI7QUFDOUMsa0JBQWdCLElBQUksbUJBQW1CO0FBQ3ZDLGtCQUFnQixJQUFJLGdDQUFnQztBQUNwRCxrQkFBZ0IsSUFBSSxvQkFBb0I7QUFDeEMsa0JBQWdCLElBQUksNkJBQTZCO0FBRWpELFNBQU8sSUFBSSxTQUFTLG9CQUFvQixRQUFRO0FBQUEsSUFDOUMsUUFBUTtBQUFBLElBQ1IsU0FBUztBQUFBO0FBQUE7OztBR3JC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Q1YsTUFBTTtBQUFBLElBQ04sT0FBTztBQUFBLElBQ1AsZUFBZTtBQUFBLElBQ2YsUUFBUTtBQUFBO0FBQUEsRUFFVixnQ0FBZ0M7QUFBQSxJQUM5QixJQUFJO0FBQUEsSUFDSixVQUFVO0FBQUEsSUFDVixNQUFNO0FBQUEsSUFDTixPQUFPO0FBQUEsSUFDUCxlQUFlO0FBQUEsSUFDZixRQUFRO0FBQUE7QUFBQSxFQUVWLG9CQUFvQjtBQUFBLElBQ2xCLElBQUk7QUFBQSxJQUNKLFVBQVU7QUFBQSxJQUNWLE1BQU07QUFBQSxJQUNOLE9BQU87QUFBQSxJQUNQLGVBQWU7QUFBQSxJQUNmLFFBQVE7QUFBQTtBQUFBLEVBRVYsaUJBQWlCO0FBQUEsSUFDZixJQUFJO0FBQUEsSUFDSixVQUFVO0FBQUEsSUFDVixNQUFNO0FBQUEsSUFDTixPQUFPO0FBQUEsSUFDUCxlQUFlO0FBQUEsSUFDZixRQUFRO0FBQUE7QUFBQSxFQUVWLGdCQUFnQjtBQUFBLElBQ2QsSUFBSTtBQUFBLElBQ0osVUFBVTtBQUFBLElBQ1YsTUFBTTtBQUFBLElBQ04sT0FBTztBQUFBLElBQ1AsZUFBZTtBQUFBLElBQ2YsUUFBUTtBQUFBO0FBQUEsRUFFVixnQkFBZ0I7QUFBQSxJQUNkLElBQUk7QUFBQSxJQUNKLFVBQVU7QUFBQSxJQUNWLE1BQU07QUFBQSxJQUNOLE9BQU87QUFBQSxJQUNQLGVBQWU7QUFBQSxJQUNmLFFBQVE7QUFBQTtBQUFBLEVBRVYsZ0JBQWdCO0FBQUEsSUFDZCxJQUFJO0FBQUEsSUFDSixVQUFVO0FBQUEsSUFDVixNQUFNO0FBQUEsSUFDTixPQUFPO0FBQUEsSUFDUCxlQUFlO0FBQUEsSUFDZixRQUFRO0FBQUE7QUFBQSxFQUVWLGVBQWU7QUFBQSxJQUNiLElBQUk7QUFBQSxJQUNKLFVBQVU7QUFBQSxJQUNWLE1BQU07QUFBQSxJQUNOLE9BQU87QUFBQSxJQUNQLGVBQWU7QUFBQSxJQUNmLFFBQVE7QUFBQTtBQUFBLEVBRVYscUJBQXFCO0FBQUEsSUFDbkIsSUFBSTtBQUFBLElBQ0osVUFBVTtBQUFBLElBQ1YsTUFBTTtBQUFBLElBQ04sT0FBTztBQUFBLElBQ1AsZUFBZTtBQUFBLElBQ2YsUUFBUTtBQUFBO0FBQUEsRUFFVixZQUFZO0FBQUEsSUFDVixJQUFJO0FBQUEsSUFDSixVQUFVO0FBQUEsSUFDVixNQUFNO0FBQUEsSUFDTixPQUFPO0FBQUEsSUFDUCxlQUFlO0FBQUEsSUFDZixRQUFRO0FBQUE7QUFBQTsiLAogICJuYW1lcyI6IFtdCn0K
