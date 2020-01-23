---
date: 2019-04-15T00:00:00-00:00
description: "A tale of inconsistent results, late-night debugging.....and actually reading the docs."
featured_image: "https://networkreliability.engineering/images/bug.png"
tags: []
title: The Lesson State Bug That I Finally Murdered
show_reading_time: true
authors:
- name: Matt Oswalt
  link: https://twitter.com/mierdin
---

This blog is a little bit nerdy deep dive into state management in the back-end of NRE Labs, but also a bit of an apology for what must have been a very frustrating experience for 2/26 of you.

# The Symptoms

First, the graph.

<div style="text-align:center;"><a href="/images/2019/04/graph.png"><img src="/images/2019/04/graph.png" style="width: 500px;display: block;margin: 0 auto;" ></a></div>

Note that while this obviously wasn't ideal, from what I could tell, everything was working, and no one was telling me about problems, so I assumed things were good until a future release when I could figure out the problem.

Next, I happened to set my session ID to something like `mierdinptrsession`, which as I would find out later on that same day would turn out to be extremely serendipitous. While I'm sure I would have figured out the cause of the problem somehow down the line, the fact that I set this meant that I was seeing this behavior happen on **every single one** of my launched lessons after I made that change.




```
~$ kubectl get ns
NAME                   STATUS   AGE
14-round1-abcdef-ns    Active   5m50s
14-round1-abcdef2-ns   Active   2m49s
14-round1-abcdef3-ns   Active   2m43s
14-round1-abcdef4-ns   Active   57s
14-round1-abcdefn-ns   Active   44s
14-round1-abcdefs-ns   Active   44s
default                Active   95d
kube-public            Active   95d
kube-system            Active   95d
prod                   Active   95d
ptr                    Active   95d
```


```bash
~$ kubectl exec -n=ptr syringe-54b9cf588-kd7sg syrctl ll list
14-round1-abcdef2
14-round1-abcdef3
14-round1-abcdef4
14-round1-abcdefn
14-round1-abcdefs
14-round1-abcdef
```


# Behind the Scenes

Talk about how requests to the API hit a first layer of state management in the API server, and then a message is sent to the scheduler via go channel to make it happen. When the scheduler does work, whether or not it's as a result of an API server request, it sends a result up another go channel, and the API server usually does something with it's local state to keep it in sync. A good example of this is garbage collection - when the scheduler deletes a kubernetes namespace because of GC, it sends a message back up to the API server so that it can remove it's local state.

Note also that while this is important to know for the bug, Syringe is going to be re-architected for v1.0 so that the API server is totally stateless. So, don't get married to this architecture.


https://golang.org/pkg/strings/#TrimRight


https://www.youtube.com/watch?v=Q6td54n_g1E


curl -k -X POST https://ptr.labs.networkreliability.engineering/syringe/exp/livelesson \
    -d '{"sessionId": "round1-abcdef", "lessonId": 14, "lessonStage": 1}'
curl -k -X POST https://ptr.labs.networkreliability.engineering/syringe/exp/livelesson \
    -d '{"sessionId": "round1-abcdef2", "lessonId": 14, "lessonStage": 1}'
curl -k -X POST https://ptr.labs.networkreliability.engineering/syringe/exp/livelesson \
    -d '{"sessionId": "round1-abcdef3", "lessonId": 14, "lessonStage": 1}'
curl -k -X POST https://ptr.labs.networkreliability.engineering/syringe/exp/livelesson \
    -d '{"sessionId": "round1-abcdef4", "lessonId": 14, "lessonStage": 1}'
curl -k -X POST https://ptr.labs.networkreliability.engineering/syringe/exp/livelesson \
    -d '{"sessionId": "round1-abcdefn", "lessonId": 14, "lessonStage": 1}'
curl -k -X POST https://ptr.labs.networkreliability.engineering/syringe/exp/livelesson \
    -d '{"sessionId": "round1-abcdefs", "lessonId": 14, "lessonStage": 1}'



curl -k -X POST https://ptr.labs.networkreliability.engineering/syringe/exp/livelesson \
    -d '{"sessionId": "round2-abcdef", "lessonId": 14, "lessonStage": 1}'
curl -k -X POST https://ptr.labs.networkreliability.engineering/syringe/exp/livelesson \
    -d '{"sessionId": "round2-abcdef2", "lessonId": 14, "lessonStage": 1}'
curl -k -X POST https://ptr.labs.networkreliability.engineering/syringe/exp/livelesson \
    -d '{"sessionId": "round2-abcdef3", "lessonId": 14, "lessonStage": 1}'
curl -k -X POST https://ptr.labs.networkreliability.engineering/syringe/exp/livelesson \
    -d '{"sessionId": "round2-abcdef4", "lessonId": 14, "lessonStage": 1}'
curl -k -X POST https://ptr.labs.networkreliability.engineering/syringe/exp/livelesson \
    -d '{"sessionId": "round2-abcdefn", "lessonId": 14, "lessonStage": 1}'
curl -k -X POST https://ptr.labs.networkreliability.engineering/syringe/exp/livelesson \
    -d '{"sessionId": "round2-abcdefs", "lessonId": 14, "lessonStage": 1}'