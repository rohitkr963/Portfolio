# EmailJS Setup Guide

## Step 1: Create EmailJS Account
1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up for a free account (100 emails/month free)
3. Verify your email

## Step 2: Add Email Service
1. Go to **Email Services** section in dashboard
2. Click **Add New Service**
3. Choose your email provider (Gmail recommended)
4. Follow the connection steps
5. **Copy the Service ID** (you'll need this)

## Step 3: Create Email Template
1. Go to **Email Templates** section
2. Click **Create New Template**
3. Use this template structure:

### Template Name: 
`portfolio_contact`

### Template Content:
```
Subject: {{subject}}

From: {{from_name}}
Email: {{from_email}}

Message:
{{message}}

---
This message was sent from your portfolio contact form.
```

### Template Variables to use:
- `{{from_name}}` - Sender's name
- `{{from_email}}` - Sender's email
- `{{subject}}` - Message subject
- `{{message}}` - Message body
- `{{to_name}}` - Your name (Rohit Kumar)

4. Set **To Email** to your email: `rohit737heye@gmail.com`
5. **Copy the Template ID** (you'll need this)

## Step 4: Get Public Key
1. Go to **Account** section in dashboard
2. Find **API Keys** tab
3. **Copy your Public Key**

## Step 5: Configure Environment Variables
1. Create a file named `.env.local` in your portfolio root folder
2. Add these lines (replace with your actual values):

```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=service_xxxxxxx
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=template_xxxxxxx
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=xxxxxxxxxxxxxxx
```

3. Save the file

## Step 6: Restart Dev Server
```bash
npm run dev
```

## Testing
1. Go to your contact form
2. Fill in all fields
3. Click "Send Message"
4. Check your email (rohit737heye@gmail.com)
5. You should receive the message!

## Troubleshooting
- **Error: EmailJS credentials not configured** - Check your .env.local file exists and has correct values
- **Email not received** - Check EmailJS dashboard logs, verify email template is correct
- **CORS errors** - Make sure you're using the public key, not private key

## Security Notes
- ✅ `.env.local` is automatically gitignored (secure)
- ✅ `NEXT_PUBLIC_` prefix makes them available in browser (required for EmailJS)
- ✅ Public key is safe to expose (it's meant for client-side)
- ❌ Never commit `.env.local` to git

## Free Tier Limits
- 200 emails/month (EmailJS free tier)
- Should be enough for a portfolio site

---
**Setup complete! Now visitors can send you messages directly from your portfolio.**
