/* @ds-bundle: {"format":4,"namespace":"RossoMaquinariasDesignSystem_202f2f","components":[{"name":"FeatureRow","sourcePath":"components/content/FeatureRow.jsx"},{"name":"InfoBlock","sourcePath":"components/content/InfoBlock.jsx"},{"name":"MediaCard","sourcePath":"components/content/MediaCard.jsx"},{"name":"NotchCard","sourcePath":"components/content/NotchCard.jsx"},{"name":"StatVideoCard","sourcePath":"components/content/StatVideoCard.jsx"},{"name":"TextField","sourcePath":"components/content/TextField.jsx"},{"name":"ArrowLink","sourcePath":"components/core/ArrowLink.jsx"},{"name":"BrandGlyph","sourcePath":"components/core/BrandGlyph.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"ClipPanel","sourcePath":"components/core/ClipPanel.jsx"},{"name":"CornerClose","sourcePath":"components/core/CornerClose.jsx"},{"name":"Eyebrow","sourcePath":"components/core/Eyebrow.jsx"},{"name":"Heading","sourcePath":"components/core/Heading.jsx"},{"name":"HexButton","sourcePath":"components/core/HexButton.jsx"},{"name":"Icon","sourcePath":"components/core/Icon.jsx"},{"name":"ScrollCue","sourcePath":"components/core/ScrollCue.jsx"},{"name":"Wordmark","sourcePath":"components/core/Wordmark.jsx"},{"name":"DiagonalStripes","sourcePath":"components/layout/DiagonalStripes.jsx"},{"name":"Section","sourcePath":"components/layout/Section.jsx"},{"name":"SiteFooter","sourcePath":"components/layout/SiteFooter.jsx"},{"name":"SiteHeader","sourcePath":"components/navigation/SiteHeader.jsx"},{"name":"TabNav","sourcePath":"components/navigation/TabNav.jsx"},{"name":"WebApp","sourcePath":"ui_kits/website/WebApp.jsx"},{"name":"WebContact","sourcePath":"ui_kits/website/WebContact.jsx"},{"name":"WebFleet","sourcePath":"ui_kits/website/WebFleet.jsx"},{"name":"WebHero","sourcePath":"ui_kits/website/WebHero.jsx"},{"name":"WebHome","sourcePath":"ui_kits/website/WebHome.jsx"},{"name":"WebMenu","sourcePath":"ui_kits/website/WebMenu.jsx"},{"name":"WebServiceTabs","sourcePath":"ui_kits/website/WebServiceTabs.jsx"},{"name":"WebServices","sourcePath":"ui_kits/website/WebServices.jsx"},{"name":"SERVICES","sourcePath":"ui_kits/website/webData.js"},{"name":"FLEET","sourcePath":"ui_kits/website/webData.js"},{"name":"STORIES","sourcePath":"ui_kits/website/webData.js"},{"name":"STATS","sourcePath":"ui_kits/website/webData.js"}],"sourceHashes":{"components/content/FeatureRow.jsx":"a8a5b3db11c5","components/content/InfoBlock.jsx":"d0a5059a36f0","components/content/MediaCard.jsx":"1dcd626afaea","components/content/NotchCard.jsx":"d4c6af3ecc18","components/content/StatVideoCard.jsx":"4c413f8eabc4","components/content/TextField.jsx":"4e0584b81513","components/core/ArrowLink.jsx":"8a7a906546bc","components/core/BrandGlyph.jsx":"57ebcf14b46f","components/core/Button.jsx":"3352cd0633fd","components/core/ClipPanel.jsx":"765ebe15b22e","components/core/CornerClose.jsx":"dc1628627d92","components/core/Eyebrow.jsx":"fb66527a105b","components/core/Heading.jsx":"fe095c857fdf","components/core/HexButton.jsx":"69d4d3f2ad84","components/core/Icon.jsx":"db4a9d009309","components/core/ScrollCue.jsx":"38e971ab816b","components/core/Wordmark.jsx":"e25c7252a6d2","components/layout/DiagonalStripes.jsx":"b665a5f58069","components/layout/Section.jsx":"8278d9c982be","components/layout/SiteFooter.jsx":"da94a3fc5610","components/navigation/SiteHeader.jsx":"fbdfc41280e0","components/navigation/TabNav.jsx":"a58fa7b4c6e3","ui_kits/website/WebApp.jsx":"87a63a2bee19","ui_kits/website/WebContact.jsx":"accf3742d650","ui_kits/website/WebFleet.jsx":"e8ff6f83e9d6","ui_kits/website/WebHero.jsx":"b2bab89553a3","ui_kits/website/WebHome.jsx":"7b1d02182944","ui_kits/website/WebMenu.jsx":"ec0c48eaa9bd","ui_kits/website/WebServiceTabs.jsx":"8e2214f4e4fd","ui_kits/website/WebServices.jsx":"b7e1125055b9","ui_kits/website/webData.js":"2af29fefa621"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.RossoMaquinariasDesignSystem_202f2f = window.RossoMaquinariasDesignSystem_202f2f || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/content/InfoBlock.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Stacked plain-text detail block — addresses, phone numbers, hours, spec lists. */
function InfoBlock({
  label,
  lines = [],
  tone = "ink",
  style,
  ...rest
}) {
  const onInk = tone === "onInk";
  return /*#__PURE__*/React.createElement("div", _extends({}, rest, {
    style: {
      display: "grid",
      gap: 6,
      ...style
    }
  }), label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 700,
      fontSize: "var(--fs-caption)",
      letterSpacing: "var(--ls-eyebrow)",
      textTransform: "uppercase",
      color: onInk ? "var(--text-on-ink-muted)" : "var(--text-muted)",
      marginBottom: 4
    }
  }, label), lines.map((l, i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    style: {
      fontSize: "var(--fs-body)",
      lineHeight: 1.5,
      color: onInk ? "var(--text-on-ink)" : "var(--text-body)"
    }
  }, l)));
}
Object.assign(__ds_scope, { InfoBlock });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/InfoBlock.jsx", error: String((e && e.message) || e) }); }

// components/content/StatVideoCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Resolve a design-system-relative asset path from the loaded bundle URL. */
function dsAsset(path) {
  if (!path || /^(?:[a-z]+:|\/|\.)/i.test(path)) return path;
  if (typeof document === "undefined") return path;
  const s = Array.from(document.querySelectorAll("script[src]")).map(n => n.src).find(u => /_ds_bundle\.js(\?|#|$)/.test(u));
  return (s ? s.replace(/_ds_bundle\.js.*$/, "") : "") + path;
}

/** Dark overlay card: video still with play affordance over a headline figure. */
function StatVideoCard({
  value = "+10",
  label = "Años de experiencia",
  image,
  imageAlt = "",
  onPlay,
  width = 322,
  style,
  ...rest
}) {
  const [h, setH] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", _extends({}, rest, {
    style: {
      width,
      padding: 14,
      background: "var(--ink-900)",
      borderRadius: 12,
      border: "1px solid var(--border-on-ink)",
      boxShadow: "var(--shadow-card, 0 18px 40px rgba(21,29,36,.28))",
      ...style
    }
  }), /*#__PURE__*/React.createElement("button", {
    onClick: onPlay,
    "aria-label": "Reproducir video",
    onMouseEnter: () => setH(true),
    onMouseLeave: () => setH(false),
    style: {
      position: "relative",
      display: "block",
      width: "100%",
      height: 108,
      padding: 0,
      overflow: "hidden",
      border: "none",
      borderRadius: 7,
      background: "var(--ink-700)",
      cursor: "pointer"
    }
  }, image && /*#__PURE__*/React.createElement("img", {
    src: dsAsset(image),
    alt: imageAlt,
    style: {
      display: "block",
      width: "100%",
      height: "100%",
      objectFit: "cover"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: "50%",
      top: "50%",
      transform: "translate(-50%,-50%)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      width: 42,
      height: 42,
      borderRadius: "50%",
      background: h ? "var(--accent-hover)" : "var(--accent)",
      transition: "var(--transition-color)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 0,
      height: 0,
      marginLeft: 4,
      borderLeft: "12px solid var(--white)",
      borderTop: "8px solid transparent",
      borderBottom: "8px solid transparent"
    }
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "14px 4px 4px"
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      color: "var(--text-on-ink)",
      fontFamily: "var(--font-display)",
      fontWeight: 700,
      fontSize: "30px",
      lineHeight: 1,
      letterSpacing: "0.01em"
    }
  }, value), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "7px 0 0",
      color: "var(--grey-300)",
      fontSize: "13px",
      lineHeight: 1.3
    }
  }, label)));
}
Object.assign(__ds_scope, { StatVideoCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/StatVideoCard.jsx", error: String((e && e.message) || e) }); }

// components/content/TextField.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Square hairline input. Multiline via rows. */
function TextField({
  label,
  placeholder,
  value,
  onChange,
  rows,
  type = "text",
  tone = "ink",
  required,
  style,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const onInk = tone === "onInk";
  const field = {
    width: "100%",
    padding: "14px 16px",
    borderRadius: 0,
    outline: "none",
    background: onInk ? "rgba(255,255,255,.04)" : "var(--white)",
    border: "1px solid " + (focus ? "var(--accent)" : onInk ? "var(--border-on-ink)" : "var(--border-hairline)"),
    color: onInk ? "var(--text-on-ink)" : "var(--text-body)",
    fontFamily: "var(--font-body)",
    fontSize: "var(--fs-body)",
    lineHeight: 1.5,
    transition: "var(--transition-color)",
    resize: rows ? "vertical" : undefined
  };
  const T = rows ? "textarea" : "input";
  return /*#__PURE__*/React.createElement("label", _extends({}, rest, {
    style: {
      display: "grid",
      gap: 8,
      ...style
    }
  }), label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 700,
      fontSize: "var(--fs-caption)",
      letterSpacing: "var(--ls-eyebrow)",
      textTransform: "uppercase",
      color: onInk ? "var(--text-on-ink-muted)" : "var(--text-muted)"
    }
  }, label, required && /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--accent)"
    }
  }, " *")), /*#__PURE__*/React.createElement(T, {
    type: rows ? undefined : type,
    rows: rows,
    placeholder: placeholder,
    value: value,
    required: required,
    onChange: onChange,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: field
  }));
}
Object.assign(__ds_scope, { TextField });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/TextField.jsx", error: String((e && e.message) || e) }); }

