---
date: 2019-05-03T00:00:00-00:00
description: "Workflows for Device Inventory, Config Backup & Template Generation"
featured_image: "https://networkreliability.engineering/images/nreBlogPost-may19.png"
tags: [workflow]
title: "Workflows: Automation First Steps"
show_reading_time: true
authors:
- name: John Weidley
  link: https://github.com/jweidley
---

NRE Labs has a lot of lessons that provide foundational information and skills on a host of automation tools but workflows is where you start bringing together a few of those tools to accomplish a specific task. The three new workflow lessons in release v0.3.2 are meant to help people bring automation to their production in a meaningful way using a craw, walk, run approach. When companies are first starting with automation its better to start with `readonly` type automation, simple tasks that if they fail are not going to cause an outage. After you get a couple `readonly` automation scripts working and folks are feeling comfortable with it then you can start to expand into more advanced workflows.

This post will provide a little context around the new workflow lessons released with v0.3.2 as well as discuss my experience with creating curriculum content.

__Lesson 33: Device Inventory__

When you start using PyEz the "hello world" equivelant is printing the device `facts`. Its a simple function that prints device specific information like hostname, serial number, Junos version, etc. But that simple `facts` function can be used to create an incredibly useful device inventory script. It can be used to gather serial numbers for maintenance renewals, determining Junos versions to plan code upgrades, just to name a few. This lesson walks through a single device example as well as a multiple device example.
Check out the course [Quick and Easy Device Inventory](https://labs.networkreliability.engineering/labs/?lessonId=33&lessonStage=1)

__Lesson 34: Configuration Backup__

This lesson was contributed by [Mark Yeates](https://github.com/mayeates). Having an up to date device configuration is essential for disater recovery in the event of device failure or natural disaster. Being able to automate backup configurations makes recovery of the device that much easier (especially if it's a mission critical device). This lesson also covers single device configuration backup as well as how to accomplish this task for multiple devices. 
Check out the course [Automated Device Configuration Backup](https://labs.networkreliability.engineering/labs/?lessonId=34&lessonStage=1)

__Lesson 35: Device Template Generation__

Having the ability to easily generate a device specific configuration from a template is a HUGE time saver and it provides the consistency that you need to avoid common configuration errors. This is another workflow that provides a foundation to accomplish some pretty incredible results. No more using text file templates and doing a global search/replace to change values. This lesson shows the principals that allow you to create security baseline templates, mass template generation for new deployments, bulk single command generation as well as pushing and committing those changes on devices.
Check out the course [Device Specific Template Generation](https://labs.networkreliability.engineering/labs/?lessonId=35&lessonStage=1)


__Creating Curriculum Experience__

I was apprehensive when first considering contributing lessons because I'm more of a Network engineer than a programmer and I didn't have the time to learn a bunch of new stuff. Luckily NRE Labs uses a concept of "courseware as code" which made the entire process very easy.  

The lesson format is done with simple Markdown file syntax. For those that don't know, Markdown allows you to write using an easy-to-read, easy-to-write plain text format file that web browsers display as structurely valid HTML. One of the things that I found incredibly useful was the use of a Markdown browser plugin. I was able to complete the majority of the lessons using just a web browser with the markdown extension installed. Final validation testing was performed using [antidote-selfmedicate](https://github.com/nre-learning/antidote-selfmedicate) on my home server.


Here is the process I used to take ideas from the conceptual phase to NRE lesson:

0. Open an [Curriculum issue](https://github.com/nre-learning/nrelabs-curriculum/issues) to declare your intention and provide some details about your lesson. This is kind of a place holder to eliminate duplication of effort.
1. Develop and test the script outside of the NRE labs environment. 
2. Download [antidote-selfmedicate](https://github.com/nre-learning/antidote-selfmedicate) and install it on a server. The resources required is a little bit more than an average 16G laptop can handle but overall its pretty reasonable. The installation documentation is comprehensive but if you run into problems you can open an [antidote-selfmedicate issue](https://github.com/nre-learning/antidote-selfmedicate/issues).
3. Create a basic lesson framework in `selfmedicate` to test the code within the NRE labs environment. Start by cloning the [nre-curriculum](https://github.com/nre-learning/nrelabs-curriculum). There are plenty of lessons that you can use as examples to figure out how to include and interact with network devices.
4. After confirming the code in your lesson as a single code block is working, start breaking the code down into logical sections with different code blocks. For example create a code block for importing modules, another for creating output files, another for loops, etc. Test again to make sure all code blocks work as expected.
5. Create write ups for each code block section that describes its purpose, variables, etc. The write ups should give a basic understanding of what the code is doing and why you are doing it. Pay attention to the formatting.
6. When you are happy with your new lesson, open a Pull Request in GitHub. Your lesson will be reviewed and you have have to make some changes based on community feedback.


The biggest learning curve for me was Github. Forking, branches, pull requests & merges were all new concepts for me. As you would expect, there is a lot of really great Github tutorials on the web and the NRE Labs community were incredibly helpful! So if you are considering writting NRE lessons my advice would be to jump in with both feet. The entire process is easier than you would expect.

