---
title: "Intrinsic Geometry of Surfaces and the Riemannian Metric Tensor"
date: 2026-08-26
categories: [Mathematics, Differential Geometry]
tags: ["Riemannian Geometry", "Metric Tensor", "Curvature", "Differential Geometry"]
excerpt: "A step-by-step explanation of the intrinsic geometry of surfaces and the Riemannian metric tensor."
math: true
---

# Introduction
To do justice to this topic in its entirety, we should first introduce the concept of intrinsicness and explain why it is needed. In doing so, we may also shed some light on the specific terminology: *intrinsic* and *tensor*.

Geometry can be approached in two ways: **synthetically** and **analytically**. The former involves reasoning directly and rigorously about geometric entities without choosing a coordinate system, as exemplified by the arguments of the ancient Greeks. The latter, developed independently by René Descartes and Pierre de Fermat, introduces coordinates or reference frames to simplify the exposition and representation of geometric entities. In doing so, however, the representation becomes dependent on the chosen reference frame, even though the underlying geometric object remains unchanged.

Nevertheless, some properties belong to a surface in and of itself, independently of how it is situated or embedded in an ambient space. Such properties are called the *intrinsic properties* of the surface.

The concept of a tensor is closely related to the distinction between a geometric object and its coordinate representation. Although the components of a tensor may take different forms under different choices of coordinates or reference frames, these different representations all describe the same underlying geometric object.

The need for these concepts arises naturally from the way surfaces are defined and described, which we shall now explore.

# Regular Surfaces
Gauss was the first mathematician to systematically use parameters to describe a surface locally, and to describe the properties in terms of those coordinates. And a lot of the properties of the surfaces locally can be proved to be invariant under the change of parameters, of which the important ones are area, arc length, and angles between intersecting curves.

Furthermore, the modern definition of a surface imposes additional regularity and compatibility conditions on its local parametrizations. These conditions ensure that overlapping coordinate descriptions are related smoothly and consistently, allowing coordinate-independent geometric notions to be defined unambiguously.

### Definition (Regular Surface)

A subset $S \subset \mathbb{R}^3$ is called a **regular surface** if, for
each $p \in S$, there exists a neighborhood $V$ of $p$ in
$\mathbb{R}^3$, an open set $U \subset \mathbb{R}^2$, and a map

$$
\mathbf{x}:U\longrightarrow V\cap S
$$

such that $\mathbf{x}$ maps $U$ onto $V\cap S$ and satisfies the
following conditions:

**1. Differentiability.**

If

$$
\mathbf{x}(u,v)
=
\bigl(x(u,v),y(u,v),z(u,v)\bigr),
\qquad (u,v)\in U,
$$

then the component functions

$$
x(u,v),\qquad y(u,v),\qquad z(u,v)
$$

have continuous partial derivatives of all orders in $U$.

**2. Homeomorphism.**

The map $\mathbf{x}$ is a homeomorphism. Since $\mathbf{x}$ is continuous,
this means that it has a continuous inverse

$$
\mathbf{x}^{-1}:V\cap S\longrightarrow U.
$$

**3. Regularity condition.**

For every $q\in U$, the differential

$$
d\mathbf{x}_q:\mathbb{R}^2\longrightarrow\mathbb{R}^3
$$

is one-to-one.

Equivalently,

$$
\mathbf{x}_u\wedge\mathbf{x}_v\neq 0.
$$

In simple terms, the definition ensures that the parametrization is smooth, that the surface is locally homeomorphic to an open subset of $\mathbb{R}^2$, with a continuous inverse, and that it has a well-defined tangent plane at each point belonging to the coordinate neighborhood described by the parametrization. Equipped with the necessary definition, we can plunge into the study of the surface by assigning a trihedron to each point.

# Theorema Egregium
To proceed, we can make use of our definition of a regular surface along with the additional condition of orientability (to ensure a globally consistent choice of normal direction). This allows us to associate a compatible trihedron(not necessarily orthogonal) with each parametrization.