// components/core/BrandGlyph.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Supplied brand glyphs, drawn to the client's vectors. Stroke inherits currentColor. */
const GLYPH = {
  close: {
    vb: "0 0 18 18",
    w: 2,
    cap: "round",
    d: ["M1 1L17 17", "M17 1L1 17"]
  },
  "arrow-corner": {
    vb: "0 0 24 24",
    w: 2,
    cap: "butt",
    d: ["M1 1.46289H22.3333M22.3333 1.46289V22.7962M22.3333 1.46289L1 22.7962"]
  },
  "arrow-right": {
    vb: "13.34 13.34 21.32 21.32",
    w: 1.5,
    cap: "round",
    d: ["M25.9814 16.0752L33.9066 24.0003L25.9814 31.9255", "M33.9066 24H14.0938"]
  },
  "arrow-left": {
    vb: "13.34 13.34 21.32 21.32",
    w: 1.5,
    cap: "round",
    d: ["M22.0189 31.9255L14.0938 24.0003L22.0189 16.0752", "M14.0938 24H33.9068"]
  }
};

/** Brand glyph set: the mechanical, square-cut icons supplied with the identity. */
function BrandGlyph({
  name = "arrow-corner",
  size = 20,
  strokeWidth,
  style,
  ...rest
}) {
  const g = GLYPH[name] || GLYPH["arrow-corner"];
  return /*#__PURE__*/React.createElement("svg", _extends({
    "aria-hidden": "true"
  }, rest, {
    viewBox: g.vb,
    width: size,
    height: size,
    fill: "none",
    style: {
      display: "block",
      flex: "none",
      overflow: "visible",
      ...style
    }
  }), g.d.map(d => /*#__PURE__*/React.createElement("path", {
    key: d,
    d: d,
    stroke: "currentColor",
    strokeWidth: strokeWidth || g.w,
    strokeMiterlimit: "10",
    strokeLinecap: g.cap,
    strokeLinejoin: "round"
  })));
}
Object.assign(__ds_scope, { BrandGlyph });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/BrandGlyph.jsx", error: String((e && e.message) || e) }); }

// components/core/ArrowLink.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const LINK_FS = {
  sm: "14px",
  md: "var(--fs-nav)",
  lg: "var(--fs-link-lg)"
};

/** Diagonal-arrow text link — the brand's default "go somewhere" affordance. */
function ArrowLink({
  children,
  href = "#",
  size = "md",
  tone = "ink",
  onClick,
  style,
  ...rest
}) {
  const [h, setH] = React.useState(false);
  const base = tone === "onInk" ? "var(--text-on-ink)" : tone === "accent" ? "var(--accent)" : "var(--text-strong)";
  const hoverColor = tone === "accent" ? "var(--accent-press)" : "var(--accent)";
  const px = size === "lg" ? 30 : size === "sm" ? 15 : 19;
  return /*#__PURE__*/React.createElement("a", _extends({
    href: href,
    onClick: onClick,
    onMouseEnter: () => setH(true),
    onMouseLeave: () => setH(false)
  }, rest, {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: size === "lg" ? 18 : 10,
      color: h ? hoverColor : base,
      textDecoration: "none",
      fontFamily: "var(--font-display)",
      fontWeight: 700,
      fontSize: LINK_FS[size],
      lineHeight: 1,
      letterSpacing: "var(--ls-nav)",
      textTransform: "uppercase",
      transition: "var(--transition-color)",
      ...style
    }
  }), /*#__PURE__*/React.createElement(__ds_scope.BrandGlyph, {
    name: "arrow-corner",
    size: px,
    style: {
      transform: h ? "translate(2px,-2px)" : "none",
      transition: "transform var(--dur-base) var(--ease-mech)"
    }
  }), /*#__PURE__*/React.createElement("span", null, children));
}
Object.assign(__ds_scope, { ArrowLink });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/ArrowLink.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const BTN_PAD = {
  sm: "10px 18px",
  md: "15px 26px",
  lg: "20px 34px"
};
const BTN_FS = {
  sm: "14px",
  md: "var(--fs-nav)",
  lg: "19px"
};

/** Square, uppercase action. Solid red for primary, hairline outline everywhere else. */
function Button({
  children,
  variant = "solid",
  size = "md",
  cut = false,
  disabled = false,
  as = "button",
  href,
  iconEnd,
  style,
  ...rest
}) {
  const [h, setH] = React.useState(false);
  const [p, setP] = React.useState(false);
  const Tag = href ? "a" : as;
  const skins = {
    solid: {
      bg: h ? "var(--accent-hover)" : "var(--accent)",
      fg: "var(--white)",
      bd: "transparent"
    },
    outline: {
      bg: h ? "var(--ink-800)" : "transparent",
      fg: h ? "var(--white)" : "var(--text-strong)",
      bd: h ? "var(--ink-800)" : "var(--border-strong)"
    },
    outlineOnInk: {
      bg: h ? "var(--white)" : "transparent",
      fg: h ? "var(--ink-800)" : "var(--white)",
      bd: h ? "var(--white)" : "var(--border-on-ink)"
    },
    ghost: {
      bg: "transparent",
      fg: h ? "var(--accent)" : "var(--text-strong)",
      bd: "transparent"
    }
  };
  const s = skins[variant] || skins.solid;
  return /*#__PURE__*/React.createElement(Tag, _extends({
    href: href,
    disabled: !href && disabled ? true : undefined,
    onMouseEnter: () => !disabled && setH(true),
    onMouseLeave: () => {
      setH(false);
      setP(false);
    },
    onMouseDown: () => !disabled && setP(true),
    onMouseUp: () => setP(false)
  }, rest, {
    style: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      gap: 10,
      padding: BTN_PAD[size],
      border: "1px solid " + s.bd,
      background: s.bg,
      color: s.fg,
      fontFamily: "var(--font-display)",
      fontWeight: 700,
      fontSize: BTN_FS[size],
      lineHeight: 1,
      letterSpacing: "var(--ls-nav)",
      textTransform: "uppercase",
      textDecoration: "none",
      cursor: disabled ? "not-allowed" : "pointer",
      borderRadius: 0,
      clipPath: cut ? "polygon(0 0,calc(100% - 14px) 0,100% 14px,100% 100%,0 100%)" : undefined,
      transform: p ? "translateY(1px)" : "none",
      opacity: disabled ? 0.38 : 1,
      pointerEvents: disabled ? "none" : undefined,
      transition: "var(--transition-color),transform var(--dur-fast) var(--ease-out)",
      ...style
    }
  }), children, iconEnd);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/ClipPanel.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CLIP_TONES = {
  mint: {
    background: "var(--surface-mint)",
    color: "var(--text-strong)"
  },
  ink: {
    background: "var(--surface-ink)",
    color: "var(--text-on-ink)"
  },
  paper: {
    background: "var(--surface-page)",
    color: "var(--text-strong)"
  },
  accent: {
    background: "var(--surface-accent)",
    color: "var(--white)"
  }
};

/** Rectangular panel with one or more corners cut on a 45° diagonal — the brand's structural motif. */
function ClipPanel({
  children,
  tone = "mint",
  corners = ["tr"],
  cut = 44,
  bordered = false,
  style,
  ...rest
}) {
  const c = new Set(corners);
  const tl = c.has("tl") ? cut : 0,
    tr = c.has("tr") ? cut : 0,
    br = c.has("br") ? cut : 0,
    bl = c.has("bl") ? cut : 0;
  const clip = [`0 ${tl}px`, `${tl}px 0`, `calc(100% - ${tr}px) 0`, `100% ${tr}px`, `100% calc(100% - ${br}px)`, `calc(100% - ${br}px) 100%`, `${bl}px 100%`, `0 calc(100% - ${bl}px)`].join(",");
  return /*#__PURE__*/React.createElement("div", _extends({}, rest, {
    style: {
      ...CLIP_TONES[tone],
      clipPath: `polygon(${clip})`,
      outline: bordered ? "1px solid var(--border-hairline)" : undefined,
      ...style
    }
  }), children);
}
Object.assign(__ds_scope, { ClipPanel });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/ClipPanel.jsx", error: String((e && e.message) || e) }); }

