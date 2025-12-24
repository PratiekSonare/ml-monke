# Dynamic Blog Routing Setup

## Overview
The blog now uses SvelteKit's dynamic routing to display content based on URL patterns like `/blog/1/1.1`.

## Structure

### 1. Dynamic Routes
- **Path**: `/src/routes/blog/[parentId]/[childId]/+page.svelte`
- **Pattern**: `/blog/{parentId}/{childId}` (e.g., `/blog/1/1.1`)
- The route automatically extracts `parentId` and `childId` from the URL

### 2. Content Data Store
- **File**: `/src/lib/data/blogContent.ts`
- Contains all blog section content organized by section ID
- Export `blogContentMap` that maps section IDs (like "1.1") to their content
- Add new sections by creating content objects and adding them to the map

### 3. Data Loading
- **File**: `/src/routes/blog/[parentId]/[childId]/+page.ts`
- Server-side loader that fetches content based on URL parameters
- Returns 404 if content not found

### 4. Navigation
- **Component**: `Syllabus.svelte`
- Each section title is now clickable
- Clicking navigates to the corresponding blog post URL

## Adding New Sections

1. **Create content in `blogContent.ts`**:
```typescript
export const content_1_2: BlogPageData = {
  parentTitle: "Your Section Title",
  sections: [
    {
      grandparentId: "1",
      parentId: "1.2",
      id: "1.2.1",
      title: "Subsection Title",
      sectionContent: [
        { content: "Your content here..." }
      ]
    }
  ]
};
```

2. **Add to the content map**:
```typescript
export const blogContentMap: Record<string, BlogPageData> = {
  "1.1": content_1_1,
  "1.2": content_1_2, // Add your new section
};
```

3. **Access via URL**: Navigate to `/blog/1/1.2`

## Content Types Supported

- **Regular content**: HTML strings
- **Formula**: Math formulas using KaTeX
- **Quote**: Styled quote blocks
- **ToRemember**: Highlighted important points

## Example URLs

- `/blog/1/1.1` - Functions section
- `/blog/1/1.2` - Scalars, Vectors & Matrices (when added)
- `/blog/2/2.1` - Machine Learning sections (when added)
