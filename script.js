const containerVideos = document.querySelector(".videos__container");

testVideos.forEach((video) => {
  const videoElement = document.createElement("video");
  videoElement.src = video.url;
  videoElement.controls = true;
  videoElement.classList.add("video__item");

  const titleElement = document.createElement("h3");
  titleElement.textContent = video.title;
  titleElement.classList.add("video__title");

  const descriptionElement = document.createElement("p");
  descriptionElement.textContent = video.description;
  descriptionElement.classList.add("video__description");

  const videoContainer = document.createElement("div");
  videoContainer.classList.add("video__container");
  videoContainer.appendChild(videoElement);
  videoContainer.appendChild(titleElement);
  videoContainer.appendChild(descriptionElement);

  containerVideos.appendChild(videoContainer);
}