---
date: 2019-01-08T00:00:00-00:00
description: Version 0.1.4 is live!
featured_image: "/images/nrelabs.png"
tags: []
title: 'New Year, New Version of NRE Labs'
show_reading_time: true
authors:
- name: Matt Oswalt
  link: https://twitter.com/mierdin
---

Welcome to 2019, Network Reliability Engineers! We hope your holiday was relaxing.

We wanted to start the new year by getting a new release out, which sets the stage for some new content that's just around the corner.
[v0.1.4](https://github.com/nre-learning/antidote/releases/tag/v0.1.4) is released, and running live on the NRE Labs site!

In this release, we focus almost entirely on improving the user experience, specifically in two main ways:

- Some planned content requires some capabilities in the platform that didn't quite work yet. Several changes in this release do a really good job of setting the stage for future content, which is nearly ready, and will be included in the next release. Stay tuned!
- There were some long-standing housekeeping related issues that weren't quite dealbreakers, but really caused some frustration when they reared their heads. For instance, we used the "merge" strategy in NAPALM when configuring network devices for use in a lesson. This made it difficult to move between labs in a lesson cleanly. We moved to "replace" and you should be able to move freely between labs a lot more seamlessly, without strange resulting configurations.

Detailed changelog to follow:

# Release Summary

## `antidote`

- Iframes are finally working again on the new model, which will enable all kinds of useful content. As a result, we've re-enabled the NAPALM lesson so the Jupyter notebook can be shown. [#141](https://github.com/nre-learning/antidote/pull/141)
- NRE Labs now has a useful "maintenance mode" so we can provide more useful status information when we're taking the site offline for maintenance, rather than ugly "connection failed" messages. [#144](https://github.com/nre-learning/antidote/pull/144)
- Not every lesson can be run purely in containers. Some upcoming content, like eBPF and Docker, require greater access to kernel resources. To facilitate this, we've created a new image called `utility-vm` which runs an instance of Ubuntu in a virtual machine. [#142](https://github.com/nre-learning/antidote/pull/142)

## `syringe`

- Consolidate lesson definition logic, and provide local validation tool (syrctl) [#30](https://github.com/nre-learning/syringe/pull/30)
- Redesign and fix the way iframe resources are created and presented to the API[#32](https://github.com/nre-learning/syringe/pull/32)
- Make metrics upload more resilient [#35](https://github.com/nre-learning/syringe/pull/35)
- Migrate to `dep` for dependency management [#36](https://github.com/nre-learning/syringe/pull/36)
- Use the 'replace' strategy when applying config changes with NAPALM (this fixes a big issue we've had for a while where moving between labs in a lesson didn't quite reconfigure the network devices correctly.) [#37](https://github.com/nre-learning/syringe/pull/37)
- Record lesson provisioning time in TSDB. This helps us get a handle on overall performance and user experience. [#39](https://github.com/nre-learning/syringe/pull/39)

## `antidote-web`

- Minor fix to the iframe path based on recent syringe changes [#20](https://github.com/nre-learning/antidote-web/pull/20)
- Adding lesson video modal; sorting tabs [#21](https://github.com/nre-learning/antidote-web/pull/21)

We hope you enjoy these changes! As always, we welcome feedback in the #nrelabs channel in [Juniper's EngNet Slack Community](https://juniperautomators.slack.com/join/shared_invite/enQtMzU3NDI2MTA5NDc2LTg0MTdmNDk5NTM3OTI4NjVmODk5OTFiMzcyNTk3ZTY1NWIxNTVlNjNhNzc2NjI1NDMwODgxMzU5YjNhNjA3MjI) or [via Github Issues on the Antidote project](https://github.com/nre-learning/antidote/issues/new).  Last, consider [contributing](
https://antidoteproject.readthedocs.io/en/latest/contributing/index.html) to NRE Labs. We welcome bugfixes, feature enhancements, and of course, lesson content!
