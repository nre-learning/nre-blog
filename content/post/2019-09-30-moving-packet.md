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

# NRE Labs Resource Considerations

A brief aside on NRE Labs' compute needs. We see on average, ~100 lessons launched a day, but very rarely are there more than a handful of concurrent lessons. That said, every once in a while we do see spikes in usage, and considering many of our lessons currently involve several copies of virtual network devices, it doesn't take long to really be using a large amount of RAM.

On the other hand, the underlying Antidote platform is fairly aggressive at cleaning up resources for inactive lessons, so in general, resource utilization tends to get smoothed out pretty evenly. This means that while we need a decent amount of RAM to support the "peaks", once we get past a certain point, adding more RAM is mostly wasted.

However, the one resource we can never get enough of is **speed**. Ever since the project began, it's been all about making decisions to keep learner interactivity high, and quick. 


# History of NRE Labs

NRE Labs was really starting to take shape in the summer of '18. We were building containers for lesson endpoints, and some of those containers were running VMs inside them (primarily for network operating systems). The Antidote platform was built to run not only on top of Kubernetes, but also integrated with the Kubernetes API.

It was also around this time that we started to think about platforms on which to run NRE Labs. Our early prototyping had been done on Google Cloud to this point, for one main reason - GCE has [configuration options for nested virtualization](https://cloud.google.com/compute/docs/instances/enable-nested-virtualization-vm-instances). This was necessary for us, because we were running VMs (network devices) within VMs (GCE instances) and without these extensions, the performance was......really, really bad. So, we stuck with GCP for the time being. It seemed to work well, and GCP as a whole also had a lot of extra services like load balancing, security, monitoring, etc.

NRE Labs was officially launched in October of 2018, and we spent the next few months making improvements to the curriculum, the underlying platform, and continuing to get more experience with GCP and the [operational tooling we built on top](https://github.com/nre-learning/antidote-ops). In these months, we learned two important lessons:


- **Managing performance is hard** - Hardware acceleration can only improve nested virtualization to a point At the end of the day you're still dealing with a fairly significant performance penalty, and the reality is that most network operating systems weren't even designed for a single layer of virtualization - much less two. In addition, the idea of running any compute-sensitive workloads in a cloud means you're subjected to the noisy-neighbor problem. Most applications get around this by scaling out, which is an option we don't have. Each lesson spins up single instances for everything, and needs to boot quickly, otherwise we lose the attention of the learner.
- **Most cloud providers' instance types optimize for quantity, not speed** - Cloud VMs are often highly optimized for RAM, or number of cores. It's very rare to have an instance type with a reasonably fast core speed, and even when they exist, they're usually a TON of RAM or cores, way too many.


So, we started looking for alternative solutions that ideally checked both boxes:

- Baremetal performance
- API-driven provisioning and management, just like a cloud provider
- Compute packages optimized for our needs - enough RAM and cores to live on, but **fast** core speed.

# Why we selected Packet

It didn't take us long to discover Packet, as they basically fit all three of the requirements above.

- Terraform/APIs
- Felt like a cloud - just with bare metal

# What we had to build when moving out of a "normal" cloud

- cloudflare instead of the "blessed" lb
- DIY iptables policies
- DIY monitoring

# Performance gains

- include influx queries here.