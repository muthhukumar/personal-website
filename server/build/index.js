var __create = Object.create;
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __getProtoOf = Object.getPrototypeOf;
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
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[Object.keys(fn)[0]])(fn = 0)), res;
};
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[Object.keys(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  __markAsModule(target);
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __reExport = (target, module2, desc) => {
  if (module2 && typeof module2 === "object" || typeof module2 === "function") {
    for (let key of __getOwnPropNames(module2))
      if (!__hasOwnProp.call(target, key) && key !== "default")
        __defProp(target, key, { get: () => module2[key], enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable });
  }
  return target;
};
var __toModule = (module2) => {
  return __reExport(__markAsModule(__defProp(module2 != null ? __create(__getProtoOf(module2)) : {}, "default", module2 && module2.__esModule && "default" in module2 ? { get: () => module2.default, enumerable: true } : { value: module2, enumerable: true })), module2);
};

// node_modules/@remix-run/dev/compiler/shims/react.ts
var React;
var init_react = __esm({
  "node_modules/@remix-run/dev/compiler/shims/react.ts"() {
    React = __toModule(require("react"));
  }
});

// node_modules/remix/client.js
var require_client = __commonJS({
  "node_modules/remix/client.js"(exports) {
    init_react();
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var react = require("@remix-run/react");
    Object.defineProperty(exports, "Form", {
      enumerable: true,
      get: function() {
        return react.Form;
      }
    });
    Object.defineProperty(exports, "Link", {
      enumerable: true,
      get: function() {
        return react.Link;
      }
    });
    Object.defineProperty(exports, "Links", {
      enumerable: true,
      get: function() {
        return react.Links;
      }
    });
    Object.defineProperty(exports, "LiveReload", {
      enumerable: true,
      get: function() {
        return react.LiveReload;
      }
    });
    Object.defineProperty(exports, "Meta", {
      enumerable: true,
      get: function() {
        return react.Meta;
      }
    });
    Object.defineProperty(exports, "NavLink", {
      enumerable: true,
      get: function() {
        return react.NavLink;
      }
    });
    Object.defineProperty(exports, "Outlet", {
      enumerable: true,
      get: function() {
        return react.Outlet;
      }
    });
    Object.defineProperty(exports, "PrefetchPageLinks", {
      enumerable: true,
      get: function() {
        return react.PrefetchPageLinks;
      }
    });
    Object.defineProperty(exports, "RemixBrowser", {
      enumerable: true,
      get: function() {
        return react.RemixBrowser;
      }
    });
    Object.defineProperty(exports, "RemixServer", {
      enumerable: true,
      get: function() {
        return react.RemixServer;
      }
    });
    Object.defineProperty(exports, "Scripts", {
      enumerable: true,
      get: function() {
        return react.Scripts;
      }
    });
    Object.defineProperty(exports, "ScrollRestoration", {
      enumerable: true,
      get: function() {
        return react.ScrollRestoration;
      }
    });
    Object.defineProperty(exports, "useActionData", {
      enumerable: true,
      get: function() {
        return react.useActionData;
      }
    });
    Object.defineProperty(exports, "useBeforeUnload", {
      enumerable: true,
      get: function() {
        return react.useBeforeUnload;
      }
    });
    Object.defineProperty(exports, "useCatch", {
      enumerable: true,
      get: function() {
        return react.useCatch;
      }
    });
    Object.defineProperty(exports, "useFetcher", {
      enumerable: true,
      get: function() {
        return react.useFetcher;
      }
    });
    Object.defineProperty(exports, "useFetchers", {
      enumerable: true,
      get: function() {
        return react.useFetchers;
      }
    });
    Object.defineProperty(exports, "useFormAction", {
      enumerable: true,
      get: function() {
        return react.useFormAction;
      }
    });
    Object.defineProperty(exports, "useHref", {
      enumerable: true,
      get: function() {
        return react.useHref;
      }
    });
    Object.defineProperty(exports, "useLoaderData", {
      enumerable: true,
      get: function() {
        return react.useLoaderData;
      }
    });
    Object.defineProperty(exports, "useLocation", {
      enumerable: true,
      get: function() {
        return react.useLocation;
      }
    });
    Object.defineProperty(exports, "useMatches", {
      enumerable: true,
      get: function() {
        return react.useMatches;
      }
    });
    Object.defineProperty(exports, "useNavigate", {
      enumerable: true,
      get: function() {
        return react.useNavigate;
      }
    });
    Object.defineProperty(exports, "useNavigationType", {
      enumerable: true,
      get: function() {
        return react.useNavigationType;
      }
    });
    Object.defineProperty(exports, "useOutlet", {
      enumerable: true,
      get: function() {
        return react.useOutlet;
      }
    });
    Object.defineProperty(exports, "useOutletContext", {
      enumerable: true,
      get: function() {
        return react.useOutletContext;
      }
    });
    Object.defineProperty(exports, "useParams", {
      enumerable: true,
      get: function() {
        return react.useParams;
      }
    });
    Object.defineProperty(exports, "useResolvedPath", {
      enumerable: true,
      get: function() {
        return react.useResolvedPath;
      }
    });
    Object.defineProperty(exports, "useSearchParams", {
      enumerable: true,
      get: function() {
        return react.useSearchParams;
      }
    });
    Object.defineProperty(exports, "useSubmit", {
      enumerable: true,
      get: function() {
        return react.useSubmit;
      }
    });
    Object.defineProperty(exports, "useTransition", {
      enumerable: true,
      get: function() {
        return react.useTransition;
      }
    });
  }
});

// node_modules/remix/server.js
var require_server = __commonJS({
  "node_modules/remix/server.js"(exports) {
    init_react();
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var serverRuntime = require("@remix-run/server-runtime");
    Object.defineProperty(exports, "createCookie", {
      enumerable: true,
      get: function() {
        return serverRuntime.createCookie;
      }
    });
    Object.defineProperty(exports, "createCookieSessionStorage", {
      enumerable: true,
      get: function() {
        return serverRuntime.createCookieSessionStorage;
      }
    });
    Object.defineProperty(exports, "createMemorySessionStorage", {
      enumerable: true,
      get: function() {
        return serverRuntime.createMemorySessionStorage;
      }
    });
    Object.defineProperty(exports, "createSession", {
      enumerable: true,
      get: function() {
        return serverRuntime.createSession;
      }
    });
    Object.defineProperty(exports, "createSessionStorage", {
      enumerable: true,
      get: function() {
        return serverRuntime.createSessionStorage;
      }
    });
    Object.defineProperty(exports, "isCookie", {
      enumerable: true,
      get: function() {
        return serverRuntime.isCookie;
      }
    });
    Object.defineProperty(exports, "isSession", {
      enumerable: true,
      get: function() {
        return serverRuntime.isSession;
      }
    });
    Object.defineProperty(exports, "json", {
      enumerable: true,
      get: function() {
        return serverRuntime.json;
      }
    });
    Object.defineProperty(exports, "redirect", {
      enumerable: true,
      get: function() {
        return serverRuntime.redirect;
      }
    });
  }
});

// node_modules/remix/platform.js
var require_platform = __commonJS({
  "node_modules/remix/platform.js"(exports) {
    init_react();
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var node = require("@remix-run/node");
    Object.defineProperty(exports, "createFileSessionStorage", {
      enumerable: true,
      get: function() {
        return node.createFileSessionStorage;
      }
    });
    Object.defineProperty(exports, "unstable_createFileUploadHandler", {
      enumerable: true,
      get: function() {
        return node.unstable_createFileUploadHandler;
      }
    });
    Object.defineProperty(exports, "unstable_createMemoryUploadHandler", {
      enumerable: true,
      get: function() {
        return node.unstable_createMemoryUploadHandler;
      }
    });
    Object.defineProperty(exports, "unstable_parseMultipartFormData", {
      enumerable: true,
      get: function() {
        return node.unstable_parseMultipartFormData;
      }
    });
  }
});

// node_modules/remix/index.js
var require_remix = __commonJS({
  "node_modules/remix/index.js"(exports) {
    init_react();
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var client = require_client();
    var server = require_server();
    var platform = require_platform();
    Object.keys(client).forEach(function(k) {
      if (k !== "default" && !exports.hasOwnProperty(k))
        Object.defineProperty(exports, k, {
          enumerable: true,
          get: function() {
            return client[k];
          }
        });
    });
    Object.keys(server).forEach(function(k) {
      if (k !== "default" && !exports.hasOwnProperty(k))
        Object.defineProperty(exports, k, {
          enumerable: true,
          get: function() {
            return server[k];
          }
        });
    });
    Object.keys(platform).forEach(function(k) {
      if (k !== "default" && !exports.hasOwnProperty(k))
        Object.defineProperty(exports, k, {
          enumerable: true,
          get: function() {
            return platform[k];
          }
        });
    });
  }
});

// <stdin>
__export(exports, {
  assets: () => import_assets.default,
  entry: () => entry,
  routes: () => routes
});
init_react();

// app/entry.server.tsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
init_react();
var import_server = __toModule(require("react-dom/server"));
var import_remix = __toModule(require_remix());
function handleRequest(request, responseStatusCode, responseHeaders, remixContext) {
  const markup = (0, import_server.renderToString)(/* @__PURE__ */ React.createElement(import_remix.RemixServer, {
    context: remixContext,
    url: request.url
  }));
  responseHeaders.set("Content-Type", "text/html");
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
  links: () => links2,
  loader: () => loader,
  meta: () => meta
});
init_react();
var React6 = __toModule(require("react"));
var import_remix8 = __toModule(require_remix());
var import_remix9 = __toModule(require_remix());

// app/styles/global.css
var global_default = "/build/_assets/global-MJNYD4OC.css";

// app/styles/tailwind.css
var tailwind_default = "/build/_assets/tailwind-4BHNBMES.css";

// app/styles/dark.css
var dark_default = "/build/_assets/dark-L2PWX2QV.css";

// app/components/index.tsx
init_react();

// app/components/400.tsx
init_react();

// app/components/container.tsx
init_react();
var React2 = __toModule(require("react"));
var import_clsx = __toModule(require("clsx"));
function Container({
  children,
  className = void 0
}) {
  const hasPy = className == null ? void 0 : className.includes("py");
  return /* @__PURE__ */ React2.createElement("div", {
    className: (0, import_clsx.default)("px-4 container max-w-5xl mx-auto", { "py-2": !hasPy }, className)
  }, children);
}

// app/components/go-back.tsx
init_react();
var import_hi = __toModule(require("react-icons/hi"));
var import_remix2 = __toModule(require_remix());
var import_clsx2 = __toModule(require("clsx"));
function GoBack({
  className,
  link
}) {
  return /* @__PURE__ */ React.createElement(import_remix2.Link, {
    to: link,
    className: (0, import_clsx2.default)("flex items-center self-start justify-start mb-2 text-sm light-font-color", className)
  }, /* @__PURE__ */ React.createElement(import_hi.HiOutlineArrowLeft, null), /* @__PURE__ */ React.createElement("p", {
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

// app/components/banner.tsx
init_react();
var import_ri = __toModule(require("react-icons/ri"));
var import_remix3 = __toModule(require_remix());
function Banner({ title, link }) {
  const banner = (0, import_remix3.useFetcher)();
  return /* @__PURE__ */ React.createElement("div", {
    role: "banner",
    className: "relative flex items-center justify-center py-2 font-bold border-b bg-color font-color border-color"
  }, /* @__PURE__ */ React.createElement("a", {
    href: link
  }, /* @__PURE__ */ React.createElement("p", {
    className: "w-full text-sm text-center"
  }, title)), /* @__PURE__ */ React.createElement("div", {
    className: "absolute right-0 pr-4"
  }, /* @__PURE__ */ React.createElement(banner.Form, {
    method: "post",
    action: "/close-banner"
  }, /* @__PURE__ */ React.createElement("button", null, /* @__PURE__ */ React.createElement(import_ri.RiCloseFill, null)))));
}

// app/components/blog-post.tsx
init_react();
var import_bi = __toModule(require("react-icons/bi"));
var import_remix4 = __toModule(require_remix());
function BlogPost({
  title,
  publishedAt,
  excerpt,
  slug
}) {
  return /* @__PURE__ */ React.createElement("div", {
    className: "w-full pb-6 mb-4 border-b border-color md:pb-10 md:mb-8"
  }, /* @__PURE__ */ React.createElement(date_default, {
    className: "my-2 text-sm light-font-color md:text-base",
    date: publishedAt
  }), /* @__PURE__ */ React.createElement("h2", {
    className: "my-4 text-xl font-bold md:text-2xl"
  }, title), /* @__PURE__ */ React.createElement("p", {
    className: "mb-4 text-sm md:text-base"
  }, excerpt), /* @__PURE__ */ React.createElement(import_remix4.Link, {
    to: `/blog/${slug}`,
    className: "flex items-center text-sm link-font-color",
    prefetch: "render"
  }, "Continue Reading", /* @__PURE__ */ React.createElement(import_bi.BiRightArrowAlt, {
    className: "ml-1"
  })));
}

// app/components/date.tsx
init_react();
var React3 = __toModule(require("react"));
var import_moment = __toModule(require("moment"));
var Date = (props) => {
  const date = props.date;
  return date ? /* @__PURE__ */ React3.createElement("p", __spreadProps(__spreadValues({}, props), {
    className: props.className
  }), (0, import_moment.default)(date).format("dddd, MMMM Do YYYY")) : null;
};
var date_default = Date;

// app/components/footer.tsx
init_react();
var import_remix5 = __toModule(require_remix());
var import_bs = __toModule(require("react-icons/bs"));
var import_si = __toModule(require("react-icons/si"));
var import_io = __toModule(require("react-icons/io"));

// app/components/social-icon.tsx
init_react();
var React4 = __toModule(require("react"));
var import_clsx3 = __toModule(require("clsx"));
function SocialIcon({
  Icon,
  href,
  isLast,
  ariaLabel
}) {
  return /* @__PURE__ */ React4.createElement("li", {
    className: (0, import_clsx3.default)("pr-4", {
      "mr-0": isLast,
      "mr-4 border-r border-color": !isLast
    })
  }, /* @__PURE__ */ React4.createElement("a", {
    href,
    target: "_blank",
    rel: "noreferrer",
    "aria-label": ariaLabel
  }, /* @__PURE__ */ React4.createElement(Icon, {
    size: 20
  })));
}
var social_icon_default = SocialIcon;

// app/components/footer.tsx
var socials = [
  {
    Icon: import_bs.BsGithub,
    href: "https://rd.nullish.in/github",
    isLast: false,
    alt: `Muthukumar's github profile link`,
    ariaLabel: "Github"
  },
  {
    Icon: import_si.SiTwitter,
    href: "https://rd.nullish.in/twitter",
    isLast: false,
    alt: `Muthukumar's twitter profile link`,
    ariaLabel: "Twitter"
  },
  {
    Icon: import_io.IoLogoRss,
    href: "https://nullish.in/rss.xml",
    isLast: true,
    alt: `Nullish.in rss feed link`,
    ariaLabel: "Rss feed"
  }
];
function Footer() {
  return /* @__PURE__ */ React.createElement("footer", {
    className: "border-t border-color"
  }, /* @__PURE__ */ React.createElement(Container, {
    className: "py-16"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-col items-center md:items-start"
  }, /* @__PURE__ */ React.createElement(import_remix5.Link, {
    to: "/",
    className: "flex items-center"
  }, /* @__PURE__ */ React.createElement("p", {
    className: "text-2xl font-bold font-color"
  }, "Muthukumar")), /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-col items-center justify-center w-full mt-6 md:justify-between md:flex-row"
  }, /* @__PURE__ */ React.createElement("h2", {
    className: "mb-4 text-sm md:mb-0 light-font-color"
  }, "Copyright \xA9 2021 Muthukumar. All rights reserved."), /* @__PURE__ */ React.createElement("ul", {
    className: "flex items-center"
  }, socials.map((social) => /* @__PURE__ */ React.createElement(social_icon_default, __spreadProps(__spreadValues({}, social), {
    key: social.href
  }))))))));
}

// app/components/navbar.tsx
init_react();
var import_remix6 = __toModule(require_remix());
var links = [
  {
    to: "/blog",
    pathname: "Blog"
  }
];
function Navbar() {
  return /* @__PURE__ */ React.createElement("header", {
    className: "sticky top-0 z-10 py-4 font-semibold border-b navbar-backdrop-filter border-color transparent-bg"
  }, /* @__PURE__ */ React.createElement(Container, null, /* @__PURE__ */ React.createElement("nav", {
    className: "flex items-baseline"
  }, /* @__PURE__ */ React.createElement(import_remix6.Link, {
    to: "/",
    className: "mr-8"
  }, /* @__PURE__ */ React.createElement("p", {
    className: "text-2xl font-bold font-color"
  }, "Muthukumar")), links.map((link) => /* @__PURE__ */ React.createElement(import_remix6.Link, {
    to: link.to,
    key: link.to,
    className: "mr-6 light-font-color"
  }, link.pathname)))));
}

// app/components/markdown.tsx
init_react();
var React5 = __toModule(require("react"));
var import_clsx4 = __toModule(require("clsx"));
function Markdown({
  children,
  className
}) {
  return /* @__PURE__ */ React5.createElement(Container, {
    className: (0, import_clsx4.default)("max-w-3xl", className)
  }, /* @__PURE__ */ React5.createElement("article", {
    className: "py-2 prose md:py-6 md:prose-lg max-w-none prose-blue dark:prose-invert"
  }, children));
}

// app/utils/session.server.ts
init_react();
var import_remix7 = __toModule(require_remix());
var { commitSession, getSession, destroySession } = (0, import_remix7.createCookieSessionStorage)({
  cookie: {
    name: "_session",
    sameSite: "lax",
    domain: "/",
    httpOnly: true,
    secrets: ["s3cr3t"],
    secure: false
  }
});

// app/utils/etags.ts
init_react();
var GA_TRACKING_ID = "G-QNMM2GSDYJ";
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
    "og:locale": "en",
    "og:site_name": "Muthukumar",
    "og:type": "website",
    "theme-color": "#000",
    "twitter:card": "summary_large_image",
    "twitter:creator": "@am_muthukumar",
    "twitter:site": "@am_muthukumar",
    "X-UA-Compatible": "IE=edge,chrome=1",
    author: "Muthukumar",
    HandheldFriendly: "True",
    language: "en",
    MobileOptimized: "320",
    pagename: "Muthukumar",
    title: "Muthukumar",
    description: "Tutorials and notes on React, Javascript, CSS and more. Also Personal book reviews and personal thoughts on stuff and more!.",
    viewport: "width=device-width, initial-scale=1, viewport-fit=cover"
  };
};
var links2 = () => {
  return [
    { rel: "stylesheet", href: global_default },
    { rel: "stylesheet", href: tailwind_default },
    { rel: "stylesheet", href: dark_default, media: "(prefers-color-scheme: dark)" },
    {
      rel: "preload",
      as: "font",
      href: "/fonts/inter-v7-latin-regular.eot",
      type: "font/eot",
      crossOrigin: "anonymous"
    },
    {
      rel: "preload",
      as: "font",
      href: "/fonts/inter-v7-latin-regular.svg",
      type: "font/svg",
      crossOrigin: "anonymous"
    },
    {
      rel: "preload",
      as: "font",
      href: "/fonts/inter-v7-latin-regular.ttf",
      type: "font/ttf",
      crossOrigin: "anonymous"
    },
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
      href: "/favicon/dark/apple-touch-icon.png",
      media: "(prefers-color-scheme: dark)"
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "32x32",
      href: "/favicon/dark/favicon-32x32.png",
      media: "(prefers-color-scheme: dark)"
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "16x16",
      href: "/favicon/dark/favicon-16x16.png",
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
      href: "/favicon/light/apple-touch-icon.png",
      media: "(prefers-color-scheme: light)"
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "32x32",
      href: "/favicon/light/favicon-32x32.png",
      media: "(prefers-color-scheme: light)"
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "16x16",
      href: "/favicon/light/favicon-16x16.png",
      media: "(prefers-color-scheme: light)"
    },
    {
      rel: "manifest",
      href: "/favicon/light/site.webmanifest",
      media: "(prefers-color-scheme: light)"
    }
  ];
};
var loader = async ({ request }) => {
  const session = await getSession(request.headers.get("Cookie"));
  const banner = session.get("banner") ?? { title: "", link: "", show: false };
  return (0, import_remix8.json)({ banner });
};
function App() {
  const { banner } = (0, import_remix8.useLoaderData)();
  const location = (0, import_remix8.useLocation)();
  React6.useEffect(() => {
    pageview(location.pathname);
  }, [location]);
  return /* @__PURE__ */ React6.createElement(Document, null, /* @__PURE__ */ React6.createElement(Layout, {
    banner
  }, /* @__PURE__ */ React6.createElement(import_remix9.Outlet, null)));
}
function Document({ children, title }) {
  return /* @__PURE__ */ React6.createElement("html", {
    lang: "en"
  }, /* @__PURE__ */ React6.createElement("head", null, /* @__PURE__ */ React6.createElement("meta", {
    charSet: "utf-8"
  }), /* @__PURE__ */ React6.createElement("meta", {
    name: "color-scheme",
    content: "dark light"
  }), title ? /* @__PURE__ */ React6.createElement("title", null, title) : null, /* @__PURE__ */ React6.createElement(import_remix9.Meta, null), /* @__PURE__ */ React6.createElement(import_remix9.Links, null)), /* @__PURE__ */ React6.createElement("body", {
    className: "antialiased bg-color font-color"
  }, /* @__PURE__ */ React6.createElement("script", {
    async: true,
    src: `https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`
  }), /* @__PURE__ */ React6.createElement("script", {
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
  }), children, /* @__PURE__ */ React6.createElement(import_remix8.Scripts, null), /* @__PURE__ */ React6.createElement(import_remix9.ScrollRestoration, null), /* @__PURE__ */ React6.createElement(import_remix9.LiveReload, null)));
}
function Layout({ children, banner }) {
  return /* @__PURE__ */ React6.createElement("div", null, banner && banner.show && /* @__PURE__ */ React6.createElement(Banner, __spreadValues({}, banner)), /* @__PURE__ */ React6.createElement(Navbar, null), /* @__PURE__ */ React6.createElement("main", null, children), /* @__PURE__ */ React6.createElement(Footer, null));
}
function CatchBoundary() {
  const caught = (0, import_remix8.useCatch)();
  const message = caught.status === 404 ? caught.data.message : "Oopsies.. Something went wrong.";
  if (caught.status === 404) {
    return /* @__PURE__ */ React6.createElement(Four00, {
      title: "404",
      message,
      link: "/blog"
    });
  }
  return /* @__PURE__ */ React6.createElement(Four00, {
    title: "500",
    message,
    link: "/blog"
  });
}
function ErrorBoundary() {
  return /* @__PURE__ */ React6.createElement(Document, {
    title: "Error!"
  }, /* @__PURE__ */ React6.createElement(Layout, null, /* @__PURE__ */ React6.createElement(Four00, {
    title: "500",
    message: "Oopsies... Something went wrong.",
    link: "/"
  })));
}

