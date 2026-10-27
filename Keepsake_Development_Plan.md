# Keepsake — Development & Feature Plan

**Project:** Keepsake  
**Type:** Social discovery and visual bookmarking platform  
**Development environment:** Windows 11, Visual Studio Code  
**Current stack:** HTML, CSS, JavaScript, Vite  
**Planned stack:** TypeScript, React, Supabase, PostgreSQL  
**Status:** In development  
**Current phase:** 01 — Discovery Feed

## 1. Project Overview

Keepsake is a simpler alternative to Pinterest, focused on discovering public content, publishing posts, collecting keepsakes, and organizing them into boards with unlimited nested sections. Users can also follow one another, comment, share content, and send private messages.

- **Discover:** Browse, search, and receive recommendations for public keepsakes.
- **Collect:** Save and organize content in boards with nested sections and subsections.
- **Connect:** Publish, follow, comment, share, and message.

### Design Principles

- **Simplicity:** Minimal, content-first interface.
- **Flexibility:** No arbitrary section nesting depth limit.
- **Discovery:** Search, recommendations, and social connections.
- **Privacy:** Enforced access controls for private collections and messages.
- **Accessibility:** Responsive and keyboard-accessible interfaces.
- **User control:** Control over content, collections, and recommendations.

## 2. Core Terminology

| Term | Definition |
|---|---|
| Post | Original content published by a user. |
| Keepsake | A saved reference to a post or external resource. |
| Board | A user-created collection of keepsakes. |
| Section | A container within a board or another section. |
| Feed | A browsable collection of public content. |
| Profile | A user's identity, posts, and collections. |

Posts and keepsakes are distinct but related. One post may be saved in multiple collections without duplicating the original post.

## 3. Feature Roadmap

### Phase 01 — Discovery Feed

**Status:** In progress  
**Goal:** Browse public keepsakes and view individual content.

- [x] Render keepsakes from a JavaScript array.
- [x] Display images, titles, descriptions, creators, and save counts.
- [x] Create responsive image cards.
- [ ] Implement masonry layout with varying image heights.
- [ ] Create the Discover page header and navigation.
- [ ] Build an individual keepsake detail view.
- [ ] Introduce search and basic filtering.

**Programming concepts:** HTML, CSS, objects, arrays, functions, loops, DOM manipulation, events, filtering.

### Phase 02 — Boards and Organization

**Status:** Planned  
**Goal:** Create and manage hierarchical collections.

- [ ] Create, rename, and delete boards.
- [ ] Add and remove keepsakes from boards.
- [ ] Create sections nested to unlimited depth.
- [ ] Move keepsakes between sections.
- [ ] Move and reorganize sections.
- [ ] Navigate nested collections.
- [ ] Reorder keepsakes and sections.
- [ ] Support public and private boards.

**Programming concepts:** Tree structures, recursion, parent-child relationships, state.

### Phase 03 — Accounts and Profiles

**Status:** Planned  
**Goal:** Persistent user identities and authentication.

- [ ] Register, log in, and log out.
- [ ] Create profiles, avatars, and biographies.
- [ ] Support unique usernames.
- [ ] Display public boards and published posts on profiles.
- [ ] Edit account information and privacy settings.

**Programming concepts:** Authentication, SQL, relational data, identifiers, access control.

### Phase 04 — Publishing and Saving

**Status:** Planned  
**Goal:** Publish posts and save keepsakes persistently.

- [ ] Upload images and publish original posts.
- [ ] Edit and delete owned posts.
- [ ] Save and unsave keepsakes.
- [ ] Choose destination board or section.
- [ ] Preserve source links and attribution.
- [ ] Store content in the database.
- [ ] Validate uploads and user inputs.

**Programming concepts:** Forms, validation, asynchronous JavaScript, storage, database operations.

### Phase 05 — Social Interactions

**Status:** Planned  
**Goal:** Add community interactions and sharing.

- [ ] Follow and unfollow users.
- [ ] Display followers and following lists.
- [ ] Comment on public posts.
- [ ] Edit and delete owned comments.
- [ ] Share posts and public boards.
- [ ] Implement notifications.
- [ ] Block users and report content or behavior.

**Programming concepts:** Relational queries, event handling, authorization.

### Phase 06 — Private Messaging

**Status:** Planned  
**Goal:** One-to-one private conversations.

