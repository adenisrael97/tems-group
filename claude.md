Claude Refactor Instructions: Reusable UI Components (Next.js + Tailwind CSS)

Objective

Refactor the existing Next.js project to replace all hardcoded buttons and cards with reusable, scalable, and clean UI components using Tailwind CSS.

The goal is to:

* Improve code reusability
* Maintain consistent UI design
* Reduce duplication
* Make the codebase easier to maintain and scale

⸻

Tech Stack

* Next.js (App Router preferred if already used)
* JavaScript (no TypeScript unless already in project)
* Tailwind CSS

⸻

Requirements

1. Create Reusable Button Component

Create a flexible Button component that supports:

* Variants (primary, secondary, outline, danger)
* Sizes (sm, md, lg)
* Loading state
* Disabled state
* Custom className override
* Optional icon support

File Structure

/components/ui/Button.jsx

Expected Props

* variant (string)
* size (string)
* children
* onClick
* disabled
* loading
* className

Behavior

* Use Tailwind utility classes dynamically based on props
* Ensure accessibility (aria-disabled, proper button type)
* Prevent click when loading or disabled

⸻

2. Create Reusable Card Component

Create a Card component that can be reused across the app.

File Structure

/components/ui/Card.jsx

Features

* Optional image
* Title
* Description
* Footer (for buttons/actions)
* Hover effects
* Responsive design

Props

* title
* description
* image
* children (for flexibility)
* className

⸻

3. Optional Subcomponents (Highly Recommended)

Break Card into smaller reusable parts:

* Card
* CardHeader
* CardContent
* CardFooter

This improves flexibility and composition.

⸻

4. Refactor Existing Code

* Find all hardcoded buttons and replace with 
* Find all hardcoded cards and replace with 
* Remove duplicated Tailwind classes
* Ensure UI remains visually consistent or improved

⸻

5. Styling Rules

* Use Tailwind CSS only
* Avoid inline styles
* Use consistent spacing, rounded corners, and shadows
* Follow modern UI practices (clean, minimal)

⸻

6. Folder Structure

/components
/ui
Button.jsx
Card.jsx

⸻

7. Code Quality

* No bugs or runtime errors
* Clean and readable code
* Proper JSX formatting
* Use functional components
* Avoid unnecessary re-renders

⸻

8. Bonus Improvements (If Possible)

* Add a “cn” utility function for merging classNames
* Add default props
* Add simple animations (hover/active states)

⸻

Output Format

1. Provide full code for:
    * Button.jsx
    * Card.jsx
2. Show example usage of both components
3. Refactor at least one existing page/component as example
4. Ensure everything works without errors

⸻

Important Notes

* Do NOT break existing functionality
* Do NOT introduce unnecessary complexity
* Focus on reusable, scalable design
* Keep everything production-ready

⸻

Goal Summary

Transform the project from hardcoded UI elements into a clean, reusable component-based architecture suitable for a professional full stack application.