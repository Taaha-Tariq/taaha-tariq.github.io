---
title: "Galois Correspondence and the Insolvability of the General Quintic"
date: 2026-08-27
categories: [Mathematics, Algebra]
tags: ["Galois Theory", "Polynomials", "Field Theory", "Algebra"]
excerpt: "An explanation of the Galois correspondence and its application to the insolvability of the quintic equation."
math: true
---

# Introduction
This topic deals with one of the oldest problems, one which was passed down from the Greeks to the Persians and then back to Europe, and was ultimately transformed by the work of two great mathematicians, *Niels Abel* and *Évariste Galois*. And to do justice to the topic, we should comment a little on the history of the problem.

The Greeks, who were very fond of geometry, studied mathematics largely in a geometrical context, and thus encountered polynomial equations, most notably second-degree quadratic equations in problems involving areas. Although they did not possess our modern number systems and, for some time, were uncertain how to interpret irrational quantities, they developed geometric methods for solving many quadratic equations. Later, the Persian mathematician *al-Khwarizmi* systematically treated six types of quadratic equations, pioneering the development of algebra and laying important foundations for the general treatment of polynomial equations. This eventually led to the familiar quadratic formula for the general second-degree equation

$$ 
ax^2+bx+c=0, 
$$

$$
x=\frac{-b\pm\sqrt{b^2-4ac}}{2a}. 
$$

Afterwards, another prominent Persian mathematician, *Omar Khayyam*, made major advances in the study of cubic equations, systematically classifying them and giving geometric constructions for solving them through intersections of conic sections. These ideas eventually reached Europe, where mathematicians of the Italian Renaissance found algebraic solutions to the cubic and, subsequently, the quartic. This remarkable progression, from the quadratic to the cubic and quartic, culminated in the realization that the analogous problem for the general quintic was fundamentally different. Niels Abel proved that there can be no general formula by radicals for the roots of a polynomial of degree five or higher, while Évariste Galois developed the theory that explains precisely when the roots of a polynomial can be expressed by radicals.

# Galois Correspondence
It should be noted that Galois's insight into this problem influenced many branches of mathematics and gave rise to many yet, but for Galois, this was a means to solving the problem. The problem of when exactly a polynomial is solvable by radicals.

To proceed, we need the following terminology and notation;
### Definition: (Automorphism, Galois Group, Fixed field of $H$)
> Let $E$ be an extension field of the field $F$. An *automorphism* of $E$ is a ring isomorphism from $E$ onto $E$. The *Galois group* of $E$ over $F$, Gal($E/F$) is the set of all automorphisms of $E$ that take every element of $F$ to itself. If $H$ is a subgroup of Gal($E/F$), the set
>
>$$
E_H = \{x \in E \;|\; \phi(x) = x \text{ for all } \phi \in H\}
>$$
>
>is called a *fixed field* of $H$.

To prove the claims, we observe that since the set of automorphisms is a group under composition, and if $\phi, \psi \in \text{Gal}(E/F)$, then $\phi\psi^{-1} \in \text{Gal}(E/F)$ because if an automorphism fixes a subset, then its inverse also fixes the same subset and the composition of two such automorphisms also fixes the subset. Thus, it is a subgroup of the group of all automorphisms of the field extension $E$. And as for the second claim of $E_H$ being a field, we need to show that if $a, b \in E_H$, then $ab^{-1} \in E_H  \wedge a-b \in E_H$; that is, the subset is closed under multiplication and addition and has both multiplicative and additive inverses of all the elements(the obvious exception of the multiplicative inverse of $0$). But this follows because $\phi$ is an automorphism;

$$
\forall \phi \in H\; \; \; \; \phi(a-b) = \phi(a) - \phi(b) = a-b
$$

$$
\phi(ab^{-1}) = \phi(a)\phi(b)^{-1} = ab^{-1}
$$

Consider the following two lattices. The first is the subgroup lattice of the field automorphisms of $\mathbb{Q}(\sqrt[4]{2}, i)$, which is isomorphic to $D_4$. The latter is the subfield lattice of $\mathbb{Q}(\sqrt[4]{2}, i)$ over $\mathbb{Q}$. Determining the subfield lattice of the field extension is substantially harder, but the two diagrams suggest a connection: the subfield lattice has the same structure as the subgroup lattice, but inverted. 

![Subgroup lattice](/assets/images/subgroup_lattice.png)
![Subfield lattice](/assets/images/subfield_lattice.png)

