---
layout: single  
title: "Using LaTeX Math Formulas in Jekyll Posts"
date: 2025-11-22
categories: [LaTeX, Jekyll, Math]
excerpt: "LaTeX the better way to write formular in markdown"
header:
  overlay_color: "#000"
  overlay_filter: "0.5"
  overlay_image: /assets/images/Blog-header.jpg
author_profile: true
mathjax: true
---
- [Using LaTeX Math Formulas in Jekyll Posts](#using-latex-math-formulas-in-jekyll-posts)
  - [How to Use LaTeX Formulas](#how-to-use-latex-formulas)
    - [Inline Math](#inline-math)
    - [Display Math (Block Equations)](#display-math-block-equations)
    - [Common Examples](#common-examples)
      - [1. Fractions and Roots](#1-fractions-and-roots)
      - [2. Greek Letters](#2-greek-letters)
      - [3. Subscripts and Superscripts](#3-subscripts-and-superscripts)
      - [4. Summation and Integrals](#4-summation-and-integrals)
      - [5. Matrices](#5-matrices)
      - [6. Aligned Equations](#6-aligned-equations)
      - [7. Cases (Piecewise Functions)](#7-cases-piecewise-functions)
      - [8. Calculus](#8-calculus)
      - [9. Vectors and Norms](#9-vectors-and-norms)
      - [10. Machine Learning / Statistics](#10-machine-learning--statistics)
  - [Disabling MathJax for Specific Posts](#disabling-mathjax-for-specific-posts)
  - [Tips](#tips)
  - [More Information](#more-information)

# Using LaTeX Math Formulas in Jekyll Posts

MathJax support has been successfully added to your Jekyll site!

## How to Use LaTeX Formulas

MathJax is enabled by default for all posts and projects. You can use LaTeX syntax for mathematical equations.

### Inline Math

Use `$...$` or `\\(...\\)` for inline math:

**Example:**
```markdown
The quadratic formula is $x = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a}$ where $a \neq 0$.

Einstein's famous equation is \\(E = mc^2\\).
```

**Renders as:**
The quadratic formula is $x = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a}$ where $a \neq 0$.

Einstein's famous equation is \\(E = mc^2\\).

### Display Math (Block Equations)

Use `$$...$$` or `\\[...\\]` for display math (centered on separate line):

**Example:**
```markdown
$$
\nabla \times \vec{\mathbf{B}} -\, \frac1c\, \frac{\partial\vec{\mathbf{E}}}{\partial t} = \frac{4\pi}{c}\vec{\mathbf{j}}
$$

Maxwell's equations:
\\[
\begin{aligned}
\nabla \cdot \vec{\mathbf{E}} &= 4 \pi \rho \\\\
\nabla \cdot \vec{\mathbf{B}} &= 0 \\\\
\nabla \times \vec{\mathbf{E}} &= -\frac{1}{c} \frac{\partial \vec{\mathbf{B}}}{\partial t} \\\\
\nabla \times \vec{\mathbf{B}} &= \frac{1}{c}\left(4\pi\vec{\mathbf{j}} + \frac{\partial\vec{\mathbf{E}}}{\partial t}\right)
\end{aligned}
\\]
```

**Renders as:**

$$
\nabla \times \vec{\mathbf{B}} -\, \frac1c\, \frac{\partial\vec{\mathbf{E}}}{\partial t} = \frac{4\pi}{c}\vec{\mathbf{j}}
$$

Maxwell's equations:
\\[
\begin{aligned}
\nabla \cdot \vec{\mathbf{E}} &= 4 \pi \rho \\\\
\nabla \cdot \vec{\mathbf{B}} &= 0 \\\\
\nabla \times \vec{\mathbf{E}} &= -\frac{1}{c} \frac{\partial \vec{\mathbf{B}}}{\partial t} \\\\
\nabla \times \vec{\mathbf{B}} &= \frac{1}{c}\left(4\pi\vec{\mathbf{j}} + \frac{\partial\vec{\mathbf{E}}}{\partial t}\right)
\end{aligned}
\\]

### Common Examples

#### 1. Fractions and Roots
```markdown
$$\frac{a}{b}, \quad \sqrt{x}, \quad \sqrt[n]{x}$$
```
**Renders as:**
$$\frac{a}{b}, \quad \sqrt{x}, \quad \sqrt[n]{x}$$

#### 2. Greek Letters
```markdown
$$\alpha, \beta, \gamma, \delta, \epsilon, \theta, \lambda, \mu, \pi, \sigma, \omega$$
$$\Gamma, \Delta, \Theta, \Lambda, \Sigma, \Phi, \Psi, \Omega$$
```
**Renders as:**
$$\alpha, \beta, \gamma, \delta, \epsilon, \theta, \lambda, \mu, \pi, \sigma, \omega$$
$$\Gamma, \Delta, \Theta, \Lambda, \Sigma, \Phi, \Psi, \Omega$$

#### 3. Subscripts and Superscripts
```markdown
$$x^2, \quad x_i, \quad x^{2y}, \quad x_{i,j}$$
```

**Renders as:**
$$x^2, \quad x_i, \quad x^{2y}, \quad x_{i,j}$$

#### 4. Summation and Integrals
```markdown
$$\sum_{i=1}^{n} x_i, \quad \int_{a}^{b} f(x)dx, \quad \prod_{i=1}^{n} x_i$$
```
**Renders as:**
$$\sum_{i=1}^{n} x_i, \quad \int_{a}^{b} f(x)dx, \quad \prod_{i=1}^{n} x_i$$

#### 5. Matrices
```markdown
$$
\begin{bmatrix}
a & b \\\\
c & d
\end{bmatrix}
$$

$$
\begin{pmatrix}
1 & 0 & 0 \\\\
0 & 1 & 0 \\\\
0 & 0 & 1
\end{pmatrix}
$$
```
**Renders as:**

$$
\begin{bmatrix}
a & b \\\\
c & d
\end{bmatrix}
$$

$$
\begin{pmatrix}
1 & 0 & 0 \\\\
0 & 1 & 0 \\\\
0 & 0 & 1
\end{pmatrix}
$$

#### 6. Aligned Equations
```markdown
$$
\begin{aligned}
f(x) &= (x+1)^2 \\\\
     &= x^2 + 2x + 1
\end{aligned}
$$
```

**Renders as:**

$$
\begin{aligned}
f(x) &= (x+1)^2 \\\\
     &= x^2 + 2x + 1
\end{aligned}
$$


#### 7. Cases (Piecewise Functions)
```markdown
$$
f(x) = \begin{cases}
x^2 & \text{if } x \geq 0 \\\\
-x^2 & \text{if } x < 0
\end{cases}
$$
```
**Renders as:**

$$
f(x) = \begin{cases}
x^2 & \text{if } x \geq 0 \\\\
-x^2 & \text{if } x < 0
\end{cases}
$$


#### 8. Calculus
```markdown
$$\frac{dy}{dx}, \quad \frac{\partial f}{\partial x}, \quad \nabla f, \quad \lim_{x \to \infty} f(x)$$
```

**Renders as:**
$$\frac{dy}{dx}, \quad \frac{\partial f}{\partial x}, \quad \nabla f, \quad \lim_{x \to \infty} f(x)$$

#### 9. Vectors and Norms
```markdown
$$\vec{v}, \quad \|\vec{v}\|, \quad \langle u, v \rangle, \quad \vec{a} \cdot \vec{b}$$
```
**Renders as:**
$$\vec{v}, \quad \|\vec{v}\|, \quad \langle u, v \rangle, \quad \vec{a} \cdot \vec{b}$$

#### 10. Machine Learning / Statistics
```markdown
$$
\hat{y} = \mathbf{w}^T\mathbf{x} + b
$$

$$
\mathcal{L}(\theta) = -\frac{1}{N}\sum_{i=1}^{N}\left[y_i\log(\hat{y}_i) + (1-y_i)\log(1-\hat{y}_i)\right]
$$

$$
\mu = \mathbb{E}[X], \quad \sigma^2 = \text{Var}(X)
$$
```

**Renders as:**
$$
\hat{y} = \mathbf{w}^T\mathbf{x} + b
$$

$$
\mathcal{L}(\theta) = -\frac{1}{N}\sum_{i=1}^{N}\left[y_i\log(\hat{y}_i) + (1-y_i)\log(1-\hat{y}_i)\right]
$$

$$
\mu = \mathbb{E}[X], \quad \sigma^2 = \text{Var}(X)
$$

## Disabling MathJax for Specific Posts

If you want to disable MathJax for a specific post (to improve load time), add to the front matter:

```yaml
---
title: "My Post"
mathjax: false
---
```

## Tips

1. **Escaping**: Use double backslashes `\\\\` for line breaks in multi-line equations
2. **Spacing**: Use `\quad` or `\qquad` for spacing between elements
3. **Text**: Use `\text{...}` for regular text inside equations
4. **Testing**: You can test your LaTeX at https://www.mathjax.org/#demo

## More Information
- [MathJax Documentation](https://docs.mathjax.org/)
- [LaTeX Math Symbols](https://www.overleaf.com/learn/latex/List_of_Greek_letters_and_math_symbols)
- [Common LaTeX Commands](https://www.overleaf.com/learn/latex/Mathematical_expressions)
