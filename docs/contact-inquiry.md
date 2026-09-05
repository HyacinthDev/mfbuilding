# Contact inquiry integration

`src/sections/contact.tsx` uses the phone numbers, address and email already displayed in the site footer. No opening hours or response-time promises have been added.

Set `VITE_CONTACT_ENDPOINT` in the deployment environment and rebuild to enable submission. It is a public URL, never a secret. Without it, the form explicitly explains submissions are unavailable and offers working email/telephone alternatives.

The endpoint receives multipart POST fields: name, company, email, phone, subject, location, message and consent. Return a 2xx response only after accepting the inquiry; errors retain the entered data. The page stores no visitor data in local storage.

Before launch, add server-side validation, rate limiting/spam protection, safe email handling, appropriate CORS, and privacy/retention controls. Browser validation is not a security boundary. Confirm contact information and privacy disclosures with M&F.