- [ ] Create conversations and an inbox.
- [ ] Send and receive messages.
- [ ] Display conversation history.
- [ ] Track unread messages.
- [ ] Deliver real-time updates.
- [ ] Enforce messaging privacy and blocking.

**Programming concepts:** Realtime, asynchronous communication, relational databases, permissions.

### Phase 07 — Search and Recommendations

**Status:** Planned  
**Goal:** Personalized discovery.

- [ ] Search keepsakes, boards, and users.
- [ ] Add tags and interest-based discovery.
- [ ] Create a Following feed.
- [ ] Create a personalized Discover feed.
- [ ] Track useful interaction signals.
- [ ] Rank content by interests, followed creators, engagement, and freshness.
- [ ] Encourage diversity and limit repetition.
- [ ] Let users hide unwanted recommendations.
- [ ] Add pagination or infinite scrolling.

**Programming concepts:** Search, filtering, scoring algorithms, pagination, data analysis.

Begin with a transparent rule-based ranking algorithm rather than machine learning.

### Phase 08 — Testing and Launch

**Status:** Planned  
**Goal:** Prepare for public use.

- [ ] Test desktop, tablet, and mobile.
- [ ] Improve accessibility.
- [ ] Add loading, empty, and error states.
- [ ] Optimize images and performance.
- [ ] Write automated tests.
- [ ] Review authentication, database security, and privacy.
- [ ] Implement moderation safeguards.
- [ ] Deploy the application.
- [ ] Establish backup and recovery procedures.

**Programming concepts:** Testing, debugging, accessibility, security, deployment.

## 4. Technical Architecture

### Frontend

- **Now:** HTML, CSS, JavaScript, Vite.
- **Later, when useful:** TypeScript and React.

Introduce new technologies to solve real development problems, not merely for their own sake.

### Backend

- **Supabase:** Authentication, file storage, and realtime updates.
- **PostgreSQL:** Structured application data.
- **Security:** Access policies for private boards, user content, and messages.

### Version Control

- **Git and GitHub:** Commit tested milestones and retain the ability to revert experiments.

## 5. Data Architecture

### Posts and Keepsakes

Posts are published content; keepsakes represent saved references. Multiple collections can refer to the same underlying post.

### Boards and Sections

A section belongs to a board and optionally has a `parent_id` referring to another section. A missing parent means the section sits at the board's root. Prevent cycles (for example, moving a section into its own descendant).

```text
Art History (board)
└── Renaissance
    └── Italian Renaissance
        └── Florence
            └── Botticelli
                └── Saved keepsakes
```

### Privacy

Ownership and visibility are separate. A private board must not become accessible just because someone knows its URL. Enforce permissions in the backend rather than only hiding UI elements.

## 6. Deferred Features

Not required for the initial release:

- Collaborative boards.
- Group messaging.
- Video hosting.
- Shopping integrations.
- Advertising.
- Machine-learning-based recommendations.

## 7. Development Workflow

Keepsake is a **build-as-you-learn project**, not a rigid programming course.

1. Define the feature and expected behavior.
2. Identify the concepts needed to build it.
3. Write the code manually in VS Code.
4. Review and debug the code together.
5. Test it in the browser.
6. Commit working progress with Git.
7. Continue to the next dependent feature.

**Working preferences:** Teach through actual features; explain errors; avoid unnecessary explanatory comments; review the user's own implementation rather than generating the whole application.

## 8. Current Development Status

### Completed

- [x] Initialize Vite and set up VS Code.
- [x] Create keepsake objects and an array.
- [x] Write a reusable `renderKeepsake()` function.
- [x] Render a feed using a `for...of` loop.
- [x] Display local image assets.
- [x] Preserve image proportions and establish responsive cards.
- [x] Adjust desktop and mobile styling.

### Immediate Milestone — Complete Discover

- [ ] Implement a masonry layout.
- [ ] Create header and navigation.
- [ ] Build an individual keepsake detail view.
- [ ] Add search and basic filtering.

**Next task:** Implement masonry using the existing cards, while preserving images' aspect ratios and allowing different card heights.

## 9. Initial Release Criteria

Users can register and log in, publish content, save keepsakes, organize boards with indefinitely nested sections, discover and search public content, follow people, comment, share, and exchange private messages. The application also needs reliable storage, enforced privacy, responsive layouts, and basic safety and moderation tools.
