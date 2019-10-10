---
date: 2019-10-10T00:00:00-00:00
description: "A review of NRE Labs' first year of life"
featured_image: "https://networkreliability.engineering/images/2019/10/birthday.jpg"
tags: []
title: "Happy Birthday NRE Labs!"
show_reading_time: true
authors:
- name: Matt Oswalt
  link: https://twitter.com/mierdin
---

It's hard to believe, but a year ago today, we unveiled NRE Labs to the world.

<div style="text-align:center;"><a href="/images/2019/10/birthday.jpg"><img src="/images/2019/10/birthday.jpg" style="width: 500px;display: block;margin: 0 auto;" ></a></div>

A year later, we're still committed to providing a vendor-inclusive approach to learning network automation in the last mile of IT infrastructure we all have do deal with called "operations". The spirit of NRE Labs is to focus on operations patterns that transcend specific vendor platforms or products.

In the past several months, we've held [regular weekly standups](https://antidoteproject.readthedocs.io/en/latest/community.html#weekly-standups), where organizations of all kinds have attended and participated in planning, content creation and feedback, testing, contributions, and more. We've had folks from Cumulus Networks involved and providing feedback for our ongoing efforts to provide a neutral governance model. Packet Pushers have attended regularly and even helped shape our new lesson on bash scripting. Red Hat / Ansible have also attended to learn more about how Antidote can showcase automation capabilites and help folks learn complex topics. We've even had active contributions from folks around the world, including France, the UK, Poland, and Canada.

When we launched NRE Labs, we had seven lessons. Some of these were really very simple lessons - again, the priority was to show what NRE Labs **could do**, not to build a bunch of content behind closed doors and dump it on Github. The goal instead was to show what was possible, and provide space for the community to contribute. And contribute they did - a year later we have 20 published lessons (with 10 more currently being developed), consisting of over 70 labs (chapters/stages of a lesson). We have about 20 individual contribtors to the curriculum alone, with many others contributing to tooling and other aspects of the Antidote platform.

# Previous Year Highlights

A lot has happened in the past year, but I'll try to boil it down to my personally favorite highlights - moments where the NRE Labs community and project took a significant leap forward.

## NXTWORK 2018

Of course, the initial launch at NXTWORK 2018 was a big deal. NXTWORK is Juniper's big annual custom event, and while NRE Labs isn't a Juniper product, it was very useful to take advantage of the attention afforded by a conference like NXTWORK, and for Juniper to make a statement about what they were trying to accomplish with the project.

While we had been building NRE Labs as a proof-of-concept for the last few months, it was very important that we unveil NRE Labs while keeping two things in balance.

1. First, we had to get this into the hands of the community quickly - the intention was and is never to work on NRE Labs behind closed doors, so while launching at NXTWORK was aggressive by any standard, it was necessary to preserve the intention of the project.

2. Second, the thing **had** to work. To our knowledge, no one - certainly no IT vendors - had attempted anything like this before as an open source project. So it was a very new thing. While we did say (probably a lot) that we were launching it as a "tech preview", the reality was that in order to court a diverse set of members to join the community, the "proof of concept" we had built had to, you know, "prove the concept". We didn't want to spend months explaining what we'd built - the whole point of NRE Labs was to be simple learning in the browser, so we wanted it to be able to speak for itself. So while I'm sure the burden of a "perfect release" was greatly reduced, since this isn't a commercially supported product, the stakes for getting it right were still high.

The reception was really great. NXTWORK isn't really a gigantic conference if you're used to a VMworld, or Cisco Live, but nevertheless, our NRE Labs booth was regularly swarmed by attendees wanting to know more.

<div style="text-align:center;"><a href="/images/2019/10/labcoats.jpeg"><img src="/images/2019/10/labcoats.jpeg" style="width: 500px;display: block;margin: 0 auto;" ></a></div>

## v0.3.0 Release and "The Advisor"

We considered the initial release to be "version 0.1.0". Over the succeeding months, we released a few additional versions, to include new content as well as technical fixes to address problems we saw at launch.

