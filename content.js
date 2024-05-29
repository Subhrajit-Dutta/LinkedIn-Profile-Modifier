const unsplashApiUrl = 'https://api.unsplash.com/photos/random?client_id=KweZ84B-zgusF5_8uYMAkxSjKHGltAY93EgvjQ_tVdw';

async function fetchNewProfilePicURL() {
  try {
    const response = await fetch(unsplashApiUrl);
    if (!response.ok) {
      throw new Error('Failed to fetch image from Unsplash');
    }
    const data = await response.json();
    return data.urls.small;
  } catch (error) {
    console.error('Error fetching new profile picture URL:', error);
    return null;
  }
}

function isProfilePicture(img) {
  const width = img.width;
  const height = img.height;
  const altText = img.alt;

  const isProfilePicSize =
    (width === 48 && height === 48) || (width === 100 && height === 100);
  const hasProfilePicAlt = altText && altText.toLowerCase().includes("profile");

  return isProfilePicSize || hasProfilePicAlt;
}

async function replaceProfilePictures() {
  const newProfilePicURL = await fetchNewProfilePicURL();
  if (!newProfilePicURL) {
    console.error('No new profile picture URL available.');
    return;
  }

  const profilePicSelectors = [
    "img.ivm-view-attr__img--centered.EntityPhoto-circle-3.update-components-actor__avatar-image",
    "img.ivm-view-attr__img--centered.EntityPhoto-circle-0.evi-image.lazy-image.ember-view",
    "img.avatar.member.EntityPhoto-circle-2.evi-image.ember-view",
    "img.avatar.member.EntityPhoto-circle-1.evi-image.ember-view",
  ];

  profilePicSelectors.forEach((selector) => {
    const profilePictures = document.querySelectorAll(selector);
    profilePictures.forEach((img) => {
      img.src = newProfilePicURL;
    });
  });

  const allImages = document.querySelectorAll("img");
  allImages.forEach((img) => {
    if (isProfilePicture(img)) {
      img.src = newProfilePicURL;
    }
  });
}

const observer = new MutationObserver(replaceProfilePictures);
observer.observe(document.body, { childList: true, subtree: true });

replaceProfilePictures();
