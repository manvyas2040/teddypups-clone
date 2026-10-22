# AI Usage

## Antigravity

### Purpose
Initial UI development and project scaffolding.

### Prompt
<!-- I have a technical assignment to recreate the following reference website:

Reference URL:
https://puppy.instabizweb.com/

I need to build a high-quality frontend clone of this website for a technical evaluation.

IMPORTANT:
The reference website is the source of truth for the UI, layout, content structure, responsiveness, and visible functionality. Do not invent a different concept or redesign the website.

### Goal

Analyze the reference website carefully and recreate its user-facing experience as closely as possible.

Match the following:

- Overall visual design
- Page structure
- Section order
- Navbar/header
- Hero section
- Typography
- Font sizing and weights
- Colors
- Spacing and padding
- Buttons
- Cards
- Images and image proportions
- Borders, shadows and rounded corners
- Icons
- Animations and transitions
- Hover effects
- FAQ interactions
- Mobile navigation
- WhatsApp/contact interactions
- Footer
- Responsive behavior

The final website should feel like the same website when viewed by a user, while the source code must be independently implemented using reusable components.

### Technology

Use:

- Next.js
- React
- TypeScript
- Tailwind CSS
- Framer Motion where animations are useful
- Lucide React or another appropriate icon library

Use clean, production-quality React/Next.js practices.

### Before coding

First inspect and analyze the reference website.

Do NOT immediately generate the entire project.

First provide:

1. Complete page/route list
2. Section-by-section breakdown
3. Component hierarchy
4. Reusable component list
5. Required assets/images
6. Responsive behavior
7. Visible interactions
8. Recommended folder structure
9. Data structure for repeated content such as puppy cards/testimonials/FAQ
10. Any functionality that appears to require backend/API support
11. Which functionality can be implemented entirely on the frontend

After presenting this analysis, wait for my approval before generating the implementation.

### Component architecture

Use reusable components instead of duplicating markup.

For example:

components/
Navbar
MobileMenu
Hero
PuppyCard
PuppyGrid
FeatureSection
HowItWorks
TestimonialCard
FAQ
CTA
Footer

Repeated content should come from structured data rather than duplicated JSX.

Example:

const puppies = [
{
id: 1,
name: "...",
breed: "...",
age: "...",
gender: "...",
image: "...",
available: true
}
];

Then render reusable components using map().

### Responsive design

The website must work properly on:

- Desktop
- Laptop
- Tablet
- Mobile

Do not simply shrink the desktop design.

Analyze the reference website's mobile layout and reproduce its responsive behavior.

Pay particular attention to:

- mobile navbar
- typography scaling
- card layouts
- image sizes
- section spacing
- button sizes
- horizontal overflow
- grid/column changes

### Images and assets

Use appropriate image placeholders or freely usable replacement images when the original assets cannot be legally or technically reused.

Do not rely on broken external image URLs.

Keep assets organized inside the project.

### Functionality

Reproduce visible functionality from the reference website, including:

- navigation
- mobile menu
- FAQ accordion
- buttons
- links
- WhatsApp CTA
- smooth scrolling where appropriate
- animations
- hover interactions

If the original website contains functionality that requires a private backend or service that cannot be accessed, implement a reasonable frontend equivalent and clearly document the decision.

Do not invent unnecessary backend functionality.

### Code quality

Write:

- clean
- readable
- maintainable
- reusable
- strongly typed
- component-based code

Avoid:

- one huge component
- duplicated JSX
- unnecessary dependencies
- unnecessary backend code
- hardcoded repeated UI
- poor naming
- unused code

### SEO and accessibility

Include basic:

- semantic HTML
- meaningful alt text
- proper heading hierarchy
- button/link semantics
- page metadata
- responsive viewport behavior

### Testing

Before considering the project complete, check:

- desktop layout
- tablet layout
- mobile layout
- navigation
- buttons
- FAQ
- WhatsApp links
- images
- animations
- console errors
- broken links
- responsive overflow

### Deployment

Prepare the project for deployment on Vercel.

The final project should include:

- production build
- clean README
- setup instructions
- environment variable documentation if required
- deployment instructions

### Important AI usage rule

Do not make assumptions about the original website's private backend, database, API or technology stack unless it can be verified.

The assignment is to recreate the visible website experience, not to guess the original company's private implementation.

### Development process

Work step-by-step.

Phase 1:
Analyze the reference website.

Phase 2:
Create the project structure and reusable component architecture.

Phase 3:
Implement the global styles, fonts and layout.

Phase 4:
Implement the navbar and hero.

Phase 5:
Implement the main content sections.

Phase 6:
Implement puppy/card/listing components.

Phase 7:
Implement FAQ, testimonials, CTA and footer.

Phase 8:
Implement animations and interactions.

Phase 9:
Optimize responsive behavior.

Phase 10:
Test and fix visual/functional issues.

Phase 11:
Prepare GitHub README.

Phase 12:
Prepare Vercel deployment.

Do not skip directly to Phase 12.

At every stage, explain what you implemented and why.

The final result should be a professional, responsive, maintainable clone that closely matches:

https://puppy.instabizweb.com/ 
 -->

### How I used the output
I reviewed the generated components, modified the implementation,
tested the responsive behavior and fixed issues.

## ChatGPT

### Purpose
Architecture, debugging and implementation guidance.

### Purpose
Code completion, refactoring and debugging.
