---
date: 2021-03-29T00:00:00-00:00
description: ""
featured_image: "/images/2021/03/ghplusnrelabs.png"
tags: []
title: "Introducing NRE Labs Content Previews"
show_reading_time: true
authors:
- name: Matt Oswalt
  link: https://twitter.com/mierdin
---

Since its inception, the biggest advantage of the NRE Labs project is that it makes it **super easy** to get stick time with next-generation infrastructure skills like automation. Cutting away the traditional barriers to learning complex and cutting-edge skills has been the goal of the project from day one.

[Last year](https://nrelabs.io/2020/02/launching-nrelabs.io/) we stated that we wanted to make sure that more attention was given to the contributor experience as well. Until now, regular consumers of the site and those looking to contribute their expertise in the form of lesson content had very different experiences. On the one hand, consuming content is dead-simple; load a lesson and get started in a minute or less. Contributing content, on the other hand, involved a complex tool chain that included Vagrant, Kubernetes, and custom scripts. This was functional, but hardly user friendly, and getting this to work reliably on the variety of operating systems and hardware required by our contributors was a challenge. This forced contributors to overly focus on the tools, rather than their content.

I'm happy to announce that as of today, another option formally exists for those looking to contribute content to the NRE Labs project, and I dare say it takes a bold step in the direction of making content contribution as easy as consumption on the NRE Labs site. Ever since NRE Labs was launched, I've wanted to make it as easy as possible for contributors to preview their content contributions or changes, without having to fuss around with a local toolchain. Rather, I wanted to provide something similar to [Netlify's deploy preview functionality](https://www.netlify.com/blog/2016/07/20/introducing-deploy-previews-in-netlify/), where you simply open a Pull Request to the repository in question, and within a few minutes, you're provided with a URL you can visit to see your changes in action, with no extra work on your part. Where Netlify does this for websites and blogs (the blog you're reading right now, in fact), I wanted to do this for the NRE Labs curriculum itself.

<div style="text-align:center;"><a href="/images/2021/03/ghplusnrelabs.png"><img src="/images/2021/03/ghplusnrelabs.png" style="width: 700px;display: block;margin-top: 10px;" ></a></div>

This brings the same advantages to the contributor that NRE Labs gives to the learner - no local setup required. Thanks to the power of Github Actions, and a bit of additional software in the NRE Labs platform, that's exactly what we're announcing today.

# The NRE Labs Preview System

The idea here is simple - keep contributors focused on building content, not on fussing around with setting up Vagrant, or troubleshooting a Kubernetes cluster. In the new preview system, contributors need only open [a Pull Request](https://docs.nrelabs.io/creating-contributing/contributing-content) following the same process that is already in place. Once this is done, the normal CI process will automatically perform some basic checks, then kick off the deployment of a fully functional stack of the NRE Labs site that is specific to that contribution.

<div style="text-align:center;"><a href="/images/2021/03/buildsuccess.png"><img src="/images/2021/03/buildsuccess.png" style="width: 700px;display: block;margin-top: 10px;" ></a></div>

This system is fully automated: powered by Github Actions and some additional software we've been working on for the past year. This preview service is currently not open-source, but all of the Github Actions workflows are contained within the NRE Labs curriculum repository.

This is a totally hands-off process. Provided some of the early basic CI checks pass, this service is invoked automatically, and a preview is generated within minutes or less, that you need only open in your browser. There are also tools provided for each preview to assist in troubleshooting when things go wrong.

<div style="text-align:center;"><a href="/images/2021/03/builddetails.png"><img src="/images/2021/03/builddetails.png" style="width: 700px;display: block;margin-top: 10px;" ></a></div>

The full process can be read about in the [NRE Labs documentation](https://docs.nrelabs.io/creating-contributing/preview-your-changes), but significant efforts have been made to make this process as self-explanatory as possible.

We're very excited about this new service, and hope it greatly reduces the hurdle to contributing to NRE Labs.

# So What Happens to Self-Medicate?

Historically, the only way to preview content changes was using a tool we lovingly call ["self-medicate"](https://github.com/nre-learning/antidote-selfmedicate). This was basically a local, automated version of the NRE Labs stack that you deployed yourself. And not to diminish those that contributed to it; there was a lot of good work that went into making this what it is. However, there's no getting around certain challenges, most of which have to do with differences between operating systems, hardware capabilities, and the myriad of things that you need to consider when providing a local tool like this, that simply don't exist with the hosted alternative we're launching today.

There is still a use case to have a local, off-line copy of the NRE Labs software, so the story with self-medicate is not over. However, it should no longer be considered a first-class citizen as it pertains to the usual NRE Labs content creation process; for that, you'll be steered towards this preview system, as it has far fewer local dependencies.

The self-medicate repository will likely undergo some changes in the near future, but these are likely going to be aimed at simplification, and a refocus on getting an existing curriculum stood up, rather than being a tool for rapid content iteration.

# Happy Building!

We think this helps remove one of the biggest hurdles to-date on contributing to NRE Labs, and hope that it encourages those that haven't had the chance to contribute yet to give it a shot, and let us know how we can improve even further.

For more information on how to contribute to NRE Labs, particularly how to work with the new preview system, see [the NRE Labs documentation](https://docs.nrelabs.io/creating-contributing/preview-your-changes). If you run into problems, you can either comment in a Pull Request that you've opened, or you can post to the [NRE Labs discussion forums](https://discuss.nrelabs.io/c/nre-labs-curriculum/7).
