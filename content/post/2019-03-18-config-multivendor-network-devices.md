---
date: 2019-03-11T00:00:00-00:00
draft: true
description: "Simple, efficient, and faster way to config multivendor network devices"
featured_image: https://networkreliability.engineering/images/nrelabs.png
tags: [provisioning]
title: "Vendor Neutral Network Management Using OpenConfig"
show_reading_time: true
authors:
- name: Raymond Lam
  link: https://github.com/jnpr-raylam
- name: Tony chan
  link: https://github.com/valjeanchan
---

### Network Management in Multivendor Environment
Network management in a multivendor environment is always challenging. Each vendor may implement things differently:

- different configuration model and syntax (e.g. IOS vs Junos Config)
- different provisioning methods (CLI, SNMP, Netconf, TL1, etc)
- different operation (show) commands and different output formats

People tried to solve this problem by using SNMP since 1988, however it's proven that SNMP is not the solution for configuration provisioning due to inflexibility of config by individual MIB object changes. Using one OID per data point is neither scalable nor flexible enough for a multivendor environment.

The industry needs a new way to perform network management.

### Industry led data model reform
Large network operators, especially Telcos and Over the Top Technology Companies, commonly have multivendor network environments. They have a huge network infrastructure to run, and automation is the only way to mange network at such scale (say 10000+ devices).

Traditionally, people write different device drivers for their automation platform, as different vendors have different provisioning mechanism. However this become costly to introduce new vendors to the system with the driver development cost. People want a way to lower the cost to introduce new equipment and also shorten the time to service.  This drives the industry to a consent to build a common set of data modeling and provision mechanism to ease automation, which becomes OpenConfig.

# YANG and OpenConfig
First of all, based on the lessons learnt from SNMP, a flexible and extensible data model is needed.  [YANG](https://tools.ietf.org/html/rfc6020) is selected as the data modeling language used to model configuration and state data, and manipulated by [Netconf Protocol](https://tools.ietf.org/html/rfc4741#section-1.1) (rpc and notifications). As YANG is protocol independent, YANG data models can be used independent of the transport protocols and can be converted into any encoding format supported by the network configuration protocols (such as GRPC).

[OpenConfig](http://www.openconfig.net/), based on actual operational needs from use cases and requirements from multiple network operators, is an informal working group of network operators focusing on developing a consistent set of **vendor-neutral** data models using YANG. OpenConfig data models define the configuration and operational state of network devices for common network protocols or services. It formed the foundation of vendor neutral configuration and become the defacto interface between the network manage system and the networking device. By using OpenConfig, the network management system no longer required different device drivers per vendor and a common provision method can be used for all vendors. Introduction of new vendor into the system become seamless and instant.

If you're interested in this vendor neutral network management and would like to get a hands-on experience, we have created a simple tutorial on OpenConfig on Junos. There are four chapters in the lesson which guide you through the basics of YANG model and OpenConfig, and we also provide a live environment where you can provision using OpenConfig. Check out our tutorial on the NRE-Labs - [Vendor neutral configuration provisioning using YANG and OpenConfig](https://labs.networkreliability.engineering/labs/?lessonId=26&lessonStage=1), and leave your comments and feedback.
