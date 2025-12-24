# Alternative Blog - Markdown Styling Approach

This is an alternative blog implementation that uses Markdown files directly and styles them with custom CSS.

## Structure

```
src/routes/altBlog/
├── +page.svelte          # Index page listing all sections
└── [section]/
    ├── +page.ts          # Loads markdown from /static/{section}.md
    └── +page.svelte      # Renders and styles the markdown
```

## How It Works

### 1. Markdown Files
- Place your `.md` files in the `/static` folder (e.g., `/static/1.1.md`)
- Files are accessible via the public URL path

### 2. Dynamic Routes
- Route pattern: `/altBlog/[section]`
- Example: `/altBlog/1.1` loads `/static/1.1.md`

### 3. Processing Pipeline
1. **+page.ts**: Fetches the markdown file from static folder
2. **+page.svelte**: 
   - Parses markdown using `marked` library
   - Sanitizes HTML using `DOMPurify` (security)
   - Renders with custom CSS styling

### 4. Styling
Custom CSS targets markdown elements:
- `h1`, `h2`, `h3` - Purple gradient headings with borders
- `p` - Readable paragraph spacing
- `ul`, `li` - Styled lists with custom markers
- `code`, `pre` - Dark code blocks
- `strong`, `em` - Highlighted text
- `blockquote` - Styled quotes

## Usage

### View a Section
Navigate to: `http://localhost:5173/altBlog/1.1`

### Add New Sections
1. Create a new `.md` file in `/static/` (e.g., `1.2.md`)
2. Add entry to the index page (`/altBlog/+page.svelte`)
3. Navigate to `/altBlog/1.2`

### Customize Styling
Edit the `<style>` block in `/src/routes/altBlog/[section]/+page.svelte`

## Dependencies

- **marked**: Markdown parser
- **dompurify**: XSS protection for rendered HTML
- **@types/dompurify**: TypeScript types

## Advantages Over Component-Based Approach

1. **Simplicity**: Just write markdown, no Svelte components needed
2. **Portability**: Content is in standard markdown format
3. **Easy Editing**: Use any markdown editor
4. **Consistent Styling**: All content gets the same professional look
5. **Fast Development**: Add new sections by just creating `.md` files

## Comparison

### Original Approach (`/blog/[parentId]/[childId]`)
- Uses custom Svelte components (`Formula`, `Quote`, `ToRemember`)
- More interactive and dynamic
- Requires writing Svelte code for each section
- Better for complex layouts and interactions

### Alternative Approach (`/altBlog/[section]`)
- Pure markdown content
- Automatically styled
- Faster content creation
- Better for text-heavy content
- Easier for non-developers to contribute

## Examples

See `/altBlog/1.1` for the styled version of the Functions section.
