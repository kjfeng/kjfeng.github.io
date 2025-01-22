import React from 'react';
import '../main.css';
import { AuthorPile, Figure, InfoPage } from './HelperComponents';
import Details from './Details';
import * as dataObjects from './dataObjects.js';

export function SansTimesSans() {

  return (

    <InfoPage helmetExt="Sans Times Sans">

      <h2>Sans Times Sans</h2>
      <p className="venue-page">Timeless typography for the modern web</p>

      <Figure path="./img/sts-cover.png" alt="Sans Times Sans written repeatedly in black in the Sans Times Sans font, with instance in red."/>

      <h3>Introduction</h3>
      <p>In his 1923 essay <i>The New Typography</i>, graphic designer and Bauhaus pioneer László Moholy-Nagy opens with the following:</p>
      <blockquote>
        Typography is a tool of communication. It must be communication in its most intense form. The emphasis must be on absolute clarity since this distinguishes the character of our own writing from that of ancient pictographic forms. Our intellectual relationship to the world is individual-exact (e.g., this individual-exact relationship is in a state of transition toward a collective-exact orientation). 
      </blockquote>

      <p>He continues:</p>
      <blockquote>
      This is in contrast to the ancient individual-amorphous and later collective-amorphous mode of communication. Therefore priority: unequivocal clarity in all typographical compositions. Legibility-communication must never be impaired by an a priori esthetics. Letters may never be forced into a preconceived framework, for instance a square.
      </blockquote>
      
      <p>Moholy-Nagy was known for his pursuit of pure visual forms, as well being a restless experimentalist—something that served him well as a key figure in the maturation of the Bauhaus school throughout the 1920s. He shyed away from the Expressionist notion that individualism was the key to powerful art, but instead advocated for the integration of contemporary methods and new technologies for art to realize the full potential of the artist. That way, he theorized, artists can find the means to best serve humanity through their work. </p>

      <p>I can't help but wonder whether Moholy-Nagy would be immensely dissapointed in the typography scene of the modern web. In the fall of senior year, I became interested in the design of <a href='https://en.wikipedia.org/wiki/Yahoo!_GeoCities'>GeoCities</a>-style websites. As someone who was too young to have surfed the web during the GeoCities era, I was intrigued by the sheer amount of experimentation, personalization, and expressiveness those websites emanated. It was as if everyone carefully tended to their own digital garden and put up friendly invitations to welcome in visitors at any moment. Compared to those websites, today's sites seem so sterile and austere. Moholy-Nagy wanted artists to answer humanity's needs through their art, and today's websites certainly have the potential to do so as both tools and art forms, with their with immense global reach and large userbases. However, leveraging the latest technologies for radical refusal of the mundane seems to have been replaced with overused web templates and cliché design patterns.</p>

      <p>With this in mind, I wondered if there was a way to bring back to the browser a trace of the unhinged experimentation from the Internet's early days. One common link between old sites and new was typography. Both showed the love of Times New Roman as the default font, at least for a long while (nowadays, browsers seem to just use the system font family as the default). However, it is surpisingly challenging to replicate the appearance of Times New Roman in the exact same way one would see it on 90s computer displays due to <a href="https://en.wikipedia.org/wiki/Anti-aliasing">anti-aliasing</a> employed by modern browsers. In short, anti-aliasing applies a slight blurring effect to the edges of the letterforms so they look smoother. Reverse engineering the anti-aliasing is not straighforward since there is no option to simply "turn off" anti-aliasing. Even if it was, the effect would visually be quite far off from the original due to the much higher resolution of today's screens.</p>

      <p>Fortunately for me, Caitlin White and Paul van der Walt from <a href="https://www.vistaserv.net">Vistaserv.net</a> have done fantastic work to solve the exact anti-aliasing problem I was facing. I highly recommend reading their blog post, <a href="https://www.vistaserv.net/blog/90s-fonts-modern-browsers">Convincing-looking 90s fonts in modern browsers</a>, to learn about their process. Paul was generous enough to send me the font files for their anti-anti-aliased (aliased?) Times New Roman specimen, which came in 3 resolutions: 16px, 24px, and 32px for body, subheading, and heading text respectively. I preserved the same 3 resolutions for my design. You can read the blog post to find out more about what those resolutions mean, but here is a small tl;dr snippet from them:</p>

      <blockquote>
      Fontforge [a font creation program] can convert fonts from vector to bitmap formats by creating bitmap strikes. Basically, a strike of a vector font, means its glyphs have been rasterised at a particular pixel size. Rasterisation at different sizes is important, because on an old-fashioned low-resolution screen, this is essentially what's happening: when rendering your text, the font is rasterised for your particular pixel density. For example, on a 75DPI screen, your 12 point font becomes 16 pixels high. These 16 pixels are big enough that you see them as jagged edges. However, if you're displaying 48 point text (a large heading, for example) on that same old-fashioned screen, you'll rasterise the font at 64 pixels, so already it'll seem much smoother.
      </blockquote>

      <p>At this point, I was given a strong foundation to experiment upon and wanted to add a modern twist, to blend old-timey nostalgia with contemporary austerity and make something that refuses the constraints of any particular time period. I was aware of typography work that explored modernity and its implications through serif removal—most notably James Goggin's <a href="https://lineto.com/typefaces/courier-sans#about">Courier Sans</a> and Eric Li's <a href="https://archive.eric.young.li/monti-sans/">Monti Sans</a>. It seemed fitting to attempt a similar exercise with this aliased Times New Roman. This was the basis of of Sans Times Sans, a sans-serif font based on Times but simultaneously abandons time.</p>

      <h3>Point Folding</h3>
      <p>Goggin and Li took the approach of literally chopping off the serifs of their original fonts. I worked only in Fontforge, without any other studio equipment (this was just after peak COVID-19). The Fontforge UI did not allow me to have the same satisfaction of physical serif-cutting. Instead, I removed the serifs by folding the control points of the vector lefferform into itself. The overlapping control points were then merged. Overall, the process was one of slow and deliberate reduction, not so much one of immediate erasure.</p>

      <Figure path="./img/sts-1.png" caption="Point folding of the top right serif of a capital S (16px variant) in Fontforge."/>

      <Figure path="./img/sts-2.png" caption="Capital S's (16px variant): Sans Times Sans (left), aliased Times New Roman (center), and diff in red (right)." width="50%"/>

      <p>Point folding was a pretty manual process, but I could not think of an effective way to automate it. Although it was manual, it not all of it was mechanical—some folding required judgement calls on what looks better and/or what aligns more closely with the "core" of the original serifed letterforms. I ended up manually point folding all the commonly used letterforms over the course of 1–2 months to create the font family. Below are some examples of Sans Times Sans in all 3 variants and comparisons with its serifed counterpart.</p>

      <Figure path="./img/sts-3.png" caption="Specimens of 16px (left), 24px (center), and 32px (right) variants."/>

      <Figure path="./img/sts-4.png" caption="Diffs in red of the 3 variants with aliased Times New Roman." width="70%"/>

      <h3>Challenges</h3>
      <p>As mentioned before, additional judgement is sometimes necessary to ensure that the removal of a serif does not result in a distorted letterform. This judgement was especially useful with the capital X in the 32px variant. Simply removing the serif resulted in a letterform that was uneven in stroke and carried a slight italic slant.</p>

      <Figure path="./img/sts-5.png" width="70%"/>

      <p>To fix this, I had to make some heavier changes to the rest of the letterform, thickening one arm of the X while making the other thinner and more symmetrical. I also removed the italicization, which involved moving a good number of control points outside of point folding. The result didn't eliminate all awkwardness, but it looks arguably more sans-serif than before.</p>

      <Figure path="./img/sts-6.png" width="67%" caption="Unlike most other letterforms, the 32px capital X underwent a slight italics correction. It is shown above in translucent blue while its serifed counterpart is in translucent red."/>

      <p>As a side note, although the 16px capital X also looks quirky, its individuality makes it one of my favourite letterforms in the family.</p>

      <Figure path="./img/sts-7.png" width="50%"/>

      <h3>In Use</h3>

      <p>I used Sans Times Sans as the primary font in I-n-t-e-r, my senior thesis exhibition. To see it in action, view the photos from the show <a href="https://i-n-t-e-r.github.io/show">here</a>, or the general show site <a href="https://i-n-t-e-r.github.io">here</a>.</p>

      <p>Did Sans Times Sans bring back the yearning of exploration to the modern browser? Probably not. I didn't use any cutting-edge technologies—in fact, the Fontforge UI looks quite ancient. However, at least for me, it prompted more thought into how to embed principles and intentions into the design of letterforms, rather than treating type design as a purely aesthetic exercise. </p>

      <p>Special thanks to David Reinfurt and Victor Guan for insightful discussions and generous feedback througout the process. And of course, thanks to Caitlin White, Paul van der Walt, and the rest of Vistaserv for making this possible.</p>

      <h3>Download (.ttf)</h3>
      <a class="link-router" href={require("./files/SansTimesSans@16R.ttf").default}download="SansTimesSans@16R.ttf">Sans Times Sans @16R (body)</a> <br/>
      <a class="link-router" href={require("./files/SansTimesSans@16R.ttf").default}download="SansTimesSans@24R.ttf">Sans Times Sans @24R (subheadings)</a> <br/>
      <a class="link-router" href={require("./files/SansTimesSans@16R.ttf").default}download="SansTimesSans@32R.ttf">Sans Times Sans @32R (headings)</a>

    </InfoPage>
  );
}

export function AdOculos() {

  return (

    <InfoPage helmetExt="AdOculos">

      <h2>AdOculos</h2>
      <AuthorPile authors={dataObjects.AdOculosObj.authors}/>
      <p className="venue-page">{dataObjects.AdOculosObj.venue}</p>

      <Figure path="./img/adoculos-cover.png" alt="A screenshot of the AdOculos interface." />


      <h3>Abstract</h3>
      <p>Web advertisements are essential to the day-to-day operations on the internet by providing a key channel of revenue to websites that offer content at little to no cost. However, they are also common sources of deception, scams, and privacy violations. Given their significance, ads are of interest to many different groups of experts, including web researchers, communications scholars, and regulators, but their fleeting nature makes them difficult to study systematically and at scale. This thesis presents AdOculos, a technical system comprising a search interface powered by automated visual analysis tools and a continuously updated, large-scale archive of ads crawled from thousands of popular websites. By using the system to uncover novel research questions, dimensions of analysis, and policy recommendations, I demonstrate how AdOculos and its underlying tools enable expanded possibilities in ad research.</p>

      <h3>Details</h3>
      <Details {...dataObjects.AdOculosObj}/>

    </InfoPage>
  );
}

