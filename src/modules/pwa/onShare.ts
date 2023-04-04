export const onShare = async () => {
 const title = document.title;
 const url = document.querySelector("link[rel=canonical]")
  ? //@ts-ignore
    document.querySelector("link[rel=canonical]").href
  : document.location.href;
 const text = "Страница из https://v2-triton-preview.vercel.app";

 if (navigator.share) {
  try {
   await navigator.share({
    title,
    url,
    text,
   });
   /*Show a message if the user share something*/
   // alert(`Thanks for Sharing!`);
  } catch (err) {
   console.log(`Отмена: ${err}`);
  }
 } else {
  alert(`Не поддерживается для WEB версии, установите приложение`);
 }
};
