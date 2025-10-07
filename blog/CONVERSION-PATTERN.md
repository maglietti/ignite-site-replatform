# Blog Post Conversion Pattern: PUG to MDX

This document outlines the systematic approach used to convert Apache Ignite blog posts from PUG templates to Docusaurus MDX format.

## File Naming Convention

**Format:** `YYYY-MM-DD-slug.mdx`

Extract the date from the PUG frontmatter `date` field and create a URL-friendly slug from the title.

**Examples:**
- `whats-new-in-apache-ignite-3-0.pug` → `2025-02-24-whats-new-in-apache-ignite-3-0.mdx`
- `apache-ignite-2-9-released.pug` → `2020-11-05-apache-ignite-2-9-released.mdx`

## Frontmatter Conversion

### PUG Format
```yaml
---
title: "Post Title"
author: "Author Name"
date: 2025-02-24
tags:
    - apache
    - ignite
    - release
---
```

### MDX Format
```yaml
---
title: "Post Title"
authors: author_slug
date: 2025-02-24
tags: [apache, ignite, release]
---
```

**Key Changes:**
1. `author` → `authors` (references author key from `/blog/authors.yml`)
2. Tags array syntax: `tags: [tag1, tag2]` instead of YAML list
3. Author names converted to slugs (e.g., "Denis Magda" → `denis_magda`)

## Content Conversion Rules

### 1. Excerpt Delimiter
Replace PUG comment with MDX truncate marker:

**PUG:**
```pug
<!-- end -->
```

**MDX:**
```mdx
{/* truncate */}
```

### 2. Paragraphs
Remove `p` tags, use blank lines:

**PUG:**
```pug
p
  | Text content here.
p
  | More content.
```

**MDX:**
```markdown
Text content here.

More content.
```

### 3. Headings
Convert PUG headings to Markdown:

**PUG:**
```pug
h2 Heading Text
h3
  strong Subheading
```

**MDX:**
```markdown
## Heading Text

### Subheading
```

### 4. Links
**PUG:**
```pug
a(href='https://example.com' target='_blank') Link Text
```

**MDX:**
```markdown
[Link Text](https://example.com)
```

### 5. Lists
**PUG:**
```pug
ul
  li Item 1
  li
    | Item 2 with
    a(href='link') link
```

**MDX:**
```markdown
- Item 1
- Item 2 with [link](url)
```

### 6. Bold Text
**PUG:**
```pug
strong Bold text
b Bold text
```

**MDX:**
```markdown
**Bold text**
```

### 7. Inline Code
**PUG:**
```pug
code code snippet
```

**MDX:**
```markdown
`code snippet`
```

### 8. Images
**PUG:**
```pug
img(src='/img/blog/image.png' alt='Alt text' width='800')
```

**MDX:**
```markdown
![Alt text](/img/blog/image.png)
```

### 9. Special Characters
Replace HTML entities:
- `&apos;` → `'`
- `&quot;` → `"`
- `&ndash;` → `-`
- `&mdash;` → (remove, use period or comma per style guide)
- `&rsquo;` → `'`
- `&nbsp;` → space

### 10. External Link Posts
Some posts are just external links to longer articles:

**PUG:**
```pug
p
    | Brief description
P
    a(href='https://external-blog.com/post') Read More...
```

**MDX:**
```markdown
Brief description

[Read More...](https://external-blog.com/post)
```

## Author Profile Setup

Create entries in `/blog/authors.yml`:

```yaml
author_slug:
  name: Full Name
  title: Apache Ignite Committer
  url: https://github.com/username
  image_url: https://github.com/username.png
```

**Current Authors:**
- `denis_magda` - Denis Magda
- `stanislav_lukyanov` - Stanislav Lukyanov
- `pavel_tupitsyn` - Pavel Tupitsyn
- `maxim_muzafarov` - Maxim Muzafarov
- `nikita_amelchev` - Nikita Amelchev

## Tag Standardization

Create entries in `/blog/tags.yml` for common tags:

```yaml
tag-slug:
  label: Display Name
  permalink: /tag-slug
  description: Tag description
```

**Recommended Tags:**
- `release` - Release announcements
- `apache` - Apache-related content
- `ignite` - General Ignite updates
- `sql` - SQL features
- `performance` - Performance topics
- `in-memory` - In-memory computing
- `machine-learning` - ML features
- `spark` - Spark integration
- `dotnet` - .NET platform
- `security` - Security updates
- `community` - Community news
- `meetup` - Events and meetups

## Conversion Workflow

1. **Read source PUG file** to understand structure
2. **Extract frontmatter** (title, author, date, tags)
3. **Create MDX file** with proper naming: `YYYY-MM-DD-slug.mdx`
4. **Convert frontmatter** to MDX format
5. **Convert content** following rules above:
   - Replace `<!-- end -->` with `{/* truncate */}`
   - Convert headings (h2, h3 → ##, ###)
   - Convert paragraphs (remove `p` tags)
   - Convert links (PUG `a()` → Markdown `[]()`)
   - Convert lists (PUG `ul/li` → Markdown `-`)
   - Replace special characters
   - Convert images
6. **Review converted content** for formatting issues
7. **Verify links** are working
8. **Test build** with `npm run build`

## Common Patterns

### Release Announcements
- Usually have structured sections (New Features, Improvements, etc.)
- Include links to release notes
- May have code examples (keep as-is in MDX)

### Community Updates
- Event listings
- Meetup announcements
- Webinar schedules
- Keep chronological structure

### Technical Deep-Dives
- May include complex markup
- Code blocks (preserve language hints)
- Images and diagrams

## Quality Checklist

- [ ] Frontmatter complete (title, authors, date, tags)
- [ ] Truncate marker placed after intro paragraph
- [ ] All headings converted to Markdown
- [ ] All links converted and working
- [ ] Special characters replaced
- [ ] Images display correctly
- [ ] Lists formatted properly
- [ ] No stray PUG syntax remaining
- [ ] File named correctly (YYYY-MM-DD-slug.mdx)
- [ ] Build succeeds without errors

## Remaining Posts to Convert

**Total PUG posts:** 26
**Converted:** 15 (proof of concept complete)
**Remaining:** 11

All remaining posts follow the same patterns documented above. Use this guide as reference for converting the rest of the blog archive.