// route-module:/Users/muthu/workspace/remix-blog/app/routes/[sitemap.xml].tsx
var sitemap_xml_exports = {};
__export(sitemap_xml_exports, {
  loader: () => loader2
});
init_react();
var siteMapText = `
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://www.nullish.in/changelog</loc>
    <lastmod>2021-12-21</lastmod>
  </url>
</urlset>
`.trim();
var loader2 = () => {
  return new Response(siteMapText, {
    headers: {
      "Content-Type": "application/xml"
    }
  });
};

// route-module:/Users/muthu/workspace/remix-blog/app/routes/close-banner.tsx
var close_banner_exports = {};
__export(close_banner_exports, {
  action: () => action
});
init_react();
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
init_react();
var import_remix10 = __toModule(require_remix());
function Changelog() {
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", {
    className: "pb-6 border-b border-color"
  }, /* @__PURE__ */ React.createElement(Container, null, /* @__PURE__ */ React.createElement("h2", {
    className: "py-4 text-xl font-bold md:py-10 md:text-2xl"
  }, "Changelog"), /* @__PURE__ */ React.createElement("p", {
    className: "text-base font-bold md:text-lg"
  }, "All notable changes to this project will be documented in this file."))), /* @__PURE__ */ React.createElement(Markdown, {
    className: "sm:max-w-5xl"
  }, /* @__PURE__ */ React.createElement(import_remix10.Outlet, null)));
}

// mdx:/Users/muthu/workspace/remix-blog/app/routes/__changelog/changelog.mdx
var changelog_exports2 = {};
__export(changelog_exports2, {
  attributes: () => attributes,
  default: () => changelog_default,
  filename: () => filename,
  headers: () => headers,
  links: () => links3,
  meta: () => meta2
});
init_react();
var import_react = __toModule(require("react"));
var attributes = {
  "meta": {
    "title": "Changelog | Nullish.in",
    "description": "In this page, I maintain the change log of the website to keep track of the progress and for others to see the progress of my site"
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
  const _content = /* @__PURE__ */ import_react.default.createElement(import_react.default.Fragment, null, /* @__PURE__ */ import_react.default.createElement(_components.h3, null, /* @__PURE__ */ import_react.default.createElement(date_default, {
    date: "2021-12-22",
    className: "text-md md:text-xl"
  })), "\n", /* @__PURE__ */ import_react.default.createElement(_components.h4, null, "Added"), "\n", /* @__PURE__ */ import_react.default.createElement(_components.ul, null, "\n", /* @__PURE__ */ import_react.default.createElement(_components.li, null, "Made the navbar almost transparent."), "\n"), "\n", /* @__PURE__ */ import_react.default.createElement(_components.h4, null, "Changed"), "\n", /* @__PURE__ */ import_react.default.createElement(_components.ul, null, "\n", /* @__PURE__ */ import_react.default.createElement(_components.li, null, "Fixed the google analytics. Before analytics stuff not working for some reason. So I copied the ga template from Nextjs :)"), "\n"), "\n", /* @__PURE__ */ import_react.default.createElement(_components.h4, null, "Removed"), "\n", /* @__PURE__ */ import_react.default.createElement(_components.ul, null, "\n", /* @__PURE__ */ import_react.default.createElement(_components.li, null, "Uninstalled React-ga"), "\n"), "\n", /* @__PURE__ */ import_react.default.createElement(_components.hr, null), "\n", /* @__PURE__ */ import_react.default.createElement(_components.h3, null, /* @__PURE__ */ import_react.default.createElement(date_default, {
    date: "2021-12-21",
    className: "text-md md:text-xl"
  })), "\n", /* @__PURE__ */ import_react.default.createElement(_components.h4, null, "Added"), "\n", /* @__PURE__ */ import_react.default.createElement(_components.ul, null, "\n", /* @__PURE__ */ import_react.default.createElement(_components.li, null, "Added initial version of the index page. Before in index route, the traffic is redirected to the /blog page."), "\n", /* @__PURE__ */ import_react.default.createElement(_components.li, null, "Added robots.txt for the SEO stuff."), "\n", /* @__PURE__ */ import_react.default.createElement(_components.li, null, "Created custom Markdown component to render the markdown."), "\n", /* @__PURE__ */ import_react.default.createElement(_components.li, null, "Created Change log file to keep track of the progress."), "\n", /* @__PURE__ */ import_react.default.createElement(_components.li, null, "Added ", /* @__PURE__ */ import_react.default.createElement(_components.code, null, "sitemap.xml"), " file"), "\n", /* @__PURE__ */ import_react.default.createElement(_components.li, null, "Added ", /* @__PURE__ */ import_react.default.createElement(_components.code, null, "sitemap.xml"), " to the robots file"), "\n", /* @__PURE__ */ import_react.default.createElement(_components.li, null, "Addded ", /* @__PURE__ */ import_react.default.createElement(_components.code, null, "aria-label"), " for the github icon in the footer"), "\n", /* @__PURE__ */ import_react.default.createElement(_components.li, null, "Addded ", /* @__PURE__ */ import_react.default.createElement(_components.code, null, "aria-label"), " for the twitter icon in the footer"), "\n", /* @__PURE__ */ import_react.default.createElement(_components.li, null, "Addded ", /* @__PURE__ */ import_react.default.createElement(_components.code, null, "aria-label"), " for the rss feed icon in the footer"), "\n", /* @__PURE__ */ import_react.default.createElement(_components.li, null, "Added google analytics"), "\n"), "\n", /* @__PURE__ */ import_react.default.createElement(_components.h4, null, "Changed"), "\n", /* @__PURE__ */ import_react.default.createElement(_components.ul, null, "\n", /* @__PURE__ */ import_react.default.createElement(_components.li, null, "\n", /* @__PURE__ */ import_react.default.createElement(_components.p, null, "Renamed the title from 'Changelog | Muthukumar' -> 'Changelog | Nullish.in'. It doesn't make sense to have Muthukumar to the changelog."), "\n"), "\n", /* @__PURE__ */ import_react.default.createElement(_components.li, null, "\n", /* @__PURE__ */ import_react.default.createElement(_components.p, null, "In index route, changed the title('Blog | Muthukumar' => 'Muthukumar')."), "\n"), "\n", /* @__PURE__ */ import_react.default.createElement(_components.li, null, "\n", /* @__PURE__ */ import_react.default.createElement(_components.p, null, "Update robots.txt content"), "\n", /* @__PURE__ */ import_react.default.createElement(_components.pre, null, /* @__PURE__ */ import_react.default.createElement(_components.code, {
    className: "language-txt"
  }, "User-agent: *\nAllow: /\n")), "\n"), "\n", /* @__PURE__ */ import_react.default.createElement(_components.li, null, "\n", /* @__PURE__ */ import_react.default.createElement(_components.p, null, "Moved the ", /* @__PURE__ */ import_react.default.createElement(_components.code, null, "robots.txt"), " file from resource routes to public folder."), "\n", /* @__PURE__ */ import_react.default.createElement(_components.pre, null, /* @__PURE__ */ import_react.default.createElement(_components.code, {
    className: "language-txt"
  }, "User-agent: *\nAllow: /\n\nSitemap: https://nullish.in/sitemap.xml\n")), "\n"), "\n", /* @__PURE__ */ import_react.default.createElement(_components.li, null, "\n", /* @__PURE__ */ import_react.default.createElement(_components.p, null, "Changed ", /* @__PURE__ */ import_react.default.createElement(_components.code, null, "Read more"), " in the blog to ", /* @__PURE__ */ import_react.default.createElement(_components.code, null, "Continue reading"), ". Read more seems vague and generic. Continue Reading seems okay than Read more."), "\n"), "\n", /* @__PURE__ */ import_react.default.createElement(_components.li, null, "\n", /* @__PURE__ */ import_react.default.createElement(_components.p, null, "Upgraded to remix FORM for the blog post search"), "\n"), "\n"), "\n", /* @__PURE__ */ import_react.default.createElement(_components.h4, null, "Removed"), "\n", /* @__PURE__ */ import_react.default.createElement(_components.ul, null, "\n", /* @__PURE__ */ import_react.default.createElement(_components.li, null, "Removed duplicate viewport tag."), "\n", /* @__PURE__ */ import_react.default.createElement(_components.li, null, "Removed robots header from the meta. All the robots stuff are moved to the robots.txt file/route."), "\n"), "\n", /* @__PURE__ */ import_react.default.createElement(_components.pre, null, /* @__PURE__ */ import_react.default.createElement(_components.code, null)));
  return MDXLayout ? /* @__PURE__ */ import_react.default.createElement(MDXLayout, __spreadValues({}, props), _content) : _content;
}
var changelog_default = MDXContent;
var filename = "changelog.mdx";
var headers = typeof attributes !== "undefined" && attributes.headers;
var meta2 = typeof attributes !== "undefined" && attributes.meta;
var links3 = void 0;

// route-module:/Users/muthu/workspace/remix-blog/app/routes/blog.$slug.tsx
var blog_slug_exports = {};
__export(blog_slug_exports, {
  CatchBoundary: () => CatchBoundary2,
  ErrorBoundary: () => ErrorBoundary2,
  default: () => BlogSlug,
  loader: () => loader3,
  meta: () => meta3
});
init_react();
var import_remix11 = __toModule(require_remix());

// app/utils/cms.server.ts
init_react();
var import_graphql_request2 = __toModule(require("graphql-request"));

// app/utils/graphql.server.ts
init_react();
var import_graphql_request = __toModule(require("graphql-request"));

// app/utils/env.server.ts
init_react();
var getRequiredServerEnvVar = (key) => {
  const value = process.env[key];
  if (!value) {
    throw new Error(`${key} is required ENV variable`);
  }
  return value;
};

// app/utils/graphql.server.ts
var endpoint = getRequiredServerEnvVar("GRAPHQL_ENDPOINT");
var authorizationToken = getRequiredServerEnvVar("GRAPHQL_ACCESS_TOKEN");
var gqClient = new import_graphql_request.GraphQLClient(endpoint, {
  headers: {
    Authorization: `Bearer ${authorizationToken}`
  }
});

// app/utils/cms.server.ts
var PostsQuery = import_graphql_request2.gql`
  query MyQuery($search: String!) {
    posts(where: { _search: $search }) {
      id
      slug
      title
      publishedAt
      excerpt
    }
  }
`;
var PostQuery = import_graphql_request2.gql`
  query GetPostBySlug($slug: String!) {
    post(where: { slug: $slug }) {
      title
      content {
        html
      }
      coverImage {
        url
      }
      excerpt
      publishedAt
    }
  }
`;
var getPosts = async (query) => {
  try {
    const posts = await gqClient.request(PostsQuery, { search: query ?? "" });
    if (!posts) {
      return [];
    }
    return posts.posts;
  } catch {
    return [];
  }
};
var getPost = async (slug) => {
  try {
    const post = await gqClient.request(PostQuery, { slug });
    if (!post) {
      return null;
    }
    return post.post;
  } catch {
    return null;
  }
};

// route-module:/Users/muthu/workspace/remix-blog/app/routes/blog.$slug.tsx
var meta3 = ({ data }) => {
  return {
    title: data && data.title ? `${data == null ? void 0 : data.title} - Muthukumar` : "Page Not Found | Muthukumar",
    description: data == null ? void 0 : data.excerpt,
    "og:url": data == null ? void 0 : data.url,
    "og:type": "article",
    "og:title": data == null ? void 0 : data.title,
    "og:description": data == null ? void 0 : data.excerpt,
    "og:image": data == null ? void 0 : data.ogImage
  };
};
var loader3 = async ({ request, params }) => {
  const url = new URL(request.url);
  const slug = params.slug ?? "";
  const postData = await getPost(slug);
  if (!postData) {
    throw (0, import_remix11.json)({ message: `Oh no, the blog you looking for doesn't exists.` }, { status: 404 });
  }
  return (0, import_remix11.json)({
    url,
    html: postData.content.html,
    title: postData.title,
    ogImage: postData.coverImage.url,
    date: postData.publishedAt,
    description: postData.excerpt
  }, {
    headers: {
      "Cache-Control": "max-age=100, must-revalidate"
    }
  });
};
function BlogSlug() {
  const { html, title, date } = (0, import_remix11.useLoaderData)();
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", {
    className: "pt-4 pb-4 border-b border-color md:pb-10"
  }, /* @__PURE__ */ React.createElement(Container, {
    className: "flex flex-col items-center justify-center text-center"
  }, /* @__PURE__ */ React.createElement(GoBack, {
    link: "/blog"
  }), /* @__PURE__ */ React.createElement("h1", {
    className: "mt-4 mb-4 text-2xl font-bold md:mt-6 md:text-3xl"
  }, title), /* @__PURE__ */ React.createElement(date_default, {
    date,
    className: "text-sm light-font-color md:text-base"
  }), /* @__PURE__ */ React.createElement("div", {
    className: "flex items-center p-1 mt-4 md:mt-8"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "w-8 h-8 overflow-hidden rounded-full"
  }, /* @__PURE__ */ React.createElement("img", {
    src: "/images/profile.jpg",
    className: "object-cover w-full h-full rounded-full"
  })), /* @__PURE__ */ React.createElement("div", {
    className: "p-1 text-xs text-left"
  }, /* @__PURE__ */ React.createElement("h2", null, "Muthukumar"), /* @__PURE__ */ React.createElement("a", {
    href: "https://rd.nullish.in/twitter",
    className: "text-blue-600"
  }, "@am_muthukumar"))))), /* @__PURE__ */ React.createElement(Markdown, {
    className: "max-w-5xl"
  }, /* @__PURE__ */ React.createElement("div", {
    dangerouslySetInnerHTML: { __html: html }
  })));
}
function CatchBoundary2() {
  const caught = (0, import_remix11.useCatch)();
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
    link: "/blog"
  });
}

// route-module:/Users/muthu/workspace/remix-blog/app/routes/[rss.xml].tsx
var rss_xml_exports = {};
__export(rss_xml_exports, {
  loader: () => loader4
});
init_react();
function escapeCdata(s) {
  return s.replaceAll("]]>", "]]]]><![CDATA[>");
}
function escapeHtml(s) {
  return s.replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;").replaceAll('"', "&quot;").replaceAll("'", "&#039;");
}
var loader4 = async ({ request }) => {
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
      "Content-Length": String(Buffer.byteLength(rssString))
    }
  });
};

// route-module:/Users/muthu/workspace/remix-blog/app/routes/index.tsx
var routes_exports = {};
__export(routes_exports, {
  CatchBoundary: () => CatchBoundary3,
  ErrorBoundary: () => ErrorBoundary3,
  default: () => Blog,
  loader: () => loader5,
  meta: () => meta4
});
init_react();
var React8 = __toModule(require("react"));
var import_remix12 = __toModule(require_remix());
var meta4 = () => {
  return {
    title: "Muthukumar"
  };
};
var loader5 = async ({ request }) => {
  const url = new URL(request.url);
  const query = url.searchParams.get("q") ?? "";
  const blogPosts = await getPosts(query);
  if (blogPosts.length === 0) {
    throw (0, import_remix12.json)({ message: "No blogs found." }, { status: 404 });
  }
  const filteredBlogPosts = !query ? blogPosts : blogPosts.filter((post) => post.title.toLowerCase().includes(query.toLowerCase()));
  return (0, import_remix12.json)({ blogPosts: filteredBlogPosts }, {
    headers: {
      "Cache-Control": "max-age=100, must-revalidate"
    }
  });
};
function Blog() {
  const { blogPosts } = (0, import_remix12.useLoaderData)();
  return /* @__PURE__ */ React8.createElement(Layout2, null, /* @__PURE__ */ React8.createElement(Container, null, /* @__PURE__ */ React8.createElement("div", {
    className: "w-full"
  }, /* @__PURE__ */ React8.createElement("div", {
    className: "w-full"
  }, blogPosts.map((blogPost) => /* @__PURE__ */ React8.createElement(BlogPost, {
    publishedAt: blogPost.publishedAt,
    key: blogPost.id,
    slug: blogPost.slug,
    title: blogPost.title,
    excerpt: blogPost.excerpt
  }))))));
}
function Layout2({ children }) {
  return /* @__PURE__ */ React8.createElement(React8.Fragment, null, /* @__PURE__ */ React8.createElement(Container, null, /* @__PURE__ */ React8.createElement("h2", {
    className: "text-xl font-bold text-pink-500 uppercase md:py-4 md:text-xl"
  }, "Recently published")), children);
}
function CatchBoundary3() {
  const caught = (0, import_remix12.useCatch)();
  const message = caught.status === 404 ? caught.data.message : "Oopsies.. Something went wrong.";
  if (caught.status === 404) {
    return /* @__PURE__ */ React8.createElement(Four00, {
      title: "404",
      message,
      link: "/blog"
    });
  }
  return /* @__PURE__ */ React8.createElement(Four00, {
    title: "500",
    message,
    link: "/blog"
  });
}
function ErrorBoundary3() {
  return /* @__PURE__ */ React8.createElement(Four00, {
    title: "500",
    message: "Oopsies... Something went wrong.",
    link: "/"
  });
}

