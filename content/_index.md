---
menu: 
    main:
        name: "Home"
        weight: 1
sitemap:
  changefreq: monthly
  priority: 1.0
---

{{< hero >}}
{{< left >}}
# Automation. Unshackled.

### Learn automation by doing it. Right now, right here, in your browser.

NRE Labs is an open source educational project focused on making network automation and the emerging discipline of network reliability engineering (NRE) accessible for everyone. Through short, simple exercises, all right here in your browser, you can learn the tools, skills, and processes that will put you on the path to becoming a Network Reliability Engineer.
<!-- This was placed here because of the removal of the advisor, so we still have a central component that draws user to the curriculum. Should probably be removed when the below issue regarding the advisor is fixed. -->
<a class="btn secondary" href="https://go.nrelabs.io/catalog/" style="margin-top: 10px;">
  Find Lesson Content
</a>
{{< /left >}}

{{< right>}}
{{< youtube GtwFXqBZ0VU "unconstrained" >}}
{{< /right >}}
{{< /hero >}}

<!-- Please see https://github.com/nre-learning/nre-blog/issues/61 for history on why this is commented out -->
<!-- {{< advisor >}} -->

{{< three-col >}}
{{< canister color="primary" >}}   
### Not just for experts.
NRE Labs assumes nothing about your background or training. You don’t have to set anything up, and lessons span from fundamentals to workflows.
{{< /canister >}}

{{< canister color="primary" >}}
### User-centric. No strings.
This is an educational platform aimed at helping industry adopt automation more readily. So, there are no paywalls, no tracking, no spam.   
{{< /canister >}}

{{< canister color="primary" >}}
### Open. Yours to shape.
NRE Labs is built on Antidote, an open source project published on [GitHub](https://github.com/nre-learning) under an Apache v2 license. The curriculum itself is published under Creative Commons. Anyone can join the developer community!   
{{< /canister >}}
{{< /three-col >}}

<script>
  // redirect to admin interface after netlify identity login
  if (window.netlifyIdentity) {
    window.netlifyIdentity.on("init", user => {
      if (!user) {
        window.netlifyIdentity.on("login", () => {
          document.location.href = "/admin/";
        });
      }
    });
  }
</script>
