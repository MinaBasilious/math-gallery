# Posting Guide

## Creating a new post

Run this from the root of the project:

```bash
hugo new content posts/my-post-title.md
```

The filename becomes the URL slug - use lowercase and hyphens. Hugo will
scaffold the file from the archetype and open it ready to edit.

### Front matter fields

Every post starts with this block:

```toml
+++
date        = '2026-02-19T00:00:00+00:00'
draft       = true           # set to false when ready to publish
title       = 'My Post Title'
description = 'One sentence summary shown on the card.'
thumbnail   = ''             # path to image, e.g. /images/my-post.png
tags        = ['math', 'calculus']
# coauthors = [
#   { name = 'Jane Doe', link = 'mailto:jane@example.com' },
#   { name = 'John Smith', link = 'mailto:john@example.com' },
# ]
+++
```

| Field         | Required | Notes                                                 |
| ------------- | -------- | ----------------------------------------------------- |
| `date`        | Y        | Set automatically by Hugo                             |
| `title`       | Y        | Shown on the card and at the top of the post          |
| `description` | Y        | Short summary shown on the gallery card               |
| `thumbnail`   | N        | Falls back to the default SVG if left empty           |
| `tags`        | Y        | Used for filtering; use lowercase, kebab-case         |
| `coauthors`   | N        | Array of `{name, link}` - not shown at all if omitted |
| `draft`       | -        | `true` hides the post; flip to `false` to publish     |

---

## Formatting

### Math - inline

Wrap with single `$`:

```markdown
The matrix $A$ has eigenvalues $\lambda_1 = 5$ and $\lambda_2 = 2$.
```

### Math - display block

Wrap with `$$`:

```markdown
$$
\hat{f}(\xi) = \int_{-\infty}^{\infty} f(x)\, e^{-2\pi i \xi x}\, dx
$$
```

### TikZ diagrams

Use the `tikz` shortcode:

```markdown
{{< tikz >}}
\begin{tikzpicture}
\draw (0,0) circle (1cm);
\end{tikzpicture}
{{< /tikz >}}
```

The diagram renders in the browser via TikZJax - no build step needed.
Use TikZ's own `scale` option to resize diagrams, e.g. `\begin{tikzpicture}[scale=0.5]`.

Optional parameters:

| Parameter | Example                   | Notes                                                         |
| --------- | ------------------------- | ------------------------------------------------------------- |
| `caption` | `caption="Step diagram."` | Caption shown below the diagram                               |
| `id`      | `id="fig-walk"`           | Anchor id; auto-generated as `fig-1`, `fig-2`, ... if omitted |

### Images

Place images in the `static/images` folder, then reference them with an
absolute path:

```markdown
![Alt text](/images/my-diagram.png)
```

To control the size, use the `img` shortcode instead:

```markdown
{{< img src="/images/my-diagram.png" caption="A random walk after 1000 steps." width="50" >}}
```

| Parameter | Example                    | Notes                                                         |
| --------- | -------------------------- | ------------------------------------------------------------- |
| `src`     | `src="/images/x.png"`      | Path to the image (required)                                  |
| `caption` | `caption="A random walk."` | Caption shown below; also used as alt text                    |
| `width`   | `width="50"`               | Max width as % of container; default 100%                     |
| `id`      | `id="fig-walk"`            | Anchor id; auto-generated as `fig-1`, `fig-2`, ... if omitted |

### Tables

For plain tables with no caption or cross-reference, use standard Markdown syntax:

```markdown
| Column A | Column B |
| -------- | -------- |
| value    | value    |
```

To add a caption or a linkable anchor, wrap the table in the `table` shortcode:

```markdown
{{< table id="tbl-transitions" caption="The four possible transitions from $f_m(k)$." >}}
| Direction | Probability |
| ----------- | ----------- |
| $(+1,+1)$ | $1/4$ |
| $(+1,-1)$ | $1/4$ |
| $(-1,+1)$ | $1/4$ |
| $(-1,-1)$ | $1/4$ |
{{< /table >}}
```

| Parameter | Example                       | Notes                                                         |
| --------- | ----------------------------- | ------------------------------------------------------------- |
| `caption` | `caption="Transition table."` | Caption shown below the table                                 |
| `id`      | `id="tbl-transitions"`        | Anchor id; auto-generated as `tbl-1`, `tbl-2`, ... if omitted |

### Cross-referencing

Both the `img` and `tikz` shortcodes accept an optional `id` parameter that
places an HTML `id` on the figure wrapper, making it a linkable anchor.

```markdown
{{< img src="/images/random-walk.png" id="fig-walk" >}}
{{< tikz id="fig-diagram" >}}...{{< /tikz >}}
```

**Same page** plain hash link:

```markdown
[see Figure](#fig-walk)
```

**Cross-post** use Hugo's `relref` shortcode:

```markdown
[see Figure]({{< relref "other-post.md#fig-walk" >}})
```

Keep ids short and descriptive. Prefix with `fig-` by convention to avoid
conflicts with heading anchors.

---

### Videos

Place videos in `static/videos/` and use the `videos` shortcode:

```markdown
{{< video src="/videos/my-clip.mp4" >}}
```

Optional parameters:

| Parameter | Example                  | Notes                                                         |
| --------- | ------------------------ | ------------------------------------------------------------- |
| `src`     | `src="/videos/clip.mp4"` | Path to the video (required)                                  |
| `caption` | `caption="Simulation."`  | Caption shown below the video                                 |
| `width`   | `width="50"`             | Max width as % of container; default 100%                     |
| `type`    | `type="video/webm"`      | MIME type; defaults to `video/mp4`                            |
| `id`      | `id="fig-walk"`          | Anchor id; auto-generated as `fig-1`, `fig-2`, ... if omitted |

```markdown
{{< video src="/videos/my-clip.webm" type="video/webm" width="50" >}}
```

### Code blocks

Use fenced code blocks with a language tag for syntax highlighting:

````markdown
```python
import numpy as np
x = np.linspace(0, 2 * np.pi, 100)
```
````

Supported languages: `python`, `bash`, `javascript`, `html`, `toml`, and
[many more](https://gohugo.io/content-management/syntax-highlighting/#list-of-chroma-highlighting-languages).

---

## Publishing

1. Set `draft = false` in the front matter.
2. Run `hugo serve` to preview locally at <http://localhost:1313>.
3. Commit and push - the build check pre-commit hook will verify the site
   builds cleanly before the push goes through.