The first condition of the definition implies that for each point of the parametrization, it has continuous partial derivatives of the first order, namely $\mathbf{x}_u, \mathbf{x}_v$, and the third condition ensures that these are linearly independent, and so in terms of these vectors we can define a third vector that agrees with the chosen orientation of the surface at each point $\mathbf{x}_u \wedge \mathbf{x}_v$ normalized to give $N$. This gives a natural basis/trihedron at each point $\{\mathbf{x}_u, \mathbf{x}_v, N\}$. Now, we can study the surface locally by studying how these vectors change in a small neighborhood about a point $p$, which can be done by taking the derivatives of the basis vectors with respect to the parameters and expressing them in our basis.

In this way, we obtain the following expressions;
$$\mathbf{x}_{uu} = \Gamma^{1}_{11}\mathbf{x}_u + \Gamma^{2}_{11}\mathbf{x}_v + eN$$
$$\mathbf{x}_{uv} = \Gamma^{1}_{12}\mathbf{x}_u + \Gamma^{2}_{12}\mathbf{x}_v + fN$$
$$\mathbf{x}_{vu} = \Gamma^{1}_{21}\mathbf{x}_u + \Gamma^{2}_{21}\mathbf{x}_v + fN$$
$$\mathbf{x}_{vv} = \Gamma^{1}_{22}\mathbf{x}_u + \Gamma^{2}_{22}\mathbf{x}_v + gN$$
$$N_u = a_{11}\mathbf{x}_u + a_{21}\mathbf{x}_v$$
$$N_v = a_{12}\mathbf{x}_u + a_{22}\mathbf{x}_v$$

