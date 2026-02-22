+++
date = '2026-02-22T14:11:29+02:00'
draft = true
title = 'Seraph'
description = ''
thumbnail = '/images/Seraph.svg'
# showThumbnail = false
tags = ['Complex Numbers','Grid Transformation']
# coauthors = [
#   { name = 'Jane Doe', link = 'mailto:jane@example.com' },
# ]
+++

"שְׂרָפִ֨ים עֹמְדִ֤ים ׀ מִמַּ֙עַל֙ ל֔וֹ שֵׁ֧שׁ כְּנָפַ֛יִם שֵׁ֥שׁ כְּנָפַ֖יִם לְאֶחָ֑ד בִּשְׁתַּ֣יִם ׀ יְכַסֶּ֣ה פָנָ֗יו וּבִשְׁתַּ֛יִם יְכַסֶּ֥ה רַגְלָ֖יו וּבִשְׁתַּ֥יִם יְעוֹפֵֽף׃
`"

We define a grid by
$$P=\set{0.01(x+iy)\in\mathbb C\mid (x\in\mathbb Z\vee y\in\mathbb Z) ,200\le x,y\le200}.$$

Then we define a complex function,
$$f : P \subseteq \mathbb C \longrightarrow \mathbb C $$
where,
$$f(z)= iz\sqrt i \ \mathrm{mod}(3,z)$$
So, our graph is the image of this function.
In other words,
$$G=f(P).$$

{{< video src="/videos/Seraph.mp4" width="75" >}}
