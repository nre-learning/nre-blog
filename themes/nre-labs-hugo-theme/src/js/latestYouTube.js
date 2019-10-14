async function initLatestYouTube(el, channelId, count) {
  const url = `https://www.youtube.com/feeds/videos.xml?channel_id=${channelId}`;
  const feed = await feednami.load(url);

  feed.entries.slice(0, count).forEach((entry) => {
    const entryEl = document.createElement('div');
    const iframeEl = document.createElement('iframe');
    const titleEl = document.createElement('h3');
    const videoId = entry.guid.split(':').pop();

    iframeEl.classList.add('video-embed');
    iframeEl.setAttribute('src', `https://www.youtube.com/embed/${videoId}`);
    iframeEl.setAttribute('frameborder', '0');
    iframeEl.setAttribute('allowfullscreen', '');

    titleEl.innerText = entry.title;

    entryEl.appendChild(iframeEl);
    entryEl.appendChild(titleEl);

    el.appendChild(entryEl);
  })
}

const containers = document.querySelectorAll('.latest-youtube');

containers.forEach(async (container) => {
  await initLatestYouTube(
    container,
    container.dataset.channelid,
    container.dataset.count
  );
  container.classList.remove('loading');
  container.removeChild(container.querySelector('.spinner'));
});