---
title: "Generalized Fourier Series and Mean Convergence"
date: 2026-07-13
categories: [Mathematics, Analysis]
tags: [Fourier series, mean convergence, orthonormal functions, least-squares approximation]
excerpt: "A step-by-step explanation of the generalized Fourier Series and its mean convergence properties."
math: true
---
# Introduction
One of the most revolutionary and far-reaching ideas of the 19th century was that of representing any arbitrary function by an infinite sum of sines and cosines, or what we call a **Fourier Series**.

Although this discovery is attributed to the 19th century and named after the French mathematician Joseph Fourier, whose tenacity in the face of ridicule led to other mathematicians considering it worth their effort, and finally the famous 1829 result by Dirichlet that rigorously established that it converged for a vast family of functions, many of the pertinent concepts had long been known by Euler and his contemporaries.


In fact, this idea of representing an arbitrary function by a series of sines and cosines was first proposed by Daniel Bernoulli while working on the solutions of the one-dimensional wave equation.

$$
\alpha \frac{\partial² y}{\partial x²} = \frac{\partial² y}{\partial t²}
$$

However, at the time, Bernoulli's proposal was met with considerable skepticism, as many of the leading mathematicians of the era found it difficult to accept that the vast variety of initial configurations of a flexible string could be represented by an appropriate sum of only sines and cosines. In 1777, Euler derived the formulas for what are now known as the Fourier coefficients. Although these formulas were remarkable, he regarded them as applicable only to functions already known to admit such a trigonometric representation and did not recognize their broader significance.

So here, we generalize the concept of Fourier Series and show how it naturally arises from the problem of least-squares approximation, where a function is approximated by finite linear combinations of orthonormal functions.

## Assumptions
Throughout we have assumed the following
- The function $f(x)$ is defined on the interval $[a,b]$.
- The integral
$$
\int_a^b f²(x)\,dx
$$
exists and is finite.
- Each basis function $\phi_n(x)$ is defined and integrable on
$[a,b]$.
- The basis functions $\{\phi_n\}$ are mutually orthonormal.
- The functions $\{\phi_n\}$ form a complete orthonormal system, meaning that every function satisfying the above assumptions can be approximated arbitrarily well, in the mean-square sense, by finite linear combinations of the functions $\phi_n$.

# Generalized Fourier Series
To define a Generalized Fourier Series, we first examine the classical Fourier Series in terms of sines and cosines to understand how this remarkable expansion arises. A Fourier Series is written as
$$
f(x)=\frac{a_0}{2}+\sum_{n=1}^{\infty}\left(a_n\cos(nx)+b_n\sin(nx)\right),
$$

where the coefficients $a_n$ and $b_n$ are yet to be determined. At first glance, this appears to require determining infinitely many unknown constants. Fortunately, the trigonometric functions possess a remarkable property that makes this possible, which can be stated as
$$
\int_{-\pi}^{\pi}\cos(nx)\cos(mx)\,dx=
\begin{cases}
\pi & m=n,\\
0 & m\neq n,
\end{cases}
\qquad m,n\ge1,
$$
$$
\int_{-\pi}^{\pi}\sin(nx)\sin(mx)\,dx=
\begin{cases}
\pi & m=n,\\
0 & m\neq n,
\end{cases}
\qquad m,n\ge1,
$$
$$
\int_{-\pi}^{\pi}\sin(nx)\cos(mx)\,dx=0,
$$
and
$$
\int_{-\pi}^{\pi}\cos(nx)\,dx
=
\int_{-\pi}^{\pi}\sin(nx)\,dx
=0.
$$

This remarkable property is known as **orthogonality**, in close analogy with orthogonal vectors in Euclidean space. More generally, if $f$ and $g$ are two functions defined on an interval $[a,b]$, their inner product is defined by
$$
\langle f,g\rangle
=
\int_a^b f(x)g(x)\,dx.
$$

The functions $f$ and $g$ are said to be *orthogonal* whenever
$$
\langle f,g\rangle=0.
$$
This definition is a natural extension of the *Euclidean dot product*, and it can be shown to fulfill the properties of the inner product. Just as the dot product is obtained by summing the products of corresponding components of two vectors, the inner product of two functions is obtained by integrating the product of their values over an interval. These ideas can be extended, in part, to define a norm and a metric for this space.

Returning to the problem of determining the coefficients, we notice that we need only multiply both sides by appropriate sine or cosine and integrate over the interval $[-\pi, \pi]$ to isolate each coefficient and to solve for them, assuming that the series may be integrated term by term, which turns out to give us the relations
$$
a_n = \frac{1}{\pi}\int_{-\pi}^{\pi}
f(x)\cos(nx)dx \; \; \; \text{ for } n\ge 0
$$
$$
b_n = \frac{1}{\pi}\int_{-\pi}^{\pi}
f(x)\sin(nx)dx \; \; \; \text{ for } n\ge 1
$$
To generalize this construction, we first observe two important properties of the set
$$
\left\{
1,\,
\sin(x),\,
\cos(x),\,
\sin(2x),\,
\cos(2x),\,
\ldots
\right\}.
$$
First, the functions are mutually orthogonal on the interval $[-\pi,\pi]$. Second, they are linearly independent, a fact that follows immediately from their orthogonality.

So, a Generalized Fourier Series is a series of the form
$$
f(x) = \sum_{n=1}^\infty a_n\phi_n(x)
$$

