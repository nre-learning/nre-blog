---
date: 2019-08-12T00:00:00-00:00
description: ""
featured_image: "https://networkreliability.engineering/images/2019/08/nrelabs-v1.0.0.png"
tags: []
title: "Big Update - New Platform, New Curriculum, New Infrastructure"
show_reading_time: true
authors:
- name: Matt Oswalt
  link: https://twitter.com/mierdin
---

This has been a very busy summer, and unfortunately, the impact of summer travel on the ability to provide regular updates has been felt strongly. However, I'm happy to report that today, we have something to show for it.

This is the first blog post of several that will outline the changes that went live today. In this post, we'll do a high-level summary of the changes, with some teasers for deeper explanations to come. To kick things off, a quick summary of the changes:

- The NRE Labs curriculum is now on its own release cycle, and we've [released v1.0.0](https://github.com/nre-learning/nrelabs-curriculum/releases/tag/v1.0.0), which comes with it's own set of content updates.
- The Antidote platform [v0.4.0 has also been released](https://github.com/nre-learning/syringe/releases/tag/v0.4.0), which, among other things, includes significant improvements to the way Endpoints are configured and presented to the front-end, as well as the new Collections feature.
- We've migrated NRE Labs to a new bare-metal-as-a-service provider, which should prove to be a much snappier experience.

All three of these changes are live now on the main [NRE Labs](https://labs.networkreliability.engineering) site, so go check them out!

## NRE Labs Curriculum v1.0.0

<div style="text-align:center;"><a href="/images/2019/08/nrelabs-v1.0.0.png"><img src="/images/2019/08/nrelabs-v1.0.0.png" style="width: 200px;display: block;margin: 0 auto;" ></a></div>

The NRE Labs Curriculum, since the inception of the project, has been an entity that is held separately from the Antidote platform - the software that powers the NRE Labs experience. The idea of curriculum-as-code is fundamental to this project.

However, when it comes to releases and updates, it's always been joined at the hip with the Antidote platform. Every time we released a version of the platform, we released an identically versioned curriculum, so make sure the two were compatible with each other. While this accomplished that goal, it also made it harder to release new content on either side of the equation. In v0.4.0 of the platform, we took on a few big new features, and the curriculum had to wait for that process to finish.

This release marks the last time we need to do this. This week we released v1.0.0 of the curriculum, and modified our release process to be able to release the curriculum independently. This should provide further separation between these two portions of the project and allow both to release updates more easily and frequently.

In a future blog post, we'll explore what's new in this version of the curriculum, and what to expect going forward as it pertains to the release of new content here in the future.

## Antidote v0.4.0

<div style="text-align:center;"><a href="/images/2019/08/antidote-v0.4.0.png"><img src="/images/2019/08/antidote-v0.4.0.png" style="width: 200px;display: block;margin: 0 auto;" ></a></div>

We are also releasing a new version of the Antidote platform, and this one is a doozy. We will also be publishing another blog post soon that dives into more details here, since there's a lot to explore, but we'll tease the two biggest changes here.

For a full list of changes, see [Syringe](https://github.com/nre-learning/syringe/blob/master/CHANGELOG.md#v040---august-07-2019) and [Antidote-web](https://github.com/nre-learning/antidote-web/blob/master/CHANGELOG.md#v040---august-07-2019
) CHANGELOGs.

### Redesigned Endpoint Abstraction: Presentation and Configuration

First, for some time, we've known that the existing abstraction in place for Endpoints has been confusing and the result of a hodge-podge of features tacked on after the fact. We took the time in this release to really think through what we needed to allow lesson authors to be able to define about the Endpoints in their lesson, and it came down to two things:

- Lesson authors need to be able to configure Endpoints in a generic way. Not all Endpoints are network devices, and not even all network devices are supported by NAPALM. We need a more robust set of options for inter-stage Endpoint configuration.
- Not all Endpoints are representable by SSH, and sometimes Endpoints need to be presented in multiple ways. Some endpoints have both a WebUI and a CLI, and we need to be able to show both. We also need to support other graphical options like a desktop environment via VNC.

In v0.4.0, [Configuration](https://antidoteproject.readthedocs.io/en/latest/platform/curricula/lessons/configuration.html) of Endpoints is now much more flexible. You can continue to use NAPALM, as many lessons still do for their network endpoints, some lessons are now performing runtime configurations of Endpoints, instead of relying on everything to be baked into the image.

In addition, [Presentations](https://antidoteproject.readthedocs.io/en/latest/platform/curricula/lessons/presentations.html) are now much more well thought out, and you have a myriad of options for choosing how to present content to your learners, as you construct your lessons.

### Collections

There's been a need to provide a second manner of categorizing content in NRE Labs for a while. While some lessons are grouped according to technical topic, sometimes lessons need to be grouped using some other criteria, such as contributing organization, or compatibility with a certain vendor, etc.

There are other things we've wanted to do as well, such as linking to external resources to continue your learning journey. NRE Labs was never built with the intention to be a one-stop shop for all your learning needs - it's a resource to kick-start the journey, built by and for the community. There are a myriad of companies out there looking to make you successful with automation, and we wanted to give you a place to go after you'd gotten your feet wet with NRE Labs.

To satisfy these needs, we introduced the [Collections](https://antidoteproject.readthedocs.io/en/latest/platform/curricula/collections.html) feature. This is a new resource type, stored within the curriculum, just like lessons. Like lessons, you need to define a metadata file `collections.meta.yaml` to describe the collection, but unlike lessons, that's all you need to do. Collections are a way of providing a "home page" to describe the collection, and a bucket to throw other resources, like lessons, into. Note that this is additive, in that it doesn't affect existing or planned categorization features. Lessons also don't have to go into a collection, and collections don't always have to have lessons in them.

You can see the currently live Collections [right on the NRE Labs site](https://labs.networkreliability.engineering/collections/), right now!

See [the Collections documentation](https://antidoteproject.readthedocs.io/en/latest/platform/curricula/collections.html) for more info on how these work.

That's it for a light preview of the important things in v0.4.0. [Selfmedicate](https://github.com/nre-learning/antidote-selfmedicate.git) has also been updated to use this version, so pull the latest `master` of selfmedicate to get the changes.

## New Infrastructure Provider

Lastly, there's been a change of infrastructure that powers NRE Labs. While this is much more on the "ops" side of the house, and doesn't necessarily impact the curriculum or the platform aspects of the project, it's useful to know the details of how NRE Labs runs in production.

There are a ton of details for this that we'll get into in another post, but for now, the bottom line is that we've moved to a new compute provider to power the Kubernetes cluster on which NRE Labs runs. This is a bare-metal-as-a-service provider, so instead of running Kubernetes in VMs, which in turn will be used to run containers, which run VMs inside - incurring a significant performance penalty in the process - we're instead running the worker nodes directly on physical hardware, so that only one level of virtualization is used.

Using a BMaaS provider for this makes it much easier to use physical hardware for this purpose, as it combines baremetal with the advantages of cloud, such as programmability and pay-by-the-hour pricing. We still have a presence in GCP for now, since there are a few other infrastructure elements that don't actively play a role in running Kubernetes, but still provide vital services to the platform, and it makes sense to run these in smaller VMs.

We are already seeing some significant performance improvements, and that means much faster lesson load times for you. We capture load times and other telemetry all the time, and once we've captured enough for a few weeks, we'll follow up with a blog post to explain how this new infrastructure works, complete with data on just how much better this is.

## We're not done yet!

This was a big update, and it's not possible to pack everything that's changed into a single post. We'll be releasing more detail in the coming days and weeks, so stay tuned.

In the meantime, I encourage you to join our weekly standups for the latest updates in the community. They take place [via Zoom](https://zoom.us/j/552710574) every week at 8AM pacific time, and are open to all who have an interest in the project.

Happy automating!
