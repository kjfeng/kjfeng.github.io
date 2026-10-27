---
title: "Industry Job Search Retrospective"
slug: "industry-job-search"
---

# Industry job search retrospective
October 2026

Jump to [Concrete Advice](#concrete-advice) for a TLDR.

Earlier this year, I went on the industry job market as a graduating human-computer interaction (HCI) PhD student. There are now quite a few blog posts from AI PhD students about their own industry job hunting experiences, which I highly recommend (examples [1](https://alisawuffles.github.io/blog/job-search/), [2](https://silviasapora.github.io/blog/ml-interviews.html), [3](https://yongzx.github.io/blog/2026/06/24/job-search/)). They’re well-written and great resources, but as someone who didn’t focus on "conventional AI research"[^conventional-ai-research] in my PhD, I would’ve appreciated more perspectives from those in a similar boat. This post is for those in AI-adjacent fields, like HCI, going up for industry research positions (research/applied scientists) in tech companies and frontier labs in this AI summer. 

For context, I did my PhD at the University of Washington, specializing in HCI systems research. I published mainly at HCI conferences (e.g., CHI, CSCW, DIS). I also started attending and presenting at NeurIPS workshops starting 2023, but only went to ones on interdisciplinary topics I found relevant (pluralistic alignment, socially responsible LMs, etc.). 

My PhD work involved a mix of user studies (qualitative and quantitative), full-stack software engineering, and adapting LLMs and agents for domain-specific use cases. I didn’t do any model training as part of my PhD work, although I learned some post-training basics on the side because they felt important. Overall, my technical knowledge of how modern AI systems like LLMs worked under-the-hood was pretty minimal until around December of my final year, when I started studying for interviews. 

## AI summer = a model-centric world

In HCI, we’re trained to take a human-centric approach to technology development. In this AI summer, the unfortunate reality is that we live in a model-centric world. This means that research on the model itself (e.g., improving capabilities, safety, evaluation, etc.) is treated as a top priority for research orgs. 

If one looks at successful and fast-growing AI products today, this makes sense. For example, coding agents suddenly became much more useful in December 2025 because the release of Opus 4.5 significantly boosted correctness and reliability for coding. Many of what industry (and HCI!) cares about, like improvements in domain-specific utility and user experience, can now come directly from the model, not just the UI and other scaffolding around the model. In fact, one open question I pose in my dissertation is whether the models are eating up their scaffolds: do capability improvements outpace the need for model orchestrators and wrappers, even for complex work where scaffolding is required today?

Evaluation is an interesting area where HCI expertise seems to naturally fit in. I also agree with Arvind Narayanan’s predictions in his [ICML 2026 keynote](https://www.cs.princeton.edu/~arvindn/talks/icml-2026-annotated-slides/#s45) that evals will likely be an increasingly important and prominent area of AI research in the coming years. More on this later.

All this is to say that many top research labs have embraced, and are hiring for, this model-centric world. Resources, money, attention, prestige, etc. in industry research are now concentrated around models, because everything else is expected to follow from there. I think [this post about Anthropic](https://x.com/tszzl/status/2051045196260167790) captures the sentiment well. This was a mindset that wasn’t immediately obvious to me when I started my job search but is now obvious in hindsight.

## Application and interview experiences

I started applying late 2025 and throughout early-mid 2026. I started taking calls with recruiters mid-January, and scheduled my first interviews for early March. I hoped to wrap everything up before June, but that turned out to be too optimistic of a timeline. 

I won’t go into much detail about how I got the interviews: it was a mix of leveraging the network I built up over my PhD, cold-applying, and recruiters reaching out to me. I’ll instead focus on what happened after I started interviewing. I’ll also link some resources I used at the bottom.

In total, I interviewed at 10 companies. I’d bucket them into 3 categories:
- Big tech
- Frontier labs
- Startups and non-profits

My interviews included:
- General coding
- ML coding
- ML knowledge
- Role-specific coding
- Role-specific research discussion
- General research discussion
- Job talk (30-45 mins)
- Behavioral

By “role-specific” coding and research discussion, I mean interviews where the team sent over materials related to something they’re working on in advance, and the coding/research discussion was centered around that. I found these interviews to be the most enjoyable, thoughtful, and representative of the job. They’re also more common among startups and non-profits. For the other interview types, a fellow UW PhD grad, Alisa Liu, has detailed descriptions in her blog post, which I encourage you to check out.

In general, a couple things surprised me. One was that, even though a position may seem like a great fit for HCI researchers from its job description, you’ll still need to clear the initial ML and coding stages before you get a chance to talk about your research. This is because, at many big tech companies and frontier labs, the interview process for the entire job family (e.g., research scientist) is the same regardless of the specific position. For big tech and frontier labs, don’t expect to get a chance to talk about your research until the onsite (excluding the initial recruiter call).

There’s a bit of a caveat for a small percentage of applicants. A recruiter told me that, if a team wants you badly enough and you fail the initial technical rounds, they’ll keep asking you to take it until you pass. Of course, this kind of treatment applies to very few applicants. I'll talk more about this in the [Concrete Advice](#concrete-advice) section.

The second surprising thing was the diversity of interviews. I found it very difficult to anticipate what might come up in an interview, because even interviews of a particular format can vary wildly. I went into a general coding interview expecting a LeetCode-style question but got asked to implement a RL rollout loop. I was told, for a ML knowledge interview, that I might be asked about anything ML-related (very helpful, I know). For a ML coding interview, I generated practice questions for myself with Claude/GPT/Gemini using a pretty detailed description given to me by the recruiter, but the actual interview turned out to be totally different. At some point, I just accepted the fact that the interview will just be different from what I expect and that I’d have to do most of my thinking on the spot.

The diversity of interviews makes it really hard to 1) know what to study, and 2) know when you’ve studied enough. This is on top of the fact that HCI PhD students are typically very underprepared for ML interviews (at least I was!). Even AI PhD students have to study extensively. After all, most of them aren’t implementing things like attention and backpropagation from scratch in their research. If you look at Alisa’s [LLM](https://alisawuffles.notion.site/alisa-s-book-of-llms) and [math](https://alisawuffles.notion.site/math-notes) notes, you’ll quickly get a sense of how meticulously and thoroughly she studied. 

On the topic of studying for ML interviews: I initially thought that, because everyone needs to study for them, HCI PhD students aren’t starting too far behind our AI counterparts. This is somewhat true when it comes to knowledge-based interviews (assuming you have a basic grasp of probability, statistics, and linear algebra), but not so true for ML coding. I was able to clear a knowledge-based ML interview by studying for a few weeks using a custom flashcards app I Claude Coded (linked at the bottom). But as I prepared for ML coding, I realized that I just didn’t have many important intuitions AI researchers pick up over time through their work, like debugging tensor shapes and knowing what’s stored on CPU vs GPU. None of my ML coding interviews went very well as a result. 


## Concrete Advice

Given the above, I’d give myself the following advice if I were to do it again.

**Your relationship with the hiring manager is super important.** In fact, I'd even say it's the biggest factor in determining whether/how you get an offer. This is not explicitly advertised, but at many places, your interview experiences can be quite different (and likely easier) if the hiring manager really wants you. While interview processes seem rigid from the outside, hiring managers generally have a decent amount of power to tweak things if needed. This can mean adapting some interviews to better match your expertise instead of putting you through the standard ones. If your relationship with the hiring manager is close, it's worth asking about this possibility. Of course, they're not going to do this to everyone—this will likely only happen if the hiring manager knows your work very well and/or you've impressed them as an intern. So put some thought into how and to whom you communicate your work during your PhD, and develop good relationships with your colleagues. 

**Spend the most time on topics you want to learn and can most benefit you.** As I mentioned above, it’s hard to anticipate what’s going to happen in the interview. You might sink a lot of time into preparing for an interview, only to find that none of it turned out to be useful. I expect interviews to continue being diverse, and perhaps increasingly so, as companies experiment with how to best evaluate candidates in this era of AI-enabled work. This means the highest-value prep you can do is investing in knowledge that will be valuable to you beyond interviews. Use this as a chance to learn new topics and sharpen technical skills that will serve you well later on, regardless of whether you get to use them in interviews. I therefore don’t recommend spending much time on LeetCode-style practice.

**Let the market do its work.** If you feel intimidated or discouraged by the job search, just keep in mind that the market has a pretty remarkable way of sorting people into opportunities that best fits them. I strongly believe that the jobs one is most well-suited for and will thrive in are also ones they will most easily obtain, provided that person has worked hard towards what they want. This has been personally true of opportunities I’ve had in the past, as well as anecdotes I’ve heard from friends. You’ll likely face uncertainty and tough rejections on the market. Those won’t necessarily lead to worse outcomes: just the market work its magic for you!


## Promising directions for HCI PhDs

Minsuk Chang [wrote about](https://minsukchang.com/blog/2026-01-14-hci-in-ai.md.html) some ways for HCI grads to position themselves in industry. I wanted to offer a complementary perspective based on my experiences.

To be clear, HCI research roles still exist. They’re just more rare nowadays because companies of all shapes and sizes are prioritizing headcount for this model-centric world I talked about earlier. From various conversations, I got the sense that many researchers initially hired for their HCI expertise were pivoting to doing more AI research because it’s better for their visibility and career growth within their org. 

**Evaluations.** Evals is possibly the part of AI research that is closest to HCI. There’s increasing interest in creating ecologically valid, real-world, multi-turn evals for models and agents. This way of thinking is quite aligned to the task-specific experiment design mentality we develop in HCI. Also, there’s emerging work on creating faithful user simulators for multi-turn evals, benchmarking, and RL that can benefit from HCI intuitions. Finally, I think longitudinal evaluations of AI will become increasingly important, which HCI seems to be uniquely positioned to tackle. That said, it’s unclear to me today whether a hiring manager for an evals position would prefer an HCI person or an AI person who has some evals experience (many of whom do). 

**AI safety/alignment.** This has some overlaps with Evaluations. There are many (IMO) pressing problems in AI safety and alignment that need to be solved for AI's benefits to outweigh its risks. I've also found the AI safety community to be pretty supportive and welcoming of new entrants. HCI intuition can be useful here, but most of the methods you use (and possibly interviews) will likely be closer to AI than HCI. There are also non-technical AI governance and policy roles that I'd fit under this category. If you have experience with and enjoy constructing taxonomies and frameworks, those might be a good fit for you.

**Human data.** In 2026, there’s a booming industry that works with domain experts (think lawyers, chemists, investment bankers, etc.) to create benchmarks and training data to push frontier AI capabilities in targeted domains. In my interactions with human data labs, I found the industry to be very receptive to HCI expertise. There are lots of insights from the crowdsourcing era of HCI that I think are directly applicable here. I’ll also note that while researchers can work directly with experts, there are often operations staff at human data labs specifically hired to handle the logistics of recruiting/tasking experts, so you’ll likely be working more on the data side.

**Forward deployed engineering/research.** This role picked up significant popularity in 2026 as companies are pushing hard to deploy AI into as many domains as they can. FDEs work directly with customers to learn their needs, develop customized solutions, and relay feedback from customers back to the company. When a FDE friend described his job to me, it sounded like it had a lot of overlap with HCI systems research. However, companies seem to like to hire FDEs right out of undergrad. A PhD/research background is unnecessary and might even make you seem overqualified. 

**UX research.** I wasn’t really considering UX research positions, but the role is also changing quickly. I talked to a couple UX researchers at a company I interned at and their scope seems to be broadening, such that some are even prototyping and engineering systems in addition to doing user studies. Overall, my impression is that UX research is starting to look increasingly similar to what HCI systems researchers do for papers (formative study, system building, evaluation), so maybe this will actually be a very fitting path for HCI PhDs in the future.

**Product management.** I spoke to a couple PMs during my interviews and realized that product folks have a very HCI-esque ways of thinking. It's important for them to see things from the perspectives of users and many of the problems they talked about were ones I've also thought about in my research. What HCI PhD students do can often be viewed as a more scientifically rigorous version of what many PMs do in industry (e.g., using statistical significance to show your system is better than a baseline instead of going off vibes), so the skills seem like they'll transfer over smoothly. There's also an emergence of a "research PM" role in which having a PhD might be helpful. 

**ML/software engineering.** I know some HCI grads who chose this path. The interviews, from what I've heard, are more predictable and standard, and the jobs themselves are generally stable and well-paying. However, these often don't involve research unless you're on a research-focused team, so you might lose touch with the academic community over time (if that's something you care about).

## General reflections on HCI and AI

Towards the end of my PhD, I started to find it unproductive to distinguish between what is and isn’t “HCI research.” Some papers at AI conferences include user studies (and decently rigorous ones too). Some papers at HCI venues contribute datasets and models. The gap between “AI” and “(technical) HCI” research is closing quickly. In fact, everything AI and AI-adjacent is being sucked into “everything conferences” like NeurIPS and ICML. 

This also has an impact on hiring. If recruiters were choosing which conferences to attend, they’d get more value out of going to these everything conferences than specialized ones. When I was interning, I learned internally that the company decided to stop sending recruiters to CHI even though they've had a sizable presence at CHI for many years. The moral of the story is to not define who you are as a researcher by which venues you publish in. Instead, define a North Star goal for your work (e.g., improve how AI reasons about user intent) and send your work to whichever venues you think are most impactful and beneficial for your career. This might make your time on the job market easier. The HCI community is quite small and people outside the community often don’t know what HCI researchers do.

## Closing thoughts

I want to wrap up by zooming out and looking at the bigger picture. Jonathan Grudin has a [great article](https://dl.acm.org/doi/abs/10.1609/aimag.v30i4.2271) arguing that AI summers correspond to HCI winters, and vice versa. It’s obvious that we’re in an AI summer now. While I don’t think we’re exactly in an HCI winter (the problems in human-AI interaction are more interesting than ever), industry has adopted a model-centric mindset. 

For HCI PhDs, navigating the job market in an AI summer doesn’t mean you have to drop your human-centered mindset. Rather, I’d think about it this way: some of the biggest advancements in usability and user experience can come from model-centric work: defining model behaviors, post-training to hillclimb on those behaviors, and rigorous evaluations to validate post-training success. That is, donning the costume of an AI researcher for the time being can actually be a great way to realize human-centered goals.

Given the frontier labs’ big push to automate AI research, I expect the next AI winter will arrive when they’ve successfully accomplished that goal. That’s when AI research[^hillclimbed] will lose its luster and (human) researchers will pivot to other problems. Maybe then human-centered research will make its comeback in industry. 

## Resources for studying ML
- Andrej Karpathy’s [Zero to Hero YouTube series](https://www.youtube.com/playlist?list=PLAqhIrjkxbuWI23v9cThsA9GvCAUhRvKZ)
- [Stanford CS336 (Spring 2026)](https://cs336.stanford.edu/)
- [Blind 75](https://neetcode.io/practice/practice/blind75) / [Neetcode 150](https://neetcode.io/practice/practice/neetcode150) for general coding
- [DeepML](https://www.deep-ml.com/problems) for ML coding 
- [ML fundamentals flashcards app](https://github.com/kjfeng/ml-prep-app)

[^conventional-ai-research]: By this, I mean that AI was not my home academic community: my main conferences were not NeurIPS, ICML, ICLR, CVPR, etc.

[^hillclimbed]: At least anything that can be hillclimbed.