// route-module:/Users/muthu/workspace/remix-blog/app/routes/blog.tsx
var blog_exports = {};
__export(blog_exports, {
  CatchBoundary: () => CatchBoundary4,
  ErrorBoundary: () => ErrorBoundary4,
  default: () => Blog2,
  loader: () => loader6,
  meta: () => meta5
});
init_react();
var React9 = __toModule(require("react"));
var import_remix13 = __toModule(require_remix());
var import_io2 = __toModule(require("react-icons/io"));
var meta5 = () => {
  return {
    title: "Blog | Muthukumar"
  };
};
var loader6 = async ({ request }) => {
  const url = new URL(request.url);
  const query = url.searchParams.get("q") ?? "";
  const blogPosts = await getPosts(query);
  if (blogPosts.length === 0) {
    throw (0, import_remix13.json)({ message: "No blogs found." }, { status: 404 });
  }
  const filteredBlogPosts = !query ? blogPosts : blogPosts.filter((post) => post.title.toLowerCase().includes(query.toLowerCase()));
  return (0, import_remix13.json)({ blogPosts: filteredBlogPosts }, {
    headers: {
      "Cache-Control": "max-age=100, must-revalidate"
    }
  });
};
function Blog2() {
  const { blogPosts } = (0, import_remix13.useLoaderData)();
  const [searchParams] = (0, import_remix13.useSearchParams)();
  const query = searchParams.get("q");
  return /* @__PURE__ */ React9.createElement(Layout3, {
    query
  }, /* @__PURE__ */ React9.createElement(Container, null, /* @__PURE__ */ React9.createElement("div", {
    className: "py-2 md:py-6"
  }, blogPosts.map((blogPost) => /* @__PURE__ */ React9.createElement(BlogPost, {
    publishedAt: blogPost.publishedAt,
    key: blogPost.id,
    slug: blogPost.slug,
    title: blogPost.title,
    excerpt: blogPost.excerpt
  })))));
}
function Layout3({ children, query = "" }) {
  return /* @__PURE__ */ React9.createElement(React9.Fragment, null, /* @__PURE__ */ React9.createElement("div", {
    className: "pb-6 border-b border-color"
  }, /* @__PURE__ */ React9.createElement(Container, null, /* @__PURE__ */ React9.createElement(import_remix13.Form, {
    method: "get"
  }, /* @__PURE__ */ React9.createElement("h2", {
    className: "py-4 text-xl font-bold md:py-10 md:text-2xl"
  }, "Blog"), /* @__PURE__ */ React9.createElement("div", {
    className: "flex items-center max-w-sm p-1 border rounded-md border-color"
  }, /* @__PURE__ */ React9.createElement(import_io2.IoIosSearch, {
    className: "ml-2 text-gray-600",
    size: 20
  }), /* @__PURE__ */ React9.createElement("input", {
    name: "q",
    type: "text",
    className: "w-full p-1 ml-2 text-sm bg-color",
    placeholder: "Search posts...",
    defaultValue: query ?? ""
  }))))), children);
}
function CatchBoundary4() {
  const caught = (0, import_remix13.useCatch)();
  const message = caught.status === 404 ? caught.data.message : "Oopsies.. Something went wrong.";
  if (caught.status === 404) {
    return /* @__PURE__ */ React9.createElement(Four00, {
      title: "404",
      message,
      link: "/blog"
    });
  }
  return /* @__PURE__ */ React9.createElement(Four00, {
    title: "500",
    message,
    link: "/blog"
  });
}
function ErrorBoundary4() {
  return /* @__PURE__ */ React9.createElement(Four00, {
    title: "500",
    message: "Oopsies... Something went wrong.",
    link: "/"
  });
}

