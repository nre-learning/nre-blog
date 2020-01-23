---
menu: 
    main:
        name: "Home"
        weight: 1
---

{{< hero >}}
{{< left >}}
# Automation. Unshackled

### Learn automation by doing it. Right now, right here, in your browser.

NRE Labs is an open source educational project focused on making network automation and the emerging discipline of network reliability engineering (NRE) accessible for everyone. Through short, simple exercises, all right here in your browser, you can learn the tools, skills, and processes that will put you on the path to becoming a Network Reliability Engineer.
{{< /left >}}

{{< right>}}
{{< youtube YhbWBX71yGQ "unconstrained" >}}
{{< /right >}}
{{< /hero >}}

{{< advisor >}}

{{< promotedlessons >}}

{{< three-col >}}
{{< canister color="primary" >}}   
### Not just for experts.
NRE Labs assumes nothing about your background or training. You don’t have to set anything up, and lessons span from fundamentals to workflows.
{{< /canister >}}

{{< canister color="primary" >}}
### User-centric. No strings.
This is an educational platform aimed at helping industry adopt automation more readily. So no paywalls, no tracking, no spam.   
{{< /canister >}}

{{< canister color="primary" >}}
### Open. Yours to shape.
NRE Labs is built on Antidote, an open source project published on [GitHub](https://github.com/nre-learning/antidote) under an Apache v2 license.  Curriculum is published under Creative Commons. Anyone can join the developer community!   
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