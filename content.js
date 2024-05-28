const newProfilePicURL =
  "https://i.pinimg.com/736x/32/7e/db/327edb9a15b304efc264668ada03f725.jpg";

function isProfilePicture(img) {
  const width = img.width;
  const height = img.height;
  const altText = img.alt;

  const isProfilePicSize =
    (width === 48 && height === 48) || (width === 100 && height === 100);
  const hasProfilePicAlt = altText && altText.toLowerCase().includes("profile");

  return isProfilePicSize || hasProfilePicAlt;
}

function replaceProfilePictures() {
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
