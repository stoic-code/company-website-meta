const NEXT_PUBLIC_EMAIL_JS_SERVICE_ID: string | undefined =
  process.env.NEXT_PUBLIC_EMAIL_JS_SERVICE_ID;

const NEXT_PUBLIC_EMAIL_JS_TEMPLATE_ID: string | undefined =
  process.env.NEXT_PUBLIC_EMAIL_JS_TEMPLATE_ID;

const NEXT_PUBLIC_EMAIL_JS_PUBLIC_KEY: string | undefined =
  process.env.NEXT_PUBLIC_EMAIL_JS_PUBLIC_KEY;

export function getServiceID(): string {
  if (
    !NEXT_PUBLIC_EMAIL_JS_SERVICE_ID ||
    NEXT_PUBLIC_EMAIL_JS_SERVICE_ID.length === 0
  ) {
    throw new Error("Emailjs Service ID not set in env.");
  }
  return NEXT_PUBLIC_EMAIL_JS_SERVICE_ID;
}

export function getTemplateId(): string {
  if (
    !NEXT_PUBLIC_EMAIL_JS_TEMPLATE_ID ||
    NEXT_PUBLIC_EMAIL_JS_TEMPLATE_ID.length === 0
  ) {
    throw new Error("Emailjs templated ID not set in env.");
  }
  return NEXT_PUBLIC_EMAIL_JS_TEMPLATE_ID;
}

export function getPublicKey(): string {
  if (
    !NEXT_PUBLIC_EMAIL_JS_PUBLIC_KEY ||
    NEXT_PUBLIC_EMAIL_JS_PUBLIC_KEY.length === 0
  ) {
    throw new Error("Emailjs public ID not set in env.");
  }
  return NEXT_PUBLIC_EMAIL_JS_PUBLIC_KEY;
}
