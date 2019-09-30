---
date: 2019-10-07T00:00:00-00:00
description: ""
featuredimage: ""
tags: []
title: "The Image Creation Process"
show_reading_time: true
authors:
- name: cloudtoad
  link: https://twitter.com/cloudtoad
---

Each lesson in NRELabs includes a sandbox environment for learners to interact with so they can explore lesson concepts on real systems.  This environment consists of one or more docker images.  An image could be a linux host, a virtual network appliance, an IP PBX, or really anything that a lesson creator can dream up.  But how do these images get created?  In this post, we’ll walk through the three stages of image creation.

## Stage 1: Building a Base, Ex Nihilo

Image creation starts with building a base.  This is done by downloading an install ISO for a linux distribution, or a prepared image such as a virtual network appliance.  

We boot this image to add the “antidote” user and add it to the appropriate user groups.  In most cases we add this user to the “sudo” group, or otherwise give this user equivalent administrative privileges.  For instance, in the Cumulus VX image, we add the user to the “netshow” and “netedit” groups so it can run Cumulus’s “net” tool.  Next, we ensure that the primary interface of the image is configured for DHCP.  

In the case of applications like Asterisk PBX, Free-Range Routing, or Netbox images, we install or compile the relevant packages and dependencies.  On all images, we ensure that any APIs (including REST or Netconf) are enabled.

Once we are done with the ISO image itself, we need to create a dockerfile for the image that launches it with QEMU.  The launch script for this container should look for and create the right network interfaces with QEMU, and stitch them to the underlying interfaces in the container.  It should also pass a mount-point to the virtual-machine so it can mount the lesson and configuration files.  Finally, the launch script should ensure the right ports are being forwarded from the underlying primary interface of the container (“eth0”) to the primary interface of the virtual-machine.

The completed ISO files for QEMU are stored in a Google Cloud Platform bucket.  The docker images are stored in the “antidotelabs” docker hub repository.  Our base is done!

## Stage 2:  The Lesson Metafile

Now that we have a base image, we need to start configuring it for a particular lesson at the time the lesson is launched.  This configuration starts with Syringe, the core component of the Antidote platform, reading the lesson metafile at the time a lesson is launched.

This Metafile describes which images to use for the lesson, and how the user will interact with those images.  For instance, the user might use SSH, NetConf, or a REST API to interact with the image.  

Additionally, the metafile describes how the various virtual-machines in a lesson are interconnected, and Syringe will ensure that the right interfaces are created and connected with each other when the virtual-machines are launched.

So far so good.  The base images are launched, we can access them, and they are wired together!

## Stage 3:  Virtual-Machine Configuration

The final step in preparing the image for the user is to configure the applications in it.  This can be done a variety of ways, including via NetConf, Python, or Ansible.  First, though, this is the stage where the hostname and interface IP addresses of the virtual-machine are configured.  

Configuration files for the applications are copied from the mounted lesson directory to their appropriate locations.

Finally, all appropriate system services and applications are restarted with their new configurations.  

## Conclusion

This is the current snapshot of how images are prepared for a lesson from scratch to the moment a lesson is launched.  In the near future, we’ll be automating the parts of this process that haven’t been automated yet, which are mostly in Stages 1 and 3.  This process will be documented in the “Mini-Project 3” proposal here:  [MP3 Curriculum Images](https://github.com/nre-learning/proposals/pull/7).  Together, the NRELabs community will specify and implement this process.

Creating an image for your lesson can be time consuming and tedious.  There’s a lot of trial and error involved.  However, when completed and documented properly, your image can be reused in other lessons easily by others.  With greater automation and integration into the Antidote CI/CD pipeline, it’ll become easier and easier.

Until then, this post serves as a great high-level overview to get you started.  If you have any questions or become stumped in the process of creating your own images, you can engage other community members on our forums here:  [NRELabs Community Forums](https://community.networkreliability.engineering).


