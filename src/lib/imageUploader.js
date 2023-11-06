export const imageUploader = (e) => {
  const file = e.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onloadend = () => {
      const base64String = reader.result.split(",")[1];
      localStorage.setItem("savedImage", base64String);
      setImage(`data:image/png;base64,${base64String}`);
    };
    reader.readAsDataURL(file);
  }
};