// components/content/MediaCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Photo card with a mint panel notched into its lower half. Used for stories, services and case studies. */
function MediaCard({
  title,
  excerpt,
  linkLabel = "VER MÁS",
  href = "#",
  onClick,
  image,
  imageAlt = "",
  height = 520,
  panelTone = "mint",
  style,
  ...rest
}) {
  const [h, setH] = React.useState(false);
  return /*#__PURE__*/React.createElement("article", _extends({}, rest, {
    onMouseEnter: () => setH(true),
    onMouseLeave: () => setH(false),
    style: {
      position: "relative",
      height,
      overflow: "hidden",
      background: "var(--ink-700)",
      ...style
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      background: image ? "url(" + image + ") center/cover no-repeat" : "linear-gradient(160deg,var(--ink-600),var(--ink-900))",
      transform: h ? "scale(1.035)" : "scale(1)",
      transition: "transform var(--dur-slow) var(--ease-mech)"
    },
    role: "img",
    "aria-label": imageAlt
  }), !image && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      backgroundImage: "var(--dot-grid-on-ink)",
      backgroundSize: "var(--dot-step) var(--dot-step)"
    }
  }), /*#__PURE__*/React.createElement(__ds_scope.ClipPanel, {
    tone: panelTone,
    corners: ["tr"],
    cut: 44,
    style: {
      position: "absolute",
      left: 0,
      right: 24,
      bottom: 0,
      padding: "34px 30px 28px",
      display: "grid",
      gap: 18,
      alignContent: "start"
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      fontFamily: "var(--font-display)",
      fontWeight: 700,
      fontSize: "var(--fs-title)",
      lineHeight: 1.14,
      letterSpacing: "var(--ls-display)",
      textTransform: "uppercase",
      color: panelTone === "ink" ? "var(--text-on-ink)" : "var(--text-strong)"
    }
  }, title), excerpt && /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: "var(--fs-body)",
      lineHeight: 1.5,
      color: panelTone === "ink" ? "var(--text-on-ink-muted)" : "var(--grey-600)"
    }
  }, excerpt), /*#__PURE__*/React.createElement(__ds_scope.ArrowLink, {
    href: href,
    onClick: onClick,
    size: "sm",
    tone: panelTone === "ink" ? "onInk" : "ink"
  }, linkLabel)));
}
Object.assign(__ds_scope, { MediaCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/MediaCard.jsx", error: String((e && e.message) || e) }); }

// components/core/CornerClose.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Red corner wedge with the brand X — the close affordance for full-screen overlays. */
function CornerClose({
  size = 100,
  label = "Cerrar",
  onClick,
  style,
  ...rest
}) {
  const [h, setH] = React.useState(false);
  return /*#__PURE__*/React.createElement("button", _extends({}, rest, {
    onClick: onClick,
    "aria-label": label,
    onMouseEnter: () => setH(true),
    onMouseLeave: () => setH(false),
    style: {
      display: "block",
      width: size,
      height: size,
      padding: 0,
      border: "none",
      background: "none",
      cursor: "pointer",
      lineHeight: 0,
      ...style
    }
  }), /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 100 100",
    width: size,
    height: size,
    fill: "none",
    style: {
      display: "block"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M100 100L0 0H100V100Z",
    fill: h ? "var(--accent-hover)" : "var(--accent)",
    style: {
      transition: "fill var(--dur-base) var(--ease-mech)"
    }
  }), /*#__PURE__*/React.createElement("path", {
    d: "M62.334 21.3335L81.0007 40.0002",
    stroke: "var(--white)",
    strokeWidth: "2",
    strokeMiterlimit: "10",
    strokeLinecap: "square",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M81.0007 21.3335L62.334 40.0002",
    stroke: "var(--white)",
    strokeWidth: "2",
    strokeMiterlimit: "10",
    strokeLinecap: "square",
    strokeLinejoin: "round"
  })));
}
Object.assign(__ds_scope, { CornerClose });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/CornerClose.jsx", error: String((e && e.message) || e) }); }

