"use client";

import { useEffect } from "react";

const formId = "6a958b5f9153bb81cb95b65c";
const rootClass = `ff-${formId}`;
const config = "eyJ0cmlnZ2VyIjp7Im1vZGUiOiJpbW1lZGlhdGVseSIsInZhbHVlIjowfSwib25TdWNjZXNzIjp7Im1vZGUiOiJtZXNzYWdlIiwibWVzc2FnZSI6IiIsInJlZGlyZWN0VXJsIjoiL3RoYW5rcyJ9LCJjb2kiOmZhbHNlLCJzaG93Rm9yUmV0dXJuVmlzaXRvcnMiOnRydWUsIm5vdGlmaWNhdGlvbiI6ZmFsc2UsImdkcHIiOnsiYWNjZXB0c01hcmtldGluZyI6ZmFsc2UsInByaXZhY3lQb2xpY3kiOnsiZW5hYmxlZCI6ZmFsc2UsIm1hbmRhdG9yeSI6ZmFsc2V9fSwidHJhY2tpbmdDb25maWciOnsibWV0YVBpeGVsSWQiOiIiLCJjb29raWVCYW5uZXJFbmFibGVkIjpmYWxzZSwiZ29vZ2xlQW5hbHl0aWNzSWQiOiIifX0=";

const fields = [
  ["firstName", "First name", "firstName::email"],
  ["email", "Email address", "email:firstName:fields.whatsappNumber"],
  ["fields.whatsappNumber", "WhatsApp number", "fields.whatsappNumber:email:fields.businessName"],
  ["fields.businessName", "Business name", "fields.businessName:fields.whatsappNumber:fields.websiteFacebookLink"],
  ["fields.websiteFacebookLink", "Website or Facebook link", "fields.websiteFacebookLink:fields.businessName:submit"],
] as const;

export function CTAForm() {
  useEffect(() => {
    const flodeskWindow = window as typeof window & { fd?: (...args: unknown[]) => void; FlodeskObject?: string };
    if (!flodeskWindow.fd) {
      flodeskWindow.FlodeskObject = "fd";
      flodeskWindow.fd = (...args: unknown[]) => {
        const queued = flodeskWindow.fd as unknown as { q?: unknown[][] };
        queued.q = queued.q || [];
        queued.q.push(args);
      };
      const firstScript = document.getElementsByTagName("script")[0];
      const version = `?v=${Math.floor(new Date().getTime() / (120 * 1000)) * 60}`;
      const moduleScript = document.createElement("script");
      moduleScript.async = true;
      moduleScript.type = "module";
      moduleScript.src = `https://assets.flodesk.com/universal.mjs${version}`;
      firstScript.parentNode?.insertBefore(moduleScript, firstScript);
      const fallbackScript = document.createElement("script");
      fallbackScript.async = true;
      fallbackScript.noModule = true;
      fallbackScript.src = `https://assets.flodesk.com/universal.js${version}`;
      firstScript.parentNode?.insertBefore(fallbackScript, firstScript);
    }
    flodeskWindow.fd?.("form:handle", { formId, rootEl: `.${rootClass}` });

    const root = document.querySelector<HTMLElement>(`.${rootClass}`);
    if (!root) return;
    let timer: ReturnType<typeof setTimeout> | undefined;
    const onSuccess = () => {
      if (root.dataset.ffStage === "success" && !timer) timer = setTimeout(() => window.location.assign("/thanks"), 1200);
    };
    const observer = new MutationObserver(onSuccess);
    observer.observe(root, { attributes: true, attributeFilter: ["data-ff-stage"] });
    return () => { observer.disconnect(); if (timer) clearTimeout(timer); };
  }, []);

  return <section id="consultation-form" className="scroll-mt-5 bg-mist px-5 py-16 sm:py-24"><div className="mx-auto grid max-w-5xl gap-10 lg:grid-cols-[.82fr_1.18fr] lg:items-center"><div className="text-center lg:text-left"><p className="text-sm font-bold uppercase tracking-[.16em] text-royal">Book the call</p><h2 className="mt-3 text-4xl font-extrabold tracking-[-.045em] text-navy sm:text-5xl">One-to-One Consultation</h2><p className="mt-5 text-lg leading-8 text-slate-600">Customized strategy for your business.</p></div><div className="flodesk-shell rounded-3xl bg-white shadow-royal"><div className={rootClass} data-ff-el="root" data-ff-version="3" data-ff-type="inline" data-ff-name="inlineNoImage" data-ff-stage="default"><div data-ff-el="config" data-ff-config={config} style={{ display: "none" }} /><div className={`${rootClass}__container`}><div className={`${rootClass}__wrapper`}><form className={`${rootClass}__form`} action="https://form.flodesk.com/forms/6a958b5f9153bb81cb95b65c/submit" method="post" data-ff-el="form"><div className={`${rootClass}__content fd-form-content`} data-ff-el="content"><p className="ff-required-note"><span aria-hidden="true">*</span> Required fields</p><div className={`${rootClass}__fields`} data-ff-el="fields">{fields.map(([name, placeholder, tab]) => <Field key={name} name={name} placeholder={placeholder} tab={tab} />)}<input type="text" maxLength={255} name="confirm_email_address" style={{ display: "none" }} /></div><div className={`${rootClass}__footer`} data-ff-el="footer"><button type="submit" className={`${rootClass}__button fd-btn`} data-ff-el="submit" data-ff-tab="submit">Book a call with me!</button></div></div><div className={`${rootClass}__success fd-form-success`} data-ff-el="success">You&apos;ve successfully signed up! Redirecting you now…</div><div className={`${rootClass}__error fd-form-error`} data-ff-el="error" /></form></div></div></div><p className="px-6 pb-7 text-center text-sm text-slate-500">We respect your privacy. No spam.</p></div></div></section>;
}

function Field({ name, placeholder, tab }: { name: string; placeholder: string; tab: string }) {
  const id = `${rootClass}-${name.replace(".", "-")}`;
  const isLinkField = name === "fields.websiteFacebookLink";
  return <div className={`${rootClass}__field fd-form-group`}><label htmlFor={id} className="ff-visible-label">{placeholder} <span aria-hidden="true">*</span></label><input id={id} className={`${rootClass}__control fd-form-control`} type="text" maxLength={255} name={name} placeholder={placeholder} data-ff-tab={tab} required aria-required="true" /><label htmlFor={id} className={`${rootClass}__label fd-form-label`}>{placeholder}</label>{isLinkField && <><p className="ff-link-help">Paste your website link (for example, <span>www.yourbusiness.com</span>) or your Facebook Page link. Open your page, copy the address from the browser, then paste it here.</p><p className="ff-field-required">This field is required.</p><p className="ff-no-link-help">Don&apos;t have a website or Facebook page? Type <strong>No</strong> in this field.</p></>}</div>;
}