In February - a few minor releases later - [we released v0.3.0](https://networkreliability.engineering/2019/02/a-special-automated-valentine---nre-labs-v0.3.0/). Not only was this just in time for valentine's day (thus the pink and red blog decorations and **excellent** artwork) but it was also just in time for an upcoming presentation at [Network Field Day 20](https://techfieldday.com/event/nfd20/), which I'll cover in the next section.

v0.3.0 contained a slew of new features - not only the inclusion of new content, but also the introduction of the "Advisor", which has proven over the past year to be an invaluable tool for folks just getting started, to get some guidance for those "unknown unknowns". For those that have a lot of automation experience, it's just kind of "obvious" that if you want to learn Ansible for network automation, you should also know YAML and Jinja2 - but to a beginner, it's very not-obvious. The Advisor has helped a lot of folks build out a detailed understanding of the concepts they need to arm themselves with to accomplish their automation goals.

In this release we also played around with verification of optional objectives in a lesson. While this was a great first attempt, the current Syringe architecture is just not conducive to doing this feature right. [So, in Mini-Project 1](https://github.com/nre-learning/proposals/blob/master/antidote-v1.0/roadmap.md#mp1-syringe-re-architecture) we're going to be re-designing Syringe to be more event-driven, and as a result, providing optional objectives for all lessons will become not only possible, but highly desirable. So, stay tuned for this.

## NFD20

The main driver for v0.3.0's timeline was to be finished in time to present at [Network Field Day 20 (NFD20)](https://techfieldday.com/event/nfd20/), since the event was livestreamed and recordings posted afterwards, and this was a great way to get updates out about NRE Labs, and get feedback from a room of what we consider our core audience - network engineers.

I'd [presented at Network Field Day before](https://www.youtube.com/watch?v=pHwkwjd2WtQ) but I was especially excited to present at NFD20, as the new features in v0.3.0 were built to be able to show in time for this event, which was livestreamed and recorded after the fact:

<div style="text-align:center;"><iframe width="560" height="315" src="https://www.youtube.com/embed/Q2k-BXzLp_Y" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>

## v0.4.0 Release and Curriculum Separation

Near the end of the summer, we achieved a [big milestone for the project](https://networkreliability.engineering/2019/08/big-update---new-platform-new-curriculum-new-infrastructure/). Not only did we come out with a [new version of the Antidote platform](https://networkreliability.engineering/2019/09/antidote-platform-v0.4.0-overview/) but we separated the NRE Labs curriculum into it's own release cycle, which started at version v1.0.0. This was done to not only promote stability, but also to help the NRE Labs curriculum evolve at its own pace, without depending on Antidote's arguably more complex and longer development cycles.

This milestone was pretty huge, not only because of the breadth of changes, but also the depth - the Antidote v0.4.0 release alone contained massive improvements to the lesson definition abstraction, and greatly improved the way that Endpoints in Antidote were configured, which was a big hurdle for us to be able to support a broader set of network operating systems and other "non-network" platforms.

From a technical perspective, I felt really good about v0.4.0 and what it would do in our mission to provide a vendor-inclusive learning experience for "last mile" network automation.

# What's Next?

If I could describe the last year, obviously the reception has been really great, but the theme was definitely technical in nature. This was out of necessity - the project had to grow and evolve, and we had to quickly expand the "proof of concept" to ensure the idea had legs.

I feel like now we're looking over the precipice, and NRE Labs is due to enter it's adolescent phase. I feel like the concept is well proved out, and there are really great things on the horizon, but we have to put in the work to enable the broader community to really own the project.

There are three things that are actively in progress (and showing good results already) that I feel will lend nicely to moving NRE Labs into this next phase.

- **Antidote v1.0** - To me, year one was all about completing the "proof of concept" phase. There were a bunch of short term things that needed to be done to keep things moving forward, and to build the features that conveyed the value we were going after. Year two will be about moving the technical bits of the project into a mature, long-term model - one that is designed from the ground up to be resilient and easier to contribute to and maintain. We've put together [a plan for doing this as Antidote v1.0](https://github.com/nre-learning/proposals/blob/master/antidote-v1.0/roadmap.md).
- **Diverse Governance and Sponsorship** - to "put our money where our mouth is", and create a project that transcends one particular organization or IT vendor, but rather brings the industry as a whole into an automated future, getting the project governance right is super important. We're doing the work now to not only donate the NRE Labs project as a whole to an third-party conservancy, but [also building a governance model](https://github.com/nre-learning/proposals/pull/1) - with feedback from diverse organizations including other networking vendors - that ensures NRE Labs remains a truly community-owned project.

It's great to see the growth of the project over the past year, and I'm really excited to see what it becomes in the next year as we move into the next phase of the project.
