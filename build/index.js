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
      "Content-Length": String(siteMap).length
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vbm9kZV9tb2R1bGVzL0ByZW1peC1ydW4vZGV2L2NvbXBpbGVyL3NoaW1zL3JlYWN0LnRzIiwgIi4uL2FwcC9lbnRyeS5zZXJ2ZXIudHN4IiwgIi4uL25vZGVfbW9kdWxlcy9yZW1peC9lc20vY2xpZW50LmpzIiwgIi4uL25vZGVfbW9kdWxlcy9yZW1peC9lc20vc2VydmVyLmpzIiwgInJvdXRlLW1vZHVsZTovVXNlcnMvbXV0aHUvd29ya3NwYWNlL3JlbWl4LWJsb2cvYXBwL3Jvb3QudHN4IiwgIi4uL2FwcC9jb21wb25lbnRzL2NvbnRhaW5lci50c3giLCAiLi4vYXBwL2NvbXBvbmVudHMvZ28tYmFjay50c3giLCAiLi4vYXBwL2NvbXBvbmVudHMvNDAwLnRzeCIsICIuLi9hcHAvY29tcG9uZW50cy9ibG9nLXBvc3QudHN4IiwgIi4uL2FwcC9jb21wb25lbnRzL2RhdGUudHN4IiwgIi4uL2FwcC9jb21wb25lbnRzL21hcmtkb3duLnRzeCIsICIuLi9hcHAvY29tcG9uZW50cy9saW5rLWJ1dHRvbi50c3giLCAiLi4vYXBwL2NvbXBvbmVudHMvcXVvdGUudHN4IiwgIi4uL2FwcC9jb21wb25lbnRzL2hvbWUtc2VjdGlvbi50c3giLCAiLi4vYXBwL2NvbXBvbmVudHMvc2lkZWJhci50c3giLCAiLi4vYXBwL3V0aWxzL2d0YWdzLnRzIiwgInJvdXRlLW1vZHVsZTovVXNlcnMvbXV0aHUvd29ya3NwYWNlL3JlbWl4LWJsb2cvYXBwL3JvdXRlcy9bc2l0ZW1hcC54bWxdLnRzeCIsICIuLi9hcHAvdXRpbHMvZW52LnNlcnZlci50cyIsICIuLi9hcHAvdXRpbHMvZ3JhcGhxbC5zZXJ2ZXIudHMiLCAiLi4vYXBwL3V0aWxzL2Ntcy5zZXJ2ZXIudHMiLCAicm91dGUtbW9kdWxlOi9Vc2Vycy9tdXRodS93b3Jrc3BhY2UvcmVtaXgtYmxvZy9hcHAvcm91dGVzL2Nsb3NlLWJhbm5lci50c3giLCAiLi4vYXBwL3V0aWxzL3Nlc3Npb24uc2VydmVyLnRzIiwgInJvdXRlLW1vZHVsZTovVXNlcnMvbXV0aHUvd29ya3NwYWNlL3JlbWl4LWJsb2cvYXBwL3JvdXRlcy9fX2NoYW5nZWxvZy50c3giLCAibWR4Oi9Vc2Vycy9tdXRodS93b3Jrc3BhY2UvcmVtaXgtYmxvZy9hcHAvcm91dGVzL19fY2hhbmdlbG9nL2NoYW5nZWxvZy5tZHgiLCAicm91dGUtbW9kdWxlOi9Vc2Vycy9tdXRodS93b3Jrc3BhY2UvcmVtaXgtYmxvZy9hcHAvcm91dGVzL1tyc3MueG1sXS50c3giLCAicm91dGUtbW9kdWxlOi9Vc2Vycy9tdXRodS93b3Jrc3BhY2UvcmVtaXgtYmxvZy9hcHAvcm91dGVzL3F1b3Rlcy50c3giLCAiLi4vYXBwL3NvdXJjZXMvcXVvdGVzLnRzIiwgInJvdXRlLW1vZHVsZTovVXNlcnMvbXV0aHUvd29ya3NwYWNlL3JlbWl4LWJsb2cvYXBwL3JvdXRlcy9hYm91dC50c3giLCAicm91dGUtbW9kdWxlOi9Vc2Vycy9tdXRodS93b3Jrc3BhY2UvcmVtaXgtYmxvZy9hcHAvcm91dGVzL2luZGV4LnRzeCIsICIuLi9hcHAvdXRpbHMvaW5kZXguc2VydmVyLnRzIiwgInJvdXRlLW1vZHVsZTovVXNlcnMvbXV0aHUvd29ya3NwYWNlL3JlbWl4LWJsb2cvYXBwL3JvdXRlcy9sb2dpbi50c3giLCAicm91dGUtbW9kdWxlOi9Vc2Vycy9tdXRodS93b3Jrc3BhY2UvcmVtaXgtYmxvZy9hcHAvcm91dGVzL2Jsb2cudHN4IiwgInJvdXRlLW1vZHVsZTovVXNlcnMvbXV0aHUvd29ya3NwYWNlL3JlbWl4LWJsb2cvYXBwL3JvdXRlcy9ibG9nLyRzbHVnLnRzeCIsICJyb3V0ZS1tb2R1bGU6L1VzZXJzL211dGh1L3dvcmtzcGFjZS9yZW1peC1ibG9nL2FwcC9yb3V0ZXMvJC50c3giLCAiPHN0ZGluPiJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5leHBvcnQgeyBSZWFjdCB9O1xuIiwgImltcG9ydCB7IHJlbmRlclRvU3RyaW5nIH0gZnJvbSAncmVhY3QtZG9tL3NlcnZlcidcbmltcG9ydCB7IFJlbWl4U2VydmVyIH0gZnJvbSAncmVtaXgnXG5pbXBvcnQgdHlwZSB7IEVudHJ5Q29udGV4dCB9IGZyb20gJ3JlbWl4J1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBoYW5kbGVSZXF1ZXN0KFxuICByZXF1ZXN0OiBSZXF1ZXN0LFxuICByZXNwb25zZVN0YXR1c0NvZGU6IG51bWJlcixcbiAgcmVzcG9uc2VIZWFkZXJzOiBIZWFkZXJzLFxuICByZW1peENvbnRleHQ6IEVudHJ5Q29udGV4dCxcbikge1xuICBjb25zdCBtYXJrdXAgPSByZW5kZXJUb1N0cmluZyg8UmVtaXhTZXJ2ZXIgY29udGV4dD17cmVtaXhDb250ZXh0fSB1cmw9e3JlcXVlc3QudXJsfSAvPilcblxuICByZXNwb25zZUhlYWRlcnMuc2V0KCdDb250ZW50LVR5cGUnLCAndGV4dC9odG1sJylcbiAgcmVzcG9uc2VIZWFkZXJzLnNldCgnWC1Db250ZW50LVR5cGUtT3B0aW9ucycsICdub3NuaWZmJylcbiAgcmVzcG9uc2VIZWFkZXJzLnNldCgnWC1GcmFtZS1PcHRpb25zJywgJ0RFTlknKVxuICByZXNwb25zZUhlYWRlcnMuc2V0KCdDcm9zcy1PcmlnaW4tUmVzb3VyY2UtUG9saWN5JywgJ3NhbWUtb3JpZ2luJylcbiAgcmVzcG9uc2VIZWFkZXJzLnNldCgnWC1YU1MtUHJvdGVjdGlvbicsICcxOyBtb2RlPWJsb2NrJylcbiAgcmVzcG9uc2VIZWFkZXJzLnNldCgnU3RyaWN0LVRyYW5zcG9ydC1TZWN1cml0eScsICdtYXgtYWdlPTMxNTM2MDAwJylcblxuICByZXR1cm4gbmV3IFJlc3BvbnNlKCc8IURPQ1RZUEUgaHRtbD4nICsgbWFya3VwLCB7XG4gICAgc3RhdHVzOiByZXNwb25zZVN0YXR1c0NvZGUsXG4gICAgaGVhZGVyczogcmVzcG9uc2VIZWFkZXJzLFxuICB9KVxufVxuIiwgIi8qKlxuICogQHJlbWl4LXJ1bi9yZWFjdCB2MS4xLjFcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIFJlbWl4IFNvZnR3YXJlIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UubWQgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqXG4gKiBAbGljZW5zZSBNSVRcbiAqL1xuZXhwb3J0IHsgRm9ybSwgTGluaywgTGlua3MsIExpdmVSZWxvYWQsIE1ldGEsIE5hdkxpbmssIE91dGxldCwgUHJlZmV0Y2hQYWdlTGlua3MsIFJlbWl4QnJvd3NlciwgUmVtaXhTZXJ2ZXIsIFNjcmlwdHMsIFNjcm9sbFJlc3RvcmF0aW9uLCB1c2VBY3Rpb25EYXRhLCB1c2VCZWZvcmVVbmxvYWQsIHVzZUNhdGNoLCB1c2VGZXRjaGVyLCB1c2VGZXRjaGVycywgdXNlRm9ybUFjdGlvbiwgdXNlSHJlZiwgdXNlTG9hZGVyRGF0YSwgdXNlTG9jYXRpb24sIHVzZU1hdGNoZXMsIHVzZU5hdmlnYXRlLCB1c2VOYXZpZ2F0aW9uVHlwZSwgdXNlT3V0bGV0LCB1c2VPdXRsZXRDb250ZXh0LCB1c2VQYXJhbXMsIHVzZVJlc29sdmVkUGF0aCwgdXNlU2VhcmNoUGFyYW1zLCB1c2VTdWJtaXQsIHVzZVRyYW5zaXRpb24gfSBmcm9tICdAcmVtaXgtcnVuL3JlYWN0JztcbiIsICIvKipcbiAqIEByZW1peC1ydW4vc2VydmVyLXJ1bnRpbWUgdjEuMS4xXG4gKlxuICogQ29weXJpZ2h0IChjKSBSZW1peCBTb2Z0d2FyZSBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFLm1kIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKlxuICogQGxpY2Vuc2UgTUlUXG4gKi9cbmV4cG9ydCB7IGNyZWF0ZUNvb2tpZSwgY3JlYXRlQ29va2llU2Vzc2lvblN0b3JhZ2UsIGNyZWF0ZU1lbW9yeVNlc3Npb25TdG9yYWdlLCBjcmVhdGVTZXNzaW9uLCBjcmVhdGVTZXNzaW9uU3RvcmFnZSwgaXNDb29raWUsIGlzU2Vzc2lvbiwganNvbiwgcmVkaXJlY3QgfSBmcm9tICdAcmVtaXgtcnVuL3NlcnZlci1ydW50aW1lJztcbiIsICJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IFNjcmlwdHMsIExpbmtzRnVuY3Rpb24sIHVzZUNhdGNoLCB1c2VMb2NhdGlvbiB9IGZyb20gJ3JlbWl4J1xuaW1wb3J0IHsgTGlua3MsIExpdmVSZWxvYWQsIE1ldGEsIE91dGxldCwgU2Nyb2xsUmVzdG9yYXRpb24sIE1ldGFGdW5jdGlvbiB9IGZyb20gJ3JlbWl4J1xuXG5pbXBvcnQgYXBwbGVUb3VjaEZhdkljb24gZnJvbSAnLi4vcHVibGljL2Zhdmljb24vZGFyay9hcHBsZS10b3VjaC1pY29uLnBuZydcbmltcG9ydCBsaWdodEFwcGxlVG91Y2hGYXZJY29uIGZyb20gJy4uL3B1YmxpYy9mYXZpY29uL2xpZ2h0L2FwcGxlLXRvdWNoLWljb24ucG5nJ1xuXG5pbXBvcnQgYmlnRGFya0Zhdkljb24gZnJvbSAnLi4vcHVibGljL2Zhdmljb24vZGFyay9mYXZpY29uLTMyeDMyLnBuZydcbmltcG9ydCBzbWFsbERhcmtGYXZJY29uIGZyb20gJy4uL3B1YmxpYy9mYXZpY29uL2RhcmsvZmF2aWNvbi0xNngxNi5wbmcnXG5cbmltcG9ydCBiaWdMaWdodEZhdkljb24gZnJvbSAnLi4vcHVibGljL2Zhdmljb24vbGlnaHQvZmF2aWNvbi0zMngzMi5wbmcnXG5pbXBvcnQgc21hbGxMaWdodEZhdkljb24gZnJvbSAnLi4vcHVibGljL2Zhdmljb24vbGlnaHQvZmF2aWNvbi0xNngxNi5wbmcnXG5cbmltcG9ydCBnbG9iYWxTdHlsZXNVcmwgZnJvbSAnfi9zdHlsZXMvZ2xvYmFsLmNzcydcbmltcG9ydCB0YWlsd2luZFN0eWxlc1VybCBmcm9tICd+L3N0eWxlcy90YWlsd2luZC5jc3MnXG5pbXBvcnQgZGFya1N0eWxlc1VybCBmcm9tICd+L3N0eWxlcy9kYXJrLmNzcydcblxuaW1wb3J0IHsgU2lkZWJhciwgRm91cjAwIH0gZnJvbSAnfi9jb21wb25lbnRzJ1xuaW1wb3J0ICogYXMgZ3RhZyBmcm9tICd+L3V0aWxzL2d0YWdzJ1xuXG5leHBvcnQgY29uc3QgbWV0YTogTWV0YUZ1bmN0aW9uID0gKCkgPT4ge1xuICByZXR1cm4ge1xuICAgICdhcHBsZS1tb2JpbGUtd2ViLWFwcC1jYXBhYmxlJzogJ3llcycsXG4gICAgJ2FwcGxlLW1vYmlsZS13ZWItYXBwLXN0YXR1cy1iYXItc3R5bGUnOiAnYmxhY2stdHJhbnNwYXJlbnQnLFxuICAgICdhcHBsZS1tb2JpbGUtd2ViLWFwcC10aXRsZSc6ICdNdXRodWt1bWFyJyxcbiAgICAnZm9ybWF0LWRldGVjdGlvbic6ICd0ZWxlcGhvbmU9bm8nLFxuICAgICdtb2JpbGUtd2ViLWFwcC1jYXBhYmxlJzogJ3llcycsXG4gICAgJ21zYXBwbGljYXRpb24tVGlsZUNvbG9yJzogJyMwMDAnLFxuICAgIGltYWdlOiAnL2ltYWdlcy9vZy5qcGcnLFxuICAgICdvZzppbWFnZSc6ICcvaW1hZ2VzL29nLmpwZycsXG4gICAgJ29nOmxvY2FsZSc6ICdlbicsXG4gICAgJ29nOnNpdGVfbmFtZSc6ICdOdWxsaXNoLmluJyxcbiAgICAndHdpdHRlcjpjYXJkJzogJ3N1bW1hcnlfbGFyZ2VfaW1hZ2UnLFxuICAgICd0d2l0dGVyOmNyZWF0b3InOiAnQGFtX211dGh1a3VtYXInLFxuICAgICd0d2l0dGVyOnNpdGUnOiAnQGFtX211dGh1a3VtYXInLFxuICAgICdYLVVBLUNvbXBhdGlibGUnOiAnSUU9ZWRnZSxjaHJvbWU9MScsXG4gICAgJ29nOnR5cGUnOiAnd2Vic2l0ZScsXG4gICAgYXV0aG9yOiAnTXV0aHVrdW1hcicsXG4gICAgSGFuZGhlbGRGcmllbmRseTogJ1RydWUnLFxuICAgIGxhbmd1YWdlOiAnZW4nLFxuICAgIE1vYmlsZU9wdGltaXplZDogJzMyMCcsXG4gICAgcGFnZW5hbWU6ICdNdXRodWt1bWFyJyxcbiAgICB0aXRsZTogJ011dGh1a3VtYXInLFxuICAgIGRlc2NyaXB0aW9uOlxuICAgICAgJ1R1dG9yaWFscyBhbmQgbm90ZXMgb24gUmVhY3QsIEphdmFzY3JpcHQsIENTUyBhbmQgbW9yZS4gQWxzbyBQZXJzb25hbCBib29rIHJldmlld3MgYW5kIHBlcnNvbmFsIHRob3VnaHRzIG9uIHN0dWZmIGFuZCBtb3JlIS4nLFxuICAgIHZpZXdwb3J0OiAnd2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTEnLFxuICAgIHJvYm90czogJ2luZGV4LCBmb2xsb3cnLFxuICB9XG59XG5cbmV4cG9ydCBjb25zdCBsaW5rczogTGlua3NGdW5jdGlvbiA9ICgpID0+IHtcbiAgcmV0dXJuIFtcbiAgICB7IHJlbDogJ3N0eWxlc2hlZXQnLCBocmVmOiBnbG9iYWxTdHlsZXNVcmwgfSxcbiAgICB7IHJlbDogJ3N0eWxlc2hlZXQnLCBocmVmOiB0YWlsd2luZFN0eWxlc1VybCB9LFxuICAgIHsgcmVsOiAnc3R5bGVzaGVldCcsIGhyZWY6IGRhcmtTdHlsZXNVcmwsIG1lZGlhOiAnKHByZWZlcnMtY29sb3Itc2NoZW1lOiBkYXJrKScgfSxcbiAgICB7XG4gICAgICByZWw6ICdwcmVsb2FkJyxcbiAgICAgIGFzOiAnZm9udCcsXG4gICAgICBocmVmOiAnL2ZvbnRzL2ludGVyLXY3LWxhdGluLXJlZ3VsYXIud29mZicsXG4gICAgICB0eXBlOiAnZm9udC93b2ZmJyxcbiAgICAgIGNyb3NzT3JpZ2luOiAnYW5vbnltb3VzJyxcbiAgICB9LFxuICAgIHtcbiAgICAgIHJlbDogJ3ByZWxvYWQnLFxuICAgICAgYXM6ICdmb250JyxcbiAgICAgIGhyZWY6ICcvZm9udHMvaW50ZXItdjctbGF0aW4tcmVndWxhci53b2ZmMicsXG4gICAgICB0eXBlOiAnZm9udC93b2ZmMicsXG4gICAgICBjcm9zc09yaWdpbjogJ2Fub255bW91cycsXG4gICAgfSxcblxuICAgIHtcbiAgICAgIHJlbDogJ2FwcGxlLXRvdWNoLWljb24nLFxuICAgICAgc2l6ZXM6ICcxODB4MTgwJyxcbiAgICAgIGhyZWY6IGFwcGxlVG91Y2hGYXZJY29uLFxuICAgICAgbWVkaWE6ICcocHJlZmVycy1jb2xvci1zY2hlbWU6IGRhcmspJyxcbiAgICB9LFxuICAgIHtcbiAgICAgIHJlbDogJ2ljb24nLFxuICAgICAgdHlwZTogJ2ltYWdlL3BuZycsXG4gICAgICBzaXplczogJzMyeDMyJyxcbiAgICAgIGhyZWY6IGJpZ0RhcmtGYXZJY29uLFxuICAgICAgbWVkaWE6ICcocHJlZmVycy1jb2xvci1zY2hlbWU6IGRhcmspJyxcbiAgICB9LFxuICAgIHtcbiAgICAgIHJlbDogJ2ljb24nLFxuICAgICAgdHlwZTogJ2ltYWdlL3BuZycsXG4gICAgICBzaXplczogJzE2eDE2JyxcbiAgICAgIGhyZWY6IHNtYWxsRGFya0Zhdkljb24sXG4gICAgICBtZWRpYTogJyhwcmVmZXJzLWNvbG9yLXNjaGVtZTogZGFyayknLFxuICAgIH0sXG4gICAge1xuICAgICAgcmVsOiAnbWFuaWZlc3QnLFxuICAgICAgaHJlZjogJy9mYXZpY29uL2Rhcmsvc2l0ZS53ZWJtYW5pZmVzdCcsXG4gICAgICBtZWRpYTogJyhwcmVmZXJzLWNvbG9yLXNjaGVtZTogZGFyayknLFxuICAgIH0sXG5cbiAgICB7XG4gICAgICByZWw6ICdhcHBsZS10b3VjaC1pY29uJyxcbiAgICAgIHNpemVzOiAnMTgweDE4MCcsXG4gICAgICBocmVmOiBsaWdodEFwcGxlVG91Y2hGYXZJY29uLFxuICAgICAgbWVkaWE6ICcocHJlZmVycy1jb2xvci1zY2hlbWU6IGxpZ2h0KScsXG4gICAgfSxcbiAgICB7XG4gICAgICByZWw6ICdpY29uJyxcbiAgICAgIHR5cGU6ICdpbWFnZS9wbmcnLFxuICAgICAgc2l6ZXM6ICczMngzMicsXG4gICAgICBocmVmOiBiaWdMaWdodEZhdkljb24sXG4gICAgICBtZWRpYTogJyhwcmVmZXJzLWNvbG9yLXNjaGVtZTogbGlnaHQpJyxcbiAgICB9LFxuICAgIHtcbiAgICAgIHJlbDogJ2ljb24nLFxuICAgICAgdHlwZTogJ2ltYWdlL3BuZycsXG4gICAgICBzaXplczogJzE2eDE2JyxcbiAgICAgIGhyZWY6IHNtYWxsTGlnaHRGYXZJY29uLFxuICAgICAgbWVkaWE6ICcocHJlZmVycy1jb2xvci1zY2hlbWU6IGxpZ2h0KScsXG4gICAgfSxcbiAgICB7XG4gICAgICByZWw6ICdtYW5pZmVzdCcsXG4gICAgICBocmVmOiAnL2Zhdmljb24vbGlnaHQvc2l0ZS53ZWJtYW5pZmVzdCcsXG4gICAgICBtZWRpYTogJyhwcmVmZXJzLWNvbG9yLXNjaGVtZTogbGlnaHQpJyxcbiAgICB9LFxuICBdXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFwcCgpIHtcbiAgY29uc3QgbG9jYXRpb24gPSB1c2VMb2NhdGlvbigpXG5cbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICBndGFnLnBhZ2V2aWV3KGxvY2F0aW9uLnBhdGhuYW1lKVxuICB9LCBbbG9jYXRpb25dKVxuXG4gIHJldHVybiAoXG4gICAgPERvY3VtZW50PlxuICAgICAgPExheW91dD5cbiAgICAgICAgPE91dGxldCAvPlxuICAgICAgPC9MYXlvdXQ+XG4gICAgPC9Eb2N1bWVudD5cbiAgKVxufVxuXG5mdW5jdGlvbiBEb2N1bWVudCh7IGNoaWxkcmVuIH06IHsgY2hpbGRyZW46IFJlYWN0LlJlYWN0Tm9kZSB9KSB7XG4gIHJldHVybiAoXG4gICAgPGh0bWwgbGFuZz1cImVuXCI+XG4gICAgICA8aGVhZD5cbiAgICAgICAgPG1ldGEgY2hhclNldD1cInV0Zi04XCIgLz5cbiAgICAgICAgPG1ldGEgbmFtZT1cImNvbG9yLXNjaGVtZVwiIGNvbnRlbnQ9XCJkYXJrIGxpZ2h0XCIgLz5cbiAgICAgICAgPG1ldGEgbmFtZT1cInRoZW1lLWNvbG9yXCIgbWVkaWE9XCIocHJlZmVycy1jb2xvci1zY2hlbWU6IGxpZ2h0KVwiIGNvbnRlbnQ9XCJ3aGl0ZVwiIC8+XG4gICAgICAgIDxtZXRhIG5hbWU9XCJ0aGVtZS1jb2xvclwiIG1lZGlhPVwiKHByZWZlcnMtY29sb3Itc2NoZW1lOiBkYXJrKVwiIGNvbnRlbnQ9XCJibGFja1wiIC8+XG4gICAgICAgIDxNZXRhIC8+XG4gICAgICAgIDxMaW5rcyAvPlxuICAgICAgPC9oZWFkPlxuICAgICAgPGJvZHkgY2xhc3NOYW1lPVwiYW50aWFsaWFzZWQgYmctY29sb3JcIj5cbiAgICAgICAgPHNjcmlwdCBhc3luYyBzcmM9e2BodHRwczovL3d3dy5nb29nbGV0YWdtYW5hZ2VyLmNvbS9ndGFnL2pzP2lkPSR7Z3RhZy5HQV9UUkFDS0lOR19JRH1gfSAvPlxuICAgICAgICA8c2NyaXB0XG4gICAgICAgICAgYXN5bmNcbiAgICAgICAgICBpZD1cImd0YWctaW5pdFwiXG4gICAgICAgICAgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3tcbiAgICAgICAgICAgIF9faHRtbDogYFxuICAgICAgICAgICAgd2luZG93LmRhdGFMYXllciA9IHdpbmRvdy5kYXRhTGF5ZXIgfHwgW107XG4gICAgICAgICAgICBmdW5jdGlvbiBndGFnKCl7ZGF0YUxheWVyLnB1c2goYXJndW1lbnRzKTt9XG4gICAgICAgICAgICBndGFnKCdqcycsIG5ldyBEYXRlKCkpO1xuXG4gICAgICAgICAgICBndGFnKCdjb25maWcnLCAnJHtndGFnLkdBX1RSQUNLSU5HX0lEfScsIHtcbiAgICAgICAgICAgICAgcGFnZV9wYXRoOiB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICBgLFxuICAgICAgICAgIH19XG4gICAgICAgIC8+XG4gICAgICAgIHtjaGlsZHJlbn1cbiAgICAgICAgPFNjcmlwdHMgLz5cbiAgICAgICAgPFNjcm9sbFJlc3RvcmF0aW9uIC8+XG4gICAgICAgIHtwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50JyAmJiA8TGl2ZVJlbG9hZCAvPn1cbiAgICAgIDwvYm9keT5cbiAgICA8L2h0bWw+XG4gIClcbn1cblxuZnVuY3Rpb24gTGF5b3V0KHsgY2hpbGRyZW4gfTogeyBjaGlsZHJlbjogUmVhY3QuUmVhY3ROb2RlIH0pIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggdy1mdWxsIGgtc2NyZWVuXCI+XG4gICAgICB7LyogPE5hdmJhciAvPiAqL31cbiAgICAgIDxTaWRlYmFyIC8+XG4gICAgICA8bWFpbiBjbGFzc05hbWU9XCJ3LWZ1bGwgbWF4LWgtZnVsbCBvdmVyZmxvdy15LWF1dG9cIj57Y2hpbGRyZW59PC9tYWluPlxuICAgICAgey8qIDxGb290ZXIgLz4gKi99XG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIENhdGNoQm91bmRhcnkoKSB7XG4gIGNvbnN0IGNhdWdodCA9IHVzZUNhdGNoKClcblxuICBjb25zdCBtZXNzYWdlID0gY2F1Z2h0LnN0YXR1cyA9PT0gNDA0ID8gY2F1Z2h0LmRhdGEubWVzc2FnZSA6ICdPb3BzaWVzLi4gU29tZXRoaW5nIHdlbnQgd3JvbmcuJ1xuXG4gIGlmIChjYXVnaHQuc3RhdHVzID09PSA0MDQpIHtcbiAgICByZXR1cm4gPEZvdXIwMCB0aXRsZT1cIjQwNFwiIG1lc3NhZ2U9e21lc3NhZ2V9IGxpbms9XCIvYmxvZ1wiIC8+XG4gIH1cblxuICByZXR1cm4gPEZvdXIwMCB0aXRsZT1cIjUwMFwiIG1lc3NhZ2U9e21lc3NhZ2V9IGxpbms9XCIvYmxvZ1wiIC8+XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBFcnJvckJvdW5kYXJ5KCkge1xuICByZXR1cm4gKFxuICAgIDxEb2N1bWVudD5cbiAgICAgIDxMYXlvdXQ+XG4gICAgICAgIDxGb3VyMDAgdGl0bGU9XCI1MDBcIiBtZXNzYWdlPVwiT29wc2llcy4uLiBTb21ldGhpbmcgd2VudCB3cm9uZy5cIiBsaW5rPVwiL1wiIC8+XG4gICAgICA8L0xheW91dD5cbiAgICA8L0RvY3VtZW50PlxuICApXG59XG4iLCAiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgY2xzeCBmcm9tICdjbHN4J1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDb250YWluZXIoe1xuICBjaGlsZHJlbixcbiAgY2xhc3NOYW1lID0gdW5kZWZpbmVkLFxufToge1xuICBjaGlsZHJlbjogUmVhY3QuUmVhY3ROb2RlXG4gIGNsYXNzTmFtZT86IHN0cmluZyB8IHVuZGVmaW5lZFxufSkge1xuICBjb25zdCBoYXNQeSA9IGNsYXNzTmFtZT8uaW5jbHVkZXMoJ3B5JylcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17Y2xzeCgncHgtOCBjb250YWluZXIgbWF4LXctNXhsIG14LWF1dG8nLCB7ICdweS0yJzogIWhhc1B5IH0sIGNsYXNzTmFtZSl9PlxuICAgICAge2NoaWxkcmVufVxuICAgIDwvZGl2PlxuICApXG59XG4iLCAiaW1wb3J0IHsgSGlPdXRsaW5lQXJyb3dMZWZ0IH0gZnJvbSAncmVhY3QtaWNvbnMvaGknXG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAncmVtaXgnXG5pbXBvcnQgY2xzeCBmcm9tICdjbHN4J1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBHb0JhY2soe1xuICBjbGFzc05hbWUsXG4gIGxpbmssXG59OiB7XG4gIGNsYXNzTmFtZT86IHN0cmluZyB8IHVuZGVmaW5lZFxuICBsaW5rOiBzdHJpbmdcbn0pIHtcbiAgcmV0dXJuIChcbiAgICA8TGlua1xuICAgICAgdG89e2xpbmt9XG4gICAgICBjbGFzc05hbWU9e2Nsc3goXG4gICAgICAgICdmbGV4IGl0ZW1zLWNlbnRlciBzZWxmLXN0YXJ0IGp1c3RpZnktc3RhcnQgbWItMiB0ZXh0LXNtIGxpZ2h0LWZvbnQtY29sb3InLFxuICAgICAgICBjbGFzc05hbWUsXG4gICAgICApfVxuICAgID5cbiAgICAgIDxIaU91dGxpbmVBcnJvd0xlZnQgLz5cbiAgICAgIDxwIGNsYXNzTmFtZT1cInNlbGYtc3RhcnQgbWwtMiB0ZXh0LXNtIG1kOnRleHQtYmFzZVwiPkdvIEJhY2s8L3A+XG4gICAgPC9MaW5rPlxuICApXG59XG4iLCAiaW1wb3J0IENvbnRhaW5lciBmcm9tICcuL2NvbnRhaW5lcidcbmltcG9ydCBHb0JhY2sgZnJvbSAnLi9nby1iYWNrJ1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBGb3VyMDAoe1xuICBtZXNzYWdlLFxuICB0aXRsZSxcbiAgbGluayxcbn06IHtcbiAgbGluazogc3RyaW5nXG4gIHRpdGxlOiBzdHJpbmdcbiAgbWVzc2FnZTogc3RyaW5nXG59KSB7XG4gIHJldHVybiAoXG4gICAgPENvbnRhaW5lciBjbGFzc05hbWU9XCJweS02MFwiPlxuICAgICAgPGgxIGNsYXNzTmFtZT1cImZvbnQtYm9sZCB0ZXh0LTd4bFwiPnt0aXRsZX08L2gxPlxuICAgICAgPHAgY2xhc3NOYW1lPVwibXQtMiB0ZXh0LXhsIGZvbnQtYm9sZCBsaWdodC1mb250LWNvbG9yXCI+e21lc3NhZ2V9PC9wPlxuICAgICAgPEdvQmFjayBjbGFzc05hbWU9XCJtdC04IGxpbmstZm9udC1jb2xvclwiIGxpbms9e2xpbmt9IC8+XG4gICAgPC9Db250YWluZXI+XG4gIClcbn1cbiIsICJpbXBvcnQgeyBMaW5rLCB1c2VMb2NhdGlvbiB9IGZyb20gJ3JlbWl4J1xuXG5pbXBvcnQgeyBEYXRlIH0gZnJvbSAnLidcbmltcG9ydCB7IFBvc3QgfSBmcm9tICd+L3V0aWxzL2Ntcy5zZXJ2ZXInXG5pbXBvcnQgY2xzeCBmcm9tICdjbHN4J1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBCbG9nUG9zdCh7XG4gIHRpdGxlLFxuICBwdWJsaXNoZWRBdCxcbiAgZXhjZXJwdCxcbiAgc2x1Zyxcbn06IFBpY2s8UG9zdCwgJ3RpdGxlJyB8ICdwdWJsaXNoZWRBdCcgfCAnZXhjZXJwdCcgfCAnc2x1Zyc+KSB7XG4gIGNvbnN0IGxvY2F0aW9uID0gdXNlTG9jYXRpb24oKVxuICByZXR1cm4gKFxuICAgIDxMaW5rXG4gICAgICB0bz17YC9ibG9nLyR7c2x1Z31gfVxuICAgICAgcHJlZmV0Y2g9XCJyZW5kZXJcIlxuICAgICAgY2xhc3NOYW1lPXtjbHN4KFxuICAgICAgICAnZmxleCBmbGV4LWNvbCBnYXAtMiB3LWZ1bGwgbWItMiBob3ZlcjpiZy1bY29sb3I6dmFyKC0tZ3JheSldIHJvdW5kZWQtbWQgcC0yIHB4LTQnLFxuICAgICAgICB7XG4gICAgICAgICAgJ2JnLVtjb2xvcjp2YXIoLS1ncmF5KV0nOiBsb2NhdGlvbi5wYXRobmFtZSA9PT0gYC9ibG9nLyR7c2x1Z31gLFxuICAgICAgICB9LFxuICAgICAgKX1cbiAgICA+XG4gICAgICA8aDIgY2xhc3NOYW1lPVwiZm9udC1zZW1pYm9sZFwiPnt0aXRsZX08L2gyPlxuICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC10cnVuY2F0ZSB0ZXh0LVtjb2xvcjp2YXIoLS1ncmF5KV0vWzAuM11cIj57ZXhjZXJwdH08L3A+XG4gICAgICA8RGF0ZSBjbGFzc05hbWU9XCJsaWdodC1mb250LWNvbG9yXCIgZGF0ZT17cHVibGlzaGVkQXR9IC8+XG4gICAgPC9MaW5rPlxuICApXG59XG4iLCAiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgbW9tZW50IGZyb20gJ21vbWVudCdcblxuY29uc3QgRGF0ZTogUmVhY3QuRkM8eyBkYXRlOiBzdHJpbmcgfCBudW1iZXIgfCBEYXRlOyBjbGFzc05hbWU/OiBzdHJpbmcgfCB1bmRlZmluZWQgfT4gPSAoXG4gIHByb3BzLFxuKSA9PiB7XG4gIGNvbnN0IGRhdGUgPSBwcm9wcy5kYXRlXG4gIHJldHVybiBkYXRlID8gKFxuICAgIDxwIHsuLi5wcm9wc30gY2xhc3NOYW1lPXtwcm9wcy5jbGFzc05hbWV9PlxuICAgICAge21vbWVudChkYXRlKS5mb3JtYXQoJ2RkZGQsIE1NTU0gRG8gWVlZWScpfVxuICAgIDwvcD5cbiAgKSA6IG51bGxcbn1cblxuZXhwb3J0IGRlZmF1bHQgRGF0ZVxuIiwgImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IGNsc3ggZnJvbSAnY2xzeCdcblxuaW1wb3J0IHsgQ29udGFpbmVyIH0gZnJvbSAnLidcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTWFya2Rvd24oe1xuICBjaGlsZHJlbixcbiAgY2xhc3NOYW1lLFxufToge1xuICBjaGlsZHJlbjogUmVhY3QuUmVhY3ROb2RlXG4gIGNsYXNzTmFtZT86IHN0cmluZyB8IHVuZGVmaW5lZFxufSkge1xuICByZXR1cm4gKFxuICAgIDxDb250YWluZXIgY2xhc3NOYW1lPXtjbHN4KCdtYXgtdy0zeGwnLCBjbGFzc05hbWUpfT5cbiAgICAgIDxhcnRpY2xlIGNsYXNzTmFtZT1cInB5LTIgcHJvc2UgbWQ6cHktNiBtYXgtdy1ub25lIHByb3NlLWJsdWUgZGFyazpwcm9zZS1pbnZlcnRcIj5cbiAgICAgICAge2NoaWxkcmVufVxuICAgICAgPC9hcnRpY2xlPlxuICAgIDwvQ29udGFpbmVyPlxuICApXG59XG4iLCAiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAncmVtaXgnXG5pbXBvcnQgY2xzeCBmcm9tICdjbHN4J1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBMaW5rQnV0dG9uKHtcbiAgY2hpbGRyZW4sXG4gIHRvLFxuICBjbGFzc05hbWUsXG59OiB7XG4gIGNoaWxkcmVuOiBSZWFjdC5SZWFjdE5vZGVcbiAgdG86IHN0cmluZ1xuICBjbGFzc05hbWU/OiBzdHJpbmcgfCB1bmRlZmluZWRcbn0pIHtcbiAgcmV0dXJuIChcbiAgICA8TGlua1xuICAgICAgdG89e3RvfVxuICAgICAgY2xhc3NOYW1lPXtjbHN4KFxuICAgICAgICAncC0zIG1kOnAtNCB0ZXh0LXNtIG1kOnRleHQtYmFzZSBmb250LWJvbGQgdGV4dC1jZW50ZXIgdGV4dC1ncmF5LTYwMCB0cmFuc2l0aW9uLWFsbCBib3JkZXIgcm91bmRlZC1tZCBtaW4tdy1bMTNyZW1dIGJnLWNvbG9yIGJvcmRlci1jb2xvciBob3Zlcjpib3JkZXItYmxhY2sgaG92ZXI6dGV4dC1ncmF5LTkwMCBkYXJrOmJvcmRlci13aGl0ZSBkYXJrOmxpZ2h0LWZvbnQtY29sb3IgZGFyazpib3JkZXItY29sb3IgZGFyazpob3Zlcjpib3JkZXItd2hpdGUgZGFyazpob3Zlcjp0ZXh0LXdoaXRlJyxcbiAgICAgICAgY2xhc3NOYW1lLFxuICAgICAgKX1cbiAgICA+XG4gICAgICB7Y2hpbGRyZW59XG4gICAgPC9MaW5rPlxuICApXG59XG4iLCAiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgY2xzeCBmcm9tICdjbHN4J1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBRdW90ZSh7XG4gIGNoaWxkcmVuLFxuICBhdXRob3IsXG4gIGNsYXNzTmFtZSxcbn06IHtcbiAgY2hpbGRyZW46IFJlYWN0LlJlYWN0Tm9kZVxuICBhdXRob3I6IHN0cmluZ1xuICBjbGFzc05hbWU/OiBzdHJpbmcgfCB1bmRlZmluZWRcbn0pIHtcbiAgcmV0dXJuIChcbiAgICA8ZmlndXJlIGNsYXNzTmFtZT17Y2xzeCgndy1mdWxsIG14LWF1dG8gb3ZlcmZsb3ctaGlkZGVuIGxnOnctZml0JywgY2xhc3NOYW1lKX0+XG4gICAgICA8YmxvY2txdW90ZSBjbGFzc05hbWU9XCJtdC00IHAtNCBsZzpwLTYgYmctZ3JheS0yMDAgZGFyazpiZy1bY29sb3I6dmFyKC0tcHJlLWNvbG9yKV0gcm91bmRlZC1tZCBiZWZvcmU6Y29udGVudC1bJ1x1MjAxQyddIGFmdGVyOmNvbnRlbnQtWydcdTIwMUQnXVwiPlxuICAgICAgICB7Y2hpbGRyZW59XG4gICAgICA8L2Jsb2NrcXVvdGU+XG4gICAgICA8ZmlnY2FwdGlvbiBjbGFzc05hbWU9XCJtdC0yIHRleHQtcmlnaHQgYmVmb3JlOmNvbnRlbnQtWyctJ10gYmVmb3JlOm1yLTEgbGlnaHQtZm9udC1jb2xvclwiPlxuICAgICAgICB7YXV0aG9yfVxuICAgICAgPC9maWdjYXB0aW9uPlxuICAgIDwvZmlndXJlPlxuICApXG59XG4iLCAiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgY2xzeCBmcm9tICdjbHN4J1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lU2VjdGlvbih7XG4gIGNoaWxkcmVuLFxuICBzaG93Qm9yZGVyID0gdHJ1ZSxcbiAgdGl0bGUsXG59OiB7XG4gIGNoaWxkcmVuOiBSZWFjdC5SZWFjdE5vZGVcbiAgc2hvd0JvcmRlcj86IGJvb2xlYW5cbiAgdGl0bGU6IHN0cmluZ1xufSkge1xuICByZXR1cm4gKFxuICAgIDxkaXZcbiAgICAgIGNsYXNzTmFtZT17Y2xzeCgncHktMTAgbGc6cHktMTYnLCB7XG4gICAgICAgICdib3JkZXItYiBib3JkZXItY29sb3InOiBzaG93Qm9yZGVyLFxuICAgICAgfSl9XG4gICAgPlxuICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQteGwgZm9udC1ib2xkIG1kOnRleHQtMnhsXCI+e3RpdGxlfTwvaDI+XG4gICAgICB7Y2hpbGRyZW59XG4gICAgPC9kaXY+XG4gIClcbn1cbiIsICJpbXBvcnQgdHlwZSB7IEljb25UeXBlIH0gZnJvbSAncmVhY3QtaWNvbnMnXG5cbmltcG9ydCBjbHN4IGZyb20gJ2Nsc3gnXG5cbmltcG9ydCB7IEhpSG9tZSB9IGZyb20gJ3JlYWN0LWljb25zL2hpJ1xuaW1wb3J0IHsgUmlRdWlsbFBlbkZpbGwgfSBmcm9tICdyZWFjdC1pY29ucy9yaSdcbmltcG9ydCB7IEJzRmlsbEJvb2ttYXJrc0ZpbGwgfSBmcm9tICdyZWFjdC1pY29ucy9icydcbmltcG9ydCB7IEdyU3RhY2tPdmVyZmxvdyB9IGZyb20gJ3JlYWN0LWljb25zL2dyJ1xuaW1wb3J0IHsgQnNHaXRodWIgfSBmcm9tICdyZWFjdC1pY29ucy9icydcbmltcG9ydCB7IFNpVHdpdHRlciB9IGZyb20gJ3JlYWN0LWljb25zL3NpJ1xuaW1wb3J0IHsgSW9Mb2dvUnNzIH0gZnJvbSAncmVhY3QtaWNvbnMvaW8nXG5pbXBvcnQgeyBIaUV4dGVybmFsTGluayB9IGZyb20gJ3JlYWN0LWljb25zL2hpJ1xuaW1wb3J0IHsgTGluaywgdXNlTG9jYXRpb24gfSBmcm9tICdyZW1peCdcblxuY29uc3Qgc29jaWFscyA9IFtcbiAge1xuICAgIEljb246IEJzR2l0aHViLFxuICAgIGhyZWY6ICdodHRwczovL3JkLm51bGxpc2guaW4vZ2l0aHViJyxcbiAgICBpc0xhc3Q6IGZhbHNlLFxuICAgIGFsdDogYE11dGh1a3VtYXIncyBnaXRodWIgcHJvZmlsZSBsaW5rYCxcbiAgICAnYXJpYS1sYWJlbCc6ICdHaXRodWInLFxuICB9LFxuICB7XG4gICAgSWNvbjogU2lUd2l0dGVyLFxuICAgIGhyZWY6ICdodHRwczovL3JkLm51bGxpc2guaW4vdHdpdHRlcicsXG4gICAgaXNMYXN0OiBmYWxzZSxcbiAgICBhbHQ6IGBNdXRodWt1bWFyJ3MgdHdpdHRlciBwcm9maWxlIGxpbmtgLFxuICAgICdhcmlhLWxhYmVsJzogJ1R3aXR0ZXInLFxuICB9LFxuICB7XG4gICAgSWNvbjogSW9Mb2dvUnNzLFxuICAgIGhyZWY6ICcvcnNzLnhtbCcsXG4gICAgaXNMYXN0OiB0cnVlLFxuICAgIGFsdDogYE51bGxpc2guaW4gcnNzIGZlZWQgbGlua2AsXG4gICAgJ2FyaWEtbGFiZWwnOiAnUnNzIGZlZWQnLFxuICB9LFxuXVxuXG5mdW5jdGlvbiBOYXZMaW5rKHtcbiAgSWNvbixcbiAgaHJlZixcbiAgcGF0aG5hbWUsXG4gIGV4dGVybmFsLFxuICAuLi5kZWxlZ2F0ZWRcbn06IHtcbiAgZXh0ZXJuYWw/OiBib29sZWFuXG4gIEljb246IEljb25UeXBlXG4gIGhyZWY6IHN0cmluZ1xuICBwYXRobmFtZTogc3RyaW5nXG59KSB7XG4gIGNvbnN0IGxvY2F0aW9uID0gdXNlTG9jYXRpb24oKVxuXG4gIGNvbnN0IGN1cnJlbnRQYXRobmFtZSA9IGxvY2F0aW9uLnBhdGhuYW1lXG5cbiAgY29uc3QgaGlnaGxpZ2h0ID0gaHJlZiA9PT0gY3VycmVudFBhdGhuYW1lXG5cbiAgY29uc3QgQ29tcG9uZW50ID0gZXh0ZXJuYWxcbiAgICA/IChwcm9wczogeyBocmVmOiBzdHJpbmc7IGNsYXNzTmFtZTogc3RyaW5nIH0pID0+IChcbiAgICAgICAgPGEgey4uLnByb3BzfSB0YXJnZXQ9XCJfYmxhbmtcIiByZWw9XCJub3JlZmVycmVyXCIgLz5cbiAgICAgIClcbiAgICA6IExpbmtcblxuICByZXR1cm4gKFxuICAgIDxDb21wb25lbnRcbiAgICAgIHRvPXtocmVmfVxuICAgICAgaHJlZj17aHJlZn1cbiAgICAgIGNsYXNzTmFtZT17Y2xzeCgnZm9udC1zZW1pYm9sZCBmbGV4IGl0ZW1zLWNlbnRlciBwLTIgcm91bmRlZC1tZCcsIHtcbiAgICAgICAgJ2JnLVtjb2xvcjp2YXIoLS1ncmF5KV0nOiBoaWdobGlnaHQsXG4gICAgICAgICdob3ZlcjpiZy1bY29sb3I6dmFyKC0tZ3JheSldJzogIWhpZ2hsaWdodCxcbiAgICAgIH0pfVxuICAgICAgey4uLmRlbGVnYXRlZH1cbiAgICA+XG4gICAgICA8SWNvbiBzaXplPXsxNX0gLz5cbiAgICAgIDxwIGNsYXNzTmFtZT1cIm1sLTNcIj57cGF0aG5hbWV9PC9wPlxuICAgICAge2V4dGVybmFsID8gPEhpRXh0ZXJuYWxMaW5rIGNsYXNzTmFtZT1cIm1sLWF1dG9cIiBzaXplPXsxNX0gLz4gOiBudWxsfVxuICAgIDwvQ29tcG9uZW50PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNpZGViYXIoKSB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGdhcC02IHAtNCB0ZXh0LXNtIGJvcmRlci1yIGJvcmRlci1jb2xvciBoLXNjcmVlbiBtaW4tdy1bMThyZW1dIFwiPlxuICAgICAgPGgyIGNsYXNzTmFtZT1cImZvbnQtYm9sZFwiPk11dGh1a3VtYXI8L2gyPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGdhcC0xXCI+XG4gICAgICAgIDxOYXZMaW5rIEljb249e0hpSG9tZX0gaHJlZj1cIi9cIiBwYXRobmFtZT1cIkhvbWVcIiAvPlxuICAgICAgICA8TmF2TGluayBJY29uPXtSaVF1aWxsUGVuRmlsbH0gaHJlZj1cIi9ibG9nXCIgcGF0aG5hbWU9XCJXcml0aW5nc1wiIC8+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBnYXAtMVwiPlxuICAgICAgICA8aDIgY2xhc3NOYW1lPVwicHgtMiBtYi00IHRleHQtZ3JheS00MDBcIj5NZTwvaDI+XG4gICAgICAgIDxOYXZMaW5rIEljb249e0JzRmlsbEJvb2ttYXJrc0ZpbGx9IGhyZWY9XCIvYm9va21hcmtzXCIgcGF0aG5hbWU9XCJCb29rbWFya3NcIiAvPlxuICAgICAgICA8TmF2TGluayBJY29uPXtHclN0YWNrT3ZlcmZsb3d9IGhyZWY9XCIvc3RhY2tzXCIgcGF0aG5hbWU9XCJTdGFja1wiIC8+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBnYXAtMVwiPlxuICAgICAgICA8aDIgY2xhc3NOYW1lPVwicHgtMiBtYi00IHRleHQtZ3JheS00MDBcIj5PbmxpbmU8L2gyPlxuICAgICAgICB7c29jaWFscy5tYXAoKHByb3BzKSA9PiAoXG4gICAgICAgICAgPE5hdkxpbmsgcGF0aG5hbWU9e3Byb3BzWydhcmlhLWxhYmVsJ119IHsuLi5wcm9wc30ga2V5PXtwcm9wcy5ocmVmfSBleHRlcm5hbCAvPlxuICAgICAgICApKX1cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApXG59XG4iLCAiZXhwb3J0IGNvbnN0IEdBX1RSQUNLSU5HX0lEID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJyA/ICdHLVFOTU0yR1NEWUonIDogJydcblxuZGVjbGFyZSBnbG9iYWwge1xuICBpbnRlcmZhY2UgV2luZG93IHtcbiAgICBndGFnOiAob3B0aW9uOiBzdHJpbmcsIGdhVHJhY2tpbmdJZDogc3RyaW5nLCBvcHRpb25zOiBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPikgPT4gdm9pZFxuICB9XG59XG5cbmV4cG9ydCBjb25zdCBwYWdldmlldyA9ICh1cmw6IHN0cmluZykgPT4ge1xuICB3aW5kb3cuZ3RhZygnY29uZmlnJywgR0FfVFJBQ0tJTkdfSUQsIHtcbiAgICBwYWdlX3BhdGg6IHVybCxcbiAgfSlcbn1cblxuZXhwb3J0IGNvbnN0IGV2ZW50ID0gKHsgYWN0aW9uLCBjYXRlZ29yeSwgbGFiZWwsIHZhbHVlIH06IFJlY29yZDxzdHJpbmcsIHN0cmluZz4pID0+IHtcbiAgd2luZG93Lmd0YWcoJ2V2ZW50JywgYWN0aW9uLCB7XG4gICAgZXZlbnRfY2F0ZWdvcnk6IGNhdGVnb3J5LFxuICAgIGV2ZW50X2xhYmVsOiBsYWJlbCxcbiAgICB2YWx1ZTogdmFsdWUsXG4gIH0pXG59XG4iLCAiaW1wb3J0IHsgTG9hZGVyRnVuY3Rpb24gfSBmcm9tICdyZW1peCdcbmltcG9ydCB7IGdldFBvc3RzIH0gZnJvbSAnfi91dGlscy9jbXMuc2VydmVyJ1xuXG5jb25zdCBnZXRTaXRlTWFwVGV4dCA9IGFzeW5jICgpID0+IHtcbiAgY29uc3QgYmxvZ3MgPSAoYXdhaXQgZ2V0UG9zdHMoKSkgPz8gW11cbiAgcmV0dXJuIGBcbjw/eG1sIHZlcnNpb249XCIxLjBcIiBlbmNvZGluZz1cIlVURi04XCI/PlxuPHVybHNldCB4bWxucz1cImh0dHA6Ly93d3cuc2l0ZW1hcHMub3JnL3NjaGVtYXMvc2l0ZW1hcC8wLjlcIj5cbiAgPHVybD5cbiAgICA8bG9jPmh0dHBzOi8vd3d3Lm51bGxpc2guaW4vPC9sb2M+XG4gICAgPGxhc3Rtb2Q+MjAyMS0xMi0yODwvbGFzdG1vZD5cbiAgPC91cmw+XG4gIDx1cmw+XG4gICAgPGxvYz5odHRwczovL3d3dy5udWxsaXNoLmluL2NoYW5nZWxvZzwvbG9jPlxuICAgIDxsYXN0bW9kPjIwMjEtMTItMjk8L2xhc3Rtb2Q+XG4gIDwvdXJsPlxuICA8dXJsPlxuICAgIDxsb2M+aHR0cHM6Ly93d3cubnVsbGlzaC5pbi9xdW90ZXM8L2xvYz5cbiAgICA8bGFzdG1vZD4yMDIxLTEyLTI4PC9sYXN0bW9kPlxuICA8L3VybD5cbiAgPHVybD5cbiAgICA8bG9jPmh0dHBzOi8vd3d3Lm51bGxpc2guaW4vYmxvZzwvbG9jPlxuICAgIDxsYXN0bW9kPjIwMjEtMTItMjg8L2xhc3Rtb2Q+XG4gIDwvdXJsPlxuICA8dXJsPlxuICAgIDxsb2M+aHR0cHM6Ly93d3cubnVsbGlzaC5pbi9hYm91dDwvbG9jPlxuICAgIDxsYXN0bW9kPjIwMjEtMTItMjg8L2xhc3Rtb2Q+XG4gIDwvdXJsPlxuICAke2Jsb2dzLm1hcChcbiAgICAoYmxvZykgPT4gYFxuICA8dXJsPlxuICAgIDxsb2M+aHR0cHM6Ly93d3cubnVsbGlzaC5pbi9ibG9nLyR7YmxvZy5zbHVnfTwvbG9jPlxuICAgIDxsYXN0bW9kPiR7YmxvZy5sYXN0VXBkYXRlZEF0fTwvbGFzdG1vZD5cbiAgPC91cmw+XG4gIGAsXG4gICl9XG48L3VybHNldD5cbmAudHJpbSgpXG59XG5cbmV4cG9ydCBjb25zdCBsb2FkZXI6IExvYWRlckZ1bmN0aW9uID0gYXN5bmMgKCkgPT4ge1xuICBjb25zdCBzaXRlTWFwID0gYXdhaXQgZ2V0U2l0ZU1hcFRleHQoKVxuICByZXR1cm4gbmV3IFJlc3BvbnNlKHNpdGVNYXAsIHtcbiAgICBoZWFkZXJzOiB7XG4gICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL3htbCcsXG4gICAgICAnWC1Sb2JvdHMtVGFnJzogJ25vLWluZGV4JyxcbiAgICAgICdDb250ZW50LUxlbmd0aCc6IFN0cmluZyhzaXRlTWFwKS5sZW5ndGgsXG4gICAgfSxcbiAgfSlcbn1cbiIsICJjb25zdCBnZXRSZXF1aXJlZFNlcnZlckVudlZhciA9IChrZXk6IHN0cmluZywgY29udGV4dD86IFJlY29yZDxzdHJpbmcsIHN0cmluZz4pID0+IHtcbiAgY29uc3QgdmFsdWUgPSBjb250ZXh0ID8gY29udGV4dFtrZXldIDogcHJvY2Vzcy5lbnZba2V5XVxuXG4gIGlmICghdmFsdWUpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoYCR7a2V5fSBpcyByZXF1aXJlZCBFTlYgdmFyaWFibGVgKVxuICB9XG5cbiAgcmV0dXJuIHZhbHVlXG59XG5cbmV4cG9ydCB7IGdldFJlcXVpcmVkU2VydmVyRW52VmFyIH1cbiIsICJpbXBvcnQgeyBnZXRSZXF1aXJlZFNlcnZlckVudlZhciB9IGZyb20gJy4vZW52LnNlcnZlcidcblxuY29uc3QgZ3FSZXF1ZXN0ID0gYXN5bmMgKFxuICBxdWVyeTogc3RyaW5nLFxuICB2YXJpYWJsZXM6IFJlY29yZDxzdHJpbmcsIHVua25vd24+LFxuICBjb250ZXh0PzogUmVjb3JkPHN0cmluZywgc3RyaW5nPixcbikgPT4ge1xuICBjb25zdCBncmFwaHFsRW5kcG9pbnQgPSBnZXRSZXF1aXJlZFNlcnZlckVudlZhcignR1JBUEhRTF9FTkRQT0lOVCcsIGNvbnRleHQpXG5cbiAgY29uc3QgYXV0aG9yaXphdGlvblRva2VuID0gZ2V0UmVxdWlyZWRTZXJ2ZXJFbnZWYXIoJ0dSQVBIUUxfQUNDRVNTX1RPS0VOJywgY29udGV4dClcblxuICBjb25zdCB1c2VHcmFwaENkbiA9IGdldFJlcXVpcmVkU2VydmVyRW52VmFyKCdVU0VfR1JBUEhfQ0ROJywgY29udGV4dCkgPT09ICd0cnVlJyA/IHRydWUgOiBmYWxzZVxuXG4gIGNvbnN0IGNvbmZpZyA9IHtcbiAgICBlbmRwb2ludDogZ3JhcGhxbEVuZHBvaW50LFxuICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgIGhlYWRlcnM6IHt9LFxuICB9XG5cbiAgaWYgKHVzZUdyYXBoQ2RuKSB7XG4gICAgY29uZmlnLmVuZHBvaW50ID0gZ2V0UmVxdWlyZWRTZXJ2ZXJFbnZWYXIoJ0dSQVBIQ0ROX0VORFBPSU5UJywgY29udGV4dClcbiAgICBjb25maWcuaGVhZGVycyA9IHtcbiAgICAgICdncmFwaGNkbi10b2tlbic6IGdldFJlcXVpcmVkU2VydmVyRW52VmFyKCdHUkFQSENETl9BUElfVE9LRU4nLCBjb250ZXh0KSxcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgY29uZmlnLmhlYWRlcnMgPSB7XG4gICAgICAnQXV0aG9yaXphdGlvbic6IGBCZWFyZXIgJHthdXRob3JpemF0aW9uVG9rZW59YCxcbiAgICB9XG4gIH1cblxuICBjb25zdCB7IGVuZHBvaW50LCAuLi5yZXN0IH0gPSBjb25maWdcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChlbmRwb2ludCwge1xuICAgIC4uLnJlc3QsXG4gICAgYm9keTogSlNPTi5zdHJpbmdpZnkoeyBxdWVyeSwgdmFyaWFibGVzIH0pLFxuICB9KVxuICBjb25zdCBqc29uID0gKGF3YWl0IHJlc3BvbnNlLmpzb24oKSkgYXMgeyBkYXRhOiB1bmtub3duIH1cblxuICByZXR1cm4ganNvbi5kYXRhXG59XG5cbmV4cG9ydCB7IGdxUmVxdWVzdCB9XG4iLCAiaW1wb3J0IHsgZ3FSZXF1ZXN0IH0gZnJvbSAnLi9ncmFwaHFsLnNlcnZlcidcblxuZXhwb3J0IHR5cGUgUG9zdCA9IHtcbiAgaWQ6IHN0cmluZ1xuICB0aXRsZTogc3RyaW5nXG4gIGNvbnRlbnQ6IHtcbiAgICBodG1sOiBzdHJpbmdcbiAgfVxuICBjb3ZlckltYWdlOiB7XG4gICAgdXJsOiBzdHJpbmdcbiAgfVxuICBleGNlcnB0OiBzdHJpbmdcbiAgcHVibGlzaGVkQXQ6IHN0cmluZ1xuICBsYXN0VXBkYXRlZEF0OiBzdHJpbmdcbiAgc2VvOiB7XG4gICAgdGl0bGU6IHN0cmluZ1xuICAgIGtleXdvcmRzOiBzdHJpbmdcbiAgICBpbWFnZToge1xuICAgICAgdXJsOiBzdHJpbmdcbiAgICB9XG4gICAgZGVzY3JpcHRpb246IHN0cmluZ1xuICB9XG4gIHNsdWc6IHN0cmluZ1xufVxuXG5jb25zdCBQb3N0c1F1ZXJ5ID0gYFxuICBxdWVyeSBNeVF1ZXJ5KCRzZWFyY2g6IFN0cmluZyEgPSBcIlwiKSB7XG4gICAgcG9zdHMod2hlcmU6IHsgX3NlYXJjaDogJHNlYXJjaCB9KSB7XG4gICAgICBpZFxuICAgICAgc2x1Z1xuICAgICAgdGl0bGVcbiAgICAgIHB1Ymxpc2hlZEF0XG4gICAgICBsYXN0VXBkYXRlZEF0XG4gICAgICBleGNlcnB0XG4gICAgfVxuICB9XG5gXG5cbmNvbnN0IFBvc3RRdWVyeSA9IGBcbnF1ZXJ5IEdldFBvc3RCeVNsdWcoJHNsdWc6IFN0cmluZyEgPSBcIlwiKSB7XG4gIHBvc3Qod2hlcmU6IHtzbHVnOiAkc2x1Z30pIHtcbiAgICB0aXRsZVxuICAgIGNvbnRlbnQge1xuICAgICAgaHRtbFxuICAgIH1cbiAgICBjb3ZlckltYWdlIHtcbiAgICAgIHVybFxuICAgIH1cbiAgICBleGNlcnB0XG4gICAgcHVibGlzaGVkQXRcbiAgICBzZW8ge1xuICAgICAgdGl0bGVcbiAgICAgIGtleXdvcmRzXG4gICAgICBpbWFnZSB7XG4gICAgICAgIHVybFxuICAgICAgfVxuICAgICAgZGVzY3JpcHRpb25cbiAgICB9XG4gIH1cbn1cbmBcblxuZXhwb3J0IGNvbnN0IGdldFBvc3RzID0gYXN5bmMgKHF1ZXJ5Pzogc3RyaW5nLCBjb250ZXh0PzogUmVjb3JkPHN0cmluZywgc3RyaW5nPikgPT4ge1xuICB0cnkge1xuICAgIGNvbnN0IHBvc3RzID0gYXdhaXQgZ3FSZXF1ZXN0KFBvc3RzUXVlcnksIHsgc2VhcmNoOiBxdWVyeSA/PyAnJyB9LCBjb250ZXh0KVxuXG4gICAgaWYgKCFwb3N0cykge1xuICAgICAgcmV0dXJuIFtdXG4gICAgfVxuICAgIHJldHVybiBwb3N0cy5wb3N0cyBhcyBBcnJheTxQb3N0PlxuICB9IGNhdGNoIHtcbiAgICByZXR1cm4gW11cbiAgfVxufVxuXG5leHBvcnQgY29uc3QgZ2V0UG9zdCA9IGFzeW5jIChzbHVnOiBQb3N0WydzbHVnJ10sIGNvbnRleHQ/OiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+KSA9PiB7XG4gIHRyeSB7XG4gICAgY29uc3QgcG9zdCA9IGF3YWl0IGdxUmVxdWVzdChQb3N0UXVlcnksIHsgc2x1ZyB9LCBjb250ZXh0KVxuXG4gICAgaWYgKCFwb3N0KSB7XG4gICAgICByZXR1cm4gbnVsbFxuICAgIH1cbiAgICByZXR1cm4gcG9zdC5wb3N0IGFzIFBvc3RcbiAgfSBjYXRjaCB7XG4gICAgcmV0dXJuIG51bGxcbiAgfVxufVxuIiwgImltcG9ydCB7IEFjdGlvbkZ1bmN0aW9uIH0gZnJvbSAncmVtaXgnXG5pbXBvcnQgeyBkZXN0cm95U2Vzc2lvbiwgZ2V0U2Vzc2lvbiB9IGZyb20gJ34vdXRpbHMvc2Vzc2lvbi5zZXJ2ZXInXG5cbmV4cG9ydCBjb25zdCBhY3Rpb246IEFjdGlvbkZ1bmN0aW9uID0gYXN5bmMgKHsgcmVxdWVzdCB9KSA9PiB7XG4gIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBnZXRTZXNzaW9uKHJlcXVlc3QuaGVhZGVycy5nZXQoJ0Nvb2tpZScpKVxuXG4gIHJldHVybiBuZXcgUmVzcG9uc2UoJycsIHtcbiAgICBoZWFkZXJzOiB7XG4gICAgICAnU2V0LUNvb2tpZSc6IGF3YWl0IGRlc3Ryb3lTZXNzaW9uKHNlc3Npb24pLFxuICAgIH0sXG4gIH0pXG59XG4iLCAiaW1wb3J0IHsgY3JlYXRlQ29va2llU2Vzc2lvblN0b3JhZ2UgfSBmcm9tICdyZW1peCdcblxuZXhwb3J0IGNvbnN0IHsgY29tbWl0U2Vzc2lvbiwgZ2V0U2Vzc2lvbiwgZGVzdHJveVNlc3Npb24gfSA9IGNyZWF0ZUNvb2tpZVNlc3Npb25TdG9yYWdlKHtcbiAgY29va2llOiB7XG4gICAgbmFtZTogJ19zZXNzaW9uJyxcbiAgICBzYW1lU2l0ZTogJ2xheCcsXG4gICAgcGF0aDogJy8nLFxuICAgIGh0dHBPbmx5OiB0cnVlLFxuICAgIHNlY3JldHM6IFsnc29tZXRoaW5nIHN0cmluZyddLFxuICAgIHNlY3VyZTogcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJyxcbiAgfSxcbn0pXG4iLCAiaW1wb3J0IHsgT3V0bGV0IH0gZnJvbSAncmVtaXgnXG5cbmltcG9ydCB7IENvbnRhaW5lciwgTWFya2Rvd24gfSBmcm9tICd+L2NvbXBvbmVudHMnXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENoYW5nZWxvZygpIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYi02IGJvcmRlci1iIGJvcmRlci1jb2xvclwiPlxuICAgICAgICA8Q29udGFpbmVyPlxuICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJweS00IHRleHQteGwgZm9udC1ib2xkIG1kOnB5LTEwIG1kOnRleHQtMnhsXCI+Q2hhbmdlbG9nPC9oMj5cbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWJhc2UgZm9udC1ib2xkIG1kOnRleHQtbGdcIj5cbiAgICAgICAgICAgIEFsbCBub3RhYmxlIGNoYW5nZXMgdG8gdGhpcyBwcm9qZWN0IHdpbGwgYmUgZG9jdW1lbnRlZCBpbiB0aGlzIGZpbGUuXG4gICAgICAgICAgPC9wPlxuXG4gICAgICAgIDwvQ29udGFpbmVyPlxuICAgICAgPC9kaXY+XG4gICAgICA8TWFya2Rvd24gY2xhc3NOYW1lPVwic206bWF4LXctNXhsXCI+XG4gICAgICAgIDxPdXRsZXQgLz5cbiAgICAgIDwvTWFya2Rvd24+XG4gICAgPC9kaXY+XG4gIClcbn1cbiIsICJcbi8qQGpzeFJ1bnRpbWUgY2xhc3NpYyBAanN4IFJlYWN0LmNyZWF0ZUVsZW1lbnQgQGpzeEZyYWcgUmVhY3QuRnJhZ21lbnQqL1xuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuZXhwb3J0IGNvbnN0IGF0dHJpYnV0ZXMgPSB7XG4gIFwibWV0YVwiOiB7XG4gICAgXCJ0aXRsZVwiOiBcIkNoYW5nZWxvZ1wiLFxuICAgIFwiZGVzY3JpcHRpb25cIjogXCJUaGUgaGlzdG9yeSBvZiBjb250aW51b3VzIHN0cmVhbSBvZiBjaGFuZ2VzIG1hZGUgZWFjaCBkYXkgdG8gbXkgcGVyc29uYWwgd2Vic2l0ZSBhcmUgcmVjb3JkZWQgaW4gdGhpcyBwYWdlLiBUaGUgY2hhbmdlcyBhcmUgcHV0IGludG8gb25lIG9mIHRocmVlIGNhdGVnb3JpZXMgYWRkZWQsIGNoYW5nZWQsIHJlbW92ZWQgdW5kZXIgZWFjaCBkYXkncyBkYXRlLlwiLFxuICAgIFwicm9ib3RzXCI6IFwiaW5kZXgsIGZvbGxvd1wiLFxuICAgIFwicGFnZW5hbWVcIjogXCJDaGFuZ2Vsb2dcIixcbiAgICBcImltYWdlXCI6IFwiL2ltYWdlcy9vZy5qcGdcIixcbiAgICBcImFwcGxlLW1vYmlsZS13ZWItYXBwLXRpdGxlXCI6IFwiQ2hhbmdlbG9nLFwiXG4gIH0sXG4gIFwiaGVhZGVyc1wiOiB7XG4gICAgXCJDYWNoZS1Db250cm9sXCI6IFwibWF4LWFnZT04NjQwMDAwMCwgbXVzdC1yZXZhbGlkYXRlXCJcbiAgfVxufTtcbmltcG9ydCB7RGF0ZX0gZnJvbSAnfi9jb21wb25lbnRzJztcbmZ1bmN0aW9uIE1EWENvbnRlbnQocHJvcHMgPSB7fSkge1xuICBjb25zdCBfY29tcG9uZW50cyA9IE9iamVjdC5hc3NpZ24oe1xuICAgIGgzOiBcImgzXCIsXG4gICAgaDQ6IFwiaDRcIixcbiAgICB1bDogXCJ1bFwiLFxuICAgIGxpOiBcImxpXCIsXG4gICAgaHI6IFwiaHJcIixcbiAgICBjb2RlOiBcImNvZGVcIixcbiAgICBwOiBcInBcIixcbiAgICBwcmU6IFwicHJlXCJcbiAgfSwgcHJvcHMuY29tcG9uZW50cyksIHt3cmFwcGVyOiBNRFhMYXlvdXR9ID0gX2NvbXBvbmVudHM7XG4gIGNvbnN0IF9jb250ZW50ID0gPD48X2NvbXBvbmVudHMuaDM+e1wiMjAyMS0xMi0yOVwifTwvX2NvbXBvbmVudHMuaDM+e1wiXFxuXCJ9PF9jb21wb25lbnRzLmg0PntcIkFkZGRlZFwifTwvX2NvbXBvbmVudHMuaDQ+e1wiXFxuXCJ9PF9jb21wb25lbnRzLnVsPntcIlxcblwifTxfY29tcG9uZW50cy5saT57XCJBZGRlZCBzZWN1cml0eSBoZWFkZXIgdG8gdGhlIGh0bWwgcmVxdWVzdFwifTwvX2NvbXBvbmVudHMubGk+e1wiXFxuXCJ9PC9fY29tcG9uZW50cy51bD57XCJcXG5cIn08X2NvbXBvbmVudHMuaHIgLz57XCJcXG5cIn08X2NvbXBvbmVudHMuaDM+e1wiMjAyMS0xMi0yOFwifTwvX2NvbXBvbmVudHMuaDM+e1wiXFxuXCJ9PF9jb21wb25lbnRzLmg0PntcIkFkZGVkXCJ9PC9fY29tcG9uZW50cy5oND57XCJcXG5cIn08X2NvbXBvbmVudHMudWw+e1wiXFxuXCJ9PF9jb21wb25lbnRzLmxpPntcIkFkZGVkIHNlbyBzdHVmZihkZXNjcmlwdGlvbiwgcm9ib3RzLCBwYWdlYW1lLCBpbWFnZSwgYXBwbGUtbW9iaWxlLXdlYi1hcHAtdGl0bGUpIHRvIHRoZSBjaGFuZ2Vsb2cgcGFnZVwifTwvX2NvbXBvbmVudHMubGk+e1wiXFxuXCJ9PF9jb21wb25lbnRzLmxpPntcIkFkZGVkIHNlbyBzdHVmZihkZXNjcmlwdGlvbiwgcm9ib3RzLCBwYWdlYW1lLCBpbWFnZSwgYXBwbGUtbW9iaWxlLXdlYi1hcHAtdGl0bGUgYW5kIGNhbm9uaWNhbCBsaW5rKSB0byB0aGUgYWJvdXQgcGFnZVwifTwvX2NvbXBvbmVudHMubGk+e1wiXFxuXCJ9PF9jb21wb25lbnRzLmxpPntcIkFkZGVkIHNlbyBzdHVmZihkZXNjcmlwdGlvbiwgcm9ib3RzLCBwYWdlYW1lLCBpbWFnZSwgYXBwbGUtbW9iaWxlLXdlYi1hcHAtdGl0bGUpIHRvIHRoZSBibG9nIHBhZ2VcIn08L19jb21wb25lbnRzLmxpPntcIlxcblwifTxfY29tcG9uZW50cy5saT57XCJBZGRlZCBzZW8gc3R1ZmYoY2Fub25pY2FsIGxpbmspIHRvIHRoZSBibG9nIHBvc3QgcGFnZVwifTwvX2NvbXBvbmVudHMubGk+e1wiXFxuXCJ9PF9jb21wb25lbnRzLmxpPntcIkFkZGVkIHNlbyBzdHVmZihkZXNjcmlwdGlvbiwgcm9ib3RzLCBwYWdlYW1lLCBpbWFnZSwgYXBwbGUtbW9iaWxlLXdlYi1hcHAtdGl0bGUpIHRvIHRoZSBxdW90ZXMgcGFnZVwifTwvX2NvbXBvbmVudHMubGk+e1wiXFxuXCJ9PF9jb21wb25lbnRzLmxpPntcIkFkZGVkIFwifTxfY29tcG9uZW50cy5jb2RlPntcIlgtUm9ib3RzLVRhZzogbm8taW5kZXhcIn08L19jb21wb25lbnRzLmNvZGU+e1wiIGhlYWRlciB0byB0aGUgJ3Jzcy54bWxcIn08X2NvbXBvbmVudHMuY29kZT57XCJhbmRcIn08L19jb21wb25lbnRzLmNvZGU+e1wic2l0ZW1hcC54bWxgIGZpbGVcIn08L19jb21wb25lbnRzLmxpPntcIlxcblwifTwvX2NvbXBvbmVudHMudWw+e1wiXFxuXCJ9PF9jb21wb25lbnRzLmg0PntcIkNoYW5nZWRcIn08L19jb21wb25lbnRzLmg0PntcIlxcblwifTxfY29tcG9uZW50cy51bD57XCJcXG5cIn08X2NvbXBvbmVudHMubGk+e1wiTW92ZWQgdGhlIGNhbm9uaWNhbCB1cmwgZnJvbSB0aGUgcm9vdCBsaW5rcyB0byBpbmRleCByb3V0ZS5cIn08L19jb21wb25lbnRzLmxpPntcIlxcblwifTxfY29tcG9uZW50cy5saT57XCJDaGFuZ2VkIHRoZSBsYXN0bW9kIGxhdGUgb2YgYWxsIHRoZSByb3V0ZXMgaW4gdGhlIHNpdGVtYXAgZmlsZVwifTwvX2NvbXBvbmVudHMubGk+e1wiXFxuXCJ9PC9fY29tcG9uZW50cy51bD57XCJcXG5cIn08X2NvbXBvbmVudHMuaDQ+e1wiUmVtb3ZlZFwifTwvX2NvbXBvbmVudHMuaDQ+e1wiXFxuXCJ9PF9jb21wb25lbnRzLnVsPntcIlxcblwifTxfY29tcG9uZW50cy5saT57XCJSZW1vdmVkIFwifTxfY29tcG9uZW50cy5jb2RlPntcInJzcy54bWxcIn08L19jb21wb25lbnRzLmNvZGU+e1wiIGxpbmsgZnJvbSB0aGUgc2l0ZW1hcCBmaWxlXCJ9PC9fY29tcG9uZW50cy5saT57XCJcXG5cIn08X2NvbXBvbmVudHMubGk+e1wiUmVtb3ZlZCB0aGUgbWV0YSBmdW5jdGlvbiBmcm9tIGluZGV4IHJvdXRlXCJ9PC9fY29tcG9uZW50cy5saT57XCJcXG5cIn08X2NvbXBvbmVudHMubGk+e1wiUmVtb3ZlZCByaWNrcm9sbCByb3V0ZXNcIn08L19jb21wb25lbnRzLmxpPntcIlxcblwifTwvX2NvbXBvbmVudHMudWw+e1wiXFxuXCJ9PF9jb21wb25lbnRzLmhyIC8+e1wiXFxuXCJ9PF9jb21wb25lbnRzLmgzPntcIjIwMjEtMTItMjdcIn08L19jb21wb25lbnRzLmgzPntcIlxcblwifTxfY29tcG9uZW50cy5oND57XCJBZGRlZFwifTwvX2NvbXBvbmVudHMuaDQ+e1wiXFxuXCJ9PF9jb21wb25lbnRzLnVsPntcIlxcblwifTxfY29tcG9uZW50cy5saT57XCJBZGRlZCByb2JvdHMgbWV0YSB0YWcgLSBcIn08X2NvbXBvbmVudHMuY29kZT57XCJpbmRleCwgZm9sbG93XCJ9PC9fY29tcG9uZW50cy5jb2RlPjwvX2NvbXBvbmVudHMubGk+e1wiXFxuXCJ9PC9fY29tcG9uZW50cy51bD57XCJcXG5cIn08X2NvbXBvbmVudHMuaDQ+e1wiQ2hhbmdlZFwifTwvX2NvbXBvbmVudHMuaDQ+e1wiXFxuXCJ9PF9jb21wb25lbnRzLnVsPntcIlxcblwifTxfY29tcG9uZW50cy5saT57XCJOb3csIGFsbCB0aGUgc2VvIHN0dWZmIGFyZSBjb21pbmcgZnJvbSB0aGUgU0VPIHNjaGVtYVwifTwvX2NvbXBvbmVudHMubGk+e1wiXFxuXCJ9PF9jb21wb25lbnRzLmxpPntcIk5vdywgR29vZ2xlIGFuYWx5dGljcyB3aWxsIG5vdCB0cmFjayBpbiBkZXZlbG9wbWVudCBtb2RlXCJ9PC9fY29tcG9uZW50cy5saT57XCJcXG5cIn08X2NvbXBvbmVudHMubGk+e1wiVXBkYXRlZCBibG9nIHBhZ2UgdG8gdXNlIHRoZSBzZW8gc3R1ZmYuXCJ9PC9fY29tcG9uZW50cy5saT57XCJcXG5cIn08X2NvbXBvbmVudHMubGk+e1wiVXBkYXRlZCB0aGUgXCJ9PF9jb21wb25lbnRzLmNvZGU+e1wic2l0ZW1hcC54bWxcIn08L19jb21wb25lbnRzLmNvZGU+e1wiIGZpbGUgdG8gaW5jbHVkZSBhbGwgdGhlIGJsb2cgbGlua3NcIn08L19jb21wb25lbnRzLmxpPntcIlxcblwifTxfY29tcG9uZW50cy5saT57XCJDaGFuZ2VkIHRoZSBiZyBjb2xvciB0byBtYXR0IGJsYWNrXCJ9PC9fY29tcG9uZW50cy5saT57XCJcXG5cIn08X2NvbXBvbmVudHMubGk+e1wiVXBkYXRlZCBzb21lIHR5cGUgc3R1ZmYuXCJ9PC9fY29tcG9uZW50cy5saT57XCJcXG5cIn08L19jb21wb25lbnRzLnVsPntcIlxcblwifTxfY29tcG9uZW50cy5ociAvPntcIlxcblwifTxfY29tcG9uZW50cy5oMz57XCIyMDIxLTEyLTI2XCJ9PC9fY29tcG9uZW50cy5oMz57XCJcXG5cIn08X2NvbXBvbmVudHMuaDQ+e1wiVXBkYXRlZFwifTwvX2NvbXBvbmVudHMuaDQ+e1wiXFxuXCJ9PF9jb21wb25lbnRzLnVsPntcIlxcblwifTxfY29tcG9uZW50cy5saT57XCJGaXhlZCB0aGUgZmF2aWNvbiByZWZldGNoIGZvciBldmVyeSByZXF1ZXN0IGJ5IGltcG9ydGluZyBhIGZpbGUgYW5kIHBhc3NpbmcgaXQgdG8gdGhlIGxpbmtzIGV4cG9ydFwifTwvX2NvbXBvbmVudHMubGk+e1wiXFxuXCJ9PF9jb21wb25lbnRzLmxpPntcIlNob3dpbmcgdGhlIGJyb3dzZXIgdGhlbWUgY29sb3IgYmFzZWQgb24gdGhlIHByZWZlcmVkIGNvbG9yIHNjaGVtZVwifTwvX2NvbXBvbmVudHMubGk+e1wiXFxuXCJ9PC9fY29tcG9uZW50cy51bD57XCJcXG5cIn08X2NvbXBvbmVudHMuaDQ+e1wiUmVtb3ZlZFwifTwvX2NvbXBvbmVudHMuaDQ+e1wiXFxuXCJ9PF9jb21wb25lbnRzLnVsPntcIlxcblwifTxfY29tcG9uZW50cy5saT57XCJSZW1vdmVkIHVudXNlZCBwYWNrYWdlcy5cIn08L19jb21wb25lbnRzLmxpPntcIlxcblwifTxfY29tcG9uZW50cy5saT57XCJSZW1vdmVkIGdyYXBocWwgcmVxdWVzdCBwYWNrYWdlIGFuZCBtaWdyYXRlZCB0byBmZXRjaC4gU28gbWlncmF0aW5nIHRvIGNmIHBhZ2VzIHdpbGwgYmUgZWFzeS5cIn08L19jb21wb25lbnRzLmxpPntcIlxcblwifTwvX2NvbXBvbmVudHMudWw+e1wiXFxuXCJ9PF9jb21wb25lbnRzLmhyIC8+e1wiXFxuXCJ9PF9jb21wb25lbnRzLmgzPntcIjIwMjEtMTItMjZcIn08L19jb21wb25lbnRzLmgzPntcIlxcblwifTxfY29tcG9uZW50cy5oND57XCJBZGRlZFwifTwvX2NvbXBvbmVudHMuaDQ+e1wiXFxuXCJ9PF9jb21wb25lbnRzLnVsPntcIlxcblwifTxfY29tcG9uZW50cy5saT57XCIuZW52LmV4YW1wbGUgZmlsZSB0byB0aGUgcmVwb3NpdG9yeVwifTwvX2NvbXBvbmVudHMubGk+e1wiXFxuXCJ9PF9jb21wb25lbnRzLmxpPntcIkFkZGVkIGFsdCBhdHRyaWJ1dGUgdG8gdGhlIGltYWdlIGluIGFib3V0IHBhZ2VcIn08L19jb21wb25lbnRzLmxpPntcIlxcblwifTwvX2NvbXBvbmVudHMudWw+e1wiXFxuXCJ9PF9jb21wb25lbnRzLmg0PntcIkNoYW5nZWRcIn08L19jb21wb25lbnRzLmg0PntcIlxcblwifTxfY29tcG9uZW50cy51bD57XCJcXG5cIn08X2NvbXBvbmVudHMubGk+e1wiY2hhbmdlZCB0aGUgZm9udCBzaXplIG9mIHRoZSBmb290ZXIgbGlua3NcIn08L19jb21wb25lbnRzLmxpPntcIlxcblwifTwvX2NvbXBvbmVudHMudWw+e1wiXFxuXCJ9PF9jb21wb25lbnRzLmg0PntcIlJlbW92ZWRcIn08L19jb21wb25lbnRzLmg0PntcIlxcblwifTxfY29tcG9uZW50cy51bD57XCJcXG5cIn08X2NvbXBvbmVudHMubGk+e1wiUmVtb3ZlZCB1bndhbnRlZCBtYXJnaW4gYm90dG9tIGluIHRoZSBib2R5XCJ9PC9fY29tcG9uZW50cy5saT57XCJcXG5cIn08L19jb21wb25lbnRzLnVsPntcIlxcblwifTxfY29tcG9uZW50cy5ociAvPntcIlxcblwifTxfY29tcG9uZW50cy5oMz57XCIyMDIxLTEyLTI1XCJ9PC9fY29tcG9uZW50cy5oMz57XCJcXG5cIn08X2NvbXBvbmVudHMuaDQ+e1wiQWRkZWRcIn08L19jb21wb25lbnRzLmg0PntcIlxcblwifTxfY29tcG9uZW50cy51bD57XCJcXG5cIn08X2NvbXBvbmVudHMubGk+e1wiQWRkZWQgdGl0bGUgZm9yIHRoZSBRdW90ZXMgcGFnZVwifTwvX2NvbXBvbmVudHMubGk+e1wiXFxuXCJ9PC9fY29tcG9uZW50cy51bD57XCJcXG5cIn08X2NvbXBvbmVudHMuaDQ+e1wiQ2hhbmdlZFwifTwvX2NvbXBvbmVudHMuaDQ+e1wiXFxuXCJ9PF9jb21wb25lbnRzLnVsPntcIlxcblwifTxfY29tcG9uZW50cy5saT57XCJDaGFuZ2VkIHRoZSB0aXRsZSBvZiB0aGUgYWJvdXQgcGFnZSBmcm9tIFwifTxfY29tcG9uZW50cy5jb2RlPntcIk11dGh1a3VtYXJcIn08L19jb21wb25lbnRzLmNvZGU+e1wiIC0+IFwifTxfY29tcG9uZW50cy5jb2RlPntcIkFib3V0XCJ9PC9fY29tcG9uZW50cy5jb2RlPjwvX2NvbXBvbmVudHMubGk+e1wiXFxuXCJ9PF9jb21wb25lbnRzLmxpPntcIkNoYW5nZWQgdGhlIHRpdGxlIG9mIHRoZSBjaGFuZ2Vsb2cgcGFnZSBmcm9tIFwifTxfY29tcG9uZW50cy5jb2RlPntcIkNoYW5nZWxvZyB8IE11dGh1a3VtYXJcIn08L19jb21wb25lbnRzLmNvZGU+e1wiIC0+IFwifTxfY29tcG9uZW50cy5jb2RlPntcIkNoYW5nZWxvZ1wifTwvX2NvbXBvbmVudHMuY29kZT48L19jb21wb25lbnRzLmxpPntcIlxcblwifTxfY29tcG9uZW50cy5saT57XCJDaGFuZ2VkIHRoZSB0aXRsZSBvZiB0aGUgYmxvZyBwYWdlIGZyb20gXCJ9PF9jb21wb25lbnRzLmNvZGU+e1wiQmxvZyB8IE11dGh1a3VtYXJcIn08L19jb21wb25lbnRzLmNvZGU+e1wiIC0+IFwifTxfY29tcG9uZW50cy5jb2RlPntcIkJsb2dcIn08L19jb21wb25lbnRzLmNvZGU+PC9fY29tcG9uZW50cy5saT57XCJcXG5cIn08L19jb21wb25lbnRzLnVsPntcIlxcblwifTxfY29tcG9uZW50cy5oND57XCJSZW1vdmVkXCJ9PC9fY29tcG9uZW50cy5oND57XCJcXG5cIn08X2NvbXBvbmVudHMudWw+e1wiXFxuXCJ9PF9jb21wb25lbnRzLmxpPntcIlJlbW92ZWQgZm9udHMgd2l0aCAuZW90LCBzdmcgYW5kIHR0Zi4gQmVjYXVzZSB0aG9zZSBmb250cyBhcmUgbmVlZCBmb3IgdmVyeSBvbGQgYnJvd3NlcnMuXCJ9PC9fY29tcG9uZW50cy5saT57XCJcXG5cIn08X2NvbXBvbmVudHMubGk+e1wiUmVtb3ZlZCB1bnVzZWQgaW1hZ2VzIGFzc2V0c1wifTwvX2NvbXBvbmVudHMubGk+e1wiXFxuXCJ9PC9fY29tcG9uZW50cy51bD57XCJcXG5cIn08X2NvbXBvbmVudHMuaHIgLz57XCJcXG5cIn08X2NvbXBvbmVudHMuaDM+e1wiMjAyMS0xMi0yNFwifTwvX2NvbXBvbmVudHMuaDM+e1wiXFxuXCJ9PF9jb21wb25lbnRzLmg0PntcIkFkZGVkXCJ9PC9fY29tcG9uZW50cy5oND57XCJcXG5cIn08X2NvbXBvbmVudHMudWw+e1wiXFxuXCJ9PF9jb21wb25lbnRzLmxpPntcIkFkZGVkIG1vYmlsZSBuYXZiYXJcIn08L19jb21wb25lbnRzLmxpPntcIlxcblwifTxfY29tcG9uZW50cy5saT57XCJBZGRlZCBpbml0aWFsIHZlcnNpb24gb2YgYWJvdXQgcGFnZVwifTwvX2NvbXBvbmVudHMubGk+e1wiXFxuXCJ9PF9jb21wb25lbnRzLmxpPntcIkFkZGVkIGFyaWEtbGFiZWwgdG8gYnV0dG9uIGZvciBvcGVuaW5nIG1lbnVcIn08L19jb21wb25lbnRzLmxpPntcIlxcblwifTxfY29tcG9uZW50cy5saT57XCJBZGRlZCBxdW90ZSBwZXIgZGF5IGluIHRoZSBob21lIHBhZ2VcIn08L19jb21wb25lbnRzLmxpPntcIlxcblwifTxfY29tcG9uZW50cy5saT57XCJBZGRlZCB0YXNrcyBvZiB0aGUgZGF5IGluIHRoZSBob21lIHBhZ2VcIn08L19jb21wb25lbnRzLmxpPntcIlxcblwifTxfY29tcG9uZW50cy5saT57XCJBZGRlZCBXZWJzaXRlIG1hcCB3aGljaCBzaG93cyBtb3N0IGltcG9ydGFudCBsaW5rc1wifTwvX2NvbXBvbmVudHMubGk+e1wiXFxuXCJ9PF9jb21wb25lbnRzLmxpPntcIkFkZGVkIHF1b3RlcyBwYWdlIHdoaWNoIHJlbmRlcnMgYWxsIHRoZSBxdW90ZXNcIn08L19jb21wb25lbnRzLmxpPntcIlxcblwifTxfY29tcG9uZW50cy5saT57XCJVcGRhdGVkIHRoZSBmb290ZXIgdG8gaGF2ZSBtb3N0IG9mIHRoZSBsaW5rc1wifTwvX2NvbXBvbmVudHMubGk+e1wiXFxuXCJ9PF9jb21wb25lbnRzLmxpPntcIkFkZGVkIHRoZSBpbml0aWFsIHZlcnNpb24gb2Ygc2l0ZW1hcC54bWxcIn08L19jb21wb25lbnRzLmxpPntcIlxcblwifTxfY29tcG9uZW50cy5saT57XCJFbmFibGVkIHJvYm90cy50eHQgZmlsZS5cIn08L19jb21wb25lbnRzLmxpPntcIlxcblwifTxfY29tcG9uZW50cy5saT57XCJBZGRlZCBpbWFnZSBhbmQgb2c6aW1hZ2UgdXJsIHRvIHRoZSBtZXRhIHRhZyBvZiB0aGUgXCJ9PF9jb21wb25lbnRzLmNvZGU+e1wiL1wifTwvX2NvbXBvbmVudHMuY29kZT57XCIgcm91dGUuXCJ9PC9fY29tcG9uZW50cy5saT57XCJcXG5cIn08X2NvbXBvbmVudHMubGk+e1wiQWRkZWQgdGhpcyBzaXRlIHNvdXJjZSBjb2RlIGxpbmsgaW4gdGhlIGZvb3RlciBsaW5rIGxpc3RcIn08L19jb21wb25lbnRzLmxpPntcIlxcblwifTxfY29tcG9uZW50cy5saT57XCJBZGRlZCBwb3N0Y3NzLWltcG9ydCBwYWNrYWdlIGZvciBpbXBvcnRpbmcgc3R1ZmYgaW5zaWRlIGNzcyBmaWxlc1wifTwvX2NvbXBvbmVudHMubGk+e1wiXFxuXCJ9PC9fY29tcG9uZW50cy51bD57XCJcXG5cIn08X2NvbXBvbmVudHMuaDQ+e1wiQ2hhbmdlZFwifTwvX2NvbXBvbmVudHMuaDQ+e1wiXFxuXCJ9PF9jb21wb25lbnRzLnVsPntcIlxcblwifTxfY29tcG9uZW50cy5saT57XCJVcGRhdGVkIHRoZSBSU1MgdXJsIGZyb20gXCJ9PF9jb21wb25lbnRzLmNvZGU+e1wiaHR0cHM6Ly9udWxsaXNoLmluL3Jzcy54bWxcIn08L19jb21wb25lbnRzLmNvZGU+e1wiIC0+IFwifTxfY29tcG9uZW50cy5jb2RlPntcIi9yc3MueG1sXCJ9PC9fY29tcG9uZW50cy5jb2RlPntcIi4gSnVzdCByZW1vdmVkIHRoZSBkb21haW4gZnJvbSB0aGUgdXJsLiBTbyBpdCB3aWxsIHdvcmsgb24gbG9jYWxseSBhbHNvLlwifTwvX2NvbXBvbmVudHMubGk+e1wiXFxuXCJ9PF9jb21wb25lbnRzLmxpPntcIlVwZGF0ZWQgaG9tZSBwYWdlIHRvIGhhdmUgbGlrZXMgdG8gYmxvZywgYWJvdXQsIGFuZCBjaGFuZ2Vsb2cgcGFnZS5cIn08L19jb21wb25lbnRzLmxpPntcIlxcblwifTxfY29tcG9uZW50cy5saT57XCJVcGRhdGVkIEhvbWUgcGFnZSBhYm91dCBtZSBhbmQgc29tZSBvZiB0aGUgZWFzdGVyIGVnZyBzdHVmZi5cIn08L19jb21wb25lbnRzLmxpPntcIlxcblwifTxfY29tcG9uZW50cy5saT57XCJVcGRhdGVkIHRoZSByZXNwb25zaXZlbmVzcyBvZiB0aGUgcGFkZGluZyBhbmQgbWFyZ2luLlwifTwvX2NvbXBvbmVudHMubGk+e1wiXFxuXCJ9PF9jb21wb25lbnRzLmxpPntcIkZpeGVkIHRoZSBidWcgdGhhdCBkb2VzIG5vdCBzYXZlIHN0dWZmIHRvIHRoZSBjb29raWVcIn08L19jb21wb25lbnRzLmxpPntcIlxcblwifTxfY29tcG9uZW50cy5saT57XCJVcGRhdGVkIHRoZSByZXNwb25zaXZlbmVzcyBzdHVmZiBpbiB0aGUgaG9tZSBwYWdlXCJ9PC9fY29tcG9uZW50cy5saT57XCJcXG5cIn08X2NvbXBvbmVudHMubGk+e1wiUmVtb3ZlZCB0aGUgZXhjZXNzIHBhZGRpbmcgZnJvbSBzb2NpYWwgcHJvZmlsZSBpY29uXCJ9PC9fY29tcG9uZW50cy5saT57XCJcXG5cIn08X2NvbXBvbmVudHMubGk+e1wiVXBkYXRlZCB0aGUgcXVvdGUgYXV0aG9yIHRvIGhhdmUgc3BhY2UgYWZ0ZXIgdGhlIGRhc2hcIn08L19jb21wb25lbnRzLmxpPntcIlxcblwifTxfY29tcG9uZW50cy5saT57XCJSZWR1Y2VkIHRoZSBwYWRkaW5nIG9mIHRoZSBxdW90ZVwifTwvX2NvbXBvbmVudHMubGk+e1wiXFxuXCJ9PF9jb21wb25lbnRzLmxpPntcIlVwZGF0ZWQgdGhlIEFib3V0IHBhZ2UoSW5pdGlhbCB2ZXJzaW9uKVwifTwvX2NvbXBvbmVudHMubGk+e1wiXFxuXCJ9PF9jb21wb25lbnRzLmxpPntcIkRlY3JlYXNlZCB0aGUgd2lkdGggb2YgdGhlIHF1b3RlcyBwYWdlIGFuZCBtYWRlIGl0IGxvb2sgZ29vZC5cIn08L19jb21wb25lbnRzLmxpPntcIlxcblwifTxfY29tcG9uZW50cy5saT57XCJHbyBiYWNrIGxpbmsgaW4gdGhlIFwifTxfY29tcG9uZW50cy5jb2RlPntcIi9ibG9nXCJ9PC9fY29tcG9uZW50cy5jb2RlPntcIiBwYWdlIG5hdmlnYXRlIHRvIHRoZSBzYW1lIHBhZ2UuIFNvIGl0IGlzIGZpeGVkIHRvIGdvIHRvIGhvbWUgcGFnZS5cIn08L19jb21wb25lbnRzLmxpPntcIlxcblwifTwvX2NvbXBvbmVudHMudWw+e1wiXFxuXCJ9PF9jb21wb25lbnRzLmg0PntcIlJlbW92ZWRcIn08L19jb21wb25lbnRzLmg0PntcIlxcblwifTxfY29tcG9uZW50cy51bD57XCJcXG5cIn08X2NvbXBvbmVudHMubGk+e1wiUmVtb3ZlZCB0aGUgYmxvZyBzdHVmZiBhbmQgdGhlIGxvYWRlci4gU28gdGhlIGluaXRpYWwgcGFnZSB3aWxsIGJlIHNvIG11Y2ggZmFzdGVyIHRoYW4gYmVmb3JlLiAzMDBtcyBhdmVyYWdlIHRvIDE1MG1zXCJ9PC9fY29tcG9uZW50cy5saT57XCJcXG5cIn08X2NvbXBvbmVudHMubGk+e1wiUmVtb3ZlZCB1bndhbnRlZCB0aXRsZSB0YWcgaW4gdGhlIEhUTUwgZG9jdW1lbnRcIn08L19jb21wb25lbnRzLmxpPntcIlxcblwifTwvX2NvbXBvbmVudHMudWw+e1wiXFxuXCJ9PF9jb21wb25lbnRzLmhyIC8+e1wiXFxuXCJ9PF9jb21wb25lbnRzLmgzPntcIjIwMjEtMTItMjNcIn08L19jb21wb25lbnRzLmgzPntcIlxcblwifTxfY29tcG9uZW50cy5oND57XCJBZGRlZFwifTwvX2NvbXBvbmVudHMuaDQ+e1wiXFxuXCJ9PF9jb21wb25lbnRzLnVsPntcIlxcblwifTxfY29tcG9uZW50cy5saT57XCJBZGRlZCBjYW5vbmljYWwgbGluayB0byB0aGUgaGVhZFwifTwvX2NvbXBvbmVudHMubGk+e1wiXFxuXCJ9PC9fY29tcG9uZW50cy51bD57XCJcXG5cIn08X2NvbXBvbmVudHMuaDQ+e1wiQ2hhbmdlZFwifTwvX2NvbXBvbmVudHMuaDQ+e1wiXFxuXCJ9PF9jb21wb25lbnRzLnVsPntcIlxcblwifTxfY29tcG9uZW50cy5saT57XCJGb3Igbm93LCBkaXNhYmxpbmcgdGhlIHJvYm90cyBzdHVmZi4gT25jZSBtb3N0IG9mIHRoZSB3ZWJzaXRlIGlzIGRvbmUsIHRoZW4gd2UgY2FuIGVuYWJsZSB0aG9zZSBzdHVmZi5cIn08L19jb21wb25lbnRzLmxpPntcIlxcblwifTxfY29tcG9uZW50cy5saT57XCJDaGFuZ2VkIHRoZSByZWRpcmVjdCB1cmwgb2YgbG9naW4sIHNpZ251cCBhbmQgYWRtaW4gdG8gdGhlIGRpcmVjdCB5b3V0dWJlIHVybC5cIn08L19jb21wb25lbnRzLmxpPntcIlxcblwifTwvX2NvbXBvbmVudHMudWw+e1wiXFxuXCJ9PF9jb21wb25lbnRzLmg0PntcIlJlbW92ZWRcIn08L19jb21wb25lbnRzLmg0PntcIlxcblwifTxfY29tcG9uZW50cy51bD57XCJcXG5cIn08X2NvbXBvbmVudHMubGk+e1wiUmVtb3ZlZCB0aGUgXCJ9PF9jb21wb25lbnRzLmNvZGU+e1wibWF5Z29kaGVscHlvdVwifTwvX2NvbXBvbmVudHMuY29kZT57XCIgbGluayByZWRpcmVjdFwifTwvX2NvbXBvbmVudHMubGk+e1wiXFxuXCJ9PC9fY29tcG9uZW50cy51bD57XCJcXG5cIn08X2NvbXBvbmVudHMuaHIgLz57XCJcXG5cIn08X2NvbXBvbmVudHMuaDM+e1wiMjAyMS0xMi0yMlwifTwvX2NvbXBvbmVudHMuaDM+e1wiXFxuXCJ9PF9jb21wb25lbnRzLmg0PntcIkFkZGVkXCJ9PC9fY29tcG9uZW50cy5oND57XCJcXG5cIn08X2NvbXBvbmVudHMudWw+e1wiXFxuXCJ9PF9jb21wb25lbnRzLmxpPntcIk1hZGUgdGhlIG5hdmJhciBhbG1vc3QgdHJhbnNwYXJlbnQuXCJ9PC9fY29tcG9uZW50cy5saT57XCJcXG5cIn08L19jb21wb25lbnRzLnVsPntcIlxcblwifTxfY29tcG9uZW50cy5oND57XCJDaGFuZ2VkXCJ9PC9fY29tcG9uZW50cy5oND57XCJcXG5cIn08X2NvbXBvbmVudHMudWw+e1wiXFxuXCJ9PF9jb21wb25lbnRzLmxpPntcIkZpeGVkIHRoZSBnb29nbGUgYW5hbHl0aWNzLiBCZWZvcmUgYW5hbHl0aWNzIHN0dWZmIG5vdCB3b3JraW5nIGZvciBzb21lIHJlYXNvbi4gU28gSSBjb3BpZWQgdGhlIGdhIHRlbXBsYXRlIGZyb20gTmV4dGpzIDopXCJ9PC9fY29tcG9uZW50cy5saT57XCJcXG5cIn08X2NvbXBvbmVudHMubGk+e1wiU3RyaW5nLnJlcGxhY2VBbGwgbm90IHdvcmtpbmcgaW4gcHJvZHVjdGlvbiBmb3Igc29tZSByZWFzb24uIFNvIHBvbHlmaWxpaW5nIGl0IHdpdGggcmVnZXhcIn08L19jb21wb25lbnRzLmxpPntcIlxcblwifTwvX2NvbXBvbmVudHMudWw+e1wiXFxuXCJ9PF9jb21wb25lbnRzLmg0PntcIlJlbW92ZWRcIn08L19jb21wb25lbnRzLmg0PntcIlxcblwifTxfY29tcG9uZW50cy51bD57XCJcXG5cIn08X2NvbXBvbmVudHMubGk+e1wiVW5pbnN0YWxsZWQgUmVhY3QtZ2FcIn08L19jb21wb25lbnRzLmxpPntcIlxcblwifTwvX2NvbXBvbmVudHMudWw+e1wiXFxuXCJ9PF9jb21wb25lbnRzLmhyIC8+e1wiXFxuXCJ9PF9jb21wb25lbnRzLmgzPntcIjIwMjEtMTItMjFcIn08L19jb21wb25lbnRzLmgzPntcIlxcblwifTxfY29tcG9uZW50cy5oND57XCJBZGRlZFwifTwvX2NvbXBvbmVudHMuaDQ+e1wiXFxuXCJ9PF9jb21wb25lbnRzLnVsPntcIlxcblwifTxfY29tcG9uZW50cy5saT57XCJBZGRlZCBpbml0aWFsIHZlcnNpb24gb2YgdGhlIGluZGV4IHBhZ2UuIEJlZm9yZSBpbiBpbmRleCByb3V0ZSwgdGhlIHRyYWZmaWMgaXMgcmVkaXJlY3RlZCB0byB0aGUgL2Jsb2cgcGFnZS5cIn08L19jb21wb25lbnRzLmxpPntcIlxcblwifTxfY29tcG9uZW50cy5saT57XCJBZGRlZCByb2JvdHMudHh0IGZvciB0aGUgU0VPIHN0dWZmLlwifTwvX2NvbXBvbmVudHMubGk+e1wiXFxuXCJ9PF9jb21wb25lbnRzLmxpPntcIkNyZWF0ZWQgY3VzdG9tIE1hcmtkb3duIGNvbXBvbmVudCB0byByZW5kZXIgdGhlIG1hcmtkb3duLlwifTwvX2NvbXBvbmVudHMubGk+e1wiXFxuXCJ9PF9jb21wb25lbnRzLmxpPntcIkNyZWF0ZWQgQ2hhbmdlIGxvZyBmaWxlIHRvIGtlZXAgdHJhY2sgb2YgdGhlIHByb2dyZXNzLlwifTwvX2NvbXBvbmVudHMubGk+e1wiXFxuXCJ9PF9jb21wb25lbnRzLmxpPntcIkFkZGVkIFwifTxfY29tcG9uZW50cy5jb2RlPntcInNpdGVtYXAueG1sXCJ9PC9fY29tcG9uZW50cy5jb2RlPntcIiBmaWxlXCJ9PC9fY29tcG9uZW50cy5saT57XCJcXG5cIn08X2NvbXBvbmVudHMubGk+e1wiQWRkZWQgXCJ9PF9jb21wb25lbnRzLmNvZGU+e1wic2l0ZW1hcC54bWxcIn08L19jb21wb25lbnRzLmNvZGU+e1wiIHRvIHRoZSByb2JvdHMgZmlsZVwifTwvX2NvbXBvbmVudHMubGk+e1wiXFxuXCJ9PF9jb21wb25lbnRzLmxpPntcIkFkZGRlZCBcIn08X2NvbXBvbmVudHMuY29kZT57XCJhcmlhLWxhYmVsXCJ9PC9fY29tcG9uZW50cy5jb2RlPntcIiBmb3IgdGhlIGdpdGh1YiBpY29uIGluIHRoZSBmb290ZXJcIn08L19jb21wb25lbnRzLmxpPntcIlxcblwifTxfY29tcG9uZW50cy5saT57XCJBZGRkZWQgXCJ9PF9jb21wb25lbnRzLmNvZGU+e1wiYXJpYS1sYWJlbFwifTwvX2NvbXBvbmVudHMuY29kZT57XCIgZm9yIHRoZSB0d2l0dGVyIGljb24gaW4gdGhlIGZvb3RlclwifTwvX2NvbXBvbmVudHMubGk+e1wiXFxuXCJ9PF9jb21wb25lbnRzLmxpPntcIkFkZGRlZCBcIn08X2NvbXBvbmVudHMuY29kZT57XCJhcmlhLWxhYmVsXCJ9PC9fY29tcG9uZW50cy5jb2RlPntcIiBmb3IgdGhlIHJzcyBmZWVkIGljb24gaW4gdGhlIGZvb3RlclwifTwvX2NvbXBvbmVudHMubGk+e1wiXFxuXCJ9PF9jb21wb25lbnRzLmxpPntcIkFkZGVkIGdvb2dsZSBhbmFseXRpY3NcIn08L19jb21wb25lbnRzLmxpPntcIlxcblwifTwvX2NvbXBvbmVudHMudWw+e1wiXFxuXCJ9PF9jb21wb25lbnRzLmg0PntcIkNoYW5nZWRcIn08L19jb21wb25lbnRzLmg0PntcIlxcblwifTxfY29tcG9uZW50cy51bD57XCJcXG5cIn08X2NvbXBvbmVudHMubGk+e1wiXFxuXCJ9PF9jb21wb25lbnRzLnA+e1wiUmVuYW1lZCB0aGUgdGl0bGUgZnJvbSAnQ2hhbmdlbG9nIHwgTXV0aHVrdW1hcicgLT4gJ0NoYW5nZWxvZyB8IE51bGxpc2guaW4nLiBJdCBkb2Vzbid0IG1ha2Ugc2Vuc2UgdG8gaGF2ZSBNdXRodWt1bWFyIHRvIHRoZSBjaGFuZ2Vsb2cuXCJ9PC9fY29tcG9uZW50cy5wPntcIlxcblwifTwvX2NvbXBvbmVudHMubGk+e1wiXFxuXCJ9PF9jb21wb25lbnRzLmxpPntcIlxcblwifTxfY29tcG9uZW50cy5wPntcIkluIGluZGV4IHJvdXRlLCBjaGFuZ2VkIHRoZSB0aXRsZSgnQmxvZyB8IE11dGh1a3VtYXInID0+ICdNdXRodWt1bWFyJykuXCJ9PC9fY29tcG9uZW50cy5wPntcIlxcblwifTwvX2NvbXBvbmVudHMubGk+e1wiXFxuXCJ9PF9jb21wb25lbnRzLmxpPntcIlxcblwifTxfY29tcG9uZW50cy5wPntcIlVwZGF0ZSByb2JvdHMudHh0IGNvbnRlbnRcIn08L19jb21wb25lbnRzLnA+e1wiXFxuXCJ9PF9jb21wb25lbnRzLnByZT48X2NvbXBvbmVudHMuY29kZSBjbGFzc05hbWU9XCJsYW5ndWFnZS10eHRcIj57XCJVc2VyLWFnZW50OiAqXFxuQWxsb3c6IC9cXG5cIn08L19jb21wb25lbnRzLmNvZGU+PC9fY29tcG9uZW50cy5wcmU+e1wiXFxuXCJ9PC9fY29tcG9uZW50cy5saT57XCJcXG5cIn08X2NvbXBvbmVudHMubGk+e1wiXFxuXCJ9PF9jb21wb25lbnRzLnA+e1wiTW92ZWQgdGhlIFwifTxfY29tcG9uZW50cy5jb2RlPntcInJvYm90cy50eHRcIn08L19jb21wb25lbnRzLmNvZGU+e1wiIGZpbGUgZnJvbSByZXNvdXJjZSByb3V0ZXMgdG8gcHVibGljIGZvbGRlci5cIn08L19jb21wb25lbnRzLnA+e1wiXFxuXCJ9PF9jb21wb25lbnRzLnByZT48X2NvbXBvbmVudHMuY29kZSBjbGFzc05hbWU9XCJsYW5ndWFnZS10eHRcIj57XCJVc2VyLWFnZW50OiAqXFxuQWxsb3c6IC9cXG5cXG5TaXRlbWFwOiBodHRwczovL251bGxpc2guaW4vc2l0ZW1hcC54bWxcXG5cIn08L19jb21wb25lbnRzLmNvZGU+PC9fY29tcG9uZW50cy5wcmU+e1wiXFxuXCJ9PC9fY29tcG9uZW50cy5saT57XCJcXG5cIn08X2NvbXBvbmVudHMubGk+e1wiXFxuXCJ9PF9jb21wb25lbnRzLnA+e1wiQ2hhbmdlZCBcIn08X2NvbXBvbmVudHMuY29kZT57XCJSZWFkIG1vcmVcIn08L19jb21wb25lbnRzLmNvZGU+e1wiIGluIHRoZSBibG9nIHRvIFwifTxfY29tcG9uZW50cy5jb2RlPntcIkNvbnRpbnVlIHJlYWRpbmdcIn08L19jb21wb25lbnRzLmNvZGU+e1wiLiBSZWFkIG1vcmUgc2VlbXMgdmFndWUgYW5kIGdlbmVyaWMuIENvbnRpbnVlIFJlYWRpbmcgc2VlbXMgb2theSB0aGFuIFJlYWQgbW9yZS5cIn08L19jb21wb25lbnRzLnA+e1wiXFxuXCJ9PC9fY29tcG9uZW50cy5saT57XCJcXG5cIn08X2NvbXBvbmVudHMubGk+e1wiXFxuXCJ9PF9jb21wb25lbnRzLnA+e1wiVXBncmFkZWQgdG8gcmVtaXggRk9STSBmb3IgdGhlIGJsb2cgcG9zdCBzZWFyY2hcIn08L19jb21wb25lbnRzLnA+e1wiXFxuXCJ9PC9fY29tcG9uZW50cy5saT57XCJcXG5cIn08L19jb21wb25lbnRzLnVsPntcIlxcblwifTxfY29tcG9uZW50cy5oND57XCJSZW1vdmVkXCJ9PC9fY29tcG9uZW50cy5oND57XCJcXG5cIn08X2NvbXBvbmVudHMudWw+e1wiXFxuXCJ9PF9jb21wb25lbnRzLmxpPntcIlJlbW92ZWQgZHVwbGljYXRlIHZpZXdwb3J0IHRhZy5cIn08L19jb21wb25lbnRzLmxpPntcIlxcblwifTxfY29tcG9uZW50cy5saT57XCJSZW1vdmVkIHJvYm90cyBoZWFkZXIgZnJvbSB0aGUgbWV0YS4gQWxsIHRoZSByb2JvdHMgc3R1ZmYgYXJlIG1vdmVkIHRvIHRoZSByb2JvdHMudHh0IGZpbGUvcm91dGUuXCJ9PC9fY29tcG9uZW50cy5saT57XCJcXG5cIn08L19jb21wb25lbnRzLnVsPjwvPjtcbiAgcmV0dXJuIE1EWExheW91dCA/IDxNRFhMYXlvdXQgey4uLnByb3BzfT57X2NvbnRlbnR9PC9NRFhMYXlvdXQ+IDogX2NvbnRlbnQ7XG59XG5leHBvcnQgZGVmYXVsdCBNRFhDb250ZW50O1xuXG5cbmV4cG9ydCBjb25zdCBmaWxlbmFtZSA9IFwiY2hhbmdlbG9nLm1keFwiO1xuZXhwb3J0IGNvbnN0IGhlYWRlcnMgPSB0eXBlb2YgYXR0cmlidXRlcyAhPT0gXCJ1bmRlZmluZWRcIiAmJiBhdHRyaWJ1dGVzLmhlYWRlcnM7XG5leHBvcnQgY29uc3QgbWV0YSA9IHR5cGVvZiBhdHRyaWJ1dGVzICE9PSBcInVuZGVmaW5lZFwiICYmIGF0dHJpYnV0ZXMubWV0YTtcbmV4cG9ydCBjb25zdCBsaW5rcyA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAiLCAiaW1wb3J0IHR5cGUgeyBMb2FkZXJGdW5jdGlvbiB9IGZyb20gJ3JlbWl4J1xuXG5pbXBvcnQgeyBnZXRQb3N0cyB9IGZyb20gJ34vdXRpbHMvY21zLnNlcnZlcidcblxuZnVuY3Rpb24gZXNjYXBlUmVnRXhwKHN0cmluZzogc3RyaW5nKSB7XG4gIHJldHVybiBzdHJpbmcucmVwbGFjZSgvWy4qKz9eJHt9KCl8W1xcXVxcXFxdL2csICdcXFxcJCYnKSAvLyAkJiBtZWFucyB0aGUgd2hvbGUgbWF0Y2hlZCBzdHJpbmdcbn1cbmZ1bmN0aW9uIHJlcGxhY2VBbGwoc3RyOiBzdHJpbmcsIG1hdGNoOiBzdHJpbmcsIHJlcGxhY2VtZW50OiBzdHJpbmcpIHtcbiAgcmV0dXJuIHN0ci5yZXBsYWNlKG5ldyBSZWdFeHAoZXNjYXBlUmVnRXhwKG1hdGNoKSwgJ2cnKSwgKCkgPT4gcmVwbGFjZW1lbnQpXG59XG5cbmZ1bmN0aW9uIGVzY2FwZUNkYXRhKHM6IHN0cmluZykge1xuICByZXR1cm4gcmVwbGFjZUFsbChzLCAnXV0+JywgJ11dXV0+PCFbQ0RBVEFbPicpXG59XG5cbmZ1bmN0aW9uIGVzY2FwZUh0bWwoczogc3RyaW5nKSB7XG4gIGNvbnN0IHJlc3VsdDEgPSByZXBsYWNlQWxsKHMsICcmJywgJyZhbXA7JylcbiAgY29uc3QgcmVzdWx0MiA9IHJlcGxhY2VBbGwocmVzdWx0MSwgJzwnLCAnJmx0OycpXG4gIGNvbnN0IHJlc3VsdDMgPSByZXBsYWNlQWxsKHJlc3VsdDIsICc+JywgJyZndDsnKVxuICBjb25zdCByZXN1bHQ0ID0gcmVwbGFjZUFsbChyZXN1bHQzLCAnXCInLCAnJnF1b3Q7JylcbiAgY29uc3QgcmVzdWx0NSA9IHJlcGxhY2VBbGwocmVzdWx0NCwgXCInXCIsICcmIzAzOTsnKVxuICByZXR1cm4gcmVzdWx0NVxufVxuXG5leHBvcnQgY29uc3QgbG9hZGVyOiBMb2FkZXJGdW5jdGlvbiA9IGFzeW5jICh7IHJlcXVlc3QgfSkgPT4ge1xuICBjb25zdCBibG9ncyA9IGF3YWl0IGdldFBvc3RzKClcblxuICBjb25zdCBob3N0ID0gcmVxdWVzdC5oZWFkZXJzLmdldCgnWC1Gb3J3YXJkZWQtSG9zdCcpID8/IHJlcXVlc3QuaGVhZGVycy5nZXQoJ2hvc3QnKVxuXG4gIGlmICghaG9zdCkge1xuICAgIHRocm93IG5ldyBFcnJvcignQ291bGQgbm90IGRldGVybWluZSBkb21haW4gVVJMLicpXG4gIH1cblxuICBjb25zdCBwcm90b2NvbCA9IGhvc3QuaW5jbHVkZXMoJ2xvY2FsaG9zdCcpID8gJ2h0dHAnIDogJ2h0dHBzJ1xuICBjb25zdCBkb21haW4gPSBgJHtwcm90b2NvbH06Ly8ke2hvc3R9YFxuICBjb25zdCBibG9nVXJsID0gYCR7ZG9tYWlufS9ibG9nYFxuXG4gIGNvbnN0IHJzc1N0cmluZyA9IGBcbiAgICA8cnNzIHhtbG5zOmJsb2dDaGFubmVsPVwiJHtibG9nVXJsfVwiIHZlcnNpb249XCIyLjBcIj5cbiAgICAgIDxjaGFubmVsPlxuICAgICAgICA8dGl0bGU+TXV0aHVrdW1hciBibG9nPC90aXRsZT5cbiAgICAgICAgPGxpbms+JHtibG9nVXJsfTwvbGluaz5cbiAgICAgICAgPGRlc2NyaXB0aW9uPlRoZSBNdXRodWt1bWFyJ3MgQmxvZzwvZGVzY3JpcHRpb24+XG4gICAgICAgIDxsYW5ndWFnZT5lbi11czwvbGFuZ3VhZ2U+XG4gICAgICAgIDxnZW5lcmF0b3I+UlNTIGZlZWQgZ2VuZXJhdG9yPC9nZW5lcmF0b3I+XG4gICAgICAgIDx0dGw+NDA8L3R0bD5cbiAgICAgICAgJHtibG9nc1xuICAgICAgICAgIC5tYXAoKGJsb2cpID0+XG4gICAgICAgICAgICBgXG4gICAgICAgICAgICA8aXRlbT5cbiAgICAgICAgICAgICAgPHRpdGxlPjwhW0NEQVRBWyR7ZXNjYXBlQ2RhdGEoYmxvZy50aXRsZSl9XV0+PC90aXRsZT5cbiAgICAgICAgICAgICAgPGRlc2NyaXB0aW9uPjwhW0NEQVRBWyR7ZXNjYXBlSHRtbChibG9nLmV4Y2VycHQpfV1dPjwvZGVzY3JpcHRpb24+XG4gICAgICAgICAgICAgIDxhdXRob3I+PCFbQ0RBVEFbJHtlc2NhcGVDZGF0YSgnTXV0aHVrdW1hcicpfV1dPjwvYXV0aG9yPlxuICAgICAgICAgICAgICA8cHViRGF0ZT4ke2Jsb2cucHVibGlzaGVkQXR9PC9wdWJEYXRlPlxuICAgICAgICAgICAgICA8bGluaz4ke2Jsb2dVcmx9LyR7YmxvZy5zbHVnfTwvbGluaz5cbiAgICAgICAgICAgICAgPGd1aWQ+JHtibG9nVXJsfS8ke2Jsb2cuc2x1Z308L2d1aWQ+XG4gICAgICAgICAgICA8L2l0ZW0+XG4gICAgICAgICAgYC50cmltKCksXG4gICAgICAgICAgKVxuICAgICAgICAgIC5qb2luKCdcXG4nKX1cbiAgICAgIDwvY2hhbm5lbD5cbiAgICA8L3Jzcz5cbiAgYC50cmltKClcblxuICByZXR1cm4gbmV3IFJlc3BvbnNlKHJzc1N0cmluZywge1xuICAgIGhlYWRlcnM6IHtcbiAgICAgICdDYWNoZS1Db250cm9sJzogYHB1YmxpYywgbWF4LWFnZT0kezYwICogMTB9LCBzLW1heGFnZT0kezYwICogNjAgKiAyNH1gLFxuICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi94bWwnLFxuICAgICAgJ0NvbnRlbnQtTGVuZ3RoJzogU3RyaW5nKEJ1ZmZlci5ieXRlTGVuZ3RoKHJzc1N0cmluZykpLFxuICAgICAgJ1gtUm9ib3RzLVRhZyc6ICduby1pbmRleCcsXG4gICAgfSxcbiAgfSlcbn1cbiIsICJpbXBvcnQgeyBqc29uLCBMaW5rc0Z1bmN0aW9uLCBNZXRhRnVuY3Rpb24sIHVzZUxvYWRlckRhdGEgfSBmcm9tICdyZW1peCdcbmltcG9ydCB0eXBlIHsgTG9hZGVyRnVuY3Rpb24gfSBmcm9tICdyZW1peCdcblxuaW1wb3J0IHsgcXVvdGVzLCBRdW90ZVR5cGUgfSBmcm9tICd+L3NvdXJjZXMvcXVvdGVzJ1xuaW1wb3J0IHsgQ29udGFpbmVyLCBRdW90ZSB9IGZyb20gJ34vY29tcG9uZW50cydcblxuZXhwb3J0IGNvbnN0IG1ldGE6IE1ldGFGdW5jdGlvbiA9ICgpID0+IHtcbiAgcmV0dXJuIHtcbiAgICAnYXBwbGUtbW9iaWxlLXdlYi1hcHAtdGl0bGUnOiAnUXVvdGVzJyxcbiAgICB0aXRsZTogJ1F1b3RlcycsXG4gICAgZGVzY3JpcHRpb246IGBMaXN0IG9mIE11dGh1a3VtYXIncyBmYXZvcml0ZSBRdW90ZXMgSSBmb3VuZCBvbiBJbnRlcm5ldCBhbmQgb24gd2hlbiByZWFkaW5nIGJvb2tzIGFuZCB3YXRjaGluZyBZb3V0dWJlIHZpZGVvc2AsXG4gICAgcGFnZW5hbWU6ICdRdW90ZXMnLFxuICAgIHJvYm90czogJ2luZGV4LCBmb2xsb3cnLFxuICAgIGltYWdlOiAnL2ltYWdlcy9vZy5qcGcnLFxuICB9XG59XG5cbmV4cG9ydCBjb25zdCBsaW5rczogTGlua3NGdW5jdGlvbiA9ICgpID0+IHtcbiAgcmV0dXJuIFtcbiAgICB7XG4gICAgICByZWw6ICdjYW5vbmljYWwnLFxuICAgICAgaHJlZjogJ2h0dHBzOi8vd3d3Lm51bGxpc2guaW4vcXVvdGVzJyxcbiAgICB9LFxuICBdXG59XG5cbmV4cG9ydCBjb25zdCBsb2FkZXI6IExvYWRlckZ1bmN0aW9uID0gKCkgPT4ge1xuICByZXR1cm4ganNvbihxdW90ZXMpXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFF1b3RlcygpIHtcbiAgY29uc3QgcXVvdGVzID0gdXNlTG9hZGVyRGF0YTxBcnJheTxRdW90ZVR5cGU+PigpXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJweS0xNlwiPlxuICAgICAgPENvbnRhaW5lciBjbGFzc05hbWU9XCJtYXgtdy0zeGxcIj5cbiAgICAgICAgPG9sPlxuICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJtYi00IHRleHQteGwgZm9udC1ib2xkIG1kOnRleHQtMnhsXCI+TXkgRmF2b3JpdGUgUXVvdGVzPC9oMj5cbiAgICAgICAgICB7cXVvdGVzLm1hcCgocXVvdGUpID0+IChcbiAgICAgICAgICAgIDxsaSBrZXk9e3F1b3RlLmlkfSBjbGFzc05hbWU9e2BmbGV4IGp1c3RpZnktc3RhcnQgbWItMiBpdGVtcy1zdGFydGB9PlxuICAgICAgICAgICAgICA8UXVvdGUgey4uLnF1b3RlfSBjbGFzc05hbWU9XCJteC0wIGxnOnctZnVsbFwiPlxuICAgICAgICAgICAgICAgIHtxdW90ZS5xdW90ZX1cbiAgICAgICAgICAgICAgPC9RdW90ZT5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvb2w+XG4gICAgICA8L0NvbnRhaW5lcj5cbiAgICA8L2Rpdj5cbiAgKVxufVxuIiwgImV4cG9ydCB0eXBlIFF1b3RlVHlwZSA9IHtcbiAgcXVvdGU6IHN0cmluZ1xuICBpZDogc3RyaW5nXG4gIGF1dGhvcjogc3RyaW5nXG59XG5cbmV4cG9ydCBjb25zdCBxdW90ZXM6IEFycmF5PFF1b3RlVHlwZT4gPSBbXG4gIHtcbiAgICBxdW90ZTogJ1RoZSBiZXN0IGlzIHRoZSBlbmVteSBvZiBnb29kJyxcbiAgICBpZDogJzE1YTA5ZTNiLTE2ZWItNDgxZC05MTI1LTRiZWZhYzk2NDQ4NicsXG4gICAgYXV0aG9yOiAnVm9sdGFpcmUnLFxuICB9LFxuICB7XG4gICAgcXVvdGU6IGB5b3VyIGZ1dHVyZSBuZWVkcyB5b3UsIHlvdXIgcGFzdCBkb2Vzbid0YCxcbiAgICBpZDogJzIzZDQ0MzlmLTFiOGUtNDhhMS1hNzhkLWFkMTdkODBlNWZhYicsXG4gICAgYXV0aG9yOiAnU2FudmVsbG8nLFxuICB9LFxuICB7XG4gICAgcXVvdGU6ICdXaGVuIHNvbWV0aGluZyBpcyBpbXBvcnRhbnQgZW5vdWdoLCB5b3UgZG8gaXQgZXZlbiBpZiB0aGUgb2RkcyBhcmUgbm90IGluIHlvdXIgZmF2b3IuJyxcbiAgICBpZDogJzZhNzgxZjQzLTlhYjAtNDk3ZC04YzFhLTliOGYxZjI0YTkxMicsXG4gICAgYXV0aG9yOiAnRWxvbiBNdXNrJyxcbiAgfSxcbl1cbiIsICJpbXBvcnQgeyBMaW5rc0Z1bmN0aW9uLCBNZXRhRnVuY3Rpb24gfSBmcm9tICdyZW1peCdcblxuaW1wb3J0IHsgQ29udGFpbmVyIH0gZnJvbSAnfi9jb21wb25lbnRzJ1xuXG5leHBvcnQgY29uc3QgbWV0YTogTWV0YUZ1bmN0aW9uID0gKCkgPT4ge1xuICByZXR1cm4ge1xuICAgICdhcHBsZS1tb2JpbGUtd2ViLWFwcC10aXRsZSc6ICdBYm91dCcsXG4gICAgdGl0bGU6ICdBYm91dCcsXG4gICAgZGVzY3JpcHRpb246XG4gICAgICAnTXV0aHVrdW1hciBpcyBhIGZ1bGwgc3RhY2sgZGV2ZWxvcGVyLCBsaXZpbmcgaW4gVGFtaWwgTmFkdSwgSW5kaWEuIEhlIHdyaXRlIGNvZGUsIGxpc3RlbiB0byBtdXNpYyBhbmQgbG92ZXMgdG8gcmVhZCBib29rcy4gSGUgb2NjYXNpb25hbGx5IHdyaXRlIG9uIFJlYWN0LCBKYXZhc2NyaXB0IGFuZCBpbiBvdGhlciB3ZWIgZGV2ZWxvcG1lbnQgdG9waWNzJyxcbiAgICBwYWdlbmFtZTogJ0Fib3V0JyxcbiAgICByb2JvdHM6ICdpbmRleCwgZm9sbG93JyxcbiAgICBpbWFnZTogJy9pbWFnZXMvb2cuanBnJyxcbiAgfVxufVxuXG5leHBvcnQgY29uc3QgbGlua3M6IExpbmtzRnVuY3Rpb24gPSAoKSA9PiB7XG4gIHJldHVybiBbXG4gICAge1xuICAgICAgcmVsOiAnY2Fub25pY2FsJyxcbiAgICAgIGhyZWY6ICdodHRwczovL3d3dy5udWxsaXNoLmluL2Fib3V0JyxcbiAgICB9LFxuICBdXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFib3V0KCkge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwicHktMTZcIj5cbiAgICAgIDxDb250YWluZXI+XG4gICAgICAgIDxpbWdcbiAgICAgICAgICBzcmM9XCIvaW1hZ2VzL3Byb2ZpbGUuanBnXCJcbiAgICAgICAgICB3aWR0aD17MjAwfVxuICAgICAgICAgIGhlaWdodD17MjAwfVxuICAgICAgICAgIGNsYXNzTmFtZT1cIm14LWF1dG8gbWItOCByb3VuZGVkLWZ1bGxcIlxuICAgICAgICAgIGFsdD1cIk11dGh1a3VtYXJcIlxuICAgICAgICAvPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgbWF4LXctM3hsIG14LWF1dG8gc3BhY2UteS00IHRleHQtYmFzZSBtZDp0ZXh0LWxnXCI+XG4gICAgICAgICAgPHA+XG4gICAgICAgICAgICBIZXksIEkmYXBvczttIE11dGh1a3VtYXIuIEkmYXBvczttIGEgZnVsbCBzdGFjayBkZXZlbG9wZXIuIEkgbGlrZXMgdG8gd3JpdGUgY29kZS4gSVxuICAgICAgICAgICAgbGlzdGVuIHRvIG11c2ljLiBBbmQgSSBvY2Nhc2lvbmFsbHkgd3JpdGUgb24gUmVhY3QsIEphdmFzY3JpcHQgYW5kIG90aGVyIHN0dWZmLiBMb3ZlcyB0b1xuICAgICAgICAgICAgcmVhZCBib29rcy5cbiAgICAgICAgICA8L3A+XG4gICAgICAgICAgPHA+XG4gICAgICAgICAgICBDdXJyZW50bHkgSSZhcG9zO20gaW4gbG92ZSB3aXRoIGJ1aWxkaW5nIHdlYnNpdGUgd2l0aCBSZW1peC4gQW5kIEkgYWxzbyBsaWtlcyB0byB0cnkgb3V0XG4gICAgICAgICAgICBuZXcgdGVjaG5vbG9naWVzIGFuZCBidWlsZCBzdHVmZiB3aXRoIGl0IGZvciBwcmFjdGljZS5cbiAgICAgICAgICA8L3A+XG4gICAgICAgICAgPHA+XG4gICAgICAgICAgICA8YVxuICAgICAgICAgICAgICBocmVmPVwiaHR0cHM6Ly90d2l0dGVyLmNvbS9Sb2JlcnRHcmVlbmVcIlxuICAgICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICAgICAgICByZWw9XCJub3JlZmVycmVyXCJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibGluay1mb250LWNvbG9yXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgUm9iZXJ0IEdyZWVuZVxuICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgLHsnICd9XG4gICAgICAgICAgICA8YVxuICAgICAgICAgICAgICBocmVmPVwiaHR0cHM6Ly90d2l0dGVyLmNvbS9SeWFuSG9saWRheVwiXG4gICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgICAgICAgIHJlbD1cIm5vcmVmZXJyZXJcIlxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJsaW5rLWZvbnQtY29sb3JcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICBSeWFuIEhvbGlkYXlcbiAgICAgICAgICAgIDwvYT57JyAnfVxuICAgICAgICAgICAgYW5keycgJ31cbiAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgIGhyZWY9XCJodHRwczovL3R3aXR0ZXIuY29tL0lBbU1hcmtNYW5zb25cIlxuICAgICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICAgICAgICByZWw9XCJub3JlZmVycmVyXCJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibGluay1mb250LWNvbG9yXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgTWFyayBNYW5zb25cbiAgICAgICAgICAgIDwvYT57JyAnfVxuICAgICAgICAgICAgYXJlIG15IGZhdm9yaXRlcyBhdXRob3JzIGluIHRoZSBjYXRlZ29yeSBvZiBCb29rcy5cbiAgICAgICAgICA8L3A+XG4gICAgICAgICAgPHA+QXQgcHJlc2VudCwgSSZhcG9zO20gdW5lbXBsb3llZCBhbmQgZmlndXJpbmcgb3V0IHdoYXQgdG8gZG8gd2l0aCBteSBsaWZlLjwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L0NvbnRhaW5lcj5cbiAgICA8L2Rpdj5cbiAgKVxufVxuIiwgImltcG9ydCB7IGpzb24sIExpbmtzRnVuY3Rpb24sIExvYWRlckZ1bmN0aW9uLCBNZXRhRnVuY3Rpb24sIHVzZUxvYWRlckRhdGEgfSBmcm9tICdyZW1peCdcbmltcG9ydCB7IExpbmssIHVzZUNhdGNoIH0gZnJvbSAncmVtaXgnXG5cbmltcG9ydCB7IFF1b3RlLCBGb3VyMDAsIENvbnRhaW5lciwgSG9tZVNlY3Rpb24sIExpbmtCdXR0b24gfSBmcm9tICd+L2NvbXBvbmVudHMnXG5pbXBvcnQgeyBnZXRRdW90ZSB9IGZyb20gJ34vdXRpbHMvaW5kZXguc2VydmVyJ1xuaW1wb3J0IHsgY29tbWl0U2Vzc2lvbiwgZ2V0U2Vzc2lvbiB9IGZyb20gJ34vdXRpbHMvc2Vzc2lvbi5zZXJ2ZXInXG5cbnR5cGUgTG9hZGVyRGF0YSA9IHtcbiAgcXVvdGU6IEF3YWl0ZWQ8UmV0dXJuVHlwZTx0eXBlb2YgZ2V0UXVvdGU+PlxufVxuXG5leHBvcnQgY29uc3QgbWV0YTogTWV0YUZ1bmN0aW9uID0gKCkgPT4ge1xuICByZXR1cm4ge1xuICAgIGtleXdvcmRzOiAnTnVsbGlzaC5pbiwgTGVhcm4gSmF2YXNjcmlwdCwgTGVhcm4gVHlwZXNjcmlwdCBhbmQgTGVhcm4gQ1NTLCBDbGVhbiBjb2RlJyxcbiAgfVxufVxuXG5leHBvcnQgY29uc3QgbGlua3M6IExpbmtzRnVuY3Rpb24gPSAoKSA9PiB7XG4gIHJldHVybiBbXG4gICAge1xuICAgICAgcmVsOiAnY2Fub25pY2FsJyxcbiAgICAgIGhyZWY6ICdodHRwczovL3d3dy5udWxsaXNoLmluJyxcbiAgICB9LFxuICBdXG59XG5cbmV4cG9ydCBjb25zdCBsb2FkZXI6IExvYWRlckZ1bmN0aW9uID0gYXN5bmMgKHsgcmVxdWVzdCB9KSA9PiB7XG4gIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBnZXRTZXNzaW9uKHJlcXVlc3QuaGVhZGVycy5nZXQoJ0Nvb2tpZScpKVxuXG4gIGNvbnN0IHF1b3RlID0gYXdhaXQgZ2V0UXVvdGUocmVxdWVzdClcblxuICBzZXNzaW9uLnNldCgncXVvdGUnLCBxdW90ZSlcblxuICByZXR1cm4ganNvbihcbiAgICB7IHF1b3RlIH0sXG4gICAge1xuICAgICAgaGVhZGVyczoge1xuICAgICAgICAnU2V0LUNvb2tpZSc6IGF3YWl0IGNvbW1pdFNlc3Npb24oc2Vzc2lvbiksXG4gICAgICB9LFxuICAgIH0sXG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQmxvZygpIHtcbiAgY29uc3QgZGF0YSA9IHVzZUxvYWRlckRhdGE8TG9hZGVyRGF0YT4oKVxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwicHktNCBsZzpweS04XCI+XG4gICAgICA8Q29udGFpbmVyPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB5LTggdGV4dC1sZyBib3JkZXItYiBtZDpweS0xNiBib3JkZXItY29sb3JcIj5cbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJtYi0yXCI+SGV5LCBJJmFwb3M7bTwvcD5cbiAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC0zeGwgZm9udC1ib2xkIG1kOnRleHQtNnhsXCI+TXV0aHVrdW1hcjwvaDE+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIG10LTQgc3BhY2UteS0yIHRleHQtYmFzZSBsaWdodC1mb250LWNvbG9yIG1kOnRleHQtbGdcIj5cbiAgICAgICAgICAgIDxwPldlbGNvbWUgdG8gbXkgUGVyc29uYWwgd2Vic2l0ZS48L3A+XG4gICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgSSB3cml0ZSA8c3Ryb25nPmNvZGU8L3N0cm9uZz4uIEkgbGlzdGVuIHRvIDxzdHJvbmc+bXVzaWM8L3N0cm9uZz4uIExvdmVzIHRvIHJlYWR7JyAnfVxuICAgICAgICAgICAgICA8c3Ryb25nPmJvb2tzPC9zdHJvbmc+LiBBbmQgSSBvY2Nhc2lvbmFsbHkgd3JpdGUgYXJ0aWNsZXMgb24gUmVhY3QsIEphdmFzY3JpcHQgYW5kXG4gICAgICAgICAgICAgIG90aGVyIHN0dWZmLlxuICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgIEZlZWwgZnJlZSB0byBwb2tlIGFyb3VuZC4gVGhlcmUgYXJlIHNvbWV7JyAnfVxuICAgICAgICAgICAgICA8TGluayB0bz1cIi9sb2dpblwiIGNsYXNzTmFtZT1cImxpbmstZm9udC1jb2xvclwiPlxuICAgICAgICAgICAgICAgIGVhc3RlciBlZ2dzXG4gICAgICAgICAgICAgIDwvTGluaz57JyAnfVxuICAgICAgICAgICAgICBpbiB0aGlzIHdlYnNpdGUuIElmIHlvdSBmaW5kIGFueSBvZiB0aGVtLCBsZXQgbWUga25vdyBvbnsnICd9XG4gICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vcmQubnVsbGlzaC5pbi90d2l0dGVyXCJcbiAgICAgICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICAgICAgICAgIHJlbD1cIm5vcmVmZXJyZXJcIlxuICAgICAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJ0d2l0dGVyXCJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJsaW5rLWZvbnQtY29sb3JcIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgVHdpdHRlclxuICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgIC5cbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxIb21lU2VjdGlvbiB0aXRsZT1cIlF1b3RlIG9mIHRoZSBkYXlcIj5cbiAgICAgICAgICA8UXVvdGUgYXV0aG9yPXtkYXRhLnF1b3RlLnF1b3RlLmF1dGhvcn0+e2RhdGEucXVvdGUucXVvdGUucXVvdGV9PC9RdW90ZT5cbiAgICAgICAgPC9Ib21lU2VjdGlvbj5cbiAgICAgICAgPEhvbWVTZWN0aW9uIHRpdGxlPVwiV2Vic2l0ZSBtYXBcIiBzaG93Qm9yZGVyPXtmYWxzZX0+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBtdC04XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wganVzdGlmeS1jZW50ZXIgdy1mdWxsIHNwYWNlLXktMiBtZDpzcGFjZS15LTAgbWQ6ZmxleC1yb3dcIj5cbiAgICAgICAgICAgICAgPExpbmtCdXR0b24gdG89XCIvYmxvZ1wiIGNsYXNzTmFtZT1cInctZnVsbCBtZDpyb3VuZGVkLXItbm9uZSBtZDp3LWF1dG9cIj5cbiAgICAgICAgICAgICAgICBSZWFkIGFydGljbGVzXG4gICAgICAgICAgICAgIDwvTGlua0J1dHRvbj5cbiAgICAgICAgICAgICAgPExpbmtCdXR0b25cbiAgICAgICAgICAgICAgICB0bz1cIi9hYm91dFwiXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaW5saW5lLWJsb2NrIHctZnVsbCBtZDpyb3VuZGVkLWwtbm9uZSBtZDpyb3VuZGVkLXItbm9uZSBtZDp3LWF1dG9cIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgTW9yZSBhYm91dCBtZVxuICAgICAgICAgICAgICA8L0xpbmtCdXR0b24+XG4gICAgICAgICAgICAgIDxMaW5rQnV0dG9uXG4gICAgICAgICAgICAgICAgdG89XCIvY2hhbmdlbG9nXCJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpbmxpbmUtYmxvY2sgdy1mdWxsIG1kOnJvdW5kZWQtbC1ub25lIG1kOnctYXV0b1wiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICBXZWJzaXRlIGNoYW5nZWxvZ1xuICAgICAgICAgICAgICA8L0xpbmtCdXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9Ib21lU2VjdGlvbj5cbiAgICAgIDwvQ29udGFpbmVyPlxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBDYXRjaEJvdW5kYXJ5KCkge1xuICBjb25zdCBjYXVnaHQgPSB1c2VDYXRjaCgpXG5cbiAgY29uc3QgbWVzc2FnZSA9IGNhdWdodC5zdGF0dXMgPT09IDQwNCA/IGNhdWdodC5kYXRhLm1lc3NhZ2UgOiAnT29wc2llcy4uIFNvbWV0aGluZyB3ZW50IHdyb25nLidcblxuICBpZiAoY2F1Z2h0LnN0YXR1cyA9PT0gNDA0KSB7XG4gICAgcmV0dXJuIDxGb3VyMDAgdGl0bGU9XCI0MDRcIiBtZXNzYWdlPXttZXNzYWdlfSBsaW5rPVwiL2Jsb2dcIiAvPlxuICB9XG5cbiAgcmV0dXJuIDxGb3VyMDAgdGl0bGU9XCI1MDBcIiBtZXNzYWdlPXttZXNzYWdlfSBsaW5rPVwiL2Jsb2dcIiAvPlxufVxuXG5leHBvcnQgZnVuY3Rpb24gRXJyb3JCb3VuZGFyeSgpIHtcbiAgcmV0dXJuIDxGb3VyMDAgdGl0bGU9XCI1MDBcIiBtZXNzYWdlPVwiT29wc2llcy4uLiBTb21ldGhpbmcgd2VudCB3cm9uZy5cIiBsaW5rPVwiL1wiIC8+XG59XG4iLCAiaW1wb3J0IHR5cGUgeyBRdW90ZVR5cGUgfSBmcm9tICcuLi9zb3VyY2VzL3F1b3RlcydcblxuaW1wb3J0IHsgcXVvdGVzIH0gZnJvbSAnLi4vc291cmNlcy9xdW90ZXMnXG5pbXBvcnQgeyBnZXRTZXNzaW9uIH0gZnJvbSAnfi91dGlscy9zZXNzaW9uLnNlcnZlcidcblxuY29uc3QgZ2V0UmFuZG9tSW50QmV0d2VlblJhbmdlID0gKG1pbjogbnVtYmVyLCBtYXg6IG51bWJlcikgPT4ge1xuICBtaW4gPSBNYXRoLmNlaWwobWluKVxuICBtYXggPSBNYXRoLmZsb29yKG1heClcbiAgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChtYXggLSBtaW4gKyAxKSkgKyBtaW5cbn1cblxuY29uc3QgZ2V0UXVvdGUgPSBhc3luYyAocmVxdWVzdDogUmVxdWVzdCkgPT4ge1xuICBjb25zdCBzZXNzaW9uID0gYXdhaXQgZ2V0U2Vzc2lvbihyZXF1ZXN0LmhlYWRlcnMuZ2V0KCdDb29raWUnKSlcblxuICBjb25zdCB0b2RheSA9IG5ldyBEYXRlKCkudG9Mb2NhbGVEYXRlU3RyaW5nKClcblxuICBsZXQgcXVvdGUgPSBzZXNzaW9uLmdldCgncXVvdGUnKVxuXG4gIGlmIChxdW90ZT8ubGFzdFVwZGF0ZWQgIT09IHRvZGF5IHx8ICFxdW90ZSkge1xuICAgIGNvbnN0IGluZGV4ID0gZ2V0UmFuZG9tSW50QmV0d2VlblJhbmdlKDAsIHF1b3Rlcy5sZW5ndGggLSAxKVxuICAgIHF1b3RlID0ge1xuICAgICAgcXVvdGU6IHF1b3Rlc1tpbmRleF0sXG4gICAgICBsYXN0VXBkYXRlZDogdG9kYXksXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHF1b3RlIGFzIHsgcXVvdGU6IFF1b3RlVHlwZTsgbGFzdFVwZGF0ZWQ6IHN0cmluZyB9XG59XG5cbmV4cG9ydCB7IGdldFJhbmRvbUludEJldHdlZW5SYW5nZSwgZ2V0UXVvdGUgfVxuIiwgImltcG9ydCB7IExvYWRlckZ1bmN0aW9uLCByZWRpcmVjdCB9IGZyb20gJ3JlbWl4J1xuXG5leHBvcnQgY29uc3QgbG9hZGVyOiBMb2FkZXJGdW5jdGlvbiA9ICgpID0+IHtcbiAgdGhyb3cgcmVkaXJlY3QoJ2h0dHBzOi8vd3d3LnlvdXR1YmUuY29tL3dhdGNoP3Y9ZFF3NHc5V2dYY1EnKVxufVxuIiwgImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHtcbiAgdXNlQ2F0Y2gsXG4gIGpzb24sXG4gIExvYWRlckZ1bmN0aW9uLFxuICBNZXRhRnVuY3Rpb24sXG4gIHVzZUxvYWRlckRhdGEsXG4gIExpbmtzRnVuY3Rpb24sXG4gIE91dGxldCxcbn0gZnJvbSAncmVtaXgnXG5cbmltcG9ydCB7IEJsb2dQb3N0LCBGb3VyMDAgfSBmcm9tICd+L2NvbXBvbmVudHMnXG5pbXBvcnQgeyBnZXRQb3N0cywgUG9zdCB9IGZyb20gJ34vdXRpbHMvY21zLnNlcnZlcidcblxuZXhwb3J0IGNvbnN0IG1ldGE6IE1ldGFGdW5jdGlvbiA9ICgpID0+IHtcbiAgcmV0dXJuIHtcbiAgICAnYXBwbGUtbW9iaWxlLXdlYi1hcHAtdGl0bGUnOiAnQmxvZycsXG4gICAgdGl0bGU6ICdCbG9nJyxcbiAgICBkZXNjcmlwdGlvbjpcbiAgICAgICdUdXRvcmlhbHMgZm9yIGRldmVsb3BlcnMuIEZvY3VzIG9uIEphdmFzY3JpcHQsIFR5cGVzY3JpcHQsIFJlYWN0IGFuZCBvdGhlciB3ZWIgZGV2ZWxvcG1lbnQgdG9waWNzJyxcbiAgICBwYWdlbmFtZTogJ0Jsb2cnLFxuICAgIGltYWdlOiAnL2ltYWdlcy9vZy5qcGcnLFxuICAgIHJvYm90czogJ2luZGV4LCBmb2xsb3cnLFxuICAgIC8vIFRPRE86IE9nIHN0dWZmIGFyZSBtaXNzaW5nXG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IGxpbmtzOiBMaW5rc0Z1bmN0aW9uID0gKCkgPT4ge1xuICByZXR1cm4gW1xuICAgIHtcbiAgICAgIHJlbDogJ2Nhbm9uaWNhbCcsXG4gICAgICBocmVmOiAnaHR0cHM6Ly93d3cubnVsbGlzaC5pbi9ibG9nJyxcbiAgICB9LFxuICBdXG59XG5cbmV4cG9ydCBjb25zdCBsb2FkZXI6IExvYWRlckZ1bmN0aW9uID0gYXN5bmMgKHsgcmVxdWVzdCwgY29udGV4dCB9KSA9PiB7XG4gIGNvbnN0IHVybCA9IG5ldyBVUkwocmVxdWVzdC51cmwpXG5cbiAgY29uc3QgcXVlcnkgPSB1cmwuc2VhcmNoUGFyYW1zLmdldCgncScpID8/ICcnXG5cbiAgY29uc3QgYmxvZ1Bvc3RzID0gYXdhaXQgZ2V0UG9zdHMocXVlcnksIGNvbnRleHQpXG5cbiAgaWYgKGJsb2dQb3N0cy5sZW5ndGggPT09IDApIHtcbiAgICB0aHJvdyBqc29uKHsgbWVzc2FnZTogJ05vIGJsb2dzIGZvdW5kLicgfSwgeyBzdGF0dXM6IDQwNCB9KVxuICB9XG5cbiAgY29uc3QgZmlsdGVyZWRCbG9nUG9zdHMgPSAhcXVlcnlcbiAgICA/IGJsb2dQb3N0c1xuICAgIDogYmxvZ1Bvc3RzLmZpbHRlcigocG9zdCkgPT4gcG9zdC50aXRsZS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKHF1ZXJ5LnRvTG93ZXJDYXNlKCkpKVxuXG4gIHJldHVybiBqc29uKFxuICAgIHsgYmxvZ1Bvc3RzOiBmaWx0ZXJlZEJsb2dQb3N0cyB9LFxuICAgIHtcbiAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgJ0NhY2hlLUNvbnRyb2wnOiAnbWF4LWFnZT0xMDAsIG11c3QtcmV2YWxpZGF0ZScsXG4gICAgICB9LFxuICAgIH0sXG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQmxvZygpIHtcbiAgY29uc3QgeyBibG9nUG9zdHMgfSA9IHVzZUxvYWRlckRhdGE8eyBibG9nUG9zdHM6IEFycmF5PFBvc3Q+IH0+KClcbiAgLy8gY29uc3QgW3NlYXJjaFBhcmFtc10gPSB1c2VTZWFyY2hQYXJhbXMoKVxuXG4gIC8vIGNvbnN0IHF1ZXJ5ID0gc2VhcmNoUGFyYW1zLmdldCgncScpXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGgtc2NyZWVuXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm92ZXJmbG93LXktYXV0byBtYXgtaC1zY3JlZW4gbWF4LXctWzI0cmVtXSBib3JkZXItciBib3JkZXItY29sb3JcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdGlja3kgdG9wLTAgcC02IHB5LTQgYmctY29sb3JcIj5cbiAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwiZm9udC1ib2xkXCI+V3JpdGluZ3M8L2gyPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgey8qIDxDb250YWluZXI+XG4gICAgICAgICAgPEZvcm0gbWV0aG9kPVwiZ2V0XCI+XG4gICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwicHktNCB0ZXh0LXhsIGZvbnQtYm9sZCBtZDpweS0xMCBtZDp0ZXh0LTJ4bFwiPkJsb2c8L2gxPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBtYXgtdy1zbSBwLTEgYm9yZGVyIHJvdW5kZWQtbWQgYm9yZGVyLWNvbG9yXCI+XG4gICAgICAgICAgICAgIDxJb0lvc1NlYXJjaCBjbGFzc05hbWU9XCJtbC0yIHRleHQtZ3JheS02MDBcIiBzaXplPXsyMH0gLz5cbiAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgbmFtZT1cInFcIlxuICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgcC0xIG1sLTIgdGV4dC1zbSBib3JkZXItd2hpdGUgYmctY29sb3IgZGFyazpib3JkZXItYmxhY2tcIlxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiU2VhcmNoIHBvc3RzLi4uXCJcbiAgICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU9e3F1ZXJ5ID8/ICcnfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9Gb3JtPlxuICAgICAgICA8L0NvbnRhaW5lcj4gKi99XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC0yIHRleHQtc21cIj5cbiAgICAgICAgICB7YmxvZ1Bvc3RzLm1hcCgoYmxvZ1Bvc3QpID0+IChcbiAgICAgICAgICAgIDxCbG9nUG9zdFxuICAgICAgICAgICAgICBwdWJsaXNoZWRBdD17YmxvZ1Bvc3QucHVibGlzaGVkQXR9XG4gICAgICAgICAgICAgIGtleT17YmxvZ1Bvc3QuaWR9XG4gICAgICAgICAgICAgIHNsdWc9e2Jsb2dQb3N0LnNsdWd9XG4gICAgICAgICAgICAgIHRpdGxlPXtibG9nUG9zdC50aXRsZX1cbiAgICAgICAgICAgICAgZXhjZXJwdD17YmxvZ1Bvc3QuZXhjZXJwdH1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBtYXgtaC1zY3JlZW4gb3ZlcmZsb3cteS1hdXRvXCI+XG4gICAgICAgIDxPdXRsZXQgLz5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBDYXRjaEJvdW5kYXJ5KCkge1xuICBjb25zdCBjYXVnaHQgPSB1c2VDYXRjaCgpXG5cbiAgY29uc3QgbWVzc2FnZSA9IGNhdWdodC5zdGF0dXMgPT09IDQwNCA/IGNhdWdodC5kYXRhLm1lc3NhZ2UgOiAnT29wc2llcy4uIFNvbWV0aGluZyB3ZW50IHdyb25nLidcblxuICBpZiAoY2F1Z2h0LnN0YXR1cyA9PT0gNDA0KSB7XG4gICAgcmV0dXJuIDxGb3VyMDAgdGl0bGU9XCI0MDRcIiBtZXNzYWdlPXttZXNzYWdlfSBsaW5rPVwiL1wiIC8+XG4gIH1cblxuICByZXR1cm4gPEZvdXIwMCB0aXRsZT1cIjUwMFwiIG1lc3NhZ2U9e21lc3NhZ2V9IGxpbms9XCIvXCIgLz5cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIEVycm9yQm91bmRhcnkoKSB7XG4gIHJldHVybiA8Rm91cjAwIHRpdGxlPVwiNTAwXCIgbWVzc2FnZT1cIk9vcHNpZXMuLi4gU29tZXRoaW5nIHdlbnQgd3JvbmcuXCIgbGluaz1cIi9cIiAvPlxufVxuIiwgImltcG9ydCB7IGpzb24sIExpbmtzRnVuY3Rpb24sIExvYWRlckZ1bmN0aW9uLCBNZXRhRnVuY3Rpb24sIHVzZUNhdGNoLCB1c2VMb2FkZXJEYXRhIH0gZnJvbSAncmVtaXgnXG5cbmltcG9ydCB7IE1hcmtkb3duLCBGb3VyMDAgfSBmcm9tICd+L2NvbXBvbmVudHMnXG5pbXBvcnQgeyBnZXRQb3N0IH0gZnJvbSAnfi91dGlscy9jbXMuc2VydmVyJ1xuXG5leHBvcnQgY29uc3QgbWV0YTogTWV0YUZ1bmN0aW9uID0gKHsgZGF0YSB9KSA9PiB7XG4gIGNvbnN0IHBvc3REYXRhID0gZGF0YSBhcyBBd2FpdGVkPFJldHVyblR5cGU8dHlwZW9mIGdldFBvc3Q+PlxuXG4gIGNvbnN0IHRpdGxlID0gcG9zdERhdGE/LnNlby50aXRsZSA/PyAnUGFnZSBOb3QgRm91bmQgfCBNdXRodWt1bWFyJ1xuICByZXR1cm4ge1xuICAgICdhcHBsZS1tb2JpbGUtd2ViLWFwcC10aXRsZSc6IHRpdGxlLFxuICAgIHRpdGxlLFxuICAgIGRlc2NyaXB0aW9uOiBwb3N0RGF0YT8uc2VvLmRlc2NyaXB0aW9uID8/ICcnLFxuICAgIGtleXdvcmRzOiBwb3N0RGF0YT8uc2VvLmtleXdvcmRzID8/ICcnLFxuICAgIGltYWdlOiBwb3N0RGF0YT8uc2VvLmltYWdlLnVybCA/PyAnJyxcbiAgICBwYWdlbmFtZTogdGl0bGUsXG4gICAgJ29nOnVybCc6IGRhdGE/LnVybCxcbiAgICAnb2c6dHlwZSc6ICdhcnRpY2xlJyxcbiAgICAnb2c6dGl0bGUnOiB0aXRsZSxcbiAgICAnb2c6ZGVzY3JpcHRpb24nOiBwb3N0RGF0YT8uc2VvLmRlc2NyaXB0aW9uID8/ICcnLFxuICAgICdvZzppbWFnZSc6IHBvc3REYXRhPy5zZW8uaW1hZ2UudXJsID8/ICcnLFxuICAgIHJvYm90czogJ2luZGV4LCBmb2xsb3cnLFxuICB9XG59XG5cbmV4cG9ydCBjb25zdCBsaW5rczogTGlua3NGdW5jdGlvbiA9ICgpID0+IHtcbiAgcmV0dXJuIFtcbiAgICB7XG4gICAgICByZWw6ICdjYW5vbmljYWwnLFxuICAgICAgaHJlZjogJ2h0dHBzOi8vd3d3Lm51bGxpc2guaW4vYmxvZycsXG4gICAgfSxcbiAgXVxufVxuXG5leHBvcnQgY29uc3QgbG9hZGVyOiBMb2FkZXJGdW5jdGlvbiA9IGFzeW5jICh7IHJlcXVlc3QsIHBhcmFtcywgY29udGV4dCB9KSA9PiB7XG4gIGNvbnN0IHVybCA9IG5ldyBVUkwocmVxdWVzdC51cmwpXG5cbiAgY29uc3Qgc2x1ZyA9IHBhcmFtcy5zbHVnID8/ICcnXG5cbiAgY29uc3QgcG9zdERhdGEgPSBhd2FpdCBnZXRQb3N0KHNsdWcsIGNvbnRleHQpXG5cbiAgaWYgKCFwb3N0RGF0YSkge1xuICAgIHRocm93IGpzb24oeyBtZXNzYWdlOiBgT2ggbm8sIHRoZSBibG9nIHlvdSBsb29raW5nIGZvciBkb2Vzbid0IGV4aXN0cy5gIH0sIHsgc3RhdHVzOiA0MDQgfSlcbiAgfVxuXG4gIHJldHVybiBqc29uKFxuICAgIHtcbiAgICAgIHVybCxcbiAgICAgIC4uLnBvc3REYXRhLFxuICAgIH0sXG4gICAge1xuICAgICAgaGVhZGVyczoge1xuICAgICAgICAnQ2FjaGUtQ29udHJvbCc6ICdtYXgtYWdlPTEwMCwgbXVzdC1yZXZhbGlkYXRlJyxcbiAgICAgIH0sXG4gICAgfSxcbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBCbG9nU2x1ZygpIHtcbiAgY29uc3QgcG9zdERhdGEgPSB1c2VMb2FkZXJEYXRhPEF3YWl0ZWQ8UmV0dXJuVHlwZTx0eXBlb2YgZ2V0UG9zdD4+PigpXG5cbiAgaWYgKCFwb3N0RGF0YSkge1xuICAgIHRocm93IG5ldyBFcnJvcignUG9zdCBkYXRhIG5vdCBmb3VuZC4uLiEnKVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm1pbi1oLXNjcmVlblwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdGlja3kgdG9wLTAgcC00IGJvcmRlci1iIG5hdmJhci1iYWNrZHJvcC1maWx0ZXIgYm9yZGVyLWNvbG9yXCI+XG4gICAgICAgIDxoMSBjbGFzc05hbWU9XCJmb250LWJvbGRcIj57cG9zdERhdGEudGl0bGV9PC9oMT5cbiAgICAgIDwvZGl2PlxuICAgICAgPE1hcmtkb3duIGNsYXNzTmFtZT1cIm1heC13LTV4bFwiPlxuICAgICAgICA8ZGl2IGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7IF9faHRtbDogcG9zdERhdGEuY29udGVudC5odG1sIH19IC8+XG4gICAgICA8L01hcmtkb3duPlxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBDYXRjaEJvdW5kYXJ5KCkge1xuICBjb25zdCBjYXVnaHQgPSB1c2VDYXRjaCgpXG5cbiAgY29uc3QgbWVzc2FnZSA9IGNhdWdodC5zdGF0dXMgPT09IDQwNCA/IGNhdWdodC5kYXRhLm1lc3NhZ2UgOiAnT29wc2llcy4uIFNvbWV0aGluZyB3ZW50IHdyb25nLidcblxuICBpZiAoY2F1Z2h0LnN0YXR1cyA9PT0gNDA0KSB7XG4gICAgcmV0dXJuIDxGb3VyMDAgdGl0bGU9XCI0MDRcIiBtZXNzYWdlPXttZXNzYWdlfSBsaW5rPVwiL2Jsb2dcIiAvPlxuICB9XG5cbiAgcmV0dXJuIDxGb3VyMDAgdGl0bGU9XCI1MDBcIiBtZXNzYWdlPXttZXNzYWdlfSBsaW5rPVwiL2Jsb2dcIiAvPlxufVxuXG5leHBvcnQgZnVuY3Rpb24gRXJyb3JCb3VuZGFyeSgpIHtcbiAgcmV0dXJuIDxGb3VyMDAgdGl0bGU9XCI1MDBcIiBtZXNzYWdlPVwiT29wc2llcy4uLiBTb21ldGhpbmcgd2VudCB3cm9uZy5cIiBsaW5rPVwiL2Jsb2dcIiAvPlxufVxuIiwgImltcG9ydCB7IGpzb24sIExvYWRlckZ1bmN0aW9uLCB1c2VDYXRjaCB9IGZyb20gJ3JlbWl4J1xuaW1wb3J0IHsgQ29udGFpbmVyLCBGb3VyMDAgfSBmcm9tICd+L2NvbXBvbmVudHMnXG5cbmV4cG9ydCBjb25zdCBsb2FkZXI6IExvYWRlckZ1bmN0aW9uID0gYXN5bmMgKCkgPT4ge1xuICB0aHJvdyBqc29uKHsgbWVzc2FnZTogYFBhZ2UsIHlvdSBhcmUgbG9va2luZyBmb3IgZG9lc24ndCBleGlzdHNgIH0sIHsgc3RhdHVzOiA0MDQgfSlcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU3BsYXQoKSB7XG4gIHJldHVybiAoXG4gICAgPENvbnRhaW5lcj5cbiAgICAgIDxwPlxuICAgICAgICBZb3UgYXJlIG5vdCBzdXBwb3NlIHRvIHNlZSB0aGlzIHBhZ2UuIEdvb2Qgam9iIGdldHRpbmcgaGVyZS4gQ2FuIHlvdSBwbGVhc2UgbGV0IE11dGh1IGtub3csXG4gICAgICAgIHlvdSBnb3QgaGVyZS5cbiAgICAgIDwvcD5cbiAgICA8L0NvbnRhaW5lcj5cbiAgKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gQ2F0Y2hCb3VuZGFyeSgpIHtcbiAgY29uc3QgY2F1Z2h0ID0gdXNlQ2F0Y2goKVxuXG4gIGNvbnN0IG1lc3NhZ2UgPSBjYXVnaHQuc3RhdHVzID09PSA0MDQgPyBjYXVnaHQuZGF0YS5tZXNzYWdlIDogJ09vcHNpZXMuLiBTb21ldGhpbmcgd2VudCB3cm9uZy4nXG5cbiAgaWYgKGNhdWdodC5zdGF0dXMgPT09IDQwNCkge1xuICAgIHJldHVybiA8Rm91cjAwIHRpdGxlPVwiNDA0XCIgbWVzc2FnZT17bWVzc2FnZX0gbGluaz1cIi9cIiAvPlxuICB9XG5cbiAgcmV0dXJuIDxGb3VyMDAgdGl0bGU9XCI1MDBcIiBtZXNzYWdlPXttZXNzYWdlfSBsaW5rPVwiL1wiIC8+XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBFcnJvckJvdW5kYXJ5KCkge1xuICByZXR1cm4gPEZvdXIwMCB0aXRsZT1cIjUwMFwiIG1lc3NhZ2U9XCJPb3BzaWVzLi4uIFNvbWV0aGluZyB3ZW50IHdyb25nLlwiIGxpbms9XCIvXCIgLz5cbn1cbiIsICJcbmltcG9ydCAqIGFzIGVudHJ5U2VydmVyIGZyb20gXCIvVXNlcnMvbXV0aHUvd29ya3NwYWNlL3JlbWl4LWJsb2cvYXBwL2VudHJ5LnNlcnZlci50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMCBmcm9tIFwiL1VzZXJzL211dGh1L3dvcmtzcGFjZS9yZW1peC1ibG9nL2FwcC9yb290LnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGUxIGZyb20gXCIvVXNlcnMvbXV0aHUvd29ya3NwYWNlL3JlbWl4LWJsb2cvYXBwL3JvdXRlcy9bc2l0ZW1hcC54bWxdLnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGUyIGZyb20gXCIvVXNlcnMvbXV0aHUvd29ya3NwYWNlL3JlbWl4LWJsb2cvYXBwL3JvdXRlcy9jbG9zZS1iYW5uZXIudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTMgZnJvbSBcIi9Vc2Vycy9tdXRodS93b3Jrc3BhY2UvcmVtaXgtYmxvZy9hcHAvcm91dGVzL19fY2hhbmdlbG9nLnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGU0IGZyb20gXCIvVXNlcnMvbXV0aHUvd29ya3NwYWNlL3JlbWl4LWJsb2cvYXBwL3JvdXRlcy9fX2NoYW5nZWxvZy9jaGFuZ2Vsb2cubWR4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTUgZnJvbSBcIi9Vc2Vycy9tdXRodS93b3Jrc3BhY2UvcmVtaXgtYmxvZy9hcHAvcm91dGVzL1tyc3MueG1sXS50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlNiBmcm9tIFwiL1VzZXJzL211dGh1L3dvcmtzcGFjZS9yZW1peC1ibG9nL2FwcC9yb3V0ZXMvcXVvdGVzLnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGU3IGZyb20gXCIvVXNlcnMvbXV0aHUvd29ya3NwYWNlL3JlbWl4LWJsb2cvYXBwL3JvdXRlcy9hYm91dC50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlOCBmcm9tIFwiL1VzZXJzL211dGh1L3dvcmtzcGFjZS9yZW1peC1ibG9nL2FwcC9yb3V0ZXMvaW5kZXgudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTkgZnJvbSBcIi9Vc2Vycy9tdXRodS93b3Jrc3BhY2UvcmVtaXgtYmxvZy9hcHAvcm91dGVzL2xvZ2luLnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGUxMCBmcm9tIFwiL1VzZXJzL211dGh1L3dvcmtzcGFjZS9yZW1peC1ibG9nL2FwcC9yb3V0ZXMvYmxvZy50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMTEgZnJvbSBcIi9Vc2Vycy9tdXRodS93b3Jrc3BhY2UvcmVtaXgtYmxvZy9hcHAvcm91dGVzL2Jsb2cvJHNsdWcudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTEyIGZyb20gXCIvVXNlcnMvbXV0aHUvd29ya3NwYWNlL3JlbWl4LWJsb2cvYXBwL3JvdXRlcy8kLnRzeFwiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBhc3NldHMgfSBmcm9tIFwiLi9hc3NldHMuanNvblwiO1xuZXhwb3J0IGNvbnN0IGVudHJ5ID0geyBtb2R1bGU6IGVudHJ5U2VydmVyIH07XG5leHBvcnQgY29uc3Qgcm91dGVzID0ge1xuICBcInJvb3RcIjoge1xuICAgIGlkOiBcInJvb3RcIixcbiAgICBwYXJlbnRJZDogdW5kZWZpbmVkLFxuICAgIHBhdGg6IFwiXCIsXG4gICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgbW9kdWxlOiByb3V0ZTBcbiAgfSxcbiAgXCJyb3V0ZXMvW3NpdGVtYXAueG1sXVwiOiB7XG4gICAgaWQ6IFwicm91dGVzL1tzaXRlbWFwLnhtbF1cIixcbiAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgcGF0aDogXCJzaXRlbWFwLnhtbFwiLFxuICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgIG1vZHVsZTogcm91dGUxXG4gIH0sXG4gIFwicm91dGVzL2Nsb3NlLWJhbm5lclwiOiB7XG4gICAgaWQ6IFwicm91dGVzL2Nsb3NlLWJhbm5lclwiLFxuICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICBwYXRoOiBcImNsb3NlLWJhbm5lclwiLFxuICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgIG1vZHVsZTogcm91dGUyXG4gIH0sXG4gIFwicm91dGVzL19fY2hhbmdlbG9nXCI6IHtcbiAgICBpZDogXCJyb3V0ZXMvX19jaGFuZ2Vsb2dcIixcbiAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgcGF0aDogdW5kZWZpbmVkLFxuICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgIG1vZHVsZTogcm91dGUzXG4gIH0sXG4gIFwicm91dGVzL19fY2hhbmdlbG9nL2NoYW5nZWxvZ1wiOiB7XG4gICAgaWQ6IFwicm91dGVzL19fY2hhbmdlbG9nL2NoYW5nZWxvZ1wiLFxuICAgIHBhcmVudElkOiBcInJvdXRlcy9fX2NoYW5nZWxvZ1wiLFxuICAgIHBhdGg6IFwiY2hhbmdlbG9nXCIsXG4gICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgbW9kdWxlOiByb3V0ZTRcbiAgfSxcbiAgXCJyb3V0ZXMvW3Jzcy54bWxdXCI6IHtcbiAgICBpZDogXCJyb3V0ZXMvW3Jzcy54bWxdXCIsXG4gICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgIHBhdGg6IFwicnNzLnhtbFwiLFxuICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgIG1vZHVsZTogcm91dGU1XG4gIH0sXG4gIFwicm91dGVzL3F1b3Rlc1wiOiB7XG4gICAgaWQ6IFwicm91dGVzL3F1b3Rlc1wiLFxuICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICBwYXRoOiBcInF1b3Rlc1wiLFxuICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgIG1vZHVsZTogcm91dGU2XG4gIH0sXG4gIFwicm91dGVzL2Fib3V0XCI6IHtcbiAgICBpZDogXCJyb3V0ZXMvYWJvdXRcIixcbiAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgcGF0aDogXCJhYm91dFwiLFxuICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgIG1vZHVsZTogcm91dGU3XG4gIH0sXG4gIFwicm91dGVzL2luZGV4XCI6IHtcbiAgICBpZDogXCJyb3V0ZXMvaW5kZXhcIixcbiAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgcGF0aDogdW5kZWZpbmVkLFxuICAgIGluZGV4OiB0cnVlLFxuICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICBtb2R1bGU6IHJvdXRlOFxuICB9LFxuICBcInJvdXRlcy9sb2dpblwiOiB7XG4gICAgaWQ6IFwicm91dGVzL2xvZ2luXCIsXG4gICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgIHBhdGg6IFwibG9naW5cIixcbiAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICBtb2R1bGU6IHJvdXRlOVxuICB9LFxuICBcInJvdXRlcy9ibG9nXCI6IHtcbiAgICBpZDogXCJyb3V0ZXMvYmxvZ1wiLFxuICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICBwYXRoOiBcImJsb2dcIixcbiAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICBtb2R1bGU6IHJvdXRlMTBcbiAgfSxcbiAgXCJyb3V0ZXMvYmxvZy8kc2x1Z1wiOiB7XG4gICAgaWQ6IFwicm91dGVzL2Jsb2cvJHNsdWdcIixcbiAgICBwYXJlbnRJZDogXCJyb3V0ZXMvYmxvZ1wiLFxuICAgIHBhdGg6IFwiOnNsdWdcIixcbiAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICBtb2R1bGU6IHJvdXRlMTFcbiAgfSxcbiAgXCJyb3V0ZXMvJFwiOiB7XG4gICAgaWQ6IFwicm91dGVzLyRcIixcbiAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgcGF0aDogXCIqXCIsXG4gICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgbW9kdWxlOiByb3V0ZTEyXG4gIH1cbn07Il0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7OztBQ0FBO0FBQUE7QUFBQTtBQUFBO0FBQUE7OztBQ1VBO0FBVkE7O0FDVUE7QUFWQTs7QUZJZSx1QkFDYixTQUNBLG9CQUNBLGlCQUNBLGNBQ0E7QUFDQSxRQUFNLFNBQVMsZUFBZSxvQ0FBQyxhQUFEO0FBQUEsSUFBYSxTQUFTO0FBQUEsSUFBYyxLQUFLLFFBQVE7QUFBQTtBQUUvRSxrQkFBZ0IsSUFBSSxnQkFBZ0I7QUFDcEMsa0JBQWdCLElBQUksMEJBQTBCO0FBQzlDLGtCQUFnQixJQUFJLG1CQUFtQjtBQUN2QyxrQkFBZ0IsSUFBSSxnQ0FBZ0M7QUFDcEQsa0JBQWdCLElBQUksb0JBQW9CO0FBQ3hDLGtCQUFnQixJQUFJLDZCQUE2QjtBQUVqRCxTQUFPLElBQUksU0FBUyxvQkFBb0IsUUFBUTtBQUFBLElBQzlDLFFBQVE7QUFBQSxJQUNSLFNBQVM7QUFBQTtBQUFBOzs7QUdyQmI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOzs7Ozs7Ozs7Ozs7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
