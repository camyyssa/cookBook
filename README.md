# CookBook

A personal recipe website built with [Astro](https://astro.build) and deployed to GitHub Pages.

Browse recipes with ingredients and step-by-step instructions, find inspiration for simple dishes, or let the site pick something for you.

**Live site:** https://camyyssa.github.io/cookBook

## Features

- Photo-driven recipe browsing
- Inspiration gallery for simple dishes without full recipes
- Random dish picker with a shuffle button
- Images are optional — a placeholder is shown when none is provided

## Adding content

### Recipes

Create a file in `src/content/recipes/my-recipe.md`:

```markdown
---
title: My Recipe
description: A short description.
image: ../../assets/images/my-recipe.jpg  # optional
servings: 4
prepTime: 10 min
cookTime: 30 min
ingredients:
  - 200g something
  - 1 tbsp something else
tags:
  - quick
  - vegetarian
---

1. First step.
2. Second step.
```

### Inspiration items

Create a file in `src/content/inspiration/my-dish.md`:

```markdown
---
title: Cooked Broccoli
image: ../../assets/images/broccoli.jpg  # optional
tags:
  - vegetables
  - side
---
```

## Development

```sh
pnpm install
pnpm dev
```

## Deploy

Push to `main` — GitHub Actions will build and deploy automatically.

Make sure GitHub Pages is configured to use **GitHub Actions** as the source (repo Settings → Pages).

## License

[MIT](LICENSE)
