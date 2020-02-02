---
date: 2019-10-15T00:00:00-00:00
description: "A review of NRE Labs' first year of life"
featured_image: "/images/2019/10/birthday.jpg"
tags: []
title: "Happy Birthday NRE Labs!"
show_reading_time: true
authors:
- name: Matt Oswalt
  link: https://twitter.com/mierdin
---

It's hard to believe, but a year ago today, we unveiled NRE Labs to the world.

<div style="text-align:center;"><a href="/images/2019/10/birthday.jpg"><img src="/images/2019/10/birthday.jpg" style="width: 500px;display: block;margin: 0 auto;" ></a></div>

A year later, we’re still committed to providing a “source-neutral”  approach--from any relevant vendor as well as
open source projects--to learning network automation for the last mile of IT infrastructure. NRE Labs focuses on
operations patterns that transcend specific vendor platforms or products.

Since May, we’ve held [regular weekly standups](https://antidoteproject.readthedocs.io/en/latest/community.html#weekly-standups), where individuals from a range of different backgrounds and
organizations have attended and participated in planning, content creation and feedback, testing, contributions,
and more. We’ve had folks from Cumulus Networks involved and providing feedback for our ongoing efforts to provide a
neutral governance model. Packet Pushers staff have attended regularly, provided
similar guidance on the new governance documents in-progress, and even helped shape our new lesson on bash
scripting. Red Hat / Ansible are working with us to learn how Antidote can showcase automation capabilities and help
folks learn complex topics. And some of our most active contributors are from user organizations--people who know
firsthand what they and their colleagues need-- in France, the UK, Poland, the US and Canada.

When we launched NRE Labs, we had seven lessons. Some of these were really very simple lessons - again, the priority
was to show what NRE Labs **could do**, not to build a bunch of content behind closed doors and dump it on Github. The
goal instead was to show what was possible, and provide space for the community to contribute. And contribute they
did - a year later we have 20 published lessons (with 10 more currently being developed), consisting of over 70 labs
(chapters/stages of a lesson). We have about 20 individual contributors to the curriculum alone, with many others
contributing to tooling and other aspects of the Antidote platform.

There's a lot to think and talk about when it comes to the last year of the project. To reflect on this and more, we
sat down with Mike Bushong, who leads Enterprise Marketing at Juniper, to discuss the threads that were taking place
last year that led to the eventual formation of NRE Labs.

<div style="text-align:center;"><iframe width="560" height="315" src="https://www.youtube.com/embed/s4g_NQ2ubLg" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>

# Previous Year Highlights

A lot has happened in the past year, but I’ll try to boil it down to my personal favorite highlights -- moments where the NRE Labs community and project took a significant leap forward.

## NXTWORK 2018

Of course, the initial launch at NXTWORK 2018 was a big deal. NXTWORK is Juniper’s big annual custom event, and while
NRE Labs is an open source project, not a Juniper product, it was very useful to take advantage of the attention
afforded by a conference like NXTWORK, and for Juniper to make a statement about what they were trying to help its
users -- and really, any IT operations people -- accomplish by incubating the project.

While we had been building NRE Labs as a proof-of-concept for the last few months, it was very important that we
unveil NRE Labs while keeping two things in balance.

- First, we had to get this into the hands of the community quickly -- the intention was and is never to work on NRE    Labs behind closed doors.
- Second, the thing **had** to work. To our knowledge, no one - certainly no IT vendors - had attempted anything like
  this before as an open source project. So it was a very new thing. While we did say (probably a lot) that we were
  launching it as a “tech preview”, the reality was that in order to court a diverse set of members to join the
  community, the “proof of concept” we built had to, you know, “prove the concept”. We didn’t want to spend months
  explaining what we’d built - the whole point of NRE Labs was to be simple learning in the browser, so we wanted
  it to be able to speak for itself. So while I’m sure the burden of a “perfect release” was greatly reduced,
  since this isn’t a commercially supported product, the stakes for getting it right were still high.

The reception was really great. NXTWORK isn’t really a gigantic conference if you’re used to a VMworld, or
Cisco Live, but nevertheless, our NRE Labs booth was regularly swarmed by attendees wanting to know more.

<div style="text-align:center;"><a href="/images/2019/10/labcoats.jpeg"><img src="/images/2019/10/labcoats.jpeg" style="width: 500px;display: block;margin: 0 auto;" ></a></div>

## v0.3.0 Release and “The Advisor”

We considered the initial release to be “version 0.1.0”. Over the following months, we released a few additional
minor versions, to include new content as well as technical fixes to address problems we saw at launch.

In February - a few minor releases later - [we released v0.3.0](https://networkreliability.engineering/2019/02/a-special-automated-valentine---nre-labs-v0.3.0/). Not only was this just in time for Valentine’s Day
(thus the pink and red blog decorations and **excellent** artwork in the previous link) but it was also just in time for
an upcoming presentation at [Network Field Day 20](https://techfieldday.com/event/nfd20/), which I’ll cover in the next section.

v0.3.0 contained a slew of new features: not only the inclusion of new content, but also the introduction of the
“[Advisor](https://labs.networkreliability.engineering/advisor/index.html)”, which has proven over the past year to be an invaluable tool for folks just getting started, to get some
guidance for those “unknown unknowns”. Those that have a lot of automation experience may already know that if you
want to learn Ansible for network automation, you should also know YAML and Jinja2, but to a beginner, it’s not
obvious at all. The Advisor has helped a lot of folks build out a detailed understanding of the concepts they need to
arm themselves with to accomplish their automation goals.

In this release we also played around the idea of providing optional objectives in a lesson - tasks that aren’t
necessarily “required” to progress in a lesson, but a good way to provide feedback that a certain task was done
correctly. While this was a great first attempt, the current Syringe architecture is just not conducive to doing this
feature right. So, in [Mini-Project 1](https://github.com/nre-learning/proposals/blob/master/antidote-v1.0/roadmap.md#mp1-syringe-re-architecture) we’re going to be re-designing Syringe to be more event-driven, and as a result,
having optional objectives for all lessons will become not only possible, but highly desirable. So, stay tuned for
this.

## NFD20

The main driver for v0.3.0’s timeline was to be finished in time to present at [Network Field Day 20 (NFD20)](https://techfieldday.com/event/nfd20/), since
the event was livestreamed and recordings posted afterwards, and this was a great way to get updates out about NRE
Labs. We also wanted to get feedback from a room of what we consider our core audience - network engineers.

## v0.4.0 Release and Curriculum Separation

Near the end of the summer, we achieved a [big milestone for the project](https://networkreliability.engineering/2019/08/big-update---new-platform-new-curriculum-new-infrastructure/). Not only did we come out with a [new version
of the Antidote platform](https://networkreliability.engineering/2019/09/antidote-platform-v0.4.0-overview/) but we separated the NRE Labs curriculum into its own release cycle, which started at
version v1.0.0. This was done not only to promote stability of Antidote itself, but also to help the NRE Labs
curriculum evolve at its own pace, without being tied to on Antidote’s arguably more complex and longer development
cycles.

This milestone was pretty huge, not only because of the breadth of changes, but also the depth. The Antidote v0.4.0
release alone contained massive improvements to the lesson definition abstraction, and greatly improved the way that
Endpoints in Antidote were configured, which was a big hurdle for us to be able to support a broader set of network
operating systems and other “non-network” platforms.

From a technical perspective, I felt really good about v0.4.0 and what it would do in our mission to provide an
any-source learning experience for “last mile” network automation.

At this point, NRE Labs has had over 20,000 unique visitors, who have completed nearly 7,000 lessons. Our users start
over 500 lessons each week. Here’s some of the feedback we’ve gotten: 

> "NRE labs creates an intuitive way for network engineers to easily learn and consume automation.  We are big 
> proponents of easy to consume, simple automation which aligns with NRE's efforts to help educate network engineers in 
> their automation journey.  NRE lab's ability to execute educational Ansible Playbooks in a browser window with 
> specific activities against network equipment helps network engineers to learn and practice network automation.”
>
> -- Sean Cavanaugh, Principal Product Marketing Manager, Red Hat Ansible Automation 

> “One of the major barriers for getting network engineers trained in the modern tools of automation is how many 
> dependencies there are just to create and run simple tasks in the learning process.  NRE Labs gives me and our team 
> the sandbox with all those elements on demand along with logical learning paths to progress in automation
> knowledge.”
>
> -- Steve Puluka, Senior IP Architect, DQE Communications LLC

> “Network engineers with no systems or scripting experience can find it daunting to know where to start on their
> journey to automation. By sponsoring NRE Labs, Juniper has truly given a gift to the community, with no-fuss 
> learning at the click of a button. It's a true testament to Juniper's commitment to simplicity, that they could
> take such a complicated topic and make it so accessible to engineers of all levels."
>
> -- Chris Parker, Network Engineer, Six Degrees Group

> "NRE Labs is an excellent platform that provides an environment to learn and practice automation in a controlled
> manner and without hassle."
>
> -- Byron Matovu, Network Engineer, Blade Group
 
> "NRE labs is extremely useful for engineers who want to learn network automation, but don't know how to start. NRE 
> labs gives them a completely free and zero-barrier option, and I always recommend it to my students. In addition, 
> NRE labs bring a completely new approach to the table - that is, open-sourced curriculum to which anyone can 
> contribute.”
>
> -- Peter Klimai, Trainer, Poplar Systems
 
# What’s Next?

If I could describe the last year, obviously the reception has been really great, but the theme was definitely
technical in nature. This was out of necessity - the project had to grow and evolve, and we had to quickly expand the
“proof of concept” to ensure the idea had legs.

I feel like now we’re looking over the precipice, and NRE Labs is due to enter its adolescent phase. I feel like the
concept is well proven, and there are really great things on the horizon, so now we have to put in the work to enable
the broader community to really own the project.

There are three things that are actively in progress (and showing good results already) that I feel will lend nicely
to moving NRE Labs into this next phase.

- **Antidote v1.0** - To me, Year One was all about completing the “proof of concept” phase. There were a bunch of
  short-term things that needed to be done to keep the project moving forward, and to build the features that conveyed
  the value we were going after. Year Two will be about moving the technical bits of the project into a mature,
  long-term model -- one that is designed from the ground up to be resilient and easier to contribute to and maintain.
  We’ve put together [a plan for doing this as Antidote v1.0](https://github.com/nre-learning/proposals/blob/master/antidote-v1.0/roadmap.md).

- **Diverse Governance and Sponsorship** - To “put our money where our mouth is”, and create a project that transcends
  one particular organization or IT vendor, but rather brings the industry as a whole into an automated future
  getting the project governance right is super important. We’re doing the work now to not only donate the NRE Labs
  project as a whole to a third-party conservancy, but [also building a governance model](https://github.com/nre-learning/proposals/pull/1) - with feedback from diverse
  organizations including other networking vendors - that ensures NRE Labs remains a truly self-sustaining,
  community-owned project.

- **Community growth** - We’re working on a number of things to make the project more accessible to community members,
  whether they be users, curriculum developers, platform experts, or any combination of those things. Soon you’ll see
  a revamped website to make all of our resources, forums, documentation, etc easy to find in one place. We’ll be
  simplifying things technically for people who just want to write lessons. We’ll be doing a LOT more outreach out in
  meatspace--local meetups, major industry events like [Open Source Summit](https://events19.linuxfoundation.org/events/open-source-summit-north-america-2019/) -- as well as online. Be sure to check our
  soon-to-launch Community page for a calendar and ideas for getting involved. 

It’s great to see the growth of the project over the past year, and I’m really excited to see what it becomes in the next year as we move into the next phase of the project.