// components/core/Eyebrow.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Small red uppercase label that opens every section. */
function Eyebrow({
  children,
  tone = "accent",
  as = "p",
  style,
  ...rest
}) {
  const Tag = as;
  const color = tone === "onInk" ? "var(--text-on-ink)" : tone === "ink" ? "var(--text-strong)" : tone === "accentOnInk" ? "var(--text-accent-on-ink)" : "var(--text-accent)";
  return /*#__PURE__*/React.createElement(Tag, _extends({}, rest, {
    style: {
      margin: 0,
      color,
      fontFamily: "var(--font-display)",
      fontWeight: 700,
      fontSize: "var(--fs-eyebrow)",
      lineHeight: 1.2,
      letterSpacing: "var(--ls-eyebrow)",
      textTransform: "uppercase",
      ...style
    }
  }), children);
}
Object.assign(__ds_scope, { Eyebrow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Eyebrow.jsx", error: String((e && e.message) || e) }); }

// components/content/FeatureRow.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function dsAsset(path) {
  if (!path || /^(?:[a-z]+:|\/|\.)/i.test(path)) return path;
  const s = Array.from(document.querySelectorAll("script[src]")).map(n => n.src).find(u => /_ds_bundle\.js(\?|#|$)/.test(u));
  return (s ? s.replace(/_ds_bundle\.js.*$/, "") : "") + path;
}
function notch(cut, corner) {
  const tr = corner === "tr" ? cut : 0,
    tl = corner === "tl" ? cut : 0;
  const br = corner === "br" ? cut : 0,
    bl = corner === "bl" ? cut : 0;
  return `polygon(0 ${tl}px,${tl}px 0,calc(100% - ${tr}px) 0,100% ${tr}px,100% calc(100% - ${br}px),calc(100% - ${br}px) 100%,${bl}px 100%,0 calc(100% - ${bl}px))`;
}
const inset = (cut, pad) => Math.max(0, Math.round(cut - (2 - Math.SQRT2) * pad));
const ROW_TONES = {
  mint: "var(--surface-mint)",
  paper: "var(--surface-page)",
  sunken: "var(--surface-sunken)"
};

/** Wide notched panel: product plate on one side, eyebrow / title / copy / link on the other. */
function FeatureRow({
  eyebrow,
  title,
  body,
  image,
  imageAlt = "",
  linkLabel = "Leer más",
  href = "#",
  onClick,
  tone = "mint",
  cut = 60,
  corner = "bl",
  reverse = false,
  fit = "contain",
  minHeight = 420,
  style,
  ...rest
}) {
  const media = /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--white)",
      padding: fit === "cover" ? 0 : 26,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      overflow: "hidden",
      clipPath: corner[1] === "l" === !reverse ? notch(inset(cut, 22), corner) : undefined
    }
  }, image ? /*#__PURE__*/React.createElement("img", {
    src: dsAsset(image),
    alt: imageAlt,
    style: {
      display: "block",
      width: "100%",
      height: "100%",
      objectFit: fit
    }
  }) : /*#__PURE__*/React.createElement("div", {
    style: {
      width: "100%",
      aspectRatio: "1",
      background: "var(--surface-sunken)"
    }
  }));
  const copy = /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "34px 40px 30px",
      display: "flex",
      flexDirection: "column",
      gap: 16
    }
  }, eyebrow && /*#__PURE__*/React.createElement(__ds_scope.Eyebrow, null, eyebrow), title && /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      color: "var(--text-strong)",
      fontFamily: "var(--font-display)",
      fontWeight: 700,
      fontSize: "var(--fs-title)",
      lineHeight: 1.12,
      letterSpacing: "var(--ls-display)",
      textTransform: "uppercase"
    }
  }, title), body && /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      maxWidth: 560,
      color: "var(--grey-600)",
      fontSize: "var(--fs-body)",
      lineHeight: 1.55
    }
  }, body), /*#__PURE__*/React.createElement(__ds_scope.ArrowLink, {
    href: href,
    onClick: onClick,
    size: "sm",
    tone: "accent",
    style: {
      marginTop: "auto",
      paddingTop: 24,
      alignSelf: "start"
    }
  }, linkLabel));
  return /*#__PURE__*/React.createElement("div", _extends({}, rest, {
    style: {
      background: "var(--border-strong)",
      clipPath: notch(cut, corner),
      ...style
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      margin: 1,
      minHeight,
      background: ROW_TONES[tone] || ROW_TONES.mint,
      clipPath: notch(cut - 1, corner),
      display: "grid",
      gridTemplateColumns: reverse ? "1fr minmax(0,46%)" : "minmax(0,46%) 1fr",
      gap: 0,
      padding: 22
    }
  }, reverse ? copy : media, reverse ? media : copy));
}
Object.assign(__ds_scope, { FeatureRow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/FeatureRow.jsx", error: String((e && e.message) || e) }); }

// components/content/NotchCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function dsAsset(path) {
  if (!path || /^(?:[a-z]+:|\/|\.)/i.test(path)) return path;
  const s = Array.from(document.querySelectorAll("script[src]")).map(n => n.src).find(u => /_ds_bundle\.js(\?|#|$)/.test(u));
  return (s ? s.replace(/_ds_bundle\.js.*$/, "") : "") + path;
}

/* A 45° notch drawn as a real outline: the hairline is the parent's background showing
   through a 1px inset copy of the same clip path. */
function notch(cut, corner) {
  const tr = corner === "tr" ? cut : 0,
    tl = corner === "tl" ? cut : 0;
  const br = corner === "br" ? cut : 0,
    bl = corner === "bl" ? cut : 0;
  return `polygon(0 ${tl}px,${tl}px 0,calc(100% - ${tr}px) 0,100% ${tr}px,100% calc(100% - ${br}px),calc(100% - ${br}px) 100%,${bl}px 100%,0 calc(100% - ${bl}px))`;
}
const inset = (cut, pad) => Math.max(0, Math.round(cut - (2 - Math.SQRT2) * pad));

/** Portrait photo card with a notched outline — the slide of the story carousel. */
function NotchCard({
  eyebrow,
  title,
  image,
  imageAlt = "",
  href,
  onClick,
  cut = 44,
  corner = "tr",
  imageHeight = 430,
  style,
  ...rest
}) {
  const [h, setH] = React.useState(false);
  const Tag = href || onClick ? "a" : "div";
  return /*#__PURE__*/React.createElement(Tag, _extends({}, rest, {
    href: href,
    onClick: onClick,
    onMouseEnter: () => setH(true),
    onMouseLeave: () => setH(false),
    style: {
      display: "block",
      textDecoration: "none",
      color: "inherit",
      background: "var(--border-strong)",
      clipPath: notch(cut, corner),
      cursor: href || onClick ? "pointer" : "default",
      ...style
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--surface-page)",
      clipPath: notch(cut - 1, corner),
      margin: 1,
      padding: 14,
      display: "grid",
      gap: 20
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: imageHeight,
      overflow: "hidden",
      clipPath: corner[0] === "t" ? notch(inset(cut, 14), corner) : undefined
    }
  }, image ? /*#__PURE__*/React.createElement("img", {
    src: dsAsset(image),
    alt: imageAlt,
    style: {
      display: "block",
      width: "100%",
      height: "100%",
      objectFit: "cover",
      transform: h ? "scale(1.04)" : "scale(1)",
      transition: "transform var(--dur-slow) var(--ease-mech)"
    }
  }) : /*#__PURE__*/React.createElement("div", {
    style: {
      width: "100%",
      height: "100%",
      background: "var(--ink-700)",
      backgroundImage: "var(--dot-grid-on-ink)",
      backgroundSize: "var(--dot-step) var(--dot-step)"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: 14,
      padding: "2px 6px 16px"
    }
  }, eyebrow && /*#__PURE__*/React.createElement(__ds_scope.Eyebrow, null, eyebrow), /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      color: h ? "var(--accent)" : "var(--text-strong)",
      fontFamily: "var(--font-display)",
      fontWeight: 700,
      fontSize: "var(--fs-title)",
      lineHeight: 1.08,
      letterSpacing: "var(--ls-display)",
      textTransform: "uppercase",
      transition: "var(--transition-color)"
    }
  }, title))));
}
Object.assign(__ds_scope, { NotchCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/NotchCard.jsx", error: String((e && e.message) || e) }); }

// components/core/Heading.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const HEADING_SIZES = {
  xl: "var(--fs-display-xl)",
  lg: "var(--fs-display-lg)",
  md: "var(--fs-display-md)",
  sm: "var(--fs-display-sm)"
};

/** The voice of the brand: wide, heavy, uppercase display type. */
function Heading({
  children,
  size = "lg",
  as = "h2",
  tone = "ink",
  align = "left",
  maxWidth,
  style,
  ...rest
}) {
  const Tag = as;
  return /*#__PURE__*/React.createElement(Tag, _extends({}, rest, {
    style: {
      margin: 0,
      maxWidth,
      color: tone === "onInk" ? "var(--text-on-ink)" : tone === "accent" ? "var(--text-accent)" : "var(--text-strong)",
      fontFamily: "var(--font-display)",
      fontWeight: 700,
      fontSize: HEADING_SIZES[size] || HEADING_SIZES.lg,
      lineHeight: "var(--lh-display)",
      letterSpacing: "var(--ls-display)",
      textTransform: "uppercase",
      textAlign: align,
      textWrap: "balance",
      ...style
    }
  }), children);
}
Object.assign(__ds_scope, { Heading });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Heading.jsx", error: String((e && e.message) || e) }); }

// components/core/HexButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const HEX = "M43.8127 34.8977L23.9996 45.7948L4.18652 34.8977V13.1033L23.9996 2.20605L43.8127 13.1033V34.8977Z";
const BEVEL = "M4.18652 34.897L23.9996 45.7941L43.8127 34.897L39.6519 32.3213L23.9996 40.8409L8.3473 32.3213L4.18652 34.897Z";
const ARROW = {
  prev: ["M22.0189 31.9255L14.0938 24.0003L22.0189 16.0752", "M14.0938 24H33.9068"],
  next: ["M25.9814 16.0752L33.9066 24.0003L25.9814 31.9255", "M33.9066 24H14.0938"]
};

/** Hexagonal carousel control, from the supplied vector: bevelled plate with a thin arrow. */
function HexButton({
  direction = "next",
  size = 48,
  label,
  disabled,
  onClick,
  style,
  ...rest
}) {
  const [h, setH] = React.useState(false);
  const active = h && !disabled;
  return /*#__PURE__*/React.createElement("button", _extends({}, rest, {
    onClick: onClick,
    disabled: disabled,
    "aria-label": label || (direction === "prev" ? "Anterior" : "Siguiente"),
    onMouseEnter: () => setH(true),
    onMouseLeave: () => setH(false),
    style: {
      display: "inline-flex",
      padding: 0,
      border: "none",
      background: "none",
      lineHeight: 0,
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? 0.4 : 1,
      transition: "var(--transition-color)",
      ...style
    }
  }), /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 48 48",
    width: size,
    height: size,
    fill: "none",
    style: {
      display: "block"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: HEX,
    fill: active ? "var(--accent)" : "var(--white)",
    style: {
      transition: "fill var(--dur-base) var(--ease-mech)"
    }
  }), /*#__PURE__*/React.createElement("path", {
    d: BEVEL,
    fill: active ? "var(--accent-press)" : "var(--surface-mint)",
    style: {
      transition: "fill var(--dur-base) var(--ease-mech)"
    }
  }), ARROW[direction].map(d => /*#__PURE__*/React.createElement("path", {
    key: d,
    d: d,
    stroke: active ? "var(--white)" : "var(--ink-800)",
    strokeWidth: "1.5",
    strokeMiterlimit: "10",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })), /*#__PURE__*/React.createElement("path", {
    d: HEX,
    stroke: "var(--ink-800)",
    strokeWidth: "1.5",
    strokeMiterlimit: "10",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })));
}
Object.assign(__ds_scope, { HexButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/HexButton.jsx", error: String((e && e.message) || e) }); }

// components/core/Icon.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CDN = "https://cdn.jsdelivr.net/npm/lucide-static@0.446.0/icons/";
const CACHE = {};

/** Lucide glyph fetched once and inlined, so it inherits currentColor like text. */
function Icon({
  name = "arrow-up-right",
  size = 20,
  style,
  ...rest
}) {
  const [markup, setMarkup] = React.useState(CACHE[name] || null);
  React.useEffect(() => {
    let alive = true;
    if (CACHE[name]) {
      setMarkup(CACHE[name]);
      return;
    }
    fetch(CDN + name + ".svg").then(r => r.ok ? r.text() : "").then(t => {
      if (!t) return;
      CACHE[name] = t.replace("<svg", '<svg style="width:100%;height:100%;display:block"');
      if (alive) setMarkup(CACHE[name]);
    }).catch(() => {});
    return () => {
      alive = false;
    };
  }, [name]);
  return /*#__PURE__*/React.createElement("span", _extends({
    "aria-hidden": "true"
  }, rest, {
    style: {
      display: "inline-flex",
      flex: "none",
      width: size,
      height: size,
      ...style
    },
    dangerouslySetInnerHTML: markup ? {
      __html: markup
    } : undefined
  }));
}
Object.assign(__ds_scope, { Icon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Icon.jsx", error: String((e && e.message) || e) }); }

// components/core/ScrollCue.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Quiet "scroll" affordance: label over a mouse glyph with a travelling wheel. */
function ScrollCue({
  label = "Scroll",
  tone = "ink",
  style,
  ...rest
}) {
  const color = tone === "onInk" ? "var(--grey-300)" : "var(--grey-500)";
  return /*#__PURE__*/React.createElement("div", _extends({}, rest, {
    style: {
      display: "grid",
      justifyItems: "center",
      gap: 10,
      ...style
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      color,
      fontSize: "13px",
      letterSpacing: "0.04em"
    }
  }, label), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      position: "relative",
      width: 22,
      height: 34,
      borderRadius: 11,
      border: "1.5px solid " + color,
      opacity: 0.9
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: "50%",
      top: 7,
      width: 1.5,
      height: 7,
      marginLeft: -0.75,
      background: color,
      borderRadius: 1
    }
  })));
}
Object.assign(__ds_scope, { ScrollCue });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/ScrollCue.jsx", error: String((e && e.message) || e) }); }

// components/core/Wordmark.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Resolve the design-system root from the loaded bundle, so logo files work from any page depth. */
function dsBase() {
  if (typeof document === "undefined") return "";
  const s = Array.from(document.querySelectorAll("script[src]")).map(n => n.src).find(u => /_ds_bundle\.js(\?|#|$)/.test(u));
  return s ? s.replace(/_ds_bundle\.js.*$/, "") : "";
}
const FILE = {
  wordmarkOnInk: "assets/logo-wordmark-white.png",
  wordmarkInk: "assets/logo-wordmark-navy.png",
  mark: "assets/logo-mark.png"
};

/* Badge geometry, from the supplied vector: a 173×55 ink plate with the bottom-left corner cut at 21.6px. */
const BADGE = {
  ratio: 173 / 55,
  cut: 21.6 / 55,
  padLeft: 19 / 173,
  padRight: 12 / 173
};

/** Brand lockup. Uses the supplied Rosso Maquinarias logo files. */
function Wordmark({
  name = "Rosso Maquinarias",
  descriptor = null,
  variant = "wordmark",
  size = 34,
  tone = "onInk",
  style,
  ...rest
}) {
  const color = tone === "onInk" ? "var(--text-on-ink)" : "var(--text-strong)";
  if (variant === "badge") {
    const cut = size * BADGE.cut;
    return /*#__PURE__*/React.createElement("span", _extends({}, rest, {
      style: {
        display: "flex",
        alignItems: "center",
        boxSizing: "border-box",
        width: size * BADGE.ratio,
        height: size,
        flexShrink: 0,
        padding: `0 ${size * BADGE.ratio * BADGE.padRight}px 0 ${size * BADGE.ratio * BADGE.padLeft}px`,
        background: "var(--surface-ink)",
        clipPath: `polygon(0 0,100% 0,100% 100%,${cut}px 100%,0 calc(100% - ${cut}px))`,
        ...style
      }
    }), /*#__PURE__*/React.createElement("img", {
      src: dsBase() + FILE.wordmarkOnInk,
      alt: name,
      style: {
        display: "block",
        width: "100%",
        height: "auto"
      }
    }));
  }
  const file = variant === "mark" ? FILE.mark : tone === "onInk" ? FILE.wordmarkOnInk : FILE.wordmarkInk;
  return /*#__PURE__*/React.createElement("span", _extends({}, rest, {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: size * 0.42,
      color,
      ...style
    }
  }), /*#__PURE__*/React.createElement("img", {
    src: dsBase() + file,
    alt: name,
    style: {
      display: "block",
      height: size,
      width: "auto"
    }
  }), descriptor && descriptor.length > 0 && /*#__PURE__*/React.createElement("span", {
    style: {
      display: "grid",
      gap: 1,
      borderLeft: "1px solid currentColor",
      paddingLeft: size * 0.36,
      fontFamily: "var(--font-display)",
      fontWeight: 700,
      fontSize: Math.max(9, size * 0.28),
      lineHeight: 1.12,
      letterSpacing: "0.06em",
      textTransform: "uppercase",
      opacity: 0.92
    }
  }, descriptor.map(d => /*#__PURE__*/React.createElement("span", {
    key: d
  }, d))));
}
Object.assign(__ds_scope, { Wordmark });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Wordmark.jsx", error: String((e && e.message) || e) }); }

// components/layout/DiagonalStripes.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** 45° stripe field used as a corner decoration on ink surfaces. Purely decorative. */
function DiagonalStripes({
  color = "var(--stripe-on-ink)",
  width = 78,
  gap = 78,
  angle = 45,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    "aria-hidden": "true"
  }, rest, {
    style: {
      backgroundImage: "repeating-linear-gradient(" + angle + "deg, transparent 0 " + gap + "px, " + color + " " + gap + "px " + (gap + width) + "px)",
      pointerEvents: "none",
      ...style
    }
  }));
}
Object.assign(__ds_scope, { DiagonalStripes });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/layout/DiagonalStripes.jsx", error: String((e && e.message) || e) }); }

