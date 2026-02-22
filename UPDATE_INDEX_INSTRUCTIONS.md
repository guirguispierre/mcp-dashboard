# Instructions for Updating index.html

## What Needs to Be Done

Remove all demo buttons from the integration cards in `index.html`. These are the buttons with `onclick="showDemo('...')"`.

## Find and Remove

Search for and delete ALL instances of this pattern (there are 11 total - one for each integration):

```html
                        <button class="btn btn-secondary" onclick="showDemo('integration-name-here')">
                            <span>▶️</span>
                        </button>
```

## Specific Lines to Remove

Remove these button elements from each integration card:

1. **GitHub** - Line ~xxx: `onclick="showDemo('github')"`
2. **Todoist** - Line ~xxx: `onclick="showDemo('todoist')"`
3. **Supabase** - Line ~xxx: `onclick="showDemo('supabase')"`
4. **Vercel** - Line ~xxx: `onclick="showDemo('vercel')"`
5. **Netlify** - Line ~xxx: `onclick="showDemo('netlify')"`
6. **BART** - Line ~xxx: `onclick="showDemo('bart')"`
7. **Last.fm** - Line ~xxx: `onclick="showDemo('lastfm')"`
8. **DeepWiki** - Line ~xxx: `onclick="showDemo('deepwiki')"`
9. **PDF Reader** - Line ~xxx: `onclick="showDemo('pdf-reader')"`
10. **Earnings Feed** - Line ~xxx: `onclick="showDemo('earnings')"`
11. **FFmpeg** - Line ~xxx: `onclick="showDemo('ffmpeg')"`

## Example Before and After

### BEFORE:
```html
                    <div class="card-actions">
                        <button class="btn btn-primary" onclick="window.location.href='github.html'">
                            <span>📚</span>
                            <span>View Guide</span>
                        </button>
                        <button class="btn btn-secondary" onclick="showDemo('github')">
                            <span>▶️</span>
                        </button>
                    </div>
```

### AFTER:
```html
                    <div class="card-actions">
                        <button class="btn btn-primary" onclick="window.location.href='github.html'">
                            <span>📚</span>
                            <span>View Guide</span>
                        </button>
                    </div>
```

## Search Pattern

Use your editor's find function to search for:
```
onclick="showDemo
```

This will find all 11 instances that need to be removed.

## Automated Approach (Recommended)

If you're comfortable with command-line tools, use this one-liner to remove all demo buttons:

```bash
# macOS/Linux
sed -i.bak '/<button class="btn btn-secondary" onclick="showDemo/,/<\/button>/d' index.html

# Or using perl for more precise removal
perl -i.bak -pe 'BEGIN{undef $/;} s/<button class="btn btn-secondary" onclick="showDemo\([^)]+\)">\s*<span>▶️<\/span>\s*<\/button>\s*//g' index.html
```

## Verification

After making changes, verify:
1. All `showDemo` references are removed from index.html
2. Each integration card still has the "View Guide" button
3. The `<div class="card-actions">` wrapper still exists for each card
4. The HTML structure is still valid (use an HTML validator if needed)

## Why We're Doing This

The `showDemo()` function has been removed from `script.js` because it was showing text alerts instead of actual video examples. The function is no longer needed, so these buttons are now broken and should be removed for a cleaner UI.

## File Size Note

The `index.html` file is too large (~50KB) to be edited via the GitHub API, which is why these manual instructions are provided instead of an automated commit.