Before stating the **fundamental theorem of Galois Theory**, let's try to formalize a little the connection that is insinuated by the two lattices above. In general, if $E$ is an extension of $F$, and we let $\mathcal{F}$ be the lattice of subfields of $E$ containing $F$, and let $\mathcal{G}$ be the lattice of subgroups of $\text{Gal}(E/F)$, then for each $K$ in $\mathcal{F}$, the group $\text{Gal}(E/K)$ is in $\mathcal{G}$, and for each $H$ in $\mathcal{G}$, the field $E_H$ is in $\mathcal{F}$. Thus, we may define a mapping $g: \mathcal{F} \to \mathcal{G}$ by $g(K) = \text{Gal}(E/K)$ and a mapping $f:\mathcal{G} \to \mathcal{F}$ by $f(H)= E_H$. Then, if $K$ and $L$ belong to $\mathcal{F}$ and $K \subseteq L$, then $g(K) \supseteq g(L)$. Similarly, if $G$ and $H$ belong to $\mathcal{G}$ and $G \subseteq H$, then $f(G) \supseteq f(H)$. The first follows from the fact that if an automorphism fixes a field, then it necessarily fixes every subfield of that field. Similarly, if $G\subseteq H$, then every element fixed by every automorphism in $H$ is certainly fixed by every automorphism in $G$. Thus, both mappings reverse inclusion. And it can be seen that these inclusions imply that $(fg)(K) \supseteq K$ and $(gf)(G) \supseteq G$, and the fundamental theorem of Galois theory establishes when the two mappings are inverse of each other, or more appropriately, $f$ and $g$ are inclusion-reversing isomorphisms between the lattices $\mathcal{F}$ and $\mathcal{G}$.

### Theorem: (Fundamental Theorem of Galois Theory)
>Let $F$ be a field of characteristic $0$ or a finite field. If $E$ is the splitting field over $F$ for some polynomial in $F[x]$, then the mapping from the set of subfields of $E$ containing $F$ to the set of subgroups of $\text{Gal}(E/F)$ given by $K\to\text{Gal}(E/K)$ is a one-to-one correspondence. Furthermore, for any subfield $K$ of $E$ containing $F$,
> 1. $[E:K] = \|\text{Gal}(E/K)\|$ and $[K:F]= \|\text{Gal}(E/F)\|/\|\text{Gal}(E/K)\|$. 
> 2. If $K$ is the splitting field of some polynomial in $F[x]$, then $\text{Gal}(E/K)$ is a normal subgroup of $\text{Gal}(E/F)$ and $\text{Gal}(K/F)$ is isomorphic to $\text{Gal}(E/F)/\text{Gal}(E/K)$.
> 3. $K = E_{\text{Gal}(E/K)}$.
> 4. If $H$ is a subgroup of Gal$(E/F)$, then $H = \text{Gal}(E/E_H)$.

This reduces the questions regarding subfields of splitting fields to questions about the Galois groups associated with the splitting fields over the base field. But we still need to state what it means for a polynomial to be solvable in terms of radicals in the language of field extensions, and to link it with the corresponding group counterparts.

# Solvability by radicals and Solvable Groups
We proceed by defining what it means for a polynomial to be solvable in terms of radicals in the language of field extensions as follows;

### Definition: (Solvable by Radicals)
> Let $F$ be a field, and let $f(x) \in F[x]$. We say that $f(x)$ is solvable by radicals over $F$ if $f(x)$ splits in some extension $F(a_1,a_2,...,a_n)$ of $F$ and there exist positive integers $k_1,k_2, ..., k_n$ such that $a_1^{k_1} \in F$ and $a_i^{k_i} \in F(a_1, ...,a_{i-1})$ for $i = 2,...,n$.

So, a polynomial is solvable by radicals if we can obtain all of its zeros by adjoining nth roots (for various n) to $F$. So, solvability by radicals comes down to solving all the roots of the polynomial in terms of the elements of $F$ combined using the five operations: addition, subtraction, multiplication, division, and nth root. A simple illustration of this would be the well-known quadratic formula for the general second-degree equation $f(x) = ax^2+bx +c \in \mathbb{Q}[x]$. Notice that the quadratic formula has the form;

$$
\frac{-b}{2a} \pm \frac{\sqrt{b^2-4ac}}{2a}
$$

where the term $\sqrt{b^2 - 4ac}$ doesn't not necessarily belongs to $\mathbb{Q}$ and when $b^2 - 4ac < 0$, it doesn't even belong to $\mathbb{R}$, but $(\sqrt{b^2 - 4ac})^2$ always belongs to $\mathbb{Q}$, so by adjoining these 2nd roots, we can get all the roots of the polynomials of second-degree over $\mathbb{Q}$. It should be noted, though, that the field extension for every polynomial is different; e.g., $x^2 - 2$ splits over $\mathbb{Q}(\sqrt{2})$, but $x^2 - 3$ splits over $\mathbb{Q}(\sqrt{3})$.

