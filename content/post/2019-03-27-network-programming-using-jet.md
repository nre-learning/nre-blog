---
date: 2019-03-27T00:00:00-00:00
description: "Faster time to new services with network programming"
featured_image: https://networkreliability.engineering/images/nrelabs.png
tags: [provisioning]
title: "Network Programming Using JET"
show_reading_time: true
authors:
- name: Raymond Lam
  link: https://github.com/jnpr-raylam
- name: Tony chan
  link: https://github.com/valjeanchan
---

### Why we need "Network Programming"?

Modern network operating systems provide a handful of functionality such as routing (static/protocol based), switching (e.g. Source Mac Learning), Security (ACL, URPF, etc.) which fulfill most of the market needs. However there're cases where these standard functions do not fit specific customer business requirements, such as:

- Dynamic routing plan based on L1/2 link condition - e.g. Microwave link affected by weather condition
- Prototyping new protocol (such as DC Rift routing) in live environment
- Automated network failover linked with Application BCP/DR procedures

Moreover, the problem is getting more and more complex as the needs are customer specific, highly diverse, and will change along time (such as new failover logics tied with applications). Integrating the logic within the network operating system will not fit this dynamic requirement.

A loosely-coupled modular approach is needed and here comes network programmability.

### Network Programming using Juniper JET

Juniper provides JET - Juniper Extension toolkit, a high performance modern programmatic interface, to empower customer to implement business logics specific to their environment. JET supports the following features to ease development and flexible deployment:

- full feature GRPC based API to manipulate device status such as forwarding tables, access control list and protocol databases. This implements the ACTION of the business logic.
- event notification service (MQTT) to provide most up to date system events. This provide the input to the business logic.
- programming language bindings (such as C/Python) and packaging toolkit to create manageable software modules which can run on-box and off-box. This ease the Implementation of the logic.

Juniper has been actively participate in and contributed to the development of network programmability since 2012 and enabled numerous customers to integrate their network with business needs.

If you're interested in network programmability, and would like to get a hands-on experience, we have created a simple tutorial for you. There are five chapters in the lesson which guide you through the basics of GRPC and MQTT, and we also provide a live environment where you can try out JET. Check out our tutorial on the NRE-Labs - [Juniper Extension Toolkit (JET)] (https://labs.networkreliability.engineering/labs/?lessonId=25&lessonStage=1), and leave your comments and feedback.
