---
date: 2019-04-08T00:00:00-00:00
description: "Breaking up is hard to do. It's not you...it's our confusing Github Repositories."
featured_image: "https://networkreliability.engineering/images/repos.png"
tags: []
title: The Antidote Repository Shuffle
show_reading_time: true
authors:
- name: Matt Oswalt
  link: https://twitter.com/mierdin
---

Since we launched the Antidote project and NRE Labs in October, we've learned a lot on the fly. It's no secret that we put this project out extremely early, in the hopes that others would get involved in the construction of this project.

# Antidote - The "Junk Drawer" Repository

One of the things we've found valuable is talking very precisely about NRE Labs as a curriculum. It's true, NRE Labs is represented as a tangible website, running on tangible cloud infrastructure that Juniper Networks happens to be paying the bills for, but the true essence of NRE Labs isn't any of these - it's the curriculum that we put out there and has been contributed to over the last half year or so.

When we originally started the project, we established the [Antidote](https://github.com/nre-learning/antidote) repository as a home for this curriculum. In fact, we originally were planning on putting everything in this single repository - not just the curriculum, but all software we would later develop, and all of the infrastructure configurations we use to run our instance in the cloud. This was evident in the fact that this repository had a subdirectory `lessons`, but also `infrastructure` and `platform`, which contained terraform definitions and Kubernetes manifests respectively for actually running this system in the cloud.

When it came time to develop the custom software that makes up the Antidote platform, we knew we wanted to maintain those in separate repositories, so we created [Antidote-web](https://github.com/nre-learning/antidote-web) for managing the front-end application that you see when you visit the NRE Labs site, and the [Syringe](https://github.com/nre-learning/syringe) repo for the back-end orchestrator that talks to Kubernetes.

That still left the Antidote repository as kind of a "junk drawer" - a repository that contained all of the lessons, but also the documentation, and all of the infrastructure scripts that we happen to use in our version of production - many of which won't be useful to anyone else unless they replicate our setup. This was also true of the PRs and Issues opened on this repo. We found ourselves having to heavily rely on Github labels just to keep things straight in our heads whether or not something was referring to the infrastructure, the docs, the cluster management, or the curriculum. 

# Moving Some Things Around

So, last week, we opened [this issue](https://github.com/nre-learning/antidote/issues/8), describing the proposed change. But I'll summarize here:

- The Antidote repo has been moved to [https://github.com/nre-learning/nrelabs-curriculum](https://github.com/nre-learning/nrelabs-curriculum), and everything except the files strictly relevant to the NRE Labs curriculum has been removed. Going forward, this is the repository you will contribute to for curriculum enhancements or additions. It was moved with all history as well, so while you will have to update your remotes (see below), you can still continue any work you have in progress.
- The old `platform` and `infrastructure` directories from the Antidote repo has been moved to [https://github.com/nre-learning/antidote-ops](https://github.com/nre-learning/antidote-ops). This is the rightful place, as, just like all of the existing Stackstorm stuff in that repo already, it's really only relevant to our production instance of the NRE Labs curriculum running on Antidote. We obviously want to keep it open source so we're continuing to do everything in the open, including our own ops, but this repo is a much better place for it.
- The existing [Antidote](https://github.com/nre-learning/antidote) repository is still around, but now is a **much** better reflection of what the project actually is - a collection of smaller projects that do specific things. To that end, this repository now contains the docs for Antidote, as well as links to the other major Github repositories (using [Git submodules](https://git-scm.com/book/en/v2/Git-Tools-Submodules)) that makeup Antidote. Imagine this repo as the "hub" of Antidote. While less code is actually hosted here, it's still the representation of the conglomerate nature of the project.
- Issues that existed in what is now the [NRE Labs curriculum repo](https://github.com/nre-learning/nrelabs-curriculum) have been combed over, and similar to the files in the repo, anything that doesn't directly pertain to the curriculum itself has been moved elsewhere. Most were moved to Antidote repo, while some were moved to more specific repositories.

Generally, this is a very positive change and allows us to be much more segmented with our work. The net benefit will be that future contributors will be less overwhelmed by the mess, and will be able to more clearly see the curriculum they're considering contributing to.

# What Do I Need to Do?

If you're not actively contributing to the curriculum, nothing, really. The way we went about moving things around was to impact users and contributors as little as possible.

If you are actively working on a contribution to the curriculum, since we renamed the Antidote repo, rather than delete it and create a new one, all of the Git history is preserved, so you need only amend your Git remote configuration to point to the new repo, and then do a fresh pull on the `master` branch.

For consistency we also recommend you rename the repo directory on your local filesystem, so let's do that first. Assuming you've navigated to the parent directory of the old `antidote` repo directory on your system, just rename thusly:

```bash
mv antidote/ nrelabs-curriculum/
cd nrelabs-curriculum/
```

Next, you'll notice that the remotes for this repo are still pointing to the old Antidote location.

```bash
~$ git remote -v
origin	git@github.com:nre-learning/antidote.git (fetch)
origin	git@github.com:nre-learning/antidote.git (push)
```

Normally this would be okay, since Github handles redirects very well when upstream repositories are renamed, but since we created a new repo at this spot, you absolutely should update this, otherwise, you'll inadvertently push to the old location.

You can delete the existing remote, and recreate it with the new location. Note that we're using SSH syntax here (i.e. `git@github.com...`), which is definitely the secure way to go, but you can use the HTTPS syntax here if you wish.

```bash
git remote remove origin
git remote add origin git@github.com:nre-learning/nrelabs-curriculum.git
git checkout master
git pull origin master
```

If you encounter issues or have any questions, please join and send an email to the [Antidote Developers mailing list](https://groups.google.com/forum/#!forum/antidote-developers)