// components/layout/Section.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const SECTION_TONES = {
  paper: {
    background: "var(--surface-page)",
    dots: "var(--dot-grid)",
    onInk: false
  },
  sunken: {
    background: "var(--surface-sunken)",
    dots: "var(--dot-grid)",
    onInk: false
  },
  mint: {
    background: "var(--surface-mint)",
    dots: "none",
    onInk: false
  },
  ink: {
    background: "var(--surface-ink)",
    dots: "var(--dot-grid-on-ink)",
    onInk: true
  }
};

/** Page section: dot-grid ground, standard container, optional eyebrow + display heading. */
function Section({
  children,
  eyebrow,
  heading,
  headingSize = "lg",
  tone = "paper",
  dots = true,
  pad = "var(--section-y)",
  aside,
  style,
  ...rest
}) {
  const t = SECTION_TONES[tone] || SECTION_TONES.paper;
  return /*#__PURE__*/React.createElement("section", _extends({}, rest, {
    style: {
      position: "relative",
      background: t.background,
      ...style
    }
  }), dots && t.dots !== "none" && /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    style: {
      position: "absolute",
      inset: 0,
      backgroundImage: t.dots,
      backgroundSize: "var(--dot-step) var(--dot-step)",
      pointerEvents: "none"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      maxWidth: "var(--container-max)",
      margin: "0 auto",
      padding: pad + " var(--container-gutter)"
    }
  }, (eyebrow || heading) && /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: 26,
      marginBottom: 56,
      gridTemplateColumns: aside ? "minmax(0,1.15fr) minmax(0,.85fr)" : "1fr",
      alignItems: "end"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: 26
    }
  }, eyebrow && /*#__PURE__*/React.createElement(__ds_scope.Eyebrow, {
    tone: t.onInk ? "onInk" : "accent"
  }, eyebrow), heading && /*#__PURE__*/React.createElement(__ds_scope.Heading, {
    size: headingSize,
    tone: t.onInk ? "onInk" : "ink"
  }, heading)), aside && /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: 22,
      justifyItems: "start",
      paddingBottom: 6
    }
  }, aside)), children));
}
Object.assign(__ds_scope, { Section });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/layout/Section.jsx", error: String((e && e.message) || e) }); }

// components/layout/SiteFooter.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Ink footer: statement headline, contact link, address, legal row and social glyphs. */
function SiteFooter({
  statement = ["MOVEMOS", "LO", "PESADO"],
  ctaLabel = "HABLEMOS",
  ctaHref = "#",
  address = {
    label: "Casa Central",
    lines: ["Ruta Nacional 9 Km 285", "Rosario, Santa Fe"]
  },
  phone = "+54 341 456-7890",
  legal = "© 2026 Rosso Maquinarias. Todos los derechos reservados.",
  links = ["Política de Privacidad", "Habilitaciones CNRT"],
  socials = ["facebook", "instagram", "linkedin", "mail"],
  style,
  ...rest
}) {
  const ICONS = {
    facebook: "facebook",
    instagram: "instagram",
    linkedin: "linkedin",
    mail: "mail",
    youtube: "youtube"
  };
  return /*#__PURE__*/React.createElement("footer", _extends({}, rest, {
    style: {
      position: "relative",
      overflow: "hidden",
      background: "var(--surface-ink)",
      color: "var(--text-on-ink)",
      clipPath: "polygon(0 0,calc(100% - 80px) 0,100% 80px,100% 100%,80px 100%,0 calc(100% - 80px))",
      ...style
    }
  }), /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    style: {
      position: "absolute",
      inset: 0,
      backgroundImage: "var(--dot-grid-on-ink)",
      backgroundSize: "var(--dot-step) var(--dot-step)"
    }
  }), /*#__PURE__*/React.createElement(__ds_scope.DiagonalStripes, {
    style: {
      position: "absolute",
      right: -60,
      bottom: -90,
      width: 720,
      height: 260
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      maxWidth: "var(--container-max)",
      margin: "0 auto",
      padding: "72px var(--container-gutter) 34px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "minmax(0,1fr) minmax(0,1fr)",
      gap: 40
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Heading, {
    size: "md",
    tone: "onInk",
    style: {
      maxWidth: 320
    }
  }, statement.map(l => /*#__PURE__*/React.createElement("span", {
    key: l,
    style: {
      display: "block"
    }
  }, l))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(__ds_scope.ArrowLink, {
    href: ctaHref,
    size: "lg",
    tone: "onInk"
  }, ctaLabel))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "minmax(0,1fr) minmax(0,1fr)",
      gap: 40,
      marginTop: 96,
      alignItems: "start"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: 26,
      justifyItems: "start"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Wordmark, {
    size: 40
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: 28
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.InfoBlock, {
    tone: "onInk",
    label: address.label,
    lines: address.lines
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--fs-body)"
    }
  }, phone))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexWrap: "wrap",
      alignItems: "center",
      justifyContent: "space-between",
      gap: 24,
      rowGap: 26,
      marginTop: 110
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexWrap: "wrap",
      alignItems: "center",
      gap: 34,
      rowGap: 10,
      maxWidth: "68%",
      fontSize: "var(--fs-body-sm)",
      color: "var(--text-on-ink)"
    }
  }, /*#__PURE__*/React.createElement("span", null, legal), links.map(l => /*#__PURE__*/React.createElement("a", {
    key: l,
    href: "#",
    style: {
      color: "inherit"
    }
  }, l))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 28
    }
  }, socials.map(s => /*#__PURE__*/React.createElement("a", {
    key: s,
    href: "#",
    "aria-label": s,
    style: {
      color: "var(--white)",
      display: "inline-flex"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: ICONS[s] || s,
    size: 24
  })))))));
}
Object.assign(__ds_scope, { SiteFooter });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/layout/SiteFooter.jsx", error: String((e && e.message) || e) }); }

// components/navigation/SiteHeader.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const DEFAULT_LINKS = ["Servicios", "Flota", "Nosotros", "Contacto"];

/** Bare nav bar: badge logo left, centred link row, red CTA right. */
function SiteHeader({
  brand = "Rosso Maquinarias",
  descriptor = null,
  links = DEFAULT_LINKS,
  activeLink = null,
  menuLabel = null,
  ctaLabel = "CONTACTAR",
  onMenu,
  onCta,
  onBrand,
  onLink,
  tone = "ink",
  logoSize = 50,
  style,
  ...rest
}) {
  const onInk = tone === "onInk";
  const linkColor = onInk ? "var(--text-on-ink)" : "var(--text-strong)";
  const items = Array.isArray(links) ? links : [];
  return /*#__PURE__*/React.createElement("header", _extends({}, rest, {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: 32,
      minHeight: 64,
      ...style
    }
  }), /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: onBrand,
    "aria-label": brand,
    style: {
      display: "flex",
      alignItems: "center",
      textDecoration: "none",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Wordmark, {
    name: brand,
    variant: "badge",
    descriptor: descriptor,
    size: logoSize,
    tone: tone
  })), items.length > 0 && /*#__PURE__*/React.createElement("nav", {
    style: {
      flex: 1,
      display: "flex",
      alignItems: "center",
      gap: 30,
      flexWrap: "wrap",
      justifyContent: "center"
    }
  }, items.map((label, i) => {
    const active = activeLink === label;
    return /*#__PURE__*/React.createElement(NavLink, {
      key: label + i,
      label: label,
      color: linkColor,
      active: active,
      onClick: onLink && (() => onLink(label))
    });
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 22,
      flexShrink: 0
    }
  }, menuLabel && /*#__PURE__*/React.createElement("button", {
    onClick: onMenu,
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 10,
      padding: "10px 4px",
      background: "none",
      border: "none",
      cursor: "pointer",
      color: linkColor,
      fontFamily: "var(--font-display)",
      fontWeight: 700,
      fontSize: "var(--fs-nav)",
      letterSpacing: "var(--ls-nav)",
      textTransform: "uppercase"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "align-left",
    size: 20
  }), menuLabel), /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: "solid",
    size: "md",
    onClick: onCta,
    style: {
      padding: "16px 30px",
      fontSize: "17px",
      borderRadius: 6
    }
  }, ctaLabel)));
}
function NavLink({
  label,
  color,
  active,
  onClick
}) {
  const [h, setH] = React.useState(false);
  return /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: onClick,
    onMouseEnter: () => setH(true),
    onMouseLeave: () => setH(false),
    style: {
      color: active || h ? "var(--accent)" : color,
      textDecoration: "none",
      fontFamily: "var(--font-display)",
      fontWeight: 700,
      fontSize: "13px",
      letterSpacing: "0.07em",
      textTransform: "uppercase",
      transition: "var(--transition-color)",
      whiteSpace: "nowrap"
    }
  }, label);
}
Object.assign(__ds_scope, { SiteHeader });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/SiteHeader.jsx", error: String((e && e.message) || e) }); }

