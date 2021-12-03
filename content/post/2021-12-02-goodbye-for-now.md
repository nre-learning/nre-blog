---
date: 2021-12-02T00:00:00-00:00
description: ""
tags: []
featured_image: "/images/2021/12/goodbye.png"
title: "Goodbye, For Now"
show_reading_time: true
authors:
- name: Matt Oswalt
  link: https://twitter.com/mierdin
---

When NRE Labs launched, the project was driven by two main viewpoints:

- Our industry is moving in a direction where a broader skill set is more important than ever. Incorporating topics like automation into our repertoire is necessary for our industry to move forward.

- Making it easier for everyone to level-up their skill sets benefits the entire industry. There are a multitude of unspoken barriers to learning a wide variety of technical subjects, and the unrelenting destruction of these barriers is a worthwhile cause.

The last three years have been a great adventure, and I've been very touched by the numerous stories I've heard from those of you who benefitted from the NRE Labs curriculum. That said, the community around NRE Labs didn't develop to the extent we had envisioned. This has led us to making the tough decision to shut down the project.

The plan for NRE Labs going forward is:

1. The interactive labs will no longer be accessible, and will redirect to the main [nrelabs.io](https://nrelabs.io) page.

2. All of the project's [GitHub](https://github.com/nre-learning) repositories will be archived (marked as read-only). They'll stay public for posterity but in general, contributions and issues will be discontinued for all repos.

# Highlights

I tried writing this blog post without doing a little bit of a retrospective. To be honest, it made me a little emotional, and so I had originally intended on just punting this until later. However, I can't convince myself to publish any blog post of this nature that doesn't acknowledge the many highlights that have taken place over the last three years.

## Usage Stats

Over the course of NRE Labs' operation, I kept track of the number of lessons launched (this was all anonymized of course). This ended up being tracked in a few different back-end systems over time, so I never looked at the usage at a scale beyond a few months or so. Typically I would just set a query in Grafana equal to the trailing 7 days worth of activity - this gave me a good idea of what lessons were popular and what the system performance looked like during that time.

However, for this occasion, I pieced it all together. During the last three years, over 55,000 lessons were launched. This was the first time I've even tried to tally up usage statistics over such a long period of time, and when I saw that number, I was amazed. It was more than I could have ever hoped for. This is an average of about 350 lessons launched per week (50 per day!)

<div style="text-align:center;"><a href="/images/2021/12/beaker.jpg"><img src="/images/2021/12/beaker.jpg" style="width: 400px;margin-top: 10px;" ></a></div>

While I never viewed these raw usage numbers as the primary metric for the project's success, it does show that there was enough substance in the curriculum to keep people coming back and spreading the word. And that's not my doing - that number is owed 100% to those who spent time and energy contributing their time and expertise to the curriculum, the platform, and to the countless videos and blogs recorded on the technical subjects we covered.

## Contributions

There were well over 30 contributors to the NRE Labs project if I try to sum up all of the contributions tracked by Github. Even so, this doesn't properly account for the other contributions that took place. Many provided feedback in our discussion forums, in Github issues, or even privately, and this had a substantial and positive impact on the quality of the content.

Of course, the NRE Labs curriculum and it's 18 total lessons was the star of the show, and I really loved to see those contributions come in. I am a firm believer in teaching as a form of giving back and also as a way of reinforcing my own understanding, and participating in the creation of a shared curriculum for automation principles was its own reward.

Some of you wrote [HUGE blog posts on the contribution process](https://www.brianlinkletter.com/2019/05/create-lab-lessons-for-the-nre-labs-antidote-network-emulator/), and how to run some of the contribution tools. Some of you [recorded your own videos](https://vimeo.com/334698106), [live-streamed NRE Labs content](https://twitter.com/NRELabs/status/1097186822780682240), or participated in some of our own live streams. NRE Labs is all of this, and it made the whole experience so much better.

Looking back on all of this, I am really blown away. More people than I could ever properly capture here invested their time and energy into helping make this project better, so for that I say thank you.

## YouTube Channel

We didn't really have a huge plan for our [YouTube channel](https://www.youtube.com/c/NRELabs) originally, but it ended up being the repository for some really great content.

  - The [Community Interviews](https://www.youtube.com/watch?v=ROLej0HdEwU&list=PLjM9FuOtKYVhXixs9rEjf7brmPDSWPe8R) were the source of a ton of great content, as we were able to interview real practitioners around the industry, and they were kind enough to share their knowledge and expertise with us.

  - We did a weekly [Community Standup](https://www.youtube.com/watch?v=W8nWDcJXJEI&list=PLjM9FuOtKYVjugoYMAHEecnCXSIFSb1zS) for quite some time, and there were several regulars there. A lot of great ideas were shared and discussed there, and this was really crucial in keeping project momentum and quality high.

  - [Labs and Latte](https://www.youtube.com/watch?v=YAXWxA4x8vs&list=PLjM9FuOtKYVjPjaolwbFFqMg-ZD9DeUsS) was sort of a personal experiment of mine, and gave me the excuse to renew my Adobe Premiere subscription (and of course to justify my coffee addiction).

The YouTube channel was really the manifestation that the NRE Labs project was about much more than just the curriculum or the Antidote platform. We have no plans to shut down or remove this channel, so all of those videos should be around for quite some time.

# Technical Highlights and Ideas

I've learned a lot through this project. There are plenty of lessons I had to learn the hard way as the project progressed and grew. However, there are also a few aspects and features in the project that from a purely technical perspective I'm particularly proud of:

<div style="text-align:center;"><a href="/images/2021/12/original_design.jpg"><img src="/images/2021/12/original_design.jpg" style="width: 300px; margin-top: 10px;" ></a></div>

- **Modularity**: the project as a whole is made possible by the assembling of loosely coupled components. For instance, there's nothing specific to network automation or network reliability engineering that's built into the Antidote platform. Antidote is just a "[curriculum-as-code](https://nrelabs.io/2018/11/how-nre-labs-implements-curriculum-as-code/)" platform, and can therefore be used to teach a wide variety of technical subjects.

- **Preview pipeline**: Even before we launched NRE Labs, I wanted to work on making the contribution process as simple as the learning process. However, this ended up being harder than I thought it would be. When the [preview pipeline](https://nrelabs.io/2021/03/introducing-nre-labs-content-previews/) concept finally rolled out, it was a huge personal milestone for me, and I think the design really worked well. It completed the long-term vision of allowing contributions without the need for running complex local environments.

- **Fully automated infrastructure**: I was given the time to build comprehensive automation for standing up the entire infrastructure that powered NRE Labs, from the cloud load balancing, to the bare-metal servers, to the monitoring infrastructure, to the kubernetes bootstrapping, etc - and it was **worth it**. Every once in a while, things would happen that required a rebuild of the environment, and even if I had to start from scratch, I was never more than 30 minutes away from getting everything back up and running.

There were also plenty of ideas that we discussed (and also suggested to us) that we didn't get around to:

- **In-browser code editor**: This was one that we talked about a lot but never managed to get off the ground. Not everyone loves editing code in a `nano` or `vi` session, and this would provide a more accessible experience.

- **Opt-In Progress Tracking**: NRE Labs was built on the idea of "uncookied", meaning it wasn't about tracking you or getting you to sign up for an email list. It was important from the beginning, that everyone can skill up without these barriers. That said, it could be nice for learners to be able to track their own progress, and share this with others (peers, employer, etc). A basic user/login system could be useful here.

- **Challenges and Success Verification**: NRE Labs is pretty flexible and self-paced. You can follow the lesson guide, or not - it's really up to you. However, it could be useful to have a way of providing "objectives" to the learner to accomplish within a lesson, say modifying a Python script to perform a certain outcome.

As mentioned, the Github repositories will be marked read-only but will stay public. It's all still available under an open-source license, and I would be supportive of anyone who is interested in what's been done here. I will do my best to periodically check the project's email address (nrelabs [at] gmail), if you have any questions or ideas you want to bounce off of me.

# Thank You

There are too many folks to count that deserve my gratitude for their involvement in NRE Labs, but there are a few that I absolutely must call out by name.

To the primary project sponsor **Juniper Networks** - and in particular [**Mike Bushong**](https://twitter.com/mbushong): Mike didn't have to let me work on this project - often exclusively - for years, but he did. He didn't have to approve all of those expense reports for running the NRE Labs infrastructure, but he did. He didn't have to let me hire a [specialist front-end development firm](https://www.bitovi.com/) to give the site a huge user experience improvement, but he did. Thank you, Mike.

To [**James Kelly**](https://twitter.com/jameskellynet) - Thank you for constantly being an [NRE Labs cheerleader](https://vimeo.com/391612648) and for listening to me prattle on (often incoherently, I'm sure) about my ideas. Thank you for creating the NRE Labs logo! And thank you for letting me expense a ridiculously small order of real, custom-embroidered lab coats from a company who I'm sure hoped we were at least tangentially working in a scientific field 🤣.

<div style="text-align:center;"><a href="/images/2021/12/lab_coat.jpg"><img src="/images/2021/12/lab_coat.jpg" style="width: 700px;margin-top: 10px;" ></a></div>

To [**Lisa Caywood**](https://twitter.com/RealLisaC) - Thank you for helping the project "grow up" a bit, and making it more accessible to new and diverse contributors. You were responsible for so much "load-bearing" project work, some public, some not so public, but all absolutely crucial for the project's early momentum. You were instrumental in making sure that all of the necessary tasks that others might overlook (I did!) when doing open source within a big company were done properly.

To [**Derick Winkworth**](https://twitter.com/cloudtoad) - Thank you for putting on your game face for this project. You invested so much time preparing for and interviewing people for the [livestream](https://www.youtube.com/watch?v=ROLej0HdEwU&list=PLjM9FuOtKYVhXixs9rEjf7brmPDSWPe8R), and coming up with ideas for new content, or improvements to the platform. Thank you for tirelessly working on improving the contributor experience, and helping contributors learn how to use the tooling. Especially in the very rough early days of the project, this was absolutely instrumental. There were a lot of other things you could have chosen to work on, and I want to say thank you for jumping on the bandwagon with me.

Again, for everyone else that contributed and participated, thank you. This project couldn't have gotten where it was without you. For those that spent time learning through the curriculum - we hope it was useful on your journey. We hope that you don't stop here, and that you continue down the learning path.

<div style="text-align:center;"><a href="/images/2021/12/goodbye.png"><img src="/images/2021/12/goodbye.png" style="width: 700px;display: block;margin-top: 10px;" ></a></div>


