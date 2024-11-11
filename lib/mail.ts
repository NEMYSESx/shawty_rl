import nodemailer from "nodemailer";

// Configure Nodemailer transporter
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_PASS,
  },
});

// const domain = process.env.NEXT_PUBLIC_APP_URL;

// Send Verification Email
export const sendVerificationEmail = async (email: string, token: string) => {
  const mailOptions = {
    from: process.env.GMAIL_USER, // Sender address
    to: email, // Recipient
    subject: "Confirm your email",
    html: `<p>${token}</p>`,
  };

  try {
    await transporter.sendMail(mailOptions);
  } catch (error) {
    console.error("Error sending verification email:", error);
  }
};

// Send Password Reset Email
// export const sendPasswordResetEmail = async (email: string, token: string) => {
//   const resetLink = `${domain}/auth/new-password?token=${token}`;

//   const mailOptions = {
//     from: `"App Support" <${process.env.GMAIL_USER}>`, // Sender address
//     to: email, // Recipient
//     subject: "Reset your password",
//     html: `<p>Click <a href="${resetLink}">here</a> to reset your password.</p>`,
//   };

//   try {
//     await transporter.sendMail(mailOptions);
//     console.log("Password reset email sent successfully.");
//   } catch (error) {
//     console.error("Error sending password reset email:", error);
//   }
// };