// route-module:/Users/muthu/workspace/remix-blog/app/routes/$.tsx
var __exports = {};
__export(__exports, {
  CatchBoundary: () => CatchBoundary5,
  ErrorBoundary: () => ErrorBoundary5,
  default: () => Splat,
  loader: () => loader7
});
init_react();
var import_remix14 = __toModule(require_remix());
var loader7 = async () => {
  throw (0, import_remix14.json)({ message: `Page, you are looking for doesn't exists` }, { status: 404 });
};
function Splat() {
  return /* @__PURE__ */ React.createElement(Container, null, /* @__PURE__ */ React.createElement("p", null, "You are not suppose to see this page. Good job getting here. Can you please let Muthu know, you got here."));
}
function CatchBoundary5() {
  const caught = (0, import_remix14.useCatch)();
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
var import_assets = __toModule(require("./assets.json"));
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
  "routes/blog.$slug": {
    id: "routes/blog.$slug",
    parentId: "root",
    path: "blog/:slug",
    index: void 0,
    caseSensitive: void 0,
    module: blog_slug_exports
  },
  "routes/[rss.xml]": {
    id: "routes/[rss.xml]",
    parentId: "root",
    path: "rss.xml",
    index: void 0,
    caseSensitive: void 0,
    module: rss_xml_exports
  },
  "routes/index": {
    id: "routes/index",
    parentId: "root",
    path: void 0,
    index: true,
    caseSensitive: void 0,
    module: routes_exports
  },
  "routes/blog": {
    id: "routes/blog",
    parentId: "root",
    path: "blog",
    index: void 0,
    caseSensitive: void 0,
    module: blog_exports
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
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  assets,
  entry,
  routes
});
/**
 * @remix-run/node v1.1.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
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
/**
 * remix v1.1.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vbm9kZV9tb2R1bGVzL0ByZW1peC1ydW4vZGV2L2NvbXBpbGVyL3NoaW1zL3JlYWN0LnRzIiwgIi4uLy4uL25vZGVfbW9kdWxlcy9yZW1peC9jbGllbnQuanMiLCAiLi4vLi4vbm9kZV9tb2R1bGVzL3JlbWl4L3NlcnZlci5qcyIsICIuLi8uLi9ub2RlX21vZHVsZXMvcmVtaXgvcGxhdGZvcm0uanMiLCAiLi4vLi4vbm9kZV9tb2R1bGVzL3JlbWl4L2luZGV4LmpzIiwgIjxzdGRpbj4iLCAiLi4vLi4vYXBwL2VudHJ5LnNlcnZlci50c3giLCAicm91dGUtbW9kdWxlOi9Vc2Vycy9tdXRodS93b3Jrc3BhY2UvcmVtaXgtYmxvZy9hcHAvcm9vdC50c3giLCAiLi4vLi4vYXBwL2NvbXBvbmVudHMvaW5kZXgudHN4IiwgIi4uLy4uL2FwcC9jb21wb25lbnRzLzQwMC50c3giLCAiLi4vLi4vYXBwL2NvbXBvbmVudHMvY29udGFpbmVyLnRzeCIsICIuLi8uLi9hcHAvY29tcG9uZW50cy9nby1iYWNrLnRzeCIsICIuLi8uLi9hcHAvY29tcG9uZW50cy9iYW5uZXIudHN4IiwgIi4uLy4uL2FwcC9jb21wb25lbnRzL2Jsb2ctcG9zdC50c3giLCAiLi4vLi4vYXBwL2NvbXBvbmVudHMvZGF0ZS50c3giLCAiLi4vLi4vYXBwL2NvbXBvbmVudHMvZm9vdGVyLnRzeCIsICIuLi8uLi9hcHAvY29tcG9uZW50cy9zb2NpYWwtaWNvbi50c3giLCAiLi4vLi4vYXBwL2NvbXBvbmVudHMvbmF2YmFyLnRzeCIsICIuLi8uLi9hcHAvY29tcG9uZW50cy9tYXJrZG93bi50c3giLCAiLi4vLi4vYXBwL3V0aWxzL3Nlc3Npb24uc2VydmVyLnRzIiwgIi4uLy4uL2FwcC91dGlscy9ldGFncy50cyIsICJyb3V0ZS1tb2R1bGU6L1VzZXJzL211dGh1L3dvcmtzcGFjZS9yZW1peC1ibG9nL2FwcC9yb3V0ZXMvW3NpdGVtYXAueG1sXS50c3giLCAicm91dGUtbW9kdWxlOi9Vc2Vycy9tdXRodS93b3Jrc3BhY2UvcmVtaXgtYmxvZy9hcHAvcm91dGVzL2Nsb3NlLWJhbm5lci50c3giLCAicm91dGUtbW9kdWxlOi9Vc2Vycy9tdXRodS93b3Jrc3BhY2UvcmVtaXgtYmxvZy9hcHAvcm91dGVzL19fY2hhbmdlbG9nLnRzeCIsICJtZHg6L1VzZXJzL211dGh1L3dvcmtzcGFjZS9yZW1peC1ibG9nL2FwcC9yb3V0ZXMvX19jaGFuZ2Vsb2cvY2hhbmdlbG9nLm1keCIsICJyb3V0ZS1tb2R1bGU6L1VzZXJzL211dGh1L3dvcmtzcGFjZS9yZW1peC1ibG9nL2FwcC9yb3V0ZXMvYmxvZy4kc2x1Zy50c3giLCAiLi4vLi4vYXBwL3V0aWxzL2Ntcy5zZXJ2ZXIudHMiLCAiLi4vLi4vYXBwL3V0aWxzL2dyYXBocWwuc2VydmVyLnRzIiwgIi4uLy4uL2FwcC91dGlscy9lbnYuc2VydmVyLnRzIiwgInJvdXRlLW1vZHVsZTovVXNlcnMvbXV0aHUvd29ya3NwYWNlL3JlbWl4LWJsb2cvYXBwL3JvdXRlcy9bcnNzLnhtbF0udHN4IiwgInJvdXRlLW1vZHVsZTovVXNlcnMvbXV0aHUvd29ya3NwYWNlL3JlbWl4LWJsb2cvYXBwL3JvdXRlcy9pbmRleC50c3giLCAicm91dGUtbW9kdWxlOi9Vc2Vycy9tdXRodS93b3Jrc3BhY2UvcmVtaXgtYmxvZy9hcHAvcm91dGVzL2Jsb2cudHN4IiwgInJvdXRlLW1vZHVsZTovVXNlcnMvbXV0aHUvd29ya3NwYWNlL3JlbWl4LWJsb2cvYXBwL3JvdXRlcy8kLnRzeCJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5leHBvcnQgeyBSZWFjdCB9O1xuIiwgIi8qKlxuICogQHJlbWl4LXJ1bi9yZWFjdCB2MS4xLjFcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIFJlbWl4IFNvZnR3YXJlIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UubWQgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqXG4gKiBAbGljZW5zZSBNSVRcbiAqL1xuJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuXG52YXIgcmVhY3QgPSByZXF1aXJlKCdAcmVtaXgtcnVuL3JlYWN0Jyk7XG5cblxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ0Zvcm0nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuRm9ybTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ0xpbmsnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuTGluazsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ0xpbmtzJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LkxpbmtzOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnTGl2ZVJlbG9hZCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5MaXZlUmVsb2FkOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnTWV0YScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5NZXRhOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnTmF2TGluaycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5OYXZMaW5rOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnT3V0bGV0Jywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0Lk91dGxldDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ1ByZWZldGNoUGFnZUxpbmtzJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LlByZWZldGNoUGFnZUxpbmtzOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnUmVtaXhCcm93c2VyJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LlJlbWl4QnJvd3NlcjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ1JlbWl4U2VydmVyJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LlJlbWl4U2VydmVyOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnU2NyaXB0cycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5TY3JpcHRzOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnU2Nyb2xsUmVzdG9yYXRpb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuU2Nyb2xsUmVzdG9yYXRpb247IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VBY3Rpb25EYXRhJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUFjdGlvbkRhdGE7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VCZWZvcmVVbmxvYWQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlQmVmb3JlVW5sb2FkOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlQ2F0Y2gnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlQ2F0Y2g7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VGZXRjaGVyJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUZldGNoZXI7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VGZXRjaGVycycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VGZXRjaGVyczsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUZvcm1BY3Rpb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlRm9ybUFjdGlvbjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUhyZWYnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlSHJlZjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUxvYWRlckRhdGEnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlTG9hZGVyRGF0YTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUxvY2F0aW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUxvY2F0aW9uOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlTWF0Y2hlcycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VNYXRjaGVzOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlTmF2aWdhdGUnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlTmF2aWdhdGU7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VOYXZpZ2F0aW9uVHlwZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VOYXZpZ2F0aW9uVHlwZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZU91dGxldCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VPdXRsZXQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VPdXRsZXRDb250ZXh0Jywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZU91dGxldENvbnRleHQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VQYXJhbXMnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlUGFyYW1zOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlUmVzb2x2ZWRQYXRoJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZVJlc29sdmVkUGF0aDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZVNlYXJjaFBhcmFtcycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VTZWFyY2hQYXJhbXM7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VTdWJtaXQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlU3VibWl0OyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlVHJhbnNpdGlvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VUcmFuc2l0aW9uOyB9XG59KTtcbiIsICIvKipcbiAqIEByZW1peC1ydW4vc2VydmVyLXJ1bnRpbWUgdjEuMS4xXG4gKlxuICogQ29weXJpZ2h0IChjKSBSZW1peCBTb2Z0d2FyZSBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFLm1kIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKlxuICogQGxpY2Vuc2UgTUlUXG4gKi9cbid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcblxudmFyIHNlcnZlclJ1bnRpbWUgPSByZXF1aXJlKCdAcmVtaXgtcnVuL3NlcnZlci1ydW50aW1lJyk7XG5cblxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NyZWF0ZUNvb2tpZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmNyZWF0ZUNvb2tpZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NyZWF0ZUNvb2tpZVNlc3Npb25TdG9yYWdlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuY3JlYXRlQ29va2llU2Vzc2lvblN0b3JhZ2U7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjcmVhdGVNZW1vcnlTZXNzaW9uU3RvcmFnZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmNyZWF0ZU1lbW9yeVNlc3Npb25TdG9yYWdlOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlU2Vzc2lvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmNyZWF0ZVNlc3Npb247IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjcmVhdGVTZXNzaW9uU3RvcmFnZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmNyZWF0ZVNlc3Npb25TdG9yYWdlOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnaXNDb29raWUnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5pc0Nvb2tpZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2lzU2Vzc2lvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmlzU2Vzc2lvbjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2pzb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5qc29uOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAncmVkaXJlY3QnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5yZWRpcmVjdDsgfVxufSk7XG4iLCAiLyoqXG4gKiBAcmVtaXgtcnVuL25vZGUgdjEuMS4xXG4gKlxuICogQ29weXJpZ2h0IChjKSBSZW1peCBTb2Z0d2FyZSBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFLm1kIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKlxuICogQGxpY2Vuc2UgTUlUXG4gKi9cbid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcblxudmFyIG5vZGUgPSByZXF1aXJlKCdAcmVtaXgtcnVuL25vZGUnKTtcblxuXG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlRmlsZVNlc3Npb25TdG9yYWdlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIG5vZGUuY3JlYXRlRmlsZVNlc3Npb25TdG9yYWdlOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndW5zdGFibGVfY3JlYXRlRmlsZVVwbG9hZEhhbmRsZXInLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gbm9kZS51bnN0YWJsZV9jcmVhdGVGaWxlVXBsb2FkSGFuZGxlcjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3Vuc3RhYmxlX2NyZWF0ZU1lbW9yeVVwbG9hZEhhbmRsZXInLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gbm9kZS51bnN0YWJsZV9jcmVhdGVNZW1vcnlVcGxvYWRIYW5kbGVyOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndW5zdGFibGVfcGFyc2VNdWx0aXBhcnRGb3JtRGF0YScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBub2RlLnVuc3RhYmxlX3BhcnNlTXVsdGlwYXJ0Rm9ybURhdGE7IH1cbn0pO1xuIiwgIi8qKlxuICogcmVtaXggdjEuMS4xXG4gKlxuICogQ29weXJpZ2h0IChjKSBSZW1peCBTb2Z0d2FyZSBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFLm1kIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKlxuICogQGxpY2Vuc2UgTUlUXG4gKi9cbid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcblxudmFyIGNsaWVudCA9IHJlcXVpcmUoJy4vY2xpZW50Jyk7XG52YXIgc2VydmVyID0gcmVxdWlyZSgnLi9zZXJ2ZXInKTtcbnZhciBwbGF0Zm9ybSA9IHJlcXVpcmUoJy4vcGxhdGZvcm0nKTtcblxuXG5cbk9iamVjdC5rZXlzKGNsaWVudCkuZm9yRWFjaChmdW5jdGlvbiAoaykge1xuXHRpZiAoayAhPT0gJ2RlZmF1bHQnICYmICFleHBvcnRzLmhhc093blByb3BlcnR5KGspKSBPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgaywge1xuXHRcdGVudW1lcmFibGU6IHRydWUsXG5cdFx0Z2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBjbGllbnRba107IH1cblx0fSk7XG59KTtcbk9iamVjdC5rZXlzKHNlcnZlcikuZm9yRWFjaChmdW5jdGlvbiAoaykge1xuXHRpZiAoayAhPT0gJ2RlZmF1bHQnICYmICFleHBvcnRzLmhhc093blByb3BlcnR5KGspKSBPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgaywge1xuXHRcdGVudW1lcmFibGU6IHRydWUsXG5cdFx0Z2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJba107IH1cblx0fSk7XG59KTtcbk9iamVjdC5rZXlzKHBsYXRmb3JtKS5mb3JFYWNoKGZ1bmN0aW9uIChrKSB7XG5cdGlmIChrICE9PSAnZGVmYXVsdCcgJiYgIWV4cG9ydHMuaGFzT3duUHJvcGVydHkoaykpIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrLCB7XG5cdFx0ZW51bWVyYWJsZTogdHJ1ZSxcblx0XHRnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHBsYXRmb3JtW2tdOyB9XG5cdH0pO1xufSk7XG4iLCAiXG5pbXBvcnQgKiBhcyBlbnRyeVNlcnZlciBmcm9tIFwiL1VzZXJzL211dGh1L3dvcmtzcGFjZS9yZW1peC1ibG9nL2FwcC9lbnRyeS5zZXJ2ZXIudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTAgZnJvbSBcIi9Vc2Vycy9tdXRodS93b3Jrc3BhY2UvcmVtaXgtYmxvZy9hcHAvcm9vdC50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMSBmcm9tIFwiL1VzZXJzL211dGh1L3dvcmtzcGFjZS9yZW1peC1ibG9nL2FwcC9yb3V0ZXMvW3NpdGVtYXAueG1sXS50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMiBmcm9tIFwiL1VzZXJzL211dGh1L3dvcmtzcGFjZS9yZW1peC1ibG9nL2FwcC9yb3V0ZXMvY2xvc2UtYmFubmVyLnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGUzIGZyb20gXCIvVXNlcnMvbXV0aHUvd29ya3NwYWNlL3JlbWl4LWJsb2cvYXBwL3JvdXRlcy9fX2NoYW5nZWxvZy50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlNCBmcm9tIFwiL1VzZXJzL211dGh1L3dvcmtzcGFjZS9yZW1peC1ibG9nL2FwcC9yb3V0ZXMvX19jaGFuZ2Vsb2cvY2hhbmdlbG9nLm1keFwiO1xuaW1wb3J0ICogYXMgcm91dGU1IGZyb20gXCIvVXNlcnMvbXV0aHUvd29ya3NwYWNlL3JlbWl4LWJsb2cvYXBwL3JvdXRlcy9ibG9nLiRzbHVnLnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGU2IGZyb20gXCIvVXNlcnMvbXV0aHUvd29ya3NwYWNlL3JlbWl4LWJsb2cvYXBwL3JvdXRlcy9bcnNzLnhtbF0udHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTcgZnJvbSBcIi9Vc2Vycy9tdXRodS93b3Jrc3BhY2UvcmVtaXgtYmxvZy9hcHAvcm91dGVzL2luZGV4LnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGU4IGZyb20gXCIvVXNlcnMvbXV0aHUvd29ya3NwYWNlL3JlbWl4LWJsb2cvYXBwL3JvdXRlcy9ibG9nLnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGU5IGZyb20gXCIvVXNlcnMvbXV0aHUvd29ya3NwYWNlL3JlbWl4LWJsb2cvYXBwL3JvdXRlcy8kLnRzeFwiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBhc3NldHMgfSBmcm9tIFwiLi9hc3NldHMuanNvblwiO1xuZXhwb3J0IGNvbnN0IGVudHJ5ID0geyBtb2R1bGU6IGVudHJ5U2VydmVyIH07XG5leHBvcnQgY29uc3Qgcm91dGVzID0ge1xuICBcInJvb3RcIjoge1xuICAgIGlkOiBcInJvb3RcIixcbiAgICBwYXJlbnRJZDogdW5kZWZpbmVkLFxuICAgIHBhdGg6IFwiXCIsXG4gICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgbW9kdWxlOiByb3V0ZTBcbiAgfSxcbiAgXCJyb3V0ZXMvW3NpdGVtYXAueG1sXVwiOiB7XG4gICAgaWQ6IFwicm91dGVzL1tzaXRlbWFwLnhtbF1cIixcbiAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgcGF0aDogXCJzaXRlbWFwLnhtbFwiLFxuICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgIG1vZHVsZTogcm91dGUxXG4gIH0sXG4gIFwicm91dGVzL2Nsb3NlLWJhbm5lclwiOiB7XG4gICAgaWQ6IFwicm91dGVzL2Nsb3NlLWJhbm5lclwiLFxuICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICBwYXRoOiBcImNsb3NlLWJhbm5lclwiLFxuICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgIG1vZHVsZTogcm91dGUyXG4gIH0sXG4gIFwicm91dGVzL19fY2hhbmdlbG9nXCI6IHtcbiAgICBpZDogXCJyb3V0ZXMvX19jaGFuZ2Vsb2dcIixcbiAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgcGF0aDogdW5kZWZpbmVkLFxuICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgIG1vZHVsZTogcm91dGUzXG4gIH0sXG4gIFwicm91dGVzL19fY2hhbmdlbG9nL2NoYW5nZWxvZ1wiOiB7XG4gICAgaWQ6IFwicm91dGVzL19fY2hhbmdlbG9nL2NoYW5nZWxvZ1wiLFxuICAgIHBhcmVudElkOiBcInJvdXRlcy9fX2NoYW5nZWxvZ1wiLFxuICAgIHBhdGg6IFwiY2hhbmdlbG9nXCIsXG4gICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgbW9kdWxlOiByb3V0ZTRcbiAgfSxcbiAgXCJyb3V0ZXMvYmxvZy4kc2x1Z1wiOiB7XG4gICAgaWQ6IFwicm91dGVzL2Jsb2cuJHNsdWdcIixcbiAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgcGF0aDogXCJibG9nLzpzbHVnXCIsXG4gICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgbW9kdWxlOiByb3V0ZTVcbiAgfSxcbiAgXCJyb3V0ZXMvW3Jzcy54bWxdXCI6IHtcbiAgICBpZDogXCJyb3V0ZXMvW3Jzcy54bWxdXCIsXG4gICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgIHBhdGg6IFwicnNzLnhtbFwiLFxuICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgIG1vZHVsZTogcm91dGU2XG4gIH0sXG4gIFwicm91dGVzL2luZGV4XCI6IHtcbiAgICBpZDogXCJyb3V0ZXMvaW5kZXhcIixcbiAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgcGF0aDogdW5kZWZpbmVkLFxuICAgIGluZGV4OiB0cnVlLFxuICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICBtb2R1bGU6IHJvdXRlN1xuICB9LFxuICBcInJvdXRlcy9ibG9nXCI6IHtcbiAgICBpZDogXCJyb3V0ZXMvYmxvZ1wiLFxuICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICBwYXRoOiBcImJsb2dcIixcbiAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICBtb2R1bGU6IHJvdXRlOFxuICB9LFxuICBcInJvdXRlcy8kXCI6IHtcbiAgICBpZDogXCJyb3V0ZXMvJFwiLFxuICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICBwYXRoOiBcIipcIixcbiAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICBtb2R1bGU6IHJvdXRlOVxuICB9XG59OyIsICJpbXBvcnQgeyByZW5kZXJUb1N0cmluZyB9IGZyb20gJ3JlYWN0LWRvbS9zZXJ2ZXInXG5pbXBvcnQgeyBSZW1peFNlcnZlciB9IGZyb20gJ3JlbWl4J1xuaW1wb3J0IHR5cGUgeyBFbnRyeUNvbnRleHQgfSBmcm9tICdyZW1peCdcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaGFuZGxlUmVxdWVzdChcbiAgcmVxdWVzdDogUmVxdWVzdCxcbiAgcmVzcG9uc2VTdGF0dXNDb2RlOiBudW1iZXIsXG4gIHJlc3BvbnNlSGVhZGVyczogSGVhZGVycyxcbiAgcmVtaXhDb250ZXh0OiBFbnRyeUNvbnRleHQsXG4pIHtcbiAgY29uc3QgbWFya3VwID0gcmVuZGVyVG9TdHJpbmcoPFJlbWl4U2VydmVyIGNvbnRleHQ9e3JlbWl4Q29udGV4dH0gdXJsPXtyZXF1ZXN0LnVybH0gLz4pXG5cbiAgcmVzcG9uc2VIZWFkZXJzLnNldCgnQ29udGVudC1UeXBlJywgJ3RleHQvaHRtbCcpXG5cbiAgcmV0dXJuIG5ldyBSZXNwb25zZSgnPCFET0NUWVBFIGh0bWw+JyArIG1hcmt1cCwge1xuICAgIHN0YXR1czogcmVzcG9uc2VTdGF0dXNDb2RlLFxuICAgIGhlYWRlcnM6IHJlc3BvbnNlSGVhZGVycyxcbiAgfSlcbn1cbiIsICJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7XG4gIFNjcmlwdHMsXG4gIGpzb24sXG4gIExpbmtzRnVuY3Rpb24sXG4gIExvYWRlckZ1bmN0aW9uLFxuICB1c2VDYXRjaCxcbiAgdXNlTG9hZGVyRGF0YSxcbiAgdXNlTG9jYXRpb24sXG59IGZyb20gJ3JlbWl4J1xuaW1wb3J0IHsgTGlua3MsIExpdmVSZWxvYWQsIE1ldGEsIE91dGxldCwgU2Nyb2xsUmVzdG9yYXRpb24sIE1ldGFGdW5jdGlvbiB9IGZyb20gJ3JlbWl4J1xuXG5pbXBvcnQgZ2xvYmFsU3R5bGVzVXJsIGZyb20gJ34vc3R5bGVzL2dsb2JhbC5jc3MnXG5pbXBvcnQgdGFpbHdpbmRTdHlsZXNVcmwgZnJvbSAnfi9zdHlsZXMvdGFpbHdpbmQuY3NzJ1xuaW1wb3J0IGRhcmtTdHlsZXNVcmwgZnJvbSAnfi9zdHlsZXMvZGFyay5jc3MnXG5cbmltcG9ydCB7IE5hdmJhciwgRm9vdGVyLCBGb3VyMDAsIEJhbm5lciB9IGZyb20gJ34vY29tcG9uZW50cydcbmltcG9ydCB7IGdldFNlc3Npb24gfSBmcm9tICcuL3V0aWxzL3Nlc3Npb24uc2VydmVyJ1xuaW1wb3J0IHsgQmFubmVyVHlwZSB9IGZyb20gJy4vY29tcG9uZW50cy9iYW5uZXInXG5pbXBvcnQgKiBhcyBndGFnIGZyb20gJ34vdXRpbHMvZXRhZ3MnXG5cbmV4cG9ydCBjb25zdCBtZXRhOiBNZXRhRnVuY3Rpb24gPSAoKSA9PiB7XG4gIHJldHVybiB7XG4gICAgJ2FwcGxlLW1vYmlsZS13ZWItYXBwLWNhcGFibGUnOiAneWVzJyxcbiAgICAnYXBwbGUtbW9iaWxlLXdlYi1hcHAtc3RhdHVzLWJhci1zdHlsZSc6ICdibGFjay10cmFuc3BhcmVudCcsXG4gICAgJ2FwcGxlLW1vYmlsZS13ZWItYXBwLXRpdGxlJzogJ011dGh1a3VtYXInLFxuICAgICdmb3JtYXQtZGV0ZWN0aW9uJzogJ3RlbGVwaG9uZT1ubycsXG4gICAgJ21vYmlsZS13ZWItYXBwLWNhcGFibGUnOiAneWVzJyxcbiAgICAnbXNhcHBsaWNhdGlvbi1UaWxlQ29sb3InOiAnIzAwMCcsXG4gICAgJ29nOmxvY2FsZSc6ICdlbicsXG4gICAgJ29nOnNpdGVfbmFtZSc6ICdNdXRodWt1bWFyJyxcbiAgICAnb2c6dHlwZSc6ICd3ZWJzaXRlJyxcbiAgICAndGhlbWUtY29sb3InOiAnIzAwMCcsXG4gICAgJ3R3aXR0ZXI6Y2FyZCc6ICdzdW1tYXJ5X2xhcmdlX2ltYWdlJyxcbiAgICAndHdpdHRlcjpjcmVhdG9yJzogJ0BhbV9tdXRodWt1bWFyJyxcbiAgICAndHdpdHRlcjpzaXRlJzogJ0BhbV9tdXRodWt1bWFyJyxcbiAgICAnWC1VQS1Db21wYXRpYmxlJzogJ0lFPWVkZ2UsY2hyb21lPTEnLFxuICAgIGF1dGhvcjogJ011dGh1a3VtYXInLFxuICAgIEhhbmRoZWxkRnJpZW5kbHk6ICdUcnVlJyxcbiAgICBsYW5ndWFnZTogJ2VuJyxcbiAgICBNb2JpbGVPcHRpbWl6ZWQ6ICczMjAnLFxuICAgIHBhZ2VuYW1lOiAnTXV0aHVrdW1hcicsXG4gICAgdGl0bGU6ICdNdXRodWt1bWFyJyxcbiAgICBkZXNjcmlwdGlvbjpcbiAgICAgICdUdXRvcmlhbHMgYW5kIG5vdGVzIG9uIFJlYWN0LCBKYXZhc2NyaXB0LCBDU1MgYW5kIG1vcmUuIEFsc28gUGVyc29uYWwgYm9vayByZXZpZXdzIGFuZCBwZXJzb25hbCB0aG91Z2h0cyBvbiBzdHVmZiBhbmQgbW9yZSEuJyxcbiAgICB2aWV3cG9ydDogJ3dpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xLCB2aWV3cG9ydC1maXQ9Y292ZXInLFxuICB9XG59XG5cbmV4cG9ydCBjb25zdCBsaW5rczogTGlua3NGdW5jdGlvbiA9ICgpID0+IHtcbiAgcmV0dXJuIFtcbiAgICB7IHJlbDogJ3N0eWxlc2hlZXQnLCBocmVmOiBnbG9iYWxTdHlsZXNVcmwgfSxcbiAgICB7IHJlbDogJ3N0eWxlc2hlZXQnLCBocmVmOiB0YWlsd2luZFN0eWxlc1VybCB9LFxuICAgIHsgcmVsOiAnc3R5bGVzaGVldCcsIGhyZWY6IGRhcmtTdHlsZXNVcmwsIG1lZGlhOiAnKHByZWZlcnMtY29sb3Itc2NoZW1lOiBkYXJrKScgfSxcbiAgICB7XG4gICAgICByZWw6ICdwcmVsb2FkJyxcbiAgICAgIGFzOiAnZm9udCcsXG4gICAgICBocmVmOiAnL2ZvbnRzL2ludGVyLXY3LWxhdGluLXJlZ3VsYXIuZW90JyxcbiAgICAgIHR5cGU6ICdmb250L2VvdCcsXG4gICAgICBjcm9zc09yaWdpbjogJ2Fub255bW91cycsXG4gICAgfSxcbiAgICB7XG4gICAgICByZWw6ICdwcmVsb2FkJyxcbiAgICAgIGFzOiAnZm9udCcsXG4gICAgICBocmVmOiAnL2ZvbnRzL2ludGVyLXY3LWxhdGluLXJlZ3VsYXIuc3ZnJyxcbiAgICAgIHR5cGU6ICdmb250L3N2ZycsXG4gICAgICBjcm9zc09yaWdpbjogJ2Fub255bW91cycsXG4gICAgfSxcbiAgICB7XG4gICAgICByZWw6ICdwcmVsb2FkJyxcbiAgICAgIGFzOiAnZm9udCcsXG4gICAgICBocmVmOiAnL2ZvbnRzL2ludGVyLXY3LWxhdGluLXJlZ3VsYXIudHRmJyxcbiAgICAgIHR5cGU6ICdmb250L3R0ZicsXG4gICAgICBjcm9zc09yaWdpbjogJ2Fub255bW91cycsXG4gICAgfSxcbiAgICB7XG4gICAgICByZWw6ICdwcmVsb2FkJyxcbiAgICAgIGFzOiAnZm9udCcsXG4gICAgICBocmVmOiAnL2ZvbnRzL2ludGVyLXY3LWxhdGluLXJlZ3VsYXIud29mZicsXG4gICAgICB0eXBlOiAnZm9udC93b2ZmJyxcbiAgICAgIGNyb3NzT3JpZ2luOiAnYW5vbnltb3VzJyxcbiAgICB9LFxuICAgIHtcbiAgICAgIHJlbDogJ3ByZWxvYWQnLFxuICAgICAgYXM6ICdmb250JyxcbiAgICAgIGhyZWY6ICcvZm9udHMvaW50ZXItdjctbGF0aW4tcmVndWxhci53b2ZmMicsXG4gICAgICB0eXBlOiAnZm9udC93b2ZmMicsXG4gICAgICBjcm9zc09yaWdpbjogJ2Fub255bW91cycsXG4gICAgfSxcblxuICAgIHtcbiAgICAgIHJlbDogJ2FwcGxlLXRvdWNoLWljb24nLFxuICAgICAgc2l6ZXM6ICcxODB4MTgwJyxcbiAgICAgIGhyZWY6ICcvZmF2aWNvbi9kYXJrL2FwcGxlLXRvdWNoLWljb24ucG5nJyxcbiAgICAgIG1lZGlhOiAnKHByZWZlcnMtY29sb3Itc2NoZW1lOiBkYXJrKScsXG4gICAgfSxcbiAgICB7XG4gICAgICByZWw6ICdpY29uJyxcbiAgICAgIHR5cGU6ICdpbWFnZS9wbmcnLFxuICAgICAgc2l6ZXM6ICczMngzMicsXG4gICAgICBocmVmOiAnL2Zhdmljb24vZGFyay9mYXZpY29uLTMyeDMyLnBuZycsXG4gICAgICBtZWRpYTogJyhwcmVmZXJzLWNvbG9yLXNjaGVtZTogZGFyayknLFxuICAgIH0sXG4gICAge1xuICAgICAgcmVsOiAnaWNvbicsXG4gICAgICB0eXBlOiAnaW1hZ2UvcG5nJyxcbiAgICAgIHNpemVzOiAnMTZ4MTYnLFxuICAgICAgaHJlZjogJy9mYXZpY29uL2RhcmsvZmF2aWNvbi0xNngxNi5wbmcnLFxuICAgICAgbWVkaWE6ICcocHJlZmVycy1jb2xvci1zY2hlbWU6IGRhcmspJyxcbiAgICB9LFxuICAgIHtcbiAgICAgIHJlbDogJ21hbmlmZXN0JyxcbiAgICAgIGhyZWY6ICcvZmF2aWNvbi9kYXJrL3NpdGUud2VibWFuaWZlc3QnLFxuICAgICAgbWVkaWE6ICcocHJlZmVycy1jb2xvci1zY2hlbWU6IGRhcmspJyxcbiAgICB9LFxuXG4gICAge1xuICAgICAgcmVsOiAnYXBwbGUtdG91Y2gtaWNvbicsXG4gICAgICBzaXplczogJzE4MHgxODAnLFxuICAgICAgaHJlZjogJy9mYXZpY29uL2xpZ2h0L2FwcGxlLXRvdWNoLWljb24ucG5nJyxcbiAgICAgIG1lZGlhOiAnKHByZWZlcnMtY29sb3Itc2NoZW1lOiBsaWdodCknLFxuICAgIH0sXG4gICAge1xuICAgICAgcmVsOiAnaWNvbicsXG4gICAgICB0eXBlOiAnaW1hZ2UvcG5nJyxcbiAgICAgIHNpemVzOiAnMzJ4MzInLFxuICAgICAgaHJlZjogJy9mYXZpY29uL2xpZ2h0L2Zhdmljb24tMzJ4MzIucG5nJyxcbiAgICAgIG1lZGlhOiAnKHByZWZlcnMtY29sb3Itc2NoZW1lOiBsaWdodCknLFxuICAgIH0sXG4gICAge1xuICAgICAgcmVsOiAnaWNvbicsXG4gICAgICB0eXBlOiAnaW1hZ2UvcG5nJyxcbiAgICAgIHNpemVzOiAnMTZ4MTYnLFxuICAgICAgaHJlZjogJy9mYXZpY29uL2xpZ2h0L2Zhdmljb24tMTZ4MTYucG5nJyxcbiAgICAgIG1lZGlhOiAnKHByZWZlcnMtY29sb3Itc2NoZW1lOiBsaWdodCknLFxuICAgIH0sXG4gICAge1xuICAgICAgcmVsOiAnbWFuaWZlc3QnLFxuICAgICAgaHJlZjogJy9mYXZpY29uL2xpZ2h0L3NpdGUud2VibWFuaWZlc3QnLFxuICAgICAgbWVkaWE6ICcocHJlZmVycy1jb2xvci1zY2hlbWU6IGxpZ2h0KScsXG4gICAgfSxcbiAgXVxufVxuXG5leHBvcnQgY29uc3QgbG9hZGVyOiBMb2FkZXJGdW5jdGlvbiA9IGFzeW5jICh7IHJlcXVlc3QgfSkgPT4ge1xuICBjb25zdCBzZXNzaW9uID0gYXdhaXQgZ2V0U2Vzc2lvbihyZXF1ZXN0LmhlYWRlcnMuZ2V0KCdDb29raWUnKSlcblxuICBjb25zdCBiYW5uZXIgPSBzZXNzaW9uLmdldCgnYmFubmVyJykgPz8geyB0aXRsZTogJycsIGxpbms6ICcnLCBzaG93OiBmYWxzZSB9XG5cbiAgcmV0dXJuIGpzb24oeyBiYW5uZXIgfSlcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQXBwKCkge1xuICBjb25zdCB7IGJhbm5lciB9ID0gdXNlTG9hZGVyRGF0YTx7IGJhbm5lcjogQmFubmVyVHlwZSB9PigpXG5cbiAgY29uc3QgbG9jYXRpb24gPSB1c2VMb2NhdGlvbigpXG5cbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICBndGFnLnBhZ2V2aWV3KGxvY2F0aW9uLnBhdGhuYW1lKVxuICB9LCBbbG9jYXRpb25dKVxuXG4gIHJldHVybiAoXG4gICAgPERvY3VtZW50PlxuICAgICAgPExheW91dCBiYW5uZXI9e2Jhbm5lcn0+XG4gICAgICAgIDxPdXRsZXQgLz5cbiAgICAgIDwvTGF5b3V0PlxuICAgIDwvRG9jdW1lbnQ+XG4gIClcbn1cblxuZnVuY3Rpb24gRG9jdW1lbnQoeyBjaGlsZHJlbiwgdGl0bGUgfTogeyBjaGlsZHJlbjogUmVhY3QuUmVhY3ROb2RlOyB0aXRsZT86IHN0cmluZyB9KSB7XG4gIHJldHVybiAoXG4gICAgPGh0bWwgbGFuZz1cImVuXCI+XG4gICAgICA8aGVhZD5cbiAgICAgICAgPG1ldGEgY2hhclNldD1cInV0Zi04XCIgLz5cbiAgICAgICAgPG1ldGEgbmFtZT1cImNvbG9yLXNjaGVtZVwiIGNvbnRlbnQ9XCJkYXJrIGxpZ2h0XCIgLz5cbiAgICAgICAge3RpdGxlID8gPHRpdGxlPnt0aXRsZX08L3RpdGxlPiA6IG51bGx9XG4gICAgICAgIDxNZXRhIC8+XG4gICAgICAgIDxMaW5rcyAvPlxuICAgICAgPC9oZWFkPlxuICAgICAgPGJvZHkgY2xhc3NOYW1lPVwiYW50aWFsaWFzZWQgYmctY29sb3IgZm9udC1jb2xvclwiPlxuICAgICAgICA8c2NyaXB0IGFzeW5jIHNyYz17YGh0dHBzOi8vd3d3Lmdvb2dsZXRhZ21hbmFnZXIuY29tL2d0YWcvanM/aWQ9JHtndGFnLkdBX1RSQUNLSU5HX0lEfWB9IC8+XG4gICAgICAgIDxzY3JpcHRcbiAgICAgICAgICBhc3luY1xuICAgICAgICAgIGlkPVwiZ3RhZy1pbml0XCJcbiAgICAgICAgICBkYW5nZXJvdXNseVNldElubmVySFRNTD17e1xuICAgICAgICAgICAgX19odG1sOiBgXG4gICAgICAgICAgICB3aW5kb3cuZGF0YUxheWVyID0gd2luZG93LmRhdGFMYXllciB8fCBbXTtcbiAgICAgICAgICAgIGZ1bmN0aW9uIGd0YWcoKXtkYXRhTGF5ZXIucHVzaChhcmd1bWVudHMpO31cbiAgICAgICAgICAgIGd0YWcoJ2pzJywgbmV3IERhdGUoKSk7XG5cbiAgICAgICAgICAgIGd0YWcoJ2NvbmZpZycsICcke2d0YWcuR0FfVFJBQ0tJTkdfSUR9Jywge1xuICAgICAgICAgICAgICBwYWdlX3BhdGg6IHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIGAsXG4gICAgICAgICAgfX1cbiAgICAgICAgLz5cbiAgICAgICAge2NoaWxkcmVufVxuICAgICAgICA8U2NyaXB0cyAvPlxuICAgICAgICA8U2Nyb2xsUmVzdG9yYXRpb24gLz5cbiAgICAgICAge3Byb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnICYmIDxMaXZlUmVsb2FkIC8+fVxuICAgICAgPC9ib2R5PlxuICAgIDwvaHRtbD5cbiAgKVxufVxuXG5mdW5jdGlvbiBMYXlvdXQoeyBjaGlsZHJlbiwgYmFubmVyIH06IHsgYmFubmVyPzogQmFubmVyVHlwZTsgY2hpbGRyZW46IFJlYWN0LlJlYWN0Tm9kZSB9KSB7XG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIHtiYW5uZXIgJiYgYmFubmVyLnNob3cgJiYgPEJhbm5lciB7Li4uYmFubmVyfSAvPn1cbiAgICAgIDxOYXZiYXIgLz5cbiAgICAgIDxtYWluPntjaGlsZHJlbn08L21haW4+XG4gICAgICA8Rm9vdGVyIC8+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIENhdGNoQm91bmRhcnkoKSB7XG4gIGNvbnN0IGNhdWdodCA9IHVzZUNhdGNoKClcblxuICBjb25zdCBtZXNzYWdlID0gY2F1Z2h0LnN0YXR1cyA9PT0gNDA0ID8gY2F1Z2h0LmRhdGEubWVzc2FnZSA6ICdPb3BzaWVzLi4gU29tZXRoaW5nIHdlbnQgd3JvbmcuJ1xuXG4gIGlmIChjYXVnaHQuc3RhdHVzID09PSA0MDQpIHtcbiAgICByZXR1cm4gPEZvdXIwMCB0aXRsZT1cIjQwNFwiIG1lc3NhZ2U9e21lc3NhZ2V9IGxpbms9XCIvYmxvZ1wiIC8+XG4gIH1cblxuICByZXR1cm4gPEZvdXIwMCB0aXRsZT1cIjUwMFwiIG1lc3NhZ2U9e21lc3NhZ2V9IGxpbms9XCIvYmxvZ1wiIC8+XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBFcnJvckJvdW5kYXJ5KCkge1xuICByZXR1cm4gKFxuICAgIDxEb2N1bWVudCB0aXRsZT1cIkVycm9yIVwiPlxuICAgICAgPExheW91dD5cbiAgICAgICAgPEZvdXIwMCB0aXRsZT1cIjUwMFwiIG1lc3NhZ2U9XCJPb3BzaWVzLi4uIFNvbWV0aGluZyB3ZW50IHdyb25nLlwiIGxpbms9XCIvXCIgLz5cbiAgICAgIDwvTGF5b3V0PlxuICAgIDwvRG9jdW1lbnQ+XG4gIClcbn1cbiIsICJleHBvcnQgeyBkZWZhdWx0IGFzIEZvdXIwMCB9IGZyb20gJy4vNDAwJ1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBCYW5uZXIgfSBmcm9tICcuL2Jhbm5lcidcbmV4cG9ydCB7IGRlZmF1bHQgYXMgQmxvZ1Bvc3QgfSBmcm9tICcuL2Jsb2ctcG9zdCdcbmV4cG9ydCB7IGRlZmF1bHQgYXMgQ29udGFpbmVyIH0gZnJvbSAnLi9jb250YWluZXInXG5leHBvcnQgeyBkZWZhdWx0IGFzIERhdGUgfSBmcm9tICcuL2RhdGUnXG5leHBvcnQgeyBkZWZhdWx0IGFzIEZvb3RlciB9IGZyb20gJy4vZm9vdGVyJ1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBHb0JhY2sgfSBmcm9tICcuL2dvLWJhY2snXG5leHBvcnQgeyBkZWZhdWx0IGFzIE5hdmJhciB9IGZyb20gJy4vbmF2YmFyJ1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBTb2NpYWxJY29uIH0gZnJvbSAnLi9zb2NpYWwtaWNvbidcbmV4cG9ydCB7IGRlZmF1bHQgYXMgTWFya2Rvd24gfSBmcm9tICcuL21hcmtkb3duJ1xuIiwgImltcG9ydCBDb250YWluZXIgZnJvbSAnLi9jb250YWluZXInXG5pbXBvcnQgR29CYWNrIGZyb20gJy4vZ28tYmFjaydcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRm91cjAwKHtcbiAgbWVzc2FnZSxcbiAgdGl0bGUsXG4gIGxpbmssXG59OiB7XG4gIGxpbms6IHN0cmluZ1xuICB0aXRsZTogc3RyaW5nXG4gIG1lc3NhZ2U6IHN0cmluZ1xufSkge1xuICByZXR1cm4gKFxuICAgIDxDb250YWluZXIgY2xhc3NOYW1lPVwicHktNjBcIj5cbiAgICAgIDxoMSBjbGFzc05hbWU9XCJmb250LWJvbGQgdGV4dC03eGxcIj57dGl0bGV9PC9oMT5cbiAgICAgIDxwIGNsYXNzTmFtZT1cIm10LTIgdGV4dC14bCBmb250LWJvbGQgbGlnaHQtZm9udC1jb2xvclwiPnttZXNzYWdlfTwvcD5cbiAgICAgIDxHb0JhY2sgY2xhc3NOYW1lPVwibXQtOCBsaW5rLWZvbnQtY29sb3JcIiBsaW5rPXtsaW5rfSAvPlxuICAgIDwvQ29udGFpbmVyPlxuICApXG59XG4iLCAiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgY2xzeCBmcm9tICdjbHN4J1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDb250YWluZXIoe1xuICBjaGlsZHJlbixcbiAgY2xhc3NOYW1lID0gdW5kZWZpbmVkLFxufToge1xuICBjaGlsZHJlbjogUmVhY3QuUmVhY3ROb2RlXG4gIGNsYXNzTmFtZT86IHN0cmluZyB8IHVuZGVmaW5lZFxufSkge1xuICBjb25zdCBoYXNQeSA9IGNsYXNzTmFtZT8uaW5jbHVkZXMoJ3B5JylcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17Y2xzeCgncHgtNCBjb250YWluZXIgbWF4LXctNXhsIG14LWF1dG8nLCB7ICdweS0yJzogIWhhc1B5IH0sIGNsYXNzTmFtZSl9PlxuICAgICAge2NoaWxkcmVufVxuICAgIDwvZGl2PlxuICApXG59XG4iLCAiaW1wb3J0IHsgSGlPdXRsaW5lQXJyb3dMZWZ0IH0gZnJvbSAncmVhY3QtaWNvbnMvaGknXG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAncmVtaXgnXG5pbXBvcnQgY2xzeCBmcm9tICdjbHN4J1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBHb0JhY2soe1xuICBjbGFzc05hbWUsXG4gIGxpbmssXG59OiB7XG4gIGNsYXNzTmFtZT86IHN0cmluZyB8IHVuZGVmaW5lZFxuICBsaW5rOiBzdHJpbmdcbn0pIHtcbiAgcmV0dXJuIChcbiAgICA8TGlua1xuICAgICAgdG89e2xpbmt9XG4gICAgICBjbGFzc05hbWU9e2Nsc3goXG4gICAgICAgICdmbGV4IGl0ZW1zLWNlbnRlciBzZWxmLXN0YXJ0IGp1c3RpZnktc3RhcnQgbWItMiB0ZXh0LXNtIGxpZ2h0LWZvbnQtY29sb3InLFxuICAgICAgICBjbGFzc05hbWUsXG4gICAgICApfVxuICAgID5cbiAgICAgIDxIaU91dGxpbmVBcnJvd0xlZnQgLz5cbiAgICAgIDxwIGNsYXNzTmFtZT1cInNlbGYtc3RhcnQgbWwtMiB0ZXh0LXNtIG1kOnRleHQtYmFzZVwiPkdvIEJhY2s8L3A+XG4gICAgPC9MaW5rPlxuICApXG59XG4iLCAiaW1wb3J0IHsgUmlDbG9zZUZpbGwgfSBmcm9tICdyZWFjdC1pY29ucy9yaSdcbmltcG9ydCB7IHVzZUZldGNoZXIgfSBmcm9tICdyZW1peCdcblxuZXhwb3J0IHR5cGUgQmFubmVyVHlwZSA9IHtcbiAgdGl0bGU6IHN0cmluZ1xuICBsaW5rOiBzdHJpbmdcbiAgc2hvdzogYm9vbGVhblxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBCYW5uZXIoeyB0aXRsZSwgbGluayB9OiBQaWNrPEJhbm5lclR5cGUsICd0aXRsZScgfCAnbGluayc+KSB7XG4gIGNvbnN0IGJhbm5lciA9IHVzZUZldGNoZXIoKVxuICByZXR1cm4gKFxuICAgIDxkaXZcbiAgICAgIHJvbGU9XCJiYW5uZXJcIlxuICAgICAgY2xhc3NOYW1lPVwicmVsYXRpdmUgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgcHktMiBmb250LWJvbGQgYm9yZGVyLWIgYmctY29sb3IgZm9udC1jb2xvciBib3JkZXItY29sb3JcIlxuICAgID5cbiAgICAgIDxhIGhyZWY9e2xpbmt9PlxuICAgICAgICA8cCBjbGFzc05hbWU9XCJ3LWZ1bGwgdGV4dC1zbSB0ZXh0LWNlbnRlclwiPnt0aXRsZX08L3A+XG4gICAgICA8L2E+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImFic29sdXRlIHJpZ2h0LTAgcHItNFwiPlxuICAgICAgICA8YmFubmVyLkZvcm0gbWV0aG9kPVwicG9zdFwiIGFjdGlvbj1cIi9jbG9zZS1iYW5uZXJcIj5cbiAgICAgICAgICA8YnV0dG9uPlxuICAgICAgICAgICAgPFJpQ2xvc2VGaWxsIC8+XG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDwvYmFubmVyLkZvcm0+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKVxufVxuIiwgImltcG9ydCB7IEJpUmlnaHRBcnJvd0FsdCB9IGZyb20gJ3JlYWN0LWljb25zL2JpJ1xuaW1wb3J0IHsgTGluayB9IGZyb20gJ3JlbWl4J1xuXG5pbXBvcnQgeyBEYXRlIH0gZnJvbSAnLidcbmltcG9ydCB7IFBvc3QgfSBmcm9tICd+L3V0aWxzL2Ntcy5zZXJ2ZXInXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEJsb2dQb3N0KHtcbiAgdGl0bGUsXG4gIHB1Ymxpc2hlZEF0LFxuICBleGNlcnB0LFxuICBzbHVnLFxufTogUGljazxQb3N0LCAndGl0bGUnIHwgJ3B1Ymxpc2hlZEF0JyB8ICdleGNlcnB0JyB8ICdzbHVnJz4pIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBwYi02IG1iLTQgYm9yZGVyLWIgYm9yZGVyLWNvbG9yIG1kOnBiLTEwIG1kOm1iLThcIj5cbiAgICAgIDxEYXRlIGNsYXNzTmFtZT1cIm15LTIgdGV4dC1zbSBsaWdodC1mb250LWNvbG9yIG1kOnRleHQtYmFzZVwiIGRhdGU9e3B1Ymxpc2hlZEF0fSAvPlxuICAgICAgPGgyIGNsYXNzTmFtZT1cIm15LTQgdGV4dC14bCBmb250LWJvbGQgbWQ6dGV4dC0yeGxcIj57dGl0bGV9PC9oMj5cbiAgICAgIDxwIGNsYXNzTmFtZT1cIm1iLTQgdGV4dC1zbSBtZDp0ZXh0LWJhc2VcIj57ZXhjZXJwdH08L3A+XG4gICAgICA8TGlua1xuICAgICAgICB0bz17YC9ibG9nLyR7c2x1Z31gfVxuICAgICAgICBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciB0ZXh0LXNtIGxpbmstZm9udC1jb2xvclwiXG4gICAgICAgIHByZWZldGNoPVwicmVuZGVyXCJcbiAgICAgID5cbiAgICAgICAgQ29udGludWUgUmVhZGluZ1xuICAgICAgICA8QmlSaWdodEFycm93QWx0IGNsYXNzTmFtZT1cIm1sLTFcIiAvPlxuICAgICAgPC9MaW5rPlxuICAgIDwvZGl2PlxuICApXG59XG4iLCAiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgbW9tZW50IGZyb20gJ21vbWVudCdcblxuY29uc3QgRGF0ZTogUmVhY3QuRkM8eyBkYXRlOiBzdHJpbmcgfCBudW1iZXIgfCBEYXRlOyBjbGFzc05hbWU/OiBzdHJpbmcgfCB1bmRlZmluZWQgfT4gPSAoXG4gIHByb3BzLFxuKSA9PiB7XG4gIGNvbnN0IGRhdGUgPSBwcm9wcy5kYXRlXG4gIHJldHVybiBkYXRlID8gKFxuICAgIDxwIHsuLi5wcm9wc30gY2xhc3NOYW1lPXtwcm9wcy5jbGFzc05hbWV9PlxuICAgICAge21vbWVudChkYXRlKS5mb3JtYXQoJ2RkZGQsIE1NTU0gRG8gWVlZWScpfVxuICAgIDwvcD5cbiAgKSA6IG51bGxcbn1cblxuZXhwb3J0IGRlZmF1bHQgRGF0ZVxuIiwgImltcG9ydCB7IExpbmsgfSBmcm9tICdyZW1peCdcbmltcG9ydCB7IEJzR2l0aHViIH0gZnJvbSAncmVhY3QtaWNvbnMvYnMnXG5pbXBvcnQgeyBTaVR3aXR0ZXIgfSBmcm9tICdyZWFjdC1pY29ucy9zaSdcbmltcG9ydCB7IElvTG9nb1JzcyB9IGZyb20gJ3JlYWN0LWljb25zL2lvJ1xuXG5pbXBvcnQgQ29udGFpbmVyIGZyb20gJy4vY29udGFpbmVyJ1xuaW1wb3J0IFNvY2lhbEljb24gZnJvbSAnLi9zb2NpYWwtaWNvbidcblxuY29uc3Qgc29jaWFscyA9IFtcbiAge1xuICAgIEljb246IEJzR2l0aHViLFxuICAgIGhyZWY6ICdodHRwczovL3JkLm51bGxpc2guaW4vZ2l0aHViJyxcbiAgICBpc0xhc3Q6IGZhbHNlLFxuICAgIGFsdDogYE11dGh1a3VtYXIncyBnaXRodWIgcHJvZmlsZSBsaW5rYCxcbiAgICBhcmlhTGFiZWw6ICdHaXRodWInLFxuICB9LFxuICB7XG4gICAgSWNvbjogU2lUd2l0dGVyLFxuICAgIGhyZWY6ICdodHRwczovL3JkLm51bGxpc2guaW4vdHdpdHRlcicsXG4gICAgaXNMYXN0OiBmYWxzZSxcbiAgICBhbHQ6IGBNdXRodWt1bWFyJ3MgdHdpdHRlciBwcm9maWxlIGxpbmtgLFxuICAgIGFyaWFMYWJlbDogJ1R3aXR0ZXInLFxuICB9LFxuICB7XG4gICAgSWNvbjogSW9Mb2dvUnNzLFxuICAgIGhyZWY6ICdodHRwczovL251bGxpc2guaW4vcnNzLnhtbCcsXG4gICAgaXNMYXN0OiB0cnVlLFxuICAgIGFsdDogYE51bGxpc2guaW4gcnNzIGZlZWQgbGlua2AsXG4gICAgYXJpYUxhYmVsOiAnUnNzIGZlZWQnLFxuICB9LFxuXVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBGb290ZXIoKSB7XG4gIHJldHVybiAoXG4gICAgPGZvb3RlciBjbGFzc05hbWU9XCJib3JkZXItdCBib3JkZXItY29sb3JcIj5cbiAgICAgIDxDb250YWluZXIgY2xhc3NOYW1lPVwicHktMTZcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlciBtZDppdGVtcy1zdGFydFwiPlxuICAgICAgICAgIDxMaW5rIHRvPVwiL1wiIGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyXCI+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LTJ4bCBmb250LWJvbGQgZm9udC1jb2xvclwiPk11dGh1a3VtYXI8L3A+XG4gICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgdy1mdWxsIG10LTYgbWQ6anVzdGlmeS1iZXR3ZWVuIG1kOmZsZXgtcm93XCI+XG4gICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwibWItNCB0ZXh0LXNtIG1kOm1iLTAgbGlnaHQtZm9udC1jb2xvclwiPlxuICAgICAgICAgICAgICBDb3B5cmlnaHQgJmNvcHk7IDIwMjEgTXV0aHVrdW1hci4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAgICAgICAgICAgIDwvaDI+XG4gICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgICAgICAge3NvY2lhbHMubWFwKChzb2NpYWwpID0+IChcbiAgICAgICAgICAgICAgICA8U29jaWFsSWNvbiB7Li4uc29jaWFsfSBrZXk9e3NvY2lhbC5ocmVmfSAvPlxuICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9Db250YWluZXI+XG4gICAgPC9mb290ZXI+XG4gIClcbn1cbiIsICJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBjbHN4IGZyb20gJ2Nsc3gnXG5cbmZ1bmN0aW9uIFNvY2lhbEljb24oe1xuICBJY29uLFxuICBocmVmLFxuICBpc0xhc3QsXG4gIGFyaWFMYWJlbCxcbn06IHtcbiAgSWNvbjogUmVhY3QuSlNYRWxlbWVudENvbnN0cnVjdG9yPHsgc2l6ZTogbnVtYmVyIH0+XG4gIGhyZWY6IHN0cmluZ1xuICBpc0xhc3Q6IGJvb2xlYW5cbiAgYXJpYUxhYmVsOiBzdHJpbmdcbn0pIHtcbiAgcmV0dXJuIChcbiAgICA8bGlcbiAgICAgIGNsYXNzTmFtZT17Y2xzeCgncHItNCcsIHtcbiAgICAgICAgJ21yLTAnOiBpc0xhc3QsXG4gICAgICAgICdtci00IGJvcmRlci1yIGJvcmRlci1jb2xvcic6ICFpc0xhc3QsXG4gICAgICB9KX1cbiAgICA+XG4gICAgICA8YSBocmVmPXtocmVmfSB0YXJnZXQ9XCJfYmxhbmtcIiByZWw9XCJub3JlZmVycmVyXCIgYXJpYS1sYWJlbD17YXJpYUxhYmVsfT5cbiAgICAgICAgPEljb24gc2l6ZT17MjB9IC8+XG4gICAgICA8L2E+XG4gICAgPC9saT5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBTb2NpYWxJY29uXG4iLCAiaW1wb3J0IHsgTGluayB9IGZyb20gJ3JlbWl4J1xuXG5pbXBvcnQgQ29udGFpbmVyIGZyb20gJy4vY29udGFpbmVyJ1xuXG5jb25zdCBsaW5rczogQXJyYXk8eyB0bzogc3RyaW5nOyBwYXRobmFtZTogc3RyaW5nIH0+ID0gW1xuICB7XG4gICAgdG86ICcvYmxvZycsXG4gICAgcGF0aG5hbWU6ICdCbG9nJyxcbiAgfSxcbl1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTmF2YmFyKCkge1xuICByZXR1cm4gKFxuICAgIDxoZWFkZXIgY2xhc3NOYW1lPVwic3RpY2t5IHRvcC0wIHotMTAgcHktNCBmb250LXNlbWlib2xkIGJvcmRlci1iIG5hdmJhci1iYWNrZHJvcC1maWx0ZXIgYm9yZGVyLWNvbG9yIHRyYW5zcGFyZW50LWJnXCI+XG4gICAgICA8Q29udGFpbmVyPlxuICAgICAgICA8bmF2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtYmFzZWxpbmVcIj5cbiAgICAgICAgICA8TGluayB0bz1cIi9cIiBjbGFzc05hbWU9XCJtci04XCI+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LTJ4bCBmb250LWJvbGQgZm9udC1jb2xvclwiPk11dGh1a3VtYXI8L3A+XG4gICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgIHtsaW5rcy5tYXAoKGxpbmspID0+IChcbiAgICAgICAgICAgIDxMaW5rIHRvPXtsaW5rLnRvfSBrZXk9e2xpbmsudG99IGNsYXNzTmFtZT1cIm1yLTYgbGlnaHQtZm9udC1jb2xvclwiPlxuICAgICAgICAgICAgICB7bGluay5wYXRobmFtZX1cbiAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC9uYXY+XG4gICAgICA8L0NvbnRhaW5lcj5cbiAgICA8L2hlYWRlcj5cbiAgKVxufVxuIiwgImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IGNsc3ggZnJvbSAnY2xzeCdcblxuaW1wb3J0IHsgQ29udGFpbmVyIH0gZnJvbSAnLidcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTWFya2Rvd24oe1xuICBjaGlsZHJlbixcbiAgY2xhc3NOYW1lLFxufToge1xuICBjaGlsZHJlbjogUmVhY3QuUmVhY3ROb2RlXG4gIGNsYXNzTmFtZT86IHN0cmluZyB8IHVuZGVmaW5lZFxufSkge1xuICByZXR1cm4gKFxuICAgIDxDb250YWluZXIgY2xhc3NOYW1lPXtjbHN4KCdtYXgtdy0zeGwnLCBjbGFzc05hbWUpfT5cbiAgICAgIDxhcnRpY2xlIGNsYXNzTmFtZT1cInB5LTIgcHJvc2UgbWQ6cHktNiBtZDpwcm9zZS1sZyBtYXgtdy1ub25lIHByb3NlLWJsdWUgZGFyazpwcm9zZS1pbnZlcnRcIj5cbiAgICAgICAge2NoaWxkcmVufVxuICAgICAgPC9hcnRpY2xlPlxuICAgIDwvQ29udGFpbmVyPlxuICApXG59XG4iLCAiaW1wb3J0IHsgY3JlYXRlQ29va2llU2Vzc2lvblN0b3JhZ2UgfSBmcm9tICdyZW1peCdcblxuZXhwb3J0IGNvbnN0IHsgY29tbWl0U2Vzc2lvbiwgZ2V0U2Vzc2lvbiwgZGVzdHJveVNlc3Npb24gfSA9IGNyZWF0ZUNvb2tpZVNlc3Npb25TdG9yYWdlKHtcbiAgY29va2llOiB7XG4gICAgbmFtZTogJ19zZXNzaW9uJyxcbiAgICBzYW1lU2l0ZTogJ2xheCcsXG4gICAgZG9tYWluOiAnLycsXG4gICAgaHR0cE9ubHk6IHRydWUsXG4gICAgc2VjcmV0czogWydzM2NyM3QnXSxcbiAgICBzZWN1cmU6IHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicsXG4gIH0sXG59KVxuIiwgImV4cG9ydCBjb25zdCBHQV9UUkFDS0lOR19JRCA9ICdHLVFOTU0yR1NEWUonXG5cbmRlY2xhcmUgZ2xvYmFsIHtcbiAgaW50ZXJmYWNlIFdpbmRvdyB7XG4gICAgZ3RhZzogKG9wdGlvbjogc3RyaW5nLCBnYVRyYWNraW5nSWQ6IHN0cmluZywgb3B0aW9uczogUmVjb3JkPHN0cmluZywgdW5rbm93bj4pID0+IHZvaWRcbiAgfVxufVxuXG5leHBvcnQgY29uc3QgcGFnZXZpZXcgPSAodXJsOiBzdHJpbmcpID0+IHtcbiAgd2luZG93Lmd0YWcoJ2NvbmZpZycsIEdBX1RSQUNLSU5HX0lELCB7XG4gICAgcGFnZV9wYXRoOiB1cmwsXG4gIH0pXG59XG5cbmV4cG9ydCBjb25zdCBldmVudCA9ICh7IGFjdGlvbiwgY2F0ZWdvcnksIGxhYmVsLCB2YWx1ZSB9OiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+KSA9PiB7XG4gIHdpbmRvdy5ndGFnKCdldmVudCcsIGFjdGlvbiwge1xuICAgIGV2ZW50X2NhdGVnb3J5OiBjYXRlZ29yeSxcbiAgICBldmVudF9sYWJlbDogbGFiZWwsXG4gICAgdmFsdWU6IHZhbHVlLFxuICB9KVxufVxuIiwgImltcG9ydCB7IExvYWRlckZ1bmN0aW9uIH0gZnJvbSAncmVtaXgnXG5cbmNvbnN0IHNpdGVNYXBUZXh0ID0gYFxuPD94bWwgdmVyc2lvbj1cIjEuMFwiIGVuY29kaW5nPVwiVVRGLThcIj8+XG48dXJsc2V0IHhtbG5zPVwiaHR0cDovL3d3dy5zaXRlbWFwcy5vcmcvc2NoZW1hcy9zaXRlbWFwLzAuOVwiPlxuICA8dXJsPlxuICAgIDxsb2M+aHR0cHM6Ly93d3cubnVsbGlzaC5pbi9jaGFuZ2Vsb2c8L2xvYz5cbiAgICA8bGFzdG1vZD4yMDIxLTEyLTIxPC9sYXN0bW9kPlxuICA8L3VybD5cbjwvdXJsc2V0PlxuYC50cmltKClcblxuZXhwb3J0IGNvbnN0IGxvYWRlcjogTG9hZGVyRnVuY3Rpb24gPSAoKSA9PiB7XG4gIHJldHVybiBuZXcgUmVzcG9uc2Uoc2l0ZU1hcFRleHQsIHtcbiAgICBoZWFkZXJzOiB7XG4gICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL3htbCcsXG4gICAgfSxcbiAgfSlcbn1cbiIsICJpbXBvcnQgeyBBY3Rpb25GdW5jdGlvbiB9IGZyb20gJ3JlbWl4J1xuaW1wb3J0IHsgZGVzdHJveVNlc3Npb24sIGdldFNlc3Npb24gfSBmcm9tICd+L3V0aWxzL3Nlc3Npb24uc2VydmVyJ1xuXG5leHBvcnQgY29uc3QgYWN0aW9uOiBBY3Rpb25GdW5jdGlvbiA9IGFzeW5jICh7IHJlcXVlc3QgfSkgPT4ge1xuICBjb25zdCBzZXNzaW9uID0gYXdhaXQgZ2V0U2Vzc2lvbihyZXF1ZXN0LmhlYWRlcnMuZ2V0KCdDb29raWUnKSlcblxuICByZXR1cm4gbmV3IFJlc3BvbnNlKCcnLCB7XG4gICAgaGVhZGVyczoge1xuICAgICAgJ1NldC1Db29raWUnOiBhd2FpdCBkZXN0cm95U2Vzc2lvbihzZXNzaW9uKSxcbiAgICB9LFxuICB9KVxufVxuIiwgImltcG9ydCB7IE91dGxldCB9IGZyb20gJ3JlbWl4J1xuXG5pbXBvcnQgeyBDb250YWluZXIsIE1hcmtkb3duIH0gZnJvbSAnfi9jb21wb25lbnRzJ1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDaGFuZ2Vsb2coKSB7XG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGItNiBib3JkZXItYiBib3JkZXItY29sb3JcIj5cbiAgICAgICAgPENvbnRhaW5lcj5cbiAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwicHktNCB0ZXh0LXhsIGZvbnQtYm9sZCBtZDpweS0xMCBtZDp0ZXh0LTJ4bFwiPkNoYW5nZWxvZzwvaDI+XG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1iYXNlIGZvbnQtYm9sZCBtZDp0ZXh0LWxnXCI+XG4gICAgICAgICAgICBBbGwgbm90YWJsZSBjaGFuZ2VzIHRvIHRoaXMgcHJvamVjdCB3aWxsIGJlIGRvY3VtZW50ZWQgaW4gdGhpcyBmaWxlLlxuICAgICAgICAgIDwvcD5cbiAgICAgICAgPC9Db250YWluZXI+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxNYXJrZG93biBjbGFzc05hbWU9XCJzbTptYXgtdy01eGxcIj5cbiAgICAgICAgPE91dGxldCAvPlxuICAgICAgPC9NYXJrZG93bj5cbiAgICA8L2Rpdj5cbiAgKVxufVxuIiwgIlxuLypAanN4UnVudGltZSBjbGFzc2ljIEBqc3ggUmVhY3QuY3JlYXRlRWxlbWVudCBAanN4RnJhZyBSZWFjdC5GcmFnbWVudCovXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5leHBvcnQgY29uc3QgYXR0cmlidXRlcyA9IHtcbiAgXCJtZXRhXCI6IHtcbiAgICBcInRpdGxlXCI6IFwiQ2hhbmdlbG9nIHwgTnVsbGlzaC5pblwiLFxuICAgIFwiZGVzY3JpcHRpb25cIjogXCJJbiB0aGlzIHBhZ2UsIEkgbWFpbnRhaW4gdGhlIGNoYW5nZSBsb2cgb2YgdGhlIHdlYnNpdGUgdG8ga2VlcCB0cmFjayBvZiB0aGUgcHJvZ3Jlc3MgYW5kIGZvciBvdGhlcnMgdG8gc2VlIHRoZSBwcm9ncmVzcyBvZiBteSBzaXRlXCJcbiAgfSxcbiAgXCJoZWFkZXJzXCI6IHtcbiAgICBcIkNhY2hlLUNvbnRyb2xcIjogXCJtYXgtYWdlPTg2NDAwMDAwLCBtdXN0LXJldmFsaWRhdGVcIlxuICB9XG59O1xuaW1wb3J0IHtEYXRlfSBmcm9tICd+L2NvbXBvbmVudHMnO1xuZnVuY3Rpb24gTURYQ29udGVudChwcm9wcyA9IHt9KSB7XG4gIGNvbnN0IF9jb21wb25lbnRzID0gT2JqZWN0LmFzc2lnbih7XG4gICAgaDM6IFwiaDNcIixcbiAgICBoNDogXCJoNFwiLFxuICAgIHVsOiBcInVsXCIsXG4gICAgbGk6IFwibGlcIixcbiAgICBocjogXCJoclwiLFxuICAgIGNvZGU6IFwiY29kZVwiLFxuICAgIHA6IFwicFwiLFxuICAgIHByZTogXCJwcmVcIlxuICB9LCBwcm9wcy5jb21wb25lbnRzKSwge3dyYXBwZXI6IE1EWExheW91dH0gPSBfY29tcG9uZW50cztcbiAgY29uc3QgX2NvbnRlbnQgPSA8PjxfY29tcG9uZW50cy5oMz48RGF0ZSBkYXRlPVwiMjAyMS0xMi0yMlwiIGNsYXNzTmFtZT1cInRleHQtbWQgbWQ6dGV4dC14bFwiIC8+PC9fY29tcG9uZW50cy5oMz57XCJcXG5cIn08X2NvbXBvbmVudHMuaDQ+e1wiQWRkZWRcIn08L19jb21wb25lbnRzLmg0PntcIlxcblwifTxfY29tcG9uZW50cy51bD57XCJcXG5cIn08X2NvbXBvbmVudHMubGk+e1wiTWFkZSB0aGUgbmF2YmFyIGFsbW9zdCB0cmFuc3BhcmVudC5cIn08L19jb21wb25lbnRzLmxpPntcIlxcblwifTwvX2NvbXBvbmVudHMudWw+e1wiXFxuXCJ9PF9jb21wb25lbnRzLmg0PntcIkNoYW5nZWRcIn08L19jb21wb25lbnRzLmg0PntcIlxcblwifTxfY29tcG9uZW50cy51bD57XCJcXG5cIn08X2NvbXBvbmVudHMubGk+e1wiRml4ZWQgdGhlIGdvb2dsZSBhbmFseXRpY3MuIEJlZm9yZSBhbmFseXRpY3Mgc3R1ZmYgbm90IHdvcmtpbmcgZm9yIHNvbWUgcmVhc29uLiBTbyBJIGNvcGllZCB0aGUgZ2EgdGVtcGxhdGUgZnJvbSBOZXh0anMgOilcIn08L19jb21wb25lbnRzLmxpPntcIlxcblwifTwvX2NvbXBvbmVudHMudWw+e1wiXFxuXCJ9PF9jb21wb25lbnRzLmg0PntcIlJlbW92ZWRcIn08L19jb21wb25lbnRzLmg0PntcIlxcblwifTxfY29tcG9uZW50cy51bD57XCJcXG5cIn08X2NvbXBvbmVudHMubGk+e1wiVW5pbnN0YWxsZWQgUmVhY3QtZ2FcIn08L19jb21wb25lbnRzLmxpPntcIlxcblwifTwvX2NvbXBvbmVudHMudWw+e1wiXFxuXCJ9PF9jb21wb25lbnRzLmhyIC8+e1wiXFxuXCJ9PF9jb21wb25lbnRzLmgzPjxEYXRlIGRhdGU9XCIyMDIxLTEyLTIxXCIgY2xhc3NOYW1lPVwidGV4dC1tZCBtZDp0ZXh0LXhsXCIgLz48L19jb21wb25lbnRzLmgzPntcIlxcblwifTxfY29tcG9uZW50cy5oND57XCJBZGRlZFwifTwvX2NvbXBvbmVudHMuaDQ+e1wiXFxuXCJ9PF9jb21wb25lbnRzLnVsPntcIlxcblwifTxfY29tcG9uZW50cy5saT57XCJBZGRlZCBpbml0aWFsIHZlcnNpb24gb2YgdGhlIGluZGV4IHBhZ2UuIEJlZm9yZSBpbiBpbmRleCByb3V0ZSwgdGhlIHRyYWZmaWMgaXMgcmVkaXJlY3RlZCB0byB0aGUgL2Jsb2cgcGFnZS5cIn08L19jb21wb25lbnRzLmxpPntcIlxcblwifTxfY29tcG9uZW50cy5saT57XCJBZGRlZCByb2JvdHMudHh0IGZvciB0aGUgU0VPIHN0dWZmLlwifTwvX2NvbXBvbmVudHMubGk+e1wiXFxuXCJ9PF9jb21wb25lbnRzLmxpPntcIkNyZWF0ZWQgY3VzdG9tIE1hcmtkb3duIGNvbXBvbmVudCB0byByZW5kZXIgdGhlIG1hcmtkb3duLlwifTwvX2NvbXBvbmVudHMubGk+e1wiXFxuXCJ9PF9jb21wb25lbnRzLmxpPntcIkNyZWF0ZWQgQ2hhbmdlIGxvZyBmaWxlIHRvIGtlZXAgdHJhY2sgb2YgdGhlIHByb2dyZXNzLlwifTwvX2NvbXBvbmVudHMubGk+e1wiXFxuXCJ9PF9jb21wb25lbnRzLmxpPntcIkFkZGVkIFwifTxfY29tcG9uZW50cy5jb2RlPntcInNpdGVtYXAueG1sXCJ9PC9fY29tcG9uZW50cy5jb2RlPntcIiBmaWxlXCJ9PC9fY29tcG9uZW50cy5saT57XCJcXG5cIn08X2NvbXBvbmVudHMubGk+e1wiQWRkZWQgXCJ9PF9jb21wb25lbnRzLmNvZGU+e1wic2l0ZW1hcC54bWxcIn08L19jb21wb25lbnRzLmNvZGU+e1wiIHRvIHRoZSByb2JvdHMgZmlsZVwifTwvX2NvbXBvbmVudHMubGk+e1wiXFxuXCJ9PF9jb21wb25lbnRzLmxpPntcIkFkZGRlZCBcIn08X2NvbXBvbmVudHMuY29kZT57XCJhcmlhLWxhYmVsXCJ9PC9fY29tcG9uZW50cy5jb2RlPntcIiBmb3IgdGhlIGdpdGh1YiBpY29uIGluIHRoZSBmb290ZXJcIn08L19jb21wb25lbnRzLmxpPntcIlxcblwifTxfY29tcG9uZW50cy5saT57XCJBZGRkZWQgXCJ9PF9jb21wb25lbnRzLmNvZGU+e1wiYXJpYS1sYWJlbFwifTwvX2NvbXBvbmVudHMuY29kZT57XCIgZm9yIHRoZSB0d2l0dGVyIGljb24gaW4gdGhlIGZvb3RlclwifTwvX2NvbXBvbmVudHMubGk+e1wiXFxuXCJ9PF9jb21wb25lbnRzLmxpPntcIkFkZGRlZCBcIn08X2NvbXBvbmVudHMuY29kZT57XCJhcmlhLWxhYmVsXCJ9PC9fY29tcG9uZW50cy5jb2RlPntcIiBmb3IgdGhlIHJzcyBmZWVkIGljb24gaW4gdGhlIGZvb3RlclwifTwvX2NvbXBvbmVudHMubGk+e1wiXFxuXCJ9PF9jb21wb25lbnRzLmxpPntcIkFkZGVkIGdvb2dsZSBhbmFseXRpY3NcIn08L19jb21wb25lbnRzLmxpPntcIlxcblwifTwvX2NvbXBvbmVudHMudWw+e1wiXFxuXCJ9PF9jb21wb25lbnRzLmg0PntcIkNoYW5nZWRcIn08L19jb21wb25lbnRzLmg0PntcIlxcblwifTxfY29tcG9uZW50cy51bD57XCJcXG5cIn08X2NvbXBvbmVudHMubGk+e1wiXFxuXCJ9PF9jb21wb25lbnRzLnA+e1wiUmVuYW1lZCB0aGUgdGl0bGUgZnJvbSAnQ2hhbmdlbG9nIHwgTXV0aHVrdW1hcicgLT4gJ0NoYW5nZWxvZyB8IE51bGxpc2guaW4nLiBJdCBkb2Vzbid0IG1ha2Ugc2Vuc2UgdG8gaGF2ZSBNdXRodWt1bWFyIHRvIHRoZSBjaGFuZ2Vsb2cuXCJ9PC9fY29tcG9uZW50cy5wPntcIlxcblwifTwvX2NvbXBvbmVudHMubGk+e1wiXFxuXCJ9PF9jb21wb25lbnRzLmxpPntcIlxcblwifTxfY29tcG9uZW50cy5wPntcIkluIGluZGV4IHJvdXRlLCBjaGFuZ2VkIHRoZSB0aXRsZSgnQmxvZyB8IE11dGh1a3VtYXInID0+ICdNdXRodWt1bWFyJykuXCJ9PC9fY29tcG9uZW50cy5wPntcIlxcblwifTwvX2NvbXBvbmVudHMubGk+e1wiXFxuXCJ9PF9jb21wb25lbnRzLmxpPntcIlxcblwifTxfY29tcG9uZW50cy5wPntcIlVwZGF0ZSByb2JvdHMudHh0IGNvbnRlbnRcIn08L19jb21wb25lbnRzLnA+e1wiXFxuXCJ9PF9jb21wb25lbnRzLnByZT48X2NvbXBvbmVudHMuY29kZSBjbGFzc05hbWU9XCJsYW5ndWFnZS10eHRcIj57XCJVc2VyLWFnZW50OiAqXFxuQWxsb3c6IC9cXG5cIn08L19jb21wb25lbnRzLmNvZGU+PC9fY29tcG9uZW50cy5wcmU+e1wiXFxuXCJ9PC9fY29tcG9uZW50cy5saT57XCJcXG5cIn08X2NvbXBvbmVudHMubGk+e1wiXFxuXCJ9PF9jb21wb25lbnRzLnA+e1wiTW92ZWQgdGhlIFwifTxfY29tcG9uZW50cy5jb2RlPntcInJvYm90cy50eHRcIn08L19jb21wb25lbnRzLmNvZGU+e1wiIGZpbGUgZnJvbSByZXNvdXJjZSByb3V0ZXMgdG8gcHVibGljIGZvbGRlci5cIn08L19jb21wb25lbnRzLnA+e1wiXFxuXCJ9PF9jb21wb25lbnRzLnByZT48X2NvbXBvbmVudHMuY29kZSBjbGFzc05hbWU9XCJsYW5ndWFnZS10eHRcIj57XCJVc2VyLWFnZW50OiAqXFxuQWxsb3c6IC9cXG5cXG5TaXRlbWFwOiBodHRwczovL251bGxpc2guaW4vc2l0ZW1hcC54bWxcXG5cIn08L19jb21wb25lbnRzLmNvZGU+PC9fY29tcG9uZW50cy5wcmU+e1wiXFxuXCJ9PC9fY29tcG9uZW50cy5saT57XCJcXG5cIn08X2NvbXBvbmVudHMubGk+e1wiXFxuXCJ9PF9jb21wb25lbnRzLnA+e1wiQ2hhbmdlZCBcIn08X2NvbXBvbmVudHMuY29kZT57XCJSZWFkIG1vcmVcIn08L19jb21wb25lbnRzLmNvZGU+e1wiIGluIHRoZSBibG9nIHRvIFwifTxfY29tcG9uZW50cy5jb2RlPntcIkNvbnRpbnVlIHJlYWRpbmdcIn08L19jb21wb25lbnRzLmNvZGU+e1wiLiBSZWFkIG1vcmUgc2VlbXMgdmFndWUgYW5kIGdlbmVyaWMuIENvbnRpbnVlIFJlYWRpbmcgc2VlbXMgb2theSB0aGFuIFJlYWQgbW9yZS5cIn08L19jb21wb25lbnRzLnA+e1wiXFxuXCJ9PC9fY29tcG9uZW50cy5saT57XCJcXG5cIn08X2NvbXBvbmVudHMubGk+e1wiXFxuXCJ9PF9jb21wb25lbnRzLnA+e1wiVXBncmFkZWQgdG8gcmVtaXggRk9STSBmb3IgdGhlIGJsb2cgcG9zdCBzZWFyY2hcIn08L19jb21wb25lbnRzLnA+e1wiXFxuXCJ9PC9fY29tcG9uZW50cy5saT57XCJcXG5cIn08L19jb21wb25lbnRzLnVsPntcIlxcblwifTxfY29tcG9uZW50cy5oND57XCJSZW1vdmVkXCJ9PC9fY29tcG9uZW50cy5oND57XCJcXG5cIn08X2NvbXBvbmVudHMudWw+e1wiXFxuXCJ9PF9jb21wb25lbnRzLmxpPntcIlJlbW92ZWQgZHVwbGljYXRlIHZpZXdwb3J0IHRhZy5cIn08L19jb21wb25lbnRzLmxpPntcIlxcblwifTxfY29tcG9uZW50cy5saT57XCJSZW1vdmVkIHJvYm90cyBoZWFkZXIgZnJvbSB0aGUgbWV0YS4gQWxsIHRoZSByb2JvdHMgc3R1ZmYgYXJlIG1vdmVkIHRvIHRoZSByb2JvdHMudHh0IGZpbGUvcm91dGUuXCJ9PC9fY29tcG9uZW50cy5saT57XCJcXG5cIn08L19jb21wb25lbnRzLnVsPntcIlxcblwifTxfY29tcG9uZW50cy5wcmU+PF9jb21wb25lbnRzLmNvZGUgLz48L19jb21wb25lbnRzLnByZT48Lz47XG4gIHJldHVybiBNRFhMYXlvdXQgPyA8TURYTGF5b3V0IHsuLi5wcm9wc30+e19jb250ZW50fTwvTURYTGF5b3V0PiA6IF9jb250ZW50O1xufVxuZXhwb3J0IGRlZmF1bHQgTURYQ29udGVudDtcblxuXG5leHBvcnQgY29uc3QgZmlsZW5hbWUgPSBcImNoYW5nZWxvZy5tZHhcIjtcbmV4cG9ydCBjb25zdCBoZWFkZXJzID0gdHlwZW9mIGF0dHJpYnV0ZXMgIT09IFwidW5kZWZpbmVkXCIgJiYgYXR0cmlidXRlcy5oZWFkZXJzO1xuZXhwb3J0IGNvbnN0IG1ldGEgPSB0eXBlb2YgYXR0cmlidXRlcyAhPT0gXCJ1bmRlZmluZWRcIiAmJiBhdHRyaWJ1dGVzLm1ldGE7XG5leHBvcnQgY29uc3QgbGlua3MgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgIiwgImltcG9ydCB7IGpzb24sIExvYWRlckZ1bmN0aW9uLCBNZXRhRnVuY3Rpb24sIHVzZUNhdGNoLCB1c2VMb2FkZXJEYXRhIH0gZnJvbSAncmVtaXgnXG5cbmltcG9ydCB7IE1hcmtkb3duLCBHb0JhY2ssIEZvdXIwMCwgRGF0ZSwgQ29udGFpbmVyIH0gZnJvbSAnfi9jb21wb25lbnRzJ1xuaW1wb3J0IHsgZ2V0UG9zdCB9IGZyb20gJ34vdXRpbHMvY21zLnNlcnZlcidcblxuZXhwb3J0IGNvbnN0IG1ldGE6IE1ldGFGdW5jdGlvbiA9ICh7IGRhdGEgfSkgPT4ge1xuICByZXR1cm4ge1xuICAgIHRpdGxlOiBkYXRhICYmIGRhdGEudGl0bGUgPyBgJHtkYXRhPy50aXRsZX0gLSBNdXRodWt1bWFyYCA6ICdQYWdlIE5vdCBGb3VuZCB8IE11dGh1a3VtYXInLFxuICAgIGRlc2NyaXB0aW9uOiBkYXRhPy5leGNlcnB0LFxuICAgICdvZzp1cmwnOiBkYXRhPy51cmwsXG4gICAgJ29nOnR5cGUnOiAnYXJ0aWNsZScsXG4gICAgJ29nOnRpdGxlJzogZGF0YT8udGl0bGUsXG4gICAgJ29nOmRlc2NyaXB0aW9uJzogZGF0YT8uZXhjZXJwdCxcbiAgICAnb2c6aW1hZ2UnOiBkYXRhPy5vZ0ltYWdlLFxuICB9XG59XG5cbmV4cG9ydCBjb25zdCBsb2FkZXI6IExvYWRlckZ1bmN0aW9uID0gYXN5bmMgKHsgcmVxdWVzdCwgcGFyYW1zIH0pID0+IHtcbiAgY29uc3QgdXJsID0gbmV3IFVSTChyZXF1ZXN0LnVybClcblxuICBjb25zdCBzbHVnID0gcGFyYW1zLnNsdWcgPz8gJydcblxuICBjb25zdCBwb3N0RGF0YSA9IGF3YWl0IGdldFBvc3Qoc2x1ZylcblxuICBpZiAoIXBvc3REYXRhKSB7XG4gICAgdGhyb3cganNvbih7IG1lc3NhZ2U6IGBPaCBubywgdGhlIGJsb2cgeW91IGxvb2tpbmcgZm9yIGRvZXNuJ3QgZXhpc3RzLmAgfSwgeyBzdGF0dXM6IDQwNCB9KVxuICB9XG5cbiAgcmV0dXJuIGpzb24oXG4gICAge1xuICAgICAgdXJsLFxuICAgICAgaHRtbDogcG9zdERhdGEuY29udGVudC5odG1sLFxuICAgICAgdGl0bGU6IHBvc3REYXRhLnRpdGxlLFxuICAgICAgb2dJbWFnZTogcG9zdERhdGEuY292ZXJJbWFnZS51cmwsXG4gICAgICBkYXRlOiBwb3N0RGF0YS5wdWJsaXNoZWRBdCxcbiAgICAgIGRlc2NyaXB0aW9uOiBwb3N0RGF0YS5leGNlcnB0LFxuICAgIH0sXG4gICAge1xuICAgICAgaGVhZGVyczoge1xuICAgICAgICAnQ2FjaGUtQ29udHJvbCc6ICdtYXgtYWdlPTEwMCwgbXVzdC1yZXZhbGlkYXRlJyxcbiAgICAgIH0sXG4gICAgfSxcbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBCbG9nU2x1ZygpIHtcbiAgY29uc3QgeyBodG1sLCB0aXRsZSwgZGF0ZSB9ID0gdXNlTG9hZGVyRGF0YSgpXG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJwdC00IHBiLTQgYm9yZGVyLWIgYm9yZGVyLWNvbG9yIG1kOnBiLTEwXCI+XG4gICAgICAgIDxDb250YWluZXIgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgdGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICA8R29CYWNrIGxpbms9XCIvYmxvZ1wiIC8+XG4gICAgICAgICAgPGgxIGNsYXNzTmFtZT1cIm10LTQgbWItNCB0ZXh0LTJ4bCBmb250LWJvbGQgbWQ6bXQtNiBtZDp0ZXh0LTN4bFwiPnt0aXRsZX08L2gxPlxuICAgICAgICAgIDxEYXRlIGRhdGU9e2RhdGV9IGNsYXNzTmFtZT1cInRleHQtc20gbGlnaHQtZm9udC1jb2xvciBtZDp0ZXh0LWJhc2VcIiAvPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgcC0xIG10LTQgbWQ6bXQtOFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LTggaC04IG92ZXJmbG93LWhpZGRlbiByb3VuZGVkLWZ1bGxcIj5cbiAgICAgICAgICAgICAgPGltZyBzcmM9XCIvaW1hZ2VzL3Byb2ZpbGUuanBnXCIgY2xhc3NOYW1lPVwib2JqZWN0LWNvdmVyIHctZnVsbCBoLWZ1bGwgcm91bmRlZC1mdWxsXCIgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLTEgdGV4dC14cyB0ZXh0LWxlZnRcIj5cbiAgICAgICAgICAgICAgPGgyPk11dGh1a3VtYXI8L2gyPlxuICAgICAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly9yZC5udWxsaXNoLmluL3R3aXR0ZXJcIiBjbGFzc05hbWU9XCJ0ZXh0LWJsdWUtNjAwXCI+XG4gICAgICAgICAgICAgICAgQGFtX211dGh1a3VtYXJcbiAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvQ29udGFpbmVyPlxuICAgICAgPC9kaXY+XG4gICAgICA8TWFya2Rvd24gY2xhc3NOYW1lPVwibWF4LXctNXhsXCI+XG4gICAgICAgIDxkaXYgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3sgX19odG1sOiBodG1sIH19IC8+XG4gICAgICA8L01hcmtkb3duPlxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBDYXRjaEJvdW5kYXJ5KCkge1xuICBjb25zdCBjYXVnaHQgPSB1c2VDYXRjaCgpXG5cbiAgY29uc3QgbWVzc2FnZSA9IGNhdWdodC5zdGF0dXMgPT09IDQwNCA/IGNhdWdodC5kYXRhLm1lc3NhZ2UgOiAnT29wc2llcy4uIFNvbWV0aGluZyB3ZW50IHdyb25nLidcblxuICBpZiAoY2F1Z2h0LnN0YXR1cyA9PT0gNDA0KSB7XG4gICAgcmV0dXJuIDxGb3VyMDAgdGl0bGU9XCI0MDRcIiBtZXNzYWdlPXttZXNzYWdlfSBsaW5rPVwiL2Jsb2dcIiAvPlxuICB9XG5cbiAgcmV0dXJuIDxGb3VyMDAgdGl0bGU9XCI1MDBcIiBtZXNzYWdlPXttZXNzYWdlfSBsaW5rPVwiL2Jsb2dcIiAvPlxufVxuXG5leHBvcnQgZnVuY3Rpb24gRXJyb3JCb3VuZGFyeSgpIHtcbiAgcmV0dXJuIDxGb3VyMDAgdGl0bGU9XCI1MDBcIiBtZXNzYWdlPVwiT29wc2llcy4uLiBTb21ldGhpbmcgd2VudCB3cm9uZy5cIiBsaW5rPVwiL2Jsb2dcIiAvPlxufVxuIiwgImltcG9ydCB7IGdxbCB9IGZyb20gJ2dyYXBocWwtcmVxdWVzdCdcbmltcG9ydCB7IGdxQ2xpZW50IH0gZnJvbSAnLi9ncmFwaHFsLnNlcnZlcidcblxuZXhwb3J0IHR5cGUgUG9zdCA9IHtcbiAgdGl0bGU6IHN0cmluZ1xuICBleGNlcnB0OiBzdHJpbmdcbiAgaWQ6IHN0cmluZ1xuICBzbHVnOiBzdHJpbmdcbiAgYXV0aG9yOiBzdHJpbmdcbiAgY292ZXJJbWFnZToge1xuICAgIHVybDogc3RyaW5nXG4gIH1cbiAgY2F0ZWdvcmllczogc3RyaW5nW11cbiAgcHVibGlzaGVkQXQ6IHN0cmluZ1xuICBjb250ZW50OiB7XG4gICAgaHRtbDogc3RyaW5nXG4gIH1cbiAgaGl0czogbnVtYmVyXG4gIGlzRHJhZnQ6IGJvb2xlYW5cbiAgdXNlckVtYWlsOiBzdHJpbmdcbn1cblxuY29uc3QgUG9zdHNRdWVyeSA9IGdxbGBcbiAgcXVlcnkgTXlRdWVyeSgkc2VhcmNoOiBTdHJpbmchKSB7XG4gICAgcG9zdHMod2hlcmU6IHsgX3NlYXJjaDogJHNlYXJjaCB9KSB7XG4gICAgICBpZFxuICAgICAgc2x1Z1xuICAgICAgdGl0bGVcbiAgICAgIHB1Ymxpc2hlZEF0XG4gICAgICBleGNlcnB0XG4gICAgfVxuICB9XG5gXG5cbmNvbnN0IFBvc3RRdWVyeSA9IGdxbGBcbiAgcXVlcnkgR2V0UG9zdEJ5U2x1Zygkc2x1ZzogU3RyaW5nISkge1xuICAgIHBvc3Qod2hlcmU6IHsgc2x1ZzogJHNsdWcgfSkge1xuICAgICAgdGl0bGVcbiAgICAgIGNvbnRlbnQge1xuICAgICAgICBodG1sXG4gICAgICB9XG4gICAgICBjb3ZlckltYWdlIHtcbiAgICAgICAgdXJsXG4gICAgICB9XG4gICAgICBleGNlcnB0XG4gICAgICBwdWJsaXNoZWRBdFxuICAgIH1cbiAgfVxuYFxuXG5leHBvcnQgY29uc3QgZ2V0UG9zdHMgPSBhc3luYyAocXVlcnk/OiBzdHJpbmcpID0+IHtcbiAgdHJ5IHtcbiAgICBjb25zdCBwb3N0cyA9IGF3YWl0IGdxQ2xpZW50LnJlcXVlc3QoUG9zdHNRdWVyeSwgeyBzZWFyY2g6IHF1ZXJ5ID8/ICcnIH0pXG5cbiAgICBpZiAoIXBvc3RzKSB7XG4gICAgICByZXR1cm4gW11cbiAgICB9XG4gICAgcmV0dXJuIHBvc3RzLnBvc3RzIGFzIEFycmF5PFBvc3Q+XG4gIH0gY2F0Y2gge1xuICAgIHJldHVybiBbXVxuICB9XG59XG5cbmV4cG9ydCBjb25zdCBnZXRQb3N0ID0gYXN5bmMgKHNsdWc6IFBvc3RbJ3NsdWcnXSkgPT4ge1xuICB0cnkge1xuICAgIGNvbnN0IHBvc3QgPSBhd2FpdCBncUNsaWVudC5yZXF1ZXN0KFBvc3RRdWVyeSwgeyBzbHVnIH0pXG4gICAgaWYgKCFwb3N0KSB7XG4gICAgICByZXR1cm4gbnVsbFxuICAgIH1cbiAgICByZXR1cm4gcG9zdC5wb3N0IGFzIFBvc3RcbiAgfSBjYXRjaCB7XG4gICAgcmV0dXJuIG51bGxcbiAgfVxufVxuIiwgImltcG9ydCB7IEdyYXBoUUxDbGllbnQgfSBmcm9tICdncmFwaHFsLXJlcXVlc3QnXG5pbXBvcnQgeyBnZXRSZXF1aXJlZFNlcnZlckVudlZhciB9IGZyb20gJy4vZW52LnNlcnZlcidcblxuY29uc3QgZW5kcG9pbnQgPSBnZXRSZXF1aXJlZFNlcnZlckVudlZhcignR1JBUEhRTF9FTkRQT0lOVCcpXG5cbmNvbnN0IGF1dGhvcml6YXRpb25Ub2tlbiA9IGdldFJlcXVpcmVkU2VydmVyRW52VmFyKCdHUkFQSFFMX0FDQ0VTU19UT0tFTicpXG5cbmNvbnN0IGdxQ2xpZW50ID0gbmV3IEdyYXBoUUxDbGllbnQoZW5kcG9pbnQsIHtcbiAgaGVhZGVyczoge1xuICAgIEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHthdXRob3JpemF0aW9uVG9rZW59YCxcbiAgfSxcbn0pXG5cbmV4cG9ydCB7IGdxQ2xpZW50IH1cbiIsICJjb25zdCBnZXRSZXF1aXJlZFNlcnZlckVudlZhciA9IChrZXk6IHN0cmluZykgPT4ge1xuICBjb25zdCB2YWx1ZSA9IHByb2Nlc3MuZW52W2tleV1cblxuICBpZiAoIXZhbHVlKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKGAke2tleX0gaXMgcmVxdWlyZWQgRU5WIHZhcmlhYmxlYClcbiAgfVxuXG4gIHJldHVybiB2YWx1ZVxufVxuXG5leHBvcnQgeyBnZXRSZXF1aXJlZFNlcnZlckVudlZhciB9XG4iLCAiaW1wb3J0IHR5cGUgeyBMb2FkZXJGdW5jdGlvbiB9IGZyb20gJ3JlbWl4J1xuXG5pbXBvcnQgeyBnZXRQb3N0cyB9IGZyb20gJ34vdXRpbHMvY21zLnNlcnZlcidcblxuZnVuY3Rpb24gZXNjYXBlQ2RhdGEoczogc3RyaW5nKSB7XG4gIHJldHVybiBzLnJlcGxhY2VBbGwoJ11dPicsICddXV1dPjwhW0NEQVRBWz4nKVxufVxuXG5mdW5jdGlvbiBlc2NhcGVIdG1sKHM6IHN0cmluZykge1xuICByZXR1cm4gc1xuICAgIC5yZXBsYWNlQWxsKCcmJywgJyZhbXA7JylcbiAgICAucmVwbGFjZUFsbCgnPCcsICcmbHQ7JylcbiAgICAucmVwbGFjZUFsbCgnPicsICcmZ3Q7JylcbiAgICAucmVwbGFjZUFsbCgnXCInLCAnJnF1b3Q7JylcbiAgICAucmVwbGFjZUFsbChcIidcIiwgJyYjMDM5OycpXG59XG5cbmV4cG9ydCBjb25zdCBsb2FkZXI6IExvYWRlckZ1bmN0aW9uID0gYXN5bmMgKHsgcmVxdWVzdCB9KSA9PiB7XG4gIGNvbnN0IGJsb2dzID0gYXdhaXQgZ2V0UG9zdHMoKVxuXG4gIGNvbnN0IGhvc3QgPSByZXF1ZXN0LmhlYWRlcnMuZ2V0KCdYLUZvcndhcmRlZC1Ib3N0JykgPz8gcmVxdWVzdC5oZWFkZXJzLmdldCgnaG9zdCcpXG5cbiAgaWYgKCFob3N0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdDb3VsZCBub3QgZGV0ZXJtaW5lIGRvbWFpbiBVUkwuJylcbiAgfVxuXG4gIGNvbnN0IHByb3RvY29sID0gaG9zdC5pbmNsdWRlcygnbG9jYWxob3N0JykgPyAnaHR0cCcgOiAnaHR0cHMnXG4gIGNvbnN0IGRvbWFpbiA9IGAke3Byb3RvY29sfTovLyR7aG9zdH1gXG4gIGNvbnN0IGJsb2dVcmwgPSBgJHtkb21haW59L2Jsb2dgXG5cbiAgY29uc3QgcnNzU3RyaW5nID0gYFxuICAgIDxyc3MgeG1sbnM6YmxvZ0NoYW5uZWw9XCIke2Jsb2dVcmx9XCIgdmVyc2lvbj1cIjIuMFwiPlxuICAgICAgPGNoYW5uZWw+XG4gICAgICAgIDx0aXRsZT5NdXRodWt1bWFyIGJsb2c8L3RpdGxlPlxuICAgICAgICA8bGluaz4ke2Jsb2dVcmx9PC9saW5rPlxuICAgICAgICA8ZGVzY3JpcHRpb24+VGhlIE11dGh1a3VtYXIncyBCbG9nPC9kZXNjcmlwdGlvbj5cbiAgICAgICAgPGxhbmd1YWdlPmVuLXVzPC9sYW5ndWFnZT5cbiAgICAgICAgPGdlbmVyYXRvcj5SU1MgZmVlZCBnZW5lcmF0b3I8L2dlbmVyYXRvcj5cbiAgICAgICAgPHR0bD40MDwvdHRsPlxuICAgICAgICAke2Jsb2dzXG4gICAgICAgICAgLm1hcCgoYmxvZykgPT5cbiAgICAgICAgICAgIGBcbiAgICAgICAgICAgIDxpdGVtPlxuICAgICAgICAgICAgICA8dGl0bGU+PCFbQ0RBVEFbJHtlc2NhcGVDZGF0YShibG9nLnRpdGxlKX1dXT48L3RpdGxlPlxuICAgICAgICAgICAgICA8ZGVzY3JpcHRpb24+PCFbQ0RBVEFbJHtlc2NhcGVIdG1sKGJsb2cuZXhjZXJwdCl9XV0+PC9kZXNjcmlwdGlvbj5cbiAgICAgICAgICAgICAgPGF1dGhvcj48IVtDREFUQVske2VzY2FwZUNkYXRhKCdNdXRodWt1bWFyJyl9XV0+PC9hdXRob3I+XG4gICAgICAgICAgICAgIDxwdWJEYXRlPiR7YmxvZy5wdWJsaXNoZWRBdH08L3B1YkRhdGU+XG4gICAgICAgICAgICAgIDxsaW5rPiR7YmxvZ1VybH0vJHtibG9nLnNsdWd9PC9saW5rPlxuICAgICAgICAgICAgICA8Z3VpZD4ke2Jsb2dVcmx9LyR7YmxvZy5zbHVnfTwvZ3VpZD5cbiAgICAgICAgICAgIDwvaXRlbT5cbiAgICAgICAgICBgLnRyaW0oKSxcbiAgICAgICAgICApXG4gICAgICAgICAgLmpvaW4oJ1xcbicpfVxuICAgICAgPC9jaGFubmVsPlxuICAgIDwvcnNzPlxuICBgLnRyaW0oKVxuXG4gIHJldHVybiBuZXcgUmVzcG9uc2UocnNzU3RyaW5nLCB7XG4gICAgaGVhZGVyczoge1xuICAgICAgJ0NhY2hlLUNvbnRyb2wnOiBgcHVibGljLCBtYXgtYWdlPSR7NjAgKiAxMH0sIHMtbWF4YWdlPSR7NjAgKiA2MCAqIDI0fWAsXG4gICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL3htbCcsXG4gICAgICAnQ29udGVudC1MZW5ndGgnOiBTdHJpbmcoQnVmZmVyLmJ5dGVMZW5ndGgocnNzU3RyaW5nKSksXG4gICAgfSxcbiAgfSlcbn1cbiIsICJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IHVzZUNhdGNoLCBqc29uLCBMb2FkZXJGdW5jdGlvbiwgTWV0YUZ1bmN0aW9uLCB1c2VMb2FkZXJEYXRhIH0gZnJvbSAncmVtaXgnXG5cbmltcG9ydCB7IEJsb2dQb3N0LCBGb3VyMDAsIENvbnRhaW5lciB9IGZyb20gJ34vY29tcG9uZW50cydcbmltcG9ydCB7IGdldFBvc3RzLCBQb3N0IH0gZnJvbSAnfi91dGlscy9jbXMuc2VydmVyJ1xuXG5leHBvcnQgY29uc3QgbWV0YTogTWV0YUZ1bmN0aW9uID0gKCkgPT4ge1xuICByZXR1cm4ge1xuICAgIHRpdGxlOiAnTXV0aHVrdW1hcicsXG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IGxvYWRlcjogTG9hZGVyRnVuY3Rpb24gPSBhc3luYyAoeyByZXF1ZXN0IH0pID0+IHtcbiAgY29uc3QgdXJsID0gbmV3IFVSTChyZXF1ZXN0LnVybClcblxuICBjb25zdCBxdWVyeSA9IHVybC5zZWFyY2hQYXJhbXMuZ2V0KCdxJykgPz8gJydcblxuICBjb25zdCBibG9nUG9zdHMgPSBhd2FpdCBnZXRQb3N0cyhxdWVyeSlcblxuICBpZiAoYmxvZ1Bvc3RzLmxlbmd0aCA9PT0gMCkge1xuICAgIHRocm93IGpzb24oeyBtZXNzYWdlOiAnTm8gYmxvZ3MgZm91bmQuJyB9LCB7IHN0YXR1czogNDA0IH0pXG4gIH1cblxuICBjb25zdCBmaWx0ZXJlZEJsb2dQb3N0cyA9ICFxdWVyeVxuICAgID8gYmxvZ1Bvc3RzXG4gICAgOiBibG9nUG9zdHMuZmlsdGVyKChwb3N0KSA9PiBwb3N0LnRpdGxlLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMocXVlcnkudG9Mb3dlckNhc2UoKSkpXG5cbiAgcmV0dXJuIGpzb24oXG4gICAgeyBibG9nUG9zdHM6IGZpbHRlcmVkQmxvZ1Bvc3RzIH0sXG4gICAge1xuICAgICAgaGVhZGVyczoge1xuICAgICAgICAnQ2FjaGUtQ29udHJvbCc6ICdtYXgtYWdlPTEwMCwgbXVzdC1yZXZhbGlkYXRlJyxcbiAgICAgIH0sXG4gICAgfSxcbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBCbG9nKCkge1xuICBjb25zdCB7IGJsb2dQb3N0cyB9ID0gdXNlTG9hZGVyRGF0YTx7IGJsb2dQb3N0czogQXJyYXk8UG9zdD4gfT4oKVxuXG4gIHJldHVybiAoXG4gICAgPExheW91dD5cbiAgICAgIDxDb250YWluZXI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGxcIj5cbiAgICAgICAgICAgIHtibG9nUG9zdHMubWFwKChibG9nUG9zdCkgPT4gKFxuICAgICAgICAgICAgICA8QmxvZ1Bvc3RcbiAgICAgICAgICAgICAgICBwdWJsaXNoZWRBdD17YmxvZ1Bvc3QucHVibGlzaGVkQXR9XG4gICAgICAgICAgICAgICAga2V5PXtibG9nUG9zdC5pZH1cbiAgICAgICAgICAgICAgICBzbHVnPXtibG9nUG9zdC5zbHVnfVxuICAgICAgICAgICAgICAgIHRpdGxlPXtibG9nUG9zdC50aXRsZX1cbiAgICAgICAgICAgICAgICBleGNlcnB0PXtibG9nUG9zdC5leGNlcnB0fVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgKSl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9Db250YWluZXI+XG4gICAgPC9MYXlvdXQ+XG4gIClcbn1cblxuZnVuY3Rpb24gTGF5b3V0KHsgY2hpbGRyZW4gfTogeyBjaGlsZHJlbjogUmVhY3QuUmVhY3ROb2RlIH0pIHtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPENvbnRhaW5lcj5cbiAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQteGwgZm9udC1ib2xkIHRleHQtcGluay01MDAgdXBwZXJjYXNlIG1kOnB5LTQgbWQ6dGV4dC14bFwiPlxuICAgICAgICAgIFJlY2VudGx5IHB1Ymxpc2hlZFxuICAgICAgICA8L2gyPlxuICAgICAgPC9Db250YWluZXI+XG4gICAgICB7Y2hpbGRyZW59XG4gICAgPC8+XG4gIClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIENhdGNoQm91bmRhcnkoKSB7XG4gIGNvbnN0IGNhdWdodCA9IHVzZUNhdGNoKClcblxuICBjb25zdCBtZXNzYWdlID0gY2F1Z2h0LnN0YXR1cyA9PT0gNDA0ID8gY2F1Z2h0LmRhdGEubWVzc2FnZSA6ICdPb3BzaWVzLi4gU29tZXRoaW5nIHdlbnQgd3JvbmcuJ1xuXG4gIGlmIChjYXVnaHQuc3RhdHVzID09PSA0MDQpIHtcbiAgICByZXR1cm4gPEZvdXIwMCB0aXRsZT1cIjQwNFwiIG1lc3NhZ2U9e21lc3NhZ2V9IGxpbms9XCIvYmxvZ1wiIC8+XG4gIH1cblxuICByZXR1cm4gPEZvdXIwMCB0aXRsZT1cIjUwMFwiIG1lc3NhZ2U9e21lc3NhZ2V9IGxpbms9XCIvYmxvZ1wiIC8+XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBFcnJvckJvdW5kYXJ5KCkge1xuICByZXR1cm4gPEZvdXIwMCB0aXRsZT1cIjUwMFwiIG1lc3NhZ2U9XCJPb3BzaWVzLi4uIFNvbWV0aGluZyB3ZW50IHdyb25nLlwiIGxpbms9XCIvXCIgLz5cbn1cbiIsICJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7XG4gIEZvcm0sXG4gIHVzZUNhdGNoLFxuICBqc29uLFxuICBMb2FkZXJGdW5jdGlvbixcbiAgTWV0YUZ1bmN0aW9uLFxuICB1c2VMb2FkZXJEYXRhLFxuICB1c2VTZWFyY2hQYXJhbXMsXG59IGZyb20gJ3JlbWl4J1xuaW1wb3J0IHsgSW9Jb3NTZWFyY2ggfSBmcm9tICdyZWFjdC1pY29ucy9pbydcblxuaW1wb3J0IHsgQmxvZ1Bvc3QsIEZvdXIwMCwgQ29udGFpbmVyIH0gZnJvbSAnfi9jb21wb25lbnRzJ1xuaW1wb3J0IHsgZ2V0UG9zdHMsIFBvc3QgfSBmcm9tICd+L3V0aWxzL2Ntcy5zZXJ2ZXInXG5cbmV4cG9ydCBjb25zdCBtZXRhOiBNZXRhRnVuY3Rpb24gPSAoKSA9PiB7XG4gIHJldHVybiB7XG4gICAgdGl0bGU6ICdCbG9nIHwgTXV0aHVrdW1hcicsXG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IGxvYWRlcjogTG9hZGVyRnVuY3Rpb24gPSBhc3luYyAoeyByZXF1ZXN0IH0pID0+IHtcbiAgY29uc3QgdXJsID0gbmV3IFVSTChyZXF1ZXN0LnVybClcblxuICBjb25zdCBxdWVyeSA9IHVybC5zZWFyY2hQYXJhbXMuZ2V0KCdxJykgPz8gJydcblxuICBjb25zdCBibG9nUG9zdHMgPSBhd2FpdCBnZXRQb3N0cyhxdWVyeSlcblxuICBpZiAoYmxvZ1Bvc3RzLmxlbmd0aCA9PT0gMCkge1xuICAgIHRocm93IGpzb24oeyBtZXNzYWdlOiAnTm8gYmxvZ3MgZm91bmQuJyB9LCB7IHN0YXR1czogNDA0IH0pXG4gIH1cblxuICBjb25zdCBmaWx0ZXJlZEJsb2dQb3N0cyA9ICFxdWVyeVxuICAgID8gYmxvZ1Bvc3RzXG4gICAgOiBibG9nUG9zdHMuZmlsdGVyKChwb3N0KSA9PiBwb3N0LnRpdGxlLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMocXVlcnkudG9Mb3dlckNhc2UoKSkpXG5cbiAgcmV0dXJuIGpzb24oXG4gICAgeyBibG9nUG9zdHM6IGZpbHRlcmVkQmxvZ1Bvc3RzIH0sXG4gICAge1xuICAgICAgaGVhZGVyczoge1xuICAgICAgICAnQ2FjaGUtQ29udHJvbCc6ICdtYXgtYWdlPTEwMCwgbXVzdC1yZXZhbGlkYXRlJyxcbiAgICAgIH0sXG4gICAgfSxcbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBCbG9nKCkge1xuICBjb25zdCB7IGJsb2dQb3N0cyB9ID0gdXNlTG9hZGVyRGF0YTx7IGJsb2dQb3N0czogQXJyYXk8UG9zdD4gfT4oKVxuICBjb25zdCBbc2VhcmNoUGFyYW1zXSA9IHVzZVNlYXJjaFBhcmFtcygpXG5cbiAgY29uc3QgcXVlcnkgPSBzZWFyY2hQYXJhbXMuZ2V0KCdxJylcbiAgcmV0dXJuIChcbiAgICA8TGF5b3V0IHF1ZXJ5PXtxdWVyeX0+XG4gICAgICA8Q29udGFpbmVyPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB5LTIgbWQ6cHktNlwiPlxuICAgICAgICAgIHtibG9nUG9zdHMubWFwKChibG9nUG9zdCkgPT4gKFxuICAgICAgICAgICAgPEJsb2dQb3N0XG4gICAgICAgICAgICAgIHB1Ymxpc2hlZEF0PXtibG9nUG9zdC5wdWJsaXNoZWRBdH1cbiAgICAgICAgICAgICAga2V5PXtibG9nUG9zdC5pZH1cbiAgICAgICAgICAgICAgc2x1Zz17YmxvZ1Bvc3Quc2x1Z31cbiAgICAgICAgICAgICAgdGl0bGU9e2Jsb2dQb3N0LnRpdGxlfVxuICAgICAgICAgICAgICBleGNlcnB0PXtibG9nUG9zdC5leGNlcnB0fVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L0NvbnRhaW5lcj5cbiAgICA8L0xheW91dD5cbiAgKVxufVxuXG5mdW5jdGlvbiBMYXlvdXQoeyBjaGlsZHJlbiwgcXVlcnkgPSAnJyB9OiB7IGNoaWxkcmVuOiBSZWFjdC5SZWFjdE5vZGU7IHF1ZXJ5Pzogc3RyaW5nIHwgbnVsbCB9KSB7XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGItNiBib3JkZXItYiBib3JkZXItY29sb3JcIj5cbiAgICAgICAgPENvbnRhaW5lcj5cbiAgICAgICAgICA8Rm9ybSBtZXRob2Q9XCJnZXRcIj5cbiAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJweS00IHRleHQteGwgZm9udC1ib2xkIG1kOnB5LTEwIG1kOnRleHQtMnhsXCI+QmxvZzwvaDI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIG1heC13LXNtIHAtMSBib3JkZXIgcm91bmRlZC1tZCBib3JkZXItY29sb3JcIj5cbiAgICAgICAgICAgICAgPElvSW9zU2VhcmNoIGNsYXNzTmFtZT1cIm1sLTIgdGV4dC1ncmF5LTYwMFwiIHNpemU9ezIwfSAvPlxuICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICBuYW1lPVwicVwiXG4gICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBwLTEgbWwtMiB0ZXh0LXNtIGJnLWNvbG9yXCJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlNlYXJjaCBwb3N0cy4uLlwiXG4gICAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlPXtxdWVyeSA/PyAnJ31cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvRm9ybT5cbiAgICAgICAgPC9Db250YWluZXI+XG4gICAgICA8L2Rpdj5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICA8Lz5cbiAgKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gQ2F0Y2hCb3VuZGFyeSgpIHtcbiAgY29uc3QgY2F1Z2h0ID0gdXNlQ2F0Y2goKVxuXG4gIGNvbnN0IG1lc3NhZ2UgPSBjYXVnaHQuc3RhdHVzID09PSA0MDQgPyBjYXVnaHQuZGF0YS5tZXNzYWdlIDogJ09vcHNpZXMuLiBTb21ldGhpbmcgd2VudCB3cm9uZy4nXG5cbiAgaWYgKGNhdWdodC5zdGF0dXMgPT09IDQwNCkge1xuICAgIHJldHVybiA8Rm91cjAwIHRpdGxlPVwiNDA0XCIgbWVzc2FnZT17bWVzc2FnZX0gbGluaz1cIi9ibG9nXCIgLz5cbiAgfVxuXG4gIHJldHVybiA8Rm91cjAwIHRpdGxlPVwiNTAwXCIgbWVzc2FnZT17bWVzc2FnZX0gbGluaz1cIi9ibG9nXCIgLz5cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIEVycm9yQm91bmRhcnkoKSB7XG4gIHJldHVybiA8Rm91cjAwIHRpdGxlPVwiNTAwXCIgbWVzc2FnZT1cIk9vcHNpZXMuLi4gU29tZXRoaW5nIHdlbnQgd3JvbmcuXCIgbGluaz1cIi9cIiAvPlxufVxuIiwgImltcG9ydCB7IGpzb24sIExvYWRlckZ1bmN0aW9uLCB1c2VDYXRjaCB9IGZyb20gJ3JlbWl4J1xuaW1wb3J0IHsgQ29udGFpbmVyLCBGb3VyMDAgfSBmcm9tICd+L2NvbXBvbmVudHMnXG5cbmV4cG9ydCBjb25zdCBsb2FkZXI6IExvYWRlckZ1bmN0aW9uID0gYXN5bmMgKCkgPT4ge1xuICB0aHJvdyBqc29uKHsgbWVzc2FnZTogYFBhZ2UsIHlvdSBhcmUgbG9va2luZyBmb3IgZG9lc24ndCBleGlzdHNgIH0sIHsgc3RhdHVzOiA0MDQgfSlcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU3BsYXQoKSB7XG4gIHJldHVybiAoXG4gICAgPENvbnRhaW5lcj5cbiAgICAgIDxwPlxuICAgICAgICBZb3UgYXJlIG5vdCBzdXBwb3NlIHRvIHNlZSB0aGlzIHBhZ2UuIEdvb2Qgam9iIGdldHRpbmcgaGVyZS4gQ2FuIHlvdSBwbGVhc2UgbGV0IE11dGh1IGtub3csXG4gICAgICAgIHlvdSBnb3QgaGVyZS5cbiAgICAgIDwvcD5cbiAgICA8L0NvbnRhaW5lcj5cbiAgKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gQ2F0Y2hCb3VuZGFyeSgpIHtcbiAgY29uc3QgY2F1Z2h0ID0gdXNlQ2F0Y2goKVxuXG4gIGNvbnN0IG1lc3NhZ2UgPSBjYXVnaHQuc3RhdHVzID09PSA0MDQgPyBjYXVnaHQuZGF0YS5tZXNzYWdlIDogJ09vcHNpZXMuLiBTb21ldGhpbmcgd2VudCB3cm9uZy4nXG5cbiAgaWYgKGNhdWdodC5zdGF0dXMgPT09IDQwNCkge1xuICAgIHJldHVybiA8Rm91cjAwIHRpdGxlPVwiNDA0XCIgbWVzc2FnZT17bWVzc2FnZX0gbGluaz1cIi9cIiAvPlxuICB9XG5cbiAgcmV0dXJuIDxGb3VyMDAgdGl0bGU9XCI1MDBcIiBtZXNzYWdlPXttZXNzYWdlfSBsaW5rPVwiL1wiIC8+XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBFcnJvckJvdW5kYXJ5KCkge1xuICByZXR1cm4gPEZvdXIwMCB0aXRsZT1cIjUwMFwiIG1lc3NhZ2U9XCJPb3BzaWVzLi4uIFNvbWV0aGluZyB3ZW50IHdyb25nLlwiIGxpbms9XCIvXCIgLz5cbn1cbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBLFlBQXVCO0FBQUE7QUFBQTs7O0FDQXZCO0FBQUE7QUFBQTtBQVVBO0FBRUEsV0FBTyxlQUFlLFNBQVMsY0FBYyxFQUFFLE9BQU87QUFFdEQsUUFBSSxRQUFRLFFBQVE7QUFJcEIsV0FBTyxlQUFlLFNBQVMsUUFBUTtBQUFBLE1BQ3JDLFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sTUFBTTtBQUFBO0FBQUE7QUFFbEMsV0FBTyxlQUFlLFNBQVMsUUFBUTtBQUFBLE1BQ3JDLFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sTUFBTTtBQUFBO0FBQUE7QUFFbEMsV0FBTyxlQUFlLFNBQVMsU0FBUztBQUFBLE1BQ3RDLFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sTUFBTTtBQUFBO0FBQUE7QUFFbEMsV0FBTyxlQUFlLFNBQVMsY0FBYztBQUFBLE1BQzNDLFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sTUFBTTtBQUFBO0FBQUE7QUFFbEMsV0FBTyxlQUFlLFNBQVMsUUFBUTtBQUFBLE1BQ3JDLFlBQVk7QUFBQSxNQUNaLEtB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QUFNO0FBQUEsTUFDTixNQUFNO0FBQUEsTUFDTixhQUFhO0FBQUE7QUFBQSxJQUVmO0FBQUEsTUFDRSxLQUFLO0FBQUEsTUFDTCxJQUFJO0FBQUEsTUFDSixNQUFNO0FBQUEsTUFDTixNQUFNO0FBQUEsTUFDTixhQUFhO0FBQUE7QUFBQSxJQUVmO0FBQUEsTUFDRSxLQUFLO0FBQUEsTUFDTCxJQUFJO0FBQUEsTUFDSixNQUFNO0FBQUEsTUFDTixNQUFNO0FBQUEsTUFDTixhQUFhO0FBQUE7QUFBQSxJQUdmO0FBQUEsTUFDRSxLQUFLO0FBQUEsTUFDTCxPQUFPO0FBQUEsTUFDUCxNQUFNO0FBQUEsTUFDTixPQUFPO0FBQUE7QUFBQSxJQUVUO0FBQUEsTUFDRSxLQUFLO0FBQUEsTUFDTCxNQUFNO0FBQUEsTUFDTixPQUFPO0FBQUEsTUFDUCxNQUFNO0FBQUEsTUFDTixPQUFPO0FBQUE7QUFBQSxJQUVUO0FBQUEsTUFDRSxLQUFLO0FBQUEsTUFDTCxNQUFNO0FBQUEsTUFDTixPQUFPO0FBQUEsTUFDUCxNQUFNO0FBQUEsTUFDTixPQUFPO0FBQUE7QUFBQSxJQUVUO0FBQUEsTUFDRSxLQUFLO0FBQUEsTUFDTCxNQUFNO0FBQUEsTUFDTixPQUFPO0FBQUE7QUFBQSxJQUdUO0FBQUEsTUFDRSxLQUFLO0FBQUEsTUFDTCxPQUFPO0FBQUEsTUFDUCxNQUFNO0FBQUEsTUFDTixPQUFPO0FBQUE7QUFBQSxJQUVUO0FBQUEsTUFDRSxLQUFLO0FBQUEsTUFDTCxNQUFNO0FBQUEsTUFDTixPQUFPO0FBQUEsTUFDUCxNQUFNO0FBQUEsTUFDTixPQUFPO0FBQUE7QUFBQSxJQUVUO0FBQUEsTUFDRSxLQUFLO0FBQUEsTUFDTCxNQUFNO0FBQUEsTUFDTixPQUFPO0FBQUEsTUFDUCxNQUFNO0FBQUEsTUFDTixPQUFPO0FBQUE7QUFBQSxJQUVUO0FBQUEsTUFDRSxLQUFLO0FBQUEsTUFDTCxNQUFNO0FBQUEsTUFDTixPQUFPO0FBQUE7QUFBQTtBQUFBO0FBS04sSUFBTSxTQUF5QixPQUFPLEVBQUUsY0FBYztBQUMzRCxRQUFN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
