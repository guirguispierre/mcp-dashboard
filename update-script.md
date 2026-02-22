# Automated Update Script

This document contains the systematic approach to update all integration HTML files.

## Batch Update Process

For each HTML file, perform these replacements:

### 1. Replace Stylesheet Link

**Find:**
```html
<link rel="stylesheet" href="style.css">
```

**Replace with:**
```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">
<link rel="stylesheet" href="integration-styles-minimal.css">
```

### 2. Remove Inline Style Block

**Remove entire `<style>` tag and its contents from head section**

### 3. Update Inline Styles in Body

#### Hero Section Border
**Find:** `border: 2px solid var(--success-color)`  
**Replace:** `border: 1px solid var(--gray-border)`

#### Section Title Colors
**Find:** `color: var(--success-color)`  
**Replace:** `color: var(--text-primary)`

#### Background Colors
**Find:** `background: var(--surface)`  
**Replace:** `background: var(--bg-card)`

**Find:** `background: var(--surface-light)`  
**Replace:** `background: var(--bg-card)`

#### Credit Section Borders
**Find:** `border-left: 4px solid var(--success-color)`  
**Replace:** `border: 1px solid var(--gray-border)`

#### Guide Card Headings
**Find:** `<h3 style="color: var(--success-color);">`  
**Replace:** `<h3>`

### 4. Files to Process

Apply above replacements to:
1. bart.html
2. ffmpeg.html
3. earnings-feed.html
4. last-fm.html
5. todoist.html
6. github.html
7. deepwiki.html
8. netlify.html
9. supabase.html
10. vercel.html

## Verification Script

After updates, verify each file has:
- ✅ Inter font imported
- ✅ integration-styles-minimal.css linked
- ✅ No inline `<style>` block in head
- ✅ No var(--success-color) references (except in CSS)
- ✅ No var(--surface) references
- ✅ No neon green color codes
- ✅ Credit sections use minimal borders

## CLI Commands (if using VS Code or similar)

```bash
# Find files with old stylesheet
grep -l 'style.css' *.html

# Find files with success-color references
grep -l 'var(--success-color)' *.html

# Count remaining instances
grep -c 'var(--success-color)' *.html
```

## Testing After Update

```bash
# Check all HTML files validate
for file in *.html; do
  echo "Checking $file..."
  # Add your HTML validator command here
done
```

---

**Note:** This is a reference document. Actual file updates should use the push_files function with complete file content.
