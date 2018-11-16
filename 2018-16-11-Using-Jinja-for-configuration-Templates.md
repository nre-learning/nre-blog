NRE – LAB Jinja2 Blog:
 
---
date: 2018-11-16T00:00:00-00:00
description: Automating the configuration creation using Jinja2 Templates.
featured_image: "/images/jinja2-image.jpg"
tags: []
title: ' Using Jinja for Configuration Templates.'
show_reading_time: true
author:
 name: Shruti Pawaskar, Bhoomi Shah
 link: https://github.com/ShrutiVPawaskar, https://github.com/shahbhoomi
---
 
Have you ever faced a situation in which you had to configure multiple devices with the same configuration but with just a few changes in IP addresses/interface names? Did you spend hours configuring them individually or did you do it the smart way by using automation techniques? 
```
As a Network Engineer, I would like to automate multiple devices without requiring to create individual configurations. 
```
Jinja is a templating language for Python, which will help you do that. Jinja, specifically the newer version, Jinja2, is very prevalent in DevOps and NetOps world, as it is supported by automation tools like PyEZ, Ansible, StackStorm, and Salt. Creating device configurations for multiple devices with Jinja2 is as easy as 1-2-3: 
1.  Create a configuration template. 
2.  Provide the configuration variables for the template
3.  Render the configuration template. 
 
And there it is, a configuration that you can paste on your network device. 
If you feel this is something that would be useful to you, then check out [our Jinja lessons on NRE-Labs](https://labs.networkreliability.engineering/labs/?lessonId=16&lessonStage=1). NRE labs is an open source platform sponsored by Juniper Networks to help you acquire new automation skills easily. It provides the user a pre-setup environment with the devices, virtual machines and the required software  packages pre-installed. 
Yay!!! Now you can learn Jinja2 without worrying about lab gear and installations!!
Here is a summary of what we will teach is you in the lessons:
 
### Part 1: Introduction:
We will start by creating the templates in the form of string variables and then populate it with data to create the configuration. We will also show how to  reuse the templates for configuring different devices by changing the data set.
 
### Part 2: For Loops:
In this lesson, we will show how to use the for-loop to iterate through the python list or dictionary containing the data.
 
### Part 3: If and Set statements: 
Here we will show you how to filter the data you want to populate in your template. ‘If’ statements give you the decision making power for selecting a subset of your data. The ‘set’ statement, on the other hand, will give you the ability to define the variables which can be used within the template.
 
### Part 4: Passing data into a Template from YAML:
Storing the data in the code is not easy, so in this lesson, we will see how to export data from an external YAML file to your python script.
 
### Part 5: Importing a Jinja Template from a File:
Now you might be wondering, this all is great, but can I isolate the Jinja2 template from python script? In this lesson, we will answer just that. You can create a separate template files and use that in a script. You can also include one Jinja2 template into another Jinja2 template. Thus, reducing the complexity by creating simple template files for each specific tasks.


 

