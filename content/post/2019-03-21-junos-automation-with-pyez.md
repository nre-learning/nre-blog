---
date: 2019-03-21T00:00:00-00:00
description: "Manage your network in a programmable way."
featured_image: "https://networkreliability.engineering/images/nrelabs.png"
tags: [configuration]
title: "Junos Automation with PyEZ"
show_reading_time: true
authors:
- name: Raymond Lam
  link: https://github.com/jnpr-raylam
---

DevOps and automation are hot topics in IT industry nowadays and everyone is talking about them.

Large Enterprise and service providers were started to use network automation to deploy and manage their networks and services few years ago.  The network infrastructure scaling of those Enterprise and SP keep increasing every year, and their success can prove that, while comparing to traditional command line management methodology, network automation helps to improve the operation efficiency and brings in some benefits include:

__Prevent Human Errors__

Human are good for creative jobs while computer are good for repetitive tasks.  Why don’t we automate those operational procedure and leave room for us for network design tasks?  In addition, some surveys reported at least 40% of network failure are due to human errors, automation can help ensure producing the same output and result accurately every time.

__Time Saving__

Updating configuration for or collecting information from hundreds of routers and switches is not something that should be done manually.  With automation, those tasks can be done parallel and the duration of each task is shortened.

__Career Advancement__

Today typical IT priorities are to improve profit and reduce OpEx, network automation is a key ingredient and people who can utilise automation to achieve business goals will become more competitive in the market.

I think you now agree network automation is important, but how do we do the automation?  While network automation can happen in various layers, start from the top orchestration system, device management system, down to individual network devices.  For upper layer, those management software already supports common programmable interface likes RESTful API.  For network devices, traditional network administrators are using some screen scraping tools to perform their daily task.  The idea of screen scraping is to use a script or program to telnet/SSH to network boxes, send commands to them and get the responses for further parsing, probably using some string manipulation tools such as regular expression.

The main problem of screen scraping is that those returned data are targeted for consuming by human, they’re not well structured and friendly for computer.  We usually spent lots of time to compose a regex to match the CLI output.  If you have the experience, you should know it’s quite difficult to maintain.  New software release for network devices many introduce new data in the response output, it may break existing automation scripts and rewrite of those scripts is needed. 

Another problem of screen scraping is the reliability. There is no well-defined mechanism to notify the success or fail for each CLI commands. Even worse, some command doesn’t have any output at all, from programming point of view, it’s difficult to determine the next action.

So do we have any programmable way to automate the interaction with network devices? YES! In the very beginning, Junos was already designed for API access, the internal data structure is well-defined and in XML format which is targeted for data manipulation easily.  The format of each API requests and responses are pre-defined also, it makes the communication more reliable and deterministic.

With the advantages of using programmable way for network automation, do I need to be an experienced programmer, and to learn those API schema?  No!  By using PyEZ, a micro-framework for Python that enables you to manage and automate Junos devices, non-programmers can quickly retrieve facts and operational information from a device and execute actions in Python interactive mode, and more experienced programmers can opt to create more complex, robust, and reusable programs to perform tasks.

If you want to explore how to use PyEZ for network automation, we have created a tutorial in NRE labs, which provides a step-by-step guide to go through the basics of PyEZ, and it also provides a live environment consists of virtual Junos devices for you to practise. Check out the course [Junos Automation with PyEZ](https://labs.networkreliability.engineering/labs/?lessonId=24&lessonStage=1) now.