// components/navigation/TabNav.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Oversized inline tab switcher — active tab is ink, the rest recede to cool grey. */
function TabNav({
  items = [],
  value,
  onChange,
  size = 26,
  style,
  ...rest
}) {
  const active = value ?? (items[0] && (items[0].id || items[0]));
  return /*#__PURE__*/React.createElement("div", _extends({
    role: "tablist"
  }, rest, {
    style: {
      display: "flex",
      flexWrap: "wrap",
      gap: 34,
      ...style
    }
  }), items.map(raw => {
    const it = typeof raw === "string" ? {
      id: raw,
      label: raw
    } : raw;
    const on = it.id === active;
    return /*#__PURE__*/React.createElement("button", {
      key: it.id,
      role: "tab",
      "aria-selected": on,
      onClick: () => onChange && onChange(it.id),
      style: {
        background: "none",
        border: "none",
        padding: "2px 0",
        cursor: "pointer",
        color: on ? "var(--text-strong)" : "var(--grey-300)",
        fontFamily: "var(--font-display)",
        fontWeight: 700,
        fontSize: size,
        lineHeight: 1.1,
        letterSpacing: "var(--ls-display)",
        textTransform: "uppercase",
        transition: "var(--transition-color)"
      },
      onMouseEnter: e => {
        if (!on) e.currentTarget.style.color = "var(--grey-500)";
      },
      onMouseLeave: e => {
        if (!on) e.currentTarget.style.color = "var(--grey-300)";
      }
    }, it.label);
  }));
}
Object.assign(__ds_scope, { TabNav });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/TabNav.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/WebHero.jsx
try { (() => {
function dsAsset(path) {
  if (!path || /^(?:[a-z]+:|\/|\.)/i.test(path)) return path;
  const s = Array.from(document.querySelectorAll("script[src]")).map(n => n.src).find(u => /_ds_bundle\.js(\?|#|$)/.test(u));
  return (s ? s.replace(/_ds_bundle\.js.*$/, "") : "") + path;
}

/** Light hero: bare nav, display headline top-left, full-bleed photo on the ground line. */
function WebHero({
  onNav,
  onMenu,
  title = "Levantamos la industria",
  copy = "Movemos, izamos y montamos los equipos que sostienen la obra civil y el agro.",
  image = "assets/photos/toy-hero.png",
  imageAlt = "Carretón Rosso Maquinarias con pulverizadora y grúa de apoyo",
  stat = "+10",
  statLabel = "Años de experiencia",
  statImage = "assets/photos/soldador.png",
  imageLift = 300,
  imageDrop = "11%"
}) {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      position: "relative",
      background: "var(--surface-page)",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    style: {
      position: "absolute",
      inset: 0,
      backgroundImage: "var(--dot-grid)",
      backgroundSize: "var(--dot-step) var(--dot-step)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      zIndex: 2,
      maxWidth: "var(--container-max)",
      margin: "0 auto",
      padding: "26px var(--container-gutter) 0"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.SiteHeader, {
    tone: "ink",
    onMenu: onMenu,
    onLink: () => onNav("servicios"),
    onCta: () => onNav("contacto"),
    onBrand: () => onNav("home")
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: 22,
      maxWidth: 620,
      marginTop: 24
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Heading, {
    as: "h1",
    size: "xl",
    tone: "ink",
    style: {
      lineHeight: 0.94
    }
  }, title), copy && /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      maxWidth: 400,
      color: "var(--grey-600)",
      fontSize: "var(--fs-body-lg)",
      lineHeight: 1.5
    }
  }, copy))), /*#__PURE__*/React.createElement("img", {
    src: dsAsset(image),
    alt: imageAlt,
    style: {
      display: "block",
      position: "relative",
      zIndex: 1,
      width: "100%",
      height: "auto",
      margin: `-${imageLift}px 0 -${imageDrop}`,
      pointerEvents: "none",
      mixBlendMode: "multiply"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      right: 0,
      bottom: 44,
      zIndex: 3,
      maxWidth: "var(--container-max)",
      margin: "0 auto",
      padding: "0 var(--container-gutter)",
      display: "flex",
      justifyContent: "flex-end",
      pointerEvents: "none"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.ScrollCue, {
    style: {
      position: "absolute",
      left: "50%",
      bottom: 10,
      transform: "translateX(-50%)"
    }
  }), /*#__PURE__*/React.createElement(__ds_scope.StatVideoCard, {
    value: stat,
    label: statLabel,
    image: statImage,
    onPlay: () => onNav && onNav("nosotros"),
    style: {
      pointerEvents: "auto"
    }
  })));
}
Object.assign(__ds_scope, { WebHero });
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/WebHero.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/WebContact.jsx
try { (() => {
/** Contact: quote form on paper, contact details on ink. */
function WebContact({
  onNav,
  onMenu
}) {
  const [sent, setSent] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(__ds_scope.WebHero, {
    tall: false,
    onNav: onNav,
    onMenu: onMenu,
    eyebrow: "Contacto",
    title: "Contanos qu\xE9 hay que mover",
    copy: "Respondemos cotizaciones en menos de 24 horas h\xE1biles."
  }), /*#__PURE__*/React.createElement(__ds_scope.Section, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "minmax(0,1.1fr) minmax(0,.9fr)",
      gap: 70,
      alignItems: "start"
    }
  }, sent ? /*#__PURE__*/React.createElement(__ds_scope.ClipPanel, {
    tone: "mint",
    corners: ["tr"],
    cut: 44,
    style: {
      padding: "44px 40px",
      display: "grid",
      gap: 18,
      justifyItems: "start"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "check",
    size: 34
  }), /*#__PURE__*/React.createElement(__ds_scope.Heading, {
    size: "sm"
  }, "Pedido recibido"), /*#__PURE__*/React.createElement("p", {
    style: {
      maxWidth: 420,
      color: "var(--text-body)"
    }
  }, "Un coordinador de operaciones te escribe dentro de las pr\xF3ximas 24 horas h\xE1biles con la cotizaci\xF3n y las fechas disponibles."), /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: "outline",
    onClick: () => setSent(false)
  }, "Cargar otro pedido")) : /*#__PURE__*/React.createElement("form", {
    onSubmit: e => {
      e.preventDefault();
      setSent(true);
    },
    style: {
      display: "grid",
      gap: 22
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 22
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.TextField, {
    label: "Nombre",
    placeholder: "Nombre y apellido",
    required: true
  }), /*#__PURE__*/React.createElement(__ds_scope.TextField, {
    label: "Empresa",
    placeholder: "Raz\xF3n social"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 22
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.TextField, {
    label: "Tel\xE9fono",
    placeholder: "+54 341 ...",
    required: true
  }), /*#__PURE__*/React.createElement(__ds_scope.TextField, {
    label: "Email",
    type: "email",
    placeholder: "nombre@empresa.com",
    required: true
  })), /*#__PURE__*/React.createElement(__ds_scope.TextField, {
    label: "Qu\xE9 necesit\xE1s mover",
    rows: 4,
    placeholder: "Tipo de equipo, peso aproximado, origen y destino, fecha estimada.",
    required: true
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 22,
      marginTop: 4
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: "solid",
    size: "lg",
    cut: true,
    type: "submit"
  }, "Pedir cotizaci\xF3n"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--fs-body-sm)",
      color: "var(--text-muted)"
    }
  }, "o llamanos al +54 341 456-7890"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      background: "var(--surface-ink)",
      color: "var(--text-on-ink)",
      padding: "44px 40px",
      overflow: "hidden",
      clipPath: "polygon(0 0,calc(100% - 44px) 0,100% 44px,100% 100%,0 100%)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    style: {
      position: "absolute",
      inset: 0,
      backgroundImage: "var(--dot-grid-on-ink)",
      backgroundSize: "var(--dot-step) var(--dot-step)"
    }
  }), /*#__PURE__*/React.createElement(__ds_scope.DiagonalStripes, {
    style: {
      position: "absolute",
      right: -40,
      bottom: -60,
      width: 420,
      height: 200
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "grid",
      gap: 30
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Heading, {
    size: "sm",
    tone: "onInk"
  }, "Operaciones"), /*#__PURE__*/React.createElement(__ds_scope.InfoBlock, {
    tone: "onInk",
    label: "Casa Central",
    lines: ["Ruta Nacional 9 Km 285", "Rosario, Santa Fe (S2000)"]
  }), /*#__PURE__*/React.createElement(__ds_scope.InfoBlock, {
    tone: "onInk",
    label: "Guardia 24/7",
    lines: ["+54 341 456-7890", "operaciones@rossomaquinarias.com.ar"]
  }), /*#__PURE__*/React.createElement(__ds_scope.InfoBlock, {
    tone: "onInk",
    label: "Horario administrativo",
    lines: ["Lunes a viernes, 8 a 18 h", "Sábados, 8 a 12 h"]
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 20,
      marginTop: 6
    }
  }, ["facebook", "instagram", "linkedin", "mail"].map(s => /*#__PURE__*/React.createElement("a", {
    key: s,
    href: "#",
    "aria-label": s,
    style: {
      color: "#fff",
      display: "inline-flex"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: s,
    size: 22
  })))))))), /*#__PURE__*/React.createElement(__ds_scope.SiteFooter, null));
}
Object.assign(__ds_scope, { WebContact });
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/WebContact.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/WebMenu.jsx
try { (() => {
/** Full-screen ink menu overlay opened from the header. */
function WebMenu({
  open,
  onClose,
  onNav,
  current
}) {
  if (!open) return null;
  const items = [["home", "Inicio"], ["servicios", "Servicios"], ["flota", "Flota"], ["contacto", "Contacto"]];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "fixed",
      inset: 0,
      zIndex: 60,
      background: "var(--surface-ink)",
      color: "var(--text-on-ink)",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    style: {
      position: "absolute",
      inset: 0,
      backgroundImage: "var(--dot-grid-on-ink)",
      backgroundSize: "var(--dot-step) var(--dot-step)"
    }
  }), /*#__PURE__*/React.createElement(__ds_scope.DiagonalStripes, {
    style: {
      position: "absolute",
      right: -60,
      bottom: -80,
      width: 800,
      height: 320
    }
  }), /*#__PURE__*/React.createElement(__ds_scope.CornerClose, {
    onClick: onClose,
    size: 100,
    style: {
      position: "absolute",
      right: 0,
      top: 0,
      zIndex: 2
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      maxWidth: "var(--container-max)",
      margin: "0 auto",
      padding: "40px var(--container-gutter)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Wordmark, {
    size: 32
  })), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: "grid",
      gap: 10,
      marginTop: 90
    }
  }, items.map(([id, label]) => /*#__PURE__*/React.createElement("button", {
    key: id,
    onClick: () => {
      onNav(id);
      onClose();
    },
    style: {
      background: "none",
      border: "none",
      padding: "6px 0",
      textAlign: "left",
      cursor: "pointer",
      color: current === id ? "var(--red-500)" : "#fff",
      fontFamily: "var(--font-display)",
      fontWeight: 700,
      fontSize: 62,
      lineHeight: 1.05,
      textTransform: "uppercase"
    }
  }, label))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 64,
      marginTop: 90
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.InfoBlock, {
    tone: "onInk",
    label: "Casa Central",
    lines: ["Ruta Nacional 9 Km 285", "Rosario, Santa Fe"]
  }), /*#__PURE__*/React.createElement(__ds_scope.InfoBlock, {
    tone: "onInk",
    label: "Guardia 24/7",
    lines: ["+54 341 456-7890", "operaciones@rossomaquinarias.com.ar"]
  }))));
}
Object.assign(__ds_scope, { WebMenu });
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/WebMenu.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/webData.js
try { (() => {
const SERVICES = [{
  id: "transporte",
  label: "Transporte",
  icon: "truck",
  title: "Transporte de maquinaria agrícola y pesada",
  copy: "Trasladamos cosechadoras, tractores, pulverizadoras y equipo vial en todo el país. Carretones de 3 a 6 ejes, escoltas y permisos de circulación gestionados por nosotros. Cada viaje sale con seguro de carga y seguimiento satelital.",
  specs: [["Capacidad", "hasta 80 t"], ["Ancho útil", "3,20 m"], ["Cobertura", "Todo el país"]]
}, {
  id: "montajes",
  label: "Montajes",
  icon: "wrench",
  title: "Montajes industriales llave en mano",
  copy: "Posicionamos y montamos líneas completas dentro de planta: silos, cintas, prensas y estructuras metálicas. Trabajamos con plan de izaje firmado, personal habilitado en altura y coordinación con el área de seguridad del cliente.",
  specs: [["Plan de izaje", "Incluido"], ["Personal", "Habilitado altura"], ["Paradas", "Nocturnas y fines de semana"]]
}, {
  id: "gruas",
  label: "Grúas",
  icon: "construction",
  title: "Servicio de grúa hidráulica",
  copy: "Grúas telescópicas de 25 a 120 toneladas con operadores propios. Resolvemos izajes puntuales, recambio de equipos y rescate de maquinaria en campo, con estudio de suelo previo cuando el terreno lo exige.",
  specs: [["Capacidad", "25 – 120 t"], ["Pluma", "hasta 62 m"], ["Disponibilidad", "24 / 7"]]
}, {
  id: "autoelevadores",
  label: "Autoelevadores",
  icon: "forklift",
  title: "Servicio de autoelevador",
  copy: "Autoelevadores de 2,5 a 16 toneladas para carga, descarga y movimiento interno de mercadería. Alquiler por jornada, por mes o con operador incluido, en depósito propio o en las instalaciones del cliente.",
  specs: [["Capacidad", "2,5 – 16 t"], ["Modalidad", "Con o sin operador"], ["Mínimo", "Media jornada"]]
}];
const FLEET = [{
  name: "Carretón 4 ejes",
  specs: [["Carga", "45 t"], ["Piso", "Rebajado"], ["Ejes", "4 + dolly"]]
}, {
  name: "Carretón extensible",
  specs: [["Carga", "60 t"], ["Largo", "13 – 21 m"], ["Ejes", "6"]]
}, {
  name: "Grúa telescópica 70 t",
  specs: [["Pluma", "48 m"], ["Plumín", "16 m"], ["Contrapeso", "18 t"]]
}, {
  name: "Autoelevador 7 t",
  specs: [["Torre", "Triplex 4,8 m"], ["Combustible", "Diésel"], ["Uñas", "1,50 m"]]
}];
const STORIES = [{
  title: "Silo de 90 toneladas, sin cortar la ruta",
  excerpt: "Cómo movimos un silo entero de Venado Tuerto a Pergamino en una sola noche."
}, {
  title: "Montaje de una línea de molienda",
  excerpt: "Ocho semanas de planificación, once izajes y una parada de planta de 36 horas."
}, {
  title: "Rescate de una cosechadora en campo",
  excerpt: "Terreno anegado, 18 toneladas y una ventana de seis horas antes de la lluvia."
}];
const STATS = [["28", "años moviendo carga pesada"], ["140", "equipos trasladados por mes"], ["24/7", "guardia operativa"], ["100%", "flota propia y habilitada"]];
Object.assign(__ds_scope, { SERVICES, FLEET, STORIES, STATS });
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/webData.js", error: String((e && e.message) || e) }); }

// ui_kits/website/WebFleet.jsx
try { (() => {
/** Fleet: equipment cards with mono spec tables, plus a stories rail. */
function WebFleet({
  onNav,
  onMenu
}) {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(__ds_scope.WebHero, {
    tall: false,
    onNav: onNav,
    onMenu: onMenu,
    eyebrow: "Flota",
    title: "Equipo propio, no tercerizado",
    copy: "Cada unidad con mantenimiento programado, seguro de carga y seguimiento satelital."
  }), /*#__PURE__*/React.createElement(__ds_scope.Section, {
    eyebrow: "Unidades",
    heading: "Lo que sale del galp\xF3n"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(2,1fr)",
      gap: 30
    }
  }, __ds_scope.FLEET.map(u => /*#__PURE__*/React.createElement("div", {
    key: u.name,
    style: {
      border: "1px solid var(--border-hairline)",
      display: "grid",
      gridTemplateColumns: "180px minmax(0,1fr)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      background: "linear-gradient(160deg,var(--ink-600),var(--ink-900))"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      backgroundImage: "var(--dot-grid-on-ink)",
      backgroundSize: "24px 24px"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 14,
      bottom: 12,
      fontFamily: "var(--font-display)",
      fontWeight: 700,
      fontSize: 11,
      letterSpacing: ".1em",
      textTransform: "uppercase",
      color: "rgba(255,255,255,.55)"
    }
  }, "Foto pendiente")), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "26px 26px 22px",
      display: "grid",
      gap: 16,
      alignContent: "start"
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      fontFamily: "var(--font-display)",
      fontWeight: 700,
      fontSize: 20,
      lineHeight: 1.15,
      textTransform: "uppercase"
    }
  }, u.name), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: 9
    }
  }, u.specs.map(([k, v]) => /*#__PURE__*/React.createElement("div", {
    key: k,
    style: {
      display: "flex",
      justifyContent: "space-between",
      gap: 14,
      fontSize: "var(--fs-body-sm)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--text-muted)"
    }
  }, k), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontWeight: 600
    }
  }, v)))), /*#__PURE__*/React.createElement(__ds_scope.ArrowLink, {
    size: "sm",
    href: "#",
    onClick: e => {
      e.preventDefault();
      onNav("contacto");
    }
  }, "Reservar")))))), /*#__PURE__*/React.createElement(__ds_scope.Section, {
    tone: "mint",
    pad: "var(--section-y-sm)",
    eyebrow: "Trabajos",
    headingSize: "md",
    heading: "En obra"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3,1fr)",
      gap: 30
    }
  }, __ds_scope.STORIES.map(s => /*#__PURE__*/React.createElement(__ds_scope.MediaCard, {
    key: s.title,
    height: 430,
    panelTone: "paper",
    title: s.title,
    excerpt: s.excerpt,
    linkLabel: "Leer m\xE1s"
  })))), /*#__PURE__*/React.createElement(__ds_scope.SiteFooter, null));
}
Object.assign(__ds_scope, { WebFleet });
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/WebFleet.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/WebServiceTabs.jsx
try { (() => {
/** Services section: oversized tabs switch the copy + spec strip in place. */
function WebServiceTabs({
  compact = false
}) {
  const [tab, setTab] = React.useState(__ds_scope.SERVICES[0].id);
  const s = __ds_scope.SERVICES.find(x => x.id === tab) || __ds_scope.SERVICES[0];
  return /*#__PURE__*/React.createElement(__ds_scope.Section, {
    eyebrow: "Nuestros servicios",
    heading: compact ? "Qué hacemos" : ["Movemos lo que", /*#__PURE__*/React.createElement("br", {
      key: "b"
    }), "nadie más mueve"],
    headingSize: compact ? "md" : "lg"
  }, /*#__PURE__*/React.createElement(__ds_scope.TabNav, {
    items: __ds_scope.SERVICES,
    value: tab,
    onChange: setTab,
    style: {
      marginTop: -14
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "minmax(0,1fr) 360px",
      gap: 64,
      marginTop: 46,
      alignItems: "start"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: 24,
      maxWidth: 640
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      fontFamily: "var(--font-display)",
      fontWeight: 700,
      fontSize: "var(--fs-display-sm)",
      lineHeight: 1.1,
      textTransform: "uppercase"
    }
  }, s.title), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "var(--fs-body)",
      color: "var(--text-body)"
    }
  }, s.copy), /*#__PURE__*/React.createElement(__ds_scope.ArrowLink, {
    href: "#"
  }, "Ver detalle del servicio")), /*#__PURE__*/React.createElement(__ds_scope.ClipPanel, {
    tone: "mint",
    corners: ["tr"],
    cut: 44,
    style: {
      padding: "30px 28px",
      display: "grid",
      gap: 20
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 10,
      fontFamily: "var(--font-display)",
      fontWeight: 700,
      fontSize: 13,
      letterSpacing: "var(--ls-eyebrow)",
      textTransform: "uppercase",
      color: "var(--text-muted)"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: s.icon,
    size: 16
  }), " Ficha t\xE9cnica"), s.specs.map(([k, v]) => /*#__PURE__*/React.createElement("div", {
    key: k,
    style: {
      display: "flex",
      justifyContent: "space-between",
      gap: 16,
      paddingBottom: 14,
      borderBottom: "1px solid rgba(32,42,51,.12)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--fs-body-sm)",
      color: "var(--text-muted)"
    }
  }, k), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: "var(--fs-body-sm)",
      fontWeight: 600
    }
  }, v))))));
}
Object.assign(__ds_scope, { WebServiceTabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/WebServiceTabs.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/WebHome.jsx
try { (() => {
/** Home: hero → services tabs → stats band → stories grid. */
function WebHome({
  onNav,
  onMenu
}) {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(__ds_scope.WebHero, {
    onNav: onNav,
    onMenu: onMenu,
    eyebrow: "Transporte y montaje industrial",
    title: /*#__PURE__*/React.createElement(React.Fragment, null, "Movemos lo que", /*#__PURE__*/React.createElement("br", null), "nadie m\xE1s mueve"),
    copy: "Transporte de maquinaria agr\xEDcola y pesada, montajes industriales, gr\xFAas y autoelevadores. Flota propia, operadores propios, 28 a\xF1os sobre la ruta."
  }), /*#__PURE__*/React.createElement(__ds_scope.WebServiceTabs, null), /*#__PURE__*/React.createElement(__ds_scope.Section, {
    tone: "ink",
    pad: "var(--section-y-sm)"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(4,1fr)",
      gap: 0
    }
  }, __ds_scope.STATS.map(([n, l], i) => /*#__PURE__*/React.createElement("div", {
    key: l,
    style: {
      padding: "6px 28px",
      borderLeft: i === 0 ? "none" : "1px solid var(--border-on-ink)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 700,
      fontSize: 54,
      lineHeight: 1,
      color: "#fff"
    }
  }, n), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 12,
      fontSize: "var(--fs-body-sm)",
      color: "var(--text-on-ink-muted)",
      maxWidth: 180
    }
  }, l))))), /*#__PURE__*/React.createElement(__ds_scope.Section, {
    eyebrow: "Trabajos",
    heading: /*#__PURE__*/React.createElement(React.Fragment, null, "Cada carga", /*#__PURE__*/React.createElement("br", null), "tiene su historia"),
    aside: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("p", {
      style: {
        maxWidth: 380,
        color: "var(--text-body)"
      }
    }, "Operativos reales contados por la gente que los planific\xF3. Rutas, permisos, izajes y lo que sali\xF3 distinto a lo previsto."), /*#__PURE__*/React.createElement(__ds_scope.ArrowLink, {
      href: "#",
      onClick: e => {
        e.preventDefault();
        onNav("flota");
      }
    }, "Ver todos"))
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3,1fr)",
      gap: 30
    }
  }, __ds_scope.STORIES.map(s => /*#__PURE__*/React.createElement(__ds_scope.MediaCard, {
    key: s.title,
    height: 520,
    title: s.title,
    excerpt: s.excerpt,
    linkLabel: "Leer m\xE1s"
  })))), /*#__PURE__*/React.createElement(__ds_scope.SiteFooter, {
    ctaHref: "#"
  }));
}
Object.assign(__ds_scope, { WebHome });
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/WebHome.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/WebServices.jsx
try { (() => {
/** Services index: short hero, tabbed detail, then the full four-service grid. */
function WebServices({
  onNav,
  onMenu
}) {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(__ds_scope.WebHero, {
    tall: false,
    onNav: onNav,
    onMenu: onMenu,
    eyebrow: "Servicios",
    title: "Cuatro formas de mover una planta",
    copy: "Del carret\xF3n al izaje final, con un solo interlocutor y un solo parte diario."
  }), /*#__PURE__*/React.createElement(__ds_scope.WebServiceTabs, {
    compact: true
  }), /*#__PURE__*/React.createElement(__ds_scope.Section, {
    tone: "sunken",
    pad: "var(--section-y-sm)"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(2,1fr)",
      gap: 26
    }
  }, __ds_scope.SERVICES.map(s => /*#__PURE__*/React.createElement("div", {
    key: s.id,
    style: {
      background: "var(--surface-page)",
      border: "1px solid var(--border-hairline)",
      padding: "34px 32px",
      display: "grid",
      gap: 18,
      alignContent: "start"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      width: 46,
      height: 46,
      alignItems: "center",
      justifyContent: "center",
      background: "var(--surface-mint)",
      color: "var(--ink-800)",
      clipPath: "polygon(0 0,calc(100% - 12px) 0,100% 12px,100% 100%,0 100%)"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: s.icon,
    size: 22
  })), /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      fontFamily: "var(--font-display)",
      fontWeight: 700,
      fontSize: "var(--fs-title)",
      lineHeight: 1.14,
      textTransform: "uppercase"
    }
  }, s.label), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "var(--fs-body-sm)",
      color: "var(--text-muted)"
    }
  }, s.copy.split(". ")[0], "."), /*#__PURE__*/React.createElement(__ds_scope.ArrowLink, {
    size: "sm",
    href: "#"
  }, "Consultar"))))), /*#__PURE__*/React.createElement(__ds_scope.SiteFooter, null));
}
Object.assign(__ds_scope, { WebServices });
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/WebServices.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/WebApp.jsx
try { (() => {
const SCREENS = {
  home: __ds_scope.WebHome,
  servicios: __ds_scope.WebServices,
  flota: __ds_scope.WebFleet,
  contacto: __ds_scope.WebContact
};

/** Click-through recreation of the Rosso Maquinarias marketing site. */
function WebApp({
  initial = "home"
}) {
  const [screen, setScreen] = React.useState(initial);
  const [menu, setMenu] = React.useState(false);
  const Screen = SCREENS[screen] || __ds_scope.WebHome;
  const go = id => {
    setScreen(id);
    window.scrollTo({
      top: 0
    });
  };
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Screen, {
    onNav: go,
    onMenu: () => setMenu(true)
  }), /*#__PURE__*/React.createElement(__ds_scope.WebMenu, {
    open: menu,
    current: screen,
    onClose: () => setMenu(false),
    onNav: go
  }));
}
Object.assign(__ds_scope, { WebApp });
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/WebApp.jsx", error: String((e && e.message) || e) }); }

__ds_ns.FeatureRow = __ds_scope.FeatureRow;

__ds_ns.InfoBlock = __ds_scope.InfoBlock;

__ds_ns.MediaCard = __ds_scope.MediaCard;

__ds_ns.NotchCard = __ds_scope.NotchCard;

__ds_ns.StatVideoCard = __ds_scope.StatVideoCard;

__ds_ns.TextField = __ds_scope.TextField;

__ds_ns.ArrowLink = __ds_scope.ArrowLink;

__ds_ns.BrandGlyph = __ds_scope.BrandGlyph;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.ClipPanel = __ds_scope.ClipPanel;

__ds_ns.CornerClose = __ds_scope.CornerClose;

__ds_ns.Eyebrow = __ds_scope.Eyebrow;

__ds_ns.Heading = __ds_scope.Heading;

__ds_ns.HexButton = __ds_scope.HexButton;

__ds_ns.Icon = __ds_scope.Icon;

__ds_ns.ScrollCue = __ds_scope.ScrollCue;

__ds_ns.Wordmark = __ds_scope.Wordmark;

__ds_ns.DiagonalStripes = __ds_scope.DiagonalStripes;

__ds_ns.Section = __ds_scope.Section;

__ds_ns.SiteFooter = __ds_scope.SiteFooter;

__ds_ns.SiteHeader = __ds_scope.SiteHeader;

__ds_ns.TabNav = __ds_scope.TabNav;

__ds_ns.WebApp = __ds_scope.WebApp;

__ds_ns.WebContact = __ds_scope.WebContact;

__ds_ns.WebFleet = __ds_scope.WebFleet;

__ds_ns.WebHero = __ds_scope.WebHero;

__ds_ns.WebHome = __ds_scope.WebHome;

__ds_ns.WebMenu = __ds_scope.WebMenu;

__ds_ns.WebServiceTabs = __ds_scope.WebServiceTabs;

__ds_ns.WebServices = __ds_scope.WebServices;

__ds_ns.SERVICES = __ds_scope.SERVICES;

__ds_ns.FLEET = __ds_scope.FLEET;

__ds_ns.STORIES = __ds_scope.STORIES;

__ds_ns.STATS = __ds_scope.STATS;

})();