where $\{\phi_1, \, \phi_2, …\}$ is a sequence of mutually orthonormal functions on the interval $[a,b]$, where orthonormal means orthogonal with the additional constraint that $\langle \phi_n,\phi_n \rangle = 1 $, and proceeding in a similar way, we get the following expressions for the coefficients
$$
a_n = \int_a^b f(x)\phi_n(x) dx
$$
Now that we have defined what a Generalized Fourier Series is, we establish some basic results about its coefficients and try to justify our series by showing that it converges to the function.

# Mean Convergence
We begin by defining what mean convergence is and justifying our choice of using it, before proceeding to the problem of showing that our expression for the Fourier coefficients was justified and the best possible choice that could have been made.

We begin by examining the problem of approximating a function $f(x)$ by a sequence of functions that we denote as $p_n$. To get an idea of how well any particular function from our sequence approximates the original function, we need a measure of error, two obvious and natural choices for the error would be 
$$
|f(x) - p_n(x)| \,\, \text{ or } \,\, (f(x)-p_n(x))²
$$
Now, observe that we can consider the error for each value of the domain to determine how well the function is being approximated for that value, and if as $n$ goes to infinity, the error for each value goes to zero, we say that the sequence converges **pointwise** to the function. Although this is a good way to define convergence, it should be apparent from the definition how difficult it can be to show the convergence of any arbitrary sequence to any function. So, we proceed by defining error over the interval over which we want to examine the convergence, and once again have two choices for the error measure given as 
$$
\int_a^b|f(x) - p_n(x)|dx \,\, \text{ or } \,\, \int_a^b(f(x)-p_n(x))² dx
$$
A natural choice is to go with the second one, because the second measure is differentiable over its entire domain and is naturally induced by the inner product. So, we define our measure as
$$
E_n = \int_a^b(f(x) - p_n(x))²dx
$$
This is called the **mean square error**, which is justified by the fact that dividing by the interval width gives the mean value over the interval. And we define mean convergence as $E_n \to 0$ as $n \to \infty$. Notice how mean convergence doesn't guarantee pointwise convergence, since we may have many points with non-zero error despite having $E_n \to 0$; in fact, we can have countably infinite such points.

Coming back to our Generalized Fourier Series, we create a sequence of its partial sums as 
$$
p_n = \sum_{k=1}^n a_k\phi_k
$$

Using this sequence, we observe that the error measure becomes
$$
E_n = \int_a^b f²(x)dx - \int_a^b 2f(x)p_n(x)dx + \int_a^b p_n²(x)dx
$$
Suppose that $f(x)$ admits an expansion of the form
$$
f(x) = \sum_{n=1}^\infty b_n\phi_n(x) \, \, \text{ for some } b_n
$$
which gives us
$$
E_n = \int_a^b f²(x)dx - \int_a^b2(\sum_{n=1}^\infty b_n\phi_n)(\sum_{k=1}^n a_k\phi_k)dx + \int_a^b(\sum_{k=1}^n a_k\phi_k)²(x)dx
$$
By expanding and using the orthonormality of the functions, we get
$$
E_n = \int_a^b f²(x)dx - \sum_{k=1}^n2a_kb_k + \sum_{k=1}^na_k²
$$
But since $-2ab + b² = (a-b)² - a²$, we get
$$
E_n = \int_a^b f²(x)dx - \sum_{k=1}^na_k² + \sum_{k=1}^n(a_k - b_k)²
$$
From this, we observe that the error is minimum when $a_k = b_k$, which proves our claim that the best coefficients are those given by our formula, as they minimize the mean square error. 

But, we also notice that since the error is a non-negative function
$$
\sum_{k=1}^na_k² - \sum_{k=1}^n(a_k - b_k)² \le \int_a^b f²(x)dx
$$

and as $n \to \infty$, the infinite sums on the left are bounded by the integral. Furthermore, if we consider $a_k = b_k$, this gives us
$$
\sum_{k=1}^\infty a_k² \le \int_a^b f²(x)dx
$$
This is known as **Bessel's inequality**, and it shows that $a_k \to 0$ as $n \to \infty$. Also, notice if we assume that the partial sums converge to $f$ in the mean as $n$ goes to infinity, then the above inequality becomes an equality, which gives us the **Parseval's** identity
$$
\sum_{k=1}^\infty a_k² = \int_a^b f²(x)dx
$$

# Digression
For people accustomed to vector spaces, this exposition in terms of linear algebra deals specifically with $L²(a,b)$ integrable spaces, which are Hilbert spaces, meaning they are complete inner product spaces with the inner product given as
$$
\langle f, g\rangle = \int_a^b \overline{f(x)}g(x) dx
$$
where $\overline{f(x)}$ represents complex conjugation, but since throughout we dealt with real-valued functions, the complex conjugation reduces to mere identity function. And the whole idea can be interpreted as orthogonally projecting the function $f$ onto the finite-dimensional subspace spanned by the first $n$-orthonormal basis functions given by $\{\phi_n\}$ such that the least squares error is minimized, and in this context, our error function is nothing but the square of the metric given as ($a_k=b_k$)
$$
d²(f, p_n) = ||f - p_n||² = ||f||² - \sum_{k=1}^n a_k²
$$
where the above expression is known as the Pythagorean identity in the Hilbert space.

# Conclusion
The classical Fourier series is therefore seen to be only one instance of a much broader principle. Whenever a complete orthonormal system exists, every admissible function may be approximated by projecting it onto the span of these basis functions. The Fourier coefficients arise naturally from this projection process, the resulting partial sums provide the best mean-square approximations, and under mean convergence Parseval's identity shows that the entire energy of the function is captured by its coefficients.