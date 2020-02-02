---
date: 2020-02-10T00:00:00-00:00
description: ""
featured_image: "/images/2019/10/metal-grid.jpg"
tags: []
title: "Launching NRELabs.io"
show_reading_time: true
authors:
- name: Matt Oswalt
  link: https://twitter.com/mierdin
---

( This was originally posted on packetpushers.net) `<INSERT LINK>`

Wow, 2019 was a big year for NRE Labs. We had just launched at the end of 2018, so in many ways, 2019 was a year of growing up. We released several new versions of both the NRE Labs curriculum and the underlying Antidote platform, but we also put time and effort into establishing the NRE Labs community itself. We started holding weekly public standups. We created a governance document and a code of conduct. We moved all of the project's communications to our public discussion platform.

I think, looking back, that 2019 was the year of laying the foundation. Like any nascent project, the tasks on everyone's plate didn't follow a consistent theme, or predicatable rhythm - it was about getting the momentum going. So while we certainly saw a good number of contributions to the project, including the NRE Labs curriculum, this foundation is something we really want to capitalize on in 2020.

The mission for the NRE Labs project in 2020 is to **make it just as easy to contribute NRE Labs content as it is to consume it**. I think we really did a good job in solving the consumption problem for folks looking to learn advanced topics like automation - now, it's time to do the same thing for those that already have this experience, and make it **painless** to share their experience using this hyper-interactive format.

## Launching nrelabs.io

To put us on the right path to this goal, we're announcing some major changes to the NRE Labs site today. You can find this new experience at (the highly anticipated, shorter domain) [nrelabs.io](https://nrelabs.io/), and I believe there are some very significant improvements for both the learner, and the lesson author, with many more to come.

You'll find that the new site is much easier to navigate, and that everything you need can be found there. This is a fully redesigned site that gives you everything you need in one place.

- [**Community**](https://nrelabs.io/community/) - Everything you need to get involved with the project, as well as stay up to date on the latest project news, and activities.
- [**Resources**](https://nrelabs.io/resources/) - Generally useful resources for getting involved with Network Reliability Engineering practices, as well as some other resources on the internet that highlight NRE Labs 
- [**Blog**](https://nrelabs.io/post/) - We have moved our old blog over to the new site as well, and will continue to post here. Follow our RSS feed for the latest posts.
- [**Lesson Catalog**](https://go.nrelabs.io/catalog/) - In this new site, the Lesson Catalog is always a single click away, using the red button at the top-right of the screen.

We've also moved the project documentation to [docs.nrelabs.io/](https://docs.nrelabs.io/), and totally re-vamped how its presented. While there's something there for everyone, we really optimized the documentation for new curriculum contributors. We will continue to invest in making this a seamless experience this year, but we think this is a solid step in the right direction.

## Greatly Improved Learner Experience

We will be going into much greater detail in a future blog post, but I do want to take a second to call attention to something. The new experience for the learner is an absolute night and day improvement. I mean, it's not even close. Seriously, if you ever used the old site, go check out the new [Introduction to REST APIs](https://go.nrelabs.io/labs/?lessonId=19&lessonStage=1) lesson and you'll see what I mean.

I think this can best be described in a few bullets:
- Everything is **faster**. The old site worked fairly well, but only on really good internet connections. The new site uses much lighter-weight components, which makes the experience much snappier.
- The lesson interface is minimalist. As much real estate as possible was given to the terminal and the lesson guide.
- The general aethetic of the page, from the new terminal style, to the color palette, is much more pleasing. Everything looks and feels much more natural now.

Also, I am so excited to **finally** announce - NRE LABS IS NOW MOBILE FRIENDLY!

<div style="text-align:center;"><img src="/images/2020/02/celebrate.gif"style="width: 700px;display: block;margin: 0 auto;" ></div>

<div style="text-align:center;">
<img src="/images/2020/02/phonescreen1.png"style="width: 700px;display: block;margin: 0 auto;" >
</div>

This is particularly great news because since we launched, due to some design hurdles, as well as technical challenges with our previous in-browser terminal solution, we have been pretty explicit that we don't support mobile. However, with what we're launching today, that is no longer the case. We are very excited about this, and we would love to [hear your feedback](https://twitter.com/Mierdin) about your experience using the site on mobile.

## Greatly Improved Contributor Experience

The improvements to the web front-end were primarily aimed at improving the user experience, but from the beginning, we knew we wanted to do things in a way that made it easier for folks with a web development skillset to get involved. We actually hired a professional web development firm to come in and make the improvements that are now represented in the new site experience, and one of the explicit goals for this initiative was to realign that portion of the project with modern web development standards.

- The new site, as well as the revised documentation, is much simpler and consolidated. Finding out how to contribute, what to expect from a release perspective, and how to get in touch, is frankly plastered all over the site now. The new documentation is written specifically with curriculum contributors in mind, and is written to be read top to bottom, as opposed to a hodge-podge, unordered reference, which our old documentation tended to be.
- The entire web front-end, including the back-end web proxy for lesson connectivity via SSH, is written in Javascript. No more black-box components. If you have a modern web skillset, there should be very few surprises here.
- Everything is built to be modular. Where before we had everything in one monolithic `antidote-web` repo, we now have a separate repository for managing the discrete components, another for styles, another for localization strings, etc. This means if you want to contribute to one of these, you don't have to concern yourself with the other repositories.

We will be going into more detail in future blogs on this, but suffice it to say we're not even close to done. As mentioned before, 2020 is the year we really focus on improving the contributor experience - so consider this only a first step.

## New Lessons

It wouldn't be an NRE Labs announcement without new content! The new NRE Labs curriculum v1.1.0 comes with one brand new lesson, and two lessons that have been totally re-vamped and refurbished, they may as well be new.

- **Ansible for Networking** - this is one of our most-requested lessons, and we finally have it! It's really cool, you get to work with virtual Cumulus and Junos devices, all using multi-vendor Ansible playbooks. Big thanks to the Red Hat Ansible team for working so hard on contributing that lesson, and to Cumulus for contributing an image of their VX platform.
- **Refurbished Git and REST APIs lessons** - these are two of the lessons we originally launched with, and they were in desperate need of updates past that initial proof-of-concept phase.  These concepts in particular are so fundamental to modern network operations skills, they really deserved more. So, we took these lessons and really went back to the drawing board. You'll find they do a much better job of explaining the fundamentals.

We're going to be releasing a lot more content this year, not just in frequency of updates, but also in variety of content. The work we put in for 2019 will enable us to release content much more frequently, and we're going to capitalize on that. We never view any NRE Labs lesson as "done", and all of these lessons and more will continue to receive updates in future curriculum versions.

## Takeaway

For a complete tour, check out the youtube video below:

{{< youtube K0QxGBomBGA "unconstrained" >}}

We're excited to announce these changes today, and are eager to receive your feedback. Head on over to [nrelabs.io/](https://nrelabs.io/) and [let us know what you think](https://twitter.com/nrelabs)!

If you're interested in getting involved, we have a special page dedicated to learning more at [nrelabs.io/community](https://nrelabs.io/community) - you'll also find a link to our weekly standups there, which are open to all to join - that's usually the best place to get the latest information about the project. If you're interested in creating an interactive lesson of your own, or even add to an existing lesson, there's no contribution too small - join the standups and we'll make sure you get what you need.

Lastly you can follow us on twitter [@NRELabs](https://twitter.com/nrelabs) where we post all our new content updates, and our DMs are open if you want to leave some constructive feedback.





