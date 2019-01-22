---
date: 2018-11-16T00:00:00-00:00
description: Automating the configuration creation using Jinja2 Templates.
featured_image: "/images/jinja2.jpg"
tags: []
title: 'Using Jinja for Configuration Templates'
show_reading_time: true
authors:
  - name: Bhoomi Shah
    link: https://github.com/shahbhoomi
  - name: Shruti Pawaskar
    link: https://github.com/ShrutiVPawaskar 
---
As a Network Engineer, you may have encountered a situation in which you had to configure multiple network devices with the same configuration but with just a few changes in IP addresses/ interface names? Did you spend hours configuring them individually or did you do it the smart way by using automation?  
  
Traditionally network engineers have a CSV file containing the network details of hundreds of devices. They use this CSV file to manually craft similar configuration for all the devices with device-specific IP addresses, interface names in the configuration. Handcrafting configuration requires time and introduces human error. Following this approach can take days setting up an entire data center.  

As a Network Engineer, I would like to automate multiple devices without requiring to create configurations for each device individually.  
### Enters Jinja2  

Python templating approach automates device configuration generation. So, what is a template?  A template is a piece of CLI configuration where you substitute every changing value in the configuration with a variable name. Additionally, you can also embed logic into the template thus minimizing repetitive statements in the configuration.  

Jinja is a templating language for Python. Jinja, specifically the newer version, Jinja2, is very prevalent in DevOps and NetOps world and is supported by automation tools like PyEZ, Ansible, StackStorm, and Salt. Creating device configurations for multiple devices with Jinja2 is as easy as 1-2-3:  
1.  Create a configuration template.  
2.  Provide the configuration variables for the template.  
3.  Render the configuration template.  

Instead of just printing these configs, you can pass them into the Ansible/ PyEZ / SALT to push them automatically to your network devices! 

<img width="624" alt="screen shot 2019-01-21 at 10 24 27 pm" src="https://user-images.githubusercontent.com/16211732/51516885-c1e4a880-1dcd-11e9-89f6-b422da8f8851.png">
  


### Jinja2 in Action  

Let's see how Jinja2 can help you with smartly create configurations multiple devices. Let’s say you have two QFX devices that you need to configure. For simplicity, let us assume you only want to set the hostname and interfaces for these two devices. How will you approach this task?   

For automating the device configuration you need two components, first is configuration template and second the device specific information.  

We have discussed the configuration template previously in this blog. You can store the device details either in a python dictionary or a YAML file. In this example, we will save the details in a YAML file. YAML is a human-readable data serialization format which simplifies data representation.  

The below snippet from our lesson shows how to create a template for the configuration of hostname and interface details.  

<img width="634" alt="screen shot 2019-01-20 at 6 35 08 pm" src="https://user-images.githubusercontent.com/16211732/51516610-dc6a5200-1dcc-11e9-952d-9db924b0daf0.png">


The below screenshot shows the device details stored in the YAML file.  

<img width="634" alt="screen shot 2019-01-20 at 6 35 39 pm" src="https://user-images.githubusercontent.com/16211732/51516624-e4c28d00-1dcc-11e9-926d-02140528bd8a.png">

Now once the template is defined, we can render the config for each device specified in the YAML file. This way we can reuse the same template and change the device details using a YAML file to create individual configs (as shown below) for each device and then push it to the device using PyEZ.  

<img width="634" alt="screen shot 2019-01-20 at 6 38 06 pm" src="https://user-images.githubusercontent.com/16211732/51516653-f4da6c80-1dcc-11e9-81b0-82302c5bea47.png">  

<img width="634" alt="screen shot 2019-01-20 at 4 38 43 pm" src="https://user-images.githubusercontent.com/16211732/51516931-ec366600-1dcd-11e9-9269-9097dc7b6314.png">


Isn’t it amazing how Jinja2 simplified the task of creating device-specific configuration?  

### Try Jinja2 Right Now in Your Browser  

If you want to configure your devices the smart way and learn Jinja2 without worrying about lab gear and installations, you can do that on [your browser for free!](https://labs.networkreliability.engineering/labs/?lessonId=16&lessonStage=1) We create a lot of fun lessons on different automation techniques on our NRE Labs.   
 
We’re pushing new content to NRE Labs all the time. Follow us on Twitter @NRELabs for updates on new content, fixes, and related events.
