---
date: 2019-09-30T00:00:00-00:00
description: ""
featured_image: "https://networkreliability.engineering/images/2019/09/antidotev040.png"
tags: []
title: "NRE Labs - The Move to Bare-Metal"
show_reading_time: true
authors:
- name: Matt Oswalt
  link: https://twitter.com/mierdin
---

[Last month](https://networkreliability.engineering/2019/08/big-update---new-platform-new-curriculum-new-infrastructure/) I teased the three major updates we were releasing at that time. One of those updates was the new Antidote v0.4.0 platform, which was covered in [the following blog post](https://networkreliability.engineering/2019/09/antidote-platform-v0.4.0-overview/). In this post, I'd like to discuss another of those three updates, which was the move of the NRE Labs production environment to a new infrastructure host.

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">I remember that packet team are very good at creating joint marketing collateral. NRE example is a very interesting one, especially if the cost will be less than GCP&#39;s (or comparable). Would wait for the next posts about that migration ;)</p>&mdash; Roman Dodin (@ntdvps) <a href="https://twitter.com/ntdvps/status/1161177436295442432?ref_src=twsrc%5Etfw">August 13, 2019</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script> 

# History of NRE Labs

Initially, we developed everything to run on GCP, primarily because we could enable nested virtualization. HOwever, this has two downsides:

- HW extensions can only make nested virtualization better to a point. At the end of the day you're still dealing with a fairly significant performance penalty
- Cloud VMs are often highly optimized for RAM, or number of cores. It's very rare to have an instance type with a reasonably fast core speed, and even when they exist, they're usually a TON of RAM or cores, way too many. NRE Labs actually doesn't require all that much RAM. Even though a lot of our lessons run network devices, which aren't light by any means, we also aggressively garbage-collect old lessons, so on the average the needs just aren't that high. What's needed is SPEED. We need to be able to boot our workloads as quickly as possible

We started looking for a solution where we could simultaneously enjoy the benefits of baremetal, but also cloud-like provisioning and APIs, and as the cherry on top, find a compute package that was optimized for our needs - not much RAM and not that many cores, but FAST.

# Why we selected Packet

- Terraform/APIs
- Felt like a cloud - just with bare metal

# What we had to build when moving out of a "normal" cloud

- cloudflare instead of the "blessed" lb
- DIY iptables policies
- DIY monitoring

# Performance gains

- include influx queries here.