The symbols $e, f, \text{ and } g$ are the coefficients of the second fundamental form of the surface. All we need to note here is that they are defined extrinsically to the surface, in terms of how the surface embeds in the ambient space, and as the [Gaussian curvature](https://en.wikipedia.org/wiki/Gaussian_curvature) was defined in terms of this embedding, it was by definition dependent on the extrinsic geometry. But here we prove that it is actually intrinsic to the surface. For the interested reader, they can read more about the [second fundamental form](https://en.wikipedia.org/wiki/Second_fundamental_form).

The symbols $\Gamma^{k}_{ij}$ are called the Christoffel symbols of the surface in terms of the parametrization. And observing that $\mathbf{x}_{uv} = \mathbf{x}_{vu}$, we note that the Christoffel symbols are symmetric in the lower indices.

To solve for the Christoffel symbols, we take appropriate inner products of the form $\langle \mathbf{x}_{uu}, \mathbf{x}_u \rangle$ and observe the fact that

$$
E_u = \langle \mathbf{x}_{u}, \mathbf{x}_u \rangle_u = 2\langle \mathbf{x}_{uu}, \mathbf{x}_u \rangle 
$$ 

to obtain the relations; 

$$
\left\{
\begin{aligned}
\Gamma^1_{11} E + \Gamma^2_{11} F &= \langle x_{uu} , x_u \rangle = \frac{1}{2} E_u \\
\Gamma^1_{11} F + \Gamma^2_{11} G &= \langle x_{uu} , x_v \rangle = F_u - \frac{1}{2} E_v
\end{aligned}
\right.
$$

$$
\left\{
\begin{aligned}
\Gamma^1_{12} E + \Gamma^2_{12} F &= \langle x_{uv} , x_u\rangle = \frac{1}{2} E_v \\
\Gamma^1_{12} F + \Gamma^2_{12} G &= \langle x_{uv} , x_v\rangle = \frac{1}{2} G_u
\end{aligned}
\right.
$$

$$
\left\{
\begin{aligned}
\Gamma^1_{22} E + \Gamma^2_{22} F &= \langle x_{vv} , x_u\rangle = F_v - \frac{1}{2} G_u \\
\Gamma^1_{22} F + \Gamma^2_{22} G &= \langle x_{vv} , x_v\rangle = \frac{1}{2} G_v
\end{aligned}
\right.
$$

They are grouped such that $EG-F^2 \neq 0$, which is guaranteed by the third condition of the definition, and $E, F, \text{ and } G$ are the coefficients of the first fundamental form, a brief exposition of which is given at the end. From the expressions above, it is clear that the Christoffel symbols depend only on the first fundamental form and its derivatives, and hence on the intrinsic geometry of the surface. Now, we consider the relations;

$$
(\mathbf{x}_{uu})_v - (\mathbf{x}_{uv})_u = 0
$$

$$
(\mathbf{x}_{vv})_u - (\mathbf{x}_{vu})_v = 0
$$

$$
(N_u)_v - (N_v)_u = 0
$$

These make sense because the derivative order can be swapped for continuous mixed partial derivatives. Performing the differentiation and grouping them gives us three expressions;

$$
A_1\mathbf{x}_u + B_1\mathbf{x}_v + C_1N = 0
$$

$$
A_2\mathbf{x}_u + B_2\mathbf{x}_v + C_2N = 0
$$

$$
A_3\mathbf{x}_u + B_3\mathbf{x}_v + C_3N = 0
$$

Since $\{\mathbf{x}_u, \mathbf{x}_v, N\}$ is a basis, for this to be true, $ A_i = B_i = C_i = 0 \; | i =1,2,3$ must hold, and these give us equations of the form;

$$
(\Gamma^2_{12})_u - (\Gamma^2_{11})_v + \Gamma^1_{12}\Gamma^2_{11} + \Gamma^2_{12}\Gamma^2_{12} - \Gamma^2_{11}\Gamma^2_{22} - \Gamma^1_{11}\Gamma^2_{12} = -EK
$$

$$
(\Gamma^1_{12})_u - (\Gamma^1_{11})_v + \Gamma^2_{12}\Gamma^1_{12} - \Gamma^2_{11}\Gamma^1_{22} = FK
$$

and the equations of compatibility or the [*Mainardi-Codazzi equations*](https://en.wikipedia.org/wiki/Gauss%E2%80%93Codazzi_equations), which will not be discussed here.

From the above two expressions, it can be seen that $K$, the Gaussian curvature, can be expressed explicitly in terms of the coefficients of the first fundamental form and its derivatives, bringing us to the following result;

>    The Gaussian curvature $K$ of a surface is invariant under local isometries.

The importance of this result comes from the fact that the maps between surfaces that preserve the first fundamental form and hence the geometrical notions of length, arc length, and area locally also preserve the Gaussian curvature. To illustrate this, we can consider a unit sphere and a plane. Any map between the two that preserves these metrics(locally isometric) on the two surfaces must preserve the curvature. Therefore, there cannot exist a local isometry between an open subset of the plane and an open subset of the unit sphere.

## The First Fundamental Form
To understand the notion of the first fundamental form, we have to think of the parametrization as a chart that defines a grid locally on the surface, and the vectors $\{\mathbf{x}_u, \mathbf{x}_v \}$ give the velocity along the coordinates axis of this chart. Now, observe that although we are using an open disk of the Euclidean plane as parametrization, the map may not carry the coordinate lines and vectors exactly, but the relation between the two is obvious and is given by;

$$
d\mathbf{x}_q(e_1) = \mathbf{x}_u
$$

$$
d\mathbf{x}_q(e_2) = \mathbf{x}_v
$$

Furthermore, the definition guarantees that the map must preserve linear independence, and this ensures that locally the vectors $\{\mathbf{x}_u, \mathbf{x}_v\}$ act as a basis for the plane that is tangent to the surface at the point $p$, called the tangent plane $T_p(S)$. This plane approximates the surface locally and can be used to make measurements on the surface. And as in the Euclidean plane, the inner product allows us to calculate important geometric quantities like angle, area, and length. So locally, we can carry out these calculations for a small neighborhood around a point on a surface using this tangent plane and its basis as given above, which gives us the notion of the first fundamental form. So, for a point $(a,b)$ or, appropriately, $ae_1+be_2$ in the Euclidean plane is carried to the corresponding point $a\mathbf{x}_u + b\mathbf{x_v}$ by the differential map on the tangent plane $T_q(S)$. If we are interested in the length of a curve on the surface, its velocity vector lies in the tangent plane, and its norm can therefore be computed using this inner product.

$$
\langle a\mathbf{x}_u + b\mathbf{x}_v, a\mathbf{x}_u + b\mathbf{x}_v \rangle = a^2\langle\mathbf{x}_u, \mathbf{x}_u \rangle + 2ab\langle\mathbf{x}_u, \mathbf{x}_v \rangle + b^2\langle\mathbf{x}_v, \mathbf{x}_v \rangle
$$

$$
= a^2E + 2abF + b^2G
$$

where $E, F, \text{ and } G$ are the coefficient of the first fundamental form. And these coefficients contain important information about the basis vectors at each point; e.g., $F = 0$ implies that the basis vectors at that point are orthogonal.

Some further comments are in order, as in this case the inner product was just the standard inner product associated with $\mathbb{R}^3$ restricted to the tangent plane $T_p(S)$, but after that we don't need to consider the ambient space, as we can make all these calculations without any regard to how the surface is embedded in the ambient space. And in the general case, we need not even consider the inner product of the ambient space, as we can define an appropriate inner product for the surface. 

It should also be obvious that area and arc length can also be expressed in terms of this first fundamental form, as;

$$
L =  \int_{t_{0}}^{t_1}\sqrt{ds^2} = \int_{t_{0}}^{t_1} \sqrt{Edu^2+2Fdudv+Gdv^2}
$$

and

$$
A = \iint_R |\mathbf{x}_u\wedge\mathbf{x}_v|dudv = \iint_R\sqrt{EG-F^2}dudv
$$

# Riemannian Metric Tensor
In this section, we generalize some of the ideas that originated in the study of surfaces to arbitrary finite-dimensional manifolds $M$(for now, we are considering them to be embedded in ambient spaces). To begin with, we note that an n-dimensional manifold is just a generalization of a regular surface, which ensures that it can be parametrized locally using an n-dimensional open Euclidean set and is locally Euclidean, so has a definite tangent space $T_p(M)$ at all points. With these definitions, let's consider an n-dimensional manifold, parametrized locally by a coordinate neighborhood $\phi: U \subset \mathbb{R}^n \to V \cap M \subset \mathbb{R}^{m}$ having parameters $\{\mathbf{x}^1, ...,\mathbf{x}^n \}$. Note that $m > n$, a higher-dimensional Euclidean space in which the manifold sits.

Proceeding similarly, we can equip each tangent space with an inner
product (it need not be inherited from an ambient space). For the
moment, however, we restrict ourselves to the case in which the
Riemannian metric is induced by the inner product of the ambient
Euclidean space. Thus, relative to the coordinate basis

$$
g_{ij} = \langle \partial_i, \partial_j\rangle \text{ where } \partial_i = \frac{\partial\phi}{\partial \mathbf{x}^i} = d\phi\left(\frac{\partial}{\partial\mathbf{x}^i}\right) 
$$

It is easy to see from the properties of the inner product that $g_{ij} = g_{ji}$. These quantities define a metric tensor at each point, which may have different representations based on different bases, but explains the same metric at a specific point. This can be used to define the line element at a point as;

$$
ds^2 = \sum g_{ij}d\mathbf{x}^id\mathbf{x}^j = d\mathbf{x}^T[g_{ij}]d\mathbf{x}
$$

where $[g_{ij}]$ is the matrix representation of the tensor in a specific basis, and it is easy to see that, in the way in which it is defined, this matrix is symmetric and positive-definite. Similarly, we can associate a basis with each point as $\{\partial_1, ..., \partial_n, N\}$ where $N = \{{N_a}\}_{a=1}^{m-n}$ is a basis for the orthogonal complement of the space spanned by $\partial_i's$ in the ambient space. And thus, we can study the manifold by the change in the basis elements in the neighborhood of the point in terms of the basis, given as;

$$
\partial_{ij} = \sum_{k = 1}^n \Gamma_{ij}^k\partial_k + \sum_{a=1}^{m-n}h^a_{ij}N_a 
$$

It can be seen that $\Gamma_{ij}^k = \Gamma_{ji}^k$ and $h^a_{ij} = h^a_{ji}$. Similarly, using the fact that we can swap the order of mixed third-order partial derivatives to give an explicit form of the Riemannian curvature, a natural generalization of the Gaussian curvature. But a more interesting direction is to define a covariant derivative and to give a generalized formulation of a geodesic on the n-dimensional manifold. Above, we observe that the derivative of $\partial_ i$ with respect to $j$ has components in the orthogonal complement of the basis $\{\partial_1, ..., \partial_n\}$, so if we interpret this as acceleration, then it can be thought of as having both components of acceleration tangent to the manifold and in the orthogonal complement of tangent space (normal component) $T_p(M)$. Then the normal component is related to the curvature of the manifold, but the tangential component relates to how the velocity vector $\partial_i$ bends in the tangent space $T_p(M).$ and is given by;

$$
\nabla_{\partial_i}\partial_j = \sum_{k = 1}^n \Gamma_{ij}^k\partial_k 
$$

And to draw parallels with how a straight line, or rather a path along a straight line, is, that is, if the velocity vector along it is constant, then the derivative of the velocity vector is zero. Also, note that the derivative of the velocity vector on a Euclidean plane always belongs to the plane, so the covariant derivative is a natural generalization of it. So, to give a mathematical description of such a curve that has no tangential acceleration, we put the covariant derivative along it to zero.

$$
\nabla _{\dot{\gamma}}\dot{\gamma} = 0
$$

where $\dot{\gamma}$ is the velocity vector along the curve. And as the curve is parametrized by $t$, so;

$$
\dot{\gamma} = \sum_{i=1}^{n} \frac{d\mathbf{x}^i}{dt}\partial_i
$$

and so, the equation becomes;

$$
\nabla _{\dot{\gamma}}\left(\sum_{j=1}^{n} \frac{d\mathbf{x}^j}{dt}\partial_j\right) = 0
$$

and as the covariant derivative obeys the product rule and is linear, we get;

$$
\sum_{j=1}^{n} \left(\frac{d^2\mathbf{x}^j}{dt^2}\partial_j + \frac{d\mathbf{x}^j}{dt}\nabla_{\dot\gamma}\partial_j \right) = 0
$$

Now, we need to calculate $\nabla_{\dot\gamma}\partial_j$, which can be done as;

$$
\nabla_{(\sum_{i=1}^{n} \frac{d\mathbf{x}^i}{dt}\partial_i)}\partial_j = 
\sum_{i=1}^{n} \frac{d\mathbf{x}^i}{dt}\nabla_{\partial_i}\partial_j = 
\sum_{i=1}^{n}\sum_{k=1}^n \frac{d\mathbf{x}^i}{dt}\Gamma_{ij}^{k}\partial_k
$$

giving us the final expression;

$$
\sum_{k=1}^n \left( \frac{d^2\mathbf{x}^k}{dt^2} + \sum_{i,j =1}^n\Gamma_{ij}^k\frac{d\mathbf{x}^i}{dt}\frac{d\mathbf{x}^j}{dt}\right)\partial_k = 0
$$

which implies that;

$$
\frac{d^2\mathbf{x}^k}{dt^2} + \sum_{i,j =1}^n\Gamma_{ij}^k\frac{d\mathbf{x}^i}{dt}\frac{d\mathbf{x}^j}{dt} = 0 \text{ for all }  k = 1, ..., n
$$

This gives a classification of the geodesic paths on the n-dimensional manifolds.

## Additional Comments
It should be observed that in the definition of the Riemannian manifold, we used an inner product, which by definition is bilinear, symmetric, and positive definite. So, a Riemannian manifold by definition is equipped with a varying inner product at each point. But we can define generalized manifolds by stripping away some of the defining properties of an inner product; a pseudo-Riemannian metric tensor has a bilinear(non-degenerate), symmetric form associated with each point. Furthermore, we can define a generalized manifold having only a bilinear form associated with each point.

Secondly, for the abstract Riemannian manifold, we can get rid of the $N$ component entirely and work our way using the tangent space $ T_p (M) $ entirely. That way, the inner product is an appropriate bilinear, symmetric, positive definite form defined for every point of the manifold, and the emphasis is on the Levi-Civita connections, which explain the intrinsic connections on the manifold.

## Proof of the invariance of metric tensor
The metric tensor is the map $g: T_p(M) \times T_p(M) \to \mathbb{R}$, which is bilinear, symmetric, and positive definite. And this map can be represented as $$\langle u, v\rangle = u^TGv$$ where $u, v \in T_p(M)$ and $G = [g_{ij}]$ in the given basis $\mathcal{B}$ as defined previously. Now, consider $u', v' \in T_p(M)$ in basis $\mathcal{B}'$ such that the map between the two is $A$. Then, we have that;

$$
Au = u' \text{ and } Av = v'
$$

by calculating the matrix $G'$ in basis $\mathcal{B}'$, we see that $G' = (A^T)^{-1}GA^{-1}$, and so; 

$$
\langle u', v' \rangle = \langle Au, Av \rangle = u^TA^TG'Av = u^TGv = \langle u,v \rangle
$$

So, although we may have different $G$ for different bases, the form is invariant under a change of basis.

