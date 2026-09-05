# Careers application

The careers page follows https://mfbuild.com/careers/: Now Hiring, four Hot Jobs, company culture and benefits, plus a new on-page form. Job summaries are maintained in `src/data/careers.ts`.

## Activate submissions

Set `VITE_CAREERS_APPLICATION_ENDPOINT` to an application intake endpoint in the deployment environment and rebuild. This value is public; never put credentials in it.

Until configured, the form explicitly says it is not accepting applications and disables submission. No applicant data is persisted in browser storage.

The form sends multipart POST data: `position`, `firstName`, `lastName`, `email`, `phone`, `location`, `experience`, optional `resume`, and `consent`. The endpoint must return a successful HTTP status only after accepting the application. Non-2xx responses preserve the form and show a retry message.

Before launch, implement server-side validation, attachment type and size checks (PDF/DOC/DOCX, 5 MB), malware scanning, rate limiting/spam prevention, secure storage, retention and access policies, and appropriate CORS if cross-origin. Review applicant privacy disclosures with M&F. Browser validation is not a security boundary.

Verify openings and benefits with M&F before publishing, since the source website can change.
