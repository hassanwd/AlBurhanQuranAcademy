// TODO: configure nodemailer or resend for email sending

export async function sendMail({
  to,
  subject,
  html,
}: {
  to: string;
  subject: string;
  html: string;
}) {
  // TODO: implement mail sending
  throw new Error("Mail not configured yet");
}
