# 📄 Resume Setup Guide

## Resume Download Feature - Complete Setup

Your portfolio now has an **enhanced Resume Download feature** with:
- ✅ Beautiful modal popup
- ✅ PDF & Word format support
- ✅ Online viewer
- ✅ Download tracking
- ✅ Print functionality

---

## 🚀 Quick Setup

### Step 1: Add Your Resume Files

Place your resume files in the `public` folder:

```
public/
├── resume.pdf        ← Your PDF resume (Required)
├── resume.docx       ← Your Word resume (Optional)
└── ...
```

### Step 2: Prepare Your Resume

**For PDF:**
- File name: `resume.pdf`
- Recommended size: Under 2MB
- ATS-friendly format (no images in text areas)
- Include contact info, skills, experience, education

**For Word (Optional):**
- File name: `resume.docx`
- Keep formatting simple
- Compatible with MS Word 2016+

---

## 📊 Features Included

### 1. **Resume Modal**
When users click "Download Resume" button, they see:
- Format selection (PDF or DOCX)
- Three action options:
  - 👁️ **View Online** - PDF viewer in modal
  - 💾 **Download** - Direct download in selected format
  - 🖨️ **Print** - Open in new tab for printing

### 2. **Download Tracking**
Automatic tracking of:
- Resume views
- Downloads (by format)
- Print actions
- Timestamps

**Analytics Events:**
```javascript
- resume_view    (when user views online)
- resume_download (when user downloads, includes format)
- resume_print   (when user opens print view)
```

### 3. **User Experience**
- Smooth animations with Framer Motion
- Responsive design (mobile-friendly)
- Dark mode support
- Format preview and selection
- ATS compatibility tip

---

## 🎨 Customization

### Update Resume Information

In `components/ResumeModal.js`, update:

```javascript
// Line 11: Download filename
link.download = `Your_Name_Resume.${format}`

// Line 79: Header text
<p className="text-sm text-gray-600 dark:text-gray-400">
  Your Name - Your Title
</p>

// Line 245: Footer info
<p className="text-xs text-gray-600 dark:text-gray-400 text-center">
  Last Updated: Month Year • Version X.X
</p>
```

### Change Modal Colors

Update gradient colors in the modal:
- `from-indigo-600` → Your primary color
- `via-purple-600` → Your secondary color  
- `to-pink-600` → Your accent color

---

## 📈 Analytics Setup (Optional)

### Google Analytics Integration

Already integrated! Just add Google Analytics to your site:

**In `app/layout.js`:**

```javascript
<Script
  src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"
  strategy="afterInteractive"
/>
<Script id="google-analytics" strategy="afterInteractive">
  {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'GA_MEASUREMENT_ID');
  `}
</Script>
```

Replace `GA_MEASUREMENT_ID` with your actual Google Analytics ID.

### Check Analytics Dashboard

After setup, view events in Google Analytics:
1. Go to **Events** section
2. Look for:
   - `resume_view`
   - `resume_download`
   - `resume_print`
3. Check event parameters for details

---

## 🔧 Troubleshooting

### Issue: PDF Not Loading

**Solution:**
1. Check file exists: `public/resume.pdf`
2. File name is exactly `resume.pdf` (lowercase)
3. File size is under 10MB
4. PDF is not password-protected

### Issue: Word Download Not Working

**Solution:**
1. Add Word file: `public/resume.docx`
2. Or hide Word option in modal (remove DOCX button)

### Issue: Viewer Not Showing PDF

**Browser Issue:**
- Some browsers block iframe PDF viewing
- Users can still download
- Alternative: Use PDF.js library for better support

### Issue: Download Not Starting

**Check:**
1. File path is correct (`/resume.pdf`)
2. Browser pop-up blocker is disabled
3. File permissions are correct

---

## 🎯 Best Practices

### Resume File Tips:

1. **Keep it Updated**
   - Update resume every 3-6 months
   - Add new skills and projects
   - Update version number in modal

2. **ATS Optimization**
   - Use standard fonts (Arial, Calibri, Times New Roman)
   - Include keywords from job descriptions
   - Simple formatting, no tables or images
   - Clear section headers

3. **File Size**
   - Keep PDF under 1-2MB
   - Compress if needed
   - Don't embed large images

4. **Multiple Versions**
   - Keep different versions for different roles
   - Update filename in modal accordingly
   - Example: `resume-frontend.pdf`, `resume-fullstack.pdf`

---

## 🚀 Advanced Features (Future Enhancements)

Want to add more features? Here are ideas:

1. **Version Selector**
   - Multiple resume versions
   - Dropdown to select (Frontend, Backend, Full Stack)

2. **QR Code**
   - Generate QR code for mobile download
   - Easy sharing

3. **Email Resume**
   - Send resume to user's email
   - Form with email input

4. **LinkedIn Integration**
   - Import from LinkedIn
   - Export to LinkedIn

5. **Resume Builder**
   - Edit resume online
   - Generate PDF dynamically

---

## 📝 Summary

Your Resume Download feature is now:
- ✅ **Professional** - Beautiful modal UI
- ✅ **Functional** - View, Download, Print options
- ✅ **Tracked** - Analytics integration
- ✅ **Optimized** - ATS-friendly tips
- ✅ **Responsive** - Works on all devices

Just add your `resume.pdf` file to the `public` folder and you're ready to go! 🎉

---

**Need Help?** Check the main README.md or create an issue.

**Made with ❤️ by Rohit Kumar**
