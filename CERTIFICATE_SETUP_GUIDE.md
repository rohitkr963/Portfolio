# 📜 Certificate Setup Guide

## Current Setup (Simple - No Images)

Currently, the Certificates section uses **icons only**. No images needed!

Just update the data in `components/Certificates.js`:

```javascript
{
  id: 1,
  title: 'Your Certificate Name',
  issuer: 'Issuing Organization',
  date: '2024',
  description: 'Brief description of what you learned',
  icon: FaCertificate,  // Can use FaCertificate, FaAward, or FaGraduationCap
  color: 'text-green-500',  // Icon color
  bgColor: 'bg-green-100 dark:bg-green-900'  // Background color
}
```

---

## If You Want to Add Certificate Images

### Option 1: Add Image Property
1. Upload certificate images to `public/certificates/` folder
2. Update the certificates array to include image property

### Option 2: Add Verification Links
Add a `link` property to each certificate:

```javascript
{
  id: 1,
  title: 'MongoDB Certificate',
  issuer: 'MongoDB University',
  date: '2024',
  description: 'Certification in MongoDB',
  icon: FaCertificate,
  color: 'text-green-500',
  bgColor: 'bg-green-100 dark:bg-green-900',
  link: 'https://university.mongodb.com/...',  // Add this
  credentialId: 'ABC123XYZ'  // Add this
}
```

---

## Current Status

✅ Working with icons only
✅ No images required
✅ Clean and professional look
✅ Fast loading

If you need to add images, let me know and I'll modify the component!