Analogously, we need to define solvability for groups, which we do in the following way;
### Definition: (Solvable Group)
> We say that a group $G$ is solvable if $G$ has a series of subgroups
>
>$$
\{\epsilon\} =H_0 \subset H_1 \subset H_2 \subset ... \subset H_k=G
>$$
>
>where, for each $0 \le i < k, H_i$ is normal in $H_{i+1}$ and $H_{i+1}/H_i$ is Abelian.

We see right away that every Abelian group is solvable. So, are the dihedral groups(consider the chain $\{\epsilon\} \subset H_n \subset D_n$ where $H_n$ is the subgroup of rotations). Also, the groups of order $p^n$ where $p$ is a prime (application of Sylow's theorem and Cauchy's theorem), and by the Feit-Thompson theorem, every group of odd order is solvable.

Now, we state without proving the theorem that relates solvability by radicals to a solvable Galois group, the proof of which depends on several supplementary theorems that, along with their proof can be found in the reference book.
### Theorem: ((Galois) Solvable by Radicals implies Solvable Group)
>Let $F$ be a field of characteristic $0$ and let $f(x) \in F[x]$. Suppose that $f(x)$ splits in $F(a_1, a_2, ..., a_t)$, where $a_1^{n_1}\in F$ and $a_i^{n_i} \in F(a_1, ...,a_{i-1})$ for $i = 2, ...,t$. Let $E$ be the splitting field for $f(x)$ over $F$ in $F(a_1, a_2, ...,a_t)$. Then the Galois group $\text{Gal}(E/F)$ is solvable.     

The converse of this theorem is also true, but for our application this is sufficient. Also, it is known that every finite group in existence is the Galois group over some field. So, the problem reduces to showing that for an arbitrary polynomial of degree n, is it so that it always has a solvable Galois group, a detailed exposition of which for a particular quintic is given in the next section.

# The Insolvability of a Quintic
Consider the quintic equation

$$
f(x) = x^5-10x + 5 \in \mathbb{Q}[x]
$$

By Eisenstein's criterion, we observe that $p=5$ divides $a_1$ and $a_0$, but doesn't divide $a_5$, and $p^2$ doesn't divide $a_0$, so it is irreducible over $\mathbb{Q}$.
So, all of its roots must belong to some field extension over $\mathbb{Q}$. Suppose we consider the field extension $\mathbb{R}$ over $\mathbb{Q}$; then we see that $f(-2) = -7$, $f(0) = 5$, $f(1) = -4$, and $f(2) = 17$, so it has roots in the intervals $(-2, 0), (0,1)$, and $(1,2)$, but not all roots can belong to $\mathbb{R}$, because that would imply $f'(x)$ vanishes at exactly four points in $\mathbb{R}$, but it vanishes at only two.

$$
f'(x) = 5x^4-10 = 5(x+\sqrt[4]{2})(x-\sqrt[4]{2})(x^2+ \sqrt{2})
$$

So, only three roots of $f(x)$ can belong to $\mathbb{R}$, which implies that the other two roots must be of the form $a\pm bi \in \mathbb{C}$ as it is an algebraically closed field extension of $\mathbb{R}$. Furthermore, every field automorphism, that is, every element of the Galois group, must map a root to a root.

$$
\phi(f(a)) = f(\phi(a)) = 0
$$

So, roots are invariant under all field automorphisms. So, we can think of the Galois group in terms of its action on the set of polynomial roots, and since we have a set of five roots, the Galois group must be a subgroup of $S_5$. This subgroup must also have a transposition or a 2-cycle obtained by swapping the complex roots while fixing the other three $(a+bi \to a-bi; a-bi \to a+bi)$, and since $f$ is irreducible over $\mathbb{Q}$, the Galois group acts transitively on its five roots. Hence $5\mid |G|$. By Cauchy's theorem, it contains an element of order $5$, which, as an element of $S_5$, must be a $5$-cycle, but the only subgroup of $S_5$ having a 2-cycle and a 5-cycle is $S_5$ itself. Therefore, $\text{Gal} \cong S_5$, but $S_5$ is not solvable as $A_5$ is a simple, finite, non-abelian subgroup of $S_5$. Thus, the polynomial is not solvable by radicals.

# Conclusion
The ideas developed in this article provide a way for us to see when the roots of a polynomial over $F[x]$ can be obtained by combining the elements of the field $F$ using addition, multiplication, division, subtraction, and nth roots. These combinations may give messy expressions for the roots, but still a closed form of the roots. It should, however, be noted that this in any way does not establish that a degree n equation over a field $F$ can have fewer than n roots counting multiplicity. It only deals with whether we can find those roots using these operations or not. As for the former, we can be assured that there exists some splitting field for the polynomial over the base field, which has exactly n roots counting multiplicity.

# References
* Contemporary Abstract Algebra (10th Edition) by Joseph A. Gallian